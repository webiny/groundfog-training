import { ContextPlugin } from "@webiny/handler";
import { CmsContext } from "@webiny/api-headless-cms/types";
import fetch from "node-fetch";
/**
 * This plugin should be registered in the handler({plugins: []})
 */
export const createOnAfterEntryCreate = () => {
    return new ContextPlugin<CmsContext>(async context => {
        context.cms.onAfterEntryCreate.subscribe(async ({ entry, model }) => {
            /**
             * We will notify users that a new entry was created.
             * We will send them some model and entry data through some mailing service.
             */
            const response = await fetch("https://mailing.service", {
                method: "post",
                body: JSON.stringify({
                    model,
                    entry
                }),
                headers: {
                    "Content-Type": "application/json"
                }
            });
            if (!response) {
                console.log(`No response from mailing.service.`);
                return;
            }
            try {
                const result = JSON.parse(await response.text());
                if (result.error) {
                    console.log(`Error while sending notifications via mailing.service.`);
                    console.log(result.error);
                    return;
                }
            } catch (ex) {
                console.log(`Error while parsing mailing.service response.`);
                console.log(ex.message);
            }
        });
    });
};
