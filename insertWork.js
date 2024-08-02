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
    "cat_name": "Work and Productivity",
    "cat_heading": "The best Work and Productivity in 2024",
    "sub_categories": [
      {
        "sub_cat_name": "Ad blockers",
        "sub_cat_heading": "The best Ad blockers in 2024"
        
      },
      {
        "sub_cat_name": "App switcher",
        "sub_cat_heading": "The best App switcher in 2024"
        
      },
      {
        "sub_cat_name": "Calender Apps",
        "sub_cat_heading": "The best Calender Apps in 2024"
        
      },
      {
        "sub_cat_name": "Customer Support",
        "sub_cat_heading": "The best Customer Support in 2024"
       
      },
      {
        "sub_cat_name": "Email clients",
        "sub_cat_heading": "The best Email clients in 2024"
        
      },
      {
        "sub_cat_name": "E-signature",
        "sub_cat_heading": "The best E-signature in 2024"
       
      },
      {
        "sub_cat_name": "File storage and sharing",
        "sub_cat_heading": "The best File storage and sharing in 2024"
        
      },
      {
        "sub_cat_name": "Hiring Software",
        "sub_cat_heading": "The best Hiring Software in 2024"
       
      },
      {
        "sub_cat_name": "Knowledge base software",
        "sub_cat_heading": "The best Knowledge base software in 2024"
       
      },
      {
        "sub_cat_name": "Legal services",
        "sub_cat_heading": "The best Legal services in 2024"
       
      },
      {
        "sub_cat_name": "Meeting software",
        "sub_cat_heading": "The best Meeting software in 2024"
       
      },
      {
        "sub_cat_name": "Note and writing apps",
        "sub_cat_heading": "The best Note and writing apps in 2024"
        
      },
      {
        "sub_cat_name": "Password managers",
        "sub_cat_heading": "The best Password managers in 2024"
       
      },
      {
        "sub_cat_name": "PDF Editor",
        "sub_cat_heading": "The Headless PDF Editor in 2024"
       
      },
      {
        "sub_cat_name": "Presentation Software",
        "sub_cat_heading": "The best Presentation Software in 2024"
        
      },
      {
        "sub_cat_name": "Product demo",
        "sub_cat_heading": "The best Product demo in 2024"
       
      },
      {
        "sub_cat_name": "Project management software",
        "sub_cat_heading": "The best Project management software in 2024"
       
      },
      {
        "sub_cat_name": "Resume tools",
        "sub_cat_heading": "The best Resume tools in 2024"
        
      },
      {
        "sub_cat_name": "Scheduling software",
        "sub_cat_heading": "The best Scheduling software in 2024"
        
      },
      {
        "sub_cat_name": "Screenshots and screen recording apps",
        "sub_cat_heading": "The best Screenshots and screen recording apps in 2024"
        
      },
      {
        "sub_cat_name": "Search",
        "sub_cat_heading": "The best Search in 2024"
        
      },
      {
        "sub_cat_name": "Spreadsheets",
        "sub_cat_heading": "The best Spreadsheets in 2024"
        
      },
      {
        "sub_cat_name": "Team collaboration software",
        "sub_cat_heading": "The best Team collaboration software in 2024"
       
      },
      {
        "sub_cat_name": "Time tracking apps",
        "sub_cat_heading": "The best Time tracking apps in 2024"
       
      },
      {
        "sub_cat_name": "Video conferencing",
        "sub_cat_heading": "The best Video conferencing in 2024"
       
      },
      {
        "sub_cat_name": "Virtual office platforms",
        "sub_cat_heading": "The best Website Analytics in 2024"
       
      },
      {
        "sub_cat_name": "Web browsers",
        "sub_cat_heading": "The best Web browsers in 2024"
       
      },
      {
        "sub_cat_name": "Writing assistants",
        "sub_cat_heading": "The best Writing assistants in 2024"
       
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