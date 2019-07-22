import React from 'react';

import RestaurantDetails from './RestaurantDetails';
import { createMountedComponent, sampleData } from '../../../utils/testUtils';

describe('<RestaurantDetails /> should', () => {
  const mountedComponent = createMountedComponent({
    children: <RestaurantDetails {...sampleData.restaurants[0]} />
  });

  it('render correctly according to props', () => {
    expect(mountedComponent.htmlRender()).toMatchSnapshot();
  })
});
