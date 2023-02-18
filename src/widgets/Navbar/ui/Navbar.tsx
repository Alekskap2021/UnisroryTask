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

export const Navbar = ({ className }: NavbarProps) => (
  <div className={cn(cls.Navbar, className)}>
    <Link to="/" className={cls.mainLink}>
      Лого
    </Link>

    {/* <Button>Connect metamask</Button> */}
    <Link to="/details">Connect metamask</Link>
  </div>
);
