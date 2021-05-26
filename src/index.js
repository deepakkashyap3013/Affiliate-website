import React from "react";
import ReactDom from "react-dom";
import ReactRouter from "./Routers";
import "./css/styles.css";

const Index = () => {
  return (
    <React.Fragment>
      {/* <App /> */}
      <ReactRouter></ReactRouter>
    </React.Fragment>
  );
};
ReactDom.render(<Index />, document.getElementById("root"));
