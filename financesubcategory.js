const puppeteer = require('puppeteer');
const fs = require('fs');

// Custom delay function
const delay = (time) => new Promise((resolve) => setTimeout(resolve, time));

const categoryUrls = [
    'https://www.producthunt.com/categories/accounting',
    'https://www.producthunt.com/categories/budgeting-and-expense-tracking',
    'https://www.producthunt.com/categories/credit-scores',
    'https://www.producthunt.com/categories/financial-planning',
    'https://www.producthunt.com/categories/fundraising-resources',
    'https://www.producthunt.com/categories/investing',
    'https://www.producthunt.com/categories/invoicing-tools',
    'https://www.producthunt.com/categories/money-transfer',
    'https://www.producthunt.com/categories/neobanks',
    'https://www.producthunt.com/categories/online-banking',
    'https://www.producthunt.com/categories/payroll',
    'https://www.producthunt.com/categories/remote-workforce',
    'https://www.producthunt.com/categories/retirement-planning',
    'https://www.producthunt.com/categories/savings-apps',
    'https://www.producthunt.com/categories/startup-financial-planning',
    'https://www.producthunt.com/categories/stock-trading',
    'https://www.producthunt.com/categories/tax-preparation'
];

(async () => {
  try {
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();

    const scrapedData = [];

    for (const url of categoryUrls) {
      await page.goto(url, { waitUntil: 'networkidle2', timeout: 60000 });

      // Scrape the heading from the page
      const heading = await page.evaluate(() => {
        const headingElement = document.querySelector('h1');
        return headingElement ? headingElement.innerText : null;
      });

      scrapedData.push({ url, heading });

      console.log(`Scraped heading from: ${url}`);
      await delay(2000); // Adding a delay between requests
    }

    // Save the scraped data to a JSON file
    fs.writeFileSync('financescrapedHeadings.json', JSON.stringify(scrapedData, null, 2));

    console.log('Data saved to financescrapedHeadings.json');

    await browser.close();
  } catch (error) {
    console.error('Error:', error);
  }
})();
