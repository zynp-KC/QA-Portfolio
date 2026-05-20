describe('Wikipedia Search', () => {

    it('should search for Appium and see results', async () => {

        // 1. Onboarding varsa atla
        const skipBtn = await $('id=org.wikipedia.alpha:id/fragment_onboarding_skip_button');
        if (await skipBtn.isDisplayed()) {
            await skipBtn.click();
        }

        // 2. Arama kutusuna tıkla
        const searchContainer = await $('id=org.wikipedia.alpha:id/search_container');
        await searchContainer.click();

        // 3. Arama input'una tıkla ve "Appium" yaz
        const searchInput = await $('id=org.wikipedia.alpha:id/search_src_text');
        await searchInput.click();
        await searchInput.setValue('Appium');

        // 4. Sonuçların yüklenmesini bekle
        await browser.pause(2000);

        // 5. Sonuç container'ının göründüğünü doğrula
        const searchResults = await $('id=org.wikipedia.alpha:id/fragment_search_results');
        await expect(searchResults).toBeDisplayed();

    });

});