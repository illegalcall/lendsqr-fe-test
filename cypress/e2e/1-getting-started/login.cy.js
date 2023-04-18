describe("test login", () => {
	beforeEach(() => {
		cy.visit("http://localhost:3000/login")
	})

	it("can visit the login page", () => {
		cy.get(`[data-cy="login-input-form"]`).should("have.length", 1)
	})

	it("can login", () => {
		cy.get(`[data-cy="login-input-form-email"]`)
			.should("have.length", 1)
			.type("admin@lendsqr.com")

		cy.get(`[data-cy="login-input-form-password"]`)
			.should("have.length", 1)
			.type("password1234")

		cy.get(`[data-cy="login-input-form-login-button"]`).click()
		cy.get(`[data-cy="dashboard-container-title"]`).contains("Users")
	})
})
