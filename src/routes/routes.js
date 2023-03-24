/* eslint-disable import/no-unresolved */
import React from "react";

export const Home = React.lazy(() => import("../pages/Home.jsx"));
export const Login = React.lazy(() => import("../pages/User/Login"));
export const Register = React.lazy(() => import("../pages/User/Register"));
export const NFL = React.lazy(() => import("../pages/NFLFolder/NFLData"));
export const Soccer = React.lazy(() => import("../pages/Soccer/Soccer"));
