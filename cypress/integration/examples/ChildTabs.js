/// <reference types="Cypress" />
 
describe('Test Suite', function() 
{
 
it('Test for child tabs and go on back page',function() {
 
//Check boxes
cy.visit("http://qaclickacademy.com/practice.php")

cy.get('#opentab').invoke('removeAttr','target').click()
 
cy.url().should('include','qaclickacademy')
 
cy.go('back')

})
})