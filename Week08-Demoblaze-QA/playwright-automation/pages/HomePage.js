import { expect } from '@playwright/test';

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
        this.firstProduct = page.locator('.card-title a').first();
        this.addToCartButton = page.locator('a:has-text("Add to cart")');
        this.productCards = page.locator('.card');
        this.productTitles = page.locator('.card-title');
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

    async addFirstProductToCart() {
        await this.firstProduct.click();
        await expect(this.addToCartButton).toBeVisible();
        const dialogPromise = this.page.waitForEvent('dialog');
        await this.addToCartButton.click();
        await dialogPromise.then(dialog => dialog.accept());
    }
}

export default HomePage;