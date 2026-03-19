const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');

test.beforeEach(async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
});

test('Yanlış şifre ile login olunmuyor', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.login('standard_user', 'yanlis_sifre');
    await expect(page.getByText('Username and password do not match')).toBeVisible();
    await page.screenshot({ path: 'screenshots/login-wrong-password.png' });
});

test('Boş kullanıcı adı ile login olunmuyor', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.login('', 'secret_sauce');
    await expect(page.getByText('Username is required')).toBeVisible();
    await page.screenshot({ path: 'screenshots/login-empty-username.png' });
});

test('Kilitli kullanıcı ile login olunmuyor', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.login('locked_out_user', 'secret_sauce');
    await expect(page.getByText('Sorry, this user has been locked out')).toBeVisible();
    await page.screenshot({ path: 'screenshots/login-locked-user.png' });
});