import { defineConfig} from '@playwright/test';

export default defineConfig({
    testDir: './tests',

    fullyParallel: false,

    forbidOnly: !!process.env.CI,

    retries: process.env.CI ? 2 : 0,

    workers: 1,

    reporter: process.env.CI ? [['html'], ['list']] : 'list',

    use: {
        baseURL: 'https://restful-booker.herokuapp.com',
        extraHTTPHeaders: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
        },
    },
});