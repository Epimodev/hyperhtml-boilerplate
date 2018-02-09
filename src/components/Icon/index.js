// @flow
import { wire } from 'hyperhtml/esm';

type Props = {
  href: string,
  className?: string,
}

function Icon(props: Props) {
  return wire(props, 'svg')`
  <svg class=${props.className}>
    <use xlink:href=${props.href} />
  </svg>`;
}

export default Icon;
