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
      "cat_name": "Ecommerance",
      "cat_heading": "The best Ecommerance in 2024",
      "sub_categories": [
        {
          "sub_cat_name": "Ecommerance platforms",
          "sub_cat_heading": "The best Ecommerance platforms in 2024",
          "products": [
            {
              "rank": "1",
              "imageUrl": "https://ph-files.imgix.net/bd89fecd-21c2-43d2-8e0b-1fd956b8d498.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
              "title": "Lemon Squeezy — Sell digital products the easy-peasy way",
              "description": "The all-in-one platform for selling digital products, subscriptions, software licenses, and courses is finally here, and it goes by the name Lemon Squeezy."
            },
            {
              "rank": "2",
              "imageUrl": "https://ph-files.imgix.net/15ecfff0-03dc-4505-a8c0-2f762f27cf51.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
              "title": "RevenueCat — Build, analyze, and grow your subscription or app service",
              "description": "A powerful, reliable, and free to use in-app purchase server with cross-platform support."
            },
            {
              "rank": "3",
              "imageUrl": "https://ph-files.imgix.net/cbf16b4e-3f05-41f2-9398-f832db639f3e.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
              "title": "Paddle — We Help Software Companies Grow",
              "description": "Paddle is the All-in-One SaaS Commerce platform. Paddle unifies payments, subscription and billing management, manual invoicing, sales tax and financial compliance, fraud, and more with a unified tool that grows with you."
            },
            {
              "rank": "4",
              "imageUrl": "https://ph-files.imgix.net/ed9034f5-ba0e-4c51-9c48-a4d5a0eae2e4.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
              "title": "Shopify — Powering millions of businesses",
              "description": "Join the best of over 800,000 Shopify merchants selling online, in-store, and everywhere in between. For assistance, reach out to @ShopifySupport"
            },
            {
              "rank": "5",
              "imageUrl": "https://ph-files.imgix.net/7676c5ad-4e39-4396-b586-bb0c355cb89d.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
              "title": "Typeframes — Stunning product videos, in minutes",
              "description": "Typeframes lets you create eye-catching product videos to elevate your brand and convert more customers."
            },
            {
              "rank": "6",
              "imageUrl": "https://ph-files.imgix.net/6763fe36-5b0d-4232-be13-00af66a18230.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=14&h=14&fit=crop",
              "title": "PhotoRoom — AI-powered photo studio for commerce",
              "description": "Create studio-quality images in seconds. In one tap, remove the background and compose an image that will showcase a product or a model. PhotoRoom gives design super powers to everyone because you edit objects and not pixels PhotoRoom is an image editing app that lets you capture, edit, and mix images by editing objects."
            },
            {
              "rank": "7",
              "imageUrl": "https://ph-files.imgix.net/bf1ebcaf-674d-45fe-aec6-debe967022d1.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
              "title": "Approximated — Offer custom automated domains as a feature to your users.",
              "description": ""
            },
            {
              "rank": "8",
              "imageUrl": "https://ph-files.imgix.net/df4c2ec0-33bf-49bd-ac27-9279a72002c6.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
              "title": "WordPress.org — WCFM Marketplace – Best Multivendor Marketplace for WooCommerce – WordPress plugin",
              "description": "The most featured and powerful multi vendor plugin for WordPress, setup best woocommerce marketplace store in minutes. More flexible than WC Markerpla …"
            },
            {
              "rank": "9",
              "imageUrl": "https://ph-files.imgix.net/ad5ebf69-433d-4c60-878f-2c87b0a93fba.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
              "title": "Usequeue — All-in-one platform to launch your productized services",
              "description": "Launch your productized service business in less than 5mins with everything setup and ready to go for you. No more gluing together 8 softwares and confusing your clients. Add checkout, client portal, and collaboration tools to your website for a seamless experience for your clients and giving you the only platform you'll need to work with them. All 100% white-labeled on your domain."
            },
            {
              "rank": "10",
              "imageUrl": "https://ph-files.imgix.net/e067f5d2-8e9d-4f83-8c5a-0a85aee66413.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
              "title": "Squarespace — Everything needed to power your ideas.",
              "description": "Squarespace is the all-in-one solution for anyone looking to create a beautiful website. Domains, eCommerce, hosting, galleries, analytics, and 24/7 support all included."
            }
          ]
        },
        {
          "sub_cat_name": "Marketplace sites",
          "sub_cat_heading": "The best Marketplace sites in 2024",
          "products": [
            {
              "rank": "1",
              "imageUrl": "https://ph-files.imgix.net/68e0a5eb-be7f-4b52-bbcf-0f78226cef91.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
              "title": "Whatnot — The safest place to buy & sell collectibles",
              "description": "Whatnot is building a marketplace to buy & sell authentic collectibles. We review every product to ensure it’s authentic. Today, you can use Whatnot to purchase Funko Pops -- one of the most popular collectibles on the market."
            },
            {
              "rank": "2",
              "imageUrl": "https://ph-files.imgix.net/e78180a6-884d-4a86-94e9-03a3097b021f.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
              "title": "AffordHunt — Discover Affordable AI & SaaS Alternatives",
              "description": "With the rise of AI and SaaS tool prices, many indie hackers and SMBs feel left behind. Enter AffordHunt - a curated platform spotlighting powerful yet budget-friendly tool alternatives. Dive in to find the right tool that aligns with your needs and budget."
            },
            {
              "rank": "3",
              "imageUrl": "https://ph-files.imgix.net/df4c2ec0-33bf-49bd-ac27-9279a72002c6.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
              "title": "WordPress.org — WCFM Marketplace – Best Multivendor Marketplace for WooCommerce – WordPress plugin",
              "description": "The most featured and powerful multi vendor plugin for WordPress, setup best woocommerce marketplace store in minutes. More flexible than WC Markerpla …"
            },
            {
              "rank": "4",
              "imageUrl": "https://ph-files.imgix.net/d829bd87-562c-487e-a425-51fdc7d5ef28.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
              "title": "AppSumo.com — Reduce your business costs",
              "description": "AppSumo was created with one idea in mind: the tools you need to grow your business shouldn’t put you out of business. AppSumo was started by serial online entrepreneur Noah Kagan — in his mom’s basement. Today, AppSumo is home to some of the best-looking and smartest (not to mention most humble) techies Austin, Texas has ever seen."
            },
            {
              "rank": "5",
              "imageUrl": "https://ph-files.imgix.net/7fad5ead-5a29-4653-b59c-cd887a4ad6c5.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
              "title": "Dots — Cash for the internet",
              "description": "Dots is the simplest way to send and accept payments online, especially if you’re a marketplace or hiring 1099 workers. Our API accepts payments from your favorite credit card processor, PayPal, and more. It also enables payouts using Venmo, ACH, Zelle, etc."
            },
            {
              "rank": "6",
              "imageUrl": "https://ph-files.imgix.net/4cedfbe8-b1ef-45eb-a362-cb13a895948a.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
              "title": "TikTok Shop App Store — Your growth is here. Launch your app on our marketplace.",
              "description": "TikTok Shop's App Store is an ecommerce solution marketplace where developers are able to innovate and shape the future of social commerce for sellers. With robust API documentation, developer tools, and an engaged community, your success is on the horizon!"
            }
          ]
        },
        {
            "sub_cat_name": "Payment processors",
            "sub_cat_heading": "The best Payment processors in 2024",
            "products": [
              {
                "rank": "1",
                "imageUrl": "https://ph-files.imgix.net/7a01a00b-d41d-4367-b44e-e1d0a672819b.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "Stripe — Financial infrastructure for the internet",
                "description": "Accept payments, send payouts, automate financial processes, and ultimately grow revenue."
              },
              {
                "rank": "2",
                "imageUrl": "https://ph-files.imgix.net/cbf16b4e-3f05-41f2-9398-f832db639f3e.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "Paddle — We Help Software Companies Grow",
                "description": "Paddle is the All-in-One SaaS Commerce platform. Paddle unifies payments, subscription and billing management, manual invoicing, sales tax and financial compliance, fraud, and more with a unified tool that grows with you."
              },
              {
                "rank": "3",
                "imageUrl": "https://ph-files.imgix.net/46057414-1dfa-4a70-b52c-12281b385f00.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "Plaid — The safer way for your users to link financial accounts",
                "description": "The tools developers need to create easy and accessible experiences for their users. With just a few lines of code, users can connect to more than 12,000 financial institutions."
              },
              {
                "rank": "4",
                "imageUrl": "https://ph-files.imgix.net/f24237a4-b7c8-44ac-8b92-e91a3d28628b.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "Razorpay — Power your finance, grow your business",
                "description": "Accept payments from customers. Automate payouts to vendors & employees. Never run out of working capital."
              },
              {
                "rank": "5",
                "imageUrl": "https://ph-files.imgix.net/eb25d527-d423-4702-b0f2-9d6b6afe1789.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "Superwall — Paywalls made easy",
                "description": ""
              },
              {
                "rank": "6",
                "imageUrl": "https://ph-files.imgix.net/29c5bafb-178f-41d4-bdcf-b3a9dcd978b0.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "Chargebee — The smartest way to set up your subscription billing.",
                "description": "Chargebee's subscription billing software powers end-to-end recurring billing for subscription businesses with smart automation."
              },
              {
                "rank": "7",
                "imageUrl": "https://ph-files.imgix.net/efd26bfa-389a-4018-ba4c-1c31dfc5e488.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=14&h=14&fit=crop",
                "title": "Hyperline — Flexible billing platform for B2B SaaS businesses.",
                "description": ""
              },
              {
                "rank": "8",
                "imageUrl": "https://ph-files.imgix.net/35fa9a2c-e327-48b9-a9a7-0b6d95c69537.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "Glassfy — The in-app subscriptions platform",
                "description": "Glassfy open-source SDK provides you with subscription infrastructure, real-time subscription events and out-of-the-box monetization tools on iOS, Android, Stripe and Paddle."
              },
              {
                "rank": "9",
                "imageUrl": "https://ph-files.imgix.net/c5f08f1d-6637-46e5-874f-6c411827048e.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "PayPal — Send Payments, Pay Online, Merchant Account",
                "description": "New Money gives you more control over your funds so you can spend, send, and receive the way you want. See what’s possible. For help, tweet us at @AskPayPal."
              },
              {
                "rank": "10",
                "imageUrl": "https://ph-files.imgix.net/b14c3f03-0d4c-40cc-8ea9-43e32c9970cf.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "ExtensionPay — Easy Stripe integration for browser extensions",
                "description": ""
              }
            ]
          },
          {
            "sub_cat_name": "Shoppify apps",
            "sub_cat_heading": "The best Shoppify apps in 2024",
            "products": [
              {
                "rank": "1",
                "imageUrl": "https://ph-files.imgix.net/ed9034f5-ba0e-4c51-9c48-a4d5a0eae2e4.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "Shopify — Powering millions of businesses",
                "description": "Join the best of over 800,000 Shopify merchants selling online, in-store, and everywhere in between. For assistance, reach out to @ShopifySupport"
              },
              {
                "rank": "2",
                "imageUrl": "https://ph-files.imgix.net/cf942563-41e3-4591-a6eb-3c7f738a135b.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "Gadget — The fastest way to build and run web apps",
                "description": "Gadget is a full-stack, serverless JavaScript platform for web app developers who want to build faster and maintain less. Skip the boilerplate features, repetitive code, and busywork, and get your ideas out the door in hours."
              },
              {
                "rank": "3",
                "imageUrl": "https://ph-files.imgix.net/33d5fcdd-4b26-4574-b64d-7f46f03588b5.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "Shopify — 10+ Best ecommerce platforms for your business in 2023",
                "description": "This comparison guide will take a look at the top 12 ecommerce platforms and how to evaluate which is best for your business needs."
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
