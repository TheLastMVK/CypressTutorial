class loginPage{

    ingresarUsuario(){
        return cy.get('#username').type("info")
                  
    }
}
export default loginPage;