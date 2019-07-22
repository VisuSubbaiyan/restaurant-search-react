import React from 'react';

import RestaurantsList from './RestaurantsList';
import { createMountedComponent, mockFunction, sampleData } from '../../../utils/testUtils';

describe('<RestaurantsList /> should', () => {
  const mountedComponent = createMountedComponent({
    children: <RestaurantsList {...sampleData} onClick={mockFunction} />
  });

  it('render correctly according to props', () => {
    expect(mountedComponent.htmlRender()).toMatchSnapshot();
  })
});