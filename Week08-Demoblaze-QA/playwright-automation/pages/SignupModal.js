class SignupModal {
    constructor(page) {
        this.page = page;
        this.modal = page.locator('#signInModal');
        this.usernameInput = page.locator('#sign-username');
        this.passwordInput = page.locator('#sign-password');
        this.signupButton = page.locator('#signInModal button:has-text("Sign up")');
    }

    async signup(username, password) {
        await this.modal.waitFor({ state: 'visible' });
        await this.usernameInput.waitFor({ state: 'visible' });
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.signupButton.click();
    }
}

export default SignupModal;