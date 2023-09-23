const puppeteer = require('puppeteer')
const expect = require('chai').expect

describe('New Puppeteer Test with zero.webappsecurity.com', () => {
  it('should launch the browser for Simulation', async () => {
    const browser = await puppeteer.launch({
      headless: false,
      defaultViewport: null,
      slowMo: 250, //slowdown for user to see effects
      devtools: false
    })
    const page = await browser.newPage()
    await page.setDefaultTimeout(10000)
    await page.setDefaultNavigationTimeout(20000)
    
    await page.goto('http://zero.webappsecurity.com/index.html')
    await page.waitForSelector('#searchTerm')
    await page.type('#searchTerm', 'Hello World')
    await page.keyboard.press('Enter', { delay: 10 })
    await new Promise(r => setTimeout(r, 5000))
    
    await browser.close()
  })
})