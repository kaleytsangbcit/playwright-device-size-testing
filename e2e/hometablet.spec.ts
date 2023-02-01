import { test, devices, expect } from "@playwright/test";

test.use({
    browserName: "chromium",
    ...devices["iPad Air"],
    viewport: { width: 820, height: 1180 },
});

test.describe("Testing for home Tablet", () => {
    test("Testing for colours on Tablet", async ({ page }) => {
        await page.goto("http://localhost:3000/");

        const mainContainer = page.locator("#colouring");

        const checkingBackgroundColour = await mainContainer.evaluate((ele) => {
            return window.getComputedStyle(ele).getPropertyValue("background-color");
        });

        console.log(checkingBackgroundColour);
        expect(checkingBackgroundColour).toBe("rgb(0, 0, 255)");
    });
});
