import { ButtonHTMLAttributes, FC, ReactNode } from "react";
import classNames from "classnames/bind";
import cls from "./Button.module.scss";

const cn = classNames.bind(cls);

// Как правило, в дизайне есть несколько видов кнопок.
// Описываем в стилях нужные темы и обращаемся к ним через cls[theme]
// theme кидаем пропсом. По умалчанию - default
export const enum ThemeButton {
  CLEAR = "clear",
  DEFAULT = "default",
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ThemeButton;
  children: ReactNode;
}

const Button: FC<ButtonProps> = (props) => {
  const { className, children, theme = ThemeButton.DEFAULT, ...otherProps } = props;

  return (
    <button type="button" className={cn(cls.Button, cls[theme], className)} {...otherProps}>
      {children}
    </button>
  );
};

export default Button;
