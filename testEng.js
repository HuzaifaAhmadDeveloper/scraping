const puppeteer = require('puppeteer');
const fs = require('fs');

const url = 'https://www.producthunt.com/categories/a-b-testing';

(async () => {
    const browser = await puppeteer.launch({ headless: true });

    try {
        const page = await browser.newPage();
        await page.goto(url, { waitUntil: 'networkidle2', timeout: 60000 });

        // Scrape all product cards on the main page
        const allProductData = await page.evaluate(async () => {
            const products = [];
            const productCards = document.querySelectorAll('div.flex.flex-col.pb-12 > div.my-2.flex.flex-1.flex-row.items-start.gap-2.py-2');

            for (const card of productCards) {
                const rankElement = card.querySelector('div.flex.w-12.flex-col.items-end.pr-2 > div.text-24.font-bold.text-light-gray');
                const imageElement = card.querySelector('a > img');
                const titleElement = card.querySelector('a.text-16.font-normal.text-dark-gray');
                const descriptionElement = card.querySelector('a.text-14.font-light.text-dark-gray.py-2');
                const additionalAnchorElement = card.querySelector('div.flex.flex-row.items-start a');

                const rank = rankElement ? rankElement.innerText.replace('#', '') : null;
                const imageUrl = imageElement ? imageElement.src : null;
                const title = titleElement ? titleElement.innerText : null;
                const description = descriptionElement ? descriptionElement.innerText : null;
                const additionalAnchor = additionalAnchorElement ? {
                    href: additionalAnchorElement.href,
                    text: additionalAnchorElement.innerText.trim()
                } : null;

                products.push({
                    rank,
                    imageUrl,
                    title,
                    description,
                    additionalAnchor
                });
            }

            return products;
        });

        // Now, scrape additional data for each product card
        const allData = [];

        for (const product of allProductData) {
            if (product.additionalAnchor) {
                const additionalPageUrl = product.additionalAnchor.href;
                
                // Navigate to the additional anchor page
                await page.goto(additionalPageUrl, { waitUntil: 'networkidle2', timeout: 60000 });

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
                    await page.goto(secondAnchorPageUrl, { waitUntil: 'networkidle2', timeout: 60000 });

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
                        await page.goto(thirdAnchorPageUrl, { waitUntil: 'networkidle2', timeout: 60000 });

                        const thirdAnchorPageData = await page.evaluate(() => {
                           
                            const imageElements = document.querySelectorAll('div.flex.flex-row.justify-start.gap-4.overflow-x-auto.justify-between img');
                            const imageUrls = Array.from(imageElements).map(img => img.src);

                            const buttonAnchorElement = document.querySelector('div.styles_buttons__kKy_S.mt-6.flex.flex-row.items-center.gap-3 a');
                            const buttonAnchorHref = buttonAnchorElement ? buttonAnchorElement.href : null;

                            return {
                                
                                imageUrls,
                                buttonAnchorHref
                            };
                        });

                        product.thirdAnchorPageData = thirdAnchorPageData;
                    }
                }
            }

            allData.push(product);
        }

        if (allData.length > 0) {
            // Save the scraped data to a JSON file
            fs.writeFileSync('testData.json', JSON.stringify(allData, null, 2));
            console.log('All product data saved to testData.json');
        } else {
            console.log('No product cards found.');
        }

        await page.close();
    } catch (error) {
        console.error('Error scraping URL:', url, error);
    }

    await browser.close();
})();
