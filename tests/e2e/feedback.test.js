const { expect } = require('chai')
const puppeteer = require('puppeteer')

describe('Feddback Test', () => {
  let browser
  let page

  before(async () => {
    browser = await puppeteer.launch({
      headless: true,
      slowMo: 0,
      devtools: false
    })
    page = await browser.newPage()
    await page.setDefaultTimeout(10000)
    await page.setDefaultNavigationTimeout(20000)
  })

  after(async () => {
    await browser.close()
  })

  it('Display Feedback Form', async () => {
    await page.goto('http://zero.webappsecurity.com/index.html')
    await page.waitForSelector('#feedback')
    await page.click('#feedback')
  })

  it('Submit Feedback Form', async () => {
    //await page.goto('http://zero.webappsecurity.com/index.html')
    await page.waitForSelector('form')
    await page.type('#name', 'Name')
    await page.type('#email', 'test@email.com')
    await page.type('#subject', 'Subject')
    await page.type('#comment', 'Just a message into a text area')
    await page.click('input[type="submit"]')
  })

  it('Display Result Page', async () => {
    await page.waitForSelector('#feedback-title')
    const url = await page.url()
    expect(url).to.include('/sendFeedback.html')
  })
})