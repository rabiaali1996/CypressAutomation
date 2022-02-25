class AddSubPage {

    findproject() {
        cy.get('#search-icon').click()
        cy.get('input[name="project_name"]').type('AutoTest001')
        cy.get('input[value="Search"]').click()
        cy.get('#select').click({ force: true })
        cy.get('a').contains('Project Snapshot').click({ force: true })

    }

    addSubDetails() {
        cy.get('[style="float:right;font-weight:normal; position: absolute; top: 8px; right: 8px;"] > a > img').click()

        cy.get('#subs_chosen > .chosen-single').click()
        cy.get('li.active-result').each(($e1, index, $list) => {

            const text = $e1.text()
            if (text.includes('DBE change Test001')) {
                cy.get("li.active-result").eq(index).click({ force: true })
                cy.log(text)
            }
        })

        // cy.wait(20000)
        cy.get('#mainContractVal').type('2000')
        cy.get('#valueV').check()
        cy.get('input[name="com_at_award"]').type('2000')

        cy.get('input[name="eff_date"]').type('01/01/2021')
        cy.get('.ui-datepicker-current-day > .ui-state-default').click()

        cy.get('input[name="inception_date"]').type('01/01/2021')
        cy.get('a.ui-state-default.ui-state-active').click()

        cy.get('input[name="sub_start_date"]').type('01/01/2021')
        cy.get('a.ui-state-default.ui-state-active').click()

        cy.get('input[name="date_completed"]').type('01/01/2023')
        cy.get('a.ui-state-default.ui-state-active').click()

        cy.get('input[name="dbe"]').check()
        cy.get('input[name="dbe_id"]').type('1234')
        cy.get('#senderSelect').select('Female')
        cy.get('#selectEthnicity').select('Asian-Pacific')

        cy.get('#type2').select('Subcontractor')

        cy.get('#type').select('1')

        // const fileName = '1637256399';

        // cy.fixture(fileName).then(fileContent => {
        //   cy.get('#filesToUpload').upload({ fileContent, fileName, mimeType: 'application/pdf' },
        //  { subjectType: 'input' });
        // });

        //   Cypress.Commands.add("UploadFile", function () {
        //     cy.fixture("someFile", "binary")
        //      .then(Cypress.Blob.binaryStringToBlob)
        //      .then((fileContent) => {
        //     cy.get('someElement').attachFile({
        //       fileContent,
        //       filePath: "files/1637256399.pdf",
        //       fileName: "1637256399.pdf",
        //    });

        //  });

        ///file Upload

        cy.get('#tabs > :nth-child(2) > a').click()

        const csvfile = 'files/CSV.csv'
        const docfile = 'files/doc.doc'
        cy.get('#cert_desc').type('cert desc')
        cy.get('.certupload > .light_form_field_cell > .doc_des').attachFile(csvfile)



        cy.get('#subcontract_desc').type('sub desc')
        cy.get('[style="clear:both; margin-bottom: 20px;"] > .light_form_field_cell > .doc_des').attachFile(docfile)

        cy.get('#tabs > :nth-child(3) > a').click()
        cy.get('#togglehx').check()
        cy.get('.userEditSubmit').click()


        
        cy.get('#tabs > :nth-child(2) > a').click()
        //cy.get('#tabs-7 > .certupload > .light_form_field_cell >a:nth-child(1)').click()
        // cy.get('#tabs-7 > .certupload > .light_form_field_cell >a:nth-child(2)').click()
        cy.wait(10000)
        //cy.get('.light_form_field_width > .delete').click()

    }

}

export default AddSubPage;
