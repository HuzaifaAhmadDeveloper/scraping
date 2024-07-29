const puppeteer = require('puppeteer');
const fs = require('fs');

const urls = [
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
  const browser = await puppeteer.launch({ headless: true });

  let scrapedData = [];

  for (const url of urls) {
    try {
      const page = await browser.newPage();
      await page.goto(url, { waitUntil: 'networkidle2', timeout: 60000 });

      const data = await page.evaluate(() => {
        // Scrape all product cards
        const productCards = Array.from(document.querySelectorAll('div.flex.flex-col.pb-12 > div.my-2.flex.flex-1.flex-row.items-start.gap-2.py-2')).map(card => {
          const rankElement = card.querySelector('div.flex.w-12.flex-col.items-end.pr-2 > div.text-24.font-bold.text-light-gray');
          const imageElement = card.querySelector('a > img');
          const titleElement = card.querySelector('a.text-16.font-normal.text-dark-gray');
          const descriptionElement = card.querySelector('a.text-14.font-light.text-dark-gray.py-2');

          const rank = rankElement ? rankElement.innerText.replace('#', '') : null;
          const imageUrl = imageElement ? imageElement.src : null;
          const title = titleElement ? titleElement.innerText : null;
          const description = descriptionElement ? descriptionElement.innerText : null;

          return {
            rank,
            imageUrl,
            title,
            description
          };
        });

        return {
          url: window.location.href,
          productCards
        };
      });

      scrapedData.push(data);

      await page.close();
    } catch (error) {
      console.error('Error scraping URL:', url, error);
    }
  }

  // Save the scraped data to a JSON file
  fs.writeFileSync('financeproducts.json', JSON.stringify(scrapedData, null, 2));

  console.log('Data saved to financeproducts.json');

  await browser.close();
})();