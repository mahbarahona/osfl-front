import '../../support/commands'
describe('Balance', () => {
    beforeEach(() => {
      cy.visit('/');
    });
  
    it('carga del landing page', () => {
      cy.title().should('equal', 'OsflFront');
      cy.byTestId('input_nombre-organizacion').first().should('have.text', '');
      cy.byTestId('btn').first().should('exist')
    });




    it('luego de ingresar el nombre de la organizacion debe ir a agregar un nuevo item',()=>{
        const nombre_organizacion = 'mi organizacion';
        cy.byTestId('input_nombre-organizacion')
            .first()
            .clear()
            .type(nombre_organizacion);
        cy.byTestId('btn').click()
        cy.url().should('equal','http://localhost:4200/balance/item')

    })

    it('agregar nuevo item', () => {
      
    });



  });