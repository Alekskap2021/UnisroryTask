import { FC } from "react";
import { Link, LinkProps } from "react-router-dom";
import classNames from "classnames/bind";
import cls from "./AppLink.module.scss";

const cn = classNames.bind(cls);

interface AppLinkProps extends LinkProps {
  className?: string;
}
export const AppLink: FC<AppLinkProps> = (props) => {
  const { to, className, children, ...otherProps } = props;
  return (
    <Link to={to} className={cn(cls.AppLink, className)} {...otherProps}>
      {children}
    </Link>
  );
};

export default AppLink;
