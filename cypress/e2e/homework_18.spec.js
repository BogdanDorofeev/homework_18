describe("Home Work 18", () => {
  const userAndPass = `${Cypress.env("siteAuthUserName")}:${Cypress.env(
    "siteAuthPassword"
  )}`;

  it("Edit Avatar test", () => {
    cy.visit(`https://${userAndPass}@qauto.forstudy.space/`);
    cy.request("POST", "https://qauto.forstudy.space/api/auth/signin", {
      email: Cypress.env("user"),
      password: Cypress.env("password"),
      remember: false,
    });
    cy.visit(`https://${userAndPass}@qauto.forstudy.space/panel/profile`);
    cy.contains("button", "Edit profile").click();
    cy.get("input#editProfilePhoto").selectFile("cypress/fixtures/logo.png");
    cy.contains("Save").click();
  });
});
