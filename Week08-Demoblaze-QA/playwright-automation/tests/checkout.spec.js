import { test, expect } from '@playwright/test';
import HomePage from '../pages/HomePage.js';
import LoginModal from '../pages/LoginModal.js';
import CartPage from '../pages/CartPage.js';
import CheckoutModal from '../pages/CheckoutModal.js';
import users from '../fixtures/users.json' assert { type: 'json' };

test.describe('Checkout', () => {
    let homePage;
    let loginModal;
    let cartPage;
    let checkoutModal;

    test.beforeEach(async ({ page }) => {
        homePage = new HomePage(page);
        loginModal = new LoginModal(page);
        cartPage = new CartPage(page);
        checkoutModal = new CheckoutModal(page);
        await homePage.navigate();
        await homePage.clickLogin();
        await loginModal.login(users.validUser.username, users.validUser.password);
        await page.waitForTimeout(2000);
        await page.keyboard.press('Escape');
        await page.waitForTimeout(1000);
        await page.locator('.card-title a').first().click();
        await page.waitForTimeout(1000);
        await page.locator('a:has-text("Add to cart")').click();
        await page.waitForTimeout(2000);
        await homePage.clickCart();
        await page.waitForTimeout(2000);
    });

    test('TC-001 Successful order placement', async ({ page }) => {
        await cartPage.placeOrder();
        await page.waitForTimeout(1000);
        await checkoutModal.fillForm(
            'Test User', 'Turkey', 'Bursa',
            '1234567890123456', '04', '2026'
        );
        await checkoutModal.purchase();
        await page.waitForTimeout(2000);
        const confirmation = page.locator('.sweet-alert h2');
        await expect(confirmation).toBeVisible();
    });

    test('TC-003 Credit card accepts letters — Known Bug', async ({ page }) => {
        await cartPage.placeOrder();
        await page.waitForTimeout(1000);
        await checkoutModal.fillForm(
            'Test User', 'Turkey', 'Bursa',
            'abcdef', '04', '2026'
        );
        await checkoutModal.purchase();
        await page.waitForTimeout(2000);
        const confirmation = page.locator('.sweet-alert h2');
        await expect(confirmation).toBeVisible();
    });

});