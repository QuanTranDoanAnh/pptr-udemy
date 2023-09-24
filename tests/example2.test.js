const puppeteer = require('puppeteer')
const expect = require('chai').expect
const { getText, getCount } = require('../lib/helpers')

describe('New Puppeteer Test with Example.com', () => {
  it('should launch the browser for new test', async () => {
    const browser = await puppeteer.launch({
      headless: false,
      defaultViewport: null,
      slowMo: 10, //slowdown for user to see effects
      devtools: false
    })
    const page = await browser.newPage()
    await page.setDefaultTimeout(10000)
    await page.setDefaultNavigationTimeout(20000)
    
    await page.goto('http://example.com')
    await page.waitForXPath('//h1')
    const title = await page.title()
    const url = await page.url()
    //const text = await page.$eval('h1', el => el.textContent)
    //const count = await page.$$eval('p', element => element.length)
    const text = await getText(page, 'h1')
    const count = await getCount(page, 'p')
    
    expect(title).to.be.a('string', 'Example Domain')
    expect(url).to.include('example.com')
    expect(text).to.be.a('string', 'Example Domain')
    expect(count).to.equal(2)
    await browser.close()
  })
})