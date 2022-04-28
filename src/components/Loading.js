import React from "react";
import { Loader } from "@livechat/design-system";

import Centered from "./Centered";

const Loading = () => {
  return (
    <Centered>
      <Loader size="large" />
    </Centered>
  );
};

export default Loading;

