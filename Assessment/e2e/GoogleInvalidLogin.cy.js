const homePage_elements = require("../support/PageObjects/homePage_elements");
const loginPage_elements = require("../support/PageObjects/loginPage_elements");

describe('Verify error while logging in with Google', () => {
  beforeEach(() => {
    cy.intercept(
      {
        url: /^https:\/\/accounts\.google\.com\/v3\/signin\.*/,
      }
    ).as('getSiteInfo')
    cy.visit("https://tradenation.com/login")
    cy.get(homePage_elements.cookie_accept_all_button).then($button => { $button.trigger("click") });
    Cypress.on('uncaught:exception', (err, runnable) => {
      return false;
    });
  })

  it("Click on login with Google button", () => {
    cy.get(loginPage_elements.login_with_google_button)
      .click()
      .wait('@getSiteInfo', 5000)
      .its('response.statusCode').should('eq', 403)
  })
})