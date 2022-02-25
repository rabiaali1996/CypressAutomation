/// <reference types="Cypress" />
/// <reference types = "Cypress-iframe"/>
import AddSubPage from '../../support/pageObjects/AddSubPage'
import PadillaPageFactory from '../../support/pageObjects/PadillaPageFactory'
import ProjectReportPage from '../../support/pageObjects/ProjectReportPage'


describe('Test Suite', function () {

  before(function () {

    cy.fixture('addSub').then(function (data) {
      this.data = data
    })

    Cypress.on('uncaught:exception', (err, runnable) => {
      return false
    })

  })




  it('Add Sub in the Project Snapshot', function () {

    const padillaPage = new PadillaPageFactory()
    const addSubPage = new AddSubPage()
    const projectReportPage = new ProjectReportPage()
    cy.visit(Cypress.env('stagBaseUrl'))

    padillaPage.signin(this.data.adminEmail, this.data.adminPassword)
    padillaPage.selectClient(this.data.clientName)
    addSubPage.findproject()
    projectReportPage.getProjectReportLocator()
   

 
  })


})