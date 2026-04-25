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
        await this.signupButton.click();
    }
}

export default SignupModal;