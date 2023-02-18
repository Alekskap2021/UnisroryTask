import { FC } from "react";
import cls from "./UserDetailsSection.module.scss";
import ImagePlanet from "shared/assets/Images/ImagePlanet.png";

interface UserDetailsSectionProps {
  className?: string;
}

export const UserDetailsSection: FC<UserDetailsSectionProps> = (props) => {
  return (
    <div className={cls.UserDetailsSection}>
      <div className={cls.userInfo}>
        <h1 className={cls.title}>Personal data</h1>
        <h3 className={cls.subtitle}>Name</h3>
        <span className={cls.info}>Rojer waters</span>
        <h3 className={cls.subtitle}>Email</h3>
        <span className={cls.info}>Charadeyouare@gmail.com</span>
        <h3 className={cls.subtitle}>wallet</h3>
        <span className={cls.info}>0xe02354bdbb79b935407488c4276ff7898802e574</span>
      </div>

      <img src={ImagePlanet} alt="Planet" className={cls.planet} />
    </div>
  );
};
