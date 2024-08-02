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
    "cat_name": "Platforms",
    "cat_heading": "The best Platforms in 2024",
    "sub_categories": [
      {
        "sub_cat_name": "Crowdfunding",
        "sub_cat_heading": "The best Crowdfunding in 2024"
        
      },
      {
        "sub_cat_name": "Event software",
        "sub_cat_heading": "The best Event software in 2024"
        
      },
      {
        "sub_cat_name": "Job boards",
        "sub_cat_heading": "The best Job boards in 2024"
        
      },
      {
        "sub_cat_name": "Language Learning",
        "sub_cat_heading": "The best Language Learning in 2024"
       
      },
      {
        "sub_cat_name": "News",
        "sub_cat_heading": "The best News in 2024"
        
      },
      {
        "sub_cat_name": "Online learning",
        "sub_cat_heading": "The best Online learning in 2024"
       
      },
      {
        "sub_cat_name": "Real estate",
        "sub_cat_heading": "The best Real estate in 2024"
        
      },
      {
        "sub_cat_name": "Startup communities",
        "sub_cat_heading": "The best Startup communities in 2024"
       
      },
      {
        "sub_cat_name": "Virtual events",
        "sub_cat_heading": "The best Virtual events in 2024"
       
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