import loginPage from "../Page/loginPage.js"

describe('Logeo al Sistema ZEE',()=>{

    it('alert',()=>{
        const login = new loginPage()        
       cy.visit('https://landing-test.vuce.gob.pe/vuce-zee-mf/')
       login.ingresarUsuario()       
    })   
})
