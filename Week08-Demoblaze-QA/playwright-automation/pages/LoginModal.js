class LoginModal {
    constructor(page) {
        this.page = page;
        this.modal = page.locator('#logInModal');
        this.usernameInput = page.locator('#loginusername');
        this.passwordInput = page.locator('#loginpassword');
        
        this.loginButton = page.locator('#logInModal button:has-text("Log in")');
    }

    async login(username, password) {
        await this.modal.waitFor({ state: 'visible' });
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }

    async loginExpectingSuccess(username, password) {
        await this.login(username, password);
        await this.modal.waitFor({ state: 'hidden', timeout: 15000 });
    }
}

export default LoginModal;