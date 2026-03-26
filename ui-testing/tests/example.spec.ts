import { test, expect } from "@playwright/test";

test.describe("UI тестування сайту example.com", () => {
  test("Перевірка заголовку сторінки", async ({ page }) => {
    await page.goto("https://example.com");
    await expect(page).toHaveTitle(/Example Domain/);
  });

  test("Перевірка наявності заголовка H1", async ({ page }) => {
    await page.goto("https://example.com");
    const heading = page.locator("h1");
    await expect(heading).toHaveText("Example Domain");
  });

  test("Перевірка тексту на сторінці", async ({ page }) => {
    await page.goto("https://example.com");
    await expect(page.locator("p").first()).toContainText(
      "documentation examples",
    );
  });

  test("Перевірка посилання", async ({ page }) => {
    await page.goto("https://example.com");
    const link = page.locator("a");
    await expect(link).toHaveAttribute(
      "href",
      "https://iana.org/domains/example",
    );
  });

  test("Перехід по посиланню", async ({ page }) => {
    await page.goto("https://example.com");
    await page.click("a");
    await expect(page).toHaveURL(/iana.org/);
  });
});
