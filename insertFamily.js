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
    "cat_name": "Family",
    "cat_heading": "The best Family in 2024",
    "sub_categories": [
      {
        "sub_cat_name": "Apps for Kids",
        "sub_cat_heading": "The best Apps for Kids in 2024",
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
        "sub_cat_name": "Family Care",
        "sub_cat_heading": "The best Family Care in 2024",
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
        `INSERT INTO Category (cat_name, cat_heading) VALUES ($1, $2) RETURNING cat_id`,
        [data.category.cat_name, data.category.cat_heading]
      );
  
      const cat_id = categoryResult.rows[0].cat_id;
  
      // Insert sub-categories
      for (const sub_category of data.category.sub_categories) {
        await client.query(
          `INSERT INTO Sub_Category (sub_cat_name, sub_cat_heading, cat_id) VALUES ($1, $2, $3)`,
          [sub_category.sub_cat_name, sub_category.sub_cat_heading, cat_id]
        );
      }
  
      console.log("Data inserted successfully");
    } catch (err) {
      console.error("Error inserting data", err);
    } finally {
      await client.end();
    }
  };
  
  insertData();