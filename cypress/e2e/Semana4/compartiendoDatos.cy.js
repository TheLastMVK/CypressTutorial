describe('debug',()=> {

     //declarando una variable
     let TEXTO_NEW;

    it('console log',()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get("input[placeholder='Username']").type("usuario")
        //
        //cy.get("input[placeholder='Username']").clear()
        cy.get("input[placeholder='Username']").type('{selectAll}{backspace}').type("segundoNombre")
        //cy.get("input[placeholder='Username']").type("segundoNombre")


       // cy.get("input[placeholder='Password']").type("admin1123")
       // cy.get("button[type='submit']").click()
    })



    it('ingresando opciones teclado imprimiendo valores de calendario',()=>{
        cy.visit('https://demoqa.com/automation-practice-form')
        cy.get("#dateOfBirthInput").click()
        cy.get('#dateOfBirthInput').type("value{enter}")        
        cy.get('#dateOfBirthInput')
        .invoke('val')      
        .then(someText => cy.log(someText))
    })


   

    it.only('extract information',()=>{
        cy.visit('https://demoqa.com/automation-practice-form')
        cy.get("#firstName").as('primerNombre')
        cy.get('@primerNombre').type("Lorenzo")    
        cy.get("#lastName").type('vida')
        cy.get("#lastName").then(($ElementoJQuery)=>  {
            TEXTO_NEW = $ElementoJQuery.val()
            console.log(TEXTO_NEW)
        })     
    })


    it.only('get information',()=>{
        cy.visit('https://demoqa.com/automation-practice-form')
        cy.get("#firstName").type(TEXTO_NEW)
                
    })

})