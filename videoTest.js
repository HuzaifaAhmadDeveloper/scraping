const puppeteer = require('puppeteer');
const fs = require('fs');

// Custom delay function
const delay = (time) => new Promise((resolve) => setTimeout(resolve, time));

const url = 'https://www.producthunt.com/categories/ai-coding';
const navigationTimeout = 120000; // Increased timeout to 120 seconds
const maxRetries = 3;

const navigateWithRetries = async (page, url, options, retries = 0) => {
  try {
    await page.goto(url, options);
  } catch (error) {
    if (retries < maxRetries) {
      console.warn(`Navigation to ${url} failed. Retrying... (${retries + 1}/${maxRetries})`);
      await navigateWithRetries(page, url, options, retries + 1);
    } else {
      throw error;
    }
  }
};

(async () => {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  let allData = [];

  try {
    await navigateWithRetries(page, url, { waitUntil: 'networkidle2', timeout: navigationTimeout });

    // Function to click "See More Loved Products" button until it is no longer visible
    const clickSeeMoreButton = async () => {
      let loadMoreVisible = true;
      while (loadMoreVisible) {
        loadMoreVisible = await page.evaluate(() => {
          const button = document.querySelector('button.styles_reset__0clCw.styles_button__BmLM4.styles_full__j4aVK');
          if (button) {
            button.click();
            return true;
          }
          return false;
        });
        if (loadMoreVisible) {
          await delay(2000); // Wait for the next set of products to load
        }
      }
    };

    // Ensure all products are loaded by clicking the "See More Loved Products" button
    await clickSeeMoreButton();

    // Scrape rank and associated media URLs (images/videos)
    const scrapeProductData = async () => {
      const productData = await page.evaluate(() => {
        const data = [];
        const productCards = document.querySelectorAll('div.my-2.flex.flex-1.flex-row.items-start.gap-2.py-2');

        productCards.forEach((card) => {
          const rankElement = card.querySelector('div.text-24.font-bold.text-light-gray');
          const mediaElements = card.querySelectorAll('div.flex.flex-row.justify-start.gap-4.overflow-x-auto.justify-between img, video');

          const rank = rankElement ? rankElement.innerText.replace('#', '') : null;
          const mediaUrls = [];

          mediaElements.forEach((element) => {
            if (element.tagName.toLowerCase() === 'img') {
              mediaUrls.push({ type: 'image', url: element.src });
            } else if (element.tagName.toLowerCase() === 'video') {
              // Check if video has a direct src or nested source elements
              const videoUrl = element.src || element.querySelector('source')?.src || '';
              mediaUrls.push({ type: 'video', url: videoUrl });
            }
          });

          if (rank && mediaUrls.length > 0) {
            const formattedProduct = {
              rank,
              imageUrl1: mediaUrls.find(media => media.type === 'image')?.url || '',
              imageUrl2: mediaUrls.filter(media => media.type === 'image')[1]?.url || '',
              videoUrl: mediaUrls.find(media => media.type === 'video')?.url || ''
            };
            data.push(formattedProduct);
          }
        });

        return data;
      });

      return productData;
    };

    // Scrape and save product data
    const allProductData = await scrapeProductData();
    allData = allProductData;

    // Save the formatted data to a JSON file
    if (allData.length > 0) {
      fs.writeFileSync('media-products.json', JSON.stringify(allData, null, 2));
      console.log('Product media data saved to media-products.json');
    } else {
      console.log('No product cards found.');
    }

    await page.close();
  } catch (error) {
    console.error('Error scraping URL:', url, error);
  }

  await browser.close();
})();
