const puppeteer = require('puppeteer');

(async () => {
  try {
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();

    // Navigate to the Engineering & Development category page
    const url = 'https://www.producthunt.com/categories/engineering-development';
    await page.goto(url, { waitUntil: 'networkidle2', timeout: 60000 });

    // Function to scrape subcategory URLs
    const scrapeSubcategoryUrls = async () => {
      return await page.evaluate(() => {
        const subcategories = Array.from(document.querySelectorAll('ul[data-test="category-subcategories"] li a')).map(a => ({
          name: a.innerText.trim(),
          url: a.href
        }));
        return subcategories;
      });
    };

    // Scrape subcategory URLs
    const subcategories = await scrapeSubcategoryUrls();

    // Display the subcategory URLs
    console.log('Subcategory URLs:', subcategories);

    await browser.close();
  } catch (error) {
    console.error('Error:', error);
  }
})();
