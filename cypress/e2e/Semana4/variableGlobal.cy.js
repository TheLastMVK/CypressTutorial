let variableGlobal

describe('Prueba de Valirables Globales',()=>{

    it('guardando datos de objetivos en variables globales',()=>{
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.get("input[placeholder='Username']").type("Lorenzo")
        cy.get("input[placeholder='Username']").invoke(val).as("variableGlobal")
    })

    it('Obtener la variable global',()=>{
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.get("#lastName").type("variableGlobal")
    })

})