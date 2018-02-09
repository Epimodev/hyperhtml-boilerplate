// @flow
import { bind } from 'hyperhtml/esm';
import App from './App';

const appContainer = document.getElementById('app');
// eslint-disable-next-line no-unused-expressions
bind(appContainer)`${App()}`;
