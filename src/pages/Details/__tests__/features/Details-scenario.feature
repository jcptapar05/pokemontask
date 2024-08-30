Feature: Pokémon Details Page

  Scenario: Displaying details of a Pokémon
    Given I am on the Pokémon details page for "Pikachu"
    Then I should see the Pokémon's name "Pikachu"
    And I should see the Pokémon's type "Electric"
