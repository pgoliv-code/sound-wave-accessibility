describe('discover content', () => {
  it('the h1 should contain the correct text', () => {
    cy.visit('/Join')
    cy.get('h1').contains('Join the fun')
  })
  it('should render the form', () => {
    cy.visit('/Join')
    cy.get('Form').should('be.visible')
  })
})