import React from 'react';
import Restaurants from './Restaurants';

import { createMountedComponent } from '../../utils/testUtils';

jest.mock('../../services/restaurantServices');


describe('<Restaurants /> should', () => {
  const mountedComponent = createMountedComponent({
    children: <Restaurants />
  });

  // Need to more cases but give sample test case with 
  it('load restaurants data and render correctly', (done) => {
    setTimeout(() => {
      expect(mountedComponent.htmlRender()).toMatchSnapshot();

      done();
    });
  })
});