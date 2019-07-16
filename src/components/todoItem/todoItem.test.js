import React from 'react';
import ReactDOM from 'react-dom';
import TodoItem from './todoItem.tsx';
import { Create, DeleteSweep } from '@material-ui/icons';
import Input from '@material-ui/core/Input';
import enzyme, { mount } from 'enzyme';

const record = { text: 'sdfbg', done: true, index: 0};
const deleteRecord = jest.fn();
const updateRecord = jest.fn();

describe('content', () => {
  test('renders without crashing', () => {
    const component = mount(<TodoItem />);
    expect(component).toMatchSnapshot();
  });

  test('should render Input on update button click', () => {
    const component = mount(
      <TodoItem {...record} deleteRecord={ deleteRecord } updateRecord={ updateRecord } />
    );

    expect(component.find(Input)).toHaveLength(0);
    component.find(Create).simulate('click');
    expect(component.find(Input)).toHaveLength(1);
  });

  test('should call deleteRecord handler', () => {
    const component = mount(
      <TodoItem {...record} deleteRecord={ deleteRecord } updateRecord={ updateRecord } />
    );

    component.find(DeleteSweep).simulate('click');
    expect(deleteRecord).toHaveBeenCalled();
  });
});
