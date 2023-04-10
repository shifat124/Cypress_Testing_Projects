import 'cypress-iframe'
describe('Iframe Test', () => {
    it('By using cypress-iframe plugin', () => {

        cy.visit("https://the-internet.herokuapp.com/iframe");
        cy.frameLoaded('#mce_0_ifr');  //Load the iframe
        cy.iframe('#mce_0_ifr').clear().type('Welcome {ctrl+a}');
        cy.get("[aria-label='Bold']").click();


        
     
    })

   
  })