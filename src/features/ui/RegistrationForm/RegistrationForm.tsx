// Hooks
import { FC, useState } from "react";
import { useAppDispatch, useAppSelector } from "shared/lib/storeHooks";
import { useEthers } from "@usedapp/core";

// Components
import { Input } from "shared/ui";
import { Button } from "shared/ui";

// Actions
import { setUserData } from "shared/model/registrationSlise";

import classNames from "classnames/bind";
import cls from "./RegistrationForm.module.scss";

const cn = classNames.bind(cls);

interface RegistrationFormProps {
  className?: string;
}

export const RegistrationForm: FC<RegistrationFormProps> = (props) => {
  const [userName, setUserName] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  const { account } = useEthers();

  const dispatch = useAppDispatch();
  const { isInTable, userData } = useAppSelector((state) => state.registrationSlice);

  const onSumbitHandler = () => {
    // Диспатчим данные пользователя и тоглим видимость таблицы
    dispatch(setUserData({ name: userName, email }));

    setUserName("");
    setEmail("");
  };

  const generateSubmitBtnTitle = () => {
    let title = "";

    if (!account) title = "Please, connect your Metamask wallet";
    else if ((!email || !userName) && !isInTable) title = "Please complete both fields";

    return title;
  };

  return (
    <div className={cls.RegistrationForm}>
      <h2 className={cn(cls.formTitle, "title")}>Beta test registration</h2>

      <p className={cn(cls.formDescr, "descr")}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat.
      </p>

      <form action="" className={cls.form}>
        <label htmlFor="name" className={cls.inputLabel}>
          name
        </label>

        {/* Тоглим отрисовку инпута/данных юзера */}
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

        {/* Тоглим отрисовку инпута/данных юзера */}
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

        {/* Сабмит формы */}
        <Button
          disabled={!email || !userName || !account}
          className={cls.formSubmitBtn}
          onClick={onSumbitHandler}
          title={generateSubmitBtnTitle()}
        >
          {/* Тоглим текст в кнопке сабмита */}
          {isInTable ? "List me to the table" : "Get early access"}
        </Button>
      </form>
    </div>
  );
};
