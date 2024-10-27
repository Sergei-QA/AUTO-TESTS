describe('Проверка авторизации', function () {

    it('покупка нового аватара', function () {
         cy.visit('https://pokemonbattle.ru/'); //зашли на сайт
         cy.get(':nth-child(1) > .auth__input').type('USER_LOGIN');
         cy.get('#password').type('USER_PASSWORD');
         cy.get('.auth__button').click();
         cy.get('.header__container > .header__id').click();
         cy.get('[href="/shop"]').click();
         cy.get('.available > button').first().click({ force: true });
         cy.get('.credit').type('4111 1111 1111 1111');
         cy.get('.k_input_ccv').type('125'); 
         cy.get('.k_input_date').type('10/25');
         cy.get('.k_input_name').type('IVANOV IVAN');
         cy.get('.pay-btn').click();
         cy.get('#cardnumber').type('56456');
         cy.get('.payment__submit-button').click();
         cy.contains('Покупка прошла успешно').should('be.visible');
        })
    })