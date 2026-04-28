class SignupModal {
    constructor(page) {
        this.page = page;
        this.usernameInput = page.locator('#sign-username');
        this.passwordInput = page.locator('#sign-password');
        this.signupButton = page.locator('button:has-text("Sign up")');
    }

    async signup(username, password) {
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        // force: true — WebKit rendering uyumsuzluğu nedeniyle gerekli
        await this.signupButton.click({ force: true });
    }
}

export default SignupModal;