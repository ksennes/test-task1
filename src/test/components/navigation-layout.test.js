import React from 'react';
import { NavigationLayout } from '../../components/layouts/navigation-layout/navigation-layout';
import renderer from 'react-test-renderer';

describe('NavigationLayout component', () => {
  it('sould match the last snapshot without props', () => {
    const wrapper = renderer.create(<NavigationLayout />)
    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('sould match the last snapshot with isLogged prop', () => {
    const props = {
        isLogged: false, 
    }
    const wrapper = renderer.create(<NavigationLayout props={props}/>)
    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('sould match the last snapshot with props', () => {
    const handler = jest.fn();
    const props = {
        isLogged: false, 
        activeLink: '/jogs', 
        isFilterOpen: false, 
        handleFilter: handler
    }
    const wrapper = renderer.create(<NavigationLayout props={props}/>)
    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});