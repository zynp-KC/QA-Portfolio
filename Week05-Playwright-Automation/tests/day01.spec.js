const { test, expect } = require('@playwright/test');

test('SauceDemo anasayfa açılıyor', async ({ page }) => {
    await page.goto('https://www.saucedemo.com');

    const title = await page.title();
    console.log('Sayfa başlığı:', title);

    await expect(page).toHaveTitle('Swag Labs');
});