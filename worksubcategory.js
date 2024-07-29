const puppeteer = require('puppeteer');
const fs = require('fs');

// Custom delay function
const delay = (time) => new Promise((resolve) => setTimeout(resolve, time));

const categoryUrls = [
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
  "https://www.producthunt.com/categories/video-conferencing"
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
    fs.writeFileSync('workscrapedHeadings.json', JSON.stringify(scrapedData, null, 2));

    console.log('Data saved to workscrapedHeadings.json');

    await browser.close();
  } catch (error) {
    console.error('Error:', error);
  }
})();
