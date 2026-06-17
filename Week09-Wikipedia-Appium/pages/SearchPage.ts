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

    get searchResults() {
        return this.searchBar.results;
    }

    get noResultsText() {
        return this.searchBar.noResultsText;
    }
}

export default new SearchPage();