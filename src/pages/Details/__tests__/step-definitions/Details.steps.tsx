import { shallow, ShallowWrapper } from "enzyme";
import { defineFeature, loadFeature } from "jest-cucumber";
import DetailsView from "../../DetailsView";
import DetailsController from "../../DetailsController";

const mockMatch = {
 params: { name: "charmander" },
 isExact: true,
 path: "/:name",
 url: "/charmander",
};

const screenProps = {
 match: mockMatch,
 location: {},
 history: {},
};

const mockedProps = {};

const feature = loadFeature(
 "./src/pages/Details/__tests__/features/Details-scenario.feature"
);

defineFeature(feature, (test) => {
 beforeEach(() => {
  jest.resetModules();
 });

 test("DetailsView renders DetailsController", () => {
  const wrapper = shallow(<DetailsView {...mockedProps} />);
  expect(wrapper.find(DetailsController).exists()).toBe(true);
 });

 test("User navigates to DetailsController", ({ given, when, then }) => {
  let DetailsControllerWrapper: ShallowWrapper;
  let instance: DetailsController;

  given("User loading DetailsController Page", () => {
   DetailsControllerWrapper = shallow(<DetailsController {...screenProps} />);
  });

  when("User successfully loads DetailsController Page", () => {
   instance = DetailsControllerWrapper.instance() as DetailsController;
  });

  then("User will see an pokemon ability, types and stats", () => {
   const ability = DetailsControllerWrapper.find(".ability");
   expect(ability.text()).toBe("Ability");

   const types = DetailsControllerWrapper.find(".types");
   expect(types.text()).toBe("Types");

   const stats = DetailsControllerWrapper.find(".stats");
   expect(stats.text()).toBe("Stats");
  });
 });
});
