import { CmsEditorFieldRendererPlugin } from "@webiny/app-headless-cms/types";
import { createSingleColorFieldRenderer } from "./color";
// import { createMultipleColorFieldRenderer } from "./colors";

export const createColorFieldRenderers = (): CmsEditorFieldRendererPlugin[] => {
    return [
        createSingleColorFieldRenderer()
        // we will skip multiple color field
        //, createMultipleColorFieldRenderer()
    ];
};
