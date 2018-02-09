// @flow
import { wire } from 'hyperhtml/esm';
import Icon from 'src/components/Icon';
import checkmarkIcon from 'src/icons/checkmark.svg';
import style from './style.scss';

console.log(environment);

function App() {
  return wire()`
  <div class=${style.container}>
    Hello Hyper
    ${Icon({ className: style.icon, href: checkmarkIcon })}
  </div>`;
}

export default App;
