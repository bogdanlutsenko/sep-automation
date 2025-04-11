@sep07
Feature: View Product Landing Page

    As a customer, I should be able to see the product landing page.

    #* AC1: The system displays the text "Cydeo Secure Checkout".
    #* AC2: The system should display the program name.
    #* AC3: Users should see a footer on the left side of the page that includes by order: 
    #*      logo, Terms and Conditions, Privacy Policy, Disclaimer, Cookie Policy
    
    #* AC4: The system displays "Need help? Contact us at enrollment@cydeo.com" in the footer on the right.
    
    Background:
        Given user is on the enrollment page

    @sep07-1
    Scenario: The system displays the text - Secure Checkout
        Then the system displays the text "Secure checkout"

    @sep07-2
    Scenario: The system should display the program name - Test Automation with Selenium
        Then the system should display the program name "Test Automation with Selenium"

    @sep07-3
    Scenario: Users should see a footer on the left side of the page that includes by order: logo, Terms and Conditions, Privacy Policy, Disclaimer, Cookie Policy
        Then users should see a footer on the left side of the page

    @sep07-4
    Scenario: Users should see a footer on the right side of the page that includes "Need help? Contact us at enrollment@cydeo.com"
        Then users should see a footer on the right side of the page
