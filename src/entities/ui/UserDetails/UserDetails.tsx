import { FC } from "react";

// Hooks
import { useGetUserDetailsQuery } from "shared/api";
import { useParams } from "react-router-dom";

// Components
import { Preloader } from "shared/ui";

import classNames from "classnames/bind";
import cls from "./UserDetails.module.scss";

const cn = classNames.bind(cls);

interface UserDetailsProps {
  className?: string;
}

export const UserDetails: FC<UserDetailsProps> = (props) => {
  const { className } = props;

  const { id: userId } = useParams();
  const { data: userDetails, isLoading } = useGetUserDetailsQuery(userId ? userId : "");

  /* Опционально рисуем прелоадер/данные */
  return isLoading ? (
    <Preloader />
  ) : (
    <div className={cn(cls.userInfo, className)}>
      <h1 className={cls.title}>Personal data</h1>
      <h3 className={cls.subtitle}>Name</h3>
      <span className={cls.info}>{userDetails?.username}</span>
      <h3 className={cls.subtitle}>Email</h3>
      <span className={cls.info}>{userDetails?.email}</span>
      <h3 className={cls.subtitle}>wallet</h3>
      <span className={cls.info}>{userDetails?.address}</span>
    </div>
  );
};
