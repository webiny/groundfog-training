import { CmsContext } from "@webiny/api-headless-cms/types";
import { storeUserBasketEntry } from "./storeUserBasketEntry";
import { getUserBasketEntry } from "./getUserBasketEntry";
import { getItemEntry } from "./getItemEntry";
import { getItemModel } from "./getItemModel";
import { getBasketModel } from "./getBasketModel";
import { BasketItemResponse, ItemsRefFieldValue } from "../types";

interface AddItemToBasketParams {
    context: CmsContext;
    itemId: string;
}

export const addItemToBasket = async (
    params: AddItemToBasketParams
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
     * We will manually add the item in the basket
     */
    const items: ItemsRefFieldValue[] =
        Array.isArray(basket.values["items"]) === true ? basket.values["items"] : [];

    items.push({
        id: item.id,
        entryId: item.entryId,
        modelId: itemModel.modelId
    });

    basket.values["items"] = items;

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
