import React, { ReactNode } from "react";
import GenericMessage from "../../components/GenericMessage/GenericMessage";
import Spinner from "../../components/Spinner/Spinner";

type Props = {
  isLoading: boolean;
  isError: boolean;
  isEmptyData: boolean;
  children: ReactNode;
};

const MainContent = ({ isLoading, isError, isEmptyData, children }: Props) => {
  if (isLoading) return <Spinner />;
  if (isError) return <GenericMessage msg='error.genericError' />;
  if (isEmptyData) return <GenericMessage msg='error.dataNotFounded' />;

  return <>{children}</>;
};

export default MainContent;
