/**@jsx jsx */
import { css, jsx } from "@emotion/react";

const containerCss = css`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
`;

const Centered = ({children}) => {
  return (
    <div css={containerCss}>
      {children}
    </div>
  );
};

export default Centered;

