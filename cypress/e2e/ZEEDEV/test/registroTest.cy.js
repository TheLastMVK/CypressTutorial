import registroPage from "../page/registroPage.js"


before(()=>{
    cy.visit('https://landing-test.vuce.gob.pe/vuce-zee-mf/')    
})

describe('REGISTRO DE FORMULARIO',{includeShadowDom:true},()=>{

    it('Proceso Registrar',()=>{
       const registrar = new registroPage()        
       registrar.inicioSesion()  
       cy.get('.custom-name-user').should('contain','ABEL CHINGO TELLO')
       registrar.seleccionFormulario()
       cy.get('.m-20').should('contain','Ingreso de mercancías')
       registrar.registroParte1()
       cy.get('.mat-button-wrapper').eq(3).should('be.visible')
       registrar.registroParte2()
       cy.get('.mat-dialog-content').should('contain','Chofer incorrecto, seleccione o agregue un nuevo registro')    
    })     

})