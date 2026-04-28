import { test, expect } from '@playwright/test';
import HomePage from '../pages/HomePage.js';
import LoginModal from '../pages/LoginModal.js';
import SignupModal from '../pages/SignupModal.js';
import users from '../fixtures/users.json' assert { type: 'json' };

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

    test('TC-002 Login with invalid credentials shows error dialog', async ({ page }) => {
        await homePage.clickLogin();

        const dialogPromise = page.waitForEvent('dialog');
        await loginModal.login(users.invalidUser.username, users.invalidUser.password);
        const dialog = await dialogPromise;
        await dialog.accept();

        await expect(homePage.loginButton).toBeVisible();
    });

    test('TC-005 Successful signup', async ({ page }) => {
        const signupModal = new SignupModal(page);
        // Her test çalışmasında unique username — Demoblaze hesap silmeyi desteklemiyor
        const uniqueUsername = `testuser_${Date.now()}`;

        await homePage.clickSignup();
        await expect(signupModal.usernameInput).toBeVisible();

        // Dialog'u promise ile yakala — waitForTimeout yok
        const dialogPromise = page.waitForEvent('dialog');
        await signupModal.signup(uniqueUsername, users.newUser.password);

        const dialog = await dialogPromise;
        expect(dialog.message()).toContain('Sign up successful');
        await dialog.accept();
    });

    test('TC-008 Successful logout', async () => {
        await homePage.clickLogin();
        await loginModal.login(users.validUser.username, users.validUser.password);

        // firefox'ta login response yavaş olduğu için timeout artırıldı
        await expect(homePage.usernameDisplay).toContainText('Welcome', { timeout: 15000 });

        await homePage.logoutButton.click();
        await expect(homePage.loginButton).toBeVisible();
        await expect(homePage.logoutButton).not.toBeVisible();
    });
});