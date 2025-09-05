import { test, expect } from '@playwright/test';
import { EpamPage } from '../pages/epamPage';

test.describe('Epam Website Navigation', () => {
  let epamPage: EpamPage;

  test.beforeEach(async ({ page }) => {
    epamPage = new EpamPage(page);
    await epamPage.navigateToHomePage();
  });

  test('Verify Client Work text is visible after navigation', async () => {
    await epamPage.selectServices();
    await epamPage.clickExploreOurClientWork();
    const isClientWorkVisible = await epamPage.isClientWorkTextVisible();
    expect(isClientWorkVisible).toBeTruthy();
  });
});