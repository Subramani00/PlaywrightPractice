class HomePage {
  constructor(page) {
    this.page = page;
  }

  async open() {
    await this.page.goto('/');
  }

  async waitForPageLoad() {
    await this.page.waitForLoadState('domcontentloaded');
  }

  get logo() {
    return this.page.locator('body');
  }

  async verifyPageTitle(expectedText) {
    await this.page.waitForLoadState('networkidle');
    await this.page.waitForFunction(
      (text) => document.title.toLowerCase().includes(text.toLowerCase()),
      expectedText
    );
  }
}

module.exports = { HomePage };
