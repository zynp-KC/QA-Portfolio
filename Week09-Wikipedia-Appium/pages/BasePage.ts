import type { ChainablePromiseElement } from 'webdriverio';

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
        await element.waitForEnabled();
        await element.clearValue();
        await element.setValue(value);
    }

    async swipeUp() {
    const { width, height } = await driver.getWindowSize();

    await driver.action('pointer')
        .move({ x: width / 2, y: height * 0.7 })
        .down()                                       
        .move({ x: width / 2, y: height * 0.3 })   
        .up()                                        
        .perform();
    }

}