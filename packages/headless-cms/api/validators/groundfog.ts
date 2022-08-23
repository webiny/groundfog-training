import { CmsModelFieldValidatorPlugin } from "@webiny/api-headless-cms/types";

export const createGroundfogValidator = (): CmsModelFieldValidatorPlugin => {
    return {
        type: "cms-model-field-validator",
        name: "cms-model-field-validator-groundfog",
        validator: {
            name: "groundfog",
            validate: async ({ field, value: initialValue }) => {
                /**
                 * If there is no value passed, we are assuming that user does not want any value to be validated.
                 * If user needs something to passed into a groundfog validated field, they must add "required" validator.
                 */
                const value = String(initialValue || "").trim();
                if (!value) {
                    return true;
                }
                /**
                 * We validate that the input value does NOT have a groundfog word in it.
                 */
                if (value.match(/groundfog/i) === null) {
                    return true;
                }
                throw new Error(
                    `Field "${field.fieldId}" value contains word "groundfog", which is not allowed.`
                );
            }
        }
    };
};
