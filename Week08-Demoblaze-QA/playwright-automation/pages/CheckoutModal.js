class CheckoutModal {
    constructor(page) {
        this.page = page;
        this.nameInput = page.locator('#name');
        this.countryInput = page.locator('#country');
        this.cityInput = page.locator('#city');
        this.creditCardInput = page.locator('#card');
        this.monthInput = page.locator('#month');
        this.yearInput = page.locator('#year');
        this.purchaseButton = page.locator('button:has-text("Purchase")');
        this.confirmationMessage = page.locator('.sweet-alert h2');
    }

    async fillForm(name, country,city,card,month,year) {
        await this.nameInput.fill(name);
        await this.countryInput.fill(country);
        await this.cityInput.fill(city);
        await this.creditCardInput.fill(card);
        await this.monthInput.fill(month);
        await this.yearInput.fill(year);
    }

    async purchase() {
        await this.purchaseButton.click();
    }

    async getConfirmationMessage() {
        return await this.confirmationMessage.textContent();
    }
}

export default CheckoutModal;