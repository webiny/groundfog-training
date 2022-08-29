import { handler, /*query*/ } from "~/index";

describe("Books Integration Test", () => {
    it("should be able to retrieve list of books", async () => {
        const LIST_BOOKS = /* GraphQL */ `
            {
                listBooks {
                    description
                    title
                }
            }
        `;

        const response = await handler(
            {
                httpMethod: "POST",
                path: "/graphql",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify({
                    query: LIST_BOOKS,
                    variables: {}
                })
            } as any,
            {} as any
        );

        expect(response.body).toEqual(
            '{"data":{"listBooks":[{"description":"This is the first book.","title":"First book"},{"description":"This is the second book.","title":"Second book"}]}}'
        );
    });

    // it("should be able to retrieve list of books (improved)", async () => {
    //     const LIST_BOOKS = /* GraphQL */ `
    //         {
    //             listBooks {
    //                 description
    //                 title
    //             }
    //         }
    //     `;
    //
    //     const response = await query({
    //         query: LIST_BOOKS
    //     });
    //
    //     expect(response).toEqual({
    //         data: {
    //             listBooks: [
    //                 {
    //                     description: "This is the first book.",
    //                     title: "First book 123"
    //                 },
    //                 { description: "This is the second book.", title: "Second book" }
    //             ]
    //         }
    //     });
    // });
});
