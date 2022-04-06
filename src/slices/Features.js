import { ReactComponent as Figure3DSVG } from "../assets/figure-3d.svg";
import { ReactComponent as FigureCPUSVG } from "../assets/figure-cpu.svg";
import { ReactComponent as FigureClickSVG } from "../assets/figure-click.svg";
import { ReactComponent as FigureFingerprintSVG } from "../assets/figure-fingerprint.svg";

import { VeryHeavyComponent } from "../components/VeryHeavyComponent";

const Card = ({ title, description, icon: Icon }) => {
  return (
    <li className="grid justify-items-center gap-6 text-center">
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-slate-200 text-slate-500">
        <Icon className="h-7 w-7" />
      </div>
      <h3 className="text-2xl font-semibold text-slate-800">{title}</h3>
      <p>{description}</p>
    </li>
  );
};

const FeaturesSlice = () => {
  return (
    <section className="bg-white px-6 py-28 text-slate-500 md:px-10">
      <div className="mx-auto grid w-full max-w-5xl justify-center gap-6">
        <p className="text-center text-sm font-semibold uppercase tracking-widest text-slate-300">
          Centered
        </p>
        <h2 className="text-center text-4xl font-semibold text-slate-800">
          Centered features with links
        </h2>
        <ul className="mt-8 grid grid-cols-1 gap-12 md:grid-cols-3">
          <Card
            title="Slices"
            description="Slices are website sections that you’d build as React components."
            icon={FigureClickSVG}
          />
          <Card
            title="Slices"
            description="Slices are website sections that you’d build as React components."
            icon={Figure3DSVG}
          />
          <Card
            title="Slices"
            description="Slices are website sections that you’d build as React components."
            icon={FigureFingerprintSVG}
          />
          <Card
            title="Slices"
            description="Slices are website sections that you’d build as React components."
            icon={FigureCPUSVG}
          />
        </ul>
      </div>
      <VeryHeavyComponent />
    </section>
  );
};

export default FeaturesSlice;
