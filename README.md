# cypress-base
> Plug and play structure with Cypress for E2E and integration tests.

## Validated on Github Actions :
[![actions-tests](https://github.com/victorcampos-mbciet/cypress-base/actions/workflows/cypress-test.yml/badge.svg)](https://github.com/victorcampos-mbciet/cypress-base/actions/workflows/cypress-test.yml)

## Sample application :
https://pokeapi.co/

## Structure :
```
.
├── cypress
│   ├── fixtures
│   │   └── api
│   │       └── pokemon
│   │           └── GET
│   │               ├── 200
│   │               │   └── response.json
│   │               └── 500
│   │                   └── response.json
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
│   ├── results
│   │   └── json
│   │       ├── mochawesome_001.json
│   │       ├── mochawesome_002.json
│   │       ├── mochawesome_003.json
│   │       ├── mochawesome_004.json
│   │       ├── mochawesome_005.json
│   │       ├── mochawesome_006.json
│   │       ├── mochawesome_007.json
│   │       └── mochawesome.json
│   └── support
│       ├── commands
│       │   ├── custom
│       │   │   └── assert.js
│       │   └── mocks
│       │       └── api-pokemon.js
│       ├── commands.js
│       ├── helpers
│       │   └── selectors.js
│       ├── index.js
│       └── pages
│           └── homePage.js
├── cypress.json
├── index.json
├── package.json
├── package-lock.json
├── public
├── README.md
└── reporter-config.json
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
<details>
  <summary>What concept did i take into account on e2e test ?</summary>
  > TODO
</details> 

## Integration tests :

- Runnig with headfull mode :
```
npm run cy:integration:open
```
- Runnig with headless mode :
```
npm run cy:integration:run
```

<details>
  <summary>What concept did i take into account on integration ?</summary>
  > TODO
</details> 

## Base url :
> The `baseUrl` is configured in the `package.json`:
```
"cy:e2e:open": "cypress open --browser chrome --config baseUrl=https://pokeapi.co/"
```

## Running🏃🏃: 
![RUNNING](support/running.gif)

## Report 📝 :
> After each execution of `Github Actions` a report is available [in this branch](https://github.com/victorcampos-mbciet/cypress-base/tree/gh-pages). Make the Download and open `index.html`.

> In the future the ideia is use `https://pages.github.com/`.

![RUNNING](support/report.gif)

## TODO
- [] Add concept draw
