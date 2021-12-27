import { range } from 'ramda';

const hValues = range(1, 101).map(() => '.h-1rem {');

console.log(hValues.join('\n'));
