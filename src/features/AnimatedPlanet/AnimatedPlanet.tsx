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

  return (
    <>
      <div className={cn(cls.AnimatedPlanet, className)}>
        <div className={cls.AnimatedPlanet_wrapper}>
          <img src={planetImg} alt="Planet" className={cls.AnimatedPlanet_planetImg} />
          <motion.svg
            initial="hidden"
            animate="visible"
            width="486"
            height="486"
            viewBox="-243 -243 486 486"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={cls.AnimatedPlanet_orangeLine}
          >
            {/* Main circle border */}
            <motion.circle
              cx="0"
              cy="0"
              r="230"
              stroke="#E75626"
              strokeWidth="1"
              variants={orangeLineVariants}
              custom={1}
            />

            {/* Little circle at top */}
            <motion.circle
              cx="0"
              cy="-230"
              r="4"
              fill="#E75626"
              stroke="rgba(90, 90, 90, 0.1)"
              strokeWidth="3"
              variants={orangeDotsVariants}
              custom={2.5}
            />

            {/* Little circle at right */}
            <motion.circle
              cx="230"
              cy="0"
              r="4"
              fill="#E75626"
              variants={orangeDotsVariants}
              custom={2.7}
            />

            {/* Little circle at bottom */}
            <motion.circle
              cx="0"
              cy="230"
              r="4"
              fill="#E75626"
              variants={orangeDotsVariants}
              custom={2.9}
            />
          </motion.svg>
          <div className={cls.AnimatedPlanet_label}>Q1 2022</div>
        </div>
      </div>
    </>
  );
};
