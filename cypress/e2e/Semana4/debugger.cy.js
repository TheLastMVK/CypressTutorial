describe('debug',()=> {
    it('console log',()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get("input[placeholder='Username']").type("usuario")
        cy.get("input[placeholder='Password']").type("admin1123")
        //entras a consola y se verá lo que se escribió
        console.log('llegamos hasta ingresar el password')
        //stopea el proceso de prueba
        cy.pause()
        cy.get("button[type='submit']").click()



    })




})