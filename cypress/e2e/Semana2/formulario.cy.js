describe('template spec', () => {
  it('Comprobar si la web carga correctamente', () => {
    cy.visit('https://es.wikipedia.org/wiki/Wikipedia:Portada')
    cy.get("li[id='ca-nstab-project']").should('be.visible')
    cy.get("#pt-createaccount-2").should('exist')
    //cy.wrap('elemento de jquery por ejemplo')
    
  })
})