import type { ChainablePromiseElement } from 'webdriverio';

export default class BasePage {

    async waitForElement(element: ChainablePromiseElement, timeout = 10000) {
        await element.waitForDisplayed({ timeout });
    }

    async click(element: ChainablePromiseElement) {
        await this.waitForElement(element);
        await element.click();
    }

    async setValue(element: ChainablePromiseElement, value: string) {
        await this.waitForElement(element);
        await element.click();
        await element.waitForEnabled();
        await element.clearValue();
        await element.setValue(value);
    }

    async swipe(direction: 'up' | 'down') {
    const { width, height } = await driver.getWindowSize();
    
    const startY = direction === 'up' ? height * 0.7 : height * 0.3;
    const endY = direction === 'up' ? height * 0.3 : height * 0.7;
    
    await driver.action('pointer')
        .move({ x: width / 2, y: height * 0.7 })
        .down()                                       
        .move({ x: width / 2, y: height * 0.3 })   
        .up()                                        
        .perform();
    }

}