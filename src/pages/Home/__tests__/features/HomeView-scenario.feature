Feature: Pokemon List Page

  Scenario: Displaying a list of Pokemon
    Given I am on the Pokemon list page
    Then I should see a load more button
    Then I should see a list of Pokemon with name bulbasaur