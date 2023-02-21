// Types
import { FC } from "react";

// Components
import { UserDetails } from "entities/ui";

// Assets
import ImagePlanet from "shared/ui/assets/Images/ImageHalfPlanet.png";
import cls from "./DetailsPage.module.scss";

export const DetailsPage: FC = () => {
  return (
    <div className={cls.UserDetailsSection}>
      <UserDetails />
      <img src={ImagePlanet} alt="Planet" className={cls.planet} />
    </div>
  );
};
