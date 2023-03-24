// import { getAuthenticate } from "../reducer/Auth";
// import { useDispatch } from "react-redux";

import {
    initAWS,
    setCognitoAttributeList,
    getUserPool,
    getCognitoAttributeList,
    getCognitoUser,
    getAuthDetails,
    decodeJWTToken,
    // logout,
} from "../States/AwsConfig";

export function signUp(data) {
    var email = data.email;
    var password = data.password;
    var agent = "none";

    console.log(agent, ":::;");

    return new Promise((resolve) => {
        initAWS();
        setCognitoAttributeList(email, agent);
        getUserPool().signUp(
            email,
            password,
            getCognitoAttributeList(),
            null,
            (err, result) => {
                if (err) {
                    return resolve({ statusCode: 422, response: err });
                } else {
                    const response = {
                        username: result.user.username,
                        userConfirmed: result.userConfirmed,
                        userAgent: result.user.client.userAgent,
                    };
                    const confirmCode = prompt("Confirmation code:");
                    verify(email, confirmCode);
                    return resolve({ statusCode: 201, response: response });
                }
            }
        );
    });
}

function verify(email, code) {
    return new Promise((resolve) => {
        getCognitoUser(email).confirmRegistration(code, true, (err, result) => {
            if (err) {
                return resolve({ statusCode: 422, response: err });
            }
            return resolve({ statusCode: 400, response: result });
        });
    });
}

// export const userLogout = () => {
//     console.log("user");
//     logout();
// };

export function signIn(email, password) {
    return new Promise((resolve) => {
        getCognitoUser(email).authenticateUser(
            getAuthDetails(email, password),
            {
                onSuccess: (result) => {
                    const token = {
                        accessToken: result.getAccessToken().getJwtToken(),
                        idToken: result.getIdToken().getJwtToken(),
                        refreshToken: result.getRefreshToken().getToken(),
                    };

                    localStorage.setItem("TQE_ACCESS", token.accessToken);
                    if (token.accessToken) {
                        window.location.href = "/dashboard";
                    }
                    return resolve({
                        statusCode: 200,
                        response: decodeJWTToken(token),
                    });
                },

                onFailure: (err) => {
                    return resolve({
                        statusCode: 400,
                        response: err.message || JSON.stringify(err),
                    });
                },
            }
        );
    });
}
