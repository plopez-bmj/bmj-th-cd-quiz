{
"name": "bmj-th-cd-quiz",
"private": true,
"version": "0.0.0",
"description": "BMJ Town Hall - Continuous Delivery Quiz",
"repository": "https://github.com/plopez-bmj/bmj-th-cd-quiz",
"license": "MIT",
"devDependencies": {
"karma": "~0.10",
"protractor": "~0.20.1",
"http-server": "^0.6.1",
"shelljs": "^0.2.6",
"karma-junit-reporter": "^0.2.2"
},
"dependencies": {
"bower": "^1.3.1",
"http-server": "^0.6.1"
},
"scripts": {
"postinstall": "bower install",
"prestart": "npm install",
"start": "http-server ./app",
"pretest": "npm install",
"test": "karma start test/karma.conf.js",
"test-single-run": "karma start test/karma.conf.js --single-run",
"preupdate-webdriver": "npm install",
"update-webdriver": "webdriver-manager update",
"preprotractor": "npm run update-webdriver",
"protractor": "protractor test/protractor-conf.js"
}
}
