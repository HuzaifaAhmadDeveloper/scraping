const puppeteer = require('puppeteer');
const fs = require('fs');

// Custom delay function
const delay = (time) => new Promise((resolve) => setTimeout(resolve, time));

const categoryUrls = [
  'https://www.producthunt.com/categories/3d-animation',
  'https://www.producthunt.com/categories/background-removal',
  'https://www.producthunt.com/categories/camera-apps',
  'https://www.producthunt.com/categories/design-inspiration',
  'https://www.producthunt.com/categories/design-mockups',
  'https://www.producthunt.com/categories/design-resources',
  'https://www.producthunt.com/categories/digital-whiteboards',
  'https://www.producthunt.com/categories/graphic-design-tools',
  'https://www.producthunt.com/categories/icon-sets',
  'https://www.producthunt.com/categories/interface-design-tools',
  'https://www.producthunt.com/categories/mobile-editing',
  'https://www.producthunt.com/categories/photo-editing',
  'https://www.producthunt.com/categories/podcasting',
  'https://www.producthunt.com/categories/social-audio',
  'https://www.producthunt.com/categories/space-design',
  'https://www.producthunt.com/categories/stock-photo-sites',
  'https://www.producthunt.com/categories/ui-frameworks',
  'https://www.producthunt.com/categories/user-research-2',
  'https://www.producthunt.com/categories/video-editing',
  'https://www.producthunt.com/categories/wallpapers',
  'https://www.producthunt.com/categories/wireframing'
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
    fs.writeFileSync('designscrapedHeadings.json', JSON.stringify(scrapedData, null, 2));

    console.log('Data saved to designscrapedHeadings.json');

    await browser.close();
  } catch (error) {
    console.error('Error:', error);
  }
})();
