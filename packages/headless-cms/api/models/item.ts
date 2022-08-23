import { CmsModelPlugin } from "@webiny/api-headless-cms";
import { Model, Group } from "../types";

export const createItemModel = () => {
    return new CmsModelPlugin({
        modelId: Model.WebshopItem,
        name: "Item",
        description: "Webshop Item",
        titleFieldId: "title",
        group: {
            id: Group.Webshop,
            name: "Webshop"
        },
        fields: [
            // title
            {
                // required
                id: "title",
                fieldId: "title",
                type: "text",
                label: "Title",
                renderer: {
                    name: "text-input"
                },
                // not required but user should define it
                validation: [
                    {
                        name: "required",
                        settings: {},
                        message: `The "Title" field value is required.`
                    }
                    // custom validator
                    // {
                    //     name: "groundfog",
                    //     settings: {},
                    //     message: `The "Title" field value cannot contain word "groundfog".`
                    // }
                ]
            },
            // available
            {
                // required
                id: "available",
                fieldId: "available",
                type: "text",
                label: "Available",
                renderer: {
                    name: "select-box"
                },
                // not required but user should define it
                validation: [
                    {
                        name: "required",
                        settings: {},
                        message: `The "Available" field value is required.`
                    }
                ],
                // we want to give only a certain number of options
                predefinedValues: {
                    enabled: true,
                    values: [
                        {
                            label: "Yes",
                            value: "yes",
                            selected: true
                        },
                        {
                            label: "No",
                            value: "no",
                            selected: false
                        },
                        {
                            label: "Offline only",
                            value: "offline-only",
                            selected: false
                        }
                    ]
                }
            },
            // category
            {
                // required
                id: "category",
                fieldId: "category",
                type: "ref",
                label: "Webshop Category",
                settings: {
                    models: [
                        {
                            modelId: "webshopCategory"
                        }
                    ]
                },
                renderer: {
                    name: "ref-input"
                },
                // not required but user should define it
                validation: [
                    {
                        name: "required",
                        settings: {},
                        message: `The "Category" field value is required.`
                    }
                ]
            }
        ],
        // layout is an array of an array of strings, so we can position fields in rows and columns
        layout: [["title"], ["available"], ["category"]]
        // tenant: "root",// can be defined for single tenant
        // locale: "en-US",// can be defined for a single locale
    });
};
