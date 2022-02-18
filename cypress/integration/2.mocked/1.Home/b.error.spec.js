const homePage = require('../../../support/pages/homePage');

describe(`1.home - b.error - ${Cypress.config("baseUrl")}`, () => {
  beforeEach(() => {
    cy.visit("");
    cy.url().should("eq", Cypress.config("baseUrl"));
  });

  it("Shouldnt return response of blastoise-mocked", () => {
    cy.mock_api_pokemon("GET", 500, "blastoise");

    homePage.getUrlInput().clear().type("pokemon/blastoise");
    homePage.getSubmitButton().click();

    cy.contains('An error occurred: "500 Internal Server Error"').should('exist');
    cy.contains("blastoise-mocked").should('not.exist');
  });
});