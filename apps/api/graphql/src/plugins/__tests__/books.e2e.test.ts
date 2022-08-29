import { request } from "graphql-request";

/**
 * An example of an end-to-end (E2E) test. You can use these to test if the overall cloud infrastructure
 * setup is working. That's why, here we're not executing the handler code directly, but issuing real
 * HTTP requests over to the deployed Amazon Cloudfront distribution. These tests provide the highest
 * level of confidence that our application is working, but they take more time in order to complete.
 */

const query = async ({ query = "", variables = {} } = {}) => {
    return request(process.env["API_URL"] + "/graphql", query, variables, {
        "x-tenant": "root"
    });
};

describe("Books E2E Test", () => {
    it("should be able to retrieve list of books", async () => {
        const LIST_BOOKS = /* GraphQL */ `
            {
                listBooks {
                    description
                    title
                }
            }
        `;

        const response = await query({
            query: LIST_BOOKS,
            variables: {}
        });

        expect(response).toEqual({
            listBooks: [
                {
                    description: "This is the first book.",
                    title: "First book"
                },
                {
                    description: "This is the second book.",
                    title: "Second book"
                }
            ]
        });
    });
});
