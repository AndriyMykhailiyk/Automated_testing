import { test, expect } from "@playwright/test";

test.describe("UI тести", () => {
  test("Сайт відкривається", async ({ page }) => {
    await page.goto("https://cheery-malasada-736afe.netlify.app/");
    await expect(page).toHaveURL(/netlify/);
  });

  test("Є товари", async ({ page }) => {
    await page.goto("https://cheery-malasada-736afe.netlify.app/");
    const items = page.locator("h1");
    await expect(items).toBeVisible();
  });

  test("Кнопка є", async ({ page }) => {
    await page.goto("https://cheery-malasada-736afe.netlify.app/");
    await expect(page.locator("body")).toBeVisible();
  });

  test("Є картинки", async ({ page }) => {
    await page.goto("https://cheery-malasada-736afe.netlify.app/");
    await expect(page.locator("body")).toBeVisible();
  });

  test("Є посилання", async ({ page }) => {
    await page.goto("https://cheery-malasada-736afe.netlify.app/");
    await expect(page.locator("a").first()).toBeVisible();
  });
});
