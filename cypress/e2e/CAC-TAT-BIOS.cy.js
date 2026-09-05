describe('CAC TAT', () => {
  beforeEach(() => {
    cy.visit('./src/index.html');
  });

  it('deve acessar a página', () => {
    cy.get('#title').should('contain', 'CAC TAT');
  });

});