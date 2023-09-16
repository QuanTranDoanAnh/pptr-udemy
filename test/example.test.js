const puppeteer = require('puppeteer')

describe('My First Puppeteer Test', () => {
  it('should launch the browser', async () => {
    const browser = await puppeteer.launch({
      headless: false,
      defaultViewport: null,
      slowMo: 10, //slowdown for user to see effects
      devtools: false
    })
    const page = await browser.newPage()
    await page.goto('http://example.com')
    await new Promise(r => setTimeout(r, 3000)) // waitFor and waitForTimeout all deprecated
    await page.waitForSelector('h1')
    await browser.close()
  })
})