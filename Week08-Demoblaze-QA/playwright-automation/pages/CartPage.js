class CartPage {
    constructor(page) {
        this.page = page;
        this.cartItems = page.locator('#tbodyid tr');
        this.totalPrice = page.locator('#totalp');
        this.placeOrderButton = page.locator('button:has-text("Place Order")');
        this.deleteButtons = page.locator('td a:has-text("Delete")');
    }

    async getTotal() {
        return await this.totalPrice.textContent();
    }

    async placeOrder() {
        await this.placeOrderButton.click();
    }

    async deleteFirstItem() {
        await this.deleteButtons.first().click();
    }
}

export default CartPage;