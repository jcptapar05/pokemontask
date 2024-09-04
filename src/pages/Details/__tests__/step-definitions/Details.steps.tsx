import { shallow, ShallowWrapper } from "enzyme";
import { defineFeature, loadFeature } from "jest-cucumber";
import DetailsView from "../../DetailsView";

const mockedProps = {};

const feature = loadFeature(
 "./src/pages/Details/__tests__/features/Details-scenario.feature"
);

defineFeature(feature, (test) => {
 let DetailsViewWrapper: ShallowWrapper;

 beforeEach(() => {
  jest.resetModules();
 });

 test("DetailsView", ({ given, when, then }) => {
  given("I am on the DetailsView page", () => {
   DetailsViewWrapper = shallow(<DetailsView {...mockedProps} />);
   DetailsViewWrapper.setState({
    loading: false,
    // details: {
    //  abilities: [{ ability: { name: "overgrow" } }],
    //  types: [{ type: { name: "grass" } }],
    //  stats: [{ stat: { name: "speed" }, base_stat: 45 }],
    // },
   });
   DetailsViewWrapper.update();
  });

  then("User will see the Pokémon's ability", () => {
   const ability = DetailsViewWrapper.find(".ability").first();
   expect(ability.text()).toBe("Ability");
  });

  then("User will see the Pokémon's types", () => {
   const types = DetailsViewWrapper.find(".types").first();
   expect(types.text()).toBe("Types");
  });

  then("User will see the Pokémon's stats", () => {
   const stats = DetailsViewWrapper.find(".stats").first();
   expect(stats.text()).toBe("Stats");
  });
 });
});
