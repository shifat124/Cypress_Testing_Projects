describe('Radio Button And Check Box Test', () => {
    it('radio btn test', () => {

        cy.visit("https://itera-qa.azurewebsites.net/home/automation")
        //visibility of radio buttons
        cy.get('input#male').should('be.visible')
        cy.get('input#female').should('be.visible')

        //selecting radio buttons
        cy.get('input#male').check().should('be.checked')
        cy.get('input#female').should('not.be.checked')


        
     
    })

    it('check box test', () => {

        cy.visit("https://itera-qa.azurewebsites.net/home/automation")
        //visibility of check box
        cy.get('input#monday').should('be.visible')
        

        //selecting single check box
        cy.get('input#monday').check().should('be.checked')

        //unselect single check box

        cy.get('input#monday').uncheck().should('not.be.checked')

        //select all the check boxes

        cy.get("input.form-check-input[type='checkbox']").check().should('be.checked')

         //unselect all check boxes

         cy.get("input.form-check-input[type='checkbox']").uncheck().should('not.be.checked')
        


        
     
    })

    
  })