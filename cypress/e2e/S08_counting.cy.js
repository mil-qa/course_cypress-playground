describe('Course: Cypress Playground - S08: Contando elementos com Cypres', () => {
    beforeEach(() => cy.visit('https://cypress-playground.s3.eu-central-1.amazonaws.com/index.html'))
    it('Contar lista e verificar quantidade', () => {
        cy.get('ul#animals li')
            .should('have.length', 5)
    })
})