import { test, expect } from '@playwright/test';
import HomePage from '../pages/HomePage.js';
import LoginModal from '../pages/LoginModal.js';
import CartPage from '../pages/CartPage.js';
import users from '../fixtures/users.json' with { type: 'json' } ;

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

        await expect(homePage.usernameDisplay).toContainText('Welcome');
    });

    test('TC-001 Add product to cart', async () => {
        await homePage.addFirstProductToCart();

        await homePage.clickCart();
        await expect(cartPage.cartItems.first()).toBeVisible();
    });

    test('TC-003 Remove product from cart', async () => {
        await homePage.addFirstProductToCart();
        await homePage.clickCart();
        await expect(cartPage.cartItems.first()).toBeVisible();

        // Sil ve doğrula
        await cartPage.deleteFirstItem();
        await expect(cartPage.cartItems).toHaveCount(0, { timeout: 12000 });
    });

    test('TC-010 Place order modal opens from cart', async () => {
        await homePage.addFirstProductToCart();
        await homePage.clickCart();
        await expect(cartPage.cartItems.first()).toBeVisible();

        await cartPage.placeOrder();
        await expect(cartPage.orderModal).toBeVisible();
    });
});