import { PbContext } from "@webiny/api-page-builder/types";
import { ContextPlugin } from "@webiny/handler";
import SlackNotify from "slack-notify";

/**
 * This plugin should be registered in the handler({plugins: []})
 */
export const createOnAfterPageCreate = () => {
    return new ContextPlugin<PbContext>(async context => {
        const slack = SlackNotify(process.env.SLACK_URL);
        context.pageBuilder.onAfterPageCreate.subscribe(async ({ page }) => {
            try {
                await slack.send({
                    channel: "#groundfog-training",
                    text: `A new page was created: "${page.title}"`,
                    username: "Training Bot"
                });
            } catch {
                // do nothing
            }
        });
    });
};
