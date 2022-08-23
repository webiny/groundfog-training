import { createCmsGroups } from "./cmsGroups";
import { createCmsModels } from "./cmsModels";
import { createCmsGraphQL } from "./cmsGraphQL";
import { attachBasketHooks } from "./basket/attachBasketHooks";
import { Plugin } from "@webiny/plugins/types";
import { createFields } from "./fields";
import { createGroundfogValidator } from "./validators/groundfog";

export const groundfogHeadlessCmsPlugins = (): Plugin[] => {
    console.log("Loading groundfog plugins...");
    return [
        /**
         * ## Headless CMS Groups, Models and Entries
         */
        ...createCmsGroups(),
        ...createCmsModels(),
        createCmsGraphQL(),
        attachBasketHooks(),
        /**
         * ## Headless CMS Custom Fields
         */
        ...createFields(),
        // uncomment code in models/item.ts
        createGroundfogValidator()
    ];
};
