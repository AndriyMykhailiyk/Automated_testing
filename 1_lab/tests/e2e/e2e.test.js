const { test, expect } = require("@playwright/test");

test.describe("E2E тести", () => {
  test("Перехід на сторінку гри", async ({ page }) => {
    await page.goto("https://cheery-malasada-736afe.netlify.app/");
    await expect(page).toHaveURL("https://cheery-malasada-736afe.netlify.app/");
  });

  test("Перевірка навігації", async ({ page }) => {
    await page.goto("https://cheery-malasada-736afe.netlify.app/");
    await page.click("a");
  });

  test("Сценарій користувача", async ({ page }) => {
    await page.goto("https://cheery-malasada-736afe.netlify.app/");
    await page.locator('[class*="gameItem"]').first().click();
  });

  test("Перевірка контенту", async ({ page }) => {
    await page.goto("https://cheery-malasada-736afe.netlify.app/");
    await expect(page.locator("body")).toBeVisible();
  });

  test("Повний сценарій", async ({ page }) => {
    await page.goto("https://cheery-malasada-736afe.netlify.app/");
    await page.locator("a").first().click();
    await page.waitForTimeout(2000);
  });
});
