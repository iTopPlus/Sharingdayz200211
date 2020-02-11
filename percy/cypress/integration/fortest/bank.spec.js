describe('summit', () => { 
    it('test krub', ()=> {
        cy.server();
        cy.visit('http://localhost:3000/');
        cy.percySnapshot("before");
        cy.clickSi();
        cy.percySnapshot("after");
    })
});