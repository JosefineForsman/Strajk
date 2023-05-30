describe('Navigation', () => {
    beforeEach('passes', () => {
      cy.visit('http://localhost:5174/#')
      cy.get('.navigation .navigation__icon').click();
    })

    it('should display nav icon', () =>{
        cy.get('.navigation__icon').should('exist');
    })

    it('should be able to click on the nav-icon', () =>{
        cy.get('.navigation__link').should('have.length', 2);
    })

    it('should be able to navigate correctly on the website', ()=>{
        cy.get('.navigation__link').last().click();
        cy.location('pathname').should('include', '/confirmation')
        cy.get('.top > h1').should('have.text', 'See you soon!');
        cy.get('.navigation__icon').click();
        cy.get('.navigation__link').first().click();
        cy.get('.top > h1').should('have.text', 'Booking');
    })
})