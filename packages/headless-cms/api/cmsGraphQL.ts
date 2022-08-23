import { GraphQLSchemaPlugin } from "@webiny/handler-graphql/plugins/GraphQLSchemaPlugin";
import { Response, ErrorResponse } from "@webiny/handler-graphql/responses";
import { CmsContext, CmsEntry } from "@webiny/api-headless-cms/types";
import { addItemToBasket } from "./basket/addItemToBasket";
import { removeItemFromBasket } from "./basket/removeItemFromBasket";
import { getBasket } from "./basket/getBasket";
import { ContextPlugin } from "@webiny/handler";

interface BasketItemArgs {
    itemId: string;
}

export const createCmsGraphQL = () => {
    return new ContextPlugin<CmsContext>(async context => {
        context.plugins.register(
            new GraphQLSchemaPlugin<CmsContext>({
                typeDefs: `
        
            type BasketItemResponse {
                itemId: ID!
                basketId: ID!
                userId: ID!
            }
            
            type BasketResponse {
                data: BasketItemResponse
                error: CmsError
            }
            
            type WebshopBasket {
                id: String!
                entryId: String!
                userName: String
                userId: String!
            }
            
            type UserBasket {
                basket: WebshopBasket!
                items: [WebshopItem!]!
            }
            
            type UserBasketResponse {
                data: UserBasket
                error: CmsError
            }
            
            extend type Query {
                getBasket: UserBasketResponse!
            }
        
            extend type Mutation {
                addItemToBasket(itemId: ID!): BasketResponse!
                removeItemFromBasket(itemId: ID!): BasketResponse!
            }
        `,
                resolvers: {
                    WebshopBasket: {
                        id: (entry: CmsEntry) => {
                            return entry.id;
                        },
                        entryId: (entry: CmsEntry) => {
                            return entry.entryId;
                        },
                        userName: (entry: CmsEntry) => {
                            return entry.values["userName"];
                        },
                        userId: (entry: CmsEntry) => {
                            return entry.values["userId"];
                        }
                    },

                    Query: {
                        // @ts-ignore
                        getBasket: async (source, args, context) => {
                            // eslint-disable-previous-line
                            try {
                                const result = await getBasket({ context });

                                return new Response(result);
                            } catch (ex) {
                                return new ErrorResponse(ex);
                            }
                        }
                    },
                    Mutation: {
                        // @ts-ignore
                        addItemToBasket: async (source, args: BasketItemArgs, context) => {
                            try {
                                const result = await addItemToBasket({
                                    context,
                                    itemId: args.itemId
                                });

                                return new Response(result);
                            } catch (ex) {
                                return new ErrorResponse(ex);
                            }
                        },
                        // @ts-ignore
                        removeItemFromBasket: async (source, args: BasketItemArgs, context) => {
                            try {
                                const result = await removeItemFromBasket({
                                    context,
                                    itemId: args.itemId
                                });

                                return new Response(result);
                            } catch (ex) {
                                return new ErrorResponse(ex);
                            }
                        }
                    }
                }
            })
        );
    });
};
