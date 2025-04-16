describe("Course: Cypress Playground - S07: Protegendo dados sensíveis com Cypress", () => {
  beforeEach(() =>
    cy.visit(
      "https://cypress-playground.s3.eu-central-1.amazonaws.com/index.html"
    )
  );
  it("Digitar dados confidenciais", () => {
    const pwd = Cypress.env("PASSWORD");
    console.log(pwd);
    cy.log(pwd);
    cy.get("#password").type(pwd, { log: false });
    cy.get("#show-password-checkbox").check();
    cy.get('input[type="password"]#password').should("not.exist");
    cy.get('input[type="text"]#password')
      .should("be.visible")
      .and("have.value", pwd);
    cy.get("#show-password-checkbox").uncheck();
    cy.get('input[type="text"]#password').should("not.exist");
    cy.get('input[type="password"]#password').should("be.visible");
  });
});
