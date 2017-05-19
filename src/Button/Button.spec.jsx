import React from 'react';
import Button from './Button';
import renderer from 'react-test-renderer';

test('Button changes the class when hovered', () => {
  const component = renderer.create(
    <Button>Button Text</Button>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  // manually trigger the callback
  tree.props.onMouseEnter();
  // re-rendering
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  // manually trigger the callback
  tree.props.onMouseLeave();
  // re-rendering
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
