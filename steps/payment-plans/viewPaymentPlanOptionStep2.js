import { Given, Then, When } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { paymentPlanPage, page } from "../../globalPagesSetup.js";
import { productInfo } from "../../utilities/qa-data-reader.js";

Then("only one upfront payment option should be displayed", async function () {
  const upfrontPaymentOptionCount = await paymentPlanPage.UpfrontText.count();
  expect(upfrontPaymentOptionCount).toBe(1);
});

Then(
  "only one installment payment option should be displayed",
  async function () {
    const installmentsPaymentOptionCount =
      await paymentPlanPage.InstallmentsText.count();
    expect(installmentsPaymentOptionCount).toBe(1);
  }
);

Then("the text should be {string} in the first row", async function (string) {
  const firstRowText = await paymentPlanPage.firstRowText.innerText();
  expect(firstRowText).toBe(string);
});

Then("there must be total {string} Payment Plans", async function (string) {
  const paymentPlanCount = await paymentPlanPage.paymentPlanBoxes.count();
  expect(paymentPlanCount == string).toBeTruthy();
});

Then(
  "the text Upfront should be displayed along with the price",
  async function () {
    await expect(paymentPlanPage.UpfrontText.isVisible).toBeTruthy();
    await expect(
      paymentPlanPage.greenBadgeUpfrontDiscount.isVisible
    ).toBeTruthy();
    await expect(
      paymentPlanPage.greenBadgeElectricBoltUpfrontDiscount.isVisible
    ).toBeTruthy();
    await expect(paymentPlanPage.upfrontPayOnceText.isVisible).toBeTruthy();
  }
);

Then(
  "the text 5 Installment should be displayed along with the price",
  async function () {
    await expect(paymentPlanPage.InstallmentsText.isVisible).toBeTruthy();
    await expect(paymentPlanPage.couponAvailableBadgeInstallments.isVisible).toBeTruthy();
    await expect(paymentPlanPage.perMonthTextInstallments.isVisible).toBeTruthy();
    await expect(paymentPlanPage.installmentsPaymentAmount.isVisible).toBeTruthy();
  }
);
