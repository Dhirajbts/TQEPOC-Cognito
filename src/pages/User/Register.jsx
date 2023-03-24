import React, { useState } from "react";
import { signUp } from "../../States/userFunctions";

const Register = () => {
    const [passWord, setPassWord] = useState();
    const [cpassWord, setCpassWord] = useState();
    const [userInfo, setUserInfo] = useState({
        firstName: "",
        lastName: "",
        userName: "",
        email: "",
        from: "",
    });

    //
    function handleRegister() {
        if (!Object.values(userInfo).some((x) => x === "")) {
            if (passWord === cpassWord) {
                var unixTime = +new Date();
                var newUnixTime = unixTime.toString();

                let formData = {
                    firstName: userInfo.firstName,
                    lastName: userInfo.lastName,
                    updated_at: newUnixTime,
                    email: userInfo.email,
                    password: passWord,
                    username: userInfo.userName,
                    from: userInfo.from,
                };

                signUp(formData);
            } else {
                alert("Passwords Do not match");
            }
        } else {
            alert("Few Elements are missing");
        }
    }

    return (
        <div>
            <div
                className="bg-success d-flex align-items-center justify-content-center text-white"
                style={{ height: "6rem" }}
            >
                <span className="h4 mx-2">
                    <b>Register</b>
                </span>
                <div className="header-line"></div>
                <span className="h4 font-weight-light mx-2">
                    Create Your Account
                </span>
            </div>
            <div className="d-flex justify-content-center align-items-center">
                <div className="w-50 ">
                    <h5>Account Information</h5>
                    <div className="d-flex justify-content-start flex-column text-start mb-2">
                        <div>First Name</div>
                        <input
                            type="text"
                            onChange={(e) =>
                                setUserInfo({
                                    ...userInfo,
                                    firstName: e.target.value,
                                })
                            }
                        />
                    </div>
                    <div className="d-flex justify-content-start flex-column text-start mb-2">
                        <div>Last Name</div>
                        <input
                            type="text"
                            onChange={(e) =>
                                setUserInfo({
                                    ...userInfo,
                                    lastName: e.target.value,
                                })
                            }
                        />
                    </div>
                    <div className="d-flex justify-content-start flex-column text-start mb-2">
                        <div>Username</div>
                        <input
                            type="text"
                            onChange={(e) =>
                                setUserInfo({
                                    ...userInfo,
                                    userName: e.target.value,
                                })
                            }
                        />
                    </div>
                    <div className="d-flex justify-content-start flex-column text-start mb-2">
                        <div>Email</div>
                        <input
                            type="email"
                            onChange={(e) =>
                                setUserInfo({
                                    ...userInfo,
                                    email: e.target.value,
                                })
                            }
                        />
                    </div>
                    <div className="d-flex justify-content-start flex-column text-start mb-2">
                        <div>Password</div>
                        <input
                            type="password"
                            onChange={(e) => setPassWord(e.target.value)}
                        />
                    </div>
                    <div className="d-flex justify-content-start flex-column text-start mb-2">
                        <div>Confirm Password</div>
                        <input
                            type="password"
                            onChange={(e) => setCpassWord(e.target.value)}
                        />
                    </div>
                    <div className="d-flex justify-content-start flex-column text-start mb-4">
                        <div>From where did you know us?</div>
                        <select
                            name="choice"
                            onChange={(e) =>
                                setUserInfo({
                                    ...userInfo,
                                    from: e.target.value,
                                })
                            }
                        >
                            <option selected disabled>
                                Select option
                            </option>
                            <option value="first">First Value</option>
                            <option value="second">Second Value</option>
                            <option value="third">Third Value</option>
                        </select>
                    </div>
                    <div className="d-flex flex-column">
                        <div className="text-center">
                            <button
                                className="btn bg-success text-white mb-2"
                                onClick={handleRegister}
                            >
                                Create Account & Continue
                            </button>
                        </div>
                        <span>
                            Already have an account?{" "}
                            <span className="text-success">
                                <a href="/">Sign In</a>
                            </span>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
