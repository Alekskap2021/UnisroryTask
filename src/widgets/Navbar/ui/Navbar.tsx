// Components
import Button from "shared/ui/Button/Button";
import { Link } from "react-router-dom";

// Libs
import classNames from "classnames/bind";

// Assets
import cls from "./Navbar.module.scss";

import { Mainnet, DAppProvider, useEtherBalance, useEthers, Config, Goerli } from "@usedapp/core";
import { formatEther } from "@ethersproject/units";
import { getDefaultProvider } from "ethers";
import { useEffect, useState } from "react";

const cn = classNames.bind(cls);

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  const [walletAdress, setWalletArdess] = useState<string>("");
  const { account, deactivate, activateBrowserWallet } = useEthers();
  const etherBalance = useEtherBalance(account);

  const num = "0x279D9f0c10fBB3D443243423141";

  useEffect(() => {
    console.log("ACCOUNT IS: ", account);
    console.log("etherBalance IS: ", etherBalance);
    account && setWalletArdess(account.slice(0, 19) + "...");
  }, [account]);

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
