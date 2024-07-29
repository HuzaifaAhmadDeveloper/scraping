const puppeteer = require('puppeteer');
const fs = require('fs');

// Custom delay function
const delay = (time) => new Promise((resolve) => setTimeout(resolve, time));

const categoryUrls = [
  'https://www.producthunt.com/categories/blogging-platforms',
  'https://www.producthunt.com/categories/community-management',
  'https://www.producthunt.com/categories/dating-apps',
  'https://www.producthunt.com/categories/link-in-bio',
  'https://www.producthunt.com/categories/live-streaming',
  'https://www.producthunt.com/categories/messaging-apps',
  'https://www.producthunt.com/categories/microblogging',
  'https://www.producthunt.com/categories/newsletter-platforms',
  'https://www.producthunt.com/categories/photo-sharing',
  'https://www.producthunt.com/categories/professional-networking',
  'https://www.producthunt.com/categories/safety-and-privacy',
  'https://www.producthunt.com/categories/social-bookmarking',
  'https://www.producthunt.com/categories/social-networking',
  'https://www.producthunt.com/categories/video-and-voice-calling'
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
    fs.writeFileSync('socialscrapedHeadings.json', JSON.stringify(scrapedData, null, 2));

    console.log('Data saved to socialscrapedHeadings.json');

    await browser.close();
  } catch (error) {
    console.error('Error:', error);
  }
})();
