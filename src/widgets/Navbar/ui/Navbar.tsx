// Components
import AppLink from "shared/ui/AppLink/AppLink";
import Button from "shared/ui/Button/Button";

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
    <AppLink to="/" className={cls.mainLink}>
      Лого
    </AppLink>

    <Button>Connect metamask</Button>
  </div>
);
