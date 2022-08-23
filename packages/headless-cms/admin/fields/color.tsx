import React from "react";
import { ReactComponent as TextIcon } from "@webiny/app-headless-cms/admin/plugins/fields/icons/round-text_fields-24px.svg";
import { Grid, Cell } from "@webiny/ui/Grid";
import { CmsEditorFieldTypePlugin } from "@webiny/app-headless-cms/types";
import { Input } from "@webiny/ui/Input";

export const createColorField = (): CmsEditorFieldTypePlugin => {
    return {
        type: "cms-editor-field-type",
        name: "cms-editor-field-type-color",
        field: {
            type: "color",
            validators: [
                /**
                 * We want to be able to define that field is required.
                 */
                "required",
                /**
                 * And also, we can define it must be unique. So two entries in the model will never have same color.
                 */
                "unique"
            ],
            label: `Color`,
            description: `Color picker`,
            icon: <TextIcon />,
            allowMultipleValues: false,
            allowPredefinedValues: false,
            multipleValuesLabel: `Use as a list of colors`,
            createField() {
                return {
                    type: "color",
                    validation: [],
                    renderer: {
                        name: "color-input"
                    }
                };
            },
            renderSettings({ form: { Bind } }) {
                return (
                    <Grid>
                        <Cell span={12}>
                            <Bind name={"placeholderText"}>
                                <Input
                                    label={`Placeholder text`}
                                    description={`Placeholder text (optional)`}
                                />
                            </Bind>
                        </Cell>
                    </Grid>
                );
            }
        }
    };
};
