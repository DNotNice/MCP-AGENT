import { Page } from '@playwright/test';

export class EpamPage {
  private page: Page;
  private servicesMenuSelector = 'header >> text=Services';
  private exploreClientWorkLinkSelector = 'text=Explore Our Client Work';
  private clientWorkTextSelector = 'text=Client Work';

  constructor(page: Page) {
    this.page = page;
  }

  async navigateToHomePage(): Promise<void> {
    await this.page.goto('https://www.epam.com/');
  }

  async selectServices(): Promise<void> {
    await this.page.click(this.servicesMenuSelector);
  }

  async clickExploreOurClientWork(): Promise<void> {
    await this.page.click(this.exploreClientWorkLinkSelector);
  }

  async isClientWorkTextVisible(): Promise<boolean> {
    return this.page.isVisible(this.clientWorkTextSelector);
  }
}