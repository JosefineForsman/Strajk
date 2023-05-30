describe('confirm page', () => {
    beforeEach('passes', () => {
      cy.visit('http://localhost:5174/#')
      cy.get('.input__field.booking-info__date').type('2023-06-25').should('have.value', '2023-06-25');
      cy.get('[name="time"]').type('20.00').should('have.value', '20.00');
      cy.get('.input__field.booking-info__who').type('2').should('have.value', '2');
      cy.get('.input__field.booking-info__lanes').type('1').should('have.value', '1');
      cy.get('.shoes__button').click().click()
      cy.get('.shoes__form .shoes__input').eq(0).type('30').should('have.value', '30');
      cy.get('.shoes__form .shoes__input').eq(1).type('40').should('have.value', '40');
      cy.get('.booking__button').click();
      cy.wait(1000);
      cy.location('pathname').should('include', '/confirmation')
    })

    it('should display the booking information', () =>{
        cy.get('.top > h1').should('have.text', 'See you soon!')
        cy.get('.confirmation').should('be.visible');
    })

    it('should display and add up the total value for person and lanes', ()=>{
        cy.get('.confirmation__price p').should('have.text', 'Total:340 sek')
    })

    it('all inputs should be disabled when being confirmed', ()=>{
        cy.get('.input__field').should('be.disabled');
    })

    it('booking number should be greater than 9 signs', () =>{
        cy.get('.input__field').eq(3).invoke('val').should('have.length.greaterThan', 9)
    })

      // Error handling

    it('should reset booking information', () =>{
        cy.get('.confirmation__button').click();
        cy.location('pathname').should('include', '/confirmation')
        cy.get('.confirmation__no-booking').should('have.text', 'Inga bokning gjord!')
    })
})