import { Given, Then, When } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import {
  paymentPlanPage,
  startApplicationPage,
  page,
  reviewPaymentPage,
} from "../../globalPagesSetup.js";
import { productInfo } from "../../utilities/qa-data-reader.js";

Given("user has completed step one with valid information", async function () {
  await startApplicationPage.firstNameInputBox.fill("Bogdan");
  await startApplicationPage.lastNameInputBox.fill("Lutsenko");
  await startApplicationPage.emailInputBox.fill("bl.lutsenko@gmail.com");
  await startApplicationPage.phoneNumberInputBox.fill("1234567890");
  await startApplicationPage.howDidYouHearAboutUsDropDown.click();
  await startApplicationPage.emailOptionFromDropDown.click();
  await startApplicationPage.nextButton.click();
  await page.waitForTimeout(2000);
});

Given("user is on step two of the enrollment process", async function () {
  await expect(paymentPlanPage.chooseAPaymentPlanText).toBeVisible();
  await expect(paymentPlanPage.step2).toBeVisible();
});

Then("the next button is disabled by default", async function () {
  await expect(paymentPlanPage.inactiveNextButton).toBeVisible();
});

When("user clicks upfront payment option", async function () {
  await paymentPlanPage.upfrontPaymentOption.click();
});

Then("the next button will be enabled", async function () {
  await expect(paymentPlanPage.activeNextButton).toBeVisible();
});

When("user clicks installments payment option", async function () {
  await paymentPlanPage.installmentsPaymentOption.click();
});

When("user clicks next button", async function () {
  await paymentPlanPage.activeNextButton.click();
  await expect(paymentPlanPage.activeNextButton).not.toBeVisible();
});

Then(
  "user should be redirected to step three of the enrollment process",
  async function () {
    await expect(reviewPaymentPage.paymentForm.isVisible).toBeTruthy();
  }
);

Then("stepper one and two should be green", async function () {
  const step1Color =
    await startApplicationPage.startApplicationStepCircle.evaluate(
      (el) => getComputedStyle(el).backgroundColor
    );
  const step2Color = await startApplicationPage.paymentPlanStepCircle.evaluate(
    (el) => getComputedStyle(el).backgroundColor
  );
  expect(step1Color).toBe("rgb(172, 245, 138)"); // Light Green
  expect(step2Color).toBe("rgb(172, 245, 138)"); // Light Green
});

Then("step three should be blue", async function () {
  const step3Color = await startApplicationPage.reviewStepCircle.evaluate(
    (el) => getComputedStyle(el).backgroundColor
  );
  expect(step3Color).toBe("rgb(1, 201, 255)"); // Light Blue
});

Then("payment component should be displayed", async function () {
  await expect(reviewPaymentPage.paymentForm.isVisible).toBeTruthy();
  await expect(reviewPaymentPage.cardNumberInput.isVisible).toBeTruthy();
  await expect(reviewPaymentPage.expiryDateInput.isVisible).toBeTruthy();
  await expect(reviewPaymentPage.cvcInput.isVisible).toBeTruthy();
  await expect(reviewPaymentPage.countryDropDown.isVisible).toBeTruthy();
  await expect(reviewPaymentPage.zipCodeInput.isVisible).toBeTruthy();
  await expect(
    reviewPaymentPage.byProvidingCardInformationText.isVisible
  ).toBeTruthy();
});

Then("price summary should be displayed", async function () {
  await expect(reviewPaymentPage.productPriceText.isVisible).toBeTruthy();
  await expect(reviewPaymentPage.productPriceAmount.isVisible).toBeTruthy();
  await expect(reviewPaymentPage.installmentPriceText.isVisible).toBeTruthy();
  await expect(reviewPaymentPage.installmentPriceAmount.isVisible).toBeTruthy();
  await expect(reviewPaymentPage.subtotalText.isVisible).toBeTruthy();
  await expect(reviewPaymentPage.subtotalAmount.isVisible).toBeTruthy();
  await expect(reviewPaymentPage.processingFeeText.isVisible).toBeTruthy();
  await expect(reviewPaymentPage.processingFeeAmount.isVisible).toBeTruthy();
  await expect(reviewPaymentPage.totalText.isVisible).toBeTruthy();
  await expect(reviewPaymentPage.totalAmount.isVisible).toBeTruthy();
});

Then("back button should be displayed", async function () {
  await expect(reviewPaymentPage.backButton.isVisible).toBeTruthy();
});

Then("pay button should be displayed", async function () {
  await expect(reviewPaymentPage.payButton.isVisible).toBeTruthy();
});
