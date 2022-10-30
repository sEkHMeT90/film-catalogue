import React from "react";
import { FormattedMessage } from "react-intl";

export const Header = () => {
  return (
    <header>
      <h1>
        <FormattedMessage id='common.titleApp' />
      </h1>
    </header>
  );
};

export default Header;
