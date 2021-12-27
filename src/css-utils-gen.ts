import { range } from 'ramda';

const hValues = range(1, 101).map(
  i => `.h-${i}rem { height: ${i}rem !important; }`
);

console.log(hValues.join('\n'));
