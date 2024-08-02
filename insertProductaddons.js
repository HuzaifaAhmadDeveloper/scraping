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
    "cat_name": "Product add-ons",
    "cat_heading": "The best Product add-ons in 2024",
    "sub_categories": [
      {
        "sub_cat_name": "Chrome Extensions",
        "sub_cat_heading": "The best Chrome Extensions in 2024"
        
      },
      {
        "sub_cat_name": "Figma Plugins",
        "sub_cat_heading": "The best Figma Plugins in 2024"
        
      },
      {
        "sub_cat_name": "Figma Templates",
        "sub_cat_heading": "The best Figma Templates in 2024"
        
      },
      {
        "sub_cat_name": "Notion Templates",
        "sub_cat_heading": "The best Notion Templates in 2024"
       
      },
      {
        "sub_cat_name": "Slack apps",
        "sub_cat_heading": "The best Slack apps in 2024"
        
      },
      {
        "sub_cat_name": "Twitter apps",
        "sub_cat_heading": "The best Twitter apps in 2024"
       
      },
      {
        "sub_cat_name": "Wordpress Plugins",
        "sub_cat_heading": "The best Wordpress Plugins in 2024"
        
      },
      {
        "sub_cat_name": "Wordpress themes",
        "sub_cat_heading": "The best Wordpress themes in 2024"
       
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