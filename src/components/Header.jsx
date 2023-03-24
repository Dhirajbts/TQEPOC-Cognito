import React, { useEffect, useState } from "react";
import logo from "../asset/images/tqe_logo_black.png";
import { useNavigate } from "react-router-dom";
import Pool from "../States/userPool";

const Header = () => {
    const navigate = useNavigate();
    const [status, setStatus] = useState(false);

    const handleLogout = () => {
        if (status) {
            localStorage.clear("TQE_ACCESS");
            setTimeout(() => {
                navigate("/", { return: true });
            }, 1000);
        } else {
            alert("You must be Log In");
        }
    };

    const getSession = async () => {
        return await new Promise((resolve, reject) => {
            const user = Pool.getCurrentUser();
            if (user) {
                user.getSession((err, session) => {
                    if (err) {
                        reject();
                    } else {
                        resolve(session);
                    }
                });
            } else {
                reject();
            }
        });
    };

    useEffect(() => {
        getSession().then((session) => {
            console.log("session", session);
            setStatus(true);
        });
    }, []);

    return (
        <div>
            <div
                className="text-center bg-green position-relative"
                style={{ padding: "1rem 0" }}
            >
                <img src={logo} alt="tqe-logo" />
                <button className="btn-logout" onClick={handleLogout}>
                    {status ? "Logout" : "Login"}
                </button>
            </div>
            <div className="bg-dark">
                <div className="container">
                    <div className="d-flex justify-content-between align-items-center text-white py-3 ">
                        <div>Picks</div>
                        <div>Player Impact Tools</div>
                        <div>About Us</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
