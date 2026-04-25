import { test, expect } from '@playwright/test';
import HomePage from '../pages/HomePage.js';
import LoginModal from '../pages/LoginModal.js';
import CartPage from '../pages/CartPage.js';
import users from '../fixtures/users.json' assert { type: 'json' };

test.describe('Cart', () => {
    let homePage;
    let loginModal;
    let cartPage;

    test.beforeEach(async ({ page }) => {
        homePage = new HomePage(page);
        loginModal = new LoginModal(page);
        cartPage = new CartPage(page);
        await homePage.navigate();
        await homePage.clickLogin();
        await loginModal.login(users.validUser.username, users.validUser.password);
        await page.waitForTimeout(2000);
        // Login modalı kapat
        await page.keyboard.press('Escape');
        await page.waitForTimeout(1000);
    });

    test('TC-001 Add product to cart', async ({ page }) => {
        await page.locator('.card-title a').first().click();
        await page.waitForTimeout(2000);
        await page.locator('a:has-text("Add to cart")').click();
        await page.waitForTimeout(3000);
        await homePage.clickCart();
        await page.waitForTimeout(3000);
        const cartItems = page.locator('#tbodyid tr');
        await expect(cartItems.first()).toBeVisible({ timeout: 10000 });
    });

    test('TC-003 Remove product from cart', async ({ page }) => {
        await page.locator('.card-title a').first().click();
        await page.waitForTimeout(1000);
        await page.locator('a:has-text("Add to cart")').click();
        await page.waitForTimeout(1000);
        await homePage.clickCart();
        await page.waitForTimeout(2000);
        await cartPage.deleteFirstItem();
        await page.waitForTimeout(2000);
        const cartItems = page.locator('#tbodyid tr');
        await expect(cartItems).toHaveCount(0);
    });

    test('TC-010 Place order modal opens from cart', async ({ page }) => {
        await page.locator('.card-title a').first().click();
        await page.waitForTimeout(1000);
        await page.locator('a:has-text("Add to cart")').click();
        await page.waitForTimeout(1000);
        await homePage.clickCart();
        await page.waitForTimeout(2000);
        await cartPage.placeOrder();
        await expect(page.locator('#orderModal')).toBeVisible();
    });

});