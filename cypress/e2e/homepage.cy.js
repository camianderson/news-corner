describe('homepage flow', () => {
  it('should visit the app', () => {
    cy.visit('http://localhost:3000/')
  })
  it('should render the title of the page', () => {
    cy.contains('h1', 'News Corner')
  })
  it('should render the topics dropdown', () => {
    cy.get('.home-topics-label').should('be.visible')
    cy.get('.home-dropdown').should('be.visible')
  })
  it('should render US news', () => {
    cy.get('.news').should('be.visible')
    cy.get('.news_section').should('have.length', 25)
  })
  it('should render image and news title', () => {
    cy.get('.news_section').eq(0).should('be.visible')
    cy.get('.news_section-img').eq(0).should('be.visible')
    cy.get('h2').eq(0).should('be.visible')
    cy.contains('h2', 'U.S. Investigates Racial Bias Claims in Kansas City Police Employment')
  })
  it('should click a different topic in the dropdown', () => {
    cy.get('.home-dropdown').select('Arts')
  })
  it('should render news related to the new topic in the dropdown', () => {
    cy.get('.home-dropdown').select('Arts')
    cy.get('.news_section-img').eq(0).should('be.visible')
    cy.get('h2').eq(0).should('be.visible')
    cy.contains('h2', 'A Finnish Scholar Wants to Change How We See American History')
  })
  it('should be able to click a news option and be redirected to the news description', () => {
    cy.get('.news_section').eq(0).click()
    cy.url().should("eq", "http://localhost:3000/article/A%20Finnish%20Scholar%20Wants%20to%20Change%20How%20We%20See%20American%20History");
  })
  
})