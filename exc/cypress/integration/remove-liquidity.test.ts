describe('Remove Liquidity', () => {
  it('redirects', () => {
    cy.visit('/remove/0xc778417E063141139Fce010982780140Aa0cD5Ab-0xF9bA5210F91D0474bd1e1DcDAeC4C58E359AaD85')
    cy.url().should(
      'contain',
      '/remove/0xc778417E063141139Fce010982780140Aa0cD5Ab/0xF9bA5210F91D0474bd1e1DcDAeC4C58E359AaD85'
    )
  })

  it('bnb remove', () => {
    cy.visit('/remove/ETH/0x1A10F46a2902078d8a1edB576FdAF8CB9B125d69')
    cy.get('#remove-liquidity-tokena-symbol').should('contain.text', 'BNB')
    cy.get('#remove-liquidity-tokenb-symbol').should('contain.text', 'CAKE')
  })

  it('bnb remove swap order', () => {
    cy.visit('/remove/0x1A10F46a2902078d8a1edB576FdAF8CB9B125d69/ETH')
    cy.get('#remove-liquidity-tokena-symbol').should('contain.text', 'CAKE')
    cy.get('#remove-liquidity-tokenb-symbol').should('contain.text', 'BNB')
  })

  it('loads the two correct tokens', () => {
    cy.visit('/remove/0x1A10F46a2902078d8a1edB576FdAF8CB9B125d69-0xBa9303709c2Ad10b62a598e18e15b1E42921edea')
    cy.get('#remove-liquidity-tokena-symbol').should('contain.text', 'CAKE')
    cy.get('#remove-liquidity-tokenb-symbol').should('contain.text', 'BUSD')
  })

  it('does not crash if CAKE is duplicated', () => {
    cy.visit('/remove/0x1A10F46a2902078d8a1edB576FdAF8CB9B125d69-0x1A10F46a2902078d8a1edB576FdAF8CB9B125d69')
    cy.get('#remove-liquidity-tokena-symbol').should('contain.text', 'CAKE')
    cy.get('#remove-liquidity-tokenb-symbol').should('contain.text', 'CAKE')
  })

  it('token not in storage is loaded', () => {
    cy.visit('/remove/0x7083609fce4d1d8dc0c979aab8c869ea2c873402-0x2170ed0880ac9a755fd29b2688956bd959f933f8')
    cy.get('#remove-liquidity-tokena-symbol').should('contain.text', 'DOT')
    cy.get('#remove-liquidity-tokenb-symbol').should('contain.text', 'ETH')
  })
})
