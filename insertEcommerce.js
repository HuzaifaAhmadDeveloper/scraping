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
    "cat_name": "Ecommerce",
    "cat_heading": "The best Ecommerce in 2024",
    "sub_categories": [
      {
        "sub_cat_name": "Ecommerce platforms",
        "sub_cat_heading": "The best Ecommerce platforms in 2024"
        
      },
      {
        "sub_cat_name": "Marketplace sites",
        "sub_cat_heading": "The best Marketplace sites in 2024"
        
      },
      {
        "sub_cat_name": "Payment processors",
        "sub_cat_heading": "The best Payment processors in 2024"
        
      },
      {
        "sub_cat_name": "Shopify Apps",
        "sub_cat_heading": "The best Shopify Apps in 2024"
       
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