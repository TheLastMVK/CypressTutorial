describe('Suite de pruebas de Login',() =>{
    it('usuario incorrecto',()=>{
        cy.visit('https://automationtesting.co.uk/loader.html')
        cy.wait(10000)
        cy.get('#loaderBtn').click()
      cy.get('#p_wording').should('contain','And you have clicked the button!')
               
    })

    it.only('usuario incorrecto',()=>{
        cy.visit('https://automationtesting.co.uk/loader.html')
        cy.get('#loaderBtn',{timeout:9000}).click()
        
    })
})