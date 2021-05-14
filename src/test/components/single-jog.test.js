import React from 'react';
import { SingleJog } from '../../components/layouts/jog-layout/single-jog/single-jog';
import renderer from 'react-test-renderer';

describe('SingleJog component', () => {
  it('sould match the last snapshot without jog', () => {
    const wrapper = renderer.create(<SingleJog />)
    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('sould match the last snapshot with jog', () => {
    const jog = {
     date: '20.02.2020', 
     distance: '20', 
     time: '20'
    }
    const wrapper = renderer.create(<SingleJog jog={jog}/>)
    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});