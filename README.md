## cypress-base

[![actions-tests](https://github.com/victorcampos-mbciet/cypress-base/actions/workflows/cypress-tests.yml/badge.svg)](https://github.com/victorcampos-mbciet/cypress-base/actions/workflows/cypress-tests.yml)

## Site :
https://pokeapi.co/

## Structure :
```
.
├── cypress
│   ├── fixtures
│   │   └── api
│   │       └── pokemon
│   │           ├── 200
│   │           │   └── response.json
│   │           └── 500
│   │               └── response.json
│   ├── integration
│   │   ├── 1.real
│   │   │   └── 1.Home
│   │   │       └── a.success.spec.js
│   │   └── 2.mocked
│   │       └── 1.Home
│   │           ├── a.success.spec.js
│   │           └── b.error.spec.js
│   ├── plugins
│   │   └── index.js
│   └── support
│       ├── commands
│       │   ├── custom
│       │   │   └── assert.js
│       │   └── mocks
│       │       └── api-cep.js
│       ├── commands.js
│       ├── helpers
│       │   └── selectors.js
│       ├── index.js
│       └── pages
│           └── homePage.js
├── cypress.json
├── package.json
├── package-lock.json
└── README.md
```

## Install :
```
npm i
```

## E2E tests :
- Runnig with headfull mode :
```
npm run cy:e2e:open
```
- Runnig with headless mode :
```
npm run cy:e2e:run
```

## Integration tests :

- Runnig with headfull mode :
```
npm run cy:serve:open
```
- Runnig with headless mode :
```
npm run cy:serve:run
```

## TODO
- [] Add report
- [] Add concept draw
