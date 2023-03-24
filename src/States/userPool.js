import { CognitoUserPool } from "amazon-cognito-identity-js";

const poolData = {
    UserPoolId: "us-east-1_eF7n2WjBg",
    ClientId: "g4o8u7uibq75a77g7en3qiag7",
};

export default new CognitoUserPool(poolData);
