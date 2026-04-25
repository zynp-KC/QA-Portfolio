class HomePage {
    constructor(page) {
        this.page = page;
        this.loginButton = page.locator('#login2');
        this.signupButton = page.locator('#signin2');
        this.logoutButton = page.locator('#logout2');
        this.cartButton = page.locator('#cartur');
        this.usernameDisplay = page.locator('#nameofuser');
        this.phonesCategory = page.locator('a:has-text("Phones")');
        this.laptopsCategory = page.locator('a:has-text("Laptops")');
        this.monitorsCategory = page.locator('a:has-text("Monitors")');
        this.nextButton = page.locator('#next2');
        this.prevButton = page.locator('#prev2');
    }

async navigate() {
    await this.page.goto('/');
}

async clickLogin() {
        await this.loginButton.click();
    }

    async clickSignup() {
        await this.signupButton.click();
    }

    async clickLogout() {
        await this.logoutButton.click();
    }

    async clickCart() {
        await this.cartButton.click();
    }

    async filterByPhones() {
        await this.phonesCategory.click();
    }

    async filterByLaptops() {
        await this.laptopsCategory.click();
    }

    async filterByMonitors() {
        await this.monitorsCategory.click();
    }
}

export default HomePage;