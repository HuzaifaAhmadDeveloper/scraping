const puppeteer = require('puppeteer');
const fs = require('fs');

const urls = [
  'https://www.producthunt.com/categories/blogging-platforms',
  'https://www.producthunt.com/categories/community-management',
  'https://www.producthunt.com/categories/dating-apps',
  'https://www.producthunt.com/categories/link-in-bio',
  'https://www.producthunt.com/categories/live-streaming',
  'https://www.producthunt.com/categories/messaging-apps',
  'https://www.producthunt.com/categories/microblogging',
  'https://www.producthunt.com/categories/newsletter-platforms',
  'https://www.producthunt.com/categories/photo-sharing',
  'https://www.producthunt.com/categories/professional-networking',
  'https://www.producthunt.com/categories/safety-and-privacy',
  'https://www.producthunt.com/categories/social-bookmarking',
  'https://www.producthunt.com/categories/social-networking',
  'https://www.producthunt.com/categories/video-and-voice-calling'
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
  fs.writeFileSync('socialproducts.json', JSON.stringify(scrapedData, null, 2));

  console.log('Data saved to socialproducts.json');

  await browser.close();
})();