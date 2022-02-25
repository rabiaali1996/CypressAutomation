/// <reference types="Cypress" />

import PracticePage from '../../support/pageObjects/PracticePage'

describe('Test Suite', function () {

  before(function () {
    // runs once before all tests in the block
    cy.fixture('example').then(function (data) {
      this.data = data
    })
  })

  it('Automation practice', function () {

    const practicePage = new PracticePage()
    cy.visit(Cypress.env('baseurl'))

    practicePage.signin(this.data.email, this.data.password)

    practicePage.searchInput().type(this.data.searchInput)
    practicePage.searchBtn().click()
    practicePage.searchfromlist(this.data.searchkey)
    practicePage.addToCart()
    practicePage.proceedToCheckout()
    practicePage.checkoutFromSummary()
    practicePage.checkoutFromAddress()
    practicePage.checkoutFromShipping()
    practicePage.selectpayment()
    practicePage.confirmOrder()

  })
})