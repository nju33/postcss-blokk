import fs from 'fs';
import postcss from 'postcss';
import blokk from '..';

const css = fs.readFileSync(`${__dirname}/example.css`, 'utf-8');

postcss([blokk])
  .process(css)
  .then(result => {
    console.log(result.css);
    fs.writeFileSync(`${__dirname}/index.css`, result.css, 'utf-8');
  });
