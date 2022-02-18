const homePage = require('../../../support/pages/homePage');

describe(`1.home - a.success - ${Cypress.config("baseUrl")}`, () => {
  beforeEach(() => {
    cy.visit("");
    cy.url().should("eq", Cypress.config("baseUrl"));
  });

  it("Should return a real response", () => {
    homePage.getUrlInput().clear().type("pokemon/blastoise");
    homePage.getSubmitButton().click();

    cy.contains("Resource for blastoise").should('exist');
  });
});