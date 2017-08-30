# Face Tracker

Example of using [Kairos](https://www.kairos.com/) face recognition technology.

## Quick start

1. Clone this repo using:
  ```shell
  $ git clone --depth=1 https://github.com/apptension/react-boilerplate.git
  ```

2. To install dependencies and clean the git repo run:

  ```shell
  $ npm run setup
  ```

  *We auto-detect `yarn` for installing packages by default, if you wish to force `npm` usage do*:

  ```shell
  $ USE_YARN=false npm run setup
  ```

## Project Structure

#### `app/`

You will write your app in the this folder. This is the folder you will spend most, if not all, of your time in.

#### `app/routes`

This folder contains subfolders - one for each route of your application with `components`, `containers`, `styles` and `tests`
inside. We recommend using flat structure which means that you should put each route as a child of this directory regardless
of view relationship.

#### `app/modules`

This folder contains `reducers`, `actions`, `constants`, `sagas` and `selectors` grouped in modules which means thath you
should keep your business loigc here

#### `app/environment`

This folder contains environment configs. Webpack uses proper config depending on application environment. Config can be used
by importing `env-config`

#### `app/fixtures`

This boilerplate comes with preconfigured fixtures integration which means that you can put any `.json` files in this
folder and easily fetch it as fixtures using sagas. Those files are available by calling `/fixtures/*.json` url.

#### `app/styles`

In this folder you should put any global styles that cannot be placed in routes.

#### `app/translations`

This is the place to keep `.json` files with translation messages. You should not move this directory in order for messages
 generation feature to work.

#### `app/images`

This folder contain any images used in your application. `/sprites` directory is used by `spritesimth` plugin.

#### `internals/`

You can call this area the "engine" of your app. Your source code cannot be executed as-is in the web browser.
It needs to pass through webpack to get converted into a form that web browsers understand. While it's certainly
helpful to understand what is happening here, for real world usage you won't have to mess around with this folder much.

- `internals/webpack`: `webpack` configuration
- `internals/scripts`: scripts used in `package.json`
- `internals/testing/test.index.spec.js`: entry point for unit tests. You should put any global mocks and add unit test configuration here

#### `server/`

As the name suggests, this folder contains development and production server configuration.

## Command Line Commands

#### Initialization

```Shell
npm run setup
```

Initializes a new project with this boilerplate. Deletes the `react-boilerplate`
git history, installs the dependencies and initializes a new repository.

> Note: This command is self-destructive, once you've run it the init script is
gone forever. This is for your own safety, so you can't delete your project's
history irreversibly by accident.

#### Development

```Shell
npm start
```

Starts the development server running on `http://localhost:3000`

```Shell
npm start:tunnel
```

Starts the development server and makes your application accessible at
`localhost:3000`. Tunnels that server with `ngrok`, which means the website
accessible anywhere! Changes in the application code will be hot-reloaded.

#### Building

```Shell
npm run build
```

Preps your app for deployment (does not run tests). Optimizes and minifies all files, piping them to the `build` folder.

Upload the contents of `build` to your web server to
see your work live!

#### Testing

```Shell
npm run test
```

Tests your application with the unit tests specified in the `**/__tests__/*.spec.js` files
throughout the application.

```Shell
npm run test:watch
```

Watches changes to your application and re-runs tests whenever a file changes.

```Shell
npm run test:coverage
```

Generates test coverage.

```Shell
npm run analyze
```
This command will generate a `stats.json` file from your production build, which
you can upload to the [webpack analyzer](https://webpack.github.io/analyse/). This
analyzer will visualize your dependencies and chunks with detailed statistics
about the bundle size.

#### Linting

```Shell
npm run lint
```

Lints your JavaScript.

#### Messages

```Shell
npm run extract-intl
```

Automatically generates `.json` files with messages gathered from application.

## License

This project is licensed under the MIT license, Copyright (c) 2017 Apptension. For more information see LICENSE.md.
