import { mount, shallow, ShallowWrapper } from "enzyme";
import { defineFeature, loadFeature } from "jest-cucumber";

import Details from "../../DetailsView";
import { MemoryRouter, Route } from "react-router-dom";

const feature = loadFeature(
 "./src/pages/Details/__tests__/features/Details-scenario.feature"
);

defineFeature(feature, (test) => {
 test("Displaying details of a Pokémon", ({ given, then }) => {
  let wrapper: any;

  given('I am on the Pokémon details page for "Pikachu"', () => {
   wrapper = mount(
    <MemoryRouter initialEntries={["/pikachu"]}>
     <Route path="/:id">
      <Details />
     </Route>
    </MemoryRouter>
   );
  });

  then('I should see the Pokémon\'s name "Pikachu"', () => {
   expect(wrapper.find("h1").text()).toContain("Pikachu");
  });

  then('I should see the Pokémon\'s type "Electric"', () => {
   expect(wrapper.find(".pokemon-type").text()).toContain("Electric");
  });
 });
});
