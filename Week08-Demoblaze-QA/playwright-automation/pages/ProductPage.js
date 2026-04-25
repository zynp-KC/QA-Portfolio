class ProductPage {
    constructor(page) {
        this.page = page;
        this.addToCartButton = page.locator('a:has-text("Add to cart")');
        this.productTitle = page.locator('.name');
        this.productPrice = page.locator('.price-container');
    }

    async addToCart() {
        await this.addToCartButton.click();
    }
}

export default ProductPage;