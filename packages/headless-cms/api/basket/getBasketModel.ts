import { Model } from "../types";
import { CmsContext } from "@webiny/api-headless-cms/types";

interface Params {
    context: CmsContext;
}

export const getBasketModel = async ({ context }: Params) => {
    const model = await context.cms.getModel(Model.WebshopBasket);
    if (model) {
        return model;
    }
    throw new Error(`Could not find Basket model.`);
};
