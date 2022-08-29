import { createApiApp } from "@webiny/serverless-cms-aws";

export default createApiApp({
    pulumi(app) {
        app.setCommonLambdaEnvVariables({
            AUTH0_ISSUER: process.env.AUTH0_ISSUER
        });
    }
});
