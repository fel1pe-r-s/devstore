describe("search products", () => {
  it("should be able to search for products", () => {
    cy.searchByQuery("moletom");

    cy.location("pathname").should("include", "/search");
    cy.location("search").should("include", "q=moletom");

    cy.get('a[href^="/product"]').should("exist");
  });

  it("should not be able to search page without a search query", () => {
    // essa é uma configuração especifica por conta do next lidar com o redirect como uma exeção/error
    cy.on("uncaught:exception", () => {
      return false;
    });

    cy.visit("/search");

    cy.location("pathname").should("equal", "/");
  });
});
