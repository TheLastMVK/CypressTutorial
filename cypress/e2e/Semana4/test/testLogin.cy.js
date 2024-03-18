
import loginPage from "../pages/loginPage.js";

describe('Pruebas con POM',()=>{
    
    it('Login POM',()=>{

        const login = new loginPage()
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')    
        login.ingresarUserName().type("Usuario1")
        login.ingresarPassword().type("admin123")
    })
})