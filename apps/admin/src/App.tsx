import React from "react";
import { Admin, /*AddLogo*/ } from "@webiny/app-serverless-cms";
import { Cognito } from "@webiny/app-admin-users-cognito";
import "./App.scss";
// import { AddMenu, AddRoute, Plugins } from "@webiny/app-admin";
// import { AdminLayout } from "@webiny/app-admin/components/AdminLayout";
// import Helmet from "react-helmet";
// import { LeftPanel, RightPanel, SplitView } from "@webiny/app-admin/components/SplitView";

export const App: React.FC = () => {
    return (
        <Admin>
            <Cognito />
        </Admin>
    );
};
