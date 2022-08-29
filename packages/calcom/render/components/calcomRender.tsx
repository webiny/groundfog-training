import React, { useEffect } from "react";
import { css } from "emotion";
import { ElementRoot } from "@webiny/app-page-builder/render/components/ElementRoot";
import { PbEditorElement } from "@webiny/app-page-builder/types";
import { GlobalCal } from "@calcom/embed-core";

const outerWrapper = css({
    boxSizing: "border-box"
});

interface CalcomProps {
    element: PbEditorElement;
}

const initCalendar = async (): Promise<GlobalCal> => {
    // @ts-ignore
    if (window.Cal) {
        // @ts-ignore
        return window.Cal;
    }

    // Initialize Cal.com calendar.
    const { init } = await import("./calInitializer");
    init();

    // @ts-ignore
    return window.Cal;
};

const CalComRender: React.FC<CalcomProps> = ({ element }) => {
    // pedro/15min
    // pedro/webiny---enterprise-sales-call

    const { brandColor, redirectUrl, calLink } = element.data["calendarConfig"];

    useEffect(() => {
        // @ts-ignore
        if (window.__PS_RENDER__) {
            return;
        }

        initCalendar().then(Cal => {
            Cal("init");

            Cal("inline", {
                elementOrSelector: `#${element.id}`,
                calLink
            });

            Cal("ui", { styles: { branding: { brandColor } } });

            Cal("on", {
                action: "bookingSuccessful",
                callback: (e: any) => {
                    // `data` is properties for the event.
                    // `type` is the name of the action(You can also call it type of the action.) This would be same as "ANY_ACTION_NAME" except when ANY_ACTION_NAME="*" which listens to all the events.
                    // `namespace` tells you the Cal namespace for which the event is fired/
                    const { data } = e.detail;
                    // const { data, type, namespace } = e.detail;

                    if (data.confirmed) {
                        // Add timer before redirecting
                        window.location.href = redirectUrl;
                    }
                }
            });
        });
    }, []);

    return (
        <ElementRoot
            className={
                "webiny-pb-base-page-element-style webiny-pb-page-element-embed-calcom " +
                outerWrapper
            }
            element={element}
        >
            <div id={element.id} style={{ width: "100%", height: "100%", overflow: "scroll" }} />
        </ElementRoot>
    );
};

export default CalComRender;
