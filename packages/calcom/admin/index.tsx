import React from "react";
import styled from "@emotion/styled";
import {
    PbEditorPageElementPlugin,
    DisplayMode,
    PbEditorPageElementAdvancedSettingsPlugin
} from "@webiny/app-page-builder/types";
import { createInitialPerDeviceSettingValue } from "@webiny/app-page-builder/editor/plugins/elementSettings/elementSettingsUtils";

import { ReactComponent as CalComIcon } from "./assets/calcom-icon.svg";
import CalComEditor from "./components/calcomEditor";
import CalComSettings from "./calcomSettings";

const PreviewBox = styled("div")({
    textAlign: "center",
    height: 50,
    svg: {
        height: 50,
        width: 50,
        color: "var(--mdc-theme-text-secondary-on-background)"
    }
});

export default () => {
    return [
        {
            name: "pb-editor-page-element-calcom-calendar",
            type: "pb-editor-page-element",
            elementType: "calcom-calendar",
            toolbar: {
                // We use `pb-editor-element-group-basic` to put our plugin into the Media group.
                title: "Cal.com Calendar",
                group: "pb-editor-element-group-basic",
                preview() {
                    return (
                        <PreviewBox>
                            <CalComIcon />
                        </PreviewBox>
                    );
                }
            },
            settings: [
                "pb-editor-page-element-settings-delete",
                "pb-editor-page-element-style-settings-height",
                "pb-editor-page-element-style-settings-width"
            ],
            target: ["cell", "block"],
            onCreate: "open-settings",
            create(options) {
                /**
                 * Create function is here to create the initial data
                 * for the page element, which then is utilized in the
                 * CalComEditor component and in the element settings.
                 */
                return {
                    type: "calcom-calendar",
                    elements: [],
                    data: {
                        calendarConfig: {
                            // The URL property will be populated when user enters the URL in the element settings.
                            calLink: "",
                            redirectUrl: "",
                            brandColor: "#000000"
                        },
                        settings: {
                            height: createInitialPerDeviceSettingValue(
                                { value: "100%" },
                                DisplayMode.DESKTOP
                            )
                        }
                    },
                    ...options
                };
            },
            render(props) {
                /**
                 * Every render function receives the page element's data assigned to the "element.data" property in
                 * the received props. In here we will store the url which will be provided via the page element's settings.
                 */
                return <CalComEditor {...props} />;
            },
            renderElementPreview({ width, height }) {
                return <img style={{ width, height }} alt={"Cal.com Calendar"} />;
            }
        } as PbEditorPageElementPlugin,

        {
            name: "pb-editor-page-element-advanced-settings-calcom-calendar",
            type: "pb-editor-page-element-advanced-settings",
            elementType: "calcom-calendar",
            render(props) {
                return <CalComSettings {...props} />;
            }
        } as PbEditorPageElementAdvancedSettingsPlugin
    ];
};
