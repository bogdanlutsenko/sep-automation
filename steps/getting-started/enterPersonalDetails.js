import { Given, Then, When } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { startApplicationPage, page } from "../../globalPagesSetup.js";
import { productInfo } from "../../utilities/qa-data-reader.js";

Then("First Name text field is present", async function () {
  await startApplicationPage.firstNameInputBox.isVisible();
});

Then("Last Name text field is present", async function () {
  await startApplicationPage.lastNameInputBox.isVisible();
});

Then(
  "user completes step one with invalid email and verifies that it stays on the same page after clicking next button",
  async function () {
    await startApplicationPage.firstNameInputBox.fill("Bogdan");
    await startApplicationPage.lastNameInputBox.fill("Lutsenko");
    await startApplicationPage.emailInputBox.fill("testEmail");
    await startApplicationPage.phoneNumberInputBox.fill("1234567890");
    await startApplicationPage.howDidYouHearAboutUsDropDown.click();
    await startApplicationPage.emailOptionFromDropDown.click();
    await startApplicationPage.nextButton.click();
    await startApplicationPage.emailInputBox.isVisible();
  }
);

Then(
  "user completes step one with invalid phone number and verifies that it stays on the same page after clicking next button",
  async function () {
    await startApplicationPage.firstNameInputBox.fill("Bogdan");
    await startApplicationPage.lastNameInputBox.fill("Lutsenko");
    await startApplicationPage.emailInputBox.fill("bl.lutsenko@gmail.com");
    await startApplicationPage.phoneNumberInputBox.fill("Test");
    await startApplicationPage.howDidYouHearAboutUsDropDown.click();
    await startApplicationPage.emailOptionFromDropDown.click();
    await startApplicationPage.nextButton.click();
    await startApplicationPage.phoneNumberInputBox.isVisible();
  }
);

Then("How did you hear about us dropdown list is present", async function () {
  await startApplicationPage.howDidYouHearAboutUsDropDown3.isVisible();
});
