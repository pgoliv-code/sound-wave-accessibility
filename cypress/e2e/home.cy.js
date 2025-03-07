describe('home page navigation', () => {
  it('enters the home page', () => {
    cy.visit('/')
  })
  it ('enters the Discover page', () => {
    cy.visit('/Discover')
  })
  it ('enters the Join page', () => {
    cy.visit('/Join')
  })
})

describe('home page content', () => {
  
  it('the h1 contains the correct text', () => {
    cy.visit('/')
    cy.get('h1').contains('Feel the Music')
  })
  it('the p contains the correct text', () => {
    cy.visit('/')
    cy.get('p').contains('Stream over 20 thousand songs with one click')
  })
 
})