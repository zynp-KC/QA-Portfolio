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

        const inputText = await SearchPage.getSearchInputText();
        await expect(inputText).toEqual('Appium');

        const resultCount = await SearchPage.getResultCount();
        await expect(resultCount).toBeGreaterThan(0);
    });

    it('should show empty state when invalid keyword is searched', async () => {
        await SearchPage.search('xyzxyzxyz123');
        await expect(SearchPage.noResultsText).toBeDisplayed();
    });

    it('should swipe up on search results', async () => {
        await SearchPage.search('Appium');
        await SearchPage.waitForResults();
        await driver.hideKeyboard();
        await SearchPage.swipe('up');
        await expect(SearchPage.searchResults).toBeDisplayed();

        const resultCount = await SearchPage.getResultCount();
        await expect(resultCount).toBeGreaterThan(0);
    });

});