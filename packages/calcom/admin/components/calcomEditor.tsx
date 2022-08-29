import React, { useEffect, useState } from "react";
import { css } from "emotion";
import styled from "@emotion/styled";
import Cal, { getCalApi } from "@calcom/embed-react";
import { GlobalCal } from "@calcom/embed-core";
import { ElementRoot } from "@webiny/app-page-builder/render/components/ElementRoot";
import { PbEditorElement } from "@webiny/app-page-builder/types";
import { ReactComponent as CalComIcon } from "../assets/calcom-icon.svg";

const outerWrapper = css({
    boxSizing: "border-box"
});

const PreviewBox = styled("div")({
    textAlign: "center",
    height: 50,
    svg: {
        height: 50,
        width: 50,
        color: "var(--mdc-theme-text-secondary-on-background)"
    }
});

interface CalComProps {
    element: PbEditorElement;
}

const CalComEditor: React.FC<CalComProps> = ({ element }) => {
    const [cal, setCalendarApi] = useState<GlobalCal | undefined>(undefined);

    const { brandColor, calLink } = element.data["calendarConfig"];

    useEffect(() => {
        // This `useEffect` we only want to execute once for the lifetime of this component.
        getCalApi().then(cal => {
            setCalendarApi(() => cal);
        });
    }, []);

    useEffect(() => {
        // This `useEffect` we only want to run if calendar is loaded and ready to use.
        if (!cal) {
            return;
        }

        const brandColorStyle = { brandcolor: brandColor } as React.CSSProperties;
        cal("ui", { styles: { branding: brandColorStyle } });
    }, [cal]);

    if (!calLink || !cal) {
        return (
            <PreviewBox>
                <CalComIcon />
            </PreviewBox>
        );
    }

    return (
        <ElementRoot
            className={
                "webiny-pb-base-page-element-style webiny-pb-page-element-calcom-calendar " +
                outerWrapper
            }
            element={element}
        >
            <Cal
                // Add a `key` prop, so the calendar component is re-created every time the calendar
                // link changes; otherwise, changes are not picked up by Cal.com component.
                key={calLink}
                calLink={calLink}
                style={{ width: "100%", height: "100%", overflow: "scroll" }}
            />
        </ElementRoot>
    );
};

export default CalComEditor;
