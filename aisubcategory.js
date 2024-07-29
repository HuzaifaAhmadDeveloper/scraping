const puppeteer = require('puppeteer');
const fs = require('fs');

// Custom delay function
const delay = (time) => new Promise((resolve) => setTimeout(resolve, time));

const categoryUrls = [
  'https://www.producthunt.com/categories/ai-characters',
  'https://www.producthunt.com/categories/ai-chatbots',
  'https://www.producthunt.com/categories/ai-content-detection',
  'https://www.producthunt.com/categories/ai-generative-art',
  'https://www.producthunt.com/categories/ai-headshot-generators',
  'https://www.producthunt.com/categories/ai-infrastructure',
  'https://www.producthunt.com/categories/ai-metrics-and-evaluation',
  'https://www.producthunt.com/categories/ai-voice-generation-software',
  'https://www.producthunt.com/categories/avatar-generators',
  'https://www.producthunt.com/categories/chatgpt-prompts',
  'https://www.producthunt.com/categories/llms',
  'https://www.producthunt.com/categories/predictive-ai',
  'https://www.producthunt.com/categories/text-to-speech'
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
    fs.writeFileSync('aiHeadings.json', JSON.stringify(scrapedData, null, 2));

    console.log('Data saved to aiHeadings.json');

    await browser.close();
  } catch (error) {
    console.error('Error:', error);
  }
})();
