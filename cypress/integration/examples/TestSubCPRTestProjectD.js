/// <reference types="Cypress" />
import PadillaPageFactory from '../../support/pageObjects/PadillaPageFactory'
import SubCPRPage from '../../support/pageObjects/SubCPRPage'




describe('Test Suite', function () {

    before(function () {

        cy.fixture('subCPR').then(function (data) {
            this.data = data
        })


        Cypress.on('uncaught:exception', (err, runnable) => {
            return false
        })

    })

    it('Test 1: Add Sub CPR', function () {

        const padillaPage = new PadillaPageFactory()
       const subCPRPage =new SubCPRPage()

        cy.visit(Cypress.env('stagBaseUrl'))

        padillaPage.signin(this.data.subEmail, this.data.subPassword)
        subCPRPage.addProjectNameinSearch(this.data.projectName)
        subCPRPage.clickOnSearchButton()
        // cy.get('[style="margin-top: 30px;"] > a > #navigation2 > li').click()
        cy.visit("https://ecatstaging.padillainc.com/index?view=add-cprs&project_id=2725&sub_id=1357&current_contract=1000&status=Pending%20Review")
       cy.wait(50000)


    })
})