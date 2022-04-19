import { createRoot } from 'react-dom/client';
import { act } from "react-dom/test-utils";
import { Provider } from 'react-redux';
import { store } from './store'
import App from './App';

globalThis.IS_REACT_ACT_ENVIRONMENT = true;

let container;
beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  document.body.removeChild(container);
  container = null;
});

it('App should render Header component', () => {
  act(() => {
    createRoot(container).render(<Provider store={store}><App /></Provider>);
  });

  expect(container.querySelector('Header').textContent).toEqual("Deezer App");
});