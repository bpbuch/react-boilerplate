import React from "react";
import { shallow } from "enzyme";

import App from "../App";

let wrapper;

beforeEach(() => {
  wrapper = shallow(<App />);
});

it("should say 'Welcome to React!'", () => {
  expect(wrapper.find("h1").text()).toEqual("Welcome to React!");
});
