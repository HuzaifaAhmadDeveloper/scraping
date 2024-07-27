const puppeteer = require('puppeteer');
const axios = require('axios');
const fs = require('fs');
const path = require('path');
require('dotenv').config();

const subcategoriesFilePath = path.join(__dirname, 'data', 'subcategories.json');

(async () => {
    try {
        const browser = await puppeteer.launch({ headless: true });
        const page = await browser.newPage();

        const url = 'https://www.producthunt.com/categories/engineering-development';
        await page.goto(url, { waitUntil: 'networkidle2', timeout: 60000 });

        // Function to scrape subcategory URLs
        const scrapeSubcategoryUrls = async () => {
            return await page.evaluate(() => {
                // Update selector based on the actual website structure
                const subcategories = Array.from(document.querySelectorAll('ul[data-test="category-subcategories"] li a')).map(a => ({
                    name: a.innerText.trim(),
                    url: a.href
                }));
                return subcategories;
            });
        };

        const subcategories = await scrapeSubcategoryUrls();
        console.log('Subcategory URLs:', subcategories);

        if (subcategories.length === 0) {
            console.error('No subcategories found. Please check the selector and the HTML structure.');
        } else {
            fs.writeFileSync(subcategoriesFilePath, JSON.stringify(subcategories, null, 2));
            console.log('Subcategory URLs saved:', subcategoriesFilePath);

            for (const subcategory of subcategories) {
                await axios.post('http://localhost:3000/api/insertData', { data: subcategory, type: 'subcategories' });
            }
        }

        await browser.close();
    } catch (error) {
        console.error('Error:', error);
    }
})();
