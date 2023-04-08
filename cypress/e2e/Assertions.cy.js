const { assert } = require("chai")

describe('Test Using Assertions', () => {
    it('Implicit Assertions', () => {
        //URL Assertion using should keyword
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.url().should('include', 'o.orangehrmlive.com/web/index.ph')
        cy.url().should('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

        //URL Assertion using should and and keyword

        cy.title().should('include', 'Orange')
        .and('eq', 'OrangeHRM')
        .and('contain', 'HRM')

        //Logo visibility test

        cy.get('.orangehrm-login-branding > img').should('be.visible')
        .and('exist')


        
     
    })

    //Explicit Assertions

    it('Explicit Assertions', () => {
       
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.get("input[placeholder='Username']").type('Admin')
        cy.get("input[placeholder='Password']").type('admin123')
        cy.get("button[type='submit']").click()

        let expName = "xyz"
        cy.get('.oxd-userdropdown-name').then( (x)=>{
            let actName = x.text()
            //BDD Style
            expect(actName).to.not.equal(expName)

            //TDD Style
            assert.notEqual(actName, expName)

        })
        

       
       

        
     
    })
   
    

    
  })