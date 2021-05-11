# riba-nest-projects

Monorepo of projects build with Nest.js + Riba.js + Strapi

## Workspaces

We are using yarn 2 because we make use of the workspace feature of yarn 2 for this monorepo.

### Outsides of the workspace

We ignore Strapi in the workspace because it is currently not compatible with Yarn 2 PnP, so we use `npm` for this and excluded it from yarn's workspace (there is no other way to use npm instead of yarn 2 for this package).

### Riba

as long as we are working on riba in parallel, you need to clone riba to `../riba` (see `resolutions` in `./package.json` for the relative path):

```sh
cd ..
git clone git@github.com:ribajs/riba.git
```

and keep the repo in sync by making a `git pull` regularly:

```sh
cd ../riba
git pull
yarn install
cd ../riba-nest-projects
yarn install
yarn run build
```

## Install dependencies

To install the dependencies of all projects inside the workspace just run:

```sh
yarn install
```

To install the dependencies which are excluded from the workspace (because they are not compatible with yarn 2) run:

```sh
yarn install:outside
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
yarn run build
```

## Style

Bootstrap theme variables:

* blue - Used for Dates
* green - Used for News
* cyan -
* green-light -
* gray - Used for background: Navbar

## Environments

### Local

Use the local environment if you want to develop on your locale machine. Start the App Manager with `yarn run start:local` in the root of this monorepo, this will use the config from from `config/local.ts`.

## Known error messages

```sh
Cannot set property message of [object DOMException] which has only a getter
```

This means that something is wrong in the DOM, for example if a custom element has a name that is not valid, e.g. `404-page` (custom elements must not start with numbers).

--------

```sh
error: unknown option '--inspect'
```

You are using an old version of Node.js, please upgrade to >= 14.

--------

```sh
Error: Module not found: Error: Can\'t resolve '../../plugins/strapi-plugin-content-type-builder/admin/src' in '/home/node/riba-nest-projects/apps/gymott/strapi/.cache/admin/src'
# or
Error: Module not found: Error: Can\'t resolve './components/Fonts' in '/home/node/riba-nest-projects/apps/gymott/strapi/.cache/admin/src'
# or similar..
```

This can happen when you update Strapi, to solve this remove `package-lock.json`, `node_modules` and `.cache` in the root of the Strapi project and run `npm run build` twice, the first time the error might appear again, the second time the problem should be solved.
