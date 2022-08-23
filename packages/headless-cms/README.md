## Groundfog tranining examples


This is the example code repository we are going to show to the Groundfog team.

## Headless CMS Groups, Models and Entries

```
@groundfog/headless-cms
```

### Steps

#### 1. Define group and model plugins
We will go through creating of the `group` and `models` via plugins ([CmsGroupPlugin](https://github.com/webiny/webiny-js/blob/next/packages/api-headless-cms/src/plugins/CmsGroupPlugin.ts) and [CmsModelPlugin](https://github.com/webiny/webiny-js/blob/next/packages/api-headless-cms/src/plugins/CmsModelPlugin.ts)) and show them where to import the plugins.

#### 2. Create GraphQLSchemaPlugin

We will show how to define a custom GraphQL Query, Mutations and resolvers for them via [GraphQLSchemaPlugin](https://github.com/webiny/webiny-js/blob/next/packages/handler-graphql/src/plugins/GraphQLSchemaPlugin.ts) and where to import it.

#### 3. Attach a lifecycle hook

We will define the subscription to a few lifecycle hooks to disable changes of an entry which is in the `WebshopBasket` model.


### What is contained in this repository?

There are some groups and models defined via plugins:

#### Groups
* Webshop

#### Models
* Webshop Basket
* Webshop Category
* Webshop Item

#### Lifecycle hooks
There are some lifecycle hooks defined which target the `Webshop Basket` model and disable changing it from the outside world.
* onBeforeEntryCreateRevision - disable creating new revision of the basket entry
* onBeforeEntryDelete - disable deletion of the basket entry
* onBeforeEntryDeleteRevision - disable deletion of the basket entry
* onBeforeEntryPublish - disable publishing of the basket entry


## Headless CMS Custom Fields

### Steps

#### 1. Define field plugins in the API and the UI
We will go through the creation of the required field plugins.

We need to create a field in the api part of the code and few plugins in the app part of the code.

#### 2. Add field to the `WebshopCateogory` model.

#### 3. Show the unique and required validators


