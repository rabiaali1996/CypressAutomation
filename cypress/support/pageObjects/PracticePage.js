class PracticePage
{
  

signin(email,pass)
{
    try{
        
    cy.get('a.login').click()
    cy.get('input[name="email"]:nth-child(2)').type(email)
    cy.get('#passwd').type(pass)
    cy.get('#SubmitLogin').click()
   
    }
    
    catch
    {
       console.log("unable to signin")
    }
}
  
searchInput()
{
    return cy.get('#search_query_top')
}

searchBtn()
{
    return cy.get('button[name="submit_search"]')
}

searchfromlist(searchkey)
{
cy.get('#best-sellers_block_right').find('.product-content').each(($el, index, $list) => {

const text=$el.find('h5 > a.product-name').text()
if(text.includes(searchkey))
{
console.log(text)
cy.wrap($el).find('h5 > a.product-name').click()
cy.get('h1').should('have.text',searchkey)
}
})

}

addToCart()
{
cy.get('button[name="Submit"]').contains('Add to cart').click()
}

proceedToCheckout()
{
cy.get('a.button').contains('Proceed to checkout').click()
cy.get('#cart_title').then(function(element){
   const actualText=element.text()
  expect(actualText.includes("Shopping-cart summary")).to.be.true
})

}

checkoutFromSummary()
{
    cy.get('a.button:nth-child(1)').contains('Proceed to checkout').click({force: true})  
    // cy.get('.page-heading').then(function(element){
    //     const actualText=element.text()
    //    expect(actualText.includes("Address")).to.be.true
    // })
}

checkoutFromAddress()
{
    cy.get('.cart_navigation > .button > span').click({force: true})  
   
}


    checkoutFromShipping()
{
    cy.get('#cgv').check().should('be.checked')
    cy.get('.cart_navigation > .button > span').click({force: true})  

}
selectpayment()
{
    cy.get('.bankwire').click()

}

confirmOrder()
{
    cy.get('#cart_navigation > .button > span').click({force: true})  
    cy.get('.cheque-indent').then(function(element){
            const actualText=element.text()
           expect(actualText.includes("Your order on My Store is complete.")).to.be.true
        })
}


}



export default PracticePage;
