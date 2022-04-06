// This file is identical to ./Cover.js.
// It is only duplicated to force code splitting in this demo.

import { VeryHeavyComponent } from "../components/VeryHeavyComponent";

const CoverSlice = () => {
  return (
    <section className="bg-slate-900 px-6 py-28 text-slate-300 md:px-10">
      <div className="mx-auto grid w-full max-w-5xl justify-center gap-6 text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-slate-500">
          Slices / Cover
        </p>
        <h1 className="text-6xl font-semibold text-white">Cover Slice</h1>
        <p className="max-w-prose">
          This Slice can be used as a Hero Section or a CTA section. Editors can
          customize the copy, add multiple buttons, and optionally add a
          background image. This slice is used as the intro on all pages in this
          demo.
        </p>
      </div>
      <VeryHeavyComponent />
    </section>
  );
};

export default CoverSlice;
