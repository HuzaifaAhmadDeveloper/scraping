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
      "cat_name": "LifeStyle",
      "cat_heading": "The best LifeStyle in 2024",
      "sub_categories": [
        {
          "sub_cat_name": "Shopping",
          "sub_cat_heading": "The best Shopping in 2024",
          "products": [
            {
              "rank": "1",
              "imageUrl": "https://ph-files.imgix.net/68e0a5eb-be7f-4b52-bbcf-0f78226cef91.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
              "title": "Whatnot — The safest place to buy & sell collectibles",
              "description": "Whatnot is building a marketplace to buy & sell authentic collectibles. We review every product to ensure it’s authentic. Today, you can use Whatnot to purchase Funko Pops -- one of the most popular collectibles on the market."
            },
            {
              "rank": "2",
              "imageUrl": "https://ph-files.imgix.net/86f6aa96-eb12-4196-a016-a56404eaa5ff.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
              "title": "Safari — The best way to see the sites.",
              "description": "We built Safari to be the best browser for your Mac, iPhone, and iPad. Built-in privacy features keep your browsing your business. You can stream and search smarter with handy tools that help you save, find, and share your favorite sites. Apple Pay in Safari lets you shop safely and simply. Safari for Mac is faster and more energy efficient than other browsers."
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
