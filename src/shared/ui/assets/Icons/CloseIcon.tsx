import { FC, SVGProps } from "react";

interface CloseIconProps extends SVGProps<SVGSVGElement> {
  className?: string;
  color?: string;
}

export const CloseIcon: FC<CloseIconProps> = (props) => {
  const { className, color } = props;

  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g clipPath="url(#clip0_46_976)">
        <rect
          x="2.11035"
          y="2.81799"
          width="1"
          height="10"
          rx="0.5"
          transform="rotate(-45 2.11035 2.81799)"
          fill={color || "white"}
        />
        <rect
          x="2.81738"
          y="9.88904"
          width="1"
          height="10"
          rx="0.5"
          transform="rotate(-135 2.81738 9.88904)"
          fill={color || "white"}
        />
      </g>
      <defs>
        <clipPath id="clip0_46_976">
          <rect width="12" height="12" fill={color || "white"} />
        </clipPath>
      </defs>
    </svg>
  );
};
