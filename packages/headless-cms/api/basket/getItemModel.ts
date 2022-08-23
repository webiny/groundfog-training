import { Model } from "../types";
import { CmsContext } from "@webiny/api-headless-cms/types";

interface Params {
    context: CmsContext;
}
export const getItemModel = async (params: Params) => {
    const { context } = params;
    const model = await context.cms.getModel(Model.WebshopItem);
    if (model) {
        return model;
    }
    throw new Error(`Could not find Item model.`);
};
