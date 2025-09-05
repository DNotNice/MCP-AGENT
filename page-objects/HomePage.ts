import { Page } from '@playwright/test';

export default class HomePage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async goto() {
    await this.page.goto('https://www.epam.com/');
  }

  async navigateToServices() {
    await this.page.click('text=Services');
  }
}