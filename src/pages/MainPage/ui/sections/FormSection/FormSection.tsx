// Hooks
import { FC, useState } from "react";
import { useAppDispatch, useAppSelector } from "shared/hooks/storeHooks";
import { useEthers } from "@usedapp/core";

// Actions
import { setUserData } from "shared/model/registrationSlise";

// Components
import Button from "shared/ui/Button/Button";
import { UsersTable } from "widgets/UsersTable/UsersTable";
import { Input } from "shared/ui/Input/Input";

// Assets
import cls from "./FormSection.module.scss";

// Libs
import classNames from "classnames/bind";

const cn = classNames.bind(cls);

export const FormSection: FC = () => {
  const [userName, setUserName] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  const { account } = useEthers();

  const dispatch = useAppDispatch();
  const { isInTable, userData } = useAppSelector((state) => state.registrationSlice);

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

      <UsersTable />
    </section>
  );
};
