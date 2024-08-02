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
    "cat_name": "Engineering and Development",
    "cat_heading": "The best engineering & development in 2024",
    "sub_categories": [
      {
        "sub_cat_name": "A/B Testing",
        "sub_cat_heading": "The best a/b testing in 2024"
        
      },
      {
        "sub_cat_name": "AI coding assistants",
        "sub_cat_heading": "The best AI coding assistants in 2024"
        
      },
      {
        "sub_cat_name": "Authentication And Identity",
        "sub_cat_heading": "The best Authentication And Identity in 2024"
        
      },
      {
        "sub_cat_name": "Automation Tools",
        "sub_cat_heading": "The best Automation Tools in 2024"
       
      },
      {
        "sub_cat_name": "Cloud Computing Platforms",
        "sub_cat_heading": "The best Cloud Computing Platforms in 2024"
        
      },
      {
        "sub_cat_name": "CMS",
        "sub_cat_heading": "The best CMS in 2024"
       
      },
      {
        "sub_cat_name": "Code Editors",
        "sub_cat_heading": "The best Code Editors in 2024"
        
      },
      {
        "sub_cat_name": "Code Review Tools",
        "sub_cat_heading": "The best Code Review Tools in 2024"
       
      },
      {
        "sub_cat_name": "Command Line Tools",
        "sub_cat_heading": "The best Command Line Tools in 2024"
       
      },
      {
        "sub_cat_name": "Data Analysis Tools ",
        "sub_cat_heading": "The best Data Analysis Tools in 2024"
       
      },
      {
        "sub_cat_name": "Databases and Backend",
        "sub_cat_heading": "The best Databases and Backend in 2024"
       
      },
      {
        "sub_cat_name": "Data Visualization Tools",
        "sub_cat_heading": "The best Data Visualization Tools in 2024"
        
      },
      {
        "sub_cat_name": "Git Clients",
        "sub_cat_heading": "The best Git Clients in 2024"
       
      },
      {
        "sub_cat_name": "Headless CMS Software",
        "sub_cat_heading": "The Headless CMS Software in 2024"
       
      },
      {
        "sub_cat_name": "Issue Tracking Software",
        "sub_cat_heading": "The best Issue Tracking Software in 2024"
        
      },
      {
        "sub_cat_name": "Membership Software",
        "sub_cat_heading": "The best Membership Software in 2024"
       
      },
      {
        "sub_cat_name": "No-Code Platforms",
        "sub_cat_heading": "The best No-Code Platforms in 2024"
       
      },
      {
        "sub_cat_name": "Security and Compliance",
        "sub_cat_heading": "The best Security and Compliance in 2024"
        
      },
      {
        "sub_cat_name": "standup Bots",
        "sub_cat_heading": "The best standup Bots in 2024"
        
      },
      {
        "sub_cat_name": "Static Site Generators",
        "sub_cat_heading": "The best Static Site Generators in 2024"
        
      },
      {
        "sub_cat_name": "Testing and QA",
        "sub_cat_heading": "The best Testing and QA in 2024"
        
      },
      {
        "sub_cat_name": "Unified API",
        "sub_cat_heading": "The best Unified API in 2024"
        
      },
      {
        "sub_cat_name": "Video Hosting",
        "sub_cat_heading": "The best Video Hosting in 2024"
       
      },
      {
        "sub_cat_name": "VPN Client",
        "sub_cat_heading": "The best VPN Client in 2024"
       
      },
      {
        "sub_cat_name": "Web Hosting Services",
        "sub_cat_heading": "The best Web Hosting Services in 2024"
       
      },
      {
        "sub_cat_name": "Website Analytics",
        "sub_cat_heading": "The best Website Analytics in 2024"
       
      },
      {
        "sub_cat_name": "Website Builders",
        "sub_cat_heading": "The best Website Builders in 2024"
       
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