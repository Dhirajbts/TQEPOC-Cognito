/* eslint-disable import/no-unresolved */
import React, { useState } from "react";
// eslint-disable-next-line import/namespace
import { signIn } from "../../States/userFunctions";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header";

const Login = () => {
    const navigate = useNavigate();
    const [userName, setUserName] = useState();
    const [password, setPassword] = useState();

    const token = localStorage.getItem("TQE_ACCESS");

    if (token) {
        navigate("/dashboard", { return: true });
    }

    const handleLogin = (e) => {
        e.preventDefault();
        signIn(userName, password);
    };

    return (
        <div>
            <Header />
            <div
                className="bg-success d-flex align-items-center justify-content-center text-white"
                style={{ height: "6rem" }}
            >
                <span className="h4 mx-2">
                    <b>Login</b>
                </span>
            </div>
            <div className="d-flex justify-content-center align-items-center">
                <div className="w-50 ">
                    <div className="d-flex justify-content-start flex-column text-start mb-2">
                        <div>Username</div>
                        <input
                            type="text"
                            onChange={(e) => setUserName(e.target.value)}
                        />
                    </div>
                    <div className="d-flex justify-content-start flex-column text-start mb-2">
                        <div>Password</div>
                        <input
                            type="password"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    <div className="text-center">
                        <button
                            className="btn bg-success text-white "
                            onClick={handleLogin}
                        >
                            Login
                        </button>
                    </div>
                    {/* <div>
                        <div>
                            <div
                                className="fb-login-button"
                                data-width=""
                                data-size=""
                                data-button-type=""
                                data-layout=""
                                data-auto-logout-link="false"
                                data-use-continue-as="false"
                            ></div>
                            <div
                                className="google-login-button"
                                data-width=""
                                data-size=""
                                data-button-type=""
                                data-layout=""
                                data-auto-logout-link="false"
                                data-use-continue-as="false"
                            ></div>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default Login;
