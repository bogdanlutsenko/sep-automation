@sep16
Feature: Click on the next button on payment plans page   #! Test Only

    As a customer, I should be able to click on the next button on step 2 when I select a plan.

    #* AC1: Clicking on any plan should activate the next button
    #* AC2: When the customer clicks on the next button, the Step 3 page should be displayed.
    #* AC3: In the stepper, steps 1 and 2 should be green, and step 3 should be blue.
    #* AC4: The payment component should be displayed.
    #* AC5: A price summary should be displayed.
    #* AC6: The back button should be displayed.
    #* AC7: By default, the pay button should be displayed.


    Background:
        Given user is on the enrollment page
        And user has completed step one with valid information
        And user is on step two of the enrollment process

   @sep16-1
   Scenario: verify that the next button is disabled by default
        Then the next button is disabled by default

    @sep16-2
    Scenario: verify that the next button will be activated when user selects upfront payment option
        When user clicks upfront payment option
        Then the next button will be enabled

    @sep16-3
    Scenario: verify that the next button will be activated when user selects installments payment option
        When user clicks installments payment option
        Then the next button will be enabled

    @sep16-4
    Scenario: verify that after clicking on next button Step 3 page should be displayed
        When user clicks installments payment option
        Then the next button will be enabled
        When user clicks next button
        Then user should be redirected to step three of the enrollment process

    @sep16-5
    Scenario: verify that steps 1 and 2 should be green, and step 3 should be blue when landing on paymet page
        When user clicks installments payment option
        When user clicks next button
        Then stepper one and two should be green
        And step three should be blue

    @sep16-6
    Scenario: verify that the payment component is displayed
        When user clicks installments payment option
        When user clicks next button
        Then payment component should be displayed

    @sep16-7
    Scenario: verify that the price summary is displayed
        When user clicks installments payment option
        When user clicks next button
        Then price summary should be displayed

    @sep16-8
    Scenario: verify that the back button is displayed
        When user clicks installments payment option
        When user clicks next button
        Then back button should be displayed

    @sep16-9
    Scenario: verify that by default, the pay button is displayed
        When user clicks installments payment option
        When user clicks next button
        Then pay button should be displayed