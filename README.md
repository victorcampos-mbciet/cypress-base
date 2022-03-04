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

### E2E concept :
> Frontend + Backend :  
![ARCH](support/draw-arq.png)

> **E2E test** : All environment up : 
![ARCH](support/draw-e2e.png)

## Integration tests :

- Runnig with headfull mode :
```
npm run cy:integration:open
```
- Runnig with headless mode :
```
npm run cy:integration:run
```
### Integration concept :
> Frontend + Backend :  
![ARCH](support/draw-arq.png)

>  **Integration test:** Frontend → `FULL UP` **and** Backend → `Mocked` : 
![ARCH](support/draw-integration.png)
>  [In this project](https://github.com/victorcampos-mbciet/cypress-base/blob/master/cypress/support/commands/mocks/api-pokemon.js) we use `cy.intercept` to mock :
```JavaScript
Cypress.Commands.add('mock_api_pokemon', (httpMethod, statusCode, param) => {
    cy.intercept(httpMethod, `${Cypress.env('URL_API_POKEMON').pokemon}/${param}`, {
        statusCode: statusCode,
        fixture: `api/pokemon/${httpMethod}/${statusCode}/response.json`
      }).as(`mock_api_pokemon_${httpMethod}_response`);
});
```

## Base url :
> The `baseUrl` is configured in the `package.json`:
```
"cy:e2e:open": "cypress open --browser chrome --config baseUrl=https://pokeapi.co/"
```

## Running🏃🏃: 
![RUNNING](support/running.gif)

## Report 📝 :
> After each execution in `Github Actions` a report is available in [ this branch](https://github.com/victorcampos-mbciet/cypress-base/tree/gh-pages). Make the download and open the `index.html`.

> In the future the ideia is use `https://pages.github.com/`.

![RUNNING](support/report.gif)
