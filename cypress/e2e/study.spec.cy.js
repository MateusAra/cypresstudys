/// <reference types="cypress" />

import { Login } from "../Utils/utilities.cy.js"
import { sigaa } from "../Utils/users.json"
const login = new Login(sigaa.user.login, sigaa.user.password)
describe('Atividades sigaa', () => {
  it('Estudos', () => {
    cy.visit('https://www.youtube.com')
    cy.get('[name=search_query]').type('se hoje eu cair{enter}')
    cy.wait(5000)
    cy.get('#video-title > yt-formatted-string"')
  })
})