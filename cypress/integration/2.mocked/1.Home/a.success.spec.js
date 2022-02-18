const homePage = require('../../../support/pages/homePage');

describe(`1.home - a.success - ${Cypress.config("baseUrl")}`, () => {
  beforeEach(() => {
    cy.visit("");
    cy.url().should("eq", Cypress.config("baseUrl"));
  });

  it("Should return response of blastoise-mocked with success", () => {
    cy.mock_api_pokemon("GET", 200, "blastoise");

    homePage.getUrlInput().clear().type("pokemon/blastoise");
    homePage.getSubmitButton().click();
    
    cy.contains("Resource for blastoise").should('exist');
    cy.contains("blastoise-mocked").should('exist');
  });
});