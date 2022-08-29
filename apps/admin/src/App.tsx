import React from "react";
import { Admin } from "@webiny/app-serverless-cms";
import { Auth0 } from "@groundfog/auth0/admin";
import "./App.scss";

export const App: React.FC = () => {
    return (
        <Admin>
            <Auth0
                auth0={{
                    domain: process.env.REACT_APP_AUTH0_ISSUER,
                    clientId: process.env.REACT_APP_AUTH0_CLIENT_ID
                }}
                rootAppClientId={process.env.REACT_APP_AUTH0_CLIENT_ID}
            />
        </Admin>
    );
};
