export class SearchBar {

    get container() {
        return $('id=org.wikipedia.alpha:id/search_container');
    }

    get input() {
        return $('id=org.wikipedia.alpha:id/search_src_text');
    }

    get results() {
        return $('id=org.wikipedia.alpha:id/fragment_search_results');
    }

    get noResultsText() {
        return $('android=new UiSelector().text("Sonuç yok")');
    }

    get resultItems() {
        return $$('android.widget.TextView');
    }

}