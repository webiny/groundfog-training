import { createWebshopGroup } from "./groups/webshop";
import { Plugin } from "@webiny/plugins/types";

export const createCmsGroups = (): Plugin[] => {
    return [createWebshopGroup()];
};
