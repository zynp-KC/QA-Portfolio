import { test, expect } from '@playwright/test';
import HomePage from '../pages/HomePage.js';
import LoginModal from '../pages/LoginModal.js';
import SignupModal from '../pages/SignupModal.js';
import users from '../fixtures/users.json' with { type: 'json' } ;

test.describe('Authentication', () => {
    let homePage;
    let loginModal;

    test.beforeEach(async ({ page }) => {
        homePage = new HomePage(page);
        loginModal = new LoginModal(page);
        await homePage.navigate();
    });

    test('TC-001 Successful login with valid credentials', async () => {
        await homePage.clickLogin();
        await loginModal.login(users.validUser.username, users.validUser.password);

        await expect(homePage.usernameDisplay).toContainText('Welcome');
    });

    test('TC-002 Login with wrong password shows error dialog', async ({ page }) => {
        await homePage.clickLogin();

        // Handler dialog'u ANINDA kapatır → alert JS thread'ini bloke etmez → click() döner.
        // Promise ise mesajı test gövdesine taşır → assertion erken koşmaz.
        const dialogMessage = new Promise((resolve) => {
            page.once('dialog', async (dialog) => {
                const message = dialog.message();
                await dialog.accept();
                resolve(message);
            });
        });

        await loginModal.login(users.invalidUser.username, users.invalidUser.password);

        expect(await dialogMessage).toContain('Wrong password');
        await expect(homePage.loginButton).toBeVisible();
    });

    test('TC-005 Successful signup', async ({ page }) => {
        const signupModal = new SignupModal(page);
        // Her test çalışmasında unique username — Demoblaze hesap silmeyi desteklemiyor
        const uniqueUsername = `testuser_${Date.now()}`;

        await homePage.clickSignup();

        // Handler dialog'u anında accept eder → alert JS thread'ini bloke etmez → click() döner.
        // Promise mesajı test gövdesine taşır → assertion dialog gelmeden koşmaz.
        const dialogMessage = new Promise((resolve) => {
            page.once('dialog', async (dialog) => {
                const message = dialog.message();
                await dialog.accept();
                resolve(message);
            });
        });

        await signupModal.signup(uniqueUsername, users.newUser.password);

        expect(await dialogMessage).toContain('Sign up successful');
    });

    test('TC-008 Successful logout', async () => {
        await homePage.clickLogin();
        await loginModal.login(users.validUser.username, users.validUser.password);

        await expect(homePage.usernameDisplay).toContainText('Welcome');

        await homePage.logoutButton.click();
        await expect(homePage.loginButton).toBeVisible();
        await expect(homePage.logoutButton).not.toBeVisible();
    });
});