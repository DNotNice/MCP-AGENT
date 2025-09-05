import { Page } from '@playwright/test';

export class ServicesPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async clickExploreClientWork() {
    await this.page.getByRole('link', { name: 'Explore Our Client Work' }).click();
  }
}
