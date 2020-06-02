# Typescript React App with Ant Design template

## Directory structure

### Level 1

This project directory structure is domain driven, so subdirectories of `src` directory are either related to some domain or are "common".

```
src
│   App.tsx
│   index.css
│   index.tsx
│   routes.tsx
│
└── common
│   └── components
│   └── hooks
│   └── layouts
│   └── models
│   └── routes
│   └── utils
│
└── domain
│   └── components
│   └── hooks
│   └── layouts
│   └── models
│   └── routes
│   └── utils
│
└── other domain
│   └── ...
```

### Level 2

Subdirectories of domain:

- `components` – components that are common to the domain; used by components `routes`
- `hooks` – common hooks
- `layouts` – layouts; used by `routes`
- `models` – data types; used by `api` and `components`
- `routes` – route indexes (`index.tsx` files) and components used to render them (files other than `index.tsx`)
- `utils` – helpers that are none of the above

Above directories may group files into further subdirectories to group related functionalities.
However, subdirectory depth should not exceed 1 more level, with exception to route indexes paths,
that should follow URL pathname for easier file navigation.

## Development

Read "Create React App" section.

## Commit messages

Follow the [Conventional Commits Specification](https://www.conventionalcommits.org/).

## Coding style

- Prettier

### Organizing imports

```js
// import from node_modules first
import Dependency from 'dependency'
// * leave blank line *
// import from project using absolute path, base dir is parent of `src` directory
import AbsolutePath from 'components/absolute/path'
// * leave blank line *
// import from project using relative path
import RelativePath from '../relative/path'
```

# Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
