describe('Inscripcion Nuevo Usuario', () => {
    it('Nuevo Usuario', () => {
        cy.visit('http://dbankdemo.com/bank/login')
        cy.get('#username').type("HolaMundo")
        cy.get('a[href="/bank/signup"]').click()
        cy.get('#title').select("Mr.")
        cy.get('#firstName').type("Jorge Daniel")
        cy.get('#lastName').type("Cisneros Cabello")
        cy.get('input[value="M"]').click()
        cy.get('#dob').type("01/02/1984")
        cy.get('#ssn').type("123-45-6789")
        cy.get('#emailAddress').type("ing.jorgecisneroscab@gmail.com")
        cy.get('#password').type("123ABCabc")
        cy.get('#confirmPassword').type("123ABCabc")
        cy.get('button[type="submit"]').click()       

cy.wait(5000)
cy.go("back")
cy.wait(3000)
cy.go("forward")


//cy.get("textarea[placeholder='Current Address']").type('Avenida Rafael escardo 620 departamento 111')
//cy.get("textarea[id='permanentAddress']").type('Oficina laboral MINCETUR')
//cy.get("button[id='submit']").click()  

    })


})