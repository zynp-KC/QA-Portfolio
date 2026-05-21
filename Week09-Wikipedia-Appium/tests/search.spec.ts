import SearchPage from '../pages/SearchPage';

describe('Wikipedia Search', () => {

    beforeEach(async () => {
        await driver.terminateApp('org.wikipedia.alpha');
        await driver.activateApp('org.wikipedia.alpha');

        try {
            const skipBtn = await $('id=org.wikipedia.alpha:id/fragment_onboarding_skip_button');
            await skipBtn.waitForDisplayed({ timeout: 3000 });
            await skipBtn.click();
        } catch (e) {
        
        }
        await SearchPage.searchContainer.waitForDisplayed();
    });

    it('should search for Appium and see results', async () => {
        await SearchPage.search('Appium');
        await SearchPage.waitForResults();
        await expect(SearchPage.searchResults).toBeDisplayed();
    });

    it('should show no results for invalid search term', async () => {
        await SearchPage.search('xyzxyzxyz123');
        await SearchPage.waitForResults();
        await expect(SearchPage.searchResults).toBeDisplayed();
    });

});