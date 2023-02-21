import { FC, useEffect, useState } from "react";
import { useEthers } from "@usedapp/core";

import { Button } from "shared/ui";

import cls from "./AddWallet.module.scss";

interface AddWalletProps {
  className?: string;
}

export const AddWallet: FC<AddWalletProps> = (props) => {
  const [walletAdress, setWalletArdess] = useState<string>("");
  const { account, deactivate, activateBrowserWallet } = useEthers();

  // Перерисовываем компонент, если состояние аккаунта изменилось
  useEffect(() => {
    account && setWalletArdess(account.slice(0, 19) + "...");
  }, [account]);

  // Возвращаем кнопку с разными ивентами в зависимости от того
  // привязан ли кошелек
  return account ? (
    <Button onClick={() => deactivate()} className={cls.connectedBtn} title="Disconnect">
      {walletAdress}
    </Button>
  ) : (
    <Button onClick={() => activateBrowserWallet()}>Connect metamask</Button>
  );
};
