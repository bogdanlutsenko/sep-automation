@sep17
Feature: View payment plan options in Step 2   #! test only

    As a customer, I should be able to see payment plan options in Step 2.

    #* AC1: Upfront payment:
    #*      There should be only one upfront price
    #*      Text should be:
    #*              Upfront  (first row)
    #*              $ <upfont_price> pay once (second row)

    #* AC2: Installment plans:
    #*      There must be total <num> Payment Plans
    #*      There can be <number_of_installments> installments
    #*      If there are installments:
    #*            Text should be
    #*            <number_of_installments> Installments (first row)
    #*           $ <monthly_price> per month (second row)

    Background:
        Given user is on the enrollment page
        And user has completed step one with valid information
        And user is on step two of the enrollment process

    @sep17-1
    Scenario: Verify that the Upfront payment option is displayed correctly
        Then only one upfront payment option should be displayed
        And the text Upfront should be displayed along with the price   

    @sep17-2
    Scenario: Verify that the Installment payment option is displayed correctly
        Then there must be total "2" Payment Plans
        Then only one installment payment option should be displayed
        And the text 5 Installment should be displayed along with the price
