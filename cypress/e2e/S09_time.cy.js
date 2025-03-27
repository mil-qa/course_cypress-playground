describe('Course: Cypress Playground - S09: Controlando o tempo com Cypress', () => {
    beforeEach(() => {
        const now = new Date(Date.UTC(2077, 10, 11))
        cy.clock(now)
        cy.visit('https://cypress-playground.s3.eu-central-1.amazonaws.com/index.html')
    })
    it('Verificar a hora congelada', () => {
        cy.contains('p#date-section-paragraph', '2077-11-11')
            .should('be.visible')
    })
})