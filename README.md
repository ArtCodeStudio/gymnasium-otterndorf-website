# gymnasium-otterndorf-website

Monorepo of a project for the high school [Gymnasium Otterndorf](https://gymnasium-otterndorf.de) build with Nest.js + Riba.js + Strapi

![Screenshot](https://user-images.githubusercontent.com/1073989/141298525-7e74d0b8-efc4-4cca-adc4-2ace4a1846d6.png)

## API

This project has an open API, for more information [see here](https://gymnasium-otterndorf.de/credits#api).

## Workspaces

We are using yarn 2 because we make use of the workspace feature of yarn 2 for this monorepo.

### Outsides of the workspace

We ignore Strapi in the workspace because it is currently not compatible with Yarn 2 PnP, so we use `npm` for this and excluded it from yarn's workspace (there is no other way to use npm instead of yarn 2 for this package).

### Clone

This repository has submodules, so you need to clone this repository with it's submodules:

```sh
git clone --recurse-submodules https://github.com/ArtCodeStudio/riba-nest-projects.git
cd riba-nest-projects
```

If you have already pulled the repository you can just run:

```sh
git submodule update --init --recursive
git pull --recurse-submodules
```

## Install dependencies

To install the dependencies of all projects inside the workspace just run:

```sh
yarn install
```

To install the dependencies which are excluded from the workspace (because they are not compatible with yarn 2) run:

```sh
yarn install:strapi && yarn install:strapi-student
```

### PM2

The App Manager uses `pm2` to start the apps from the config, you can install pm2 globally to make use of the pm2 cli tools like `pm2 logs` to show the app logs in realtime.

```sh
npm install pm2@latest -g
```

## Build

```sh
git clone https://github.com/ArtCodeStudio/riba-nest-projects.git
cd riba-nest-projects
git submodule update --init --recursive
yarn install
```

### Theme

```sh
cd app/theme
yarn run build
```

### Nest (backend)

```sh
cd app/nest
yarn run build
```

### GraphQl Typescript types

```sh
cd app/common
yarn run build
```

### Strapi (main)

```sh
cd app/strapi
npm run build
```

### Strapi (for students)

```sh
cd app/strapi-student
npm run build
```

## Start

We are using [pm2](https://pm2.io/) to manage the running app instances. For this we have defined some pm2 config files for different environment, e.g. `pm2.dev.config` in the root of this repository.

You can start pm2 for this environments with:

### Development

This environment is intended for development, the apps are started in watch mode and automatically restarted or rebuilt when changes are made. 

```bash
yarn run start:dev
# or
pm2 start ./pm2.dev.config.js
```

### Local

This environment is intended for local development, where the apps are also started in watch mode, but the Strapi instances will not be started. So the Strapi instances must therefore run on the server.

```bash
yarn run start:local
# or
pm2 start ./pm2.local.config.js
```
### Production

This sets the app instances in production mode. This means that the apps do not start in watch mode.

```bash
yarn run start:prod
# or
pm2 start ./pm2.prod.config.js
```

## Strapi

We have two strapi instances for this project. One for teachers and school administration and one fpr students.

Please note, the strapi sub-projects are not part of the yarn 2 workspace because they are not working with yarn 2 at the moment, so please use `npm` here.

### Upgrade

Checkout the [upgrade guide](https://strapi.io/documentation/developer-docs/latest/update-migration-guides/update-version.html).

In short:

```sh
npm install -g npm-check
cd apps/gymott/strapi # or strapi-student
pm2 list
# see which id the strapi process has
pm2 stop <id>
npm-check -u # Can be installed with `npm install -g npm-check`
# Select latest strapi versions here
# Please note: Maybe there are new plugins for the new strapi version, check the source for new plugins and install theme
npm run build -- --clean
pm2 start <id>
pm2 logs <id>
# Check here if Strapi starts properly
```

## Style

Checkout the styles in [app/theme/styles/](app/theme/styles/).

### Colors

For all used theme colors see [_variables-bootstrap.scss](app/theme/styles/_variables-bootstrap.scss) and [entry-type-color.ts](app/theme/scripts/common/formatters/entry-type-color.ts)
