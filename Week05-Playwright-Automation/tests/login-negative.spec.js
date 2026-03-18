const { test, expect } = require('@playwright/test');

test('Yanlış şifre ile login olunmuyor', async ({ page }) => {
    await page.goto('https://www.saucedemo.com');

    await page.fill('#user-name', 'standard_user');
    await page.fill('#password', 'yanlis_sifre');
    await page.click('#login-button');

    // Hata mesajı görünüyor mu?
    await expect(page.getByText('Username and password do not match')).toBeVisible();

    await page.screenshot({ path: 'screenshots/login-wrong-password.png' });
});

test('Boş kullanıcı adı ile login olunmuyor', async ({ page }) => {
    await page.goto('https://www.saucedemo.com');

    await page.fill('#password', 'secret_sauce');
    await page.click('#login-button');

    await expect(page.getByText('Username is required')).toBeVisible();

    await page.screenshot({ path: 'screenshots/login-empty-username.png' });
});

test('Kilitli kullanıcı ile login olunmuyor', async ({ page }) => {
    await page.goto('https://www.saucedemo.com');

    await page.fill('#user-name', 'locked_out_user');
    await page.fill('#password', 'secret_sauce');
    await page.click('#login-button');

    await expect(page.getByText('Sorry, this user has been locked out')).toBeVisible();

    await page.screenshot({ path: 'screenshots/login-locked-user.png' });
});