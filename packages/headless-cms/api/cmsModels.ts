import { createCategoryModel } from "./models/category";
import { createItemModel } from "./models/item";
import { createBasketModel } from "./models/basket";

export const createCmsModels = () => {
    return [createCategoryModel(), createItemModel(), createBasketModel()];
};
