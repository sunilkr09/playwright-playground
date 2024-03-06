import { expect, type Locator, type Page } from "@playwright/test";

export class GoodJobPopUp {
    readonly page: Page;
    readonly successMessage: Locator;

    constructor(page: Page) {
        this.page = page;
        this.successMessage = page.locator('h2', { hasText: 'Good job!' })
    }

    async problemSolved() {
        await expect(this.successMessage).toBeVisible();
    }
}
