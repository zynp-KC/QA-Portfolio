Feature: Product Catalog
    As a visitor
    I want to browse and filter products
    So that I can find the product I am looking for

    Scenario: View all products on homepage
        Given user is on the homepage
        When the page is loaded
        Then all products should be displayed

    Scenario: Filter products by category
        Given user is on the homepage
        When user clicks on a category filter
        Then only products from that category should be displayed
    
    Scenario: View product detail page
        Given user is on the homepage
        When user clicks on a product
        Then product details should be displayed
    
    Scenario: Previous button behavior on first page
        Given user is on the homepage
        When user clicks the Previous button on the first page
        Then the product list should remain unchanged