// This file is identical to ./Features.js.
// It is only duplicated to force code splitting in this demo.

import { ReactComponent as Figure3DSVG } from "../assets/figure-3d.svg";
import { ReactComponent as FigureCPUSVG } from "../assets/figure-cpu.svg";
import { ReactComponent as FigureClickSVG } from "../assets/figure-click.svg";
import { ReactComponent as FigureFingerprintSVG } from "../assets/figure-fingerprint.svg";

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
      {/* The following div is used to increase the size of this component. */}
      {/* It simulates a more complex code base. */}
      <div className="hidden">
        <svg xmlns="http://www.w3.org/2000/svg" width={693} height={528}>
          <circle cx={561.199} cy={146.514} r={47} fill="#ff6584" />
          <path
            d="M423.199 338.924c0 124.17-79.503 153.576-190.578 153.576S89.266 489.572 89.266 365.403-54.697 25.513 56.378 25.513 423.2 214.757 423.2 338.925Z"
            fill="#f2f2f2"
          />
          <path
            d="M547.672 467.204H178.947c-14.688 0-26.638-11.95-26.638-26.637V161.841c0-14.688 11.95-26.638 26.638-26.638h368.725c14.688 0 26.637 11.95 26.637 26.638v278.725c0 14.687-11.95 26.637-26.637 26.637Zm-368.725-330c-13.586 0-24.638 11.052-24.638 24.638v278.725c0 13.585 11.052 24.637 24.638 24.637h368.725c13.585 0 24.637-11.052 24.637-24.637V161.842c0-13.586-11.052-24.638-24.637-24.638H178.947Z"
            fill="#3f3d56"
          />
          <ellipse
            cx={289.448}
            cy={446.65}
            rx={7.557}
            ry={1.226}
            transform="rotate(-1.469 289.447 446.649)"
            fill="#e6e6e6"
          />
          <ellipse
            cx={337.33}
            cy={442.662}
            rx={7.557}
            ry={1.226}
            transform="rotate(-1.469 337.33 442.661)"
            fill="#3f3d56"
          />
          <ellipse
            cx={270.174}
            cy={438.404}
            rx={7.557}
            ry={1.226}
            transform="rotate(-1.469 270.174 438.403)"
            fill="#ff6584"
          />
          <ellipse
            cx={250.879}
            cy={435.957}
            rx={1.102}
            ry={3.357}
            transform="rotate(-89.351 250.88 435.957)"
            fill="#e6e6e6"
          />
          <ellipse
            cx={239.167}
            cy={429.487}
            rx={1.102}
            ry={3.357}
            transform="rotate(-89.351 239.167 429.487)"
            fill="#3f3d56"
          />
          <ellipse
            cx={302.868}
            cy={438.304}
            rx={1.102}
            ry={3.357}
            transform="rotate(-89.351 302.868 438.304)"
            fill="#e6e6e6"
          />
          <ellipse
            cx={281.159}
            cy={442.398}
            rx={1.102}
            ry={3.357}
            transform="rotate(-89.351 281.16 442.398)"
            fill="#ff6584"
          />
          <ellipse
            cx={317.139}
            cy={445.428}
            rx={1.102}
            ry={3.357}
            transform="rotate(-89.351 317.139 445.428)"
            fill="#3f3d56"
          />
          <ellipse
            cx={440.448}
            cy={444.65}
            rx={7.557}
            ry={1.226}
            transform="rotate(-1.469 440.447 444.649)"
            fill="#e6e6e6"
          />
          <ellipse
            cx={488.33}
            cy={440.662}
            rx={7.557}
            ry={1.226}
            transform="rotate(-1.469 488.329 440.66)"
            fill="#3f3d56"
          />
          <ellipse
            cx={421.174}
            cy={436.404}
            rx={7.557}
            ry={1.226}
            transform="rotate(-1.469 421.173 436.403)"
            fill="#ff6584"
          />
          <ellipse
            cx={401.879}
            cy={433.957}
            rx={1.102}
            ry={3.357}
            transform="rotate(-89.351 401.88 433.957)"
            fill="#e6e6e6"
          />
          <ellipse
            cx={390.167}
            cy={427.487}
            rx={1.102}
            ry={3.357}
            transform="rotate(-89.351 390.167 427.487)"
            fill="#3f3d56"
          />
          <ellipse
            cx={453.868}
            cy={436.304}
            rx={1.102}
            ry={3.357}
            transform="rotate(-89.351 453.868 436.304)"
            fill="#e6e6e6"
          />
          <ellipse
            cx={432.159}
            cy={440.398}
            rx={1.102}
            ry={3.357}
            transform="rotate(-89.351 432.16 440.398)"
            fill="#ff6584"
          />
          <ellipse
            cx={468.139}
            cy={443.428}
            rx={1.102}
            ry={3.357}
            transform="rotate(-89.351 468.139 443.428)"
            fill="#3f3d56"
          />
          <path
            d="M253.46 390.582c-2.555.16-3.968-3.016-2.034-4.866l.192-.765-.076-.184c-2.585-6.163-11.345-6.12-13.907.052-2.275 5.478-5.17 10.966-5.884 16.758a22.304 22.304 0 0 0 .392 7.67c-5.33-11.642-8.134-24.354-8.134-37.138 0-3.213.176-6.425.535-9.629.296-2.62.703-5.225 1.23-7.806 2.853-13.951 9.03-27.24 17.939-38.338 4.283-2.34 7.854-6 10.012-10.387.775-1.582 1.382-3.284 1.67-5.018-.488.064-1.838-7.359-1.47-7.814-.68-1.031-1.895-1.543-2.637-2.55-3.69-5.001-8.773-4.128-11.426 2.67-5.67 2.86-5.724 7.605-2.246 12.169 2.213 2.903 2.517 6.831 4.459 9.94-.2.255-.408.503-.607.759a91.04 91.04 0 0 0-9.503 15.054c.755-5.897-.36-13-2.26-17.58-2.162-5.216-6.215-9.61-9.785-14.12-4.288-5.418-13.08-3.054-13.836 3.814l-.021.2c.53.298 1.05.616 1.557.952 2.894 1.914 1.894 6.4-1.536 6.93l-.077.011c.192 1.91.52 3.804.999 5.666-4.58 17.71 5.307 24.16 19.424 24.45.312.16.615.32.927.471a90.541 90.541 0 0 0-3.42 12.345 91.37 91.37 0 0 0-1.582 11.195c-.368 4.738-.336 9.5.064 14.23l-.024-.168c-1.015-5.21-3.843-10.075-7.95-13.447-6.119-5.026-14.763-6.877-21.363-10.917-3.177-1.944-7.249.569-6.694 4.252l.027.177c.982.4 1.941.863 2.868 1.382.53.3 1.05.617 1.557.952 2.894 1.915 1.894 6.401-1.535 6.93l-.078.012-.16.024c1.686 4.004 4.035 7.719 6.976 10.923 2.863 15.46 15.162 16.927 28.317 12.425h.008a92.897 92.897 0 0 0 6.24 18.218h22.294c.08-.248.152-.504.223-.751a25.329 25.329 0 0 1-6.168-.368c1.654-2.03 3.308-4.075 4.962-6.104.04-.04.072-.08.104-.12.839-1.039 1.686-2.07 2.525-3.108v-.002a37.101 37.101 0 0 0-1.087-9.451ZM472.938 390.582c2.555.16 3.968-3.016 2.034-4.866l-.192-.765.076-.184c2.585-6.163 11.345-6.12 13.907.052 2.275 5.478 5.17 10.966 5.884 16.758.32 2.557.175 5.161-.392 7.67 5.33-11.642 8.134-24.354 8.134-37.138 0-3.213-.176-6.425-.535-9.629a88.583 88.583 0 0 0-1.23-7.806c-2.853-13.951-9.03-27.24-17.939-38.338-4.283-2.34-7.854-6-10.012-10.387-.775-1.582-1.382-3.284-1.67-5.018.488.064 1.838-7.359 1.47-7.814.68-1.031 1.896-1.543 2.637-2.55 3.69-5.001 8.773-4.128 11.426 2.67 5.67 2.86 5.724 7.605 2.246 12.169-2.213 2.903-2.517 6.831-4.459 9.94.2.255.408.503.607.759a91.04 91.04 0 0 1 9.503 15.054c-.755-5.897.36-13 2.26-17.58 2.162-5.216 6.215-9.61 9.785-14.12 4.288-5.418 13.08-3.054 13.836 3.814l.021.2c-.53.298-1.05.616-1.557.952-2.894 1.914-1.894 6.4 1.536 6.93l.077.011a37.89 37.89 0 0 1-.999 5.666c4.58 17.71-5.307 24.16-19.424 24.45-.312.16-.615.32-.927.471a90.541 90.541 0 0 1 3.42 12.345 91.37 91.37 0 0 1 1.582 11.195c.368 4.738.336 9.5-.064 14.23l.024-.168c1.015-5.21 3.843-10.075 7.95-13.447 6.119-5.026 14.763-6.877 21.363-10.917 3.177-1.944 7.249.569 6.694 4.252l-.027.177c-.982.4-1.941.863-2.868 1.382-.53.3-1.05.617-1.557.952-2.894 1.915-1.894 6.401 1.535 6.93l.078.012.16.024c-1.686 4.004-4.035 7.719-6.976 10.923-2.863 15.46-15.162 16.927-28.317 12.425h-.008a92.897 92.897 0 0 1-6.24 18.218h-22.294c-.08-.248-.151-.504-.223-.751 2.061.128 4.139.008 6.168-.368-1.654-2.03-3.308-4.075-4.962-6.104-.04-.04-.072-.08-.104-.12-.839-1.039-1.686-2.07-2.525-3.108v-.002a37.101 37.101 0 0 1 1.087-9.451Z"
            fill="#6c63ff"
          />
          <path
            d="M41.872 410.606c0 .66.53 1.19 1.19 1.19h635.29c.66 0 1.19-.53 1.19-1.19 0-.66-.53-1.19-1.19-1.19H43.062c-.66 0-1.19.53-1.19 1.19Z"
            fill="#3f3d56"
          />
          <path
            d="M89.955 87h-27c-2.757 0-5-2.243-5-5s2.243-5 5-5h27c2.756 0 5 2.243 5 5s-2.244 5-5 5Z"
            fill="#e6e6e6"
          />
          <g fill="#e6e6e6">
            <circle cx={509.5} cy={81.5} r={4.5} />
            <circle cx={523.5} cy={81.5} r={4.5} />
            <circle cx={537.5} cy={81.5} r={4.5} />
          </g>
          <path
            d="M693 283.5v221.81c0 12.51-10.18 22.69-22.69 22.69H500.17l1.58-2L691 286.04l2-2.54Z"
            fill="#f2f2f2"
          />
          <path
            d="M670.31 0H22.69C10.18 0 0 10.18 0 22.69v482.62C0 517.82 10.18 528 22.69 528h647.62c12.51 0 22.69-10.18 22.69-22.69V22.69C693 10.18 682.82 0 670.31 0ZM691 505.31c0 11.427-9.263 20.69-20.69 20.69H22.69C11.263 526 2 516.737 2 505.31V157.676C2 71.698 71.698 2 157.676 2H670.31C681.737 2 691 11.263 691 22.69v482.62Z"
            fill="#e6e6e6"
          />
          <path
            d="m398.383 272.842-3.056-47.337a7.657 7.657 0 1 0-15.254 1.316l4.682 49.074 1.588 29.94a6.677 6.677 0 1 0 9.595 5.656 6.64 6.64 0 0 0-1.274-3.584l3.72-35.065Z"
            fill="#ffb6b6"
          />
          <path
            d="M400.3 268.919c.703-.743.768-1.846.247-2.726a2.929 2.929 0 0 1-.41-1.74c.01-.117.029-28.234.054-28.348.32-1.423.02-2.886-.952-3.972-1.561-1.744-2.382-4.439-2.782-6.853-.437-2.643-.739-5.348-1.796-7.809-1.526-3.549-4.977-6.637-9.475-4.938-1.907.721-3.465 2.156-4.485 3.922-2.14 3.702-2.007 8.08-1.84 12.268l-.876-1.625a33.998 33.998 0 0 1-1.95 13.455c1.008-.234 1.775 29.104 1.482 30.096-.293.992-1.176 1.669-1.929 2.379-.948.895-1.827 2.205-.86 3.485.464.616 1.206.966 1.974 1.038a52.609 52.609 0 0 0 21.395-2.424c1.53-.506 3.164-1.19 3.919-2.614.754-1.424-.107-3.675-1.716-3.594Z"
            fill="#6c63ff"
          />
          <path
            fill="#ffb6b6"
            d="m332.877 445.665-6.799 2.664-13.737-25.535 10.032-3.932 10.504 26.803z"
          />
          <path
            d="M315.503 465.153a3.268 3.268 0 0 0 4.23 1.85l13.515-5.298.438-5.726 2.796 4.456 5.1-1.995-8.165-16.619-1.815.593-7.412 2.399-2.39.779 1.907 4.864-7.873 11.685a3.263 3.263 0 0 0-.331 3.012Z"
            fill="#2f2e41"
          />
          <path
            fill="#ffb6b6"
            d="m402.244 510.517-7.3.15-4.069-28.708 10.773-.224.596 28.782z"
          />
          <path
            d="M379.207 522.802a3.268 3.268 0 0 0 3.33 3.197l14.513-.301 2.39-5.223 1.084 5.148 5.476-.11-1.92-18.417-1.909-.07-7.784-.31-2.511-.095.108 5.224-11.425 8.245a3.263 3.263 0 0 0-1.352 2.712ZM343.134 272.274l48.006 8.384-1.806 9.033s3.01 3.788 1.806 5.206c-1.204 1.418-3.613-.99-1.204 1.418s3.18 3.058-.432 6.67 2.21-2.16 2.21-2.16.276 6.65 1.676 8.736c9.687 14.435 7.088 27.345 2.136 44.01-2.803 9.43 2.974 27.607 2.974 30.929l-.566 23.269s12.647 51.187 6.022 75.275l.936 9.265-15.388.37-18.067-72.264s-2.83-7.242-2.92-9.944c-.09-2.702-.09-.293-.09-2.702s-.603-4.818-.603-5.42c0-.602-4.817-59.49-4.817-59.49s-17.672 9.75-19.479 11.556c-1.806 1.807-5.024.154-5 2s-1.658 2.518-3 4c-1.342 1.483-3.554-1.508-2.35 2.708 1.204 4.215-15.989 10.624-17.796 12.43-1.806 1.807 14.146 14.862 12.146 39.862l-1 10-13 6-27.763-51.722a17.582 17.582 0 0 1 2.511-18.724l39.252-46.554s4.766-22.871 8.982-25.28l6.624-16.862Z"
            fill="#2f2e41"
          />
          <path
            d="M388.648 275.574c.422-1.801-3.059-14.182-1.577-18.56.97-2.867 3.3-4.98 3.27-8.395 0-.223-.012-.452-.043-.686-.012-.122-.037-.246-.055-.37 3.015-10.734 4.523-30.692 4.523-30.692l-14.423-17.2c-.01-.074-.021-.146-.03-.222-.294-2.541-2.436-.697-4.785-2.034-1.048-.59-.501-5.415-1.712-5.084-.041.012-.079.028-.12.041l-.037-.04-2.379-2.56-13.088-1.204-3.041 4.149-.002.03c-2.591.48-3.257.764-3.653 3.637-.072.542-.12 1.084-.138 1.632-.09 2.05-10.803 4.105-10.312 6.054l-3.518 2.345s-13.22 16.478-8.402 21.296c1.83 1.83 2.788 4.871 3.18 8.177.013.112.037.213.057.318-.552 1.773-1.322 4.784-.063 5.434 2.242 1.156 7.071 34.808 1.97 37.21-12.086 5.688 20.336 16.891 33.235 17.572 3.782.198 8.292-.018 11.906-1.03l12.117 1.023-1-6c8.684-.74-2.313-12.975-1.88-14.841Z"
            fill="#6c63ff"
          />
          <path
            d="m285.48 184.36 35.335 30.413a7.861 7.861 0 1 0 12.306-9.781l-37.711-30.976-12.485-33.08a6.855 6.855 0 1 0-11.42.605 6.817 6.817 0 0 0 3.124 2.344l10.852 40.476Z"
            fill="#ffb6b6"
          />
          <path
            d="M286.004 189.432c-.18 1.035 23.39 20.016 24.335 20.473.56.271 1.041.707 1.338 1.255.058.107.108.217.152.33.534 1.399 1.62 2.481 3.068 2.859 2.325.606 4.557 2.447 6.269 4.286 1.874 2.012 3.666 4.156 5.967 5.662 3.32 2.171 8.025 2.856 10.91-1.15 1.223-1.7 1.742-3.812 1.613-5.901-.27-4.382-2.867-8.054-5.387-11.542l1.672.894c-2.81-3.748-8.076-4.706-9.188-9.257-.73.772-2.145.062-2.457-.953-.312-1.015-22.94-20.096-22.7-21.13.304-1.304.313-2.923-1.24-3.47-.747-.264-1.58-.142-2.279.231-6.544 3.502-9.126 5.014-13.71 10.85-1.022 1.302-2.032 2.815-1.87 4.462.162 1.646 2.176 3.083 3.507 2.101Z"
            fill="#6c63ff"
          />
          <circle cx={361.56} cy={168.929} r={20.712} fill="#ffb6b6" />
          <path
            d="M160.952 182.13H53.583c-3.33 0-6.036 2.707-6.036 6.036s2.707 6.036 6.036 6.036h107.37c3.329 0 6.035-2.706 6.035-6.036s-2.706-6.036-6.036-6.036ZM114.158 148.286H53.583c-3.33 0-6.036 2.706-6.036 6.036s2.707 6.036 6.036 6.036h60.575c3.33 0 6.036-2.707 6.036-6.036s-2.707-6.036-6.036-6.036ZM160.952 363.13H53.583c-3.33 0-6.036 2.707-6.036 6.036s2.707 6.036 6.036 6.036h107.37c3.329 0 6.035-2.706 6.035-6.036s-2.706-6.036-6.036-6.036ZM114.158 329.286H53.583c-3.33 0-6.036 2.706-6.036 6.036s2.707 6.036 6.036 6.036h60.575c3.33 0 6.036-2.707 6.036-6.036s-2.707-6.036-6.036-6.036Z"
            fill="#e6e6e6"
          />
          <path
            d="M624.465 509.21c2.066.13 3.207-2.437 1.644-3.933l-.155-.618c.02-.05.04-.099.062-.148 2.089-4.982 9.17-4.948 11.241.042 1.839 4.428 4.18 8.863 4.756 13.545a18.029 18.029 0 0 1-.317 6.2c4.308-9.41 6.575-19.686 6.575-30.02 0-2.596-.142-5.193-.432-7.783a71.607 71.607 0 0 0-.995-6.31c-2.306-11.277-7.299-22.018-14.5-30.99-3.462-1.892-6.35-4.85-8.093-8.396-.627-1.28-1.117-2.655-1.35-4.056.394.051 1.486-5.95 1.188-6.317.55-.833 1.532-1.248 2.132-2.06 2.982-4.044 7.091-3.338 9.236 2.157 4.582 2.312 4.627 6.148 1.815 9.837-1.789 2.346-2.035 5.522-3.604 8.034.161.207.33.407.49.614a73.591 73.591 0 0 1 7.682 12.169c-.61-4.767.29-10.509 1.826-14.21 1.749-4.217 5.025-7.77 7.91-11.415 3.467-4.38 10.574-2.468 11.185 3.083l.017.161c-.429.242-.848.5-1.259.77-2.339 1.548-1.53 5.174 1.242 5.602l.062.01a30.628 30.628 0 0 1-.807 4.58c3.702 14.315-4.29 19.53-15.702 19.763-.251.13-.497.259-.749.381a73.187 73.187 0 0 1 2.765 9.98 73.856 73.856 0 0 1 1.278 9.048c.298 3.83.272 7.68-.051 11.503l.02-.135c.82-4.211 3.106-8.145 6.426-10.87 4.945-4.063 11.933-5.56 17.268-8.825 2.568-1.572 5.86.46 5.411 3.437l-.022.143c-.794.323-1.57.697-2.318 1.117-.429.242-.849.499-1.259.77-2.34 1.547-1.53 5.174 1.241 5.602l.063.01.13.02a30.655 30.655 0 0 1-5.64 8.828c-2.314 12.497-12.256 13.683-22.89 10.044h-.006a75.092 75.092 0 0 1-5.045 14.726h-18.02c-.064-.2-.123-.407-.18-.607 1.666.103 3.345.006 4.986-.297-1.337-1.64-2.674-3.294-4.011-4.935a1.12 1.12 0 0 1-.084-.097c-.678-.84-1.363-1.672-2.041-2.512v-.001a29.99 29.99 0 0 1 .878-7.64Z"
            fill="#fff"
          />
          <path
            d="M384.83 159.016c2.897-10.562-28.68-19.62-34.816-11.114-.853-1.21-4.006-1.944-5.453-1.573s-2.663 1.298-3.85 2.196c-1.633 1.254-3.325 2.553-4.326 4.355-1.01 1.796-1.165 4.244.193 5.803 1.076 1.239 2.966 7.823 4.583 8.15 1.128.23 2.078.415 2.894.548.727-1.06 2.581-2.393 2.448-3.677 1.098.727.697 2.006.475 3.314-.737 4.353-17.346 38.055-7.833 28.124.942.556 2.107 1.076 3.45 1.55 2.278-3.435 4.147-7.486 5.38-11.722l.008.078c.424 3.682 3.114 6.703 6.674 7.734 14.28 4.137 25.83-1.933 29.803-12.88-1.454-2.953-2.088-2.632-1.958-2.72 1.816-1.224 4.312-.424 5.092 1.622.23.604.44 1.119.62 1.506 2.07-7.405 4.533-6.336-3.384-21.294Z"
            fill="#2f2e41"
          />
          <path
            d="m374.979 151.353-1.459-7.457c-.122-.627-.239-1.307.044-1.88.363-.736 1.297-1.04 2.109-.924.812.118 1.42.86 2.228 1.003 2.81.496 6.524-2.28 7.53 4.742.42 2.927 5.091 3.236 6.651 5.749 1.56 2.512 1.752 6.138-.377 8.19-1.7 1.64-4.431 1.83-6.64.992-2.208-.837-3.98-2.529-5.528-4.312-1.549-1.784-2.95-3.714-4.736-5.26"
            fill="#2f2e41"
          />
          <path
            d="M385.942 162.695c-5.698-.796-9.582-2.869-11.543-6.16-2.568-4.307-.848-9.05-.774-9.25l1.205.448c-.016.044-1.577 4.386.68 8.156 1.754 2.933 5.324 4.795 10.61 5.533l-.178 1.273Z"
            fill="#6c63ff"
          />
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" width={776.057} height={538.35}>
          <path
            d="M292.462 105.107c-5.91-21.55 41.76-40.028 54.279-22.674 1.74-2.467 8.173-3.966 11.125-3.21 2.951.758 5.434 2.65 7.856 4.481 3.33 2.558 6.78 5.207 8.824 8.885 2.059 3.663 2.376 8.658-.394 11.837-2.194 2.527-8.673 4.162-11.972 4.828-2.301.47-4.238.848-5.903 1.12-1.484-2.164-2.24-4.843-1.968-7.462-2.24 1.483-3.754 4.026-3.996 6.72-.046.56 18.602 69.173 18.602 69.173-1.922 1.135-4.298 2.195-7.038 3.163-4.647-7.008-8.461-15.272-10.974-23.915-.575 5.343-.484 11.14.212 17.029a93.694 93.694 0 0 0 1.605 9.43c-22.16 4.782-55.49 3.208-69.99-17.135a77.832 77.832 0 0 1-.008-.252c-.103-3.807-5.297-4.753-6.687-1.208a40.552 40.552 0 0 1-.964 2.293c-4.223-15.106 1.24-32.589 17.391-63.103Z"
            fill="#2f2e41"
          />
          <path
            d="M593.672 275.988c-5.243 6.218-14.534 7.01-20.753 1.766a14.73 14.73 0 0 1-1.676-1.66l-69.98 22.164-10.89-17.85 83.309-25.717c6.536-4.822 15.744-3.433 20.566 3.103a14.707 14.707 0 0 1-.576 18.194Z"
            fill="#ffb6b6"
          />
          <path
            d="M345.842 220.601s30.99-34.857 44.49-20.05c13.499 14.807 55.615 79.692 55.615 79.692l98.314-20.742 9.507 25.945-111.63 36.174a20.983 20.983 0 0 1-23.014-7.056L345.842 220.6Z"
            fill="#6c63ff"
          />
          <path
            d="M413.15 538.35H259.44l-.14-1.2-.09-.8-1.32-11.2-1.87-15.95-.72-6.13c-.05-.31-.1-.61-.14-.92-.63-3.99-.99-8-1.12-12-.19-5.5.06-10.99.65-16.41v-.03c.32-2.93.73-5.83 1.24-8.7.64-3.69 1.41-7.32 2.3-10.87 1.02-4.12 2.18-8.13 3.45-12 1.46-4.53 3.06-8.87 4.71-12.97.18-.44.36-.88.53-1.31l.01-.01c8.7-21.21 18.58-35.7 18.58-35.7h111.98s5.18 22.73 7.75 41.5c.41 2.97.75 5.83 1 8.49.45 4.91.58 9.13.19 12-.24 1.78-.68 3.04-1.36 3.62-6.16 5.26.89 16.42.89 16.42s5.28 8.07.68 12.61c-.91.9-1.43 2.06-1.68 3.36-.4 2.15-.05 4.65.5 6.86.55 2.22 1.31 4.15 1.73 5.14.19.44.31.69.31.69l.78 6.17.76 5.94 1.29 10.2.39 1.8 2.01 9.4.17.8.25 1.2Z"
            fill="#2f2e41"
          />
          <path
            d="m335.508 172.912-46.997 4.186-8.663 26.956-9.44 1.367c-16.13 2.335-25.731 19.254-19.463 34.3l8.306 19.939s-12.2 37.658 2.783 53.48l6.377 69.689-14.384 45.94 168.133 5.428-28.64-57.626-.848-35.78s18.3-64.671 1.333-85.242l-6.62-58.51-34.49-5.173-17.387-18.954Z"
            fill="#6c63ff"
          />
          <circle
            cx={329.504}
            cy={129.561}
            r={38.825}
            transform="rotate(-76.947 329.504 129.56)"
            fill="#ffb6b6"
          />
          <path
            d="M271.271 108.134c-5.91-21.549 41.76-40.027 54.279-22.674 1.74-2.467 8.174-3.966 11.125-3.209 2.952.757 5.434 2.649 7.856 4.48 3.33 2.558 6.78 5.207 8.824 8.885 2.059 3.663 2.377 8.658-.393 11.837-2.195 2.528-8.673 4.162-11.973 4.828-2.3.47-4.238.848-5.903 1.12-1.484-2.164-2.24-4.843-1.968-7.462-2.24 1.484-3.754 4.026-3.996 6.72-.045.56 18.603 69.173 18.603 69.173-1.923 1.136-4.3 2.195-7.039 3.164-4.647-7.008-8.46-15.273-10.974-23.916-.575 5.344-.484 11.14.212 17.029a93.694 93.694 0 0 0 1.605 9.43c-22.16 4.783-55.49 3.209-69.99-17.135a77.832 77.832 0 0 1-.007-.252c-.104-3.807-5.298-4.753-6.687-1.207a40.552 40.552 0 0 1-.965 2.292c-4.223-15.106 1.241-32.588 17.391-63.103Z"
            fill="#2f2e41"
          />
          <path
            d="M603.16 537.15h-522l-81 1 568.062-33.914c18.95-1.131 34.938 13.931 34.938 32.914Z"
            fill="#3f3d56"
          />
          <path fill="#3f3d56" d="M731 536.35v2H0V0h2v536.35h729z" />
          <path
            d="M652.783 124.52H519.73c-3.068 0-5.564-2.488-5.564-5.545s2.496-5.543 5.564-5.543h133.053c3.068 0 5.563 2.486 5.563 5.543s-2.495 5.544-5.563 5.544Z"
            fill="#6c63ff"
          />
          <path
            d="M586.206 142.4c-.497-1.226-2.214-1.226-2.712 0-3.469 8.552-8.407 18.13-13.78 25.448-.86 1.172.326 2.738 1.693 2.243l11.515-4.166v71.285h3.855v-71.285l11.52 4.167c1.367.494 2.552-1.071 1.692-2.243-5.372-7.32-10.311-16.897-13.783-25.45Z"
            fill="#3f3d56"
          />
          <path
            d="M772.627 165.267h-82.03c-1.892 0-3.431-1.533-3.431-3.418s1.539-3.417 3.43-3.417h82.03c1.892 0 3.43 1.532 3.43 3.417s-1.538 3.418-3.43 3.418ZM731.58 176.291a.9.9 0 0 0-1.671 0c-2.14 5.273-5.184 11.178-8.496 15.69-.53.722.2 1.688 1.044 1.383l7.099-2.569v43.949h2.377v-43.949l7.102 2.57c.842.304 1.573-.661 1.043-1.384-3.312-4.512-6.357-10.417-8.497-15.69Z"
            fill="#f2f2f2"
          />
          <circle cx={731.625} cy={259.325} r={17.825} fill="#f2f2f2" />
          <path
            d="M509.627 64.267h-82.03c-1.892 0-3.431-1.533-3.431-3.418s1.539-3.417 3.43-3.417h82.03c1.892 0 3.43 1.532 3.43 3.417s-1.538 3.418-3.43 3.418ZM468.58 75.291a.9.9 0 0 0-1.671 0c-2.14 5.273-5.184 11.178-8.496 15.69-.53.722.2 1.688 1.044 1.383l7.099-2.569v43.949h2.377V89.795l7.102 2.57c.842.304 1.573-.661 1.043-1.384-3.312-4.512-6.357-10.417-8.497-15.69Z"
            fill="#f2f2f2"
          />
          <circle cx={468.625} cy={158.325} r={17.825} fill="#f2f2f2" />
          <path
            d="M261.968 503.708c4.206-6.962 1.972-16.015-4.99-20.222a14.73 14.73 0 0 0-2.111-1.054l-1.476-73.392-20.4-4.582 2.39 87.155c-2.469 7.738 1.803 16.013 9.542 18.481a14.707 14.707 0 0 0 17.045-6.386Z"
            fill="#ffb6b6"
          />
          <path
            d="M276.16 214.15s-25-6-33 11-8.68 90.976-8.68 90.976l-4.32 150.024 31.711-1.398L287.16 280.15l-11-66Z"
            fill="#6c63ff"
          />
          <path
            d="M264.939 525.845a2.948 2.948 0 0 0 2.32 1.11h162.34a2.987 2.987 0 0 0 2.92-3.6l-2.52-11.97a2.993 2.993 0 0 0-1.86-2.17 2.894 2.894 0 0 0-1.06-.2h-157.31c-.363 0-.723.067-1.06.2a2.992 2.992 0 0 0-1.86 2.17l-2.52 11.97c-.182.88.042 1.794.61 2.49Z"
            fill="#ccc"
          />
          <path
            d="M202.789 257.885v187.26a9.007 9.007 0 0 0 9 9h277.5a9.007 9.007 0 0 0 9-9v-187.26a9.011 9.011 0 0 0-9-8.99h-277.5a9.012 9.012 0 0 0-9 8.99Z"
            fill="#e6e6e6"
          />
          <path
            d="M385.24 414.1a3.26 3.26 0 0 0-1.03-.16h-64.92a3.47 3.47 0 0 0-3.47 3.46v102.56h71.85V417.4c0-1.51-.98-2.85-2.43-3.3Zm-26.04 50.44a7.673 7.673 0 0 1-7.71 7.64 7.676 7.676 0 0 1-7.63-7.64v-11.9c.04-4.23 3.51-7.63 7.74-7.59 4.18.04 7.56 3.42 7.6 7.59v11.9Z"
            fill="#ccc"
          />
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" width={584} height={439.996}>
          <g fill="#f2f2f2">
            <path d="M144.538 293.999h2.073v24.873h-2.073z" />
            <path d="M155.133 294.69h-19.808a3.227 3.227 0 0 1-3.223-3.224v-7.371a3.227 3.227 0 0 1 3.223-3.223h19.808a3.227 3.227 0 0 1 3.223 3.223v7.371a3.227 3.227 0 0 1-3.223 3.224Zm-12.436-12.437a9.213 9.213 0 0 0-9.213 9.213c0 1.017.824 1.842 1.841 1.842h19.808a1.841 1.841 0 0 0 1.842-1.842v-7.371a1.842 1.842 0 0 0-1.842-1.842h-12.436Z" />
          </g>
          <g fill="#f2f2f2">
            <path d="M262.538 353.999h2.073v24.873h-2.073z" />
            <path d="M273.133 354.69h-19.808a3.227 3.227 0 0 1-3.223-3.224v-7.371a3.227 3.227 0 0 1 3.223-3.223h19.808a3.227 3.227 0 0 1 3.223 3.223v7.371a3.227 3.227 0 0 1-3.223 3.224Zm-12.436-12.437a9.213 9.213 0 0 0-9.213 9.213c0 1.017.824 1.842 1.841 1.842h19.808a1.841 1.841 0 0 0 1.842-1.842v-7.371a1.842 1.842 0 0 0-1.842-1.842h-12.436Z" />
          </g>
          <path
            fill="#ffb6b6"
            d="M478.491 429.604h-7.978l-3.796-30.774h11.776l-.002 30.774z"
          />
          <path
            d="M478.772 437.927h-24.535v-.31a9.55 9.55 0 0 1 9.55-9.55l4.482-3.4 8.362 3.4h2.141v9.86Z"
            fill="#2f2e41"
          />
          <path
            fill="#ffb6b6"
            d="M439.14 429.604h-7.978l-3.795-30.774h11.775l-.001 30.774z"
          />
          <path
            d="M439.421 437.927h-24.534v-.31a9.55 9.55 0 0 1 9.55-9.55l4.482-3.4 8.361 3.4h2.142v9.86ZM443.357 255.473l54.107-2.46 5.41 31.481-3.443 10.822-2.951 12.297-8.854 43.285-7.378 63.945h-15.659l-.327-60.748 3.673-5.017v-3.347l-2.51-44.267-16.411 42.794 1.475 5.902-4.427 10.822-5.316 53.86h-14.64l-3.162-73.536 11.805-45.253v-8.362l1.967-3.935 6.64-28.283z"
            fill="#2f2e41"
          />
          <path
            fill="#3f3d56"
            d="M479.018 154.392h-19.723l-2.411 10.821-19.184 8.854 6.887 50.172-3.935 16.232v6.394l-1.968 5.903-.984 18.833 67.388 4.777-4.427-9.837 1.476-5.903-1.476-3.443-3.935-29.021 2.951-56.074-15.248-5.411-5.41-12.297z"
          />
          <path
            d="m377.167 247.594 14.127-11.75 7.838 7.134-15.378 11.89a6.15 6.15 0 1 1-11.483-4.018 6.14 6.14 0 0 1 4.896-3.256Z"
            fill="#ffb6b6"
          />
          <path
            d="m450.2 178.128-7.507-3.021a6.04 6.04 0 0 0-7.303.759c-3.774 3.573-9.336 9.526-9.832 13.977 0 0-17.92 18.55-18.152 22.055-.232 3.505-24.81 29.976-24.81 29.976l11.449 8.51 46.311-44.268 4.17-22.425c1.962-2.858 8.632-3.755 5.674-5.563Z"
            fill="#3f3d56"
          />
          <circle cx={469.872} cy={135.807} r={16.863} fill="#ffb6b6" />
          <path
            d="M487.9 143.778c-.39-.48-.55-1.08-.94-1.56.02.79.01 1.59.15 2.36.02.12.04.27.07.46.01.04.02.06.03.1 0 .02.01.04.01.06-1.19 2.25-2.55 3.64-3.53 4.03-2.42.97-5.69 1.8-5.9 1.96.23-.36 8.81-13.78 5.9-14.75-2.95-.98-2.7.85-2.7.85-1.343-5.508-4.043-7.775-8.12-6.75-5.32-.19-10.53-1.81-13.23 3.78a18.91 18.91 0 0 0-1.33-3.7c-.11 1.23-.11 2.6-.51 3.8-3.78 3.297-6.045 2.734-7.48.6 0-.43.01-.87.04-1.3.03-.29.06-.56.11-.84.16-.81.79-1.28 1.1-1.99-.69.38-1.41.74-2.03 1.22-.09.07-.22.16-.37.27-.39-2.55-1.73-11.1 2.55-8.24s1.97-2.95 1.97-2.95h5.13s.88-1.16 2.44-2.39c.28.08.54.16.8.26.77.3-1.71-2.49-1.06-2.06-.25-.74 2.35 1.98 1.99 1.28-.06-.12.12-2.07.01-2.28 2.86-1.73 16.58-1.739 21 2 5.56 4.703-1.478 2.303 5.59 11.55 2.819 3.687 2.627 7.15-1.69 14.23Z"
            fill="#2f2e41"
          />
          <path
            d="M348.059 439.996H64.949c-7.138 0-12.946-5.808-12.946-12.946V116.94c0-7.137 5.808-12.944 12.945-12.944h283.11c7.138 0 12.945 5.807 12.945 12.944v310.11c0 7.138-5.807 12.946-12.944 12.946Zm-210.134-334c-46.349 0-83.922 37.572-83.922 83.92V427.05c0 6.045 4.9 10.946 10.946 10.946h283.11c6.044 0 10.944-4.9 10.944-10.945V116.94c0-6.045-4.9-10.945-10.944-10.945H137.925ZM515.059 439.996h-124.11c-7.138 0-12.946-5.808-12.946-12.946V116.94c0-7.137 5.808-12.944 12.945-12.944h124.11c7.138 0 12.945 5.807 12.945 12.944v310.11c0 7.138-5.807 12.946-12.944 12.946Zm-124.11-334c-6.036 0-10.946 4.91-10.946 10.944v310.11c0 6.035 4.91 10.946 10.945 10.946h124.11c6.036 0 10.945-4.91 10.945-10.946V116.94c0-6.035-4.91-10.944-10.944-10.944h-124.11Z"
            fill="#f2f2f2"
          />
          <path
            d="M570.91 0H13.1C5.88 0 0 5.87 0 13.09V199.9c0 6.92 5.41 12.62 12.22 13.06.29.03.58.04.88.04h39.12v-2H13.1c-.3 0-.59-.01-.88-.04C6.51 210.51 2 205.72 2 199.9V13.09C2 6.97 6.98 2 13.1 2h557.81C577.03 2 582 6.97 582 13.09V199.9c0 6.12-4.97 11.1-11.09 11.1h-44.69v2h44.69c7.22 0 13.09-5.88 13.09-13.1V13.09C584 5.87 578.13 0 570.91 0Z"
            fill="#f2f2f2"
          />
          <path
            d="M193.798 315.38h-21.59c0-.25.02-.5.06-.77.56-4.24 5.52-10.49 8.5-11.79.57-.24 1.07-.31 1.45-.14.49.21.79.82.79 1.91 0 2.57 1.62 3.88 3.61 4.85-.49.76-1.12 1.37-1.95 1.57 1.65.35 4.19.8 6.17.31 1.46.76 2.61 1.71 2.89 3.29.05.24.07.5.07.77Z"
            fill="#6c63ff"
          />
          <circle cx={181.343} cy={301.27} r={1.66} fill="#3f3d56" />
          <path
            d="M183.003 327.61c7.18 0 13-5.82 13-13h-26c0 7.18 5.82 13 13 13Z"
            fill="#e6e6e6"
          />
          <path
            d="M247.798 355.38h-21.59c0-.25.02-.5.06-.77.25-1.9 1.39-4.2 2.83-6.28.69.09 1.31.33 1.78.81-.22-.61-.48-1.34-.82-2.1 1.57-2 3.35-3.63 4.71-4.22.57-.24 1.07-.31 1.45-.14.49.21.79.82.79 1.91 0 6.34 9.82 4.98 10.72 10.02.05.24.07.5.07.77Z"
            fill="#6c63ff"
          />
          <circle cx={235.343} cy={341.27} r={1.66} fill="#3f3d56" />
          <path
            d="M237.003 367.61c7.18 0 13-5.82 13-13h-26c0 7.18 5.82 13 13 13Z"
            fill="#e6e6e6"
          />
          <path
            d="M234.746 301.868c-5.38 0-9.743 4.361-9.743 9.742h19.485c0-5.38-4.362-9.742-9.742-9.742Z"
            fill="#6c63ff"
          />
          <path
            d="M244.488 308.61h-19.48c0-5.38 4.36-9.74 9.74-9.74 1.61 0 3.13.39 4.46 1.08a22.09 22.09 0 0 1-.163.37c-.419.926.247 1.99 1.263 1.955.331-.011.66-.028.98-.052l1.244.528a9.744 9.744 0 0 1 1.956 5.859Z"
            fill="#6c63ff"
          />
          <path
            d="M235.003 322.61c7.18 0 13-5.82 13-13h-26c0 7.18 5.82 13 13 13Z"
            fill="#e6e6e6"
          />
          <path
            d="M441.746 213.868c-5.38 0-9.743 4.361-9.743 9.742h19.485c0-5.38-4.362-9.742-9.742-9.742Z"
            fill="#6c63ff"
          />
          <path
            d="M451.488 220.61h-19.48c0-5.38 4.36-9.74 9.74-9.74 1.61 0 3.13.39 4.46 1.08a22.09 22.09 0 0 1-.163.37c-.419.926.247 1.99 1.263 1.955.331-.011.66-.028.98-.052l1.244.528a9.744 9.744 0 0 1 1.956 5.859Z"
            fill="#6c63ff"
          />
          <path
            d="M442.003 234.61c7.18 0 13-5.82 13-13h-26c0 7.18 5.82 13 13 13Z"
            fill="#e6e6e6"
          />
          <ellipse
            cx={140.212}
            cy={178.833}
            rx={12.463}
            ry={12.201}
            fill="#6c63ff"
          />
          <path
            d="M240.125 174.66H173.04c-2.302 0-4.174-1.873-4.174-4.175s1.872-4.174 4.174-4.174h67.085c2.301 0 4.174 1.873 4.174 4.174s-1.873 4.174-4.174 4.174ZM292.478 188.786H173.04c-2.302 0-4.174-1.872-4.174-4.173s1.872-4.174 4.174-4.174h119.438c2.301 0 4.174 1.872 4.174 4.174s-1.873 4.173-4.174 4.173Z"
            fill="#f2f2f2"
          />
          <g fill="#f2f2f2">
            <path d="M240.125 219.66H173.04c-2.302 0-4.174-1.873-4.174-4.175s1.872-4.174 4.174-4.174h67.085c2.301 0 4.174 1.873 4.174 4.174s-1.873 4.174-4.174 4.174ZM292.478 233.786H173.04c-2.302 0-4.174-1.872-4.174-4.173s1.872-4.174 4.174-4.174h119.438c2.301 0 4.174 1.872 4.174 4.174s-1.873 4.173-4.174 4.173Z" />
          </g>
          <ellipse
            cx={136.212}
            cy={51.833}
            rx={12.463}
            ry={12.201}
            fill="#6c63ff"
          />
          <path
            d="M236.125 47.66H169.04c-2.302 0-4.174-1.873-4.174-4.175s1.872-4.174 4.174-4.174h67.085c2.301 0 4.174 1.873 4.174 4.174s-1.873 4.174-4.174 4.174ZM288.478 61.786H169.04c-2.302 0-4.174-1.872-4.174-4.173s1.872-4.174 4.174-4.174h119.438c2.301 0 4.174 1.872 4.174 4.174s-1.873 4.173-4.174 4.173ZM286.441 439.91l-1.907-.601 12.933-41.008c1.094-3.47-8.828 43.242-10.98 40.309-2.15-2.934 3.847-55 .209-55H126.654c-3.421 0-1.012 51.342-3.166 54-2.155 2.657-8.591-43.716-7.883-40.369l7.861 37.162-1.957.414-7.86-37.162c-.834-3.94.142-7.994 2.678-11.122s6.3-4.923 10.327-4.923h160.042c4.282 0 8.19 1.98 10.721 5.433 2.532 3.453 3.245 7.776 1.957 11.86l-12.933 41.007Z"
            fill="#f2f2f2"
          />
          <path
            d="m233.972 370.185 1.93.61 32.91 10.38c4.08 1.28 8.4.57 11.86-1.96 3.45-2.53 5.43-6.44 5.43-10.72v-39.04c0-4.03-1.79-7.79-4.92-10.33a13.254 13.254 0 0 0-11.13-2.68l-35.17 7.44-1.99.42.02.09.4 1.87.32-.07 1.96-.41 34.88-7.38c3.35-.71 6.79.12 9.45 2.27a11.26 11.26 0 0 1 4.18 8.78v39.04c0 3.64-1.68 6.96-4.62 9.11-2.93 2.15-6.6 2.75-10.07 1.66l-33.32-10.5-1.99-.63-.13 2.05ZM184.232 327.768l-1.93-.61-32.91-10.38c-4.08-1.28-8.4-.57-11.86 1.96-3.45 2.53-5.43 6.44-5.43 10.72v39.04c0 4.03 1.79 7.79 4.92 10.33s7.19 3.51 11.13 2.68l35.17-7.44 1.99-.42-.02-.09-.4-1.87-.32.07-1.96.41-34.88 7.38c-3.35.71-6.79-.12-9.45-2.27a11.26 11.26 0 0 1-4.18-8.78v-39.04c0-3.64 1.68-6.96 4.62-9.11 2.93-2.15 6.6-2.75 10.07-1.66l33.32 10.5 1.99.63.13-2.05Z"
            fill="#f2f2f2"
          />
          <path
            d="m444.653 226.021 17.965-3.855 3.634 9.956-19.139 3.4a6.15 6.15 0 1 1-8.309-8.887 6.14 6.14 0 0 1 5.849-.614Z"
            fill="#ffb6b6"
          />
          <path
            d="M498.867 172.778c4.276-.986 8.615 1.42 10.012 5.58 2.19 6.523 4.493 16.018 2.111 22.27l-1.967 16.233-2.46 8.854v1.268l-52.63 7.585-2.46-12.788 33.94-5.411.983-5.903.918-.918 1.261-6.706 3.782-23.119a8.543 8.543 0 0 1 6.51-6.945Z"
            fill="#3f3d56"
          />
          <path
            d="M182.746 348.868c-5.38 0-9.743 4.361-9.743 9.742h19.485c0-5.38-4.362-9.742-9.742-9.742Z"
            fill="#6c63ff"
          />
          <path
            d="M192.488 355.61h-19.48c0-5.38 4.36-9.74 9.74-9.74 1.61 0 3.13.39 4.46 1.08a22.09 22.09 0 0 1-.163.37c-.419.926.247 1.99 1.263 1.955.331-.011.66-.028.98-.052l1.244.528a9.744 9.744 0 0 1 1.956 5.859Z"
            fill="#6c63ff"
          />
          <path
            d="M183.003 369.61c7.18 0 13-5.82 13-13h-26c0 7.18 5.82 13 13 13Z"
            fill="#e6e6e6"
          />
          <circle cx={177.196} cy={354.492} r={1.66} fill="#3f3d56" />
          <circle cx={243.196} cy={307.492} r={1.66} fill="#3f3d56" />
          <path
            fill="#f2f2f2"
            d="M221.102 364.872h30v5h-30zM168.102 367.872h30v5h-30zM168.102 325.872h30v5h-30zM221.102 321.872h30v5h-30z"
          />
          <circle cx={139.862} cy={222.875} r={10.521} fill="#fff" />
          <path
            d="M139.862 234.116c-6.198 0-11.24-5.043-11.24-11.24s5.042-11.24 11.24-11.24 11.24 5.041 11.24 11.24-5.042 11.24-11.24 11.24Zm0-21.335c-5.567 0-10.095 4.528-10.095 10.094s4.528 10.095 10.095 10.095 10.094-4.528 10.094-10.095-4.528-10.094-10.094-10.094Z"
            fill="#3f3d56"
          />
          <path
            d="M138.426 228.35a1.17 1.17 0 0 1-.936-.467l-2.87-3.827a1.17 1.17 0 1 1 1.873-1.405l1.877 2.504 4.823-7.234a1.17 1.17 0 0 1 1.948 1.298l-5.74 8.61a1.17 1.17 0 0 1-.942.522h-.033Z"
            fill="#6c63ff"
          />
          <g fill="#e6e6e6">
            <path d="M236.618 287.84c2.656-5.995 3.297-12.77 1.87-19.166-1.391-6.231-4.866-11.897-9.676-16.078a30.279 30.279 0 0 0-9.099-5.466c-.796-.302-1.424.882-.619 1.187a29.522 29.522 0 0 1 13.965 11.085c3.464 5.154 5.104 11.33 4.805 17.524a28.929 28.929 0 0 1-2.432 10.295c-.348.785.837 1.408 1.186.619Z" />
            <path d="m223.607 243.145-11.474-.528c-.417-.019-.766.486-.614.87l4.643 11.769c.314.796 1.593.401 1.277-.402l-4.643-11.768-.615.87 11.474.526c.862.04.807-1.298-.048-1.337Z" />
          </g>
          <g fill="#e6e6e6">
            <path d="M411.445 78.51c-1.24-6.44-4.578-12.368-9.4-16.807-4.698-4.324-10.784-6.994-17.12-7.683a30.28 30.28 0 0 0-10.591.703c-.827.206-.667 1.536.169 1.327a29.522 29.522 0 0 1 17.793 1.136c5.786 2.256 10.657 6.393 13.945 11.65a28.929 28.929 0 0 1 3.877 9.842c.162.843 1.49.68 1.327-.168Z" />
            <path d="m375.258 49.228-9.724 6.113c-.354.223-.352.836-.008 1.065l10.528 7.016c.712.475 1.537-.58.82-1.058l-10.529-7.016-.008 1.065 9.723-6.114c.73-.46-.078-1.527-.802-1.071Z" />
          </g>
        </svg>
      </div>
    </section>
  );
};

export default FeaturesSlice;
