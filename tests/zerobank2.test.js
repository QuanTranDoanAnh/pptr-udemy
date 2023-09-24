const puppeteer = require('puppeteer')
const expect = require('chai').expect
const { click, shouldNotExist } = require('../lib/helpers')

describe('New Puppeteer Test with zero.webappsecurity.com', () => {
  it('should launch the browser for Simulation', async () => {
    const browser = await puppeteer.launch({
      headless: false,
      defaultViewport: null,
      slowMo: 10, //slowdown for user to see effects
      devtools: false
    })
    const page = await browser.newPage()
    await page.setDefaultTimeout(10000)
    await page.setDefaultNavigationTimeout(20000)
    
    await page.goto('http://zero.webappsecurity.com/index.html')
    //await page.waitForSelector('#signin_button')
    //await page.click('#signin_button')
    await click(page, '#signin_button')

    //longer way
    //await page.waitForFunction(() => !document.querySelector('#signin_button'))
    //await page.waitForSelector('#signin_button', { hidden: true, timeout: 3000 });
    await new Promise((resolve, reject) => setTimeout(resolve, 2000))
    await shouldNotExist(page, '#signin_button')
    await browser.close()
  })
})