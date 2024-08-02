const puppeteer = require('puppeteer');
const fs = require('fs');

// Custom delay function
const delay = (time) => new Promise((resolve) => setTimeout(resolve, time));

const url = 'https://www.producthunt.com/categories/time-tracking';
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
  let hasMoreProducts = true;

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

    // Scrape all product cards on the current page
    const scrapeProductCards = async () => {
      const allProductData = await page.evaluate(() => {
        const products = [];
        const productCards = document.querySelectorAll('div.flex.flex-col.pb-12 > div.my-2.flex.flex-1.flex-row.items-start.gap-2.py-2');

        for (const card of productCards) {
          const rankElement = card.querySelector('div.flex.w-12.flex-col.items-end.pr-2 > div.text-24.font-bold.text-light-gray');
          const imageElement = card.querySelector('a > img');
          const titleElement = card.querySelector('a.text-16.font-normal.text-dark-gray');
          const descriptionElement = card.querySelector('a.text-14.font-light.text-dark-gray.py-2');
          const additionalAnchorElement = card.querySelector('div.flex.flex-row.items-start a');

          const rank = rankElement ? rankElement.innerText.replace('#', '') : null;
          const icon = imageElement ? imageElement.src : null;
          const title = titleElement ? titleElement.innerText : null;
          const description = descriptionElement ? descriptionElement.innerText : null;
          const additionalAnchor = additionalAnchorElement ? {
            href: additionalAnchorElement.href,
            text: additionalAnchorElement.innerText.trim()
          } : null;

          products.push({
            rank,
            icon,
            title,
            description,
            productUrl: additionalAnchor ? additionalAnchor.href : null
          });
        }

        return products;
      });

      return allProductData;
    };

    // Now, scrape all product cards
    const allProductData = await scrapeProductCards();

    // Process additional data for each product card
    for (const product of allProductData) {
      if (product.productUrl) {
        const additionalPageUrl = product.productUrl;

        // Navigate to the additional anchor page
        await navigateWithRetries(page, additionalPageUrl, { waitUntil: 'networkidle2', timeout: navigationTimeout });

        const additionalPageData = await page.evaluate(() => {
          const secondAnchorElement = document.querySelector('div.styles_navigation__SPkFh.flex.flex-row div.px-5.styles_link__NWpW1 a');
          const secondAnchor = secondAnchorElement ? {
            href: secondAnchorElement.href,
            text: secondAnchorElement.innerText.trim()
          } : null;

          return {
            secondAnchor
          };
        });

        product.additionalPageData = additionalPageData;

        if (additionalPageData && additionalPageData.secondAnchor) {
          const secondAnchorPageUrl = additionalPageData.secondAnchor.href;

          // Navigate to the second anchor tag's page
          await navigateWithRetries(page, secondAnchorPageUrl, { waitUntil: 'networkidle2', timeout: navigationTimeout });

          const secondAnchorPageData = await page.evaluate(() => {
            const anchorElement = document.querySelector('div.styles_navigation__SPkFh.flex.flex-row div.px-5.styles_link__NWpW1 a');
            const anchor = anchorElement ? {
              href: anchorElement.href,
              text: anchorElement.innerText.trim()
            } : null;

            return {
              anchor
            };
          });

          product.secondAnchorPageData = secondAnchorPageData;

          if (secondAnchorPageData && secondAnchorPageData.anchor) {
            const thirdAnchorPageUrl = secondAnchorPageData.anchor.href;

            // Navigate to the third anchor tag's page
            await navigateWithRetries(page, thirdAnchorPageUrl, { waitUntil: 'networkidle2', timeout: navigationTimeout });

            const thirdAnchorPageData = await page.evaluate(() => {
              const imageElements = document.querySelectorAll('div.flex.flex-row.justify-start.gap-4.overflow-x-auto.justify-between img');
              const imageUrls = {};
              imageElements.forEach((img, index) => {
                imageUrls[`imageUrl${index + 1}`] = img.src;
              });

              const buttonAnchorElement = document.querySelector('div.styles_buttons__kKy_S.mt-6.flex.flex-row.items-center.gap-3 a');
              let buttonAnchorHref = buttonAnchorElement ? buttonAnchorElement.href : null;

              // Logic to remove the "?ref=producthunt" part or any query parameters
              if (buttonAnchorHref && buttonAnchorHref.includes('?')) {
                buttonAnchorHref = buttonAnchorHref.split('?')[0];
              }

              return {
                imageUrls,
                buttonAnchorHref
              };
            });

            product.thirdAnchorPageData = thirdAnchorPageData;
          }
        }
      }

      // Processing and formatting the data
      const formattedProduct = {
        rank: product.rank,
        name: product.title.split(' — ')[0], // Assuming the name is the first part of the title
        icon: product.icon,
        title: product.title,
        description: product.description,
        productUrl: product.productUrl,
        websiteUrl: product.thirdAnchorPageData?.buttonAnchorHref || '',
        imageUrl1: product.thirdAnchorPageData?.imageUrls?.imageUrl1 || '',
        imageUrl2: product.thirdAnchorPageData?.imageUrls?.imageUrl2 || '',
        imageUrl3: product.thirdAnchorPageData?.imageUrls?.imageUrl3 || '',
        videoUrl: '' // Assuming you want to keep this as an empty string
      };

      allData.push(formattedProduct);
    }

    // Save the formatted data to a JSON file
    if (allData.length > 0) {
      fs.writeFileSync('time.json', JSON.stringify(allData, null, 2));
      console.log('Formatted product data saved to formatted-products.json');
    } else {
      console.log('No product cards found.');
    }

    await page.close();
  } catch (error) {
    console.error('Error scraping URL:', url, error);
  }

  await browser.close();
})();
