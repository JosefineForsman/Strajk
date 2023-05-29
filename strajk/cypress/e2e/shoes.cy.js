describe('Shoes', () => {
    beforeEach('passes', () => {
      cy.visit('http://localhost:5174/#')

      cy.get('.booking-info__date').type('2023-06-12').should('have.value', '2023-06-12');
      cy.get('[name="time"]').type('18.00').should('have.value', '18.00');
      cy.get('.booking-info__who').type('2').should('have.value', '2');
      cy.get('.booking-info__lanes').type('1').should('have.value', '1');
      
    })

    it('should display remove button', () =>{
        cy.get('.shoes__button').click();
        cy.get('.shoes__button--small').should('be.visible');
    })

    it('should remove the inputfield where enter shoe size when clicking on - button',()=>{

        cy.get('.shoes__button').click().click()
        cy.get('.shoes__form').should('contain', 2);

        cy.get('.shoes__button--small').eq(1).click();
        cy.get('.shoes__form').should('contain', 1);
    })

    // Felhantering

    it('should show a message to the user if the quantity of shoes and the number of players do not match', ()=>{
        cy.get('.shoes__button').click().click().click();

        cy.get('.shoes__input').eq(0).type('39').should('have.value', '39');
        cy.get('.shoes__input').eq(1).type('35').should('have.value', '35');
        cy.get('.shoes__input').eq(2).type('30').should('have.value', '30');

        cy.get('.booking__button').click();
        cy.get('.error-message__text').should('have.text', 'Fill out all the fields and make sure that people and shoes is the same number.')
    })

    it('should display a new inputfield when click on + button', () =>{
        cy.get('.shoes__button').click();
        cy.get('.shoes__input').should('be.visible');
    })

    it('if the shoe sizes input are empty the booking is still confirmed', () =>{
        cy.get('.shoes__button').click().click()
        cy.get('.booking__button').click();

        cy.location('pathname').should('include', '/confirmation')
    })


  })