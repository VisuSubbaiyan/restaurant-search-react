import React from 'react';

import Header from './Header';
import { createMountedComponent } from '../../utils/testUtils';

describe('<Header /> should', () => {
  const mountedComponent = createMountedComponent({
    children: <Header heading="sample Text" />
  });

  const heading = mountedComponent.find('h1');

  it('render correctly according to props', () => {
    expect(mountedComponent.htmlRender()).toMatchSnapshot();
    expect(heading).toHaveLength(1);
  })
});