const puppeteer = require('puppeteer');
const fs = require('fs');

// Custom delay function
const delay = (time) => new Promise((resolve) => setTimeout(resolve, time));

const categoryUrls = [
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

      console.log(`Scraped heading from: ${url}` );
      await delay(2000); // Adding a delay between requests
    }

    // Format the scraped data for readability
    const formattedData = scrapedData.map(data => `
URL: ${data.url}
Heading: ${data.heading}
    `).join('\n');

    // Save the formatted data to a text file
    fs.writeFileSync('engscrapedHeadings.txt', formattedData.trim());

    console.log('Data saved to engscrapedHeadings.txt');

    await browser.close();
  } catch (error) {
    console.error('Error:', error);
  }
})();