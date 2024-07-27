const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');
const axios = require('axios');
require('dotenv').config({ path: './.env.local' });

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
    console.log('Subcategory URLs:', subcategories);

    if (subcategories.length === 0) {
      console.error('No subcategories found. Please check the selector and the HTML structure.');
    }

    // Load product data from JSON file
    const productData = JSON.parse(fs.readFileSync(path.join(__dirname, 'data', 'index.json'), 'utf8'));
    const subcategoriesData = JSON.parse(fs.readFileSync(path.join(__dirname, 'data', 'subcategories.json'), 'utf8'));

    // Function to insert data into the database using the API endpoint
    const insertData = async (data, type) => {
      try {
        const response = await axios.post(`http://localhost:3000/api/insertData`, { data, type });
        console.log(`Data inserted successfully (${type}):`, response.data);
      } catch (error) {
        console.error('Error inserting data:', error.response ? error.response.data : error.message);
      }
    };

    // Insert product data
    await insertData(productData, 'products');

    // Insert subcategories data
    await insertData(subcategoriesData, 'subcategories');

    await browser.close();
  } catch (error) {
    console.error('Error:', error);
  }
})();
