Feature: User Registration and Login

    I want to register a new user on demo.casino web site
    and also be able to perform a success login with a valid account.

    Background: Background name: Load home page
        Given I navigate to demo.casino web site
        When I can see the Welcome message
        Then I close the Welcome message card

    Scenario Outline: Register a new user
        Given I click on Sing Up button
        When I type my email "<email>" and password "<password>"
        And I select my rather currency "<currency>"
        Then I complete the registration form
        And I select the Create Account button
        Then I can see a successful registration message: "<successRegMessage>"
        Examples:
            | email                | password  | currency | successRegMessage                                                      |
            | testmail01@gmail.com | pa$Test01 | EUR      | Registration successfully finished! Confirmation has been sent to you. |

    Scenario Outline: Log in with valid user
        Given I click on Sign in button
        When I select Log in with email
        Then I set a valid email "<email>" and password "<password>"
        And I Sing in
        Then I can see my profile information including my username: "<username>"
        Examples:
            | email           | password | username    |
            | test1@gmail.com | Abcde$23 | pedro_giron |