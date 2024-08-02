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
    "cat_name": "Health and Fitness",
    "cat_heading": "The best Health and Fitness in 2024",
    "sub_categories": [
      {
        "sub_cat_name": "Activity tracking",
        "sub_cat_heading": "The best Activity tracking in 2024"
        
      },
      {
        "sub_cat_name": "Camping apps",
        "sub_cat_heading": "The best Camping apps in 2024"
        
      },
      {
        "sub_cat_name": "Health Insurance",
        "sub_cat_heading": "The best Health Insurance in 2024"
        
      },
      {
        "sub_cat_name": "Hiking apps",
        "sub_cat_heading": "The best Hiking apps in 2024"
       
      },
      {
        "sub_cat_name": "Medical",
        "sub_cat_heading": "The best Medical in 2024"
        
      },
      {
        "sub_cat_name": "Meditation apps",
        "sub_cat_heading": "The best Meditation apps in 2024"
       
      },
      {
        "sub_cat_name": "Mental Health",
        "sub_cat_heading": "The best Mental Health in 2024"
        
      },
      {
        "sub_cat_name": "Senior care",
        "sub_cat_heading": "The best Senior care in 2024"
       
      },
      {
        "sub_cat_name": "Sleep apps",
        "sub_cat_heading": "The best Sleep apps in 2024"
       
      },
      {
        "sub_cat_name": "Therapy apps",
        "sub_cat_heading": "The best Therapy apps in 2024"
       
      },
      {
        "sub_cat_name": "Workout platforms",
        "sub_cat_heading": "The best Workout platforms in 2024"
       
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