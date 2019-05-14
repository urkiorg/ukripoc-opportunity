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

### Deploying

The project uses Amplify Console for CI/CD. It builds the site preview and Storybook on push for the develop and master branches. You can view the builds here:

-   [develop](https://develop.d3562686bv95v2.amplifyapp.com/)
-   [master](https://master.d3562686bv95v2.amplifyapp.com/)
