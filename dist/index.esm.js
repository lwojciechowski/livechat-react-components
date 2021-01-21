import { css, jsx } from '@emotion/core';
import { Loader } from '@livechat/design-system';

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

export { Loading };
