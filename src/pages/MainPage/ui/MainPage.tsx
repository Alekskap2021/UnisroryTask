import { FC } from "react";
import { OfferSection, FormSection } from "./sections";

interface MainPageProps {
  className?: string;
}

const MainPage: FC<MainPageProps> = (props) => {
  return (
    <>
      <OfferSection />
      <FormSection />
    </>
  );
};

export default MainPage;
