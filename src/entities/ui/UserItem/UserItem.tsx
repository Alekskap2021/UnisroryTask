import { FC } from "react";
import classNames from "classnames/bind";
import cls from "./UserItem.module.scss";
import { Link } from "react-router-dom";
import { userI } from "shared/api";

const cn = classNames.bind(cls);

interface UserItemProps extends userI {
  className?: string;
}

// Строчка конкретного пользователя из таблицы с юзерами
export const UserItem: FC<UserItemProps> = (props) => {
  const { className, address, email, id, username } = props;

  return (
    <li className={cn(cls.rowsListItem, className)} key={id}>
      <Link to={`/details/${id}`} className={cls.rowsListItem_link}>
        <span className="ItemName">{username}</span>
        <span className="ItemEmail">{email}</span>
        <span className="ItemWallet">{address.slice(0, 24) + "..."}</span>
      </Link>
    </li>
  );
};
