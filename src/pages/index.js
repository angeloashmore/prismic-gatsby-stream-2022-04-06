import * as React from "react";
import Slice2 from "../slices/Slice2";

const Slice1 = React.lazy(() => import("../slices/Slice1"));
const Slice3 = React.lazy(() => import("../slices/Slice3"));

const IndexPage = () => {
  return (
    <div>
      <Slice1 />
      <Slice2 />
      <Slice3 />
    </div>
  );
};

export default IndexPage;
