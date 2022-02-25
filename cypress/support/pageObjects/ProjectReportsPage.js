/// <reference types = "Cypress-iframe"/>
import 'cypress-iframe'

class ProjectReportPage {

    getProjectReportLocator() {
        cy.get('#reports').click()
        cy.get('a').contains('Add New Project Report').click()
        cy.get('#selectElementId').select('2019')
        cy.get('#report_month').select(1)

        cy.get('#number0').type('INVOICE_002')
        cy.get('#date0').type('01/01/2021')
        cy.get('.ui-datepicker-days-cell-over > .ui-state-default').click()
        cy.get('#value0').type('2000')
        // cy.get(':nth-child(2) > :nth-child(5) > .dropdown > a > .w3-btn').click()
        cy.get('.checkAll').uncheck()
        cy.get('input[value="Proceed to Payment Verification"]').click()
        // cy.get('#frame3227').within($frame => {
       
        cy.get('iframe').each(($e1, index, $frame) => {

                const text = $e1.text()
                if (text.includes('Payment for')) {
                    cy.get("iframe").eq(index).click({ force: true })
                    
                }
            const totalAmount = $frame.contents().find('#currencyField')
            cy.wrap(totalAmount).clear().type('2000')

            const amount = $frame.contents().find('#currencyField0')
            cy.wrap(amount).clear().type('2000')

            const invoiceAmount = $frame.contents().find('#inAmount0')
            cy.wrap(invoiceAmount).click()

            const paymentDate = $frame.contents().find('#payDate0')
            cy.wrap(paymentDate).clear().type('2021-02-01')
            //cy.get('.ui-datepicker-days-cell-over > .ui-state-default').click()
            const selectDate = $frame.contents().find('.spRequired')
            cy.wrap(selectDate).click()


            const invoiceDate = $frame.contents().find('#invoiceDate0')
            cy.wrap(invoiceDate).type('2021-02-01')
            const selectDate1 = $frame.contents().find('.spRequired')
            cy.wrap(selectDate1).click()

            const checkNumber = $frame.contents().find('input[name="details[0][check]"]')
            cy.wrap(checkNumber).click()

            const invNumber = $frame.contents().find('input[name="details[0][invoice]"]')
            cy.wrap(invNumber).type('TestINV001')

            const invSelect = $frame.contents().find('#select2-primeData-container')
            cy.wrap(invSelect).select(0)

        })








        // cy.frameLoaded('frame3227');
        // cy.iframe().find("#currencyField0").type('')
        // cy.iframe().find("#payDate0").type('01/01/2021')
        // cy.iframe().find('input[name="details[0][check]"]').type('01/01/2021')
        // cy.get('.ui-datepicker-days-cell-over > .ui-state-default').click()
        // cy.iframe().find("#inAmount0").type('2000')
        // cy.iframe().find("#invoiceDate0").type('01/01/2021')
        // cy.get('.ui-datepicker-days-cell-over > .ui-state-default').click()
        // cy.iframe().find('input[name="details[0][invoice]"]').type('TestINV001')

        //  cy.iframe().find("#invoiceDate0").type('01')
        //  cy.get('#select2-primeData-container').select('INVOICE_002')
        //  cy.get('input[name="submit"]').contains('Verify').click






    }
}
export default ProjectReportPage;