import { FC, useState } from "react";
import classNames from "classnames/bind";
import cls from "./FormSection.module.scss";
import Button, { ThemeButton } from "shared/ui/Button/Button";
import { Input } from "shared/ui/Input/Input";
import { useGetUsersQuery } from "pages/MainPage/model";
import { useAppDispatch, useAppSelector } from "shared/hooks/storeHooks";
import { setUserData, removeUserData } from "pages/MainPage/model/formSlice";
import { useEthers } from "@usedapp/core";
import { CloseIcon } from "shared/assets/Icons/CloseIcon";

const cn = classNames.bind(cls);

interface FormSectionProps {
  className?: string;
}

export const FormSection: FC<FormSectionProps> = (props) => {
  const { className } = props;

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

          <label htmlFor="email" className={cls.inputLabel}>
            email
          </label>

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
          <Button
            disabled={!email || !userName}
            className={cls.formSubmitBtn}
            onClick={onSumbitHandler}
          >
            {isInTable ? "List me to the table" : "Get early access"}
          </Button>
        </form>
      </div>

      <div className={cn(cls.table, { [cls.table_visible]: isInTable })}>
        <h2 className="title">Participation listing (enable only for participants)</h2>
        <div className={cls.headers}>
          <h3>NAME</h3>
          <h3>EMAIL</h3>
          <h3>WALLET</h3>
        </div>

        <ul className={cls.rowsList}>
          <li className={cn(cls.rowsListItem, cls.rowsListItem_userItem)}>
            <span className="ItemName">{userData?.name}</span>
            <span className="ItemEmail">{userData?.email}</span>
            <span className="ItemWallet">{account?.slice(0, 19) + "..."}</span>

            <Button
              theme={ThemeButton.CLEAR}
              className={cls.rowsListItem_userItemBtn}
              title="Exclude"
              onClick={() => dispatch(removeUserData())}
            >
              <CloseIcon />
            </Button>
          </li>
          {usersList?.items.map(({ address, id, email, username }) => (
            <li className={cn(cls.rowsListItem)} key={id}>
              <span className="ItemName">{username}</span>
              <span className="ItemEmail">{email}</span>
              <span className="ItemWallet">{address.slice(0, 24) + "..."}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
