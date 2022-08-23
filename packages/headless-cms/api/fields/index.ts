import { CmsModelFieldToGraphQLPlugin } from "@webiny/api-headless-cms/types";
import { createColorField } from "./color";

export const createFields = (): CmsModelFieldToGraphQLPlugin[] => {
    return [createColorField()];
};
