const puppeteer = require('puppeteer');
const fs = require('fs');

// Custom delay function
const delay = (time) => new Promise((resolve) => setTimeout(resolve, time));

const categoryUrls = [
  'https://www.producthunt.com/categories/advertising-tools',
  'https://www.producthunt.com/categories/affiliate-marketing',
  'https://www.producthunt.com/categories/best-seo-tools',
  'https://www.producthunt.com/categories/business-intelligence',
  'https://www.producthunt.com/categories/crm',
  'https://www.producthunt.com/categories/customer-loyalty',
  'https://www.producthunt.com/categories/email-marketing',
  'https://www.producthunt.com/categories/influencer-marketing',
  'https://www.producthunt.com/categories/keyword-research',
  'https://www.producthunt.com/categories/landing-page-builders',
  'https://www.producthunt.com/categories/lead-generation',
  'https://www.producthunt.com/categories/marketing-automation',
  'https://www.producthunt.com/categories/sales-training',
  'https://www.producthunt.com/categories/social-media-management',
  'https://www.producthunt.com/categories/social-media-scheduling',
  'https://www.producthunt.com/categories/survey-and-form-builders'
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
    fs.writeFileSync('marketingHeadings.json', JSON.stringify(scrapedData, null, 2));

    console.log('Data saved to marketingHeadings.json');

    await browser.close();
  } catch (error) {
    console.error('Error:', error);
  }
})();
