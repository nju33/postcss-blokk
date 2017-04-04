import test from 'ava';
import postcss from 'postcss';
import blokk from '../..';

test('test', async t => {
  const result = await postcss([blokk]).process('body{font:8px / 1.5 BLOKK;}');
  t.regex(result, /^@import.+blokkfont.css"\)/);
});
