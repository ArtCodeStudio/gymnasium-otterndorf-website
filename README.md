# riba-nest-projects

Monorepo of projects build with Nest.js + Riba.js + Strapi

## Workspaces

We are using yarn 2 with it's workspace feature for this monorepo.

We ignore Strapi because it is currently not compatible with Yarn 2 PnP, so we have [set the nodeLinker to node-modules](https://yarnpkg.com/configuration/yarnrc#nodeLinker) in this packages and exclude it from yarn's workspace.

## Build

```bash
yarn run build
```

## Environments

## Local

Use the local environment if you want to develop on your locale machine. Start the App Manager with `yarn run start:local` or `yarn run watch:local` in the root of this monorepo, this will use the config from from `config/local.ts`.