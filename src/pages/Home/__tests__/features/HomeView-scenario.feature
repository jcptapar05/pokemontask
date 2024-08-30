Feature: Pokémon List Page

  Scenario: Displaying a list of Pokémon
    Given I am on the Pokémon list page
    Then I should see a list of Pokémon with names "Pikachu", "Charmander", and "Bulbasaur"