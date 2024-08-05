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
    "category_name": "Ecommerce",
    "category_heading": "The best Ecommerce in 2024",
    "sub_categories": [
      {
        "sub_category_name": "Ecommerce platforms",
        "sub_category_heading": "The best Ecommerce platforms in 2024",
        "products": [
          {
            "rank": "1",
            "name": "Lemon Squeezy",
            "icon": "https://ph-files.imgix.net/bd89fecd-21c2-43d2-8e0b-1fd956b8d498.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "Lemon Squeezy — Sell digital products the easy-peasy way",
            "description": "The all-in-one platform for selling digital products, subscriptions, software licenses, and courses is finally here, and it goes by the name Lemon Squeezy.",
            "productUrl": "https://www.producthunt.com/products/lemon-squeezy/shoutouts",
            "websiteUrl": "https://www.lemonsqueezy.com/",
            "imageUrl1": "https://ph-files.imgix.net/6664047c-8b28-452a-a6b6-5360c2d5c930.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl2": "https://ph-files.imgix.net/96d5ed42-12af-458d-a37e-f2d66f79db9b.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl3": "https://ph-files.imgix.net/d89892ab-cb0a-4e73-9fb4-03f086a58b93.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "videoUrl": ""
          },
          {
            "rank": "2",
            "name": "RevenueCat",
            "icon": "https://ph-files.imgix.net/15ecfff0-03dc-4505-a8c0-2f762f27cf51.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "RevenueCat — Build, analyze, and grow your subscription or app service",
            "description": "A powerful, reliable, and free to use in-app purchase server with cross-platform support.",
            "productUrl": "https://www.producthunt.com/products/revenuecat/shoutouts",
            "websiteUrl": "http://www.revenuecat.com/",
            "imageUrl1": "https://ph-files.imgix.net/2cb3aea7-b361-48a0-bd3e-3925913ba5c5.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl2": "https://ph-files.imgix.net/2b47e5a8-c922-4357-8d25-64edd347bac1.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl3": "https://ph-files.imgix.net/441ac1bd-99cb-45d0-9d67-bade5e61703f.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "videoUrl": ""
          },
          {
            "rank": "3",
            "name": "Paddle",
            "icon": "https://ph-files.imgix.net/cbf16b4e-3f05-41f2-9398-f832db639f3e.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "Paddle — We Help Software Companies Grow",
            "description": "Paddle is the All-in-One SaaS Commerce platform. Paddle unifies payments, subscription and billing management, manual invoicing, sales tax and financial compliance, fraud, and more with a unified tool that grows with you.",
            "productUrl": "https://www.producthunt.com/products/paddle/shoutouts",
            "websiteUrl": "https://paddle.com/",
            "imageUrl1": "https://ph-files.imgix.net/134eecb9-a6db-4ba7-a0a3-00cc076413d6.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&fit=crop&dpr=1",
            "imageUrl2": "",
            "imageUrl3": "",
            "videoUrl": ""
          },
          {
            "rank": "4",
            "name": "Shopify",
            "icon": "https://ph-files.imgix.net/ed9034f5-ba0e-4c51-9c48-a4d5a0eae2e4.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "Shopify — Powering millions of businesses",
            "description": "Join the best of over 800,000 Shopify merchants selling online, in-store, and everywhere in between. For assistance, reach out to @ShopifySupport",
            "productUrl": "https://www.producthunt.com/products/shopify/shoutouts",
            "websiteUrl": "http://shopify.com/",
            "imageUrl1": "https://ph-files.imgix.net/f23efd31-f293-4397-861c-35e250f01efe.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl2": "https://ph-files.imgix.net/59ad2e40-9ae5-49e3-be0f-48a7b31adefd.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl3": "https://ph-files.imgix.net/efced69f-8821-4f16-abea-43ff6598dd74.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "videoUrl": ""
          },
          {
            "rank": "5",
            "name": "Typeframes",
            "icon": "https://ph-files.imgix.net/7676c5ad-4e39-4396-b586-bb0c355cb89d.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "Typeframes — Stunning product videos, in minutes",
            "description": "Typeframes lets you create eye-catching product videos to elevate your brand and convert more customers.",
            "productUrl": "https://www.producthunt.com/products/typeframes/shoutouts",
            "websiteUrl": "https://www.typeframes.com/",
            "imageUrl1": "",
            "imageUrl2": "https://ph-files.imgix.net/65805f78-9034-40e8-ba51-b6322591d7a2.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl3": "https://ph-files.imgix.net/2c321552-afd1-4019-b3c4-8a78e4163295.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "videoUrl": "https://youtu.be/keOCTtNazr4"
          },
          {
            "rank": "6",
            "name": "PhotoRoom",
            "icon": "https://ph-files.imgix.net/6763fe36-5b0d-4232-be13-00af66a18230.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=14&h=14&fit=crop",
            "title": "PhotoRoom — AI-powered photo studio for commerce",
            "description": "Create studio-quality images in seconds. In one tap, remove the background and compose an image that will showcase a product or a model. PhotoRoom gives design super powers to everyone because you edit objects and not pixels PhotoRoom is an image editing app that lets you capture, edit, and mix images by editing objects.",
            "productUrl": "https://www.producthunt.com/products/bg-app/shoutouts",
            "websiteUrl": "https://photoroom.com/",
            "imageUrl1": "",
            "imageUrl2": "https://ph-files.imgix.net/468fc322-d53d-4fac-82b6-717c3086e4a5.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl3": "https://ph-files.imgix.net/9d33d5b9-22f3-49e3-a722-575ade84f4df.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "videoUrl": "https://youtu.be/51wbm-h8Trk"
          },
          {
            "rank": "7",
            "name": "Approximated",
            "icon": "https://ph-files.imgix.net/bf1ebcaf-674d-45fe-aec6-debe967022d1.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "Approximated — Offer custom automated domains as a feature to your users.",
            "description": "",
            "productUrl": "https://www.producthunt.com/products/approximated/shoutouts",
            "websiteUrl": "https://approximated.app/",
            "imageUrl1": "",
            "imageUrl2": "",
            "imageUrl3": "",
            "videoUrl": ""
          },
          {
            "rank": "8",
            "name": "WordPress.org",
            "icon": "https://ph-files.imgix.net/df4c2ec0-33bf-49bd-ac27-9279a72002c6.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "WordPress.org — WCFM Marketplace – Best Multivendor Marketplace for WooCommerce – WordPress plugin",
            "description": "The most featured and powerful multi vendor plugin for WordPress, setup best woocommerce marketplace store in minutes. More flexible than WC Markerpla …",
            "productUrl": "https://www.producthunt.com/products/wordpress-org/shoutouts",
            "websiteUrl": "https://wordpress.org/plugins/wc-multivendor-marketplace",
            "imageUrl1": "https://ph-files.imgix.net/63168cf5-b604-49ec-afa1-435b8303b093.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&fit=crop&dpr=1",
            "imageUrl2": "",
            "imageUrl3": "",
            "videoUrl": ""
          },
          {
            "rank": "9",
            "name": "Usequeue",
            "icon": "https://ph-files.imgix.net/ad5ebf69-433d-4c60-878f-2c87b0a93fba.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "Usequeue — All-in-one platform to launch your productized services",
            "description": "Launch your productized service business in less than 5mins with everything setup and ready to go for you. No more gluing together 8 softwares and confusing your clients. Add checkout, client portal, and collaboration tools to your website for a seamless experience for your clients and giving you the only platform you'll need to work with them. All 100% white-labeled on your domain.",
            "productUrl": "https://www.producthunt.com/products/queue-4/shoutouts",
            "websiteUrl": "https://usequeue.com/",
            "imageUrl1": "https://ph-files.imgix.net/50df5ccc-87ca-41f9-9a5d-0fe8c2c16514.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl2": "https://ph-files.imgix.net/5f2769cc-bb67-443d-a2cb-c6d7b8bda634.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl3": "https://ph-files.imgix.net/847e9905-e5d0-4a5f-8cf8-7c0bca5197f2.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "videoUrl": ""
          },
          {
            "rank": "10",
            "name": "Squarespace",
            "icon": "https://ph-files.imgix.net/e067f5d2-8e9d-4f83-8c5a-0a85aee66413.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "Squarespace — Everything needed to power your ideas.",
            "description": "Squarespace is the all-in-one solution for anyone looking to create a beautiful website. Domains, eCommerce, hosting, galleries, analytics, and 24/7 support all included.",
            "productUrl": "https://www.producthunt.com/products/squarespace/shoutouts",
            "websiteUrl": "http://www.squarespace.com/",
            "imageUrl1": "https://youtu.be/50jkNIWvd-A",
            "imageUrl2": "https://youtu.be/KpMIxBH2Eik",
            "imageUrl3": "https://ph-files.imgix.net/8be51eae-9afd-448b-8105-f4a91b6bf5ce.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "videoUrl": ""
          },
          {
            "rank": "11",
            "name": "Chargebee",
            "icon": "https://ph-files.imgix.net/29c5bafb-178f-41d4-bdcf-b3a9dcd978b0.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "Chargebee — The smartest way to set up your subscription billing.",
            "description": "Chargebee's subscription billing software powers end-to-end recurring billing for subscription businesses with smart automation.",
            "productUrl": "https://www.producthunt.com/products/chargebee/shoutouts",
            "websiteUrl": "http://chargebee.com/",
            "imageUrl1": "https://youtu.be/SoRVkqFPexU",
            "imageUrl2": "https://ph-files.imgix.net/6f8efc2e-1cc7-42d6-9556-8eaa91b97c3d.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl3": "https://ph-files.imgix.net/20bb3065-4ea4-475f-a6ff-69a7a03e0e57.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "videoUrl": ""
          },
          {
            "rank": "12",
            "name": "Superwall",
            "icon": "https://ph-files.imgix.net/eb25d527-d423-4702-b0f2-9d6b6afe1789.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "Superwall — Paywalls made easy",
            "description": "",
            "productUrl": "https://www.producthunt.com/products/superwall/shoutouts",
            "websiteUrl": "https://superwall.com/",
            "imageUrl1": "",
            "imageUrl2": "",
            "imageUrl3": "",
            "videoUrl": ""
          },
          {
            "rank": "13",
            "name": "Glassfy",
            "icon": "https://ph-files.imgix.net/35fa9a2c-e327-48b9-a9a7-0b6d95c69537.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "Glassfy — The in-app subscriptions platform",
            "description": "Glassfy open-source SDK provides you with subscription infrastructure, real-time subscription events and out-of-the-box monetization tools on iOS, Android, Stripe and Paddle.",
            "productUrl": "https://www.producthunt.com/products/glassfy/shoutouts",
            "websiteUrl": "https://glassfy.io/",
            "imageUrl1": "https://ph-files.imgix.net/dc48b822-5512-4798-bea6-6a341cba905c.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&fit=crop&dpr=1",
            "imageUrl2": "",
            "imageUrl3": "",
            "videoUrl": ""
          },
          {
            "rank": "14",
            "name": "Shopify Plus",
            "icon": "https://ph-files.imgix.net/33ac6eab-fbf4-43b4-ab24-5818ef48c8c9.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "Shopify Plus — Enterprise Ecommerce Platform",
            "description": "The best enterprise ecommerce platform for high-growth businesses. See why companies making $1M-500M are growing an average of 126% YoY on Shopify Plus—690% above the ecommerce industry average. Grow bigger, faster.",
            "productUrl": "https://www.producthunt.com/products/shopify-plus/shoutouts",
            "websiteUrl": "https://www.shopify.com/plus",
            "imageUrl1": "https://ph-files.imgix.net/f9e271c5-9d80-4536-b51c-0644b73405d5.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&fit=crop&dpr=1",
            "imageUrl2": "",
            "imageUrl3": "",
            "videoUrl": ""
          },
          {
            "rank": "15",
            "name": "SalesPopup",
            "icon": "https://ph-files.imgix.net/80b677e8-62aa-4120-b0d9-d91cb6c8cb3f.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=14&h=14&fit=crop",
            "title": "SalesPopup — The fastest way to boost your conversion rate.",
            "description": "Increase your sales easily by showing recent transactions in a popup users will trust. Customize it, copy the script and you’re good to go! Yes, it’s that easy.",
            "productUrl": "https://www.producthunt.com/products/salespopup/shoutouts",
            "websiteUrl": "https://salespopup.io/",
            "imageUrl1": "https://www.loom.com/share/1892d6d6691748229dd04a527935d814?sid=2d03a012-026a-4dac-b28d-6071b047fd6f",
            "imageUrl2": "https://ph-files.imgix.net/35aea4f4-ab1d-4b62-b21a-70ca079995af.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl3": "https://ph-files.imgix.net/d453542d-98f9-4b9e-8c19-6319592d70a4.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "videoUrl": ""
          },
          {
            "rank": "16",
            "name": "Drip",
            "icon": "https://ph-files.imgix.net/5efd30ac-155e-407e-a1e9-b3384e57830f.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "Drip — Email and SMS marketing for growing ecommerce brands.",
            "description": "Drip is the first ECRM–an Ecommerce CRM designed for building personal and profitable relationships with your customers at scale.",
            "productUrl": "https://www.producthunt.com/products/drip/shoutouts",
            "websiteUrl": "https://drip.com/",
            "imageUrl1": "https://ph-files.imgix.net/f0c86579-0f73-43eb-8012-4f2368d7a706.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl2": "https://ph-files.imgix.net/b5019e5b-2f9c-49aa-bd80-12d61f41a616.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl3": "https://ph-files.imgix.net/484e597f-44be-4428-8c76-01d640968a45.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "videoUrl": ""
          },
          {
            "rank": "17",
            "name": "AfterShip",
            "icon": "https://ph-files.imgix.net/6cda860b-560e-4b96-bbc8-a11df4aad327.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "AfterShip — Build a connected experience across the customer lifecycle.",
            "description": "Improve customer lifecycle management throughout the shopping journey. And empower your brand with tools that inspire product discovery, enable end-to-end order visibility, and facilitate worry-free returns.",
            "productUrl": "https://www.producthunt.com/products/aftership/shoutouts",
            "websiteUrl": "https://www.aftership.com/",
            "imageUrl1": "https://ph-files.imgix.net/e73c0612-d186-49eb-9333-031240a7a7fd.webp?fm=mp4&crop=max&w=256&h=160&dpr=2#t=0.001",
            "imageUrl2": "https://ph-files.imgix.net/6a7cafb6-9e08-47d1-8080-6ab9b77f4f1b.webp?fm=mp4&crop=max&w=256&h=160&dpr=2#t=0.001",
            "imageUrl3": "",
            "videoUrl": ""
          },
          {
            "rank": "18",
            "name": "Node-js Development",
            "icon": "https://ph-files.imgix.net/ec2a3ea8-8205-447b-94e2-19727c35cdc2.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "Node-js Development — Node.js development services",
            "description": "Comfygen is a Node.js development service that helps businesses build scalable and efficient web applications using the Node.js platform. Our team of experienced developers can help you with everything from building custom APIs to developing real-time chat applications, eCommerce websites, and much more.",
            "productUrl": "https://www.producthunt.com/products/node-js-development/shoutouts",
            "websiteUrl": "https://www.comfygen.com/node-js-development",
            "imageUrl1": "https://ph-files.imgix.net/801d67f6-4b0b-4ebc-a6fc-4b3df73afb2e.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&fit=crop&dpr=1",
            "imageUrl2": "",
            "imageUrl3": "",
            "videoUrl": ""
          },
          {
            "rank": "19",
            "name": "GoDaddy 4.0",
            "icon": "https://ph-files.imgix.net/9678b832-f7e3-4dcf-a264-9342e4ddf9f9.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "GoDaddy 4.0 — Make & run websites or domains",
            "description": "Introducing GoDaddy 4.0, a completely new app designed for entrepreneurs like you who are looking to build & run an online business. Create and run a modern website, manage orders, requests and appointments on the go, and get found everywhere online.",
            "productUrl": "https://www.producthunt.com/products/godaddy-4-0/shoutouts",
            "websiteUrl": "https://apps.apple.com/us/app/godaddy/id1152717397",
            "imageUrl1": "https://ph-files.imgix.net/6f0393e4-ff49-4522-8c07-63619c3398d8.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl2": "https://ph-files.imgix.net/28f4eecc-4ef8-46f8-9065-1f0abe2dcd68.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl3": "https://ph-files.imgix.net/c9e35579-aec9-4632-8053-75f51ba9dfef.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "videoUrl": ""
          },
          {
            "rank": "20",
            "name": "Wix",
            "icon": "https://ph-files.imgix.net/1501815f-e898-4796-9514-69c2ed025210.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=14&h=14&fit=crop",
            "title": "Wix — Create a website you're proud of",
            "description": "A leading web development platform that lets anyone create a stunning, professional website",
            "productUrl": "https://www.producthunt.com/products/wix/shoutouts",
            "websiteUrl": "http://www.wix.com/",
            "imageUrl1": "",
            "imageUrl2": "https://ph-files.imgix.net/69a15b95-04d9-4cea-bb3d-defdf7e9a85f.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl3": "https://ph-files.imgix.net/2f31d3d8-a83c-45ee-987e-51b2eb906679.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "videoUrl": "https://youtu.be/spD09_W6lPg"
          },
          {
            "rank": "21",
            "name": "Rutter",
            "icon": "https://ph-files.imgix.net/d44f306a-aac0-4200-9f6f-4dde09236992.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "Rutter — One API for every Ecommerce platform",
            "description": "Rutter is a universal API for reading and writing commerce data across any accounting system, payment processor or ecommerce platform. Our new Accounting APIs make it easy to integrate with Quickbooks, Xero, Netsuite, Freshbooks and Sage with a single API.",
            "productUrl": "https://www.producthunt.com/products/rutter/shoutouts",
            "websiteUrl": "https://rutterapi.com/",
            "imageUrl1": "",
            "imageUrl2": "https://ph-files.imgix.net/818fcbd2-f93c-4446-831c-81dc1740389e.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl3": "https://ph-files.imgix.net/bbc3a44a-3c6a-4728-b8e0-d7aedc7a8731.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "videoUrl": "https://youtu.be/mMjcStkRrS0"
          },
          {
            "rank": "22",
            "name": "Shopify",
            "icon": "https://ph-files.imgix.net/33d5fcdd-4b26-4574-b64d-7f46f03588b5.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "Shopify — 10+ Best ecommerce platforms for your business in 2023",
            "description": "This comparison guide will take a look at the top 12 ecommerce platforms and how to evaluate which is best for your business needs.",
            "productUrl": "https://www.producthunt.com/products/shopify-5/shoutouts",
            "websiteUrl": "https://www.shopify.com/blog/best-ecommerce-platforms",
            "imageUrl1": "https://ph-files.imgix.net/d8498375-f22a-4e8f-ba09-1b376de064ca.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl2": "https://ph-files.imgix.net/b429de24-3273-4377-87a2-6efbc3422147.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl3": "https://ph-files.imgix.net/a42fe24d-4f64-4132-b7bb-63ed7db48819.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "videoUrl": ""
          },
          {
            "rank": "23",
            "name": "TikTok Shop App Store",
            "icon": "https://ph-files.imgix.net/4cedfbe8-b1ef-45eb-a362-cb13a895948a.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "TikTok Shop App Store — Your growth is here. Launch your app on our marketplace.",
            "description": "TikTok Shop's App Store is an ecommerce solution marketplace where developers are able to innovate and shape the future of social commerce for sellers. With robust API documentation, developer tools, and an engaged community, your success is on the horizon!",
            "productUrl": "https://www.producthunt.com/products/tiktok-shop-app-store/shoutouts",
            "websiteUrl": "https://partner.us.tiktokshop.com/",
            "imageUrl1": "",
            "imageUrl2": "",
            "imageUrl3": "",
            "videoUrl": ""
          },
          {
            "rank": "24",
            "name": "Gumroad",
            "icon": "https://ph-files.imgix.net/1512ea7f-1d1e-42ce-a4c5-8c0fe05223d2.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "Gumroad — Gumroad helps creators do more of what they love.",
            "description": "Gumroad is an online platform that enables creators to sell digital products directly to consumers. With easy setup and no upfront costs, Gumroad provides a simple way to monetize content, courses, and more.",
            "productUrl": "https://www.producthunt.com/products/gumroad/shoutouts",
            "websiteUrl": "https://gumroad.com/",
            "imageUrl1": "",
            "imageUrl2": "https://ph-files.imgix.net/a24fa098-5fd2-4a1c-93db-099270f19e5c.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl3": "https://ph-files.imgix.net/0df34971-b191-48c5-9a86-b6eeaa38d133.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "videoUrl": "https://youtu.be/cldgz7D7iyg"
          }
        ]
        
      },
      {
        "sub_category_name": "Marketplace sites",
        "sub_category_heading": "The best Marketplace sites in 2024",
        "products": [
          {
            "rank": "1",
            "name": "Whatnot",
            "icon": "https://ph-files.imgix.net/68e0a5eb-be7f-4b52-bbcf-0f78226cef91.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "Whatnot — The safest place to buy & sell collectibles",
            "description": "Whatnot is building a marketplace to buy & sell authentic collectibles. We review every product to ensure it’s authentic. Today, you can use Whatnot to purchase Funko Pops -- one of the most popular collectibles on the market.",
            "productUrl": "https://www.producthunt.com/products/whatnot/shoutouts",
            "websiteUrl": "https://www.whatnot.com/",
            "imageUrl1": "https://ph-files.imgix.net/03a26e29-73a9-41ce-ad32-079e1874e8ed.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl2": "https://ph-files.imgix.net/cf010d43-c29c-498b-a760-f58dbca85aef.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl3": "https://ph-files.imgix.net/b687821d-c6f3-4fcd-bc04-73fc246a062e.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "videoUrl": ""
          },
          {
            "rank": "2",
            "name": "AffordHunt",
            "icon": "https://ph-files.imgix.net/e78180a6-884d-4a86-94e9-03a3097b021f.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "AffordHunt — Discover Affordable AI & SaaS Alternatives",
            "description": "With the rise of AI and SaaS tool prices, many indie hackers and SMBs feel left behind. Enter AffordHunt - a curated platform spotlighting powerful yet budget-friendly tool alternatives. Dive in to find the right tool that aligns with your needs and budget.",
            "productUrl": "https://www.producthunt.com/products/affordhunt/shoutouts",
            "websiteUrl": "https://affordhunt.com/",
            "imageUrl1": "https://ph-files.imgix.net/788eaf99-23d6-4f05-8aba-045b7d9fd533.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl2": "https://ph-files.imgix.net/683a0ab4-272b-4d38-b030-1ed673c1ea49.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl3": "https://ph-files.imgix.net/9276a090-3a6f-48cb-b631-d9ace69e4b4d.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "videoUrl": ""
          },
          {
            "rank": "3",
            "name": "WordPress.org",
            "icon": "https://ph-files.imgix.net/df4c2ec0-33bf-49bd-ac27-9279a72002c6.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "WordPress.org — WCFM Marketplace – Best Multivendor Marketplace for WooCommerce – WordPress plugin",
            "description": "The most featured and powerful multi vendor plugin for WordPress, setup best woocommerce marketplace store in minutes. More flexible than WC Markerpla …",
            "productUrl": "https://www.producthunt.com/products/wordpress-org/shoutouts",
            "websiteUrl": "https://wordpress.org/plugins/wc-multivendor-marketplace",
            "imageUrl1": "https://ph-files.imgix.net/63168cf5-b604-49ec-afa1-435b8303b093.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&fit=crop&dpr=1",
            "imageUrl2": "",
            "imageUrl3": "",
            "videoUrl": ""
          },
          {
            "rank": "4",
            "name": "AppSumo.com",
            "icon": "https://ph-files.imgix.net/d829bd87-562c-487e-a425-51fdc7d5ef28.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "AppSumo.com — Reduce your business costs",
            "description": "AppSumo was created with one idea in mind: the tools you need to grow your business shouldn’t put you out of business. AppSumo was started by serial online entrepreneur Noah Kagan — in his mom’s basement. Today, AppSumo is home to some of the best-looking and smartest (not to mention most humble) techies Austin, Texas has ever seen.",
            "productUrl": "https://www.producthunt.com/products/appsumo-com/shoutouts",
            "websiteUrl": "http://www.appsumo.com/",
            "imageUrl1": "",
            "imageUrl2": "https://ph-files.imgix.net/7f43a8fb-94f2-4423-a65a-e468e8248d6c.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl3": "https://ph-files.imgix.net/3b5e01bc-d183-40b1-b235-1ae9d232fa00.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "videoUrl": "https://youtu.be/e7XLGZq7__Y"
          },
          {
            "rank": "5",
            "name": "Dots",
            "icon": "https://ph-files.imgix.net/7fad5ead-5a29-4653-b59c-cd887a4ad6c5.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "Dots — Cash for the internet",
            "description": "Dots is the simplest way to send and accept payments online, especially if you’re a marketplace or hiring 1099 workers. Our API accepts payments from your favorite credit card processor, PayPal, and more. It also enables payouts using Venmo, ACH, Zelle, etc.",
            "productUrl": "https://www.producthunt.com/products/dots-3/shoutouts",
            "websiteUrl": "https://www.senddots.com/",
            "imageUrl1": "",
            "imageUrl2": "https://ph-files.imgix.net/1828ea06-e04f-4b1c-94d8-1459cf1d2d13.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl3": "https://ph-files.imgix.net/0589cfa3-cfca-4ce3-a7bf-d927005ee06f.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "videoUrl": "https://youtu.be/OWH3f1WAwF4"
          },
          {
            "rank": "6",
            "name": "TikTok Shop App Store",
            "icon": "https://ph-files.imgix.net/4cedfbe8-b1ef-45eb-a362-cb13a895948a.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "TikTok Shop App Store — Your growth is here. Launch your app on our marketplace.",
            "description": "TikTok Shop's App Store is an ecommerce solution marketplace where developers are able to innovate and shape the future of social commerce for sellers. With robust API documentation, developer tools, and an engaged community, your success is on the horizon!",
            "productUrl": "https://www.producthunt.com/products/tiktok-shop-app-store/shoutouts",
            "websiteUrl": "https://partner.us.tiktokshop.com/",
            "imageUrl1": "https://ph-files.imgix.net/6039e60f-f90a-4fa5-9324-e4e744c95218.gif?fm=mp4&crop=max&w=256&h=160&dpr=2#t=0.001",
            "imageUrl2": "https://ph-files.imgix.net/11758ace-29d3-4b22-a177-150d4167777c.gif?fm=mp4&crop=max&w=256&h=160&dpr=2#t=0.001",
            "imageUrl3": "https://ph-files.imgix.net/1818bf10-eba6-4b11-b32c-29c8fec8fea2.gif?fm=mp4&crop=max&w=256&h=160&dpr=2#t=0.001",
            "videoUrl": ""
          }
        ]
        
      },
      {
        "sub_category_name": "Payment processors",
        "sub_category_heading": "The best Payment processors in 2024",
        "products": [
          {
            "rank": "1",
            "name": "Stripe",
            "icon": "https://ph-files.imgix.net/7a01a00b-d41d-4367-b44e-e1d0a672819b.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "Stripe — Financial infrastructure for the internet",
            "description": "Accept payments, send payouts, automate financial processes, and ultimately grow revenue.",
            "productUrl": "https://www.producthunt.com/products/stripe/shoutouts",
            "websiteUrl": "https://stripe.com/",
            "imageUrl1": "https://ph-files.imgix.net/4b1b7159-41d5-4351-b455-7cf020407a72.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl2": "https://ph-files.imgix.net/9946c056-ef74-4f1c-b372-0dc645e111ce.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl3": "https://ph-files.imgix.net/01345684-3785-4c22-89f4-1e1aa33001c5.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "videoUrl": ""
          },
          {
            "rank": "2",
            "name": "Paddle",
            "icon": "https://ph-files.imgix.net/cbf16b4e-3f05-41f2-9398-f832db639f3e.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "Paddle — We Help Software Companies Grow",
            "description": "Paddle is the All-in-One SaaS Commerce platform. Paddle unifies payments, subscription and billing management, manual invoicing, sales tax and financial compliance, fraud, and more with a unified tool that grows with you.",
            "productUrl": "https://www.producthunt.com/products/paddle/shoutouts",
            "websiteUrl": "https://paddle.com/",
            "imageUrl1": "https://ph-files.imgix.net/134eecb9-a6db-4ba7-a0a3-00cc076413d6.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&fit=crop&dpr=1",
            "imageUrl2": "",
            "imageUrl3": "",
            "videoUrl": ""
          },
          {
            "rank": "3",
            "name": "Plaid",
            "icon": "https://ph-files.imgix.net/46057414-1dfa-4a70-b52c-12281b385f00.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "Plaid — The safer way for your users to link financial accounts",
            "description": "The tools developers need to create easy and accessible experiences for their users. With just a few lines of code, users can connect to more than 12,000 financial institutions.",
            "productUrl": "https://www.producthunt.com/products/plaid/shoutouts",
            "websiteUrl": "http://plaid.com/",
            "imageUrl1": "https://ph-files.imgix.net/1234ceec-4a3d-4ac0-b185-fd80cdd93c68.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop&dpr=1",
            "imageUrl2": "https://ph-files.imgix.net/79ed42b2-8305-4e08-8ab5-0284a76c2726.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop&dpr=1",
            "imageUrl3": "",
            "videoUrl": ""
          },
          {
            "rank": "4",
            "name": "Razorpay",
            "icon": "https://ph-files.imgix.net/f24237a4-b7c8-44ac-8b92-e91a3d28628b.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "Razorpay — Power your finance, grow your business",
            "description": "Accept payments from customers. Automate payouts to vendors & employees. Never run out of working capital.",
            "productUrl": "https://www.producthunt.com/products/razorpay/shoutouts",
            "websiteUrl": "https://razorpay.com/",
            "imageUrl1": "https://ph-files.imgix.net/1fb1bb24-3491-4df4-be32-304857cdf967.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl2": "https://ph-files.imgix.net/06c39bba-a267-48c7-b50f-c6e87361d55f.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl3": "https://ph-files.imgix.net/f5fe8429-f2b7-4aff-9422-37f9f8a1dd65.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "videoUrl": ""
          },
          {
            "rank": "5",
            "name": "Chargebee",
            "icon": "https://ph-files.imgix.net/29c5bafb-178f-41d4-bdcf-b3a9dcd978b0.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "Chargebee — The smartest way to set up your subscription billing.",
            "description": "Chargebee's subscription billing software powers end-to-end recurring billing for subscription businesses with smart automation.",
            "productUrl": "https://www.producthunt.com/products/chargebee/shoutouts",
            "websiteUrl": "http://chargebee.com/",
            "imageUrl1": "",
            "imageUrl2": "https://ph-files.imgix.net/6f8efc2e-1cc7-42d6-9556-8eaa91b97c3d.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl3": "https://ph-files.imgix.net/20bb3065-4ea4-475f-a6ff-69a7a03e0e57.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "videoUrl": "https://youtu.be/SoRVkqFPexU"
          },
          {
            "rank": "6",
            "name": "Superwall",
            "icon": "https://ph-files.imgix.net/eb25d527-d423-4702-b0f2-9d6b6afe1789.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "Superwall — Paywalls made easy",
            "description": "",
            "productUrl": "https://www.producthunt.com/products/superwall/shoutouts",
            "websiteUrl": "https://superwall.com/",
            "imageUrl1": "",
            "imageUrl2": "",
            "imageUrl3": "",
            "videoUrl": ""
          },
          {
            "rank": "7",
            "name": "Hyperline",
            "icon": "https://ph-files.imgix.net/efd26bfa-389a-4018-ba4c-1c31dfc5e488.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=14&h=14&fit=crop",
            "title": "Hyperline — Flexible billing platform for B2B SaaS businesses.",
            "description": "",
            "productUrl": "https://www.producthunt.com/products/hyperline/shoutouts",
            "websiteUrl": "https://www.hyperline.co/",
            "imageUrl1": "",
            "imageUrl2": "",
            "imageUrl3": "",
            "videoUrl": ""
          },
          {
            "rank": "8",
            "name": "Stripe Billing",
            "icon": "https://ph-files.imgix.net/c7ddbbc7-a0ad-4194-b8cb-8fcf3fb5740a.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "Stripe Billing — Recurring payments & subscription management",
            "description": "Stripe Billing is the fastest way for your business to bill customers with subscriptions or invoices. Capture more revenue, support new products or business models, and accept recurring payments globally.",
            "productUrl": "https://www.producthunt.com/products/stripe-billing/shoutouts",
            "websiteUrl": "https://stripe.com/billing",
            "imageUrl1": "https://ph-files.imgix.net/5e273eec-c558-4500-b444-f0559bb25635.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl2": "https://ph-files.imgix.net/18a9f6ff-0138-44e0-8343-36071d63f834.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl3": "https://ph-files.imgix.net/0ad3930a-a08e-4496-938d-833f2c632e29.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "videoUrl": ""
          },
          {
            "rank": "9",
            "name": "Glassfy",
            "icon": "https://ph-files.imgix.net/35fa9a2c-e327-48b9-a9a7-0b6d95c69537.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "Glassfy — The in-app subscriptions platform",
            "description": "Glassfy open-source SDK provides you with subscription infrastructure, real-time subscription events and out-of-the-box monetization tools on iOS, Android, Stripe and Paddle.",
            "productUrl": "https://www.producthunt.com/products/glassfy/shoutouts",
            "websiteUrl": "https://glassfy.io/",
            "imageUrl1": "https://ph-files.imgix.net/dc48b822-5512-4798-bea6-6a341cba905c.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&fit=crop&dpr=1",
            "imageUrl2": "",
            "imageUrl3": "",
            "videoUrl": ""
          },
          {
            "rank": "10",
            "name": "PayPal",
            "icon": "https://ph-files.imgix.net/c5f08f1d-6637-46e5-874f-6c411827048e.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "PayPal — Send Payments, Pay Online, Merchant Account",
            "description": "New Money gives you more control over your funds so you can spend, send, and receive the way you want. See what’s possible. For help, tweet us at @AskPayPal.",
            "productUrl": "https://www.producthunt.com/products/paypal/shoutouts",
            "websiteUrl": "https://www.paypal.com/",
            "imageUrl1": "",
            "imageUrl2": "https://ph-files.imgix.net/1688557a-73bb-4484-b3f4-4359f8cdd92a.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl3": "https://ph-files.imgix.net/b40966bf-7ffe-44fe-bfb4-cef0772323ec.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "videoUrl": "https://youtu.be/vXQ3Q3ziOQk"
          },
          {
            "rank": "11",
            "name": "ExtensionPay",
            "icon": "https://ph-files.imgix.net/b14c3f03-0d4c-40cc-8ea9-43e32c9970cf.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "ExtensionPay — Easy Stripe integration for browser extensions",
            "description": "",
            "productUrl": "https://www.producthunt.com/products/extensionpay/shoutouts",
            "websiteUrl": "https://extensionpay.com/",
            "imageUrl1": "",
            "imageUrl2": "",
            "imageUrl3": "",
            "videoUrl": ""
          },
          {
            "rank": "12",
            "name": "Jotform",
            "icon": "https://ph-files.imgix.net/36d61cfd-fe6e-426c-a5e5-5425e3062bbb.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "Jotform — Easy-to-use online form builder for every business",
            "description": "Jotform is a full-featured online form builder that allows you to create powerful forms and securely gather data from any device. With our intuitive drag-and-drop builder, you can create and share custom online forms to generate leads, distribute surveys, collect online payments, and much more — all without any coding.",
            "productUrl": "https://www.producthunt.com/products/jotform/shoutouts",
            "websiteUrl": "http://www.jotform.com/",
            "imageUrl1": "https://ph-files.imgix.net/f77dd5c2-74ee-4a9d-a4b3-2a311ef43f9e.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl2": "https://ph-files.imgix.net/c54f80c2-8ee7-4a7e-b908-5ac6789a6119.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl3": "https://ph-files.imgix.net/9a3c0687-00a2-4b80-9da6-6a4bab6c6615.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "videoUrl": ""
          },
          {
            "rank": "13",
            "name": "Visa",
            "icon": "https://ph-files.imgix.net/a3104e91-362d-4548-8b92-f3079affbd7d.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "Visa — It's everywhere you want to be",
            "description": "Visa is a global payments technology company that connects consumers, businesses, financial institutions, and governments to fast, secure and reliable electronic payments.",
            "productUrl": "https://www.producthunt.com/products/visa/shoutouts",
            "websiteUrl": "https://usa.visa.com/",
            "imageUrl1": "https://ph-files.imgix.net/3924d7aa-e040-4145-a622-7c3de4656713.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl2": "https://ph-files.imgix.net/c427c12c-051b-4cc4-87a7-b997512cf457.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl3": "https://ph-files.imgix.net/c87ad229-0def-4ce1-98ce-f52e0f3d221c.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "videoUrl": ""
          },
          {
            "rank": "14",
            "name": "Dots",
            "icon": "https://ph-files.imgix.net/7fad5ead-5a29-4653-b59c-cd887a4ad6c5.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "Dots — Cash for the internet",
            "description": "Dots is the simplest way to send and accept payments online, especially if you’re a marketplace or hiring 1099 workers. Our API accepts payments from your favorite credit card processor, PayPal, and more. It also enables payouts using Venmo, ACH, Zelle, etc.",
            "productUrl": "https://www.producthunt.com/products/dots-3/shoutouts",
            "websiteUrl": "https://www.senddots.com/",
            "imageUrl1": "",
            "imageUrl2": "https://ph-files.imgix.net/1828ea06-e04f-4b1c-94d8-1459cf1d2d13.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl3": "https://ph-files.imgix.net/0589cfa3-cfca-4ce3-a7bf-d927005ee06f.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "videoUrl": "https://youtu.be/OWH3f1WAwF4"
          },
          {
            "rank": "15",
            "name": "Rutter",
            "icon": "https://ph-files.imgix.net/d44f306a-aac0-4200-9f6f-4dde09236992.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "Rutter — One API for every Ecommerce platform",
            "description": "Rutter is a universal API for reading and writing commerce data across any accounting system, payment processor or ecommerce platform. Our new Accounting APIs make it easy to integrate with Quickbooks, Xero, Netsuite, Freshbooks and Sage with a single API.",
            "productUrl": "https://www.producthunt.com/products/rutter/shoutouts",
            "websiteUrl": "https://rutterapi.com/",
            "imageUrl1": "",
            "imageUrl2": "https://ph-files.imgix.net/818fcbd2-f93c-4446-831c-81dc1740389e.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl3": "https://ph-files.imgix.net/bbc3a44a-3c6a-4728-b8e0-d7aedc7a8731.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "videoUrl": "https://youtu.be/mMjcStkRrS0"
          }
        ]
        
      },
      {
        "sub_category_name": "Shopify Apps",
        "sub_category_heading": "The best Shopify Apps in 2024",
        "products": [
          {
            "rank": "1",
            "name": "Shopify",
            "icon": "https://ph-files.imgix.net/ed9034f5-ba0e-4c51-9c48-a4d5a0eae2e4.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "Shopify — Powering millions of businesses",
            "description": "Join the best of over 800,000 Shopify merchants selling online, in-store, and everywhere in between. For assistance, reach out to @ShopifySupport",
            "productUrl": "https://www.producthunt.com/products/shopify/shoutouts",
            "websiteUrl": "http://shopify.com/",
            "imageUrl1": "https://ph-files.imgix.net/f23efd31-f293-4397-861c-35e250f01efe.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl2": "https://ph-files.imgix.net/59ad2e40-9ae5-49e3-be0f-48a7b31adefd.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl3": "https://ph-files.imgix.net/efced69f-8821-4f16-abea-43ff6598dd74.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "videoUrl": ""
          },
          {
            "rank": "2",
            "name": "Shopify Plus",
            "icon": "https://ph-files.imgix.net/33ac6eab-fbf4-43b4-ab24-5818ef48c8c9.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "Shopify Plus — Enterprise Ecommerce Platform",
            "description": "The best enterprise ecommerce platform for high-growth businesses. See why companies making $1M-500M are growing an average of 126% YoY on Shopify Plus—690% above the ecommerce industry average. Grow bigger, faster.",
            "productUrl": "https://www.producthunt.com/products/shopify-plus/shoutouts",
            "websiteUrl": "https://www.shopify.com/plus",
            "imageUrl1": "https://ph-files.imgix.net/f9e271c5-9d80-4536-b51c-0644b73405d5.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&fit=crop&dpr=1",
            "imageUrl2": "",
            "imageUrl3": "",
            "videoUrl": ""
          },
          {
            "rank": "3",
            "name": "Gadget",
            "icon": "https://ph-files.imgix.net/cf942563-41e3-4591-a6eb-3c7f738a135b.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "Gadget — The fastest way to build and run web apps",
            "description": "Gadget is a full-stack, serverless JavaScript platform for web app developers who want to build faster and maintain less. Skip the boilerplate features, repetitive code, and busywork, and get your ideas out the door in hours.",
            "productUrl": "https://www.producthunt.com/products/gadget-2/shoutouts",
            "websiteUrl": "https://gadget.dev/",
            "imageUrl1": "",
            "imageUrl2": "https://ph-files.imgix.net/d0690523-0632-46fc-9b3e-99eb665e8485.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl3": "https://ph-files.imgix.net/68bbcab7-4dfb-4f0f-9591-d16d43acffc3.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "videoUrl": "https://youtu.be/pj01pMFlQ7I"
          },
          {
            "rank": "4",
            "name": "Shopify",
            "icon": "https://ph-files.imgix.net/33d5fcdd-4b26-4574-b64d-7f46f03588b5.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "Shopify — 10+ Best ecommerce platforms for your business in 2023",
            "description": "This comparison guide will take a look at the top 12 ecommerce platforms and how to evaluate which is best for your business needs.",
            "productUrl": "https://www.producthunt.com/products/shopify-5/shoutouts",
            "websiteUrl": "https://www.shopify.com/blog/best-ecommerce-platforms",
            "imageUrl1": "https://ph-files.imgix.net/d8498375-f22a-4e8f-ba09-1b376de064ca.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl2": "https://ph-files.imgix.net/b429de24-3273-4377-87a2-6efbc3422147.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl3": "https://ph-files.imgix.net/a42fe24d-4f64-4132-b7bb-63ed7db48819.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "videoUrl": ""
          }
        ]
       
      }
    ] //End of Main Sub Category Array
  }
};

