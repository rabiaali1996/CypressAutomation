/// <reference types="Cypress" />
 
describe('Test Suite', function() 
{
 
it('Test for Visible and Invisible Elements',function() {
 
//Check boxes
cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

//visible invisible
cy.get('#displayed-text').should('be.visible')
cy.get('#hide-textbox').click()
cy.get('#displayed-text').should('not.be.visible')
cy.get('#show-textbox').click()
cy.get('#displayed-text').should('be.visible')
 
//radio buttons
 
cy.get('[value="radio2"]').check().should('be.checked')
 
}  )
 
}  )