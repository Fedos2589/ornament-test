import React from 'react';
import ReactDOM from 'react-dom';
import AddItem from './addItem.tsx';
import enzyme, { mount } from 'enzyme';

it('renders without crashing', () => {
  const wrapper = mount(<AddItem />)
});
