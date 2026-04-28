import { test, expect } from '@playwright/test';
import HomePage from '../pages/HomePage.js';

test.describe('Product Catalog', () => {
    let homePage;

    test.beforeEach(async ({ page }) => {
        homePage = new HomePage(page);
        await homePage.navigate();
    });

    test('TC-001 View all products on homepage', async () => {
        await expect(homePage.productCards.first()).toBeVisible();
        await expect(homePage.productCards).not.toHaveCount(0);
    });

    test('TC-002 Filter products by Phones category', async () => {
        await homePage.filterByPhones();
        await expect(homePage.productTitles).toContainText([
            'Samsung galaxy s6',
            'Nokia lumia 1520',
            'Nexus 6'
        ]);
    });

    test('TC-003 Filter products by Laptops category', async () => {
        await homePage.filterByLaptops();
        await expect(homePage.productTitles).toContainText([
            'Sony vaio i5',
            'Sony vaio i7',
            'MacBook air'
        ]);
    });

    test('TC-004 Filter products by Monitors category', async () => {
        await homePage.filterByMonitors();
        await expect(homePage.productTitles).toContainText([
            'Apple monitor 24',
            'ASUS Full HD'
        ]);
    });

    test.fail('TC-006 Navigate to next page — Known Bug', async () => {
        const firstProductBefore = await homePage.productTitles.first().textContent();
        await homePage.nextButton.click();
        const firstProductAfter = await homePage.productTitles.first().textContent();
        expect(firstProductAfter).not.toBe(firstProductBefore);
    });
});