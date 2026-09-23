Cypress.Commands.add('ComandoPersonalizationDeSubmiteFormulario', (pessoa = {
    firstName: 'DefaultErick',
    lastName: 'DefaultSilva',
    email: 'default@gmail.com',
    text: 'default text',
    phone: '2525252525',
    product: 'Blog'
}) => {
    cy.get('#firstName').type(pessoa.firtName)
    cy.get('#lastName').type(pessoa.lastName)
    cy.get('#email').type(pessoa.email)
    cy.get('#open-text-area').type(pessoa.text, { delay: 0 })
    cy.get('#phone').type(pessoa.phone)

    if (pessoa.product === '') {
        cy.get('#product option[value=""]')
            .should('be.disabled')
            .and('have.text', 'Selecione')
    } else {
        cy.get('#product').select(pessoa.product)
    }

    cy.get('button[type="submit"]').click()
})