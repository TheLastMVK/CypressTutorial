describe('Pruebas con Asserts',() =>{
    it('assert que coincide con el atributo-valor',()=>{
        cy.visit('https://demoqa.com/automation-practice-form')
        cy.url().should('include','demoqa.com')
        cy.get('#firstName').should('have.attr','placeholder','Fist Name')
                                  //palabra reservada-atributo-condicion (para exitoso)
    })
  
    it('assert contaneado',()=>{
        cy.visit('https://demoqa.com/automation-practice-form')
        cy.get('#lastName').should('be.visible').should('have.attr','placeholder','lorenxzo')
                                          //palabra reservada-atributo-condicion (para fallido Last Name)
    })

    it('expect assert',()=>{
        cy.visit('https://demoqa.com/automation-practice-form')
        cy.get('#firstNAme').then((objeto)=> {
            expect(objeto).to.be.visible
            expect(objeto).to.have.attr('placeholder','First Name')
        })
    })

    it.only('assert concat',()=>{
        cy.visit('https://demoqa.com/automation-practice-form')
        cy.get('#firsttName').then((objeto2)=>{
            assert.equal(objeto2.attr('placeholder','First Name'))
        })
    })

})