import React, { ReactNode } from "react";
import { IntlProvider } from "react-intl";
import flatten from "flat";
import Spanish from "../../translations/es-ES.json";
import English from "../../translations/en-US.json";

type Props = {
  children: ReactNode;
};

const Translations = ({ children }: Props) => {
  const localLang = navigator.language;
  const lang = localLang === "es-ES" ? Spanish : English;

  return (
    <IntlProvider locale={localLang} messages={flatten(lang)}>
      {children}
    </IntlProvider>
  );
};

export default Translations;
