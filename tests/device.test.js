const puppeteer = require('puppeteer')

describe('Device Emulation', () => {
  let browser
  let page

  before (async () => {
    browser = await puppeteer.launch({
      headless: false,
      slowMo: 10,
      devtools: false
    })
    page = await browser.newPage()
    await page.setDefaultTimeout(10000)
    await page.setDefaultNavigationTimeout(20000)
  })

  after(async () => {
    await browser.close()
  })

  it('Desktop Device Test', async () => {
    await page.setViewport({ width: 1650, height: 1050 })
    await page.goto('https://www.example.com')
    await new Promise((resolve, reject) => setTimeout(resolve, 5000)) // eq. page.waitFor(5000) // wait for 5s
  })

  it('Tablet Device Test', async () => {
    const tablet = puppeteer.KnownDevices['iPad landscape']
    await page.emulate(tablet)
    await page.goto('https://www.example.com')
    await new Promise((resolve, reject) => setTimeout(resolve, 5000)) // eq. page.waitFor(5000) // wait for 5s
  })

  it('Mobile Device Test', async () => {
    const mobile = puppeteer.KnownDevices['iPhone X']
    await page.emulate(mobile)
    await page.goto('https://www.example.com')
    await new Promise((resolve, reject) => setTimeout(resolve, 5000)) // eq. page.waitFor(5000) // wait for 5s
  })
})