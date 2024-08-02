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
    "cat_name": "Design and Creative",
    "cat_heading": "The best Design and Creative in 2024",
    "sub_categories": [
      {
        "sub_cat_name": "3D and Animation",
        "sub_cat_heading": "The best 3D and Animation in 2024"
        
      },
      {
        "sub_cat_name": "Background removal tools",
        "sub_cat_heading": "The best Background removal tools in 2024"
        
      },
      {
        "sub_cat_name": "Camera apps",
        "sub_cat_heading": "The best Camera apps in 2024"
        
      },
      {
        "sub_cat_name": "Design inspiration websites",
        "sub_cat_heading": "The best Design inspiration websites in 2024"
       
      },
      {
        "sub_cat_name": "Design mockups",
        "sub_cat_heading": "The best Design mockups in 2024"
        
      },
      {
        "sub_cat_name": "Design resources",
        "sub_cat_heading": "The best Design resources in 2024"
       
      },
      {
        "sub_cat_name": "Digital whiteboards",
        "sub_cat_heading": "The best Digital whiteboards in 2024"
        
      },
      {
        "sub_cat_name": "Graphic design tools",
        "sub_cat_heading": "The best Graphic design tools in 2024"
       
      },
      {
        "sub_cat_name": "Icon sets",
        "sub_cat_heading": "The best Icon sets in 2024"
       
      },
      {
        "sub_cat_name": "Interface design tools",
        "sub_cat_heading": "The best Interface design tools in 2024"
       
      },
      {
        "sub_cat_name": "Mobile editing apps",
        "sub_cat_heading": "The best Mobile editing apps in 2024"
       
      },
      {
        "sub_cat_name": "Photo editing",
        "sub_cat_heading": "The best Photo editing in 2024"
        
      },
      {
        "sub_cat_name": "Podcasting",
        "sub_cat_heading": "The best Podcasting in 2024"
       
      },
      {
        "sub_cat_name": "Social audio apps",
        "sub_cat_heading": "The best Social audio apps in 2024"
       
      },
      {
        "sub_cat_name": "Space design apps",
        "sub_cat_heading": "The best Space design apps in 2024"
        
      },
      {
        "sub_cat_name": "Stock photo sites",
        "sub_cat_heading": "The best Stock photo sites in 2024"
       
      },
      {
        "sub_cat_name": "UI frameworks",
        "sub_cat_heading": "The best UI frameworks in 2024"
       
      },
      {
        "sub_cat_name": "User research",
        "sub_cat_heading": "The best User research in 2024"
        
      },
      {
        "sub_cat_name": "Video editing",
        "sub_cat_heading": "The best Video editing in 2024"
        
      },
      {
        "sub_cat_name": "Wallpapers",
        "sub_cat_heading": "The best Wallpapers in 2024"
        
      },
      {
        "sub_cat_name": "Wireframing",
        "sub_cat_heading": "The best Wireframing in 2024"
        
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