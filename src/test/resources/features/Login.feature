Feature: Testing sign in functionality

  Scenario Outline: Valid login
    Given User opens the web application
    When Submits the "<username>" and "<password>"
    Then Login successful message should be displayed

    Examples:
      | username | password |
      | admin    | admin    |

  Scenario Outline: Invalid login
    Given User opens the web application
    When Submits the "<username>" and "<password>"
    Then Login unsuccessful message should be displayed

    Examples:
      | username | password |
      | abc      | abc      |