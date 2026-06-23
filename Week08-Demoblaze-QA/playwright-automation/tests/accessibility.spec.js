import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
import HomePage from '../pages/HomePage.js';
import LoginModal from '../pages/LoginModal.js';
import CartPage from '../pages/CartPage.js';
import CheckoutModal from '../pages/CheckoutModal.js';
import users from '../fixtures/users.json' assert { type: 'json' };

//Helper — tekrar eden axe scan kodu tek yerde
async function runAccessibilityScan(page) {
    const results = await new AxeBuilder({ page })
        .withTags(['wcag2a', 'wcag2aa'])
        .analyze();

    console.log(`Violations found: ${results.violations.length}`);
    results.violations.forEach(v => {
        console.log(`- ${v.impact}: ${v.id} — ${v.help}`);
    });

    return results;
}

test.describe('Accessibility Testing — WCAG 2.1 AA', () => {

    test('Home page accessibility', async ({ page }) => {
        const homePage = new HomePage(page);
        await homePage.navigate();
        await expect(homePage.productCards.first()).toBeVisible();

        const results = await runAccessibilityScan(page);

        expect(results.violations.length).toBeLessThanOrEqual(3);
    });

    test('Product detail page accessibility', async ({ page }) => {
        const homePage = new HomePage(page);
        await homePage.navigate();
        await expect(homePage.productCards.first()).toBeVisible();
        await homePage.firstProduct.click();
        await expect(homePage.addToCartButton).toBeVisible();

        const results = await runAccessibilityScan(page);

        expect(results.violations.length).toBeLessThanOrEqual(3);
    });

    test('Cart page accessibility', async ({ page }) => {
        const homePage = new HomePage(page);
        const loginModal = new LoginModal(page);
        const cartPage = new CartPage(page);

        await homePage.navigate();
        await homePage.clickLogin();
        await loginModal.login(users.validUser.username, users.validUser.password);
        await expect(homePage.usernameDisplay).toContainText('Welcome');

        await homePage.addFirstProductToCart();
        await homePage.clickCart();
        await expect(cartPage.cartItems.first()).toBeVisible();

        const results = await runAccessibilityScan(page);

        expect(results.violations.length).toBeLessThanOrEqual(2);
    });

    test('Checkout modal accessibility', async ({ page }) => {
        const homePage = new HomePage(page);
        const loginModal = new LoginModal(page);
        const cartPage = new CartPage(page);
        const checkoutModal = new CheckoutModal(page);

        await homePage.navigate();
        await homePage.clickLogin();
        await loginModal.login(users.validUser.username, users.validUser.password);
        await expect(homePage.usernameDisplay).toContainText('Welcome');

        await homePage.addFirstProductToCart();
        await homePage.clickCart();
        await expect(cartPage.cartItems.first()).toBeVisible();

        await cartPage.placeOrder();
        await expect(checkoutModal.orderModal).toBeVisible();

        const results = await runAccessibilityScan(page);

        expect(results.violations.length).toBeLessThanOrEqual(2);
    });
});