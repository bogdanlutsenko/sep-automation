@sep14
Feature: Selecting a price plan

    As a customer, I want to be able to Choose a payment plan from the available options 
    so that I can choose the one that best suits my needs.

    #* AC1: When the user selects any payment plan (Accordion) that option should be highlighted to indicate selection.
    #* AC2: Upon selecting any pricing option, the 'Next' button should become active (indicating the user can proceed).
    #* AC3: Users should be able to change their plan selections at any time before finalizing their choice.

    Background:
        Given user is on the enrollment page
        And user has completed step one with valid information
        And user is on step two of the enrollment process

    @sep14-1
    Scenario: Verify that the next button will be activated when user selects upfront payment option
        When user clicks upfront payment option
        Then the upfront option should be highlighted to indicate selection

    @sep14-2
    Scenario: Verify that the next button will be activated when user selects installments payment option
        When user clicks installments payment option
        Then the installments option should be highlighted to indicate selection

    @sep14-3
    Scenario: Verify that the next button will be activated when user selects upfront payment option
        When user clicks upfront payment option
        Then the next button will be enabled

    @sep14-4
    Scenario: Verify that the next button will be activated when user selects installments payment option
        When user clicks installments payment option
        Then the next button will be enabled

    @sep14-5
    Scenario: Verify users should be able to change their plan selections at any time before finalizing their choice
        When user clicks installments payment option
        When user clicks next button
        Then user should be redirected to step three of the enrollment process
        When user clicks back button
        Then user is on step two of the enrollment process
        When user clicks upfront payment option
        When user clicks next button
        Then user should be redirected to step three of the enrollment process