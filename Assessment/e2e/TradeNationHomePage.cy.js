/// <reference types="cypress"/>

const homePage_elements = require("../support/PageObjects/homePage_elements");
const loginPage_elements = require("../support/PageObjects/loginPage_elements");

describe('Verify page title', () => {
  beforeEach(() => {
    cy.visit("https://tradenation.com/en-gb/markets/#forex")
    cy.get(homePage_elements.cookie_accept_all_button).then($button => {$button.trigger("click")});
    Cypress.on('uncaught:exception', (err, runnable) => {
      return false;
    });   
  })

  it("Click on Trade nation logo",() => {
    cy.get(homePage_elements.tradenation_logo).click()
    cy.wait(2000)
    cy.title().then(title => {
      console.log(title); // logs the page's title
    });
    cy.title().should('equal','Trade Nation - a broker with a global reach')
  })
})