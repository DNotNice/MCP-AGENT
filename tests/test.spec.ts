import { test } from '@playwright/test';
import { HomePage } from './HomePage';
import { ServicesPage } from './ServicesPage';
import { ClientWorkPage } from './ClientWorkPage';

test('Navigate to EPAM and verify Client Work', async ({ page }) => {
  const homePage = new HomePage(page);
  const servicesPage = new ServicesPage(page);
  const clientWorkPage = new ClientWorkPage(page);

  // Navigate to EPAM website
  await homePage.navigate();

  // Click on Services from the header menu
  await homePage.clickServices();

  // Click on Explore Our Client Work link
  await servicesPage.clickExploreClientWork();

  // Verify that the Client Work text is visible on the page
  await clientWorkPage.verifyClientWorkText();
});
