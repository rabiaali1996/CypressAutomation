/// <reference types="Cypress" />


describe('Test Suite', function () {

  beforeEach(function () {

    Cypress.on('uncaught:exception', (err, runnable) => {
      return false
    })
  
  })

  it('Download The State of California Certifications', function () {
    cy.visit("https://caleprocure.ca.gov/pages/PublicSearch/supplier-search.aspx",)
    cy.get('button[name="ZZ_PUBSRCH1_WRK_BUTTON"]').click({ force: true })
    cy.get('#ZZ_PUBSRCH1_WRK_DOWNLOAD_TO_FILE').click({ force: true })
    cy.get('#downloadButton').click()

  })


  it('Download UCP Report', function () {
    cy.visit("https://dot.ca.gov/programs/civil-rights/dbe-search")
    
    cy.get('a').contains('Access the DBE Query Form').invoke('removeAttr', 'target').click()
    cy.get('a').contains('Start DBE Firms Query').click()
    cy.get('[value="DBE"]').check().should('be.checked')
    cy.get('[value="Search - Export Options"]').click()
    cy.get('#dataList > h1').should('be.visible')
    cy.get('.export.csv',).click().pause()
  })

})