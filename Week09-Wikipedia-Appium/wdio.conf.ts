export const config = {
    runner: 'local',
    hostname: '127.0.0.1',
    port: 4723,
    path: '/',

    specs: ['./tests/**/*.spec.ts'],
    maxInstances: 1,

    waitforTimeout: 10000,
    connectionRetryTimeout: 30000,
    connectionRetryCount: 3,

    capabilities: [{
        platformName: 'Android',
        'appium:deviceName': 'RF8R200202M',
        'appium:platformVersion': '12',
        'appium:automationName': 'UiAutomator2',
        'appium:app': 'C:\\Users\\ASUS\\Downloads\\app-alpha-universal-release.apk',
        'appium:appPackage': 'org.wikipedia.alpha',
        'appium:appActivity': 'org.wikipedia.main.MainActivity',
        'appium:noReset': true,
    }],

    framework: 'mocha',
    mochaOpts: {
        timeout: 60000
    },

    autoCompileOpts: {
        autoCompile: true,
        tsNodeOpts: {
            transpileOnly: true,
            project: './tsconfig.json'
        }
    },

    reporters: ['spec'],
};