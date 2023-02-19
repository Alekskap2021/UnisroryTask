// Hooks
import { useParams } from "react-router-dom";
import { useGetUserDetailsQuery } from "shared/api";

// Types
import { FC } from "react";

// Assets
import ImagePlanet from "shared/assets/Images/ImagePlanet.png";
import cls from "./UserDetailsSection.module.scss";

interface UserDetailsSectionProps {
  className?: string;
}

// Можно добавить имплементацию спиннера/скелетона, чтобы показывать во время загрузки данных
export const UserDetailsSection: FC<UserDetailsSectionProps> = () => {
  const { id: userId } = useParams();
  const { data: userDetails } = useGetUserDetailsQuery(userId ? userId : "");

  return (
    <div className={cls.UserDetailsSection}>
      <div className={cls.userInfo}>
        <h1 className={cls.title}>Personal data</h1>
        <h3 className={cls.subtitle}>Name</h3>
        <span className={cls.info}>{userDetails?.username}</span>
        <h3 className={cls.subtitle}>Email</h3>
        <span className={cls.info}>{userDetails?.email}</span>
        <h3 className={cls.subtitle}>wallet</h3>
        <span className={cls.info}>{userDetails?.address}</span>
      </div>

      <img src={ImagePlanet} alt="Planet" className={cls.planet} />
    </div>
  );
};
