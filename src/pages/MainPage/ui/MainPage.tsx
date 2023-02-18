import { FC } from "react";
import classNames from "classnames/bind";
import { OfferSection, FormSection } from "./sections";

// const cn = classNames.bind(cls);

interface MainPageProps {
  className?: string;
}

const MainPage: FC<MainPageProps> = (props) => {
  const { className } = props;

  return (
    <>
      <OfferSection />
      <FormSection />
    </>
  );
};

export default MainPage;
