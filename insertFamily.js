const { Client } = require('pg');

// Connect to your postgres DB
const client = new Client({
  user: 'postgres',
  host: 'localhost',
  database: 'scrapDB',
  password: '0322',
  port: 5432,
});

const data = {
  "category": {
    "category_name": "Family",
    "category_heading": "The best Family in 2024",
    "sub_categories": [
      {
        "sub_category_name": "Apps for Kids",
        "sub_category_heading": "The best Apps for Kids in 2024",
        "products": [
          {
            "rank": "1",
            "name": "Storyworth",
            "icon": "https://ph-files.imgix.net/f75bcb63-7f73-459c-bac6-35e717c3bac1.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "Storyworth — The easiest way to document & discover beloved life stories",
            "description": "Storyworth makes it simple to document & discover loved ones' life stories. Each week, they receive a question about their life and share a story in an email response. After a year, their memories are bound into a beautiful keepsake book. With Storyworth, friends and family love to document timeless stories and discover new tales they might have never known.",
            "productUrl": "https://www.producthunt.com/products/storyworth/shoutouts",
            "websiteUrl": "https://www.storyworth.com/",
            "imageUrl1": "https://ph-files.imgix.net/8f4fc41f-551c-4eb2-a403-ae9a13ebef78.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl2": "https://ph-files.imgix.net/f87a4489-7578-405c-92c7-c93ca4f282d5.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl3": "https://ph-files.imgix.net/029f919d-fa9e-48cd-bafc-8ac0558f7148.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "videoUrl": ""
          },
          {
            "rank": "2",
            "name": "ScreenZen",
            "icon": "https://ph-files.imgix.net/ee5a3e1f-185b-43eb-857c-14b6a2145499.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "ScreenZen — Build a balanced relationship with your phone",
            "description": "We all use our phones more than we should and setting app time limits doesn’t work. We just override it and get back to scrolling. ScreenZen for iOS uses rewards, gamification and awareness to help you build a balanced relationship with your phone that lasts.",
            "productUrl": "https://www.producthunt.com/products/screenzen/shoutouts",
            "websiteUrl": "https://apps.apple.com/us/app/screenzen-screen-time-control/id1541027222",
            "imageUrl1": "",
            "imageUrl2": "https://ph-files.imgix.net/2edaf2ba-aaa1-4b9f-a701-253e0bc16619.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl3": "https://ph-files.imgix.net/706bcb55-4a8f-40db-91bc-66bfea2b5afe.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "videoUrl": "https://youtu.be/T6IeuQw9DPU"
          }
        ]
        
      },
      {
        "sub_category_name": "Family Care",
        "sub_category_heading": "The best Family Care in 2024",
        "products": [
          {
            "rank": "1",
            "name": "Acorns",
            "icon": "https://ph-files.imgix.net/3f3fde58-f873-4a3f-ad29-b328b63a014b.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "Acorns — Investing. Earning. Growing.",
            "description": "Join over 8 million people and help your money grow in the background of life! Sign up in under 5 minutes and automatically save and invest for you and the kids you love. “Acorns is my favorite money app, because it makes it simple & cheap to make small investments.” - Business Insider (1) SAVE AND INVEST YOUR MONEY WITH OUR FINANCIAL WELLNESS SYSTEM…",
            "productUrl": "https://www.producthunt.com/products/acorns/shoutouts",
            "websiteUrl": "http://www.acorns.com/",
            "imageUrl1": "https://ph-files.imgix.net/f183a78d-9198-4094-9e34-2e80bb6247d5.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl2": "https://ph-files.imgix.net/ccf9e4b0-01a0-4288-b2d4-15a01a3ed37b.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl3": "https://ph-files.imgix.net/82a92c2e-6d8a-4d3b-9d57-07fe8798f6c2.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "videoUrl": ""
          },
          {
            "rank": "2",
            "name": "Storyworth",
            "icon": "https://ph-files.imgix.net/f75bcb63-7f73-459c-bac6-35e717c3bac1.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "Storyworth — The easiest way to document & discover beloved life stories",
            "description": "Storyworth makes it simple to document & discover loved ones' life stories. Each week, they receive a question about their life and share a story in an email response. After a year, their memories are bound into a beautiful keepsake book. With Storyworth, friends and family love to document timeless stories and discover new tales they might have never known.",
            "productUrl": "https://www.producthunt.com/products/storyworth/shoutouts",
            "websiteUrl": "https://www.storyworth.com/",
            "imageUrl1": "https://ph-files.imgix.net/8f4fc41f-551c-4eb2-a403-ae9a13ebef78.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl2": "https://ph-files.imgix.net/f87a4489-7578-405c-92c7-c93ca4f282d5.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl3": "https://ph-files.imgix.net/029f919d-fa9e-48cd-bafc-8ac0558f7148.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "videoUrl": ""
          }
        ]
        
      }
    ] //End of Main Sub Category Array
  }
};

const insertData = async () => {
  try {
    await client.connect();

    // Insert category
    const categoryResult = await client.query(
      `INSERT INTO category (category_name, category_heading) VALUES ($1, $2) ON CONFLICT DO NOTHING RETURNING category_id`,
      [data.category.category_name, data.category.category_heading]
    );

    const category_id = categoryResult.rows[0].category_id;

    // Insert sub-categories and products
    for (const sub_category of data.category.sub_categories) {
      const subCategoryResult = await client.query(
        `INSERT INTO sub_category (sub_category_name, sub_category_heading, category_id) VALUES ($1, $2, $3) RETURNING sub_category_id`,
        [sub_category.sub_category_name, sub_category.sub_category_heading, category_id]
      );

      const sub_category_id = subCategoryResult.rows[0].sub_category_id;

      for (const product of sub_category.products) {
        // Check if the product already exists
        const productResult = await client.query(
          `SELECT product_id FROM products WHERE product_name = $1`,
          [product.product_name]
        );

        let product_id;
        if (productResult.rows.length === 0) {
          // Insert new product if it doesn't exist
          const newProductResult = await client.query(
            `INSERT INTO products (product_rank, product_name, product_icon, product_title, product_description, product_Url, website_Url, image_Url1, image_Url2, image_Url3, video_Url, category_id, sub_category_id) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13) RETURNING product_id`,
            [
              product.product_rank,
              product.product_name,
              product.product_icon,
              product.product_title,
              product.product_description,
              product.product_Url,
              product.website_Url,
              product.image_Url1,
              product.image_Url2,
              product.image_Url3,
              product.video_Url,
              category_id,
              sub_category_id,
            ]
          );
          product_id = newProductResult.rows[0].product_id;
        } else {
          // Get existing product_id if product exists
          product_id = productResult.rows[0].product_id;
        }

        // Insert data into productSubcategory table
        await client.query(
          `INSERT INTO productSubcategory (product_id, category_id, sub_category_id) VALUES ($1, $2, $3) ON CONFLICT DO NOTHING`,
          [product_id, category_id, sub_category_id]
        );
      }
    }

    console.log("Data inserted successfully");
  } catch (err) {
    console.error("Error inserting data", err);
  } finally {
    await client.end();
  }
};

insertData();
