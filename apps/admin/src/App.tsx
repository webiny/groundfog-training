import React from "react";
import "./App.scss";
import { Admin /*Plugins, AddMenu, AddRoute,*/ /*AddLogo*/ } from "@webiny/app-serverless-cms";
import { Cognito } from "@webiny/app-admin-users-cognito";
// import { AdminLayout } from "@webiny/app-admin/components/AdminLayout";
// import Helmet from "react-helmet";
// import { LeftPanel, RightPanel, SplitView } from "@webiny/app-admin/components/SplitView";

// import { AddTenantFormField } from "@webiny/app-tenant-manager";
// import gql from "graphql-tag";

export const App: React.FC = () => {
    return (
        <Admin>
            <Cognito />
        </Admin>
    );
};
