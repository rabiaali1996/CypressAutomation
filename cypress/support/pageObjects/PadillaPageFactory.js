class PadillaPageFactory {

    signin(email, pass) {
        cy.get('input[name="uid"]').type(email)
        cy.get('input[name="pwd"]').type(pass)
        cy.get('input[value="Login"]').click()
        cy.url().should('include', 'padillainc.com')
        //  cy.get('div.light_form_header >span').contains('Clients').should('be.visible')

    }

    selectClient(clientName) {
        //cy.get('div.clientDashTable').contains(clientName).click()

        cy.get('div.clientDashTable').each(($el, index, $list) => {
            const text = $el.find('a').text()
            if (text.includes(clientName)) {
                console.log(text)
                cy.wrap($el).find('a').contains(clientName).click()
                cy.get('.light_form_header').should('contains.text', clientName)
            }
        })

    }

    clickonAddProject() {
        cy.get('a').contains('Add Project').click()
        cy.url().should('include', 'view=add_project')
    }

    addProjectdetails(existingPrime,contractNum,projectType,fundingType) {
        cy.get('#selector_chosen').click()
        cy.get('li.active-result').each(($e1, index, $list) => {

            const text = $e1.text()
            if (text.includes(existingPrime)) {
                cy.get("li.active-result").eq(index).click({ force: true })
                cy.log(text)
            }

        })

        cy.get('input[name="associate_owner"]').check().should('be.checked')
        cy.get('input[name="details"]').type('Automation Project')        
        cy.get('input[name="contract_num"]').type(contractNum)
        cy.get('input[name="federal_project_num"]').type('federal_project_num')

        if(fundingType=='EPA')
        {
            cy.get('#fundingType').select('EPA')
        }
        else
        {      
              cy.get('#fundingType').select('FAA')
        }
        cy.get('input[name="contract_amount"]').type('2000')
        cy.get('input[name="eff_date"]').type('01/01/2021')
        cy.get('a.ui-state-default.ui-state-active').click()
        cy.get('input[name="precom_date"]').type('01/01/2021')
        cy.get('a.ui-state-default.ui-state-active').click()
        cy.get('input[name="exp_date"]').type('01/01/2023')
        cy.get('a.ui-state-default.ui-state-active').click()
        if(fundingType=='FAA')
        {
             cy.get('input[name="goal_dbe"]').type('10')
            }
       
        cy.get('[value="newContact"]').check().should('be.checked')
        cy.get('input[name="contact_first"]').type('Rabia')
        cy.get('input[name="contact_last"]').type('Khurshid')
        cy.get('input[name="contact_title"]').type('SQA Engineer')
        cy.get('input[name="contact_email"]').type('RKhurdhid889@test.com')
        if(projectType=='Regular')
        {
            cy.get('#contract_type').select('Design-Bid-Build')
        }
        else
        {
            cy.get('#contract_type').select('On-Call')  
        }
        
        cy.get('input[name="ntp_date"]').type('01/01/2021')
        cy.get('a.ui-state-default.ui-state-active').click()
        cy.get('select[name="tiers"]').select('1')
        cy.get('#cWork').check().should('be.checked')
        cy.get('h6').contains('Labor Compliance:').should('be.visible')
        cy.get('#procurement_method').select('Low Bid')
        cy.get('#contract_format').select('Unit Price')
        cy.get('input[name="retention"]').type('10')
        cy.get('#industry_type').select('Highway')
        cy.get('#location').select('Alameda County')
        cy.get('#building_type').select('Non-Infrastructure')
        cy.get('#statusmenu').select('Race Con.')
        cy.get('input[name="federal"]').type('10')
        cy.get('input[name="bid_advertisement"]').type('01/01/2021')
        cy.get('a.ui-state-default.ui-state-active').click()
        cy.get('input[name="state_pwd"]').type('SPWD0001')
        cy.get('input[name="percentage_complete"]').type('10')
        cy.get('input[name="fed_pwd"]').type('FEDPWD002')
        cy.get('#button').click()

    }

    
    clickonSubmit()
    {
       return cy.get('#button').click() 
    }

    getSelectorError()
    {
        return cy.get('#selector-error')

    }

    getProjectNameError()
    {
       return cy.get('#details-error')
    }

    getContractNumError()
    {
       return  cy.get('#contract_num-error')
    }

    getFederalProjectNumError()
    {
       return  cy.get('#federal_project_num-error')
    }
    getFundingTypeError()
    {
       return  cy.get('#fundingType-error')
    }

    getContractAmountError()
    {
       return  cy.get('#contract_amount-error')
    }

    getAwardDateError()
    {
       return  cy.get('#dp1639493617884-error')
    }

    getExpDateError()
    {
       return  cy.get('#dp1639493617886-error')
    }

    getDeliveryMethodError()
    {
       return  cy.get('#contract_type-error')
    }

    getNTPdateError()
    {
       return  cy.get('#dp1639493617887-error')
    }
     getProjectNumberError()
     {
       return cy.get('form > :nth-child(17)')
     }
   

}

export default PadillaPageFactory;