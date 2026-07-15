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

        const logoutLink = page.getByRole('menuitem', { name: 'Logout' });
        await logoutLink.waitFor({ state: 'visible' });

        await Promise.all([
            page.waitForURL(/login/, { timeout: 20000 }),
            logoutLink.click(),
        ]);
    });
});