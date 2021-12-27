import { writeFileSync } from 'fs';
import { format } from 'prettier';
import { range } from 'ramda';

const heightValues = range(1, 101)
  .map(i => `.h-${i}rem { height: ${i}rem !important; }`)
  .join('\r\n\r\n');

const data = [['css-utils-height', heightValues]];

const distRoot = `${__dirname.replace('\\src', '')}\\dist`;

data.forEach(([fileName, val]) => {
  const formattedValues = format(val, { parser: 'css' });
  writeFileSync(`${distRoot}\\${fileName}.css`, formattedValues);
});

data.forEach(([fileName]) =>
  writeFileSync(`${distRoot}\\css-utils.css`, `@import '${fileName}.css';`)
);
