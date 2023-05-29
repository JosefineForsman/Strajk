describe('Navigation', () => {
    beforeEach('passes', () => {
      cy.visit('http://localhost:5174/#')
      cy.get('.navigation .navigation__icon').click();
    })
    it('should be able to click on the nav-icon', () =>{
        cy.get('.navigation__link').should('have.length', 2);
    })

    //Lägg in för annan navigering? p-tag?

    it('should be able to navigate correctly on the website', ()=>{
        cy.get('.navigation__link').eq(1).click();
        cy.location('pathname').should('include', '/confirmation')
        cy.get('.top > h1').should('have.text', 'See you soon!');

    })

    // Så att bokningen töms.
})