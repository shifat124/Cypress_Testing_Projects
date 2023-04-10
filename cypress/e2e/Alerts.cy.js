

describe('Alert Tests', () => {
    //JS Simple alert test
    it('JS simple alert test', () => {

        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
        cy.get("button[onclick='jsAlert()']").click()
        //valiodate the alert window text
        cy.on('window:alert', (t)=>{
            expect(t).to.contains('I am a JS Alert')
        })
        //validation after alert window closes
        cy.get('#result').should('have.text', 'You successfully clicked an alert')
        
     
    })
    //JS Confirmation Alert Test
    it('JS confirmation alert test - OK Button', () => {

        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
        cy.get("button[onclick='jsConfirm()']").click()
        //valiodate the alert window text
        cy.on('window:confirm', (t)=>{
            expect(t).to.contains('I am a JS Confirm')
        })
        //validation after alert window closes
        cy.get('#result').should('have.text', 'You clicked: Ok')
        
     
    })

    it('JS confirmation alert test - Cancel Button', () => {

        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
        cy.get("button[onclick='jsConfirm()']").click()
        //valiodate the alert window text
        cy.on('window:confirm', (t)=>{
            expect(t).to.contains('I am a JS Confirm')
        })

        cy.on('window:confirm', ()=>false)

        //validation after alert window closes
        cy.get('#result').should('have.text', 'You clicked: Cancel')
        
     
    })

    //prompt window alert

    it('JS prompt alert test - OK Button', () => {

        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
       
        
        cy.window().then((win)=>{
            cy.stub(win, 'prompt').returns('welcome')
        })

        cy.get("button[onclick='jsPrompt()']").click()

        //validation after alert window closes
        cy.get('#result').should('have.text', 'You entered: welcome')
        
     
    })

    it('JS Authenticated Window Test', () => {

        cy.visit("https://the-internet.herokuapp.com/basic_auth", {auth: {username: "admin", password: "admin"}})
       cy.get("div[class='example'] p").should('have.contain', 'Congratulations')
        
       
        
     
    })




    



    
  })