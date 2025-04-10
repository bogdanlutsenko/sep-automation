@sep09
Feature: Display the product information

    As a customer, I should be able to see the product information.

    #* AC1: The product name should be displayed on the information card.
    #* AC2: The product name on the information card matches the product name on the left side of the screen.
    #* AC3: The price of the product should be displayed.
    #* AC4: The text indicating a flexible payment plan should be available and displayed.
    #* AC5: The program start date should be displayed.
    #* AC6: The return policy and the final date for returns should be displayed.

    Background:
        Given user is on the enrollment page

    @sep09-1
    Scenario: Verify product name should be displayed on the information card
        Then product name should be displayed on the information card

    @sep09-2
    Scenario: Verify product name on the information card matches the product name on the left side of the screen
        And product name on the information card matches the product name on the left side of the screen

    @sep09-3
    Scenario: Verify price of the product should be displayed
        Then the price of the product should be displayed

    @sep09-4
    Scenario: Verify text indicating a flexible payment plan should be available and displayed
        Then text indicating a flexible payment plan should be available and displayed

    @sep09-5
    Scenario: Verify program start date should be displayed
        Then the program start date is displayed

    @sep09-6
    Scenario: Verify return policy and the final date for returns should be displayed
        Then return policy and the final date for returns should be displayed