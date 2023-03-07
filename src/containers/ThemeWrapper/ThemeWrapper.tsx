import React, { PropsWithChildren } from "react";
import theme from "../../theme";
import {
  Experimental_CssVarsProvider as CssVarsProvider,
  experimental_extendTheme as extendTheme,
} from "@mui/material/styles";

type Props = {} & PropsWithChildren;

const ThemeWrapper: React.FC<Props> = (props) => {
  const _theme = {...theme}
  const extendedTheme = extendTheme(_theme);
  return (
    <CssVarsProvider theme={extendedTheme}>{props.children}</CssVarsProvider>
  );
};

export default ThemeWrapper;
