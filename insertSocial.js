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
    "cat_name": "Social and Community",
    "cat_heading": "The best Social and Community in 2024",
    "sub_categories": [
      {
        "sub_cat_name": "Blogging platforms",
        "sub_cat_heading": "The best Blogging platforms in 2024"
        
      },
      {
        "sub_cat_name": "Community management",
        "sub_cat_heading": "The best Community management in 2024"
        
      },
      {
        "sub_cat_name": "Dating apps",
        "sub_cat_heading": "The best Dating apps in 2024"
        
      },
      {
        "sub_cat_name": "Link in bio tools",
        "sub_cat_heading": "The best Link in bio tools in 2024"
       
      },
      {
        "sub_cat_name": "Live streaming platforms",
        "sub_cat_heading": "The best Live streaming platforms in 2024"
        
      },
      {
        "sub_cat_name": "Messaging apps",
        "sub_cat_heading": "The best Messaging apps in 2024"
       
      },
      {
        "sub_cat_name": "Microblogging platforms",
        "sub_cat_heading": "The best Microblogging platforms in 2024"
        
      },
      {
        "sub_cat_name": "Newsletter platforms",
        "sub_cat_heading": "The best Newsletter platforms in 2024"
       
      },
      {
        "sub_cat_name": "Photo sharing",
        "sub_cat_heading": "The best Photo sharing in 2024"
       
      },
      {
        "sub_cat_name": "Professional networking platforms",
        "sub_cat_heading": "The best Professional networking platforms in 2024"
       
      },
      {
        "sub_cat_name": "Safety and Privacy platforms",
        "sub_cat_heading": "The best Safety and Privacy platforms in 2024"
       
      },
      {
        "sub_cat_name": "Social bookmarking",
        "sub_cat_heading": "The best Social bookmarking in 2024"
        
      },
      {
        "sub_cat_name": "Social Networking",
        "sub_cat_heading": "The best Social Networking in 2024"
       
      },
      {
        "sub_cat_name": "Video and Voice calling",
        "sub_cat_heading": "The best Video and Voice calling in 2024"
       
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