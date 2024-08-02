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
    "cat_name": "Finance",
    "cat_heading": "The best Finance in 2024",
    "sub_categories": [
      {
        "sub_cat_name": "Accounting software",
        "sub_cat_heading": "The best Accounting software in 2024"
        
      },
      {
        "sub_cat_name": "Budgeting apps",
        "sub_cat_heading": "The best Budgeting apps in 2024"
        
      },
      {
        "sub_cat_name": "Credit score tools",
        "sub_cat_heading": "The best Credit score tools in 2024"
        
      },
      {
        "sub_cat_name": "Financial planning",
        "sub_cat_heading": "The best Financial planning in 2024"
       
      },
      {
        "sub_cat_name": "Fundraising resources",
        "sub_cat_heading": "The best Fundraising resources in 2024"
        
      },
      {
        "sub_cat_name": "Investing",
        "sub_cat_heading": "The best Investing in 2024"
       
      },
      {
        "sub_cat_name": "Invoicing tools",
        "sub_cat_heading": "The best Invoicing tools in 2024"
        
      },
      {
        "sub_cat_name": "Money transfer",
        "sub_cat_heading": "The best Money transfer in 2024"
       
      },
      {
        "sub_cat_name": "Neobanks",
        "sub_cat_heading": "The best Neobanks in 2024"
       
      },
      {
        "sub_cat_name": "Online banking",
        "sub_cat_heading": "The best Online banking in 2024"
       
      },
      {
        "sub_cat_name": "Payroll software",
        "sub_cat_heading": "The best Payroll software in 2024"
       
      },
      {
        "sub_cat_name": "Remote workforce tools",
        "sub_cat_heading": "The best Remote workforce tools in 2024"
        
      },
      {
        "sub_cat_name": "Retirement planning",
        "sub_cat_heading": "The best Retirement planning in 2024"
       
      },
      {
        "sub_cat_name": "Saving apps",
        "sub_cat_heading": "The best Saving apps in 2024"
       
      },
      {
        "sub_cat_name": "Startup financial planning",
        "sub_cat_heading": "The best Startup financial planning in 2024"
        
      },
      {
        "sub_cat_name": "Stock trading platforms",
        "sub_cat_heading": "The best Stock trading platforms in 2024"
       
      },
      {
        "sub_cat_name": "Tax preparation",
        "sub_cat_heading": "The best Tax preparation in 2024"
       
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