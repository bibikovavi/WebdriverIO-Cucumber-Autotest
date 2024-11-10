Feature: Authorixation on website (negative testing)

  Scenario Outline: Authorization with invalid credetials
    Given User on the login page for negative test
    When User enters <invalidUsername> and <invalidPassword>
    When click log in button
    Then Error <message>

    Examples:
      | invalidUsername | invalidPassword | message                                                                   |
      | not_correct     | secret_sauce    | Epic sadface: Username and password do not match any user in this service |
      | standard_user   | not_correct     | Epic sadface: Username and password do not match any user in this service |
      |                 | secret_sauce    | Epic sadface: Username is required                                        |
      | standard_user   |                 | Epic sadface: Password is required                                        |
      | locked_out_user | secret_sauce    | Epic sadface: Sorry, this user has been locked out.                       |
