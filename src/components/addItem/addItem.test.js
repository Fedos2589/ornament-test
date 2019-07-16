import React from 'react';
import ReactDOM from 'react-dom';
import AddItem from './addItem.tsx';
import { Fab } from '@material-ui/core';
import enzyme, { mount } from 'enzyme';

describe('content', () => {
  test('renders without crashing', () => {
    const component = mount(<AddItem />);
    expect(component).toMatchSnapshot();
  });

  test('should call addRecord handler', () => {
    const onClick = jest.fn();
    const component = mount(<AddItem addRecord={ onClick } />);

    (component.find(Fab)).simulate('click');
    expect(onClick).toHaveBeenCalled();
  });
});
