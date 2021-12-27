import { writeFileSync } from 'fs';
import { range } from 'ramda';

const hValues = range(1, 101)
  .map(i => `.h-${i}rem { height: ${i}rem !important; }`)
  .join('\r\n\r\n');

const rootPath = __dirname.replace('\\src', '');
writeFileSync(`${rootPath}\\dist\\css-utils.css`, hValues);
