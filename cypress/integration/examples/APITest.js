describe('My First Test Suite', function () {

    it('My FirstTest case', function () {

        cy.request('GET', 'https://jsonplaceholder.typicode.com/posts/1').then(function (response) {
            let res
            res = response.body
            cy.log(res)
            console.log(res)
         
            expect(response.status).to.eq(200)
            expect(response.body).to.have.property("id", 1)
        
        })
    })

})