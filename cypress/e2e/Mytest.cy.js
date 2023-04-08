describe('My First Test', () => {
    it('verify title - positive test', () => {

        cy.visit("https://www.saucedemo.com/")
        cy.title().should("eq","Swag Labs")
     
    })

    it('verify title - negative test', () => { 

        cy.visit("https://www.saucedemo.com/")
        cy.title().should("eq","Swag Labs123")
     
    })
  })