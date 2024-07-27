const puppeteer = require('puppeteer');
const fs = require('fs');

const urls = [
  'https://www.producthunt.com/categories/a-b-testing',
  'https://www.producthunt.com/categories/ai-coding',
  'https://www.producthunt.com/categories/authentication-identity',
  'https://www.producthunt.com/categories/automation',
  'https://www.producthunt.com/categories/cloud-computing-platforms',
  'https://www.producthunt.com/categories/cms',
  'https://www.producthunt.com/categories/code-editors',
  'https://www.producthunt.com/categories/code-review-tools',
  'https://www.producthunt.com/categories/command-line-tools',
  'https://www.producthunt.com/categories/data-analysis',
  'https://www.producthunt.com/categories/data-visualization',
  'https://www.producthunt.com/categories/databases-and-backend',
  'https://www.producthunt.com/categories/git-clients',
  'https://www.producthunt.com/categories/headless-cms',
  'https://www.producthunt.com/categories/issue-tracking-software',
  'https://www.producthunt.com/categories/membership',
  'https://www.producthunt.com/categories/no-code-platforms',
  'https://www.producthunt.com/categories/security-compliance',
  'https://www.producthunt.com/categories/standup-bots',
  'https://www.producthunt.com/categories/static-site-generators',
  'https://www.producthunt.com/categories/testing-and-qa',
  'https://www.producthunt.com/categories/unified-api',
  'https://www.producthunt.com/categories/video-hosting',
  'https://www.producthunt.com/categories/vpn-client',
  'https://www.producthunt.com/categories/web-hosting',
  'https://www.producthunt.com/categories/website-analytics',
  'https://www.producthunt.com/categories/website-builders'
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
  fs.writeFileSync('sub_category.json', JSON.stringify(scrapedData, null, 2));

  console.log('Data saved to sub_category.json');

  await browser.close();
})();