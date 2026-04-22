Feature: Cart
    As a registered user
    I want to manage my shopping Cart
    So that I can review and purchase products

    Scenario: Add product to cart
        Given user is logged in
        When user clicks "Add to cart"
        Then product should be added to cart successfully

    Scenario: View cart
        Given user has added products to cart
        When user navigates to cart page
        Then all added products should be displayed
    
    Scenario: Remove product from cart
        Given user has products in cart
        When user clicks delete on a product
        Then product should be removed from cart

    Scenario: Add product to cart without login
        Given user is not logged in
        When user clicks "Add to cart" on a product
        Then user should be prompted to log in

        # Note: Known bug — guest users can add to cart
        # and complete checkout without authentication