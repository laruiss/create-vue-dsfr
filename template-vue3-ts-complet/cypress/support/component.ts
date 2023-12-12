import '@gouvfr/dsfr/dist/dsfr.min.css'
import '@gouvminint/vue-dsfr/styles'

// ***********************************************************
// This example support/component.ts is processed and
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

// Import commands.js using ES2015 syntax:
import './commands'

// Alternatively you can use CommonJS syntax:
// require('./commands')

import { mount } from 'cypress/vue'

// Augment the Cypress namespace to include type definitions for
// your custom command.
// Alternatively, can be defined in cypress/support/component.d.ts
// with a <reference path="./component" /> at the top of your spec.
declare module 'cypress' {
  interface Chainable {
    mount: typeof mount;
  }
}

Cypress.Commands.add('mount', (component, options = {}) => {
  options.global = options.global || {}
  options.global.stubs = options.global.stubs || {}
  options.global.stubs.transition = false

  return mount(component, options)
})

// Example use:
// cy.mount(MyComponent)
