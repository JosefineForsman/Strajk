describe('booking form', () => {
    beforeEach('passes', () => {
      cy.visit('http://localhost:5174/#')
    })
    it('should have 4 input fields visible in booking form', ()=>{
        cy.get('.input__field').should('have.length', 4);
    })

    it('should have an input the user can write a date',() =>{
        cy.get('.booking-info__date').type('2023-06-25').should('have.value', '2023-06-25')
    })

    it('should have an input the user can write in time', () =>{
        cy.get('[name="time"]').type('20.00').should('have.value', '20.00');
    })

    it('should have an input the user can write in quantity of players', () =>{
        cy.get('.booking-info__who').type('4').should('have.value', '4');
    })

    it('should have an input user can write in quantity of lanes', ()=>{
        cy.get('.booking-info__lanes').type('1').should('have.value', '1');
    })

    it('should be able to make an complete order', ()=>{
        cy.get('.booking-info__date').type('2023-06-25').should('have.value', '2023-06-25');
        cy.get('[name="time"]').type('20.00').should('have.value', '20.00');
        cy.get('.booking-info__who').type('4').should('have.value', '4');
        cy.get('.booking-info__lanes').type('1').should('have.value', '1');
        cy.get('.shoes__button').click().click().click().click();
        cy.get('.shoes__input').eq(0).type('39').should('have.value', '39');
        cy.get('.shoes__input').eq(1).type('35').should('have.value', '35');
        cy.get('.shoes__input').eq(2).type('30').should('have.value', '30');
        cy.get('.shoes__input').eq(3).type('40').should('have.value', '40');
        cy.get('.booking__button').click();

        cy.wait(1000);
        cy.location('pathname').should('include', '/confirmation')

        cy.get('.input__field').should('be.disabled');
        // kan man göra såhär?
        cy.get('.input__field').eq(3).invoke('val').should('have.length', 11)
        cy.get('.confirmation__button').click();
    
        cy.get('.top__title').should('have.text', 'See you soon!');

    })

    //Felhantering
    it('should display an error message if trying to book an uncompleted booking', () =>{
        cy.get('.booking__button').click();
        cy.get('.error-message__text').should('have.text', 'Fill out all the fields and make sure that people and shoes is the same number.')
    })

    it('time input are allowing alphabetic signs ', () =>{
        cy.get('[name="time"]').type('Här är en bugg').should('have.value', 'Här är en bugg');
    })
    
    // is able to write in alphabetic symbols? 
    // make a test to make it visible.


})