const puppeteer = require('puppeteer')

describe('Test DevExpress Testcafe Example page', () => {
  it('Interacting with Inputs', async () => {
    const browser = await puppeteer.launch({ 
      headless: false, 
      defaultViewport: null,
      slowMo: 10,
      devtools: false
    })
    const page = await browser.newPage()
    await page.goto('https://devexpress.github.io/testcafe/example/')
    await page.type('#developer-name', 'Albert', { delay: 100}) // type a value into a textbox
    await new Promise(r => setTimeout(r, 5000)) // wait for 5 seconds
    await page.click('#tried-test-cafe', { count: 1, delay: 0})
    await page.select('#preferred-interface', 'JavaScript API') // id of dropdown, seclected option's value
    await new Promise(r => setTimeout(r, 5000)) // wait for 5 seconds
    await browser.close()
  })
})