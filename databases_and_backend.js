const puppeteer = require('puppeteer');
const fs = require('fs');

(async () => {
  try {
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();
    
    // Navigate to the Databases & Backend category page
    const url = 'https://www.producthunt.com/categories/databases-and-backend';
    await page.goto(url, { waitUntil: 'networkidle2', timeout: 60000 });

    // Scrape the heading, paragraph content, and all product cards from the page
    const scrapedData = await page.evaluate(() => {
      // Selecting the heading and paragraph based on the provided structure
      const headingElement = document.querySelector('a[href="/categories/databases-and-backend"]');
      const paragraphElement = document.querySelector('p.font-light.text-light-gray');

      // Extracting the text content
      const heading = headingElement ? headingElement.innerText : null;
      const paragraph = paragraphElement ? paragraphElement.innerText : null;

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
        heading,
        paragraph,
        productCards
      };
    });

    // Save the scraped data to a JSON file
    fs.writeFileSync('databases_and_backend.json', JSON.stringify(scrapedData, null, 2));

    console.log('Data saved to databases_and_backend.json');

    await browser.close();
  } catch (error) {
    console.error('Error:', error);
  }
})();
