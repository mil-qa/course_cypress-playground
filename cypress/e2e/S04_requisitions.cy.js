describe('Course: Cypress Playground - Seção 04: Interceptando requisições à nível de rede', () => {
    beforeEach(() => cy.visit('https://cypress-playground.s3.eu-central-1.amazonaws.com/index.html'))

    it('Interceptar requisição Get TODO e verificar lista exibida', () => {
        cy.intercept('GET', 'https://jsonplaceholder.typicode.com/todos/1').as('get_todo')
        cy.contains('button', 'Get TODO').click()
        cy.wait('@get_todo')
        cy.get('ul')
            .contains('li', 'ID: 1')
    })
    it('Interceptar requisição Get TODO passando uma fixture e verificar que a lista exibida tenha os mesmos dados da fixture', () => {
        const exampleFixture = require('../fixtures/example.json')
        
        cy.intercept('GET', 'https://jsonplaceholder.typicode.com/todos/1', {fixture: 'example'}).as('get_todo')
        cy.contains('button', 'Get TODO').click()
        cy.wait('@get_todo')
        cy.get('ul')
            .should('contain', `${exampleFixture.title}`)
    })
    it('Simular falha ao interceptar a requisição Get TODO', () => {
        cy.intercept('GET', 'https://jsonplaceholder.typicode.com/todos/1', {statusCode: 500}).as('get_todo_500')
        cy.contains('button', 'Get TODO').click()
        cy.wait('@get_todo_500')
            .its('response.statusCode')
            .should('be.equal', 500)
        cy.get('div.error')
            .contains('span', 'Oops, something went wrong.')
            .should('be.visible')
    })
    it('Simular falha de rede ao interceptar a requisição Get TODO', () => {
        cy.intercept(
            'GET', 
            'https://jsonplaceholder.typicode.com/todos/1',
            {forceNetworkError: true}
        ).as('get_todo_network-error')
        cy.contains('button', 'Get TODO').click()
        cy.wait('@get_todo_network-error')
        cy.contains('.error', 'Oops, something went wrong. Check your internet connection, refresh the page, and try again.')
            .should('be.visible')
    })
})