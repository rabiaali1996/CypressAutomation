/// <reference types="Cypress" />
 
describe('Test Suite', function() 
{

it('Mouse Hover element and Force Click on element, Handle elements that are in invisible mode',function() {
cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
//cy.get('div.mouse-hover-content').invoke('show')
cy.contains('Top').click({force: true})
cy.url().should('include','top')

})
})