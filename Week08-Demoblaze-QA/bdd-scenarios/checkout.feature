Feature: Checkout
    As a registered user
    I want to place an order
    So that I can purchase the products in my cart

    Scenario: Successful order placement
        Given user has products in cart
        When user clicks "Place Order" and fills in all required fields
        Then a purchase confirmation message should be displayed

    Scenario: Place order with empty form
        Given user has products in cart
        When user clicks "Purchase" without filling in the form
        Then an error message should be displayed
    
    Scenario: Place order with invalid credit card
        Given user is on the cart page
        When user enters letters in the credit card field
        Then a warning message should be displayed
        # Note: Known bug — system accepts letters in credit card field

    Scenario: Place order with short credit card number
        Given user has products in cart
        When user enters a short credit card number (e.g. 1234)
        Then a warning message should be displayed
        # Note: Known bug — system accepts any length credit card number