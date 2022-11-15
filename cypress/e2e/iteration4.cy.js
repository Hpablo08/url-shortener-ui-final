describe("Iteration 4 POSTFLOWS", () => {
  beforeEach(() => {
    cy.intercept("GET", "http://localhost:3001/api/v1/urls", {
      fixture: "sampleData.json",
    }).as("urls");
    cy.intercept("POST", "http://localhost:3001/api/v1/urls", {
      fixture: "postData.json",
    }).as("POSTUrl");
    cy.visit("http://localhost:3000/");
  });
  it("fill out and submit the form and the new shortened URL is rendered", () => {
    cy.get('[placeholder="Title..."]').type("Dumpster Fire");
    cy.get('[placeholder="Title..."]').should("have.value", "Dumpster Fire");
    cy.get('[placeholder="URL to Shorten..."]').type(
      "https://media.istockphoto.com/id/1228459328/vector/the-trash-can-is-burning-im-fine.jpg?s=612x612&w=0&k=20&c=zUHE-AIKVQmd3yT7H1lL1X2ILoeC-rbGB_8kwNkFbxY="
    );
    cy.get('[placeholder="URL to Shorten..."]').should(
      "have.value",
      "https://media.istockphoto.com/id/1228459328/vector/the-trash-can-is-burning-im-fine.jpg?s=612x612&w=0&k=20&c=zUHE-AIKVQmd3yT7H1lL1X2ILoeC-rbGB_8kwNkFbxY="
    );
    cy.get("button").click();
    cy.get("section > :nth-child(2)");
    cy.get(":nth-child(2) > h3").contains("Dumpster Fire");
    cy.get(":nth-child(2) > a").contains("http://localhost:3001/useshorturl/2");
    cy.get(":nth-child(2) > p").contains(
      "https://media.istockphoto.com/id/1228459328/vector/the-trash-can-is-burning-im-fine.jpg?s=612x612&w=0&k=20&c=zUHE-AIKVQmd3yT7H1lL1X2ILoeC-rbGB_8kwNkFbxY="
    );
  });
});
