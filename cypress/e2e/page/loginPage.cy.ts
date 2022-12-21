import url, { siteurl } from "@/config/url";

describe('Visit login page', () => {
  it('passes', () => {
    cy.visit(`${siteurl}${url.auth.login}`);
  })
})

describe("test input fields", () => {
  it("passes", () => {
    cy.visit(`${siteurl}${url.auth.login}`);
   cy.get('input[name="email"]').type('example@gmail.com');
   cy.get('input[name="password"]').type("1234");
   cy.get('input[name="remeberMe"]').click();
  });
});