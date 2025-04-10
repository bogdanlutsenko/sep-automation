@sep19
Feature: Click on the next button on step 1

    As a customer, I should be able to click on the next button on step 1 when I give valid information.

    #* AC1: The next button should take customers to step 2 when given valid information.
    #*              a. Test by providing all fields
    #*              b. Test by providing only the required fields

    @sep19-1
    Scenario: Verify that next button should take customers to step 2 when given valid information
        Given user is on the enrollment page
        And user has completed step one with valid information
        Then user is on step two of the enrollment process