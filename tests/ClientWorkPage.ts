import { Page } from '@playwright/test';

export class ClientWorkPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async verifyClientWorkText() {
    const clientWorkText = await this.page.getByText('Client Work');
    await expect(clientWorkText).toBeVisible();
  }
}
