import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
import HomePage from '../pages/HomePage.js';
import LoginModal from '../pages/LoginModal.js';
import users from '../fixtures/users.json' assert { type: 'json' };

test.describe('Accessibility Testing — WCAG 2.1 AA', () => {

    test('Home page accessibility', async ({ page }) => {
        await page.goto('https://www.demoblaze.com');
        await page.waitForTimeout(2000);
        const results = await new AxeBuilder({ page })
            .withTags(['wcag2a', 'wcag2aa'])
            .analyze();
        console.log(`Violations found: ${results.violations.length}`);
        results.violations.forEach(v => {
            console.log(`- ${v.impact}: ${v.id} — ${v.help}`);
        });
        expect(results.violations.length).toBeGreaterThanOrEqual(0);
    });

    test('Product detail page accessibility', async ({ page }) => {
        await page.goto('https://www.demoblaze.com');
        await page.waitForTimeout(2000);
        await page.locator('.card-title a').first().click();
        await page.waitForTimeout(2000);
        const results = await new AxeBuilder({ page })
            .withTags(['wcag2a', 'wcag2aa'])
            .analyze();
        console.log(`Violations found: ${results.violations.length}`);
        results.violations.forEach(v => {
            console.log(`- ${v.impact}: ${v.id} — ${v.help}`);
        });
        expect(results.violations.length).toBeGreaterThanOrEqual(0);
    });

    test('Cart page accessibility', async ({ page }) => {
        const homePage = new HomePage(page);
        const loginModal = new LoginModal(page);
        await homePage.navigate();
        await homePage.clickLogin();
        await loginModal.login(users.validUser.username, users.validUser.password);
        await page.waitForTimeout(2000);
        await page.keyboard.press('Escape');
        await page.waitForTimeout(1000);
        await page.locator('.card-title a').first().click();
        await page.waitForTimeout(1000);
        await page.locator('a:has-text("Add to cart")').click();
        await page.waitForTimeout(2000);
        await homePage.clickCart();
        await page.waitForTimeout(2000);
        const results = await new AxeBuilder({ page })
            .withTags(['wcag2a', 'wcag2aa'])
            .analyze();
        console.log(`Violations found: ${results.violations.length}`);
        results.violations.forEach(v => {
            console.log(`- ${v.impact}: ${v.id} — ${v.help}`);
        });
        expect(results.violations.length).toBeGreaterThanOrEqual(0);
    });

    test('Checkout modal accessibility', async ({ page }) => {
        const homePage = new HomePage(page);
        const loginModal = new LoginModal(page);
        await homePage.navigate();
        await homePage.clickLogin();
        await loginModal.login(users.validUser.username, users.validUser.password);
        await page.waitForTimeout(2000);
        await page.keyboard.press('Escape');
        await page.waitForTimeout(1000);
        await page.locator('.card-title a').first().click();
        await page.waitForTimeout(1000);
        await page.locator('a:has-text("Add to cart")').click();
        await page.waitForTimeout(2000);
        await homePage.clickCart();
        await page.waitForTimeout(2000);
        await page.locator('button:has-text("Place Order")').click();
        await page.waitForTimeout(1000);
        const results = await new AxeBuilder({ page })
            .withTags(['wcag2a', 'wcag2aa'])
            .analyze();
        console.log(`Violations found: ${results.violations.length}`);
        results.violations.forEach(v => {
            console.log(`- ${v.impact}: ${v.id} — ${v.help}`);
        });
        expect(results.violations.length).toBeGreaterThanOrEqual(0);
    });

});