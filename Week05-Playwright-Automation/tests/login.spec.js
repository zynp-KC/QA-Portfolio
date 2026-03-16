const { test, expect } = require('@playwright/test');

test('Geçerli kullanıcı ile login olunuyor', async ({ page }) => {
    // 1. Siteye git
    await page.goto('https://www.saucedemo.com');

    // 2. Kullanıcı adı ve şifre gir
    await page.fill('#user-name', 'standard_user');
    await page.fill('#password', 'secret_sauce');

    // 3. Login butonuna tıkla
    await page.click('#login-button');

    // 4. Doğru sayfaya geçildi mi?
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
});


test('Login sonrası ürün listesi görünüyor', async ({ page }) => {
    // 1. Siteye git
    await page.goto('https://www.saucedemo.com');

    // 2. getByPlaceholder ile input bul ve doldur
    await page.getByPlaceholder('Username').fill('standard_user');
    await page.getByPlaceholder('Password').fill('secret_sauce');

    // 3. getByRole ile butonu bul ve tıkla
    await page.getByRole('button', { name: 'Login' }).click();

    // 4. Ürün listesi başlığı görünüyor mu?
    await expect(page.getByText('Products')).toBeVisible();

    await page.screenshot({ path: 'secreenshots/login-success.png'});
});