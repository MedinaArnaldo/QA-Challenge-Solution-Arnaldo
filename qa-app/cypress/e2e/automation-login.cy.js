/// <reference types="cypress" />

import { LoginPage } from "../pages/challenge-login-page";
import { Redirections } from "../pages/challenge-redirection-page";

describe('Login Validations', () => {

    context('Login successful', () => {

        it('Validate that Login is successful with valid credentials', function() {
            Redirections.visitURL();
            Redirections.clickLogin();
            LoginPage.enterUsername('testuser');
            LoginPage.enterPassword('password');
            LoginPage.clickLoginButton();
            Redirections.validateMessage('Logged in with token: sampletoken');
        })
    })

    context('Login failed', () => {

        it('Validate credentials with an incorrect Username and a correct Password', function() {
            Redirections.visitURL();
            Redirections.clickLogin();
            LoginPage.enterUsername('badtestuser');
            LoginPage.enterPassword('password');
            LoginPage.clickLoginButton();
            Redirections.validateMessage('Login failed');
        })

        it('Validate credentials with a correct Username and an incorrect Password', function() {
            Redirections.visitURL();
            Redirections.clickLogin();
            LoginPage.enterUsername('testuser');
            LoginPage.enterPassword('badpassword');
            LoginPage.clickLoginButton();
            Redirections.validateMessage('Login failed');
        })

        it('Validate credentials with an incorrect Username and an incorrect Password', function() {
            Redirections.visitURL();
            Redirections.clickLogin();
            LoginPage.enterUsername('badtestuser');
            LoginPage.enterPassword('badpassword');
            LoginPage.clickLoginButton();
            Redirections.validateMessage('Login failed');
        })

        it('Validate credentials with a correct Username and an empty Password', function() {
            Redirections.visitURL();
            Redirections.clickLogin();
            LoginPage.enterUsername('testuser');
            LoginPage.enterPassword(' ');
            LoginPage.clickLoginButton();
            Redirections.validateMessage('Login failed');
        })

        it('Validate credentials with an empty Username and a correct Password', function() {
            Redirections.visitURL();
            Redirections.clickLogin();
            LoginPage.enterUsername(' ');
            LoginPage.enterPassword('password');
            LoginPage.clickLoginButton();
            Redirections.validateMessage('Login failed');
        })

        it('Validate credentials with an empty Username and an empty Password', function() {
            Redirections.visitURL();
            Redirections.clickLogin();
            LoginPage.enterUsername(' ');
            LoginPage.enterPassword(' ');
            LoginPage.clickLoginButton();
            Redirections.validateMessage('Login failed');
        })

        it('Validate credentials with an empty space in the Username and a correct Password', function() {
            Redirections.visitURL();
            Redirections.clickLogin();
            LoginPage.enterUsername('testuser ');
            LoginPage.enterPassword('password');
            LoginPage.clickLoginButton();
            Redirections.validateMessage('Login failed');
        })

        it('Validate credentials with a correct Username and an empty space in the Password', function() {
            Redirections.visitURL();
            Redirections.clickLogin();
            LoginPage.enterUsername('testuser');
            LoginPage.enterPassword('password ');
            LoginPage.clickLoginButton();
            Redirections.validateMessage('Login failed');
        })

        it('Validate credentials with an empty space in the Username and an empty space in the Password', function() {
            Redirections.visitURL();
            Redirections.clickLogin();
            LoginPage.enterUsername('testuser ');
            LoginPage.enterPassword('password ');
            LoginPage.clickLoginButton();
            Redirections.validateMessage('Login failed');
        })

        it('Validate credentials with uppercase letters in the Username and a correct Password', function() {
            Redirections.visitURL();
            Redirections.clickLogin();
            LoginPage.enterUsername('TESTUSER');
            LoginPage.enterPassword('password');
            LoginPage.clickLoginButton();
            Redirections.validateMessage('Login failed');
        })

        it('Validate credentials with a correct Username and with uppercase letters in the Password', function() {
            Redirections.visitURL();
            Redirections.clickLogin();
            LoginPage.enterUsername('testuser');
            LoginPage.enterPassword('PASSWORD');
            LoginPage.clickLoginButton();
            Redirections.validateMessage('Login failed');
        })

        it('Validate credentials with uppercase letters in the Username and with uppercase letters in the Password', function() {
            Redirections.visitURL();
            Redirections.clickLogin();
            LoginPage.enterUsername('TESTUSER');
            LoginPage.enterPassword('PASSWORD');
            LoginPage.clickLoginButton();
            Redirections.validateMessage('Login failed');
        })

        it('Validate credentials with an incorrect Username and an empty Password', function() {
            Redirections.visitURL();
            Redirections.clickLogin();
            LoginPage.enterUsername('badtestuser');
            LoginPage.enterPassword(' ');
            LoginPage.clickLoginButton();
            Redirections.validateMessage('Login failed');
        })

        it('Validate credentials with an empty Username and an incorrect Password', function() {
            Redirections.visitURL();
            Redirections.clickLogin();
            LoginPage.enterUsername(' ');
            LoginPage.enterPassword('badpassword');
            LoginPage.clickLoginButton();
            Redirections.validateMessage('Login failed');
        })

        it('Validate credentials with special character letters in the Username and a correct Password', function() {
            Redirections.visitURL();
            Redirections.clickLogin();
            LoginPage.enterUsername('%testuser*');
            LoginPage.enterPassword('password');
            LoginPage.clickLoginButton();
            Redirections.validateMessage('Login failed');
        })

        it('Validate credentials with a correct Username and with special character letters in the Password', function() {
            Redirections.visitURL();
            Redirections.clickLogin();
            LoginPage.enterUsername('testuser');
            LoginPage.enterPassword('%password%');
            LoginPage.clickLoginButton();
            Redirections.validateMessage('Login failed');
        })

        it('Validate credentials with special character letters in the Username and with special character letters in the Password', function() {
            Redirections.visitURL();
            Redirections.clickLogin();
            LoginPage.enterUsername('%testuser/');
            LoginPage.enterPassword('%password%');
            LoginPage.clickLoginButton();
            Redirections.validateMessage('Login failed');
        })
    })
})