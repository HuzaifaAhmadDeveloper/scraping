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
    "cat_name": "Marketing and Sales",
    "cat_heading": "The best Marketing and Sales in 2024",
    "sub_categories": [
      {
        "sub_cat_name": "Advertising tools",
        "sub_cat_heading": "The best Advertising tools in 2024"
        
      },
      {
        "sub_cat_name": "Affiliate marketing",
        "sub_cat_heading": "The best Affiliate marketing in 2024"
        
      },
      {
        "sub_cat_name": "Best SEO tools",
        "sub_cat_heading": "The best Best SEO tools in 2024"
        
      },
      {
        "sub_cat_name": "Business intelligence software",
        "sub_cat_heading": "The best Business intelligence software in 2024"
       
      },
      {
        "sub_cat_name": "CRM software",
        "sub_cat_heading": "The best CRM software in 2024"
        
      },
      {
        "sub_cat_name": "Customer loyalty platforms",
        "sub_cat_heading": "The best Customer loyalty platforms in 2024"
       
      },
      {
        "sub_cat_name": "Email marketing",
        "sub_cat_heading": "The best Email marketing in 2024"
        
      },
      {
        "sub_cat_name": "Influencer marketing platforms",
        "sub_cat_heading": "The best Influencer marketing platforms in 2024"
       
      },
      {
        "sub_cat_name": "Keyword research tools",
        "sub_cat_heading": "The best Keyword research tools in 2024"
       
      },
      {
        "sub_cat_name": "Landing page builders",
        "sub_cat_heading": "The best Landing page builders in 2024"
       
      },
      {
        "sub_cat_name": "Lead generation software",
        "sub_cat_heading": "The best Lead generation software in 2024"
       
      },
      {
        "sub_cat_name": "Marketing automation platforms",
        "sub_cat_heading": "The best Marketing automation platforms in 2024"
        
      },
      {
        "sub_cat_name": "Sales Training",
        "sub_cat_heading": "The best Sales Training in 2024"
       
      },
      {
        "sub_cat_name": "Social media management tools",
        "sub_cat_heading": "The best Social media management tools in 2024"
       
      },
      {
        "sub_cat_name": "Social media scheduling tools",
        "sub_cat_heading": "The best Social media scheduling tools in 2024"
        
      },
      {
        "sub_cat_name": "Survey and form builders",
        "sub_cat_heading": "The best Survey and form builders in 2024"
       
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