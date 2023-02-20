// Hooks
import { FC, useState, useEffect, useRef, MutableRefObject } from "react";
import { useGetUsersQuery } from "shared/api";
import { useAppSelector, useAppDispatch } from "shared/hooks/storeHooks";
import { useEthers } from "@usedapp/core";

// Components
import Button, { ThemeButton } from "shared/ui/Button/Button";
import { CloseIcon } from "shared/assets/Icons/CloseIcon";
import { Link } from "react-router-dom";

// Actions
import { removeUserData } from "shared/model/registrationSlise";

import classNames from "classnames/bind";
import cls from "./UsersTable.module.scss";

const cn = classNames.bind(cls);

interface UsersTableProps {
  className?: string;
}

export const UsersTable: FC<UsersTableProps> = (props) => {
  const { className } = props;

  const tableRef: MutableRefObject<HTMLUListElement | null> = useRef(null);

  const [currentPage, setCurrentPage] = useState<number>(0);

  const { data: usersList, isLoading } = useGetUsersQuery(currentPage);
  const { account } = useEthers();

  const { isInTable, userData } = useAppSelector((state) => state.registrationSlice);
  const dispatch = useAppDispatch();

  useEffect(() => {
    tableRef.current?.addEventListener("scroll", onScrollHandler);

    return () => tableRef.current?.removeEventListener("scroll", onScrollHandler);
  }, []);

  const onScrollHandler = () => {
    const tableHeight: number = tableRef.current?.offsetHeight || 0;
    const tableScrollHeight: number = tableRef.current?.scrollHeight || 0;
    const tableScrollTop: number = tableRef.current?.scrollTop || 0;

    if (tableScrollHeight - (tableHeight + tableScrollTop) < 100) {
      isLoading && setCurrentPage((prev) => prev + 1);
    }
  };

  return (
    <div className={cn(cls.UsersTable, { [cls.UsersTable_visible]: isInTable }, className)}>
      <h2 className="title">Participation listing (enable only for participants)</h2>
      <div className={cls.headers}>
        <h3>NAME</h3>
        <h3>EMAIL</h3>
        <h3>WALLET</h3>
      </div>

      <ul className={cls.rowsList} ref={tableRef}>
        {/* Users data at 1st row */}
        <li className={cn(cls.rowsListItem, cls.rowsListItem_userItem)}>
          <span className="ItemName">{userData?.name}</span>
          <span className="ItemEmail">{userData?.email}</span>
          <span className="ItemWallet">{account?.slice(0, 19) + "..."}</span>

          {/* Btn for remove user from table */}
          <Button
            theme={ThemeButton.CLEAR}
            className={cls.rowsListItem_userItemBtn}
            title="Exclude"
            onClick={() => dispatch(removeUserData())}
          >
            <CloseIcon />
          </Button>
        </li>
        {/*  */}

        {/* Dynamic elements from backend */}
        {usersList?.items.map(({ address, id, email, username }) => (
          <li className={cls.rowsListItem} key={id}>
            <Link to={`/details/${id}`} className={cls.rowsListItem_link}>
              <span className="ItemName">{username}</span>
              <span className="ItemEmail">{email}</span>
              <span className="ItemWallet">{address.slice(0, 24) + "..."}</span>
            </Link>
          </li>
        ))}
      </ul>
      {/*  */}
    </div>
  );
};
