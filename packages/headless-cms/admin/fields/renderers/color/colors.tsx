// import React from "react";
// import { CmsEditorFieldRendererPlugin } from "@webiny/app-headless-cms/types";
// import { SketchPicker } from "react-color";
// import DynamicSection from "@webiny/app-headless-cms/admin/plugins/fieldRenderers/DynamicSection";
//
// export const createMultipleColorFieldRenderer = (): CmsEditorFieldRendererPlugin => {
//     return {
//         type: "cms-editor-field-renderer",
//         name: "cms-editor-field-renderer-color-multiple",
//         renderer: {
//             rendererName: "color-inputs",
//             name: `Color Inputs`,
//             description: `Renders a color inputs.`,
//             canUse({ field }) {
//                 /**
//                  * We need to define when this field can be displayed:
//                  * - this is a multiple values field
//                  * - must be a color field type rendering to render this
//                  */
//                 return field.type === "color" && !!field.multipleValues;
//             },
//             render(props) {
//                 return (
//                     <DynamicSection {...props}>
//                         {({ bind, index }) => {
//                             return (
//                                 <Input
//                                     {...bind.index}
//                                     onChange={value => {
//                                         return bind.index.onChange(value);
//                                     }}
//                                     autoFocus
//                                     onEnter={() => bind.field.appendValue("")}
//                                     label={t`Value {number}`({ number: index + 1 })}
//                                     type="number"
//                                     trailingIcon={
//                                         index > 0 && {
//                                             icon: <DeleteIcon />,
//                                             onClick: () => bind.field.removeValue(index)
//                                         }
//                                     }
//                                 />
//                             );
//                         }}
//                     </DynamicSection>
//                 );
//                 const Bind = getBind();
//
//                 return (
//                     <Bind>
//                         {bind => {
//                             const values = (Array.isArray(bind.value) ? bind.value : []).filter(
//                                 Boolean
//                             );
//                             return (
//                                 <div>
//                                     <h5>{field.label}</h5>
//                                     {values.map((value, index) => {
//                                         return (
//                                             <SketchPicker
//                                                 key={`color-picker-${index}`}
//                                                 color={value}
//                                                 onChangeComplete={({ hex }) => {
//                                                     bind.onChange(hex);
//                                                 }}
//                                             />
//                                         );
//                                     })}
//                                     <p>field.placeholderText</p>
//                                     <p>field.helpText</p>
//                                 </div>
//                             );
//                         }}
//                     </Bind>
//                 );
//             }
//         }
//     };
// };
