// Hooks
import { useEthers } from "@usedapp/core";
import { useEffect, useState } from "react";

// Components
import Button from "shared/ui/Button/Button";
import { Link } from "react-router-dom";

// Libs
import classNames from "classnames/bind";

// Assets
import cls from "./Navbar.module.scss";

const cn = classNames.bind(cls);

interface NavbarProps {
  className?: string;
}

export const Navbar = (props: NavbarProps) => {
  const { className } = props;

  const [walletAdress, setWalletArdess] = useState<string>("");
  const { account, deactivate, activateBrowserWallet } = useEthers();

  // Перерисовываем компонент, если состояние аккаунта изменилось
  useEffect(() => {
    account && setWalletArdess(account.slice(0, 19) + "...");
  }, [account]);

  // Помещааем в переменную кнопки с разным текстом и событиями в зависимости от того
  // привязан ли кошелек
  const button = account ? (
    <Button onClick={() => deactivate()} className={cls.connectedBtn} title="Disconnect">
      {walletAdress}
    </Button>
  ) : (
    <Button onClick={() => activateBrowserWallet()}>Connect metamask</Button>
  );

  return (
    <div className={cn(cls.Navbar, className)}>
      <Link to="/" className={cls.mainLink}>
        Лого
      </Link>

      {button}
    </div>
  );
};
