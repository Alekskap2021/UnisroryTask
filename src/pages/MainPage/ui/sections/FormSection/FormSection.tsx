// Hooks
import { FC, useState } from "react";
import { useAppDispatch, useAppSelector } from "shared/hooks/storeHooks";
import { useGetUsersQuery } from "pages/MainPage/model";
import { useEthers } from "@usedapp/core";

// Actions
import { setUserData, removeUserData } from "pages/MainPage/model/formSlice";

// Components
import Button, { ThemeButton } from "shared/ui/Button/Button";
import { Link } from "react-router-dom";
import { Input } from "shared/ui/Input/Input";

// Assets
import { CloseIcon } from "shared/assets/Icons/CloseIcon";
import cls from "./FormSection.module.scss";

// Libs
import classNames from "classnames/bind";

const cn = classNames.bind(cls);

export const FormSection: FC = () => {
  const [userName, setUserName] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  const { account } = useEthers();
  const { data: usersList } = useGetUsersQuery(50);

  const dispatch = useAppDispatch();
  const { isInTable, userData } = useAppSelector((state) => state.formSlice);

  const onSumbitHandler = () => {
    dispatch(setUserData({ name: userName, email }));

    setUserName("");
    setEmail("");
  };

  return (
    <section className={cls.FormSection}>
      {/* Form */}
      <div className="form">
        <h2 className={cn(cls.formTitle, "title")}>Beta test registration</h2>

        <p className={cn(cls.formDescr, "descr")}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>

        <form action="" className={cls.form}>
          <label htmlFor="name" className={cls.inputLabel}>
            name
          </label>

          {/* Toggle input/userData */}
          {isInTable ? (
            <h3 className={cls.usersInfo}>{userData?.name}</h3>
          ) : (
            <Input
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              className={cls.formInput}
              name="name"
              id="name"
              type="text"
              placeholder="We will display your name in participation list"
            />
          )}
          {/*  */}

          <label htmlFor="email" className={cls.inputLabel}>
            email
          </label>

          {/* Toggle input/userData */}
          {isInTable ? (
            <h3 className={cls.usersInfo}>{userData?.email}</h3>
          ) : (
            <Input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={cls.formInput}
              name="email"
              id="email"
              type="text"
              placeholder="We will display your name in participation list"
            />
          )}
          {/*  */}

          <Button
            disabled={!email || !userName || !account}
            className={cls.formSubmitBtn}
            onClick={onSumbitHandler}
            title={
              !account
                ? "Please, connect your Metamask wallet"
                : (!email || !userName) && !isInTable
                ? "Please complete both fields"
                : ""
            }
          >
            {/* Toggle btns text */}
            {isInTable ? "List me to the table" : "Get early access"}
            {/*  */}
          </Button>
        </form>
      </div>

      {/* Table */}
      <div className={cn(cls.table, { [cls.table_visible]: isInTable })}>
        <h2 className="title">Participation listing (enable only for participants)</h2>
        <div className={cls.headers}>
          <h3>NAME</h3>
          <h3>EMAIL</h3>
          <h3>WALLET</h3>
        </div>

        <ul className={cls.rowsList}>
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
    </section>
  );
};
