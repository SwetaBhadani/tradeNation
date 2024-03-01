const homePage_elements = require("../PageObjects/homePage_elements");

const tradenation_logo = homePage_elements.tradenation_logo;

let click_on_trade_nation_logoe = ()=>{

    cy.tradenation_logo.click()
     
}
