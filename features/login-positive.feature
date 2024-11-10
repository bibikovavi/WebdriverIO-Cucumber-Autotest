Feature: Authorization on website (positive testing)

  Scenario Outline: Authorization with valid credetials
    Given User is on the login page for positive test
    When User enters <validUsername> and <validPassword>
    When clicks login button
    Then User logs in

    Examples:
      | validUsername           | validPassword |
      | standard_user           | secret_sauce  |
      | problem_user            | secret_sauce  |
      | performance_glitch_user | secret_sauce  |
      | error_user              | secret_sauce  |
      | visual_user             | secret_sauce  |
