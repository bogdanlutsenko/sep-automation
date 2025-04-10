import { Given, Then, When } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { startApplicationPage, page } from "../../globalPagesSetup.js";
import { productInfo } from "../../utilities/qa-data-reader.js";

Then(
  "the system should display the steps of the checkout process as {string}, {string}, and {string}",
  async function (string, string2, string3) {
    const step1Text =
      await startApplicationPage.startApplicationText.innerText();
    const step2Text = await startApplicationPage.paymentPlanText.innerText();
    const step3Text = await startApplicationPage.reviewText.innerText();
    expect(step1Text).toBe(string);
    expect(step2Text).toBe(string2);
    expect(step3Text).toBe(string3);
  }
);

Then(
  "the system should highlight Start Application in blue",
  async function () {
    const startApplication =
      await startApplicationPage.startApplicationStepCircle.evaluate(
        (el) => getComputedStyle(el).backgroundColor
      );
    expect(startApplication).toBe("rgb(1, 201, 255)"); // Light Blue
  }
);

Then(
  "the system should display Payment Plan and Review in grey",
  async function () {
    const paymentPlan =
      await startApplicationPage.paymentPlanStepCircle.evaluate(
        (el) => getComputedStyle(el).backgroundColor
      );
    const review = await startApplicationPage.reviewStepCircle.evaluate(
      (el) => getComputedStyle(el).backgroundColor
    );
    expect(paymentPlan).toBe("rgba(0, 0, 0, 0)"); // Grey
    expect(review).toBe("rgba(0, 0, 0, 0)"); // Grey
  }
);
