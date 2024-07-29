const puppeteer = require('puppeteer');
const fs = require('fs');

// Custom delay function
const delay = (time) => new Promise((resolve) => setTimeout(resolve, time));

const categoryUrls = [
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
    fs.writeFileSync('healthHeadings.json', JSON.stringify(scrapedData, null, 2));

    console.log('Data saved to healthHeadings.json');

    await browser.close();
  } catch (error) {
    console.error('Error:', error);
  }
})();
