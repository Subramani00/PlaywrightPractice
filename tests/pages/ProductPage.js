const { BasePage } = require('./BasePage');

class ProductPage extends BasePage {
  constructor(page) {
    super(page);
    this.productTitle = page.locator('[data-testid="product-title"], h1');
    this.addToCartButton = page.locator('button:has-text("Add to Cart")');
    this.productPrice = page.locator('[data-testid="product-price"], .product-price');
  }

  async openProduct(productUrl) {
    await this.goto(productUrl);
  }

  async addToCart() {
    await this.addToCartButton.click();
  }
}

module.exports = { ProductPage };
