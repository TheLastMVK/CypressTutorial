describe('pruebas de Login', () => {
    it('login exitoso', () => {
      cy.visit('https://landing-test.vuce.gob.pe/olce-wp')
      cy.get("a[id='dropdownNavbarLink-4']").click()
      cy.get("a[id='menu-item-311']").click()
      cy.get("select[class='jet-select__control']")
      .select("Marco General")
      .should("have.value","53")

      cy.get("div[class='jet-filter-items-dropdown__label']").click()


     // cy.get("#block-134 > div > div.jet-filter-items-dropdown.jet-dropdown-open > div.jet-filter-items-dropdown__body > div > div > div > fieldset > div:nth-child(3) > label > div > span.jet-checkboxes-list__label").click()
       
      cy.get("input[type='checkbox']")
      .should('not.be.visible')
      .check({force:true})
      .should('be.checked')
     // .click({multiple: true})
      
     cy.get("button[class='apply-filters__button']")
     .click()
      
    })
  })