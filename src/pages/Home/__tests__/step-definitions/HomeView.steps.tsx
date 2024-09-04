/* eslint-disable jest/no-mocks-import */
import React from "react";
import { mount, shallow } from "enzyme";
import { defineFeature, loadFeature } from "jest-cucumber";
import HomeView from "../../HomeView";
import "../../../../__mocks__/intersectionObserverMock";
import { MemoryRouter } from "react-router-dom";
import PokemonCard from "../../../../components/PokemonCard";

const mockedProps = {};

const feature = loadFeature(
 "./src/pages/Home/__tests__/features/HomeView-scenario.feature"
);

defineFeature(feature, (test) => {
 let wrapper: any;

 test("Displaying a list of Pokemon", ({ given, then }) => {
  given("I am on the Pokemon list page", () => {
   wrapper = mount(
    <MemoryRouter>
     <HomeView {...mockedProps} />
    </MemoryRouter>
   );

   wrapper.setState({
    loading: false,
    // lists: [
    //  { name: "bulbasaur", id: 1 },
    //  { name: "ivysaur", id: 2 },
    // ],
   });

   wrapper.update();
  });

  then("I should see a load more button", () => {
   const loadMore = wrapper.find("#loadmore").first();
   expect(loadMore.text()).toContain("Load More");
  });

  then("I should see a list of Pokemon with name bulbasaur", () => {
   const pokemonNames = shallow(
    <PokemonCard
     name="bulbasaur"
     id={1}
    />
   );
   const heading = pokemonNames.find(".pokemon-name").first().text();
   expect(heading).toBe("bulbasaur");
  });
 });
});
