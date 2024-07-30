const { Client } = require('pg');

// Connect to your postgres DB
const client = new Client({
  user: 'postgres',
  host: 'localhost',
  database: 'scrapDB',
  password: '0322',
  port: 5432,
});

const data ={
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
              "imageUrl": "https://ph-files.imgix.net/f75bcb63-7f73-459c-bac6-35e717c3bac1.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
              "title": "Storyworth — The easiest way to document & discover beloved life stories",
              "description": "Storyworth makes it simple to document & discover loved ones' life stories. Each week, they receive a question about their life and share a story in an email response. After a year, their memories are bound into a beautiful keepsake book. With Storyworth, friends and family love to document timeless stories and discover new tales they might have never known."
            },
            {
              "rank": "2",
              "imageUrl": "https://ph-files.imgix.net/ee5a3e1f-185b-43eb-857c-14b6a2145499.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
              "title": "ScreenZen — Build a balanced relationship with your phone",
              "description": "We all use our phones more than we should and setting app time limits doesn’t work. We just override it and get back to scrolling. ScreenZen for iOS uses rewards, gamification and awareness to help you build a balanced relationship with your phone that lasts."
            }
          ]
        },
        {
          "sub_cat_name": "Family care",
          "sub_cat_heading": "The best Family care in 2024",
          "products": [
            {
              "rank": "1",
              "imageUrl": "https://ph-files.imgix.net/f75bcb63-7f73-459c-bac6-35e717c3bac1.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
              "title": "Storyworth — The easiest way to document & discover beloved life stories",
              "description": "Storyworth makes it simple to document & discover loved ones' life stories. Each week, they receive a question about their life and share a story in an email response. After a year, their memories are bound into a beautiful keepsake book. With Storyworth, friends and family love to document timeless stories and discover new tales they might have never known."
            }
          ]
        }
      ] // Main array for sub category
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

    // Insert sub-categories and products
    for (const sub_category of data.category.sub_categories) {
      const subCategoryResult = await client.query(
        `INSERT INTO Sub_Category (sub_cat_name, sub_cat_heading, cat_id) VALUES ($1, $2, $3) RETURNING sub_cat_id`,
        [sub_category.sub_cat_name, sub_category.sub_cat_heading, cat_id]
      );

      const sub_cat_id = subCategoryResult.rows[0].sub_cat_id;

      for (const product of sub_category.products) {
        await client.query(
          `INSERT INTO Products (rank, imageUrl, title, description, cat_id, sub_cat_id) VALUES ($1, $2, $3, $4, $5, $6)`,
          [product.rank, product.imageUrl, product.title, product.description, cat_id, sub_cat_id]
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
