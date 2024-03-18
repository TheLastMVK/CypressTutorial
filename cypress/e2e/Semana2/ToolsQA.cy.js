describe('template spec', () => {

    it('VALIDADOR', () => {
      cy.visit('https://demoqa.com/buttons')
      cy.get("body > div:nth-child(6) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(4) > button:nth-child(3)").click() 
      //cy.get("li[id='ca-nstab-project']").should('be.visible')  



    })
  })