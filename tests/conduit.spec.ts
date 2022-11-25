import { test, expect } from "@playwright/test";

test("conductにアクセス", async ({ page }) => {
  await page.goto("https://demo.realworld.io/#/");
  // ページタイトルを取得
  await expect(page).toHaveTitle("Home — Conduit");

  // テキストが書かれた特定の要素を取得
  const placeText = page.getByText("A place to share your knowledge.");
  // 要素が存在していることを確認
  expect(placeText).toBeTruthy();

  // Sign inボタン要素を取得
  const signInLink = page.getByText("Sign in");
  // Sign inボタンをクリック
  await signInLink.click();
  // 遷移先ページの確認
  await expect(page).toHaveURL("https://demo.realworld.io/#/login");
  await expect(page).toHaveTitle("Sign in — Conduit");
});
