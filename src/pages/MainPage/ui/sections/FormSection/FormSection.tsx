// Hooks
import { FC } from "react";
import { useAppSelector } from "shared/lib/storeHooks";

// Components
import { UsersTable } from "widgets/UsersTable";
import { RegistrationForm } from "features";

// Assets
import cls from "./FormSection.module.scss";

export const FormSection: FC = () => {
  const { isTableVisible } = useAppSelector((state) => state.registrationSlice);

  return (
    <section className={cls.FormSection}>
      <RegistrationForm />

      {isTableVisible && <UsersTable />}
    </section>
  );
};
