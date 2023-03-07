import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { CssBaseline } from "@mui/material";
import { RouterProvider } from "react-router-dom";
import "./index.scss";
import Router from "./routes/Router";
import ThemeWrapper from "./containers/ThemeWrapper/ThemeWrapper";
import { RecoilRoot } from "recoil";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RecoilRoot>
      <ThemeWrapper>
        <CssBaseline />
        <RouterProvider router={Router} />
      </ThemeWrapper>
    </RecoilRoot>
  </React.StrictMode>
);
