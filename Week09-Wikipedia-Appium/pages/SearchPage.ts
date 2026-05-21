class SearchPage {

    get skipButton() {
        return $('id=org.wikipedia.alpha:id/fragment_onboarding_skip_button');
    }

    get searchContainer() {
        return $('id=org.wikipedia.alpha:id/search_container');
    }

    get searchInput() {
        return $('id=org.wikipedia.alpha:id/search_src_text');
    }

    get searchResults() {
        return $('id=org.wikipedia.alpha:id/fragment_search_results');
    }

    get noResultsText() {
        return $('android=new UiSelector().text("Sonuç yok")');
    }

    async skipOnboardingIfPresent() {
        if (await this.skipButton.isDisplayed()) {
            await this.skipButton.click();
        }
    }

    async search(query: string) {
        await this.searchContainer.waitForDisplayed();
        await this.searchContainer.click();
        await this.searchInput.click();
        await this.searchInput.setValue(query);
    }

    async waitForResults() {
        await this.searchResults.waitForDisplayed({ timeout: 5000 });
    }
}

export default new SearchPage();