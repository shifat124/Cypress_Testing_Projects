describe('Test Using CSS Locators', () => {
    it('csslocators', () => {

        cy.visit("https://www.saucedemo.com/")
        cy.get("input#user-name").type("standard_user")
        cy.get("input#password").type("secret_sauce")
        cy.get("input#login-button").click()
        cy.get("span.title").contains("Products") //Assertion
        
     
    })
   
    it('xpathlocators', () => {

        cy.visit("https://www.saucedemo.com/")
        cy.get("input#user-name").type("standard_user")
        cy.get("input#password").type("secret_sauce")
        cy.get("input#login-button").click()
        cy.xpath("//*[@class='inventory_list']/div").should("have.length", 6)
        
     
    })

    
  })