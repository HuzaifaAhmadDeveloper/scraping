const puppeteer = require('puppeteer');
const fs = require('fs');

// Custom delay function
const delay = (time) => new Promise((resolve) => setTimeout(resolve, time));

const categoryUrls = [
  'https://www.producthunt.com/categories/crowdfunding',
  'https://www.producthunt.com/categories/events',
  'https://www.producthunt.com/categories/job-boards',
  'https://www.producthunt.com/categories/language-learning',
  'https://www.producthunt.com/categories/news',
  'https://www.producthunt.com/categories/online-learning',
  'https://www.producthunt.com/categories/real-estate',
  'https://www.producthunt.com/categories/startup-communities',
  'https://www.producthunt.com/categories/virtual-events'
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

    // Save the JSON data to a file
    fs.writeFileSync('platformHeadings.json', JSON.stringify(scrapedData, null, 2));

    console.log('Data saved to platformHeadings.json');

    await browser.close();
  } catch (error) {
    console.error('Error:', error);
  }
})();
