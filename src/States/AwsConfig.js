import AWS from "aws-sdk";
import jwt_decode from "jwt-decode";
import {
    CognitoUserPool,
    CognitoUserAttribute,
    CognitoUser,
    AuthenticationDetails,
} from "amazon-cognito-identity-js";
import { fromCognitoIdentity } from "@aws-sdk/credential-providers";

let cognitoAttributeList = [];

console.log("::::::", process.env.AWS_COGNITO_USER_POOL_ID);

// const poolData = {
//     UserPoolId: process.env.AWS_COGNITO_USER_POOL_ID,
//     ClientId: process.env.AWS_COGNITO_CLIENT_ID,
// };

const poolData = {
    UserPoolId: "us-east-1_eF7n2WjBg",
    ClientId: "g4o8u7uibq75a77g7en3qiag7",
};

const attributes = (key, value) => {
    return {
        Name: key,
        Value: value,
    };
};

export function setCognitoAttributeList(email, agent) {
    let attributeList = [];
    attributeList.push(attributes("email", email));
    console.log("agent", agent);
    attributeList.forEach((element) => {
        cognitoAttributeList.push(new CognitoUserAttribute(element));
    });
}

export function getCognitoAttributeList() {
    return cognitoAttributeList;
}

export function getCognitoUser(email) {
    const userData = {
        Username: email,
        Pool: getUserPool(),
    };
    return new CognitoUser(userData);
}

export function getUserPool() {
    return new CognitoUserPool(poolData);
}

export function getAuthDetails(email, password) {
    var authenticationData = {
        Username: email,
        Password: password,
    };
    return new AuthenticationDetails(authenticationData);
}

export function initAWS(
    region = process.env.AWS_COGNITO_REGION,
    identityPoolId = process.env.AWS_COGNITO_IDENTITY_POOL_ID
) {
    AWS.config.region = region; // Region
    AWS.config.credentials = new AWS.CognitoIdentityCredentials({
        IdentityPoolId: identityPoolId,
    });
}

export function decodeJWTToken(token) {
    const { email, exp, auth_time, token_use, sub } = jwt_decode(token.idToken);
    return { token, email, exp, uid: sub, auth_time, token_use };
}

// ES6 import
// const { fromCognitoIdentity } = require("@aws-sdk/credential-providers"); // CommonJS import

// const client = new FooClient({
//     region,
//     credentials: fromCognitoIdentity({
//         // Required. The unique identifier for the identity against which credentials
//         // will be issued.
//         identityId: "us-east-1:73ee4df2-b0f3-4eeb-966a-2266cb67d485 ",
//         // Optional. The ARN of the role to be assumed when multiple roles were received in the token
//         // from the identity provider.
//         customRoleArn:
//             "arn:aws:cognito-idp:us-east-1:509281608718:userpool/us-east-1_eF7n2WjBg",
//         // Optional. A set of name-value pairs that map provider names to provider tokens.
//         // Required when using identities associated with external identity providers such as Facebook.
//         logins: {
//             "graph.facebook.com": "FBTOKEN",
//             "www.amazon.com": "AMAZONTOKEN",
//             "accounts.google.com": "GOOGLETOKEN",
//             "api.twitter.com": "TWITTERTOKEN'",
//             "www.digits.com": "DIGITSTOKEN",
//         },
//         // Optional. Custom client config if you need overwrite default Cognito Identity client
//         // configuration.
//         clientConfig: { region },
//     }),
// });
