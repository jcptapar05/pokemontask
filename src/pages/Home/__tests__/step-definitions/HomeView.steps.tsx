import React from "react";
import { mount, shallow, ShallowWrapper } from "enzyme";
import { defineFeature, loadFeature } from "jest-cucumber";

import Home from "../../HomeView";

const feature = loadFeature(
 "./src/pages/BoilerplatePage/__tests__/features/ComponentView-scenario.feature"
);

defineFeature(feature, (test) => {
 test("Displaying a list of Pokémon", ({ given, then }) => {
  let wrapper: any;

  given("I am on the Pokémon list page", () => {
   const mockPokemons = [
    { name: "Pikachu" },
    { name: "Charmander" },
    { name: "Bulbasaur" },
   ];

   wrapper = mount(<Home />);
  });

  then(
   'I should see a list of Pokémon with names "Pikachu", "Charmander", and "Bulbasaur"',
   () => {
    const pokemonNames = wrapper
     .find(".pokemon-name")
     .map((node: any) => node.text());
    expect(pokemonNames).toEqual(["Pikachu", "Charmander", "Bulbasaur"]);
   }
  );
 });
});
