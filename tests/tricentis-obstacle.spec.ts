import { test, expect } from "@playwright/test";
import { GoodJobPopUp } from "../pages/good-job-popup";

test('Ids are Not Everything', async ({ page }) => {
    await page.goto('https://obstaclecourse.tricentis.com/Obstacles/22505');

    await expect(page).toHaveTitle(/Ids are not everything/);
    await page.getByText('Click me!').click();

    await new GoodJobPopUp(page).problemSolved();
});
