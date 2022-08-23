export enum Model {
    WebshopCategory = "webshopCategory",
    WebshopItem = "webshopItem",
    WebshopBasket = "webshopBasket"
}

export enum Group {
    Webshop = "webshop"
}

export interface ItemsRefFieldValue {
    id: string;
    entryId: string;
    modelId: string;
}

export interface BasketItemResponse {
    itemId: string;
    basketId: string;
    userId: string;
}
