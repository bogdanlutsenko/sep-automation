@sep10
Feature: Enter my Personal details

    As a customer, I should be able to enter my Personal details.

    #* AC1: Default field types and values should be as follows:
    #*          a. First Name: Text field is present.
    #*          b. Last Name: Text field is present.
    #*          c. Email Address: Text field is present and validates for email format.
    #*          d. Phone: The field allows numbers only.

    #* AC2: "How did you hear about us?" A standard dropdown list is present.
    #* AC3: The 'Next' button should be disabled if any required data is missing or invalid.

    Background:
        Given user is on the enrollment page

    @sep10-1
    Scenario: Verify efault field types and values
        Then First Name text field is present
        And Last Name text field is present
        And user completes step one with invalid email and verifies that it stays on the same page after clicking next button
        And user completes step one with invalid phone number and verifies that it stays on the same page after clicking next button

    @sep10-2
    Scenario: How did you hear about us? A standard dropdown list is present
        Then How did you hear about us dropdown list is present

    @sep10-3
    Scenario: Next button should be disabled if any required data is missing or invalid
    Then user completes step one with invalid email and verifies that it stays on the same page after clicking next button

        
