import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router, Link } from "react-router-dom";

import {CloverLinkedButton} from 'cloveruicomponents';

const secondary = "#272121";
const primary = "yellow";
const bgText = "#f6e9e9";
const positive = "#BAEDBF";
const negative = "#FCA6A6";

var myFixedTheme = {
    palette: {
    body: "#363333",
    text: bgText,
    primary,
    primaryText: bgText,
    secondary,
    secondaryText: secondary,
    inverse: bgText,
    inverseText: "#363333",
    positive,
    negative,
    dark: "rgb(54, 51, 51)"
    }
}

describe('CloverLinkedButton', () => {
  it('renders correctly with all properties set, size=large', () => {
    const tree = renderer
      .create(
      <Router>
          <CloverLinkedButton size="large" to="https://www.google.com/" useTheme={myFixedTheme}>next</CloverLinkedButton>
      </Router>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('CloverLinkedButton', () => {
it('renders correctly with all properties set, size=normal', () => {
    const tree = renderer
      .create(
      <Router>
          <CloverLinkedButton size="normal" to="https://www.google.com/" useTheme={myFixedTheme}>next</CloverLinkedButton>
      </Router>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('CloverLinkedButton', () => {
  it('renders correctly with only required properties set', () => {
    const tree = renderer
      .create(
        <Router>
            <CloverLinkedButton to="https://www.google.com/">Home</CloverLinkedButton>
        </Router>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('CloverToggleButton', () => {
  it('renders correctly with no title given', () => {
    const tree = renderer
      .create(<Router>
          <CloverLinkedButton to="https://www.google.com/"></CloverLinkedButton>
          </Router>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});