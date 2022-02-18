Cypress.Commands.add(
  "verifyRequestBody",
  (mockResponse, requestPath, headerTypeValue) => {
    cy.wait(`${mockResponse}`)
      .its("request")
      .then((requestBodyActual) => {
        cy.fixture(`${requestPath}`).then((requestBodyExpected) => {
          expect(requestBodyExpected).to.deep.equal(requestBodyActual.body);
          expect(requestBodyActual.headers["content-type"]).to.eq(`${headerTypeValue}`);
        });
      });
  }
);
