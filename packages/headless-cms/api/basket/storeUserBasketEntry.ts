import { CmsContext, CmsEntry, CmsModel } from "@webiny/api-headless-cms/types";

interface StoreUserBasketEntryParams {
    context: CmsContext;
    model: CmsModel;
    basket: CmsEntry;
}

export const storeUserBasketEntry = async (
    params: StoreUserBasketEntryParams
): Promise<CmsEntry> => {
    const { context, model, basket } = params;

    try {
        return await context.cms.updateEntry(model, basket.id, {
            ...basket.values
        });
    } catch (ex) {
        throw new Error(`Could not update user basket: ${ex.message}`);
    }
};
