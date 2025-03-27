describe('Course: Cypress Playground - Seção 05: Testes de API com Cypress', () => {
    beforeEach(() => cy.visit('https://cypress-playground.s3.eu-central-1.amazonaws.com/index.html'))

    it('Criar requisição', () => {
        cy.request(
            'GET',
            'https://jsonplaceholder.typicode.com/todos/1'
        ).as('getTodo')
         .its('status')
         .should('be.equal', 200)
        cy.get('@getTodo').should((response) => {
            expect(response.status).to.be.equal(200)
        })
    })
})