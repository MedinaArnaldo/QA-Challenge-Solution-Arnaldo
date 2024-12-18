/// <reference types="cypress" />

import { RedirectionsSelectors } from "../support/selectors/challenge-redirections-selectors";

export class Redirections {
    
    static visitURL() {
        cy.visit('http://localhost:3000/');
    }

    static clickLogin() {
        cy.get(RedirectionsSelectors.loginOption).click();
        cy.url().should('contain', '/login')
    }

    static clickDashboard() {
        cy.get(RedirectionsSelectors.dashboardOption).click();
        cy.url().should('contain', '/dashboard')
    }

    static clickProducts() {
        cy.get(RedirectionsSelectors.productsOption).click();
        cy.url().should('contain', '/products')
    }

    static clickOrders() {
        cy.get(RedirectionsSelectors.ordersOption).click();
        cy.url().should('contain', '/orders')
    }

    static validatePageTitle(title) {
        cy.get(RedirectionsSelectors.pagesTitle).should('contain', title);
    } 

    static validateMessage(text) {
        cy.get(RedirectionsSelectors.validationMessage).should('contain', text);
    }
}