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

        await expect(homePage.usernameDisplay).toContainText('Welcome');

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

        // NOTE: This asserts only that the confirmation UI appears. Per BUG-11, Demoblaze
        // never submits an order — the only request sent is POST /deletecart, and none of
        // the form data is transmitted. There is no server-side order to verify, so this is
        // the strongest assertion the application makes possible.
        // Per BUG-10, the confirmation also renders before the server responds
        await expect(checkoutModal.confirmationMessage).toBeVisible();
        await expect(checkoutModal.confirmationMessage).toContainText('Thank you');
    });

    test('TC-003 BUG-03 Credit card field accepts letters — flow completes with no validation', async () => {
        await cartPage.placeOrder();
        await expect(checkoutModal.orderModal).toBeVisible();

        const { name, country, city, card, month, year } = checkoutData.invalidCardOrder;
        await checkoutModal.fillForm(name, country, city, card, month, year);
        await checkoutModal.purchase();

        // BUG-03: letters are accepted in the credit card field and the flow completes.
        // Root cause is BUG-11 — the card number is never transmitted to any server,
        // so server-side validation cannot exist. This assertion documents the current
        // behaviour; if Demoblaze ever adds validation, this test will fail and force
        // an update, which is the intent.
        await expect(checkoutModal.confirmationMessage).toBeVisible();
        await expect(checkoutModal.confirmationMessage).toContainText('Thank you');
    });
});