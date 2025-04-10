@sep08
Feature: Display the steps of the checkout process

    As a customer, I should be able to know where I am in the checkout process using the stepper.

    #* AC1: The system should display the steps of the checkout process as "1-Start Application", "2-Payment Plan", and "3-Review".
    #* AC2: The system should highlight "Start Application" in blue.
    #* AC3: The system should display "Payment Plan" and "Review" in grey.

    Background:
        Given user is on the enrollment page
     
    @sep08-1
    Scenario: Verify that system displays the steps of the checkout process as "1-Start Application", "2-Payment Plan", and "3-Review"
        Then the system should display the steps of the checkout process as "Start Application", "Payment plan", and "Review"

    @sep08-2
    Scenario: Verify that system highlights "Start Application" in blue
        Then the system should highlight Start Application in blue

    @sep08-3
    Scenario: system should display "Payment Plan" and "Review" in grey
        Then the system should display Payment Plan and Review in grey
