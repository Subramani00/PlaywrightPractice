class BasePage {
  constructor(page) {
    this.page = page;
  }

  async goto(url = '/') {
    await this.page.goto(url);
  }

  async waitForPageLoad() {
    await this.page.waitForLoadState('domcontentloaded');
  }

  async waitForUrlContains(text) {
    await this.page.waitForURL(`**${text}**`);
  }

  async click(locator) {
    await locator.click();
  }

  async type(locator, value) {
    await locator.fill(value);
  }
}

module.exports = { BasePage };
