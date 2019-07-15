import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import { initialState } from '../../reducers/recordsReducer';
import enzyme, { mount } from 'enzyme';

const mockStore = configureMockStore();
const store = mockStore({ records: initialState });

it('renders without crashing', () => {
  const wrapper = mount(<Provider store={ store }><App /></Provider>)
});
