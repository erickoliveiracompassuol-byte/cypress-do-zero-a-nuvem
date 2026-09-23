describe('CAC TAT', () => {
  beforeEach(() => {
    cy.visit('./src/index.html');
  });

  it('deve acessar a página', () => {
    cy.get('#title').should('contain', 'CAC TAT');
  });

  it('Campos obrigatórios do formulário',() =>{

    let longText = Cypress._.repeat('Muito Obrigado pelo curso, estou aprendendo muito com ele e com o professor Erick Bios', 2)

    cy.get('#firstName').type('ErickBios').should('have.value', 'ErickBios');
    cy.get('#lastName').type('Silva').should('have.value', 'Silva');
    cy.get('#email').type('erickbiosk@gmail.com').should('have.value', 'erickbiosk@gmail.com');
    cy.get('#open-text-area').type(longText, { delay: 0 }).should('have.value', longText);
    // cy.get('#phone').type('11999999999').should('have.value', '11999999999');
    cy.get('#product').select('Blog')
    cy.get('button[type="submit"]').click();


    cy.get('.success').should('be.visible');
  })

  it('Exibe mensagem de erro ao submente o formularío com um email de com formato errado',() =>{
 cy.get('#firstName').type('ErickBios').should('have.value', 'ErickBios');
    cy.get('#lastName').type('Silva').should('have.value', 'Silva');
    cy.get('#email').type('erickbiosk@gmail,com').should('have.value', 'erickbiosk@gmail,com');
    cy.get('#open-text-area').type("Teste");
    // cy.get('#phone').type('11999999999').should('have.value', '11999999999');
    cy.get('#product').select('Blog')
    cy.get('button[type="submit"]').click();


    cy.get('.error').should('be.visible');
  });

  it('Campo telefone continua vazio quando preenchido com valor não numérico', () => {
    cy.get('#phone')
    .type('abcdefghij')
    .should('have.value', '');
  });

it('Exibe mensagem de erro quando o telefone se torna obrigatório mas não é preenchido antes do envio do formulário', () => { 

    cy.get('#firstName').type('ErickBios').should('have.value', 'ErickBios');
    cy.get('#lastName').type('Silva').should('have.value', 'Silva');
    cy.get('#email').type('erickbiosk@gmail,com').should('have.value', 'erickbiosk@gmail,com');
    cy.get('#open-text-area').type("Teste");
    cy.get('#phone-checkbox').check();

    cy.get('button[type="submit"]').click();

    cy.get('.error').should('be.visible');
  });

it('Preenche e limpa os campos nome, sobrenome, email e telefone', () => {
  cy.get('#firstName')
  .type('ErickBios')
  .should('have.value', 'ErickBios').
  clear().should('have.value','');
  cy.get('#lastName')
  .type('Silva')
  .should('have.value', 'Silva').
  clear().should('have.value','');
  cy.get('#email')
  .type('erickbiosk@gmail,com')
  .should('have.value', 'erickbiosk@gmail,com').clear().should('have.value','');
  cy.get('#phone')
  .type('11999999999')
  .should('have.value', '11999999999').clear().should('have.value','');
})

it('Exibe mensagem de erro ao submente o formularío sem preencher os campos obrigatórios',() =>{
cy.get('.button[type=submit]').click();
cy.get('.error').should('be.visible');
});

it('envia o formulário com sucesso usando um comando customizado', () => {
 
  let longText = Cypress._.repeat('Muito Obrigado pelo curso, estou aprendendo   muito com ele e com o professor Erick Bios',3)

  const pessoa = {
    firtName: 'ErickBios',
    lastName: 'Silva',
    email: 'erickbiosk@gmail.com',
    text: longText,
    phone: '11999999999',
    product: 'Blog'
    }
  cy.ComandoPersonalizationDeSubmiteFormulario(pessoa);


  cy.get('.success').should('be.visible');
  
});
  it('selecione um produto "x" pelo texto', () => {
    cy.get('#product').select('YouTube').should('have.value', 'youtube');
  }

); 
it('selecione um produto "x" pelo valor', () => {
  cy.get('#product')  
  .select('mentoria')
  .should('have.value', 'mentoria');
});

it('selecione um produto so select principal pelo seu índice',()=>{
  cy.get('#product')
  .select(2)
  .should('have.value','cursos');
});

it('marco um tipos de checkbox,',()=>{ 
  cy.get('input[type="radio"]').check('feedback').should('be.checked');
  cy.get('input[type="radio"][value="elogio"]').check().should('be.checked');
  cy.get('input[type="radio"][value="ajuda"]').check().should('be.checked');
});

it('marca cada tipo de atendimento', ()=> {
  cy.get('input[type="radio"]')
  .each(typeOfService =>{
  cy.wrap(typeOfService).check().should('be.checked');
  })
});

it.only('marca ambos checkboxes, depois desmarca o último', () => {
  cy.get('input[type="checkbox"]')
  .check()
  .should('be.checked')
  .last().uncheck()
  .should('not.be.checked');
}); 
  
});