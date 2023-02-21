import { FC, SVGProps } from "react";

interface PreloaderProps extends SVGProps<SVGSVGElement> {
  className?: string;
}

export const Preloader: FC<PreloaderProps> = (props) => {
  const { className } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      style={{ margin: "auto", background: "none", display: "block", shapeRendering: "auto" }}
      width="200px"
      height="200px"
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid"
      className={className}
    >
      <path
        fill="none"
        stroke="#e75626"
        strokeWidth="2"
        strokeDasharray="187.30991760253906 69.27901062011719"
        d="M24.3 30C11.4 30 5 43.3 5 50s6.4 20 19.3 20c19.3 0 32.1-40 51.4-40 C88.6 30 95 43.3 95 50s-6.4 20-19.3 20C56.4 70 43.6 30 24.3 30z"
        stroke-linecap="round"
        style={{ transform: "scale(0.5700000000000001)", transformOrigin: "50px 50px" }}
      >
        <animate
          attributeName="stroke-dashoffset"
          repeatCount="indefinite"
          dur="0.6451612903225806s"
          keyTimes="0;1"
          values="0;256.58892822265625"
        ></animate>
      </path>
    </svg>
  );
};
