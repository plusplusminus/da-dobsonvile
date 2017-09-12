import { configure } from '@storybook/react';
import { setOptions } from '@storybook/addon-options';

function loadStories() {
  require('../stories/index.js');
  // You can require as many stories as you need.
}

// Option defaults:
setOptions({
  name: 'Dobsonville',
  url: 'https://da.org.za',
})

configure(loadStories, module);
