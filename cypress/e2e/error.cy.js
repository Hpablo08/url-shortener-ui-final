describe("iteration 5, Error Handling Flows", () => {
  it("Should show error when all urls cannot be retrieved", () => {
    cy.intercept("GET", "http://localhost:3001/api/v1/urls", {
      forceNetworkError: true,
    }).as("error");
    cy.visit("http://localhost:3000/");
    cy.get("p").contains("No urls yet! Find some to shorten!");
  });
  it("should tell you when input fields are not filled out", () => {
    cy.get('[placeholder="Title..."]').type("not good");
    cy.get("button").click();
    cy.get(".error-message").contains(
      "Please fill out both input fields before submitting"
    );
  });
});
