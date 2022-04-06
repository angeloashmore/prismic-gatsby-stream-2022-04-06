import * as React from "react";
import { Link } from "gatsby";
import { SliceZone } from "@prismicio/react";

import { Layout } from "../components/Layout";

const components = {
  cover: React.lazy(() => import("../slices/Cover")),
  features: React.lazy(() => import("../slices/Features")),
  numbers: React.lazy(() => import("../slices/Numbers")),
};

const IndexPage = () => {
  return (
    <Layout>
      <div className="bg-green-800 p-4 text-sm font-bold text-white">
        This page uses 😴 lazy components
        <Link to="/eager" className="ml-3 font-normal text-white/60">
          See the eager version &rarr;
        </Link>
      </div>
      <SliceZone
        slices={[
          { slice_type: "cover" },
          // { slice_type: "features" },
          // { slice_type: "numbers" },
        ]}
        components={components}
      />
    </Layout>
  );
};

export default IndexPage;
