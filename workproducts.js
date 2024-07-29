const puppeteer = require('puppeteer');
const fs = require('fs');

const urls = [
    "https://www.producthunt.com/categories/ad-blockers",
    "https://www.producthunt.com/categories/app-switcher",
    "https://www.producthunt.com/categories/calendars",
    "https://www.producthunt.com/categories/customer-support",
    "https://www.producthunt.com/categories/email-clients",
    "https://www.producthunt.com/categories/e-signature",
    "https://www.producthunt.com/categories/hiring-software",
    "https://www.producthunt.com/categories/knowledge-base",
    "https://www.producthunt.com/categories/legal-services",
    "https://www.producthunt.com/categories/meetings",
    "https://www.producthunt.com/categories/notes-documents",
    "https://www.producthunt.com/categories/password-managers",
    "https://www.producthunt.com/categories/pdf-editor",
    "https://www.producthunt.com/categories/presentation-software",
    "https://www.producthunt.com/categories/project-management",
    "https://www.producthunt.com/categories/resumes",
    "https://www.producthunt.com/categories/scheduling",
    "https://www.producthunt.com/categories/screenshots-and-screen-recording",
    "https://www.producthunt.com/categories/search",
    "https://www.producthunt.com/categories/spreadsheets",
    "https://www.producthunt.com/categories/file-storage",
    "https://www.producthunt.com/categories/team-collaboration",
    "https://www.producthunt.com/categories/time-tracking",
    "https://www.producthunt.com/categories/video-conferencing"]

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
  fs.writeFileSync('workproducts.json', JSON.stringify(scrapedData, null, 2));

  console.log('Data saved to workproducts.json');

  await browser.close();
})();