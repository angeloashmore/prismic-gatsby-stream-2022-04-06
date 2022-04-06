import { VeryHeavyComponent } from "../components/VeryHeavyComponent";

const Number = ({ number, label }) => {
  return (
    <li className="grid gap-3">
      <p className="text-8xl font-semibold text-white">{number}</p>
      <p className="font-semibold text-slate-500">{label}</p>
    </li>
  );
};

const NumbersSlice = () => {
  return (
    <section className="bg-slate-900 px-6 py-28 text-slate-300 md:px-10">
      <div className="mx-auto grid w-full max-w-5xl gap-6">
        <p className="text-sm font-semibold uppercase tracking-widest text-slate-500">
          Side / Secondary
        </p>
        <div className="grid grid-cols-1 items-start gap-12 md:grid-cols-3">
          <div className="grid gap-6">
            <h1 className="text-4xl font-semibold text-white">
              Some important number on the side
            </h1>
            <p className="max-w-prose">
              This Slice can be used as a Hero Section or a CTA section. Editors
              can customize the copy, add multiple buttons, and optionally add a
              background image. This slice is used as the intro on all pages in
              this demo.
            </p>
          </div>
          <ul className="col-span-2 grid grid-cols-2 gap-6">
            <Number number="95K" label="Monthly visitors" />
            <Number number="29" label="New employees" />
            <Number number="578" label="Tickets closed" />
            <Number number="12K" label="API requests" />
          </ul>
        </div>
      </div>
      <VeryHeavyComponent />
    </section>
  );
};

export default NumbersSlice;
