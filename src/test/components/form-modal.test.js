import React from 'react';
import { FormModal } from '../../components/layouts/jog-layout/form-modal/form-modal';
import renderer from 'react-test-renderer';

describe('FormModal Component', () => {
  it('sould match the last snapshot', () => {
      const handler = jest.fn();
      const jog = {
          distance: '15', 
          time: '15', 
          date: '20.02.2000'}
    const props = {
        show: false, 
        onHide: handler, 
        onSubmit: handler, 
        jogData: jog, 
        handleChange: handler
    }
    const wrapper = renderer.create(<FormModal {...props}/>)
    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});