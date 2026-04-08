import { test, expect } from '@playwright/test';
import LoginPage from '../pages/LoginPage.js';

test.describe('Login — Happy Path', () => {

    test('TC-001 Successful login with valid credentials', async ({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.navigate();
        await loginPage.login('Admin', 'admin123');
        await page.waitForURL(/dashboard/, { timeout: 15000 });
    });

    test('TC-015 Successful logout after login', async ({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.navigate();
        await loginPage.login('Admin', 'admin123');
        await page.waitForURL(/dashboard/, { timeout: 15000 });
        await page.waitForSelector('.oxd-userdropdown-tab', { timeout: 10000 });
        await page.locator('.oxd-userdropdown-tab').click();
        await page.waitForSelector('a[href="/web/index.php/auth/logout"]', { timeout: 5000 });
        await page.locator('a[href="/web/index.php/auth/logout"]').click();
        await expect(page).toHaveURL(/login/);
    });
});