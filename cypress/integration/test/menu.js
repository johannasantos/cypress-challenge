context('Enter to Teach Away home page and confirm the cookies policies', () => {
  beforeEach(() => {
    cy.visit('https://www.teachaway.com/');
    cy.get('#hs-eu-confirmation-button').click();
  })

  describe('Navigate Mega Menu Teach Away', () => {
    it("should go to 'Jobs' category and view a Featured Job in Destinations", () => {
      cy.get('[title="Jobs"]').click();
      cy.contains('Destinations').click();
      cy.contains('View').click();
    })
  })
})
