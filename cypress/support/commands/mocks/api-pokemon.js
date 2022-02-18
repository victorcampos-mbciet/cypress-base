Cypress.Commands.add('mock_api_pokemon', (httpMethod, statusCode, param) => {
    cy.intercept(httpMethod, `${Cypress.env('URL_API_POKEMON').pokemon}/${param}`, {
        statusCode: statusCode,
        fixture: `api/pokemon/${statusCode}/response.json`
      }).as(`mock_api_pokemon_${httpMethod}_response`);
});
