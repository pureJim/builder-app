/// <reference types="cypress" />

describe('Home Page Test', () => {
  beforeEach(() => {
    // 登陆操作
    cy.visit('/');
    cy.wait(5000);
    cy.origin('https://pure-fda-staging.authing.cn', () => {
      cy.get('#passworLogin_account').type('jim@cn.purefda.com');
      cy.get('#passworLogin_password').type('123123');
      cy.get('.authing-ant-checkbox-input').click();
      cy.get('button').contains('登 录').click();
      cy.get('button').contains('跳过').should('be.visible').click();
    });
  });

  it('包含某些元素', () => {
    // contains https://docs.cypress.io/api/commands/contains
    cy.contains('dashboard');
    // cy.get('.test');
  });

  // it('test-id 的 button 点击后 input里有想要的东西', () => {
  //   cy.get('[data-test-id="btn"]').click();
  //   cy.get('.action-email').should('have.value', 'jim.qu@pureglobal.cn');
  // });
});
