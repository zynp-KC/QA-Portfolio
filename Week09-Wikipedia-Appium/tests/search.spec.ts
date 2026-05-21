import SearchPage from '../pages/SearchPage';

describe('Wikipedia Search', () => {

    it('should search for Appium and see results', async () => {

        await SearchPage.skipOnboardingIfPresent();
        await SearchPage.search('Appium');
        await SearchPage.waitForResults();

        await expect(SearchPage.searchResults).toBeDisplayed();
    });
});