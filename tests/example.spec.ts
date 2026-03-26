import { test, expect } from "@playwright/test";

test.describe("Epic Game Shop - UI тестування", () => {
  test("Сайт відкривається", async ({ page }) => {
    await page.goto("https://cheery-malasada-736afe.netlify.app/");
    await expect(page).toHaveURL(/netlify.app/);
  });

  test("Є заголовок сторінки", async ({ page }) => {
    await page.goto("https://cheery-malasada-736afe.netlify.app/");
    await expect(page.locator("h1")).toBeVisible();
  });

  test("Відображаються товари (ігри)", async ({ page }) => {
    await page.goto("https://cheery-malasada-736afe.netlify.app/");

    const products = page.locator(".game-card"); // якщо інший клас — скажеш, підправлю
    await expect(products.first()).toBeVisible();
  });

  test("Клік по картці гри працює", async ({ page }) => {
    await page.goto("https://cheery-malasada-736afe.netlify.app/");

    const firstGame = page.locator(".game-card").first();
    await firstGame.click();

    await expect(page).not.toHaveURL(
      "https://cheery-malasada-736afe.netlify.app/",
    );
  });

  test("Перевірка кнопки (наприклад Buy / Add)", async ({ page }) => {
    await page.goto("https://cheery-malasada-736afe.netlify.app/");

    const button = page.locator("button").first();
    await expect(button).toBeVisible();
  });
});
