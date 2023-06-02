class LoginActions {

    loginElements = {
        signInDiv: () => cy.get('div').contains('Sign in').click(),
        signInTag: () => cy.get('a').contains('Sign in').click(),
        loginForm: () => cy.get('#login-form').scrollIntoView(),
        userEmail: (email) => cy.get('#UserLogin_username').type(email),
        userPassword: (password) => cy.get('#UserLogin_password').type(password),
        signInButton: () => cy.get('button').contains('Sign in').click(),
        profileTab: () => cy.get('a').contains('Profile').click(),
        username: (username) => cy.get('.user-info__profile-name').eq(1).scrollIntoView().should('have.text', username),
        userId: () => cy.get('div').contains('Casino ID:').scrollIntoView().should('be.visible')
    }

    clickOnSignInDiv(){
        this.loginElements.signInDiv();
    }

    clickOnSignInTag(){
        this.loginElements.signInTag();
    }

    typeValidEmail(email){
        this.loginElements.loginForm();
        this.loginElements.userEmail(email);
    }

    typeValidPassword(password){
        this.loginElements.userPassword(password);
    }

    clickOnSignInButton(){
        this.loginElements.signInButton();
    }

    clickOnProfileTab(){
        this.loginElements.profileTab();
    }

    verifyUserName(username){
        this.loginElements.username(username);
    }

    verifyUserId(){
        this.loginElements.userId();
    }
}

module.exports = new LoginActions();