exports.config = {
  services: [
    [
      "lambdatest",
      {
        tunnel: false,
        lambdatestOpts: {
          logFile: "tunnel.log",
        },
      },
    ],
  ],
  user: process.env.LT_USERNAME,
  key: process.env.LT_ACCESS_KEY,
  buildName: "Webdriver  IO",
  specs: [
    "./tests/specs/single_test.js",
    "./tests/specs/test2.js",
    "./tests/specs/test3.js",
  ],
  exclude: [],

  capabilities: [
    {
      "LT:Options": {
        browserName: "chrome",
        version: "latest",
        name: "Test WebdriverIO Single",
        build: "WebDriver Selenium Sample",
      },
    },
  ],
  // beforeSession: function (config, capabilities, specs) {
  //   capabilities.name = specs[0].split(/(\\|\/)/g).pop() || undefined;
  // },
  logLevel: "info",
  coloredLogs: true,
  screenshotPath: "./errorShots/",
  waitforTimeout: 100000,
  connectionRetryTimeout: 90000,
  connectionRetryCount: 1,
  path: "/wd/hub",
  hostname: "hub.lambdatest.com",
  port: 80,
  framework: "mocha",
  mochaOpts: {
    ui: "bdd",
  },
};
