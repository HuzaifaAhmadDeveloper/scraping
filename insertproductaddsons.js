const { Client } = require('pg');

// Connect to your postgres DB
const client = new Client({
  user: 'postgres',
  host: 'localhost',
  database: 'scrapDB',
  password: '0322',
  port: 5432,
});

const data ={
    "category": {
      "cat_name": "Product add-ons",
      "cat_heading": "The best Product add-ons in 2024",
      "sub_categories": [
        {
          "sub_cat_name": "Chrome extensions",
          "sub_cat_heading": "The best Chrome extensions in 2024",
          "products": [
            {
              "rank": "1",
              "imageUrl": "https://ph-files.imgix.net/8022c507-8920-423f-9330-63a14764535d.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
              "title": "Loom — Easily record and share videos",
              "description": "Record on your camera and screen on any device using the Chrome extension, desktop app, or mobile app. Share your video link in a few clicks."
            },
            {
              "rank": "2",
              "imageUrl": "https://ph-files.imgix.net/841b3aef-e135-4ef9-a5c8-48cc4d35a774.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=14&h=14&fit=crop",
              "title": "tl;dv — Catch up on meetings in minutes",
              "description": "Have fewer, more focused live meetings. Highlight and share relevant meeting moments on the fly. Keep your team always in the loop."
            },
            {
              "rank": "3",
              "imageUrl": "https://ph-files.imgix.net/211cc6af-7953-44b8-8831-706b156235cf.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
              "title": "Focused Task — Open source mac menubar app that helps you do deep work",
              "description": "Features: * Focus on a single task * Shortcut for everything * Menu-bar app * Organize your tasks with todos, bookmarks and notes * Drag & Drop file as bookmarks * Open-sourced written with Electron, React, Redux"
            },
            {
              "rank": "4",
              "imageUrl": "https://ph-files.imgix.net/4698ac9d-f1ce-41ff-9c01-189cf0d609a4.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
              "title": "Plasmo — The browser extension platform",
              "description": "Streamline the process of building browser extensions, allowing you to focus on shipping your product. Say goodbye to slow iteration and hello to a better development experience"
            },
            {
              "rank": "5",
              "imageUrl": "https://ph-files.imgix.net/a3721298-cf1a-4abd-8949-e2a5197fc80e.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
              "title": "Hunter — Connect with anyone.",
              "description": "Hunter is the leading solution to find and verify professional email addresses. Start using Hunter and connect with the people that matter for your business."
            },
            {
              "rank": "6",
              "imageUrl": "https://ph-files.imgix.net/abff8d50-5720-4088-b7f2-5c68dc03de10.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
              "title": "Realm App — Converts idle browser homepage into quick-access dashboard.",
              "description": "Realm App is a literacy and productivity tool as a browser extension. Users can customize their workspaces using a range of widgets such as bookmarks and curated reading lists, to suit their role and usage."
            },
            {
              "rank": "7",
              "imageUrl": "https://ph-files.imgix.net/e1fd5359-bc49-44dd-85e9-561feb680394.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
              "title": "Yandex Translate for Chrome — Extension for Chrome browser",
              "description": "Quickly translate selected text on web page. In toolbar popup, you can translate input text. And also you can translate text directly in pictures."
            },
            {
              "rank": "8",
              "imageUrl": "https://ph-files.imgix.net/f026c8ee-75a2-44de-afa4-684be5c68bdc.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
              "title": "Ugly Duckling — Consistency on 𝕏 made easier.",
              "description": "Ugly Duckling is a simple and affordable analytics tool that helps you stay consistent and grow on X. The first version of Ugly Duckling, a Chrome extension, received a warm reception from the community and garnered over 100 daily active users now makes a comeback as a web application with new sharing features, beautiful charts and community leaderboard."
            }
          ]
        },
        {
          "sub_cat_name": "Figma plugins",
          "sub_cat_heading": "The best Figma plugins in 2024",
          "products": [
            {
              "rank": "1",
              "imageUrl": "https://ph-files.imgix.net/db00a7a1-6778-4e51-a953-de5a9a339bc9.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
              "title": "Figma — The collaborative interface design tool",
              "description": "A collaborative design tool for creating user interfaces, mobile apps, and websites with a wide range of features, including vector editing tools, prototyping, and version control, all in a cloud-based platform."
            },
            {
              "rank": "2",
              "imageUrl": "https://ph-files.imgix.net/8c7b16db-c6c1-4695-a26e-7c9baca30f95.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
              "title": "Weavely — Build web forms with custom UX and UI from Figma designs",
              "description": "Build web forms that stand out with custom UX and UI, without coding. The Weavely form builder enables you to design and publish forms directly in Figma. Get creative with form design, apply conditional logic and reuse brand assets to collect more responses."
            },
            {
              "rank": "3",
              "imageUrl": "https://ph-files.imgix.net/284b90ea-f607-4802-b74e-701e8bc52cab.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=14&h=14&fit=crop",
              "title": "Musho — Your new AI design assistant",
              "description": "Musho is so much more than a design tool—think of it as your go-to creative assistant in Figma that turns simple prompts into gorgeous websites. 💛"
            },
            {
              "rank": "4",
              "imageUrl": "https://ph-files.imgix.net/6b009896-a716-4e21-a13e-963837356563.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
              "title": "Jitter — 💫 Fast and simple motion design tool on the web.",
              "description": "Jitter is like Figma for motion design: it makes it easy to create animations for your videos, websites or apps, all in the browser."
            },
            {
              "rank": "5",
              "imageUrl": "https://ph-files.imgix.net/3f1c203b-342e-43e7-9f51-b9dc39b7d2c7.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
              "title": "Heroicons — A unique set of icons that are easy to customize with CSS",
              "description": "Beautiful hand-crafted SVG icons, by the makers of Tailwind CSS."
            }
          ]
        },
        {
            "sub_cat_name": "Figma templates",
            "sub_cat_heading": "The best Figma templates in 2024",
            "products": [
              {
                "rank": "1",
                "imageUrl": "https://ph-files.imgix.net/47c001f9-2e78-4e5b-bfcf-d97b12baf5b4.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "Relume — Build Faster, Design Better in Webflow & Figma",
                "description": "Search our library of 1,000+ components, copy with one click and paste them into your Webflow or Figma project. You can also create components for personal use, clients or the Webflow community. Simply paste in components from your Webflow project, save them to a folder and share it to anyone."
              },
              {
                "rank": "2",
                "imageUrl": "https://ph-files.imgix.net/8482c47c-c154-4343-8bdd-53f8c4282d9a.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "Flowbite — Open-source ecosystem built on top of Tailwind CSS",
                "description": "Flowbite is an ecosystem of open-source libraries, tools, and products built around Tailwind CSS consisting of a Figma design system, component library, website section and page templates, and other tools."
              },
              {
                "rank": "3",
                "imageUrl": "https://ph-files.imgix.net/4ee7be67-1c05-4c06-8845-7306ab362af8.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "Polaris for Admin Figma UI kit — Shopify Polaris UI kit now available in Figma",
                "description": "Our Polaris for Admin Web UI kit is now available in Figma. You can access the full kit in Figma with reusable components and up-to-date Polaris guidelines, icons, and color palette. Find out more at https://figma.com/@shopify and https://polaris.shopify.com"
              }
            ]
          },
          {
            "sub_cat_name": "Notion templates",
            "sub_cat_heading": "The best Notion templates in 2024",
            "products": [
              {
                "rank": "1",
                "imageUrl": "https://ph-files.imgix.net/8cbc145a-5abf-456c-bd2d-2576b74a6c0d.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "Super — Create Websites with Notion",
                "description": "Create a website in less than a minute that’s easy to manage and looks great, with instant page loads, SEO optimization, and no-code. All your content stays in Notion so you can focus on creating while Super handles the rest."
              }
            ]
          },
          {
            "sub_cat_name": "Slack apps",
            "sub_cat_heading": "The best Slack apps in 2024",
            "products": [
              {
                "rank": "1",
                "imageUrl": "https://ph-files.imgix.net/ed0e2783-29ad-40d6-aa90-8599937d8a53.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "RocketSim for Xcode — Record the iOS Simulator into MP4 or GIF",
                "description": "Record the iOS Simulator into GIF or MP4 Create a recording from the iOS simulator and export it as GIF or MP4. Directly drag it into Slack, GitHub, Twitter, or any other app. Recording is not all. Organise and launch Universal Links (deeplinks) with ease."
              },
              {
                "rank": "2",
                "imageUrl": "https://ph-files.imgix.net/d2e024f8-11f8-4993-8932-a2b5c3cca9e0.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "Standuply: Poll & Survey Scrum Bot — Project Management Assistant for Slack and MS Teams",
                "description": "Standuply is the #1 Standup Bot. It runs asynchronous stand-up & retrospective meetings, Slack polls, and tracks team performance to automate your Agile processes."
              },
              {
                "rank": "3",
                "imageUrl": "https://ph-files.imgix.net/98500024-bbc4-4a50-a532-67abb3dd00c0.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "ChatBotKit — The fastest way to build advanced AI chat bots",
                "description": "ChatBotKit helps you create conversational AI chatbots with your own data to communicate naturally with users on your website, Slack, and Discord."
              },
              {
                "rank": "4",
                "imageUrl": "https://ph-files.imgix.net/cc11264b-69f6-4f8d-95bc-319a606461e1.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "Jibble — TRACK TIME & ATTENDANCE FOR YOUR SLACK TEAM",
                "description": "jibble.io was first indexed by Google in September 2016"
              },
              {
                "rank": "5",
                "imageUrl": "https://ph-files.imgix.net/4dd05943-c165-41a7-95eb-3cf85416f3a3.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "Karmabot — Peer recognition and appreciation for business chats",
                "description": "Praise, values, rewards, reports, surveys, mini-games, onboardings and 1-on-1s automated. Karma brings true bonding to remote teams. You can build stronger, happier teams on Slack and MS Teams, set goals, track performance and reward excellence."
              },
              {
                "rank": "6",
                "imageUrl": "https://ph-files.imgix.net/294a07d2-7039-445e-ab71-89fb51bdf139.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "Billy (birthday bot for Slack) — Never forget a teammate's birthday again",
                "description": "🎉 Automates birthday and work anniversary celebrations in Slack. 🎉 Join thousands of companies who brought fun into their workplace. Install now for free (in less than 30s ⚡️)"
              },
              {
                "rank": "7",
                "imageUrl": "https://ph-files.imgix.net/918d10ab-6b2c-4561-bdcc-8835033549a3.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "Alfy — Random Coffee App for Slack",
                "description": "The simplest and most-affordable random coffee app for Slack. Alfy is a must-have for every remote/hybrid company. Made with love by BuddiesHR.com 💜"
              }
            ]
          },
          {
            "sub_cat_name": "Twitter apps",
            "sub_cat_heading": "The best Twitter apps in 2024",
            "products": [
              {
                "rank": "1",
                "imageUrl": "https://ph-files.imgix.net/fc9be527-b179-4e6a-8046-046df8e25bf4.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "Typefully 2.0 — Effortlessly publish your content",
                "description": "Write and improve your content with AI. Grow your audience across Twitter and LinkedIn. Become more productive with a Command Bar."
              },
              {
                "rank": "2",
                "imageUrl": "https://ph-files.imgix.net/ffd43e31-ce84-466a-a5c1-c53bcbd398e5.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "Twitter — Communicate and stay connected",
                "description": "Twitter brings you closer to what you care about."
              },
              {
                "rank": "3",
                "imageUrl": "https://ph-files.imgix.net/ed0e2783-29ad-40d6-aa90-8599937d8a53.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "RocketSim for Xcode — Record the iOS Simulator into MP4 or GIF",
                "description": "Record the iOS Simulator into GIF or MP4 Create a recording from the iOS simulator and export it as GIF or MP4. Directly drag it into Slack, GitHub, Twitter, or any other app. Recording is not all. Organise and launch Universal Links (deeplinks) with ease."
              },
              {
                "rank": "4",
                "imageUrl": "https://ph-files.imgix.net/ffaf1907-e70a-4208-adb4-2dbdc58f4a52.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "BrandBird — Turn screenshots into beautiful social media images & posts",
                "description": "Create beautiful images for Twitter, Instagram, Dribbble, LinkedIn, and boost your social media views & engagement in seconds. BrandBird allows you to brand your accounts uniquely by creating templates, adding your brand colors, and your personal watermark!"
              },
              {
                "rank": "5",
                "imageUrl": "https://ph-files.imgix.net/d0bb79f4-dead-4c5c-b6d6-c4d584394a00.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "Typefully — Write, schedule, and publish great Twitter threads.",
                "description": "Write, schedule & publish great threads, without distractions — and boost your Twitter growth with powerful analytics."
              },
              {
                "rank": "6",
                "imageUrl": "https://ph-files.imgix.net/87ae88d0-2d31-4823-96a3-7aa7d92b280e.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=14&h=14&fit=crop",
                "title": "Buffer — Make your business stand out and reach more customers on social media",
                "description": "Buffer is a software application for the web and mobile, designed to manage accounts in social networks."
              }
            ]
          },
          {
            "sub_cat_name": "Wordpress plugins",
            "sub_cat_heading": "The best Wordpress plugins in 2024",
            "products": [
              {
                "rank": "1",
                "imageUrl": "https://ph-files.imgix.net/df4c2ec0-33bf-49bd-ac27-9279a72002c6.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "WordPress.org — WCFM Marketplace – Best Multivendor Marketplace for WooCommerce – WordPress plugin",
                "description": "The most featured and powerful multi vendor plugin for WordPress, setup best woocommerce marketplace store in minutes. More flexible than WC Markerpla …"
              },
              {
                "rank": "2",
                "imageUrl": "https://ph-files.imgix.net/1a847381-7751-4536-b652-3b486107b1b7.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "WordPress Playground — Experience a WordPress that runs entirely in your browser!",
                "description": "Explore, experiment, and play with WordPress—no setup required! WordPress Playground is a flexible tool that lets you: Try plugins and themes in a live virtual environment Experiment with an anonymous WordPress website"
              }
            ]
          }
      ] // Main array for sub category
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
          `INSERT INTO Products (rank, imageUrl, title, description, cat_id, sub_cat_id) VALUES ($1, $2, $3, $4, $5, $6)`,
          [product.rank, product.imageUrl, product.title, product.description, cat_id, sub_cat_id]
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
