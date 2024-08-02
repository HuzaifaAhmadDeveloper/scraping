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
    "cat_name": "Travel",
    "cat_heading": "The best Travel in 2024",
    "sub_categories": [
      {
        "sub_cat_name": "Flight booking apps",
        "sub_cat_heading": "The best Flight booking apps in 2024"
        
      },
      {
        "sub_cat_name": "Hotel booking app",
        "sub_cat_heading": "The best Hotel booking app in 2024"
        
      },
      {
        "sub_cat_name": "Maps and GPS",
        "sub_cat_heading": "The best Maps and GPS in 2024"
        
      },
      {
        "sub_cat_name": "Outdoors platforms",
        "sub_cat_heading": "The best Outdoors platforms in 2024"
       
      },
      {
        "sub_cat_name": "Short term rentals",
        "sub_cat_heading": "The best Short term rentals in 2024"
        
      },
      {
        "sub_cat_name": "Travel apps",
        "sub_cat_heading": "The best Travel apps in 2024"
       
      },
      {
        "sub_cat_name": "Travel Insurance",
        "sub_cat_heading": "The best Travel Insurance in 2024"
        
      },
      {
        "sub_cat_name": "Travel Planning",
        "sub_cat_heading": "The best Travel Planning in 2024"
       
      },
      {
        "sub_cat_name": "Weather apps",
        "sub_cat_heading": "The best Weather apps in 2024"
       
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