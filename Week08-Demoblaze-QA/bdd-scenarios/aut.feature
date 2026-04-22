Feature: Authentication
    As a user
    I want to be able to register and log in
    So that I can access my account and place orders

    # ---LOGIN---------------------------------------

    Scenario: Successful login with valid credentials
        Given user is on the login page
        When user enters valid username and password
        Then user should be redirected to homepage

    Scenario Outline: Login with invalid credentials
        Given user is on the login page
        When user enters "<username>" and "<password>"
        Then an error message should be displayed

        Examples:
            | username | password |
            | Admin    | wrong123 |
            |          | admin123 |
            | Admin    |          |
            |          |          |

    # ---SIGNUP--------------------------------------

    Scenario: Successful signup with valid credentials
        Given user is on the signup page
        When user enters a new username and password
        Then account should be created successfully

    Scenario: Signup with already registered username
        Given user is on the signup page
        When user enters an already registered username
        Then an error message should be displayed
    
    Scenario: Signup with empty fields
        Given user is on the signup page
        When user leaves username and password fields empty
        Then an error message should be displayed