/// <reference types="cypress" />

import { LoginPage } from "../pages/challenge-login-page";
import { Redirections } from "../pages/challenge-redirection-page";

describe('Redirections and Titles Validations', () => {

    it('Visit Login page and check title validation', function() {
        Redirections.visitURL();
        Redirections.clickLogin();
        Redirections.validatePageTitle('Login');
    })

    it('Visit Dashboard page and check title validation', function() {
        Redirections.visitURL();
        Redirections.clickDashboard();
        Redirections.validatePageTitle('Dashboard');
        Redirections.validateMessage('Welcome to the user dashboard!');
    })

    it('Visit Products page and check title validation', function() {
        Redirections.visitURL();
        Redirections.clickProducts();
        Redirections.validatePageTitle('Product List');
    })

    it('Visit Orders page and check title validation', function() {
        Redirections.visitURL();
        Redirections.clickOrders();
        Redirections.validatePageTitle('Order List');
    })
    
})