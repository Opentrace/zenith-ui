import React from 'react';
import Dialog from './Dialog';
import renderer from 'react-test-renderer';

test('Dialog changes the class when hovered', () => {
  const component = renderer.create(
    <Dialog>Dialog Text</Dialog>
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
