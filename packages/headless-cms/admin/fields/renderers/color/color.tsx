import React from "react";
import { CmsEditorFieldRendererPlugin } from "@webiny/app-headless-cms/types";
import { SketchPicker } from "react-color";

export const createSingleColorFieldRenderer = (): CmsEditorFieldRendererPlugin => {
    return {
        type: "cms-editor-field-renderer",
        name: "cms-editor-field-renderer-color",
        renderer: {
            rendererName: "color-input",
            name: `Color Input`,
            description: `Renders a color input.`,
            canUse({ field }) {
                /**
                 * We need to define when this field can be displayed:
                 * - this is not a multiple values field
                 * - must be a color field type rendering to render this
                 */
                return field.type === "color" && !field.multipleValues;
            },
            render({ field, getBind }) {
                const Bind = getBind();

                return (
                    <Bind>
                        {bind => {
                            return (
                                <div>
                                    <h5>{field.label}</h5>
                                    <SketchPicker
                                        color={bind.value || ""}
                                        onChangeComplete={({ hex }) => {
                                            bind.onChange(hex);
                                        }}
                                    />
                                    <p>{field.placeholderText}</p>
                                    <p>{field.helpText}</p>
                                </div>
                            );
                        }}
                    </Bind>
                );
            }
        }
    };
};
