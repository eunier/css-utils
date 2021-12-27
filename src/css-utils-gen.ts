import { writeFileSync } from 'fs';
import { format } from 'prettier';
import { range } from 'ramda';

// const hValues = range(1, 101)
//   .map(i => `.h-${i}rem { height: ${i}rem !important; }`)
//   .join('\r\n\r\n');

// const formattedHValues = format(hValues, { parser: 'css' });
const distRoot = `${__dirname.replace('\\src', '')}\\dist`;

const data = [
  [
    'css-utils-height.css',
    (() =>
      range(1, 101)
        .map(i => `.h-${i}rem { height: ${i}rem !important; }`)
        .join('\r\n\r\n'))(),
  ],
];

data.forEach(([fileName, val]) => {
  const formattedValues = format(val, { parser: 'css' });
  writeFileSync(`${distRoot}\\${fileName}`, formattedValues);
});

data.forEach(([fileName]) =>
  writeFileSync(`${distRoot}\\css-utils.css`, `@import '${fileName}';`)
);

/*
.forEach(([fileName, val]) => {
  const formattedValues = format(val, { parser: 'css' });
  writeFileSync(`${distRoot}\\${fileName}`, formattedValues);
});
*/

// const distRoot = `${__dirname.replace('\\src', '')}\\dist`;
// writeFileSync(`${distRoot}\\css-utils-height.css`, formattedHValues);
// writeFileSync(`${distRoot}\\css-utils.css`, "@import 'css-utils-height.css';");

// data.forea
