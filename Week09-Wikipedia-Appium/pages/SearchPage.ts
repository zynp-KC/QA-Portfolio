import BasePage from './BasePage';
import { SearchBar } from '../components/SearchBar';

class SearchPage extends BasePage {

    searchBar = new SearchBar();

    get skipButton() {
        return $('id=org.wikipedia.alpha:id/fragment_onboarding_skip_button');
    }
    
    get searchContainer() {
        return this.searchBar.container;
    }
    
    async search(query: string) {
        await this.click(this.searchBar.container);
        await this.setValue(this.searchBar.input, query);
    }

    async waitForResults() {
        await this.waitForElement(this.searchBar.results);
    }

    async getSearchInputText() {
        return await this.searchBar.input.getText();
    }

    async getResultCount() {
        const items = await this.searchBar.resultItems;
        return items.length;
    }

    get searchResults() {
        return this.searchBar.results;
    }

    get noResultsText() {
        return this.searchBar.noResultsText;
    }
}

export default new SearchPage();