import { configure } from '@storybook/react';
import { setOptions } from '@storybook/addon-options';
import { setDefaults } from '@storybook/addon-info';

function loadStories() {
  require('../stories/index.js');
}

// addon-options defaults:
setOptions({
  name: 'Dobsonville',
  url: 'https://da.org.za',
})
configure(loadStories, module);


// addon-info
setDefaults({
  header: false, // Toggles display of header with component name and description
  inline: true, // Displays info inline vs click button to view
});
