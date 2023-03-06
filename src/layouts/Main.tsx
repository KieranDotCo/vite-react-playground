import React, { PropsWithChildren } from "react";
import {Outlet} from 'react-router-dom'
import NavBar from "./NavBar/NavBar";


const Main: React.FC<PropsWithChildren> = (props) => {
  return (
    <>
      <NavBar/>
      <main role="main"><Outlet /></main>
    </>
  );
};

export default Main
