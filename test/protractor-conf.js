exports.config = {
  allScriptsTimeout: 11000,

  specs: [
    'e2e/*.js'
  ],

  seleniumAddress: 'http://scup.internal.bmjgroup.com:4444/wd/hub/',

  capabilities: {
    'browserName': 'chrome'
  },

  //baseUrl: 'http://bmj-th-cd-quiz-test.herokuapp.com',
  baseUrl: 'http://townhall2014test-env.elasticbeanstalk.com',

  framework: 'jasmine',

  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000
  }
};
