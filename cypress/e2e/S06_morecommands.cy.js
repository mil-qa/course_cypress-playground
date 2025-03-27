describe('Course: Cypress Playground - S06: Outros comandos do Cypress', () => {
    beforeEach(() => cy.visit('https://cypress-playground.s3.eu-central-1.amazonaws.com/index.html'))
    Cypress._.times(10, (index) => {
        it(`Selecionar o valor ${index + 1} do select tipo range`, () => {
            cy.get('input[type="range"]#level')
                .invoke('val', index + 1)
                .trigger('change')
            cy.contains('p', `level: ${index + 1}`)
                .should('be.visible')
        })
    })
    it('Digitar data e tirar foco do campo', () => {
        cy.get('input[type="date"]#date')
            .type('1998-02-27')
            .blur()
        cy.contains('p', '1998-02-27')
    })
})