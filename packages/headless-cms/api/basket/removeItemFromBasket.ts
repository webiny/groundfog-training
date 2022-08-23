import { CmsContext } from "@webiny/api-headless-cms/types";
import { getBasketModel } from "./getBasketModel";
import { getItemModel } from "./getItemModel";
import { getUserBasketEntry } from "./getUserBasketEntry";
import { getItemEntry } from "./getItemEntry";
import { BasketItemResponse, ItemsRefFieldValue } from "../types";
import { storeUserBasketEntry } from "./storeUserBasketEntry";

interface RemoveItemFromBasketParams {
    context: CmsContext;
    itemId: string;
}

export const removeItemFromBasket = async (
    params: RemoveItemFromBasketParams
): Promise<BasketItemResponse> => {
    const { context, itemId } = params;
    /**
     * We need the models first.
     */
    const basketModel = await getBasketModel({
        context
    });
    const itemModel = await getItemModel({
        context
    });
    /**
     * Let us fetch the user basket
     */
    const basket = await getUserBasketEntry({
        context,
        model: basketModel
    });

    const item = await getItemEntry({
        context,
        model: itemModel,
        id: itemId
    });

    /**
     * We will manually remove the item from the basket
     */
    const items: ItemsRefFieldValue[] =
        Array.isArray(basket.values["items"]) === true ? basket.values["items"] : [];

    basket.values["items"] = items.filter(i => {
        return i.entryId !== item.entryId;
    });

    const identity = context.security.getIdentity();

    try {
        const result = await storeUserBasketEntry({
            context,
            model: basketModel,
            basket
        });
        return {
            basketId: result.id,
            itemId: item.id,
            userId: identity.id
        };
    } catch (ex) {
        throw new Error(`Could not store user basket: ${ex.message}`);
    }
};
