describe('Llenar Formulario', () => {
    it('completar campos', () => {
    cy.visit('https://demoqa.com/text-box')
    cy.get("input[id='userName']").type('Jorge Daniel Cisneros Cabello')
    cy.get("input[id='userEmail']").type('ing.jorgecisneroscab@gmail.com')
    cy.get("textarea[placeholder='Current Address']").type('Avenida Rafael escardo 620 departamento 111')
    cy.get("textarea[id='permanentAddress']").type('Oficina laboral MINCETUR')
    cy.get("button[id='submit']").click()  
    cy.wait(3000)  
    })
})