import React from 'react';
import ReactDOM from 'react-dom';
import TodoItem from './todoItem.tsx';
import enzyme, { mount } from 'enzyme';

it('renders without crashing', () => {
  const wrapper = mount(<TodoItem />)
});
