describe("iteration 3 USERFLOWS", () => {
  beforeEach(() => {
    cy.intercept("GET", "http://localhost:3001/api/v1/urls", {
      fixture: "sampleData.json",
    }).as("urls");
    cy.visit("http://localhost:3000/");
  });
  it("Should visit the page, so they can view the page title and the existing shortened URLs", () => {
    cy.get("h3").contains("Awesome photo");
    cy.get("a").contains("http://localhost:3001/useshorturl/1");
    cy.get("p").contains(
      "https://images.unsplash.com/photo-1531898418865-480b7090470f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80"
    );
  });
  it("Should visit the page, so they can view the Form with the proper inputs", () => {
    cy.get("form").should("exist");
    cy.get('[placeholder="Title..."]').should("exist");
    cy.get('[placeholder="URL to Shorten..."]').should("exist");
    cy.get("button").should("exist");
  });
  it("Should fill out the form, so that the information is reflected in the input fields", () => {
    cy.get('[placeholder="Title..."]').type("Dumpster Fire");
    cy.get('[placeholder="Title..."]').should("have.value", "Dumpster Fire");
    cy.get('[placeholder="URL to Shorten..."]').type(
      "https://media.istockphoto.com/id/1228459328/vector/the-trash-can-is-burning-im-fine.jpg?s=612x612&w=0&k=20&c=zUHE-AIKVQmd3yT7H1lL1X2ILoeC-rbGB_8kwNkFbxY="
    );
    cy.get('[placeholder="URL to Shorten..."]').should(
      "have.value",
      "https://media.istockphoto.com/id/1228459328/vector/the-trash-can-is-burning-im-fine.jpg?s=612x612&w=0&k=20&c=zUHE-AIKVQmd3yT7H1lL1X2ILoeC-rbGB_8kwNkFbxY="
    );
  });
});
