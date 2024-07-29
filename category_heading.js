const puppeteer = require('puppeteer');
const fs = require('fs');

// Custom delay function
const delay = (time) => new Promise((resolve) => setTimeout(resolve, time));

const categoryUrls = [
  'https://www.producthunt.com/categories/engineering-development',
  'https://www.producthunt.com/categories/work-productivity',
  'https://www.producthunt.com/categories/design-creative',
  'https://www.producthunt.com/categories/social-community',
  'https://www.producthunt.com/categories/finance',
  'https://www.producthunt.com/categories/marketing-sales',
  'https://www.producthunt.com/categories/ai',
  'https://www.producthunt.com/categories/health-fitness',
  'https://www.producthunt.com/categories/travel',
  'https://www.producthunt.com/categories/platforms',
  'https://www.producthunt.com/categories/product-add-ons',
  'https://www.producthunt.com/categories/web3',
  'https://www.producthunt.com/categories/physical-products',
  'https://www.producthunt.com/categories/ecommerce',
  'https://www.producthunt.com/categories/family',
  'https://www.producthunt.com/categories/lifestyle'
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

    // Format the scraped data for readability
    const formattedData = scrapedData.map(data => `
URL: ${data.url}
Heading: ${data.heading}
    `).join('\n');

    // Save the formatted data to a text file
    fs.writeFileSync('scrapedHeadings.txt', formattedData.trim());

    console.log('Data saved to scrapedHeadings.txt');

    await browser.close();
  } catch (error) {
    console.error('Error:', error);
  }
})();
