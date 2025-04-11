import { Given, Then, When } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import {
  startApplicationPage,
  leftMainPage,
  page,
} from "../../globalPagesSetup.js";
import { productInfo } from "../../utilities/qa-data-reader.js";

Then("the system displays the text {string}", async function (text) {
  const displayedText = await leftMainPage.secureCheckout.innerText();
  expect(displayedText).toContain(text);
});

Then(
  "the system should display the program name {string}",
  async function (programName) {
    const displayedProgramName = await leftMainPage.programName.innerText();
    expect(displayedProgramName).toContain(programName);
  }
);

Then(
  "users should see a footer on the left side of the page",
  async function () {
    await expect(leftMainPage.cydeoImageAtLeftWindowFotter).toBeVisible();
    const footerElements = await leftMainPage.footerElements.all();
    let footerElementsText = [];
    for (let e of footerElements) {
      const text = await e.innerText();
      footerElementsText.push(text);
    }
    await expect(footerElementsText[0]).toBe("Terms and conditions");
    await expect(footerElementsText[1]).toBe("Privacy Policy");
    await expect(footerElementsText[2]).toBe("Disclaimer");
    await expect(footerElementsText[3]).toBe("Cookie Policy");
  }
);

Then(
  "users should see a footer on the right side of the page",
  async function () {
    await expect(startApplicationPage.footer).toBeVisible();
  }
);
