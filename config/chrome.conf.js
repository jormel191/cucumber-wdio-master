const {config} = require ( './web.wdio.conf.js');

config.capabilities = [
    {
        browserName: 'chrome',
    }
];

config.cucumberOpts.tagExpression = '@chrome';// pass tag to run tests specific to chrome

exports.config = config;