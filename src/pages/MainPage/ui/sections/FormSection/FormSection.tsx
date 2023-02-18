import { FC } from "react";
import classNames from "classnames/bind";
import cls from "./FormSection.module.scss";
import Button from "shared/ui/Button/Button";
import { Input } from "shared/ui/Input/Input";

const cn = classNames.bind(cls);

interface FormSectionProps {
  className?: string;
}

export const FormSection: FC<FormSectionProps> = (props) => {
  const { className } = props;

  return (
    <section className={cls.FormSection}>
      <div className="form">
        <h2 className={cn(cls.formTitle, "title")}>Beta test registration</h2>

        <p className={cn(cls.formDescr, "descr")}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>

        <form action="" className={cls.form}>
          <Input
            name="name"
            id="name"
            label="name"
            type="text"
            placeholder="We will display your name in participation list"
            className={cls.formInput}
          />
          <Input
            name="email"
            id="email"
            label="email"
            type="text"
            placeholder="We will display your name in participation list"
            className={cls.formInput}
          />
          <Button className={cls.formSubmitBtn}>Get early access</Button>
        </form>
      </div>

      <div className="table">
        <h2 className="title">Participation listing (enable only for participants)</h2>
        <div className={cls.headers}>
          <h3>NAME</h3>
          <h3>EMAIL</h3>
          <h3>WALLET</h3>
        </div>

        <ul className={cn(cls.rowsList)}>
          <li className={cn(cls.rowsListItem)}>
            <span className="ItemName">John Doe</span>
            <span className="ItemEmail">johndoe@email.com</span>
            <span className="ItemWallet">$500</span>
          </li>
          <li className={cn(cls.rowsListItem)}>
            <span className="ItemName">John Doe</span>
            <span className="ItemEmail">johndoe@email.com</span>
            <span className="ItemWallet">$500</span>
          </li>
          <li className={cn(cls.rowsListItem)}>
            <span className="ItemName">John Doe</span>
            <span className="ItemEmail">johndoe@email.com</span>
            <span className="ItemWallet">$500</span>
          </li>
          <li className={cn(cls.rowsListItem)}>
            <span className="ItemName">John Doe</span>
            <span className="ItemEmail">johndoe@email.com</span>
            <span className="ItemWallet">$500</span>
          </li>
          <li className={cn(cls.rowsListItem)}>
            <span className="ItemName">John Doe</span>
            <span className="ItemEmail">johndoe@email.com</span>
            <span className="ItemWallet">$500</span>
          </li>
          <li className={cn(cls.rowsListItem)}>
            <span className="ItemName">John Doe</span>
            <span className="ItemEmail">johndoe@email.com</span>
            <span className="ItemWallet">$500</span>
          </li>
          <li className={cn(cls.rowsListItem)}>
            <span className="ItemName">John Doe</span>
            <span className="ItemEmail">johndoe@email.com</span>
            <span className="ItemWallet">$500</span>
          </li>
          <li className={cn(cls.rowsListItem)}>
            <span className="ItemName">John Doe</span>
            <span className="ItemEmail">johndoe@email.com</span>
            <span className="ItemWallet">$500</span>
          </li>
          <li className={cn(cls.rowsListItem)}>
            <span className="ItemName">John Doe</span>
            <span className="ItemEmail">johndoe@email.com</span>
            <span className="ItemWallet">$500</span>
          </li>
          <li className={cn(cls.rowsListItem)}>
            <span className="ItemName">John Doe</span>
            <span className="ItemEmail">johndoe@email.com</span>
            <span className="ItemWallet">$500</span>
          </li>
          <li className={cn(cls.rowsListItem)}>
            <span className="ItemName">John Doe</span>
            <span className="ItemEmail">johndoe@email.com</span>
            <span className="ItemWallet">$500</span>
          </li>
          <li className={cn(cls.rowsListItem)}>
            <span className="ItemName">John Doe</span>
            <span className="ItemEmail">johndoe@email.com</span>
            <span className="ItemWallet">$500</span>
          </li>
          <li className={cn(cls.rowsListItem)}>
            <span className="ItemName">John Doe</span>
            <span className="ItemEmail">johndoe@email.com</span>
            <span className="ItemWallet">$500</span>
          </li>
          <li className={cn(cls.rowsListItem)}>
            <span className="ItemName">John Doe</span>
            <span className="ItemEmail">johndoe@email.com</span>
            <span className="ItemWallet">$500</span>
          </li>
          <li className={cn(cls.rowsListItem)}>
            <span className="ItemName">John Doe</span>
            <span className="ItemEmail">johndoe@email.com</span>
            <span className="ItemWallet">$500</span>
          </li>
          <li className={cn(cls.rowsListItem)}>
            <span className="ItemName">John Doe</span>
            <span className="ItemEmail">johndoe@email.com</span>
            <span className="ItemWallet">$500</span>
          </li>
          <li className={cn(cls.rowsListItem)}>
            <span className="ItemName">John Doe</span>
            <span className="ItemEmail">johndoe@email.com</span>
            <span className="ItemWallet">$500</span>
          </li>
          <li className={cn(cls.rowsListItem)}>
            <span className="ItemName">John Doe</span>
            <span className="ItemEmail">johndoe@email.com</span>
            <span className="ItemWallet">$500</span>
          </li>
          <li className={cn(cls.rowsListItem)}>
            <span className="ItemName">John Doe</span>
            <span className="ItemEmail">johndoe@email.com</span>
            <span className="ItemWallet">$500</span>
          </li>
          <li className={cn(cls.rowsListItem)}>
            <span className="ItemName">John Doe</span>
            <span className="ItemEmail">johndoe@email.com</span>
            <span className="ItemWallet">$500</span>
          </li>
          <li className={cn(cls.rowsListItem)}>
            <span className="ItemName">John Doe</span>
            <span className="ItemEmail">johndoe@email.com</span>
            <span className="ItemWallet">$500</span>
          </li>
          <li className={cn(cls.rowsListItem)}>
            <span className="ItemName">John Doe</span>
            <span className="ItemEmail">johndoe@email.com</span>
            <span className="ItemWallet">$500</span>
          </li>
          <li className={cn(cls.rowsListItem)}>
            <span className="ItemName">John Doe</span>
            <span className="ItemEmail">johndoe@email.com</span>
            <span className="ItemWallet">$500</span>
          </li>
          <li className={cn(cls.rowsListItem)}>
            <span className="ItemName">John Doe</span>
            <span className="ItemEmail">johndoe@email.com</span>
            <span className="ItemWallet">$500</span>
          </li>
        </ul>

        {/* <div className={cls.row}>John Doe</div>
          <div className={cls.row}>johndoe@email.com</div>
          <div className={cls.row}>$500</div>
          <div className={cls.row}>Jane Doe</div>
          <div className={cls.row}>janedoe@email.com</div>
          <div className={cls.row}>$1000</div> */}
      </div>
    </section>
  );
};
