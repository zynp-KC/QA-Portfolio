// TODO: Replace 'any' with proper WebdriverIO element type
// when @wdio/globals types are fully resolved for this version
export default class BasePage {

    async waitForElement(element: any, timeout = 10000) {
        await element.waitForDisplayed({ timeout });
    }

    async click(element: any) {
        await this.waitForElement(element);
        await element.click();
    }

    async setValue(element: any, value: string) {
        await this.waitForElement(element);
        await element.click();
        await element.setValue(value);
    }

}