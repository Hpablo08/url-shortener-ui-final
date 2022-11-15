describe('iteration 5, Error Handling Flows', () => {
 it("Should show error when all urls cannot be retrieved", () => {
    cy.intercept("GET", "http://localhost:3001/api/v1/urls", {
      forceNetworkError: true,
    }).as("error");
    cy.visit("http://localhost:3000/");
    cy.get("p").contains("No urls yet! Find some to shorten!");
})

})