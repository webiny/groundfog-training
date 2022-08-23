import { CmsModelFieldToGraphQLPlugin, CmsModelField } from "@webiny/api-headless-cms/types";

interface CreateListFiltersParams {
    field: CmsModelField;
}
const createListFilters = ({ field }: CreateListFiltersParams) => {
    return `
        ${field.fieldId}: String
        ${field.fieldId}_not: String
        ${field.fieldId}_in: [String]
        ${field.fieldId}_not_in: [String]
        ${field.fieldId}_contains: String
        ${field.fieldId}_not_contains: String
    `;
};

export const createColorField = (): CmsModelFieldToGraphQLPlugin => {
    return {
        type: "cms-model-field-to-graphql",
        name: "cms-model-field-to-graphql-color",
        fieldType: "color",
        isSortable: false,
        isSearchable: true,
        read: {
            createTypeField({ field }) {
                if (field.multipleValues) {
                    return `${field.fieldId}: [String!]`;
                }
                return `${field.fieldId}: String`;
            },
            createGetFilters({ field }) {
                return `${field.fieldId}: String`;
            },
            createListFilters
        },
        manage: {
            createListFilters,
            createTypeField({ field }) {
                if (field.multipleValues) {
                    return `${field.fieldId}: [String!]`;
                }
                return `${field.fieldId}: String`;
            },
            createInputField({ field }) {
                /**
                 * We need to find out if we have the "required" validator in the single validation.
                 */
                const singleRequired = (field.validation || []).some(v => v.name === "required")
                    ? "!"
                    : "";
                if (field.multipleValues !== true) {
                    return `${field.fieldId}: String${singleRequired}`;
                }
                /**
                 * We need to find if we have the "required" validator in the list validation.
                 */
                const multipleRequired = (field.listValidation || []).some(
                    v => v.name === "required"
                )
                    ? "!"
                    : "";
                return `${field.fieldId}: [String!]${multipleRequired}`;
            }
        }
    };
};
