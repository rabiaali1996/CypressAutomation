class AddClientPage
{
    addClientBtn() {
        cy.get('a').contains('Add Client').click()
        cy.url().should('include', 'view=add_client')
    }

    addClientDetails()
    {

        cy.get('input[name="client_name"]').type('Automation Client')
        cy.get('input[name="address"]').type('Test address')
        cy.get('input[name="city"]').type('Santta Ana')
        cy.get('select[name="state"]').select('AZ')
        cy.get('input[name="zip"]').type('00000')
        cy.get('input[name="district"]').type('D4')
        cy.get('[value="4"]').check().should('be.checked')
        cy.get('input[name="labor_compliance"]').check().should('be.checked')
        cy.get('input[name="contact_name"]').type('Rabia')
        cy.get('input[name="contact_title"]').type('SQA')  
        cy.get('input[name="phone"]').type('0621100289')
        cy.get('input[name="email"]').type('automationTest@gmail.com')
        cy.get('[value="yes"]').check().should('be.checked')
        cy.get('select[name="status"]').select('Active')
        cy.get('#selectDisplayAll').check().should('be.checked')
        cy.get('input[name="rn"]').type('10')
        cy.get('input[name="rc"]').type('20')
        cy.get('input[name="dbe_goal"]').type('10')
        // cy.get('input[name="from_date"]').type('01/01/2021')
        // cy.get('a.ui-state-default.ui-state-active').click()
        // cy.get('input[name="to_date"]').type('01/01/2025')
        // cy.get('a.ui-state-default.ui-state-active').click()
        cy.get('[value="fta"]').check().should('be.checked')
        cy.get('[value="1 Million"]').check().should('be.checked')
        cy.get('input[name="form103"]').type('15')
        cy.get('input[name="crediting[regular_dealer_supplier]"]').type('10')
        //cy.get('#button').click()
      
       
    }

    
}
export default AddClientPage;