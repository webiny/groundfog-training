import { CmsContext, CmsEntry, CmsModel } from "@webiny/api-headless-cms/types";

interface GetUserBasketEntryParams {
    context: CmsContext;
    model: CmsModel;
}
export const getUserBasketEntry = async (params: GetUserBasketEntryParams): Promise<CmsEntry> => {
    const { context, model } = params;
    /**
     * We need a user id - we can get it from the security context
     */
    const identity = context.security.getIdentity();
    const userId = identity.id;
    /**
     * Then we go and fetch existing basket.
     */
    try {
        const entry = await context.cms.getEntry(model, {
            where: {
                userId,
                /**
                 * We always take the latest one.
                 * There should be no published
                 */
                latest: true
            }
        });
        if (entry) {
            return entry;
        }
    } catch (ex) {
        // disregard the error
    }
    /**
     * ... and if none exists, we will create one and return it.
     * Note that this will throw an error if something goes wrong.
     */
    const result = await context.cms.createEntry(model, {
        userId,
        userName: identity.displayName,
        items: []
    });
    if (result) {
        return result;
    }
    throw new Error(`Could not create a basket for user "${userId}". Reason unknown...`);
};
