const puppeteer = require('puppeteer')

describe('My First Puppeteer Test', () => {
  let browser
  let page

  before(async () => {
    browser = await puppeteer.launch({
      headless: false,
      defaultViewport: null,
      slowMo: 10, //slowdown for user to see effects
      devtools: false
    })
    page = await browser.newPage()
    await page.setDefaultTimeout(10000)
    await page.setDefaultNavigationTimeout(20000)
  })

  after(async () => {
    await browser.close()
  })

  beforeEach(async () => {
    // Runs before each test step
  })

  afterEach(async () => {
    // Runs after each test step
  })

  it('should launch the browser', async () => {
    // const browser = await puppeteer.launch({
    //   headless: false,
    //   defaultViewport: null,
    //   slowMo: 250, //slowdown for user to see effects
    //   devtools: false
    // })
    // const page = await browser.newPage()
    // await page.setDefaultTimeout(10000)
    // await page.setDefaultNavigationTimeout(20000)
    await page.goto('http://example.com')
    await page.waitForSelector('h1')
    await page.goto('https://dev.to')
    await page.waitForSelector('#topbar')
    await page.goBack()
    await page.waitForSelector('h1')
    await page.goForward()
    await page.waitForSelector('#topbar')
    // await browser.close()
  })
})