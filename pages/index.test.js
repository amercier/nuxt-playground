import test from 'ava';
import { Nuxt, Builder } from 'nuxt';
import { exists } from 'fs';
import { resolve } from 'path';
import { promisify } from 'util';

// We keep a reference to Nuxt so we can close
// the server at the end of the test
let nuxt = null;

// Init Nuxt.js and start listening on localhost:4000
test.before('Init Nuxt.js', async () => {
  const rootDir = resolve(__dirname, '..');
  const configPath = resolve(rootDir, 'nuxt.config.js');
  const config = (await promisify(exists)(configPath))
    ? require(configPath) // eslint-disable-line import/no-dynamic-require, global-require
    : {};
  config.rootDir = rootDir; // project folder
  config.dev = false; // production build
  nuxt = new Nuxt(config);
  await new Builder(nuxt).build();
  nuxt.listen(4000, 'localhost');
});

// Example of testing only generated html
test('Route / exits and render HTML', async (t) => {
  const context = {};
  const { html } = await nuxt.renderRoute('/', context);
  t.true(html.includes('<h1 class="grey">Hello world!</h1>'));
});

// Example of testing via DOM checking
test('Route / exits and render HTML with CSS applied', async (t) => {
  const window = await nuxt.renderAndGetWindow('http://localhost:4000/');
  const element = window.document.querySelector('.grey');
  t.not(element, null);
  t.is(element.textContent, 'Hello world!');
  t.is(element.className, 'grey');
  t.is(window.getComputedStyle(element).color, 'rgb(51, 51, 51)');
});

// Close the Nuxt server
test.after('Closing server', () => {
  nuxt.close();
});
