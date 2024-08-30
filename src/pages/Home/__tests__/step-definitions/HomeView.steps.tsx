import React from "react";
import { mount, shallow } from "enzyme";
import { defineFeature, loadFeature } from "jest-cucumber";

import HomeController from "../../HomeController";
import HomeView from "../../HomeView";

const mockedProps = {};

const feature = loadFeature(
 "./src/pages/Home/__tests__/features/HomeView-scenario.feature"
);

defineFeature(feature, (test) => {
 test("HomeView renders HomeController", () => {
  const wrapper = shallow(<HomeView {...mockedProps} />);
  expect(wrapper.find(HomeController).exists()).toBe(true);
 });

 test("Displaying a list of Pokemon", ({ given, then }) => {
  let wrapper: any;

  given("I am on the Pokemon list page", () => {
   wrapper = mount(<HomeController />);
  });

  then("I should see a list of Pokemon with name bulbasaur", () => {
   const pokemonNames = wrapper.find("h2").map((node: any) => node.text());

   expect(pokemonNames).toContain("bulbasaur");
  });
 });
});
