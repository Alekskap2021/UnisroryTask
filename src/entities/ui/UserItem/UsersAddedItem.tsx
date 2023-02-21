import { FC } from "react";

// Hooks
import { useAppDispatch, useAppSelector } from "shared/lib/storeHooks";
import { useEthers } from "@usedapp/core";

// Components
import { Button, ThemeButton } from "shared/ui";
import { CloseIcon } from "shared/ui/assets/Icons/CloseIcon";

// Actions
import { removeUserData } from "shared/model/registrationSlise";

import classNames from "classnames/bind";
import cls from "./UserItem.module.scss";

const cn = classNames.bind(cls);

interface UsersAddedItemProps {
  className?: string;
}

export const UsersAddedItem: FC<UsersAddedItemProps> = (props) => {
  const { className } = props;

  const { isInTable, userData } = useAppSelector((state) => state.registrationSlice);
  const { account } = useEthers();

  const dispatch = useAppDispatch();

  // Первая строка в таблице, с данными, которые добавил юзер
  // Опционально возвращаем данные, если юзер засабмитил форму и null если нет
  return isInTable ? (
    <li className={cn(cls.rowsListItem, cls.rowsListItem_userItem, className)}>
      <span className="ItemName">{userData?.name}</span>
      <span className="ItemEmail">{userData?.email}</span>
      <span className="ItemWallet">{account?.slice(0, 19) + "..."}</span>

      {/* Кнопка для удаления юзера из таблицы */}
      <Button
        theme={ThemeButton.CLEAR}
        className={cls.rowsListItem_userItemBtn}
        title="Exclude"
        onClick={() => dispatch(removeUserData())}
      >
        <CloseIcon />
      </Button>
    </li>
  ) : null;
};
