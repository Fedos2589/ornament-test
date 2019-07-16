import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import { initialState } from '../../reducers/recordsReducer';
import enzyme, { shallow } from 'enzyme';
import App from './App';

const mockStore = configureMockStore();
let store;
let component;

describe('content', () => {
  beforeEach(() => {
    store = mockStore({ records: initialState });
    component = shallow(<App store={store} />).shallow();
  });

  test('renders without crashing', () => {
    expect(component).toMatchSnapshot();
  });
});
