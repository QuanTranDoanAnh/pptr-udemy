module.exports = {
  click: async (page, selector) => {
    try {
      await page.waitForSelector(selector)
      await page.click(selector)
    } catch (error) {
      throw new Error(`Could not click on selector: ${selector}`)
    }
  },
  getText: async (page, selector) => {
    try {
      await page.waitForSelector(selector)
      return await page.$eval(selector, element => element.innerHTML)
    } catch (error) {
      throw new Error(`Could not get text from the selector: ${selector}`)
    }
  },
  getCount: async (page, selector) => {
    try {
      await page.waitForSelector(selector)
      return await page.$$eval(selector, element => element.length)
    } catch (error) {
      throw new Error(`Could not get count of the selector: ${selector}`)
    }
  },
  typeText: async (page, selector, text) => {
    try {
      await page.waitForSelector(selector)
      await page.type(selector, text)
    } catch (error) {
      throw new Error(`Could not type text into the selector: ${selector}`)
    }
  },
  waitForText: async (page, selector, text) => {
    try {
      await page.waitForSelector(selector)
      await page.waitForFunction((selector, text) => {
        document.querySelector(selector).innerText.includes(text),
        {},
        selector,
        text
      })
    } catch (error) {
      throw new Error(`Text: ${text} not found for the selector: ${selector}`)
    }
  },
  shouldNotExist: async (page, selector) => {
    try {
      // this method is correct
      //await page.waitForFunction((selector) => !document.querySelector(selector), {}, selector)
      // but this method is better
      await page.waitForSelector(selector, { hidden: true, timeout: 3000 })
    } catch (error) {
      throw new Error(`Selector: ${selector} is visible, but it should not be.`)
    }
  },
}