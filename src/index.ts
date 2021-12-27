import { writeFileSync } from 'fs';
import { format } from 'prettier';
import { range } from 'ramda';

const genFontSizeValues = () =>
  range(1, 101)
    .map(i => `.fs-${i}rem { font-size: ${i}rem !important; }`)
    .join('\r\n\r\n');

const genHeightValues = () =>
  range(1, 101)
    .map(i => `.h-${i}rem { height: ${i}rem !important; }`)
    .join('\r\n\r\n');

const genWidthValues = () =>
  range(1, 101)
    .map(i => `.w-${i}rem { width: ${i}rem !important; }`)
    .join('\r\n\r\n');

const data: [string, () => string][] = [
  ['css-utils-font-size.css', genFontSizeValues],
  ['css-utils-height.css', genHeightValues],
  ['css-utils-width.css', genWidthValues],
];

const distRoot = `${__dirname.replace('\\src', '')}\\dist`;

data.forEach(([fileName, genVal]) => {
  const val = genVal();
  const formattedValues = format(val, { parser: 'css' });
  writeFileSync(`${distRoot}\\${fileName}`, formattedValues);
});

const cssImports = data
  .map(([fineName]) => `@import '${fineName}';`)
  .join('\r\n');

writeFileSync(`${distRoot}\\css-utils.css`, cssImports);
