import { writeFileSync } from 'fs';
import { format } from 'prettier';
import { range } from 'ramda';

const heightValues = range(1, 101)
  .map(i => `.h-${i}rem { height: ${i}rem !important; }`)
  .join('\r\n\r\n');

const widthValues = range(1, 101)
  .map(i => `.w-${i}rem { width: ${i}rem !important; }`)
  .join('\r\n\r\n');

const data = [
  ['css-utils-height.css', heightValues],
  ['css-utils-width.css', widthValues],
];

const distRoot = `${__dirname.replace('\\src', '')}\\dist`;

data.forEach(([fileName, val]) => {
  const formattedValues = format(val, { parser: 'css' });
  writeFileSync(`${distRoot}\\${fileName}`, formattedValues);
});

const cssImports = data
  .map(([fineName]) => `@import '${fineName}';`)
  .join('\r\n');

writeFileSync(`${distRoot}\\css-utils.css`, cssImports);
