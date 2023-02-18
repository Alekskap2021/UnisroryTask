import { UserDetailsSection } from "./sections/UserDetailsSection";
import { FC } from "react";

interface DetailsPageProps {
  className?: string;
}

const DetailsPage: FC<DetailsPageProps> = (props) => {
  const { className } = props;

  return <UserDetailsSection />;
};

export default DetailsPage;
