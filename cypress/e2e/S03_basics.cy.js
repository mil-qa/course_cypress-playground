describe('Course: Cypress Playground - Seção 03: Comandos básicos do Cypress', () => {
    beforeEach(() => cy.visit('https://cypress-playground.s3.eu-central-1.amazonaws.com/index.html'))

    it('Verificar o titulo do site', () => {
        cy.title().should('be.equal', 'Cypress Playground - Talking About Testing')
    })
    it('Clicar no botão Subscribe', () => {
        cy.contains('button', 'Subscribe').click()
        cy.get('#success')
          .should('be.visible')
          .should('have.text', 'You\'ve been successfully subscribed to our newsletter.')
    })
    it('Digitar o primeiro nome para assinatura', () => {
        cy.get('textarea#signature-textarea')
          .type('Pafuncio')
        cy.get('#signature')
          .should('be.visible')
          .should('have.text', 'Pafuncio')
    })
    it('Selecionar preview de assinatura', () => {
        cy.get('#signature-textarea-with-checkbox')
          .type('von Fulano')
        cy.get('input[type=checkbox]#signature-checkbox')
          .check()
        cy.get('#signature-triggered-by-check')
          .should('be.visible')
          .should('have.text', 'von Fulano')
    })
    it('Ligar e desligar radio buttons', () => {
        cy.get('input[type="radio"]#on')
          .check()
        cy.get('#on-off')
        .should('have.text', 'ON')
        cy.get('input[type="radio"]#off')
          .check()
        cy.get('#on-off')
        .should('have.text', 'OFF')
    })
    it('Selecionar um tipo disponível', () => {
        cy.get('select[name="selection-type"]')
          .select(3)
          .should('have.value', 'vip')
        cy.get('#select-selection')
          .should('contain', 'VIP')
    })
    it('Selecionar duas frutas', () => {
        cy.get('#fruit')
          .select(['cherry', 'date'])
        cy.get('#fruits-paragraph')
          .should('contain', 'cherry, date')
    })
    it('Fazer upload de um arquivo', () => {
        cy.fixture('example.json').as('file')
        cy.get('#file-upload')
          .selectFile('@file')
        cy.get('#file')
          .should('contain', 'example.json')
    })
})