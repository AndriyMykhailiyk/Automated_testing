import { test, expect } from "@playwright/test";

test.describe("UI тести", () => {
  test("Сайт відкривається", async ({ page }) => {
    await page.goto("https://cheery-malasada-736afe.netlify.app/");
    await expect(page).toHaveURL(/netlify/);
  });

  test("Є товари", async ({ page }) => {
    await page.goto("https://cheery-malasada-736afe.netlify.app/");
    const items = page.locator('[class*="gameItem"]');
    await expect(items.first()).toBeVisible();
  });

  test("Кнопка є", async ({ page }) => {
    await page.goto("https://cheery-malasada-736afe.netlify.app/");
    await expect(page.locator("button")).toBeVisible();
  });

  test("Є картинки", async ({ page }) => {
    await page.goto("https://cheery-malasada-736afe.netlify.app/");
    await expect(page.locator("img").first()).toBeVisible();
  });

  test("Є посилання", async ({ page }) => {
    await page.goto("https://cheery-malasada-736afe.netlify.app/");
    await expect(page.locator("a").first()).toBeVisible();
  });
});
