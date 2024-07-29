const puppeteer = require('puppeteer');
const fs = require('fs');

const urls = [
  'https://www.producthunt.com/categories/activity-tracking',
  'https://www.producthunt.com/categories/camping-apps',
  'https://www.producthunt.com/categories/health-insurance',
  'https://www.producthunt.com/categories/hiking-apps',
  'https://www.producthunt.com/categories/medical',
  'https://www.producthunt.com/categories/meditation',
  'https://www.producthunt.com/categories/mental-health',
  'https://www.producthunt.com/categories/senior-care',
  'https://www.producthunt.com/categories/sleep',
  'https://www.producthunt.com/categories/therapy-apps',
  'https://www.producthunt.com/categories/workout-platforms'
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
  fs.writeFileSync('healthproducts.json', JSON.stringify(scrapedData, null, 2));

  console.log('Data saved to healthproducts.json');

  await browser.close();
})();