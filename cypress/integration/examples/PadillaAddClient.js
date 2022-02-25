/// <reference types="Cypress" />
import PadillaPageFactory from '../../support/pageObjects/PadillaPageFactory'
import AddClientPage from '../../support/pageObjects/AddClientPage'



describe('Test Suite', function () {

    before(function () {

        cy.fixture('addProject').then(function (data) {
            this.data = data
        })


        Cypress.on('uncaught:exception', (err, runnable) => {
            return false
        })

    })

    it('Test 1: Add Client', function () {

        const padillaPage = new PadillaPageFactory()
        const addClientPage = new AddClientPage()

        cy.visit(Cypress.env('stagBaseUrl'))

        padillaPage.signin(this.data.adminEmail, this.data.adminPassword)
        addClientPage.addClientBtn()
        addClientPage.addClientDetails()


    })
})