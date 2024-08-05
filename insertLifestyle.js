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
    "category_name": "Lifestyle",
    "category_heading": "The best Lifestyle in 2024",
    "sub_categories": [
      {
        "sub_category_name": "Shopping",
        "sub_category_heading": "The best Shopping in 2024",
        "products": [
          {
            "rank": "1",
            "name": "Whatnot",
            "icon": "https://ph-files.imgix.net/68e0a5eb-be7f-4b52-bbcf-0f78226cef91.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "Whatnot — The safest place to buy & sell collectibles",
            "description": "Whatnot is building a marketplace to buy & sell authentic collectibles. We review every product to ensure it’s authentic. Today, you can use Whatnot to purchase Funko Pops -- one of the most popular collectibles on the market.",
            "productUrl": "https://www.producthunt.com/products/whatnot/shoutouts",
            "websiteUrl": "https://www.whatnot.com/",
            "imageUrl1": "https://ph-files.imgix.net/03a26e29-73a9-41ce-ad32-079e1874e8ed.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl2": "https://ph-files.imgix.net/cf010d43-c29c-498b-a760-f58dbca85aef.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl3": "https://ph-files.imgix.net/b687821d-c6f3-4fcd-bc04-73fc246a062e.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "videoUrl": ""
          },
          {
            "rank": "2",
            "name": "Safari",
            "icon": "https://ph-files.imgix.net/86f6aa96-eb12-4196-a016-a56404eaa5ff.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "Safari — The best way to see the sites.",
            "description": "We built Safari to be the best browser for your Mac, iPhone, and iPad. Built-in privacy features keep your browsing your business. You can stream and search smarter with handy tools that help you save, find, and share your favorite sites. Apple Pay in Safari lets you shop safely and simply. Safari for Mac is faster and more energy efficient than other browsers.",
            "productUrl": "https://www.producthunt.com/products/safari/shoutouts",
            "websiteUrl": "https://www.apple.com/safari",
            "imageUrl1": "https://ph-files.imgix.net/1bc59eb8-ac00-4b7e-880c-0f7aee43ed6b.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl2": "https://ph-files.imgix.net/f00720a8-2f11-4407-9ade-97a4e6166214.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl3": "https://ph-files.imgix.net/f727b5fe-5719-411c-91cb-19dba04feaf8.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
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
      `INSERT INTO Category (category_name, category_heading) VALUES ($1, $2) ON CONFLICT DO NOTHING RETURNING category_id`,
      [data.category.category_name, data.category.category_heading]
    );

    const category_id = categoryResult.rows[0].category_id;

    // Insert sub-categories and products
    for (const sub_category of data.category.sub_categories) {
      const subCategoryResult = await client.query(
        `INSERT INTO Sub_Category (sub_category_name, sub_category_heading, category_id) VALUES ($1, $2, $3) RETURNING sub_category_id`,
        [sub_category.sub_category_name, sub_category.sub_category_heading, category_id]
      );

      const sub_category_id = subCategoryResult.rows[0].sub_category_id;

      for (const product of sub_category.products) {
        // Check if the product already exists
        const productResult = await client.query(
          `SELECT product_id FROM Products WHERE name = $1`,
          [product.name]
        );

        let product_id;
        if (productResult.rows.length === 0) {
          // Insert new product if it doesn't exist
          const newProductResult = await client.query(
            `INSERT INTO Products (rank, name, icon, title, description, productUrl, websiteUrl, imageUrl1, imageUrl2, imageUrl3, videoUrl, category_id, sub_category_id) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13) RETURNING product_id`,
            [
              product.rank,
              product.name,
              product.icon,
              product.title,
              product.description,
              product.productUrl,
              product.websiteUrl,
              product.imageUrl1,
              product.imageUrl2,
              product.imageUrl3,
              product.videoUrl,
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
