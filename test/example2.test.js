const puppeteer = require('puppeteer')

describe('New Puppeteer Test with Example.com', () => {
  it('should launch the browser for new test', async () => {
    const browser = await puppeteer.launch({
      headless: false,
      defaultViewport: null,
      slowMo: 250, //slowdown for user to see effects
      devtools: false
    })
    const page = await browser.newPage()
    await page.goto('http://example.com')
    const title = await page.title()
    const url = await page.url()
    await browser.close()
  })
})