import { Link } from "gatsby";
import { SliceZone } from "@prismicio/react";

import { Layout } from "../components/Layout";
import Cover from "../slices/Cover";
import Features from "../slices/Features";
import Numbers from "../slices/Numbers";

const components = {
  cover: Cover,
  features: Features,
  numbers: Numbers,
};

const IndexPage = () => {
  return (
    <Layout>
      <div className="bg-red-800 p-4 text-sm font-bold text-white">
        This page uses 👹 eager components
        <Link to="/" className="ml-3 font-normal text-white/60">
          See the lazy version &rarr;
        </Link>
      </div>
      <SliceZone
        slices={[
          // { slice_type: "cover" },
          { slice_type: "features" },
          { slice_type: "numbers" },
        ]}
        components={components}
      />
    </Layout>
  );
};

export default IndexPage;
