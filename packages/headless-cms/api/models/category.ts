import { CmsModelPlugin } from "@webiny/api-headless-cms";
import { Group, Model } from "../types";

export const createCategoryModel = () => {
    return new CmsModelPlugin({
        modelId: Model.WebshopCategory,
        name: "Category",
        description: "Webshop Category",
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
                ]
            },
            // position
            {
                // required
                id: "position",
                fieldId: "position",
                type: "number",
                label: "Position",
                renderer: {
                    name: "number-input"
                },
                // not required but user should define it
                validation: [
                    {
                        name: "required",
                        settings: {},
                        message: `The "Position" field value is required.`
                    }
                ]
            }
            /**
             * Enable when added the color field
             */
            // color
            // {
            //     // required
            //     id: "color",
            //     fieldId: "color",
            //     type: "color",
            //     label: "Color",
            //     renderer: {
            //         name: "color-input"
            //     },
            //     // not required but user should define it
            //     validation: [
            //         {
            //             name: "required",
            //             settings: {},
            //             message: `The "Position" field value is required.`
            //         },
            //         {
            //             name: "unique",
            //             settings: {},
            //             message: `The "Color" field must be unique.`
            //         }
            //     ]
            // }
        ],
        // layout is an array of an array of strings so we can position fields in rows and columns
        layout: [
            ["title"],
            ["position"]
            // ["color"]
        ]
        // tenant: "root",// can be defined for single tenant
        // locale: "en-US",// can be defined for a single locale
    });
};
