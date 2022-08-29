import cliWorkspaces from "@webiny/cli-plugin-workspaces";
import cliPulumiDeploy from "@webiny/cli-plugin-deploy-pulumi";
import cliAwsTemplate from "@webiny/cwp-template-aws/cli";

// Scaffolds.
import cliScaffold from "@webiny/cli-plugin-scaffold";
import cliScaffoldExtendGraphQlApi from "@webiny/cli-plugin-scaffold-graphql-service";
import cliScaffoldAdminModule from "@webiny/cli-plugin-scaffold-admin-app-module";
import cliScaffoldCiCd from "@webiny/cli-plugin-scaffold-ci";

export default {
    id: "webiny-test/webiny-test-project",
    template: "@webiny/cwp-template-aws@5.30.0",
    name: "groundfog",
    cli: {
        plugins: [
            cliWorkspaces(),
            cliPulumiDeploy(),
            cliAwsTemplate(),

            // Scaffolds.
            cliScaffold(),
            cliScaffoldExtendGraphQlApi(),
            cliScaffoldAdminModule(),
            cliScaffoldCiCd()
        ]
    }
};
