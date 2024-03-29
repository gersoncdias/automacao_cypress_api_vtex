const user = Cypress.env('user_name')
const password = Cypress.env('user_password')

describe('Deve validar o Header Lagado API', () => {
  beforeEach(() => {
    cy.session('authenticatedSession', () => {
      cy.generateAndValidateToken(user, password).then((authToken) => {
        cy.setCookie('VtexIdclientAutCookie_lojavivara', authToken)
        cy.visit(Cypress.env('url'))
      })
    })
  })
  it('Em Vivara', () => {
    cy.visit(Cypress.env('url'), {})
    cy.header_vivara()
    cy.topbar_vivara()
  })
  it('Em Quiz', () => {
    cy.visit(`${Cypress.env('url')}${Cypress.env('quiz')}`)
    cy.header_vivara()
    cy.topbar_vivara()
  })
  it('Em Relogio', () => {
    cy.visit(`${Cypress.env('url')}${Cypress.env('relogio')}`)
    cy.header_vivara()
    cy.topbar_vivara()
  })
})
describe('Deve validar o Header Vivara não Lagado', () => {
  beforeEach(() => {
    cy.visit(Cypress.env('url'), {})
  })
  it('Em Vivara', () => {
    cy.header_vivara()
    cy.topbar_vivara()
  })
  it('Em Quiz', () => {
    cy.visit(`${Cypress.env('url')}${Cypress.env('quiz')}`)
    cy.header_vivara()
    cy.topbar_vivara()
  })
  it('Em Relogio', () => {
    cy.visit(`${Cypress.env('url')}${Cypress.env('relogio')}`)
    cy.header_vivara()
    cy.topbar_vivara()
  })
})

describe('Deve validar o Header Vivara Lagado Front', () => {
  beforeEach(() => {
    cy.visit(Cypress.env('url') + '/login')
    cy.login(user, password)
    cy.visit(Cypress.env('url'), {})
  })
  afterEach(() => {
    cy.check_user()
  })
  it('Em Vivara', () => {
    cy.header_vivara()
    cy.topbar_vivara()
  })
  it('Em Quiz', () => {
    cy.visit(`${Cypress.env('url')}${Cypress.env('quiz')}`)
    cy.header_vivara()
    cy.topbar_vivara()
  })
  it('Em Relogio', () => {
    cy.visit(`${Cypress.env('url')}${Cypress.env('relogio')}`)
    cy.header_vivara()
    cy.topbar_vivara()
  })
})
