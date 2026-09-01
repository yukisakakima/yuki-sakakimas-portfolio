const fs = require('node:fs');
const path = require('node:path');

const rootDirectory = path.resolve(__dirname, '..');
const pagesDirectory = path.join(rootDirectory, 'pages');
const outputDirectory = path.join(rootDirectory, 'public');

const pages = {
  'index.html': 'index.html',
  'profile.html': 'profile.html',
  'works.html': 'works.html',
  'yuki_sakakimas_portfolio.html': 'yuki_sakakimas_portfolio.html',
  'quick_quill.html': 'quick_quill.html',
};

for (const [sourceName, outputName] of Object.entries(pages)) {
  const sourcePath = path.join(pagesDirectory, sourceName);
  const contents = fs.readFileSync(sourcePath, 'utf8');

  fs.writeFileSync(path.join(outputDirectory, outputName), contents);
}

console.log(`Generated ${Object.keys(pages).length} static HTML pages in public/.`);
