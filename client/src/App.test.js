import React from 'react';
import ReactDOM from 'react-dom';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import App from './App';
import Players from './components/Players';
import { useDarkMode } from './Hooks/useDarkMode';

test('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test('Title displayed', () => {
  const { getByTestId } = rtl.render(<App />);
  getByTestId("navbar-title");
})

test("toggle button is displayed", () => {
  const { getByTestId } = rtl.render(<App />);
  getByTestId("toggle");
});

test("Players displays all of the proper player information", () => {
  const player = {
    country: "USA", id: 127, name: "John smith", searches: 10,
  };
  const { country, id, name, searches } = player;
  const { getByTestId } = rtl.render(<Players country={country} id={id} name={name} searches={searches} />);

  const compName = getByTestId('player-name');
  rtl.getByText(compName, name);
  const compCountry = getByTestId('player-country');
  rtl.getByText(compCountry, country);
  const compId = getByTestId('player-id');
  rtl.getByText(compId, `ID: ${id}`);
  const compSearches = getByTestId('player-searches');
  rtl.getByText(compSearches, `Number of searches: ${searches}`);
});
