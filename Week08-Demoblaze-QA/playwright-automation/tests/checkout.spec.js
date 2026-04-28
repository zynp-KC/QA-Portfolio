import { test, expect } from '@playwright/test';
import HomePage from '../pages/HomePage.js';
import LoginModal from '../pages/LoginModal.js';
import CartPage from '../pages/CartPage.js';
import CheckoutModal from '../pages/CheckoutModal.js';
import users from '../fixtures/users.json' assert { type: 'json' };
import checkoutData from '../fixtures/checkout.json' assert { type: 'json' };

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

        await expect(homePage.usernameDisplay).toContainText('Welcome', { timeout: 15000 });

        await homePage.addFirstProductToCart();

        await homePage.clickCart();
        await expect(cartPage.cartItems.first()).toBeVisible();
    });

    test('TC-001 Successful order placement', async () => {
        await cartPage.placeOrder();
        await expect(checkoutModal.orderModal).toBeVisible();

        const { name, country, city, card, month, year } = checkoutData.validOrder;
        await checkoutModal.fillForm(name, country, city, card, month, year);
        await checkoutModal.purchase();

        await expect(checkoutModal.confirmationMessage).toBeVisible();
        await expect(checkoutModal.confirmationMessage).toContainText('Thank you');
    });

    test.fail('TC-003 BUG-03 Credit card field accepts letters', async () => {
        await cartPage.placeOrder();
        await expect(checkoutModal.orderModal).toBeVisible();

        const { name, country, city, card, month, year } = checkoutData.invalidCardOrder;
        await checkoutModal.fillForm(name, country, city, card, month, year);
        await checkoutModal.purchase();

        await expect(checkoutModal.confirmationMessage).not.toBeVisible();
    });
});