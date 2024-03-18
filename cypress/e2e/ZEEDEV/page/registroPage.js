class registroPage{


  
    inicioSesion(){ 
      return cy.wait(500),
      cy.get('#username').type("abelchingo"),
      cy.get('#password').type("admin"),  
      cy.get('button[class="btn btn-danger btn-zee br-0 btn-custom"]').click(),
      cy.wait(1000)
    }

    seleccionFormulario(){ 
      return cy.get('span[class="mat-content ng-tns-c50-12"]').click(),
      cy.wait(1000),     
      cy.get('#mat-expansion-panel-header-29').click(), 
      cy.wait(5000),     
      cy.get('span[class="mat-button-wrapper"]').eq(5).click(),     
      cy.wait(4000)  
    }

    registroParte1(){ 
      return cy.get("body>main>div:nth-child(4)>mf-ingreso>ingreso-nuevo>div>menu-datosingreso>form>div>div>mat-form-field:nth-child(3)>div").click(), 
      cy.get('div[class="mat-calendar-body-cell-content mat-focus-indicator mat-calendar-body-today"]').click(),
      cy.get('#mat-select-6').click(),
      cy.wait(1000),
      cy.get('span[class="mat-option-text"]').contains("Del Resto del Territorio Nacional").click(),
      cy.wait(1000),          
      cy.get('#mat-select-value-9').click(),
      cy.wait(1000),
      cy.get('span[class="mat-option-text"]').contains("PUERTO DE ILO").click(),
      cy.wait(1000),
      cy.get('div[id="mat-select-value-11"]').click(),
      cy.wait(1000),
      cy.get('span[class="mat-option-text"]').contains("Tramite Calculo Fijo").click(),
      cy.wait(1000), 
      cy.get('body').trigger('keydown', { keyCode: 27}),
      cy.wait(500),
      cy.get('body').trigger('keyup', { keyCode: 27}),
      cy.get('div[id="mat-select-value-17"]').click(),
      cy.wait(1000),
      cy.get('span[class="mat-option-text"]').contains("BULTOS").click(),
      cy.wait(1000),
      cy.get('div[id="mat-select-value-13"]').click(),
      cy.wait(1000),
      cy.get('span[class="mat-option-text"]').contains("TERRESTRE").click(),
      cy.wait(1000),
      cy.get('div[id="mat-select-value-15"]').click(),
      cy.wait(1000),
      cy.get('span[class="mat-option-text"]').contains("MANIFIESTO INT DE CARGA").click(),
      cy.wait(1000), 
      cy.get('#mat-input-12').type("1234567890"),
      cy.get('#mat-input-13').type("100"),
      cy.get('#mat-input-10').type("500"),   
      cy.get('div[id="mat-select-value-19"]').click(),
      cy.wait(1000),
      cy.get('span[class="mat-option-text"]').contains("KILOGRAMOS").click(),
      cy.wait(1000),
      cy.get('#mat-input-11').type("tablas de madera"),
      cy.get('.mat-button-wrapper').eq(8).click() 
    }

    registroParte2(){ 
      return cy.wait(1500),
      cy.get('.mat-button-wrapper').eq(3).click(),
      cy.wait(1500),
      cy.get('input[formcontrolname="razonsocial"]').type("Rápidos y Furiosos"),
      cy.wait(1000),
      cy.get('input[formcontrolname="razonsocial"]').trigger('keydown', { keyCode: 13}),
      cy.wait(500),
      cy.get('input[formcontrolname="razonsocial"]').trigger('keyup', { keyCode: 13}),
      cy.get('input[formcontrolname="nroplaca"]').type("ABC-333"),
      cy.wait(1000),
      cy.get('input[formcontrolname="nroplaca"]').trigger('keydown', { keyCode: 13}),
      cy.wait(500),
      cy.get('input[formcontrolname="nroplaca"]').trigger('keyup', { keyCode: 13}),
      cy.get('input[formcontrolname="Conductor"]').type("Gianca Cisneros Cabello"),
      cy.wait(1000),
      cy.get('input[formcontrolname="Conductor"]').trigger('keydown', { keyCode: 13}),
      cy.wait(500),
      cy.get('input[formcontrolname="Conductor"]').trigger('keyup', { keyCode: 13}),
      cy.get('div[id="mat-select-value-21"]').click(),
      cy.wait(1000),
      cy.get('span[class="mat-option-text"]').contains("20").click(),
      cy.wait(1000),
      cy.get('#mat-input-21').type("38"),
      cy.get('#mat-input-22').type("50"),
      cy.get('#mat-input-23').type("100"),
      cy.get('#mat-input-24').type("JRK532"),
      cy.get('.mat-button-wrapper').eq(16).click(), 
      cy.wait(1000),
      cy.get('.mat-button-wrapper').eq(20).click(), 
      cy.wait(1000),
      cy.get('.mat-button-wrapper').eq(22).click()
    }

}
export default registroPage;