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
            console.log('Onboarding skip button not found, continuing:', e);
        }

        await SearchPage.searchContainer.waitForDisplayed();
    });

    it('should return results when valid keyword is searched', async () => {
        await SearchPage.search('Appium');
        await SearchPage.waitForResults();
        await expect(SearchPage.searchResults).toBeDisplayed();
    });

    it('should show empty state when invalid keyword is searched', async () => {
        await SearchPage.search('xyzxyzxyz123');
        await expect(SearchPage.noResultsText).toBeDisplayed();
    });

});