import '../../support/commands'
describe('Balance', () => {
    beforeEach(() => {
      
      cy.visit('/balance/home');
    });
  

    it('agregar nuevo item', () => {
        cy.byTestId('btn_agregar-item').click()
        cy.url().should('equal','http://localhost:4200/balance/item')

        //completar formulario
        //agregar
        //verificar que el item esté en el home

    });



  });