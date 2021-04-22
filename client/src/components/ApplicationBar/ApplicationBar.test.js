import React from 'react';
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import { ApplicationBar } from './ApplicationBar';

configure({ adapter: new Adapter() });

it("renders without crashing", () => {
  shallow(<ApplicationBar />);
});

it("renders ApplicationBar with passed title", () => {
  const wrapper = shallow(<ApplicationBar title="TestTitle" user= {{first: 'Firstname', last: 'LastName'}}/>);
  const checkText = 'TestTitle';
  expect(wrapper.contains(checkText)).toEqual(true);
});

it("renders ApplicationBar, if user is passed, first name and last name should show, but not login button", () => {
  const wrapper = shallow(<ApplicationBar title="TestTitle" user= {{first: 'Firstname', last: 'LastName'}}/>);
  const checkTextFirst = 'Firstname';
  expect(wrapper.contains(checkTextFirst)).toEqual(true);
  const checkTextLast = 'LastName';
  expect(wrapper.contains(checkTextLast)).toEqual(true);
  expect(wrapper.contains('Login')).toEqual(false);
});