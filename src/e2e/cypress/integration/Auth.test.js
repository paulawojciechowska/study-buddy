describe('Study buddy app', () => {
  it('Renders unauthenticated app', () => {
    cy.visit('/');
    cy.findByText(/login/i).should('exist');
    cy.findByText(/login/i).click().type('alicja@teacher.com');
    cy.findByText(/password/i)
      .click()
      .type('password123');
    cy.findByText(/sign in/i).click();
    cy.findByText(/logged as/i).should('exist');
  });
});
