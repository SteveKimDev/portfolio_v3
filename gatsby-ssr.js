import * as React from "react";

export const onRenderBody = ({ setPostBodyComponents, setHeadComponents }) => {
  setPostBodyComponents([
    <script
      key="1"
      type="text/javascript"
      src="https://cdn.jsdelivr.net/npm/react/umd/react.production.min.js"
      crossOrigin="anonymous"
    />,
  ]);
  setPostBodyComponents([
    <script
      key="2"
      type="text/javascript"
      src="https://cdn.jsdelivr.net/npm/react-dom/umd/react-dom.production.min.js"
      crossOrigin="anonymous"
    />,
  ]);
  setPostBodyComponents([
    <script
      key="3"
      type="text/javascript"
      src="https://cdn.jsdelivr.net/npm/react-bootstrap@next/dist/react-bootstrap.min.js"
      crossOrigin="anonymous"
    />,
  ]);
};
