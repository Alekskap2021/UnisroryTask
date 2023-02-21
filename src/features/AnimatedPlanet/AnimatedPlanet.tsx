import { FC } from "react";

// Assets
import planetImg from "shared/assets/Images/ImageMainPlanet.png";
import cls from "./AnimatedPlanet.module.scss";

// Libs
import classNames from "classnames/bind";
import { motion } from "framer-motion";

// Configs
import { orangeLineVariants, orangeDotsVariants } from "./animateConfig";

const cn = classNames.bind(cls);

interface AnimatedPlanetProps {
  className?: string;
}

export const AnimatedPlanet: FC<AnimatedPlanetProps> = (props) => {
  const { className } = props;

  const animatedOrangeLine = (
    <motion.svg
      initial="hidden"
      animate="visible"
      width="532"
      height="532"
      viewBox="-266 -266 532 532"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cls.AnimatedPlanet_orangeLine}
    >
      {/* Animated orange line */}
      <motion.circle
        cx="0"
        cy="0"
        r="243"
        stroke="#E75626"
        strokeWidth="1"
        variants={orangeLineVariants}
        custom={0.5}
      />

      {/* Little circle at top */}
      <motion.circle
        cx="0"
        cy="-243"
        r="4"
        fill="#E75626"
        stroke="rgba(90, 90, 90, 0.1)"
        strokeWidth="3"
        variants={orangeDotsVariants}
        custom={1}
      />

      {/* Little circle at right */}
      <motion.circle
        cx="243"
        cy="0"
        r="4"
        fill="#E75626"
        variants={orangeDotsVariants}
        custom={1.1}
      />

      {/* Little circle at bottom */}
      <motion.circle
        cx="0"
        cy="243"
        r="4"
        fill="#E75626"
        variants={orangeDotsVariants}
        custom={1.2}
      />
    </motion.svg>
  );

  return (
    <>
      <div className={cn(cls.AnimatedPlanet, className)}>
        <motion.img
          src={planetImg}
          alt="Planet"
          className={cls.AnimatedPlanet_planetImg}
          animate={{ rotate: "360deg" }}
          transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
        />
        <div className={cls.AnimatedPlanet_aura}>
          <div className={cls.AnimatedPlanet_auraWrapper}>{animatedOrangeLine}</div>
          <div className={cls.AnimatedPlanet_label}>Q1 2022</div>
        </div>
      </div>
    </>
  );
};
