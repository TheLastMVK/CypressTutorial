describe('Logeo al Sistema',() =>{
    it('Logeo con Administrador',()=>{
        cy.visit('https://landing-test.vuce.gob.pe/vuce-zee-mf/')
        cy.wait(500)
        cy.get('#username').type("abelchingo")
        cy.get('#password').type("admin")        
        cy.get('button[class="btn btn-danger btn-zee br-0 btn-custom"]').click()                    
    })
})