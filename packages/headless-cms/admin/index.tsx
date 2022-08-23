import { createColorField } from "./fields/color";
import { createColorFieldRenderers } from "./fields/renderers/color";
import { createGroundfogValidator } from "./validators/groundfog";

export const createGroundfogHeadlessCmsPlugins = () => {
    return [createColorField(), ...createColorFieldRenderers(), createGroundfogValidator()];
};
