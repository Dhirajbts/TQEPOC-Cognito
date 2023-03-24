/* eslint-disable react/prop-types */
import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
    const token = localStorage.getItem("TQE_ACCESS");

    if (token) {
        return <Outlet />;
    } else {
        return <Navigate to={"/"} />;
    }
};

export default PrivateRoute;
