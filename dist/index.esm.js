import { css, jsx } from '@emotion/core';
import { Loader } from '@livechat/design-system';
import React, { useState, useRef, useEffect } from 'react';
import { accountsSdk } from '@livechat/accounts-sdk';

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  display: flex;\n  width: 100vw;\n  height: 100vh;\n  justify-content: center;\n  align-items: center;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}
var containerCss = css(_templateObject());

var Loading = function Loading() {
  return jsx("div", {
    css: containerCss
  }, jsx(Loader, {
    size: "large"
  }));
};

function _templateObject$1() {
  var data = _taggedTemplateLiteral(["\n  color: #5a6976;\n  display: inline-block;\n  font-size: 16px;\n  line-height: 1.5;\n  font-family: \"Lato\", sans-serif;\n  font-weight: 400;\n  text-decoration: none;\n  border: 1px solid #ddd;\n  border-radius: 3px;\n  padding: 8px 24px 9px;\n  cursor: pointer;\n  &:hover {\n    border-color: #888;\n    color: #5a6976;\n  }\n  > span {\n    color: #f56e21;\n  }\n"]);

  _templateObject$1 = function _templateObject() {
    return data;
  };

  return data;
}
var linkCss = css(_templateObject$1());

var LogInWithLiveChat = function LogInWithLiveChat(props) {
  return jsx("a", _extends({
    css: linkCss
  }, props), "Sign in with Live", jsx("span", null, "Chat"));
};

var Auth = function Auth(_ref) {
  var children = _ref.children,
      signIn = _ref.signIn,
      clientId = _ref.clientId;

  var _useState = useState(true),
      _useState2 = _slicedToArray(_useState, 2),
      loading = _useState2[0],
      setLoading = _useState2[1];

  var _useState3 = useState(null),
      _useState4 = _slicedToArray(_useState3, 2),
      auth = _useState4[0],
      setAuth = _useState4[1];

  var authInstance = useRef(null);
  useEffect(function () {
    authInstance.current = accountsSdk.init({
      client_id: clientId,
      onIdentityFetched: function onIdentityFetched(error, data) {
        setLoading(false);

        if (data) {
          setAuth(data);
          authRef.token = data.access_token;
        }

        if (error) {
          console.error(error);
        }
      }
    });
  }, [clientId]);

  if (loading) {
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Loading, null));
  }

  return /*#__PURE__*/React.createElement(AuthContext.Provider, {
    value: auth
  }, auth !== null ? children : signIn(authInstance));
};

var AuthContext = /*#__PURE__*/React.createContext(null);

export { Auth, AuthContext, Loading, LogInWithLiveChat as LoginWithLivechat };
