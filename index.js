const puppeteer = require('puppeteer');

(async () => {
  // Launch the browser
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  
  // Navigate to the main page with the navbar
  await page.goto('https://www.producthunt.com/');
  
  // Hover over the "Products" link in the navbar
  await page.hover('a[href="/categories?ref=header_nav"]');
  
  // Wait for the dropdown to appear
  await page.waitForSelector('a[href="/categories/engineering-development"]', { visible: true });
  
  // Ensure the dropdown is fully loaded with a manual delay
  await new Promise(resolve => setTimeout(resolve, 2000));

  // Click on the specific category link
  await page.click('a[href="/categories/engineering-development"]');
  await page.waitForNavigation();
  
  // Scrape the content of the Engineering & Development page
  const data = await page.evaluate(() => {
    const headingElement = document.querySelector('h1.text-24.sm:text-32.md:text-48.font-semibold.text-dark-gray');
    const paragraphElement = document.querySelector('p.text-14.sm:text-18.md:text-18.font-light.text-light-gray');
    const heading = headingElement ? headingElement.innerText : 'Heading not found';
    const paragraph = paragraphElement ? paragraphElement.innerText : 'Paragraph not found';
    return { heading, paragraph };
  });

  console.log(data);

  // Close the browser
  await browser.close();
})();
