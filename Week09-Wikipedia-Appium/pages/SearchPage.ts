import BasePage from './BasePage';

class SearchPage extends BasePage {

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

    async search(query: string) {
        await this.click(this.searchContainer);
        await this.setValue(this.searchInput, query);
    }

    async waitForResults() {
        await this.waitForElement(this.searchResults);
    }
}

export default new SearchPage();