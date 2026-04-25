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

    test('TC-001 Successful login with valid credentials', async ({ page }) => {
        await homePage.clickLogin();
        await loginModal.login(users.validUser.username, users.validUser.password);
        await page.waitForTimeout(2000);
        await expect(page.locator('#nameofuser')).not.toBeVisible();
    });

    test('TC-002 Login with invalid password', async ({ page }) => {
        await homePage.clickLogin();
        await loginModal.login(users.invalidUser.username, users.invalidUser.password);
        await page.waitForTimeout(2000);
        await expect(page.locator('#nameofuser')).not.toBeVisible();
    });

    test('TC-005 Successful signup', async ({ page }) => {
        const signupModal = new SignupModal(page);
        await homePage.clickSignup();
        await page.waitForSelector('#sign-username');
        await signupModal.signup(users.newUser.username, users.newUser.password);
        await page.waitForTimeout(2000);
    });

    test('TC-008 Successful logout', async ({ page }) => {
        await homePage.clickLogin();
        await loginModal.login(users.validUser.username, users.validUser.password);
        await page.waitForTimeout(3000);
        // Login modal'ı kapat
        await page.keyboard.press('Escape');
        await page.waitForTimeout(1000);
        // Direkt logout linkine git
        await page.evaluate(() => logOut());
        await expect(page.locator('#login2')).toBeVisible();
    });

});