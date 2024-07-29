const puppeteer = require('puppeteer');
const fs = require('fs');

// Custom delay function
const delay = (time) => new Promise((resolve) => setTimeout(resolve, time));

const categoryUrls = [
    'https://www.producthunt.com/categories/apps-for-kids',
    'https://www.producthunt.com/categories/family-care',
    'https://www.producthunt.com/categories/pregnancy'
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
    fs.writeFileSync('familyHeadings.json', JSON.stringify(scrapedData, null, 2));

    console.log('Data saved to familyHeadings.json');

    await browser.close();
  } catch (error) {
    console.error('Error:', error);
  }
})();
