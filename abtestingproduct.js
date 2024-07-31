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
        "sub_cat_heading": "The best a/b testing in 2024",
        "products": [
          {
            "rank": "1",
            "name":"PostHog",
            "icon": "https://ph-files.imgix.net/0329497e-75f9-4fcc-8dae-5b279bcb56e8.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=14&h=14&fit=crop",
            "title": "PostHog — The open source product OS",
            "description": "Open-source product analytics, session recording, feature flagging and A/B testing that you can self-host. Everything engineers need to build better products.",
            "productUrl": "https://www.producthunt.com/products/posthog/shoutout",
            "websiteUrl": "https://posthog.com/?ref=producthunt",
            "imageUrl1": "https://ph-files.imgix.net/4d476341-9ced-408d-9516-50e5623fa042.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl2": "https://ph-files.imgix.net/8c68a387-4753-4439-8a9a-5f828546619a.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl3": "https://ph-files.imgix.net/d8fe9515-97bf-434d-8489-29ad35b4fb30.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "videoUrl": ""
          },
          {
            "rank": "2",
            "name":"Statsig",
            "icon": "https://ph-files.imgix.net/6fedb2b3-4abe-47f0-999b-cac7a91b5a39.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "Statsig — #1 feature management and product experimentation platform",
            "description": "Statsig is the leading product experimentation platform that helps businesses use data to ship fast and build better products. Companies like OpenAI, Notion, Brex, and Eventbrite use Statsig to manage feature rollouts, automate experiments, and make decisions based on performance metrics. Founded in 2021 by former Facebook engineers, Statsig supports thousands of experiments impacting over a billion end users globally.",
            "productUrl": "https://www.producthunt.com/products/statsig/shoutouts",
            "websiteUrl": "https://www.statsig.com/?ref=producthunt",
            "imageUrl1": "https://ph-files.imgix.net/3330d7d8-fe5a-4989-8d54-d9b46a96d6e2.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl2": "https://ph-files.imgix.net/1a667b3a-7820-4b59-bb8f-be8bc77c7514.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl3": "https://ph-files.imgix.net/9f7a554b-8657-4117-adc5-50bae7928e43.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "videoUrl": ""
          },
          {
            "rank": "3",
            "name":"Adapty",
            "icon": "https://ph-files.imgix.net/2e54cf9a-80a5-4397-ab91-16f56a8f9d1b.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=14&h=14&fit=crop",
            "title": "Adapty — Grow mobile in-app subscriptions 💵",
            "description": "Adapty is a service for analyzing and growing mobile in-app subscriptions. Use Adapty for paywalls A/B testing, measuring economy and customers promotion.",
            "productUrl": "https://www.producthunt.com/products/adapty/shoutouts",
            "websiteUrl": "https://adapty.io/?ref=producthunt",
            "imageUrl1": "https://ph-files.imgix.net/7c55cc47-154f-4ff8-a2bf-a7b9b2818272.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl2": "https://ph-files.imgix.net/be921d60-43b0-49d2-b22f-d685d76ef8a8.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl3": "https://ph-files.imgix.net/954e5803-0f47-4514-8365-41eca3a79a3e.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "videoUrl": ""
          },
          {
            "rank": "4",
            "name":"Glassfy",
            "icon": "https://ph-files.imgix.net/35fa9a2c-e327-48b9-a9a7-0b6d95c69537.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "Glassfy — The in-app subscriptions platform",
            "description": "Glassfy open-source SDK provides you with subscription infrastructure, real-time subscription events and out-of-the-box monetization tools on iOS, Android, Stripe and Paddle.",
            "productUrl": "https://www.producthunt.com/products/glassfy/shoutouts",
            "websiteUrl": "https://glassfy.io/?ref=producthunt",
            "imageUrl1": "https://ph-files.imgix.net/dc48b822-5512-4798-bea6-6a341cba905c.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&fit=crop&dpr=1",
            "imageUrl2": "",
            "imageUrl3": "",
            "videoUrl": ""
          },
          {
            "rank": "5",
            "name":"GrowthBook",
            "icon": "https://ph-files.imgix.net/f70f6d3f-d70d-4a12-b677-223b100edb59.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "GrowthBook — The open-source LaunchDarkly alternative",
            "description": "GrowthBook is an open source feature flagging and experimentation platform. Safely release features to production and measure the impact on your key metrics.",
            "productUrl": "https://www.producthunt.com/products/growthbook/shoutouts",
            "websiteUrl": "https://www.growthbook.io/?ref=producthunt",
            "imageUrl1": "https://ph-files.imgix.net/3b86fe7b-6b39-4a9f-9f13-ec1303a70732.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl2": "https://ph-files.imgix.net/ce6b634c-a35b-4ca9-9729-a2bedc2cf6bb.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl3": "https://ph-files.imgix.net/33dd37e9-99ca-46d9-8ccd-cd5d87fc2bea.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "videoUrl": ""
          },
          {
            "rank": "6",
            "name":"Countly",
            "icon": "https://ph-files.imgix.net/728aaa80-d054-4ff6-9cc5-56c61c9925ad.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "Countly — # 1 privacy-led product analytics",
            "description": "Ensuring privacy compliance by design, the Countly platform brings together user-friendliness, privacy, customization, and all-in-one functionality. We help individuals, teams, and organizations reach their product dreams by tracking their product's performance, user journeys, and behavior. Make the best of our advanced User Profiles, Dashboards, Crashes, Events, Funnels, A/B Testing, Surveys, Cohorts, and more. PS. Whether you have a mobile, web, desktop, or IoT app, we have you covered. <3",
            "productUrl": "https://www.producthunt.com/products/countly/shoutouts",
            "websiteUrl": "http://countly.com/?ref=producthunt",
            "imageUrl1": "https://ph-files.imgix.net/7769e73c-6df3-40b2-9731-faf85d158de5.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&fit=crop&dpr=1",
            "imageUrl2": "",
            "imageUrl3": "",
            "videoUrl": ""
          }
        ]
      }
    ]
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

    // Insert sub-categories and products
    for (const sub_category of data.category.sub_categories) {
      const subCategoryResult = await client.query(
        `INSERT INTO Sub_Category (sub_cat_name, sub_cat_heading, cat_id) VALUES ($1, $2, $3) RETURNING sub_cat_id`,
        [sub_category.sub_cat_name, sub_category.sub_cat_heading, cat_id]
      );

      const sub_cat_id = subCategoryResult.rows[0].sub_cat_id;

      for (const product of sub_category.products) {
        await client.query(
          `INSERT INTO Products (rank, icon, title, description, productUrl, websiteUrl, imageUrl1, imageUrl2, imageUrl3, videoUrl, cat_id, sub_cat_id) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12)`,
          [product.rank, product.icon, product.title, product.description, product.productUrl, product.websiteUrl, product.imageUrl1, product.imageUrl2, product.imageUrl3, product.videoUrl, cat_id, sub_cat_id]
        );
      }
    }

    console.log("Data inserted successfully");
  } catch (err) {
    console.error("Error inserting data", err);
  } finally {
    await client.end();
  }
};

insertData();
