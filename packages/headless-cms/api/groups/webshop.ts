import { CmsGroupPlugin } from "@webiny/api-headless-cms";
import { Group } from "../types";

export const createWebshopGroup = () => {
    return new CmsGroupPlugin({
        id: Group.Webshop,
        name: "Webshop",
        slug: Group.Webshop,
        icon: "fab/shopify",
        description: "Group containing webshop models"
        // tenant: "root",// can be defined for single tenant
        // locale: "en-US",// can be defined for a single locale
    });
};
