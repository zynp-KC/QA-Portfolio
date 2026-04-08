class LoginPage {
    constructor(page) {
        this.page = page;
        this.usernameInput = page.locator('input[name="username"]');
        this.passwordInput = page.locator('input[name="password"]');
        this.loginButton = page.locator('button[type="submit"]');
        this.errorMessage = page.locator('p.oxd-alert-content-text');
        this.usernameError = page.locator('.oxd-input-group').nth(0).locator('.oxd-input-field-error-message');
        this.passwordError = page.locator('.oxd-input-group').nth(1).locator('.oxd-input-field-error-message');
    }

    async navigate() {
        await this.page.goto('/web/index.php/auth/login');
    }

    async login(username, password) {
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }

    async getUsernameError() {
        return this.usernameError.textContent();
    }

    async getPasswordError() {
        return this.passwordError.textContent();
    }

    async getErrorMessage() {
        return this.errorMessage.textContent();
    }
}

export default LoginPage;