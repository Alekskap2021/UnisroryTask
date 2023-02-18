import { FC } from "react";
import classNames from "classnames/bind";
import cls from "./OfferSection.module.scss";

const cn = classNames.bind(cls);

interface OfferSectionProps {
  className?: string;
}

export const OfferSection: FC<OfferSectionProps> = (props) => {
  const { className } = props;

  return (
    <section className={cls.OfferSection}>
      <div className="">
        <h1 className={cn(cls.offerTitle, "title")}>
          Explore Your own planet <br />
          In <span>our New</span> metaverse
        </h1>

        <p className={cn(cls.offerDescr, "descr")}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
      </div>

      <div className={cls.stats}>
        <h3 className={cls.statsTitle}>Roadmap stats</h3>

        <ul className={cls.statsList}>
          <li className={cls.statsListItem}>
            <span className={cls.ItemCount}>12, 345</span>
            <span className={cls.ItemDescr}>Lorem ipsum dolor</span>
          </li>
          <li className={cls.statsListItem}>
            <span className={cls.ItemCount}>12, 345</span>
            <span className={cls.ItemDescr}>Lorem ipsum dolor</span>
          </li>
          <li className={cls.statsListItem}>
            <span className={cls.ItemCount}>12, 345</span>
            <span className={cls.ItemDescr}>Lorem ipsum dolor</span>
          </li>
        </ul>
      </div>
    </section>
  );
};
