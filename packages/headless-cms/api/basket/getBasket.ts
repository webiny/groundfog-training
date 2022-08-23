import { CmsContext, CmsEntry } from "@webiny/api-headless-cms/types";
import { getUserBasketEntry } from "./getUserBasketEntry";
import { getBasketModel } from "./getBasketModel";
import { ItemsRefFieldValue } from "../types";
import { getItemModel } from "./getItemModel";

interface GetBasketResponse {
    basket: CmsEntry;
    items: CmsEntry[];
}

interface GetBasketParams {
    context: CmsContext;
}
export const getBasket = async (params: GetBasketParams): Promise<GetBasketResponse> => {
    const { context } = params;

    /**
     * We need the basket model first.
     */
    const basketModel = await getBasketModel({
        context
    });
    /**
     * Then the basket entry...
     */
    const basket = await getUserBasketEntry({
        context,
        model: basketModel
    });
    /**
     * ... and the item model.
     */
    const itemModel = await getItemModel({
        context
    });
    /**
     * It is good to have items in the typed variable.
     */
    const items: ItemsRefFieldValue[] = Array.isArray(basket.values["items"])
        ? basket.values["items"]
        : [];
    /**
     * We need to fetch all the items added to the user basket.
     * The getEntriesByIds fetches exact entry revisions - it is meant for our internal use, but lets have it here.
     * We can even use getPublishedEntriesByIds or getLatestEntriesByIds.
     */
    const entries = await context.cms.getEntriesByIds(
        itemModel,
        items.map(item => item.id)
    );

    return {
        basket,
        items: items
            .map(item => {
                return entries.find(entry => entry.id === item.id);
            })
            .filter(Boolean) as CmsEntry[]
    };
};
