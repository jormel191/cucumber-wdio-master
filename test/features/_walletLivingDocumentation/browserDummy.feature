Feature: Dummy browser test

  @chrome
  Scenario: browser test
    Given I am on the site
    When I wan to register a user
    Then I validate the user was registered
    