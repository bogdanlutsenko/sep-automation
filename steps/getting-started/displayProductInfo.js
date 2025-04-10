import { Given, Then, When } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { startApplicationPage, leftMainPage, page } from "../../globalPagesSetup.js";
import { productInfo } from "../../utilities/qa-data-reader.js";

Then(
  "product name should be displayed on the information card",
  async function () {
  await expect(startApplicationPage.programNameOnInfoCard).toBeVisible();
  }
);

Given(
  "product name on the information card matches the product name on the left side of the screen",
  async function () {
    const productNameOnLeft = await leftMainPage.programName.innerText();
    const productNameOnCard =
    await startApplicationPage.programNameOnInfoCard.innerText();
    expect(productNameOnLeft).toBe(productNameOnCard);

  }
);

Then("the price of the product should be displayed", async function () {
    let price = await startApplicationPage.programBasePrice.innerText();
    price = price.substring(1); // Remove the dollar sign
    const priceInQAData = productInfo.prices[0].baseAmount;;
    expect(price == priceInQAData).toBeTruthy();
});

Then(
  "text indicating a flexible payment plan should be available and displayed",
  async function () {
    await expect(startApplicationPage.flexiblePaymentsPlanAvailableText).toBeVisible();
  }
);

Then(
  "return policy and the final date for returns should be displayed",
  async function () {
    await expect(startApplicationPage.refundPolicy).toBeVisible();
    await expect(startApplicationPage.refundEndDate).toBeVisible();  
  }
);
