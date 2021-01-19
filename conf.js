exports.config = {
    seleniumAddress: "http://127.0.0.1:4444/wd/hub",
    chromeOnly: true,
    directConnect: true,
  
    framework: "custom",
    frameworkPath: require.resolve("protractor-cucumber-framework"),
    specs: ["features/*.feature"],
  
    cucumberOpts: {
      require: ["features/step-definitions/*.js"],
      //format: 'pretty'
  },
  };