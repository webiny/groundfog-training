import { CmsContext, CmsEntry, CmsModel } from "@webiny/api-headless-cms/types";

interface GetItemEntryParams {
    context: CmsContext;
    model: CmsModel;
    id: string;
}
export const getItemEntry = async (params: GetItemEntryParams): Promise<CmsEntry> => {
    const { context, model, id } = params;

    try {
        const result = await context.cms.getEntry(model, {
            where: {
                id,
                published: true
            }
        });
        if (result) {
            return result;
        }
    } catch (ex) {
        throw new Error(`There is no item with ID "${id}". Original error: ${ex.message}`);
    }
    throw new Error(`There is no item with ID "${id}"`);
};
