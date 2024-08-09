const report = require('multiple-cucumber-html-reporter');
const fs = require('fs');
const path = require('path');

const jsonFile = path.join(__dirname, 'report/json/log.json');
if (!fs.existsSync(jsonFile)) {
  console.error('JSON file not found:', jsonFile);
  process.exit(1);
}

report.generate({
  jsonDir: path.dirname(jsonFile),
  reportPath: path.join(__dirname, 'report/html'),
  metadata: {
    browser: {
      name: 'chrome',
      version: '60',
    },
    device: 'Local test machine',
    platform: {
      name: 'debian',
      version: '11',
    },
  },
  customData: {
    title: 'Test Report',
    data: [
      { label: 'Project', value: 'Test Project' },
      { label: 'Environment', value: 'Staging' },
    ],
  },
});
