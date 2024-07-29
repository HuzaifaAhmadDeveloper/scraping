const puppeteer = require('puppeteer');
const fs = require('fs');

// Custom delay function
const delay = (time) => new Promise((resolve) => setTimeout(resolve, time));

const categoryUrls = [
    'https://www.producthunt.com/categories/chrome-extensions',
    'https://www.producthunt.com/categories/figma-plugins',
    'https://www.producthunt.com/categories/figma-templates',
    'https://www.producthunt.com/categories/notion-templates',
    'https://www.producthunt.com/categories/slack-apps',
    'https://www.producthunt.com/categories/twitter-apps',
    'https://www.producthunt.com/categories/wordpress-plugins',
    'https://www.producthunt.com/categories/wordpress-themes'
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
    fs.writeFileSync('product_add_onsHeadings.json', JSON.stringify(scrapedData, null, 2));

    console.log('Data saved to product_add_onsHeadings.json');

    await browser.close();
  } catch (error) {
    console.error('Error:', error);
  }
})();
