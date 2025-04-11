import { Given, Then, When } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import {
  paymentPlanPage,
  reviewPaymentPage,
  page,
} from "../../globalPagesSetup.js";
import { productInfo } from "../../utilities/qa-data-reader.js";

Given("user clicks back button", async function () {
  await reviewPaymentPage.backButton.click();
});

Given(
  "the upfront option should be highlighted to indicate selection",
  async function () {
    await expect(paymentPlanPage.highlightedUpfrontSection).toBeVisible();
    await expect(
      paymentPlanPage.highlightedInstallmentsSection
    ).not.toBeVisible();
  }
);

Given(
  "the installments option should be highlighted to indicate selection",
  async function () {
    await expect(paymentPlanPage.highlightedInstallmentsSection).toBeVisible();
    await expect(paymentPlanPage.highlightedUpfrontSection).not.toBeVisible();
  }
);
