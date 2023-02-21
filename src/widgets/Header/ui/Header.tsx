// Components
import { Link } from "react-router-dom";
import { AddWallet } from "features";

// Libs
import classNames from "classnames/bind";

// Assets
import cls from "./Header.module.scss";

const cn = classNames.bind(cls);

interface HeaderProps {
  className?: string;
}

export const Header = (props: HeaderProps) => {
  const { className } = props;

  return (
    <div className={cn(cls.Navbar, className)}>
      <Link to="/" className={cls.mainLink}>
        Лого
      </Link>

      <AddWallet />
    </div>
  );
};
