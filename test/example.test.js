const puppeteer = require('puppeteer')

describe('My First Puppeteer Test', () => {
  it('should launch the browser', async () => {
    const browser = await puppeteer.launch({
      headless: false,
      defaultViewport: null
    })
    const page = await browser.newPage()
    await page.goto('http://example.com')
    await page.waitForSelector('h1')
    await browser.close()
  })
})