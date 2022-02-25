/// <reference types="Cypress" />
import PadillaPageFactory from '../../support/pageObjects/PadillaPageFactory'


describe('Test Suite', function () {

  beforeEach(function () {

    cy.fixture('addProject').then(function (data) {
      this.data = data
    })

    Cypress.on('uncaught:exception', (err, runnable) => {
      return false
    })

  })

  it('Test1:Submit Null form', function () {

    const padillaPage = new PadillaPageFactory()
    cy.visit(Cypress.env('stagBaseUrl'))

    padillaPage.signin(this.data.adminEmail, this.data.adminPassword)
    padillaPage.selectClient(this.data.clientName)
    padillaPage.clickonAddProject()
    padillaPage.clickonSubmit()
     padillaPage.getSelectorError().should('contains.text',this.data.requiredError)
    padillaPage.getProjectNameError().should('contains.text',this.data.requiredError)
    padillaPage.getContractNumError().should('contains.text',this.data.requiredError)
    padillaPage.getFederalProjectNumError().should('contains.text',this.data.requiredError)
    padillaPage.getFundingTypeError().should('contains.text',this.data.requiredError)    

  })
 

  it('Test 2: Add Regular Project', function () {

    const padillaPage = new PadillaPageFactory()
    cy.visit(Cypress.env('stagBaseUrl'))

    padillaPage.signin(this.data.adminEmail, this.data.adminPassword)
    padillaPage.selectClient(this.data.clientName)
    padillaPage.clickonAddProject()
    padillaPage.addProjectdetails(this.data.existingPrime,'AutoTest004','Regular','FAA')
    cy.url().should('include','index?section=admin_view&view=add_project&id=')

  })
  
  it('Test 3: Check For project with existing project number', function () {

    const padillaPage = new PadillaPageFactory()
    cy.visit(Cypress.env('stagBaseUrl'))

    padillaPage.signin(this.data.adminEmail, this.data.adminPassword)
    padillaPage.selectClient(this.data.clientName)
    padillaPage.clickonAddProject()
    padillaPage.addProjectdetails(this.data.existingPrime,'AutoTest001','Regular','FAA')
    padillaPage.getProjectNumberError().should('contains.text',this.data.projectNumError)   

  })

  // it('Test 4: Add CTO Project', function () {

  //   const padillaPage = new PadillaPageFactory()
  //   cy.visit(Cypress.env('stagBaseUrl'))

  //   padillaPage.signin(this.data.adminEmail, this.data.adminPassword)
  //   padillaPage.selectClient(this.data.clientName)
  //   padillaPage.clickonAddProject()
  //   padillaPage.addProjectdetails(this.data.existingPrime,'AutoTest002','CTO','FAA')
  // cy.url().should('include','index?section=admin_view&view=add_project&id=')

  // })

  // it('Test 5: Add EPA Project', function () {

  //   const padillaPage = new PadillaPageFactory()
  //   cy.visit(Cypress.env('stagBaseUrl'))

  //   padillaPage.signin(this.data.adminEmail, this.data.adminPassword)
  //   padillaPage.selectClient(this.data.clientName)
  //   padillaPage.clickonAddProject()
  //   padillaPage.addProjectdetails(this.data.existingPrime,'AutoTest003','Regular','EPA')

  // })


})