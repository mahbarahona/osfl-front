// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// When a command from ./commands is ready to use, import with `import './commands'` syntax
// import './commands';
declare namespace Cypress {
    interface Chainable<Subject = any> {
        /**
         * Custom command to ... add your description here
         * @example cy.clickOnMyJourneyInCandidateCabinet()
         */
         byTestId<E extends Node = HTMLElement>(
            id: string,
            options?: Partial<
              Cypress.Loggable & Cypress.Timeoutable & Cypress.Withinable & Cypress.Shadow
            >,
          ): Cypress.Chainable<JQuery<E>>;
    }
}