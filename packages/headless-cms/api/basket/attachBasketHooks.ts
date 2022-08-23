import { ContextPlugin } from "@webiny/handler";
import { CmsContext } from "@webiny/api-headless-cms/types";
import { Model } from "../types";

export const attachBasketHooks = () => {
    return new ContextPlugin<CmsContext>(async context => {
        /**
         * We do not want to allow a new revision of the basket entry.
         */
        context.cms.onBeforeEntryCreateRevision.subscribe(async ({ model, entry }) => {
            if (model.modelId !== Model.WebshopBasket) {
                return;
            }
            throw new Error(
                `You should never create a new revision of the webshop basket of a user. ID: ${entry.id}`
            );
        });
        /**
         * We do not want to allow deletion.
         */
        context.cms.onBeforeEntryDelete.subscribe(async ({ model, entry }) => {
            if (model.modelId !== Model.WebshopBasket) {
                return;
            }
            throw new Error(
                `You should never delete the webshop basket of a user. ID: ${entry.id}`
            );
        });
        context.cms.onBeforeEntryDeleteRevision.subscribe(async ({ model, entry }) => {
            if (model.modelId !== Model.WebshopBasket) {
                return;
            }
            throw new Error(
                `You should never delete the webshop basket of a user. ID: ${entry.id}`
            );
        });
        /**
         * We do not want to allow publishing of the basket entry.
         */
        context.cms.onBeforeEntryPublish.subscribe(async ({ model, entry }) => {
            if (model.modelId !== Model.WebshopBasket) {
                return;
            }
            throw new Error(
                `You should never publish the webshop basket of a user. ID: ${entry.id}`
            );
        });
    });
};
