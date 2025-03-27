describe('Course: Cypress Playground - S09: Controlando o tempo com Cypress', () => {
    beforeEach(() => {cy.visit('https://cypress-playground.s3.eu-central-1.amazonaws.com/index.html')})
    it('Copiar código, digitar no campo e clicar em submit', () => {
        cy.get('#timestamp')
            .then((element) => {
                const code = element[0].innerText
                cy.get('#code').type(code)
                cy.contains('button', 'Submit').click()
                cy.get('.success').should('be.visible')
            })
    })
    it('Fazer download e ler o arquivo baixado', () => {
        cy.contains('a', 'Download').click()
        cy.readFile('cypress/downloads/example.txt')
            .should('be.equal', 'Hello, World!')
    })
})