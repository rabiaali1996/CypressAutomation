/// <reference types="Cypress" />

const { eq } = require("lodash")

describe('test suite',function(){
    before(function(){
    cy.fixture('example').then(function(data){
     this.data=data
     })
    })


it('validating cypress assertion', function(){

cy.visit('https://rahulshettyacademy.com/angularpractice/')
cy.get(':nth-child(1) > .form-control').type(this.data.name)
cy.get('select').select(this.data.gender)
cy.get(':nth-child(4) > .ng-untouched').should('have.value',this.data.name)
cy.get('input[name="name"]:nth-child(2)' ).should('have.attr','minlength','2')
cy.get('#inlineRadio3').should('be.disabled')
cy.get(':nth-child(2) > .nav-link').click()
this.data.products

this.data.products.forEach(function(element){
    cy.selectProduct(element)
})

})

})





