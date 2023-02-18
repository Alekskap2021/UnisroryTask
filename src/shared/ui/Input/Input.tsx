import { FC, InputHTMLAttributes } from "react";
import classNames from "classnames/bind";
import cls from "./Input.module.scss";

const cn = classNames.bind(cls);

export const enum ThemeInput {
  DEFAULT = "default",
  CLEAR = "clear",
}

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  theme?: ThemeInput;
  name: string;
  type: string;
  id: string;
  label?: string;
}

export const Input: FC<InputProps> = (props) => {
  const { className, theme = ThemeInput.DEFAULT, id, ...otherProps } = props;

  return (
    <label htmlFor={id} className={cn(cls.label)}>
      <span className={cls.labelText}>{props.label || ""}</span>
      <input className={cn(cls.Input, cls[theme], className)} {...otherProps} />
    </label>
  );
};
