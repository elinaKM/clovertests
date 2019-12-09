import React from 'react';
import renderer from 'react-test-renderer';

import {CloverToggleButton} from 'cloveruicomponents';

describe('CloverToggleButton', () => {

  var handler = () => {
    console.log("I was pressed!");
  }
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

  it('renders correctly with all properties set', () => {
    const tree = renderer
      .create(
        <CloverToggleButton 
          clickHandler={handler} 
          sizeOfFont="40px" 
          useTheme={myFixedTheme}>Roll
        </CloverToggleButton>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('CloverToggleButton', () => {
  it('renders correctly with no properties set', () => {
    const tree = renderer
      .create(<CloverToggleButton>Roll</CloverToggleButton>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('CloverToggleButton', () => {
  it('renders correctly with no title given', () => {
    const tree = renderer
      .create(<CloverToggleButton></CloverToggleButton>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});