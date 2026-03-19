const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');

test.beforeEach(async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
});

test('Geçerli kullanıcı ile login olunuyor', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.login('standard_user', 'secret_sauce');
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
});

test('Login sonrası ürün listesi görünüyor', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.login('standard_user', 'secret_sauce');
    await expect(page.getByText('Products')).toBeVisible();
    await page.screenshot({ path: 'screenshots/login-success.png' });
});