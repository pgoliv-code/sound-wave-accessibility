describe('join content', () => {
  it('the h1 should contain the correct text', () => {
    cy.visit('/Discover')
    cy.get('h1').contains('Discover new music')
  })
  it('the h1 should contain the correct text', () => {
    cy.visit('/Discover')
    cy.get('h1').contains('By joining you can benefit by listening to the latest albums released.')
  })
  it('should render the image of album covers within a div element', () => {
    cy.visit('/Discover')
    cy.get('div').find('img').should('be.visible')
  })
  it('should render the footer', () => {
    cy.visit('/Discover')
    cy.get('Footer').should('be.visible')
  })
})