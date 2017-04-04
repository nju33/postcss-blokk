# PostCSS BLOKK

[![XO code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)](https://github.com/sindresorhus/xo)

BLOKK auto import.

## Install

```bash
yarn add -D <%=name%>
npm i -D <%=name%>
```

## Usage

```js
postcss([blokk])
```

## Example

### Input

```css
body {
  font-family: BLOKK;
}

.a {
  font: 16px / 1.5 BLOKK;
}
```

### Output

```css
@import url("https://blokkfont-losgordos.netdna-ssl.com/v2/blokkfont.css");

body {
  font-family: BLOKK;
}

.a {
  font: 16px / 1.5 BLOKK;
}
```

## Tip

If you get an `Access-Control-Allow-Origin` related error during development, you may want to install [https://chrome.google.com/webstore/detail/allow-control-allow-origi/nlfbmbojpeacfghkpbjhddihlkkiljbi/related](chrome-extension:allow-control-allow-origi)

## Related

- [http://www.blokkfont.com/](http://www.blokkfont.com/)

## License

The MIT License (MIT)

Copyright (c) 2017 nju33 <nju33.ki@gmail.com>
