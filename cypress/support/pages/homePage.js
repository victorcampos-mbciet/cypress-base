const homePage = {
  getUrlInput: () => {
    return cy.get(selectors.urlInput);
  },
  getSubmitButton: () => {
    return cy.get(selectors.submitButton);
  },
};

const selectors = {
  urlInput: "#url-input",
  submitButton: ".Input-module__button--3cQfp"
};

module.exports = homePage;	