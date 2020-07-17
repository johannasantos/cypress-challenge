

context('Confirm the cookies policies and go to Login page', () => {
    beforeEach(() => {
      cy.visit('https://www.teachaway.com//teacher/login');
      cy.get('#hs-eu-confirmation-button').click();
    })

    describe('Log In test cases', () => {
        it("Verify that it is possible to login with a correct username and password", () => {
          cy.get('#edit-name').type(mail);
          cy.get('#edit-pass').type(password);
          cy.get('#edit-submit').click();
        })

        it("Verify that an error message is displayed after entering an invalid or non-existent username", () => {
            cy.get('#edit-name').type('user@user');
            cy.get('#edit-pass').type('1234Password');
            cy.get('#edit-submit').click();
            cy.get('.messages').contains('Sorry, unrecognized e-mail or password.');
        })

        it("Verify that an error message is displayed after entering an invalid password", () => {
            cy.get('#edit-name').type('john@mailinator.com');
            cy.get('#edit-pass').type('123');
            cy.get('#edit-submit').click();
            cy.get('.messages').contains('Sorry, unrecognized e-mail or password.');
        })

        it("Verify that an error message is displayed after not filling inputs with credentials", () => {
            cy.get('#edit-name').click();
            cy.get('#edit-pass').click();
            cy.get('#edit-submit').click();
            cy.contains('E-mail field is required.');
            cy.contains('Password field is required.');

        })

        it("Verify that you click on 'Forgot your password?' redirect to the correct page to reset the current password", () => {
            cy.get('.forgot-link').click()
            cy.contains('You can reset your password here');
        })

        it("Verify that the 'Sign Up' button redirects to the correct page", () => {
            cy.get('.text-center > .link').click()
            cy.contains('Create Account');
        })
    })

})

