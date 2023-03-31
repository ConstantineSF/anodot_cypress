describe('Celsius tests', () => {
    const Celsius = 10
  beforeEach(() => {
    cy.visit('/');
    cy.get(':nth-child(1) > input').type(Celsius);
    cy.get('[name="convertFrom"]').select('0');
    
  })  
    
  it('Celsius -> Fahrenheit', function() {
    cy.get(':nth-child(3) > .standardOptionsList').select('1');
    cy.get('#convertBtn').click();
    cy.get('#answer > p').should('have.text', `${Celsius} degree Celsius = 50 degree Fahrenheit`);
  })

  it('Celsius -> Rankine', function() {
    cy.get(':nth-child(3) > .standardOptionsList').select('2');
    cy.get('#convertBtn').click();
    cy.get('#answer > p').should('have.text', `${Celsius} degree Celsius = 509.67 degree Rankine`);
  })

  it('Celsius -> Reaumur', function() {
    cy.get(':nth-child(3) > .standardOptionsList').select('3');
    cy.get('#convertBtn').click();
    cy.get('#answer > p').should('have.text', `${Celsius} degree Celsius = 8 degree Reaumur`);
  })

  it('Celsius -> kelvin', function() {
    cy.get(':nth-child(3) > .standardOptionsList').select('4');
    cy.get('#convertBtn').click();
    cy.get('#answer > p').should('have.text', `${Celsius} degree Celsius = 283.15 kelvin`);
  })

  it('Celsius -> absolute zero', function() {
    cy.get(':nth-child(1) > input').clear().type(-273.16);
    cy.get(':nth-child(3) > .standardOptionsList').select('1');
    cy.get('#convertBtn').click();
    cy.get('#answer > p').should('have.text', `Error: Your input cannot be below absolute zero`);
  })

})

describe('Rankine tests', () => {
    const Rankine = 10
  beforeEach(() => {
    cy.visit('/');
    cy.get(':nth-child(1) > input').type(Rankine);
    cy.get('[name="convertFrom"]').select('2');
  })      

  it('Rankine -> Celsius', function() {
    cy.get(':nth-child(3) > .standardOptionsList').select('0');
    cy.get('#convertBtn').click();
    cy.get('#answer > p').should('have.text', `${Rankine} degree Rankine = -267.5944444 degree Celsius`);
  })

  it('Rankine -> Fahrenheit', function() {
    cy.get(':nth-child(3) > .standardOptionsList').select('1');
    cy.get('#convertBtn').click();
    cy.get('#answer > p').should('have.text', `${Rankine} degree Rankine = -449.67 degree Fahrenheit`);
  })

  it('Rankine -> Reaumur', function() { 
    cy.get(':nth-child(3) > .standardOptionsList').select('3');
    cy.get('#convertBtn').click();
    cy.get('#answer > p').should('have.text', `${Rankine} degree Rankine = -214.0755556 degree Reaumur`);
  })

  it('Rankine -> kelvin', function() { 
    cy.get(':nth-child(3) > .standardOptionsList').select('4');
    cy.get('#convertBtn').click();
    cy.get('#answer > p').should('have.text', `${Rankine} degree Rankine = 5.5555556 kelvin`);
  })

  it('Rankine absolute zero', function() { 
    cy.get(':nth-child(1) > input').clear().type(-0.1);
    cy.get(':nth-child(3) > .standardOptionsList').select('1');
    cy.get('#convertBtn').click();
    cy.get('#answer > p').should('have.text', `Error: Your input cannot be below absolute zero`);
  })
    

})