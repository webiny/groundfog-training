import React, { Fragment } from "react";
import {
    AddUserMenuItem,
    UserMenuHandleRenderer,
    Plugins
} from "@webiny/app-serverless-cms";
import { createComponentPlugin } from "@webiny/app-admin";
import { UserInfo } from "./userInfo";
import { SignOut } from "./signOut";
import { UserImage } from "./userImage";

const UserImagePlugin = createComponentPlugin(UserMenuHandleRenderer, () => {
    return function UserImageHOC() {
        return <UserImage />;
    }
})

export const UserMenuModule: React.FC = () => {
    return (
        <Fragment>
            <UserImagePlugin/>
            <Plugins>
                <AddUserMenuItem element={<UserInfo />} />
                <AddUserMenuItem element={<SignOut />} />
            </Plugins>
        </Fragment>
    );
};
