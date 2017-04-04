import postcss from 'postcss';

const defaultOpts = {
  fontName: 'BLOKK',
  targets: ['font', 'font-family']
};

export default postcss.plugin('postcss-blokk', (opts = defaultOpts) => {
  opts = Object.assign({}, defaultOpts, opts);

  const atRule = postcss.atRule({
    name: 'import',
    params: 'url("https://blokkfont-losgordos.netdna-ssl.com/v2/blokkfont.css")'
  });
  const reFontName = new RegExp(opts.fontName);
  const reTragets = new RegExp(opts.targets.join('|'));

  return root => {
    let found = false;
    root.walkDecls(reTragets, decl => {
      if (found) {
        return;
      }

      if (reFontName.test(decl.value)) {
        found = true;
        const parent = decl.parent;
        parent.parent.insertBefore(parent, atRule);
      }
    });
  };
});
