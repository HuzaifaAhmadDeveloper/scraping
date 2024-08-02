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
    "cat_name": "AI",
    "cat_heading": "The best AI in 2024",
    "sub_categories": [
      {
        "sub_cat_name": "AI Characters",
        "sub_cat_heading": "The best AI Characters in 2024"
        
      },
      {
        "sub_cat_name": "AI chatbots",
        "sub_cat_heading": "The best AI chatbots in 2024"
        
      },
      {
        "sub_cat_name": "AI Content Detection",
        "sub_cat_heading": "The best AI Content Detection in 2024"
        
      },
      {
        "sub_cat_name": "AI generative art",
        "sub_cat_heading": "The best AI generative art in 2024"
       
      },
      {
        "sub_cat_name": "AI Headshot Generators",
        "sub_cat_heading": "The best AI Headshot Generators in 2024"
        
      },
      {
        "sub_cat_name": "AI Infrastructure",
        "sub_cat_heading": "The best AI Infrastructure in 2024"
       
      },
      {
        "sub_cat_name": "AI Metrics and Evaluation",
        "sub_cat_heading": "The best AI Metrics and Evaluation in 2024"
        
      },
      {
        "sub_cat_name": "AI Voice Generation Software",
        "sub_cat_heading": "The best AI Voice Generation Software in 2024"
       
      },
      {
        "sub_cat_name": "Avatar generators",
        "sub_cat_heading": "The best Avatar generators in 2024"
       
      },
      {
        "sub_cat_name": "ChatGPT Prompts",
        "sub_cat_heading": "The best ChatGPT Prompts in 2024"
       
      },
      {
        "sub_cat_name": "LLMs",
        "sub_cat_heading": "The best LLMs in 2024"
       
      },
      {
        "sub_cat_name": "Predictive AI",
        "sub_cat_heading": "The best Predictive AI in 2024"
        
      },
      {
        "sub_cat_name": "Text-to-Speech",
        "sub_cat_heading": "The best Text-to-Speech in 2024"
       
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