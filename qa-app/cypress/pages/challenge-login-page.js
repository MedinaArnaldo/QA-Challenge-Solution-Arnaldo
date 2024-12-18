/// <reference types="cypress" />

import { LoginSelectors } from "../support/selectors/challenge-login-selectors";

export class LoginPage {

    static enterUsername(username) {
        cy.get(LoginSelectors.usernameField).clear().type(username);
    }

    static enterPassword(password) {
        cy.get(LoginSelectors.passwordField).clear().type(password);
    }

    static clickLoginButton() {
        cy.get(LoginSelectors.loginButton).click();
    }
}