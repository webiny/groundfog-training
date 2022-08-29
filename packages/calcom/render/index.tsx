import React from "react";
import { PbRenderElementPlugin } from "@webiny/app-page-builder/types";
import CalCom from "./components/calcomRender";

// Live example:
// https://site.webiny.com/forms/product-demo/

export default (): PbRenderElementPlugin => {
    return {
        name: "pb-render-page-element-calcom",
        type: "pb-render-page-element",
        elementType: "calcom-calendar",
        render({ element }) {
            return <CalCom element={element} />;
        }
    };
};