const insertData = async () => {
  try {
    await client.connect();

    // Insert category
    const categoryResult = await client.query(
      `INSERT INTO Category (category_name, category_heading) VALUES ($1, $2) ON CONFLICT DO NOTHING RETURNING category_id`,
      [data.category.category_name, data.category.category_heading]
    );

    const category_id = categoryResult.rows[0].category_id;

    // Insert sub-categories and products
    for (const sub_category of data.category.sub_categories) {
      const subCategoryResult = await client.query(
        `INSERT INTO Sub_Category (sub_category_name, sub_category_heading, category_id) VALUES ($1, $2, $3) RETURNING sub_category_id`,
        [sub_category.sub_category_name, sub_category.sub_category_heading, category_id]
      );

      const sub_category_id = subCategoryResult.rows[0].sub_category_id;

      for (const product of sub_category.products) {
        // Check if the product already exists
        const productResult = await client.query(
          `SELECT product_id FROM Products WHERE name = $1`,
          [product.name]
        );

        let product_id;
        if (productResult.rows.length === 0) {
          // Insert new product if it doesn't exist
          const newProductResult = await client.query(
            `INSERT INTO Products (rank, name, icon, title, description, productUrl, websiteUrl, imageUrl1, imageUrl2, imageUrl3, videoUrl, category_id, sub_category_id) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13) RETURNING product_id`,
            [
              product.rank,
              product.name,
              product.icon,
              product.title,
              product.description,
              product.productUrl,
              product.websiteUrl,
              product.imageUrl1,
              product.imageUrl2,
              product.imageUrl3,
              product.videoUrl,
              category_id,
              sub_category_id,
            ]
          );
          product_id = newProductResult.rows[0].product_id;
        } else {
          // Get existing product_id if product exists
          product_id = productResult.rows[0].product_id;
        }

        // Insert data into productSubcategory table
        await client.query(
          `INSERT INTO productSubcategory (product_id, category_id, sub_category_id) VALUES ($1, $2, $3) ON CONFLICT DO NOTHING`,
          [product_id, category_id, sub_category_id]
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
