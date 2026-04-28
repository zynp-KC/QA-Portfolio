class LoginModal {
    constructor(page) {
        this.page = page;
        this.usernameInput = page.locator('#loginusername');
        this.passwordInput = page.locator('#loginpassword');
        this.loginButton = page.locator('button:has-text("Log in")');
    }

    async login(username, password) {
        await this.usernameInput.waitFor({ state: 'visible' });
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.loginButton.click({ force: true });
    }
}

export default LoginModal;