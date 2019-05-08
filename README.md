# UKRI Funding Service - Opportunity Service

## Create React App + Amplify

### Installation

To get started, after cloning and running `yarn install`, install the [Amplify CLI](https://github.com/aws-amplify/amplify-cli):

```sh
yarn global add @aws-amplify/cli
```

Ensure that you have set up your UKRI AWS credentials in your `~/.aws/config`, `credentials` and `credentials.template` (as appropriate) file. e.g.

```
[profile ukristaging]
region=eu-west-1
aws_access_key_id=xxx
aws_secret_access_key=xxx
```

Then, from the root of this project, run:

```sh
amplify env checkout staging
```

It will ask you to choose the AWS profile: make sure you chose the one you created above. If you don't see it in the list, then you haven't set it up properly.

### Running

This is a create-react-app project, so the usual commands work: `yarn start` etc. You can also run `yarn storybook`.

See the Amplify CLI docs for more details on available commands. If you change the GraphQL schema, run `amplify codegen` and it will generate the local types and helper code. Remember to choose "typescript" when prompted.

### Development

We use hygen to generate components. Run `yarn new-component my-component-name`. Replace `my-component-name` with the name of the new component, in kebab case `like-this`. This generates the basic component, story and test.

For most basic visual components, use [govuk-react](https://govuk-react.github.io/govuk-react/). This includes almost everything that we'll need. If we need something else, then create it using a similar pattern: create a simple visual component using [styled-components](https://www.styled-components.com/docs).

For more complex components, create a display component and a separate component that handles the GraphQL. For GraphQL queries, import them from the auto-generated helpers. Don't add storybook stories for the GraphQL components, but create them for the display components with mock data and actions.

Do not create class components – use hooks! When using new libraries, see if there are versions designed for hooks, as these are usually simpler to use.

### Deploying

The project uses Amplify Console for CI/CD. It builds the site preview and Storybook on push for the develop and master branches. You can view the builds here:

-   [develop](https://develop.d3dx8vaq8f7njk.amplifyapp.com/)
-   [master](https://master.d3dx8vaq8f7njk.amplifyapp.com/)
