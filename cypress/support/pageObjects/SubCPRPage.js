
class SubCPRPage {

  get subContractorName() { return cy.get('#subcontractor > #mydiv1') }
  get searchProject() { return cy.get('input[name="project_name"]') }
  get searchButton() { return cy.get('input[name="submit"]') }
  get addCPRButton() { return cy.get('li').contains("Add/View CPR(s)") }
  get cprNumber() { return cy.get("input[name='new[0][cpr_number]']") }
  get weekEndingDate() { return cy.get("input[name='new[0][week_ending]']") }
  get submissionDate() { return cy.get("input[name='new[0][submission_date]']") }
  get cprFile() { return cy.get("input[name='file0']") }
  get nonPerformance() { return cy.get("input[name='new[0][non_performance]']") }
  get submitCPRButton() { return cy.get("input[name='btnSubmit']") }


  addProjectNameinSearch(project_name) {
    return this.searchProject.type(project_name)
  }

  clickOnSearchButton() {
    return this.searchButton.click()
  }

  clickonAddCPRButton() {
    //return this.addCPRButton.click()
    cy.visit("https://ecatstaging.padillainc.com/index?view=add-cprs&project_id=2725&sub_id=1357&current_contract=1000&status=Pending%20Review")
  }

  inputCPRDetails() {
    const csvfile = 'files/CSV.csv'

    let  cprnumber = Math.random() * (100 - 1) + 1;
    let  month = Math.random() * (12 - 1) + 1;
    let  days = Math.random() * (100 - 1) + 1;
    this.cprNumber.type(cprnumber)
    this.weekEndingDate.type("02/28/2022")
    this.submissionDate.type("02/28/2022")
    this.cprFile.attachFile(csvfile)
    this.nonPerformance.check()

  }
  
  isPaginated() {
    return this.nextButton
      .then((nextButton) => {
        const disabled = nextButton.hasClass('a-disabled');
        return this.items.then((items) => {
          const numberOfItemsOnPage = items.length;
          if (!disabled) {
            if (numberOfItemsOnPage === 16) {
              return this.clickNextButton()
                .then(this.isPaginated.bind(this));
            }
            return false;
          } else {
            return numberOfItemsOnPage <= 16;
          }
        });
      });
  }

  randomDate(start, end) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
  }

  subtmitCPR() {
    this.submitCPRButton.click()
  }


}
export default SubCPRPage;
