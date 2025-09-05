import { test, expect } from '@playwright/test';
import HomePage from '../page-objects/HomePage';
import ServicesPage from '../page-objects/ServicesPage';
import ClientWorkPage from '../page-objects/ClientWorkPage';

test.describe('EPAM Client Work Navigation', () => {
  test('should navigate to Client Work page and verify content', async ({ page }) => {
    const homePage = new HomePage(page);
    const servicesPage = new ServicesPage(page);
    const clientWorkPage = new ClientWorkPage(page);

    // Navigate to the EPAM homepage
    await homePage.goto();

    // Navigate to the Services page
    await homePage.navigateToServices();

    // Click on "Explore Our Client Work" link
    await servicesPage.clickExploreClientWork();

    // Verify that the "Client Work" text is visible on the page
    await expect(clientWorkPage.clientWorkHeader).toBeVisible();
    await expect(clientWorkPage.clientWorkHeader).toHaveText('Client Work');
  });
});