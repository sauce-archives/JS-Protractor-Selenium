// conf.js
// var HTTPSProxyAgent = require('https-proxy-agent');
// var sauceRestAgent = new HTTPSProxyAgent("http://<proxy>:<port>")

exports.config = {
    sauceUser: process.env.SAUCE_USERNAME,
    sauceKey: process.env.SAUCE_ACCESS_KEY,
    //restartBrowserBetweenTests: true,
    // sauceAgent: sauceRestAgent,

    // webDriverProxy: 'http://<proxy>:<port>',

    //seleniumAddress: 'http://ondemand.saucelabs.com:80/wd/hub',
    specs: ['specs/*spec.js'],

    // restartBrowserBetweenTests: true,

    onPrepare: function () {
        var caps = browser.getCapabilities()
    },

    multiCapabilities: [{
        browserName: 'firefox',
        version: 'latest',
        platform: 'OS X 10.10',
        name: "firefox-OSX",
        shardTestFiles: true,
        maxInstances: 25,
        build: 'firefox'
    }, {
        browserName: 'chrome',
        version: 'latest',
        platform: 'Windows 7',
        name: "chrome-win7",
        shardTestFiles: true,
        maxInstances: 25,
        'build': 'chrome'
    }, {
        browserName: 'safari',
        version: 'latest',
        platform: 'Windows 7',
        name: "safari-win7",
        shardTestFiles: true,
        maxInstances: 25
    }, {
        browserName: 'edge',
        version: 'latest',
        platform: 'Windows 7',
        name: "edge-win7",
        shardTestFiles: true,
        maxInstances: 25
    }, {
        browserName: 'chrome',
        version: 'latest',
        platform: 'Windows 10',
        name: "chrome-win10",
        shardTestFiles: true,
        maxInstances: 25
    }, {
        browserName: 'firefox',
        version: 'latest',
        platform: 'Windows 10',
        name: "firefox-win10",
        shardTestFiles: true,
        maxInstances: 25
    }, {
        browserName: 'edge',
        version: 'latest',
        platform: 'Windows 10',
        name: "edge-win10",
        shardTestFiles: true,
        maxInstances: 25
    }],
    jasmineNodeOpts: {
        showColors: true, // Use colors in the command line report.
    },
    onComplete: function () {

        var printSessionId = function (jobName) {
            browser.getSession().then(function (session) {
                console.log('SauceOnDemandSessionID=' + session.getId() + ' job-name=' + jobName);
            });
        }
        printSessionId(jobName);
    }
}
