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
    "cat_name": "Web3",
    "cat_heading": "The best Web3 in 2024",
    "sub_categories": [
      {
        "sub_cat_name": "Crypto exchanges",
        "sub_cat_heading": "The best Crypto exchanges in 2024"
        
      },
      {
        "sub_cat_name": "Crypto tools",
        "sub_cat_heading": "The best Crypto tools in 2024"
        
      },
      {
        "sub_cat_name": "Crypto wallets",
        "sub_cat_heading": "The best Crypto wallets in 2024"
        
      },
      {
        "sub_cat_name": "DAOs",
        "sub_cat_heading": "The best Design DAOs in 2024"
       
      },
      {
        "sub_cat_name": "Defi",
        "sub_cat_heading": "The best Defi in 2024"
        
      },
      {
        "sub_cat_name": "NFT creation tools",
        "sub_cat_heading": "The best NFT creation tools in 2024"
       
      },
      {
        "sub_cat_name": "NFT marketplaces",
        "sub_cat_heading": "The best NFT marketplaces in 2024"
        
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