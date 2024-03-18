beforeEach(()=>{
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
    //se ejecuta cada vez que se inicia un test

})


describe('mi suite de ventanas emergentes',()=>{

    it('alert',()=>{
       // cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('#alertbtn').click()
        cy.on('window:alert',(str)=>{
            expect(str).to.equal('Hello, share this practice page and share your knowledge')
        })
    })
    it('alert',()=>{
      //  cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('#alertbtn').click()
        cy.on('window:alert',(str)=>{
            expect(str).to.equal('Hello, share this practice page and share your knowledge')
        })
    })
    it('pop de confirmacion',()=>{
       // cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('#confirmbtn').click()
        cy.on('window:confirm',(str)=>{
            expect(str).to.equal('Hello, Are you sure you want to confirm?')
        })
    })
    it('interectuando con tabs',()=>{
      //  cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        //vamos a programarcy.get('#alertbtn').click()
        cy.on('window:alert',(str)=>{
            expect(str).to.equal('Hello, share this practice page and share your knowledge')
        })
    })

    it('interectuando con tabs de pestañas de navegador',()=>{
        //vamos a programar el quitar el href
           cy.get('#opentab').invoke('removeAttr','target').click()
                                    //quitar atributo target
           cy.wait(4000)
           cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
       })
   
})