import { CmsModelPlugin } from "@webiny/api-headless-cms";
import { Group, Model } from "../types";

export const createBasketModel = () => {
    return new CmsModelPlugin({
        /**
         * We are hiding this model - GraphQL schema for it will not be built.
         */
        isPrivate: true,
        modelId: Model.WebshopBasket,
        name: "Basket",
        description: "Webshop Basket",
        titleFieldId: "userName",
        group: {
            id: Group.Webshop,
            name: "Webshop"
        },
        fields: [
            // userName
            {
                // required
                id: "userName",
                fieldId: "userName",
                type: "text",
                label: "User Name",
                renderer: {
                    name: "text-input"
                },
                // not required but user should define it
                validation: [
                    {
                        name: "required",
                        settings: {},
                        message: `The "User Name" field value is required.`
                    }
                ]
            },
            // userId
            {
                // required
                id: "userId",
                fieldId: "userId",
                type: "text",
                label: "User ID",
                renderer: {
                    name: "text-input"
                },
                // not required but user should define it
                validation: [
                    {
                        name: "required",
                        settings: {},
                        message: `The "User ID" field value is required.`
                    },
                    {
                        name: "unique",
                        settings: {},
                        message: `The "User ID" field must be unique.`
                    }
                ]
            },
            // items in the basked
            {
                // required
                id: "items",
                fieldId: "items",
                type: "ref",
                label: "Items",
                multipleValues: true,
                settings: {
                    models: [
                        {
                            modelId: "webshopItem"
                        }
                    ]
                },
                renderer: {
                    name: "ref-inputs"
                },
                // not required but user should define it
                validation: []
            }
        ],
        // layout is an array of an array of strings so we can position fields in rows and columns
        layout: [["userName", "userId"], ["items"]]
        // tenant: "root",// can be defined for single tenant
        // locale: "en-US",// can be defined for a single locale
    });
};
