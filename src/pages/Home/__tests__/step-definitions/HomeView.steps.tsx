import React from "react";
import { mount } from "enzyme";
import { defineFeature, loadFeature } from "jest-cucumber";

import HomeView from "../../HomeView";

const feature = loadFeature(
 "./src/pages/Home/__tests__/features/HomeView-scenario.feature"
);

defineFeature(feature, (test) => {
 test("Displaying a list of Pokemon", ({ given, then }) => {
  let wrapper: any;

  given("I am on the Pokemon list page", () => {
   wrapper = mount(<HomeView />);
  });

  then(
   "I should see a list of Pokemon with names charmander and bulbasaur",
   () => {
    const pokemonNames = wrapper
     .find(".pokemon-name")
     .map((node: any) => node.text());
    expect(pokemonNames).toEqual(["charmander", "bulbasaur"]);
   }
  );
 });
});
