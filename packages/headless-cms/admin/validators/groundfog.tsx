import { CmsModelFieldValidatorPlugin } from "@webiny/app-headless-cms/types";

export const createGroundfogValidator = (): CmsModelFieldValidatorPlugin => {
    return {
        type: "cms-model-field-validator",
        name: "cms-model-field-validator-groundfog",
        validator: {
            name: "groundfog",
            validate: async () => {
                /**
                 * In the UI, we will let the validation pass as it will be stopped on the API side.
                 */
                return true;
            }
        }
    };
};
