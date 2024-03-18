describe('Suite de Pruebas',{includeShadowDom:true}, () => {

    it('Error User Incorrecto', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get("input[name='username']").type('SuperAdmin')
        cy.get("input[name='password']").type('admin123')
        cy.get("button[type='submit']").click()
        cy.wait(3000) 
        cy.get("p[class='oxd-text oxd-text--p oxd-alert-content-text']").should('be.visible') 
        cy.contains('Invalid credentials').should('be.visible') 
      })

    it('Error Pass Incorrecto', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get("input[name='username']").type('Admin')
        cy.get("input[name='password']").type('admin321')
        cy.get("button[type='submit']").click()   
        cy.wait(3000)  
        cy.get("p[class='oxd-text oxd-text--p oxd-alert-content-text']").should('be.visible') 
        cy.contains('Invalid credentials').should('be.visible')      
      })

    it('Prueba Exitosa', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get("input[name='username']").type('Admin')
        cy.get("input[name='password']").type('admin123')
        cy.get("button[type='submit']").click()
        cy.get("span[class='oxd-userdropdown-tab']").should('be.visible')  
        cy.contains("Bob Tester").should('Bob Tester')  
      })

    it('boton dinamico',()=>{
        cy.visit('https://demoqa.com/buttons')
        cy.get('button').eq(3).click()
        //cy.contains('Click Me').click()
        cy.get("#dynamicClickMessage").should('be.visible').and('contain','You have done a dynamic click')
      })
})