import { test, expect } from '@playwright/test';
import HomePage from '../pages/HomePage.js';

test.describe('Product Catalog', () => {
    let homePage;

    test.beforeEach(async ({ page }) => {
        homePage = new HomePage(page);
        await homePage.navigate();
    });

    test('TC-001 View all products on homepage', async ({ page }) => {
        const products = page.locator('.card');
        await expect(products.first()).toBeVisible();
    });

    test('TC-002 Filter products by Phones category', async ({ page }) => {
        await homePage.filterByPhones();
        await page.waitForTimeout(2000);
        const products = page.locator('.card-title');
        await expect(products.first()).toBeVisible();
    });

    test('TC-003 Filter products by Laptops category', async ({ page }) => {
        await homePage.filterByLaptops();
        await page.waitForTimeout(2000);
        const products = page.locator('.card-title');
        await expect(products.first()).toBeVisible();
    });

    test('TC-004 Filter products by Monitors category', async ({ page }) => {
        await homePage.filterByMonitors();
        await page.waitForTimeout(4000);
        const products = page.locator('.card-title');
        await expect(products.first()).toBeVisible({ timeout: 10000 });
    });

    test('TC-006 Navigate to next page', async ({ page }) => {
        await homePage.nextButton.click();
        await page.waitForTimeout(2000);
        const products = page.locator('.card');
        await expect(products.first()).toBeVisible();
    });

});