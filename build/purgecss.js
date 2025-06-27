const { PurgeCSS } = require('purgecss');
const fs = require('fs');
const path = require('path');

(async () => {
  const res = await new PurgeCSS().purge({
    content: ['./dist/isc-web-angular/**/*.html'],
    css: ['./dist/isc-web-angular/**/*.css'],
  });

  for (const { file, css } of res) {
    const originalSize = (await fs.promises.stat(file)).size / 1024;

    await fs.promises.writeFile(file, css);

    const newSize = Buffer.byteLength(css, 'utf8') / 1024;
    const saved = originalSize - newSize;

    const filename = path.basename(file);
    console.log(
      `${filename}: saved ${saved.toFixed(2)} KB (${originalSize.toFixed(2)} KB → ${newSize.toFixed(2)} KB)`
    );
  }
})();
