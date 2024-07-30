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
                    "imageUrl": "https://ph-files.imgix.net/b9c546be-a73d-49be-84ac-92a774a5edfc.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                    "title": "Supabase — The open source Firebase alternative",
                    "description": "Supabase is an open-source backend-as-a-service that provides real-time databases, authentication, and API services. It enables developers to build and scale applications quickly without managing server infrastructure."
                  },
                  {
                    "rank": "2",
                    "imageUrl": "https://ph-files.imgix.net/cd6a3077-007d-4d68-a516-c8414b11bec8.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                    "title": "Firebase — An app development platform backed by Google",
                    "description": "An app development platform that helps you build and grow apps and games users love. Backed by Google and trusted by millions of businesses around the world."
                  },
                  {
                    "rank": "3",
                    "imageUrl": "https://ph-files.imgix.net/ea1c7b5e-0f17-46b4-aff7-64a9bbf538f1.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                    "title": "Appwrite — 100% open source alternative for Firebase",
                    "description": "A secure open-source backend server provides the core APIs required to build web and mobile applications. Appwrite provides authentication, database, storage, functions, messaging, and advanced realtime capabilities."
                  },
                  {
                    "rank": "4",
                    "imageUrl": "https://ph-files.imgix.net/297bc3d4-bd2e-4eaa-8fb6-a289cf61ea91.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                    "title": "Clerk — An authentication and user management platform",
                    "description": "A complete suite of embeddable UIs, flexible APIs, and admin dashboards to authenticate and manage your users."
                  },
                  {
                    "rank": "5",
                    "imageUrl": "https://ph-files.imgix.net/46057414-1dfa-4a70-b52c-12281b385f00.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                    "title": "Plaid — The safer way for your users to link financial accounts",
                    "description": "The tools developers need to create easy and accessible experiences for their users. With just a few lines of code, users can connect to more than 12,000 financial institutions."
                  },
                  {
                    "rank": "6",
                    "imageUrl": "https://ph-files.imgix.net/fcde694f-6982-4d00-864c-a3c180203ab6.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                    "title": "Memberstack — Authentication & Payments for Webflow. Total design freedom.",
                    "description": "Memberstack empowers you to build anything - from gated blogs, to social media platforms - all using Memberstack & Webflow (or, whatever else you use to build sites & apps). Over 3,000 companies like Slack, Reddit, and American Airlines use Memberstack to build scalable, custom membership experiences. You can build everything you need without coding - but, you can also incorporate your own code into your projects and scale with Memberstack to a full-blown react application."
                  },
                  {
                    "rank": "7",
                    "imageUrl": "https://ph-files.imgix.net/362dde8b-376b-41ba-b569-cb7970627b26.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=14&h=14&fit=crop",
                    "title": "Persona — Identity verification for any use case, starting at $0",
                    "description": "Persona offers a suite of fully-automated identity verification components with worldwide coverage that can be configured and branded to create custom-tailored flows for any use case. Sign up for the Starter plan and start for free in <10 minutes."
                  },
                  {
                    "rank": "8",
                    "imageUrl": "https://ph-files.imgix.net/afa0d0ae-7cbb-46ec-869b-892d991b120a.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                    "title": "WorkOS — Your app, Enterprise Ready",
                    "description": "WorkOS provides APIs to make your app Enterprise Ready, with pre-built features and integrations required by IT admins. Start selling to enterprise customers with just a few lines of code. Add Single Sign-On (SSO), Directory Sync, Audit Logs and more to your app today."
                  },
                  {
                    "rank": "9",
                    "imageUrl": "https://ph-files.imgix.net/437602fd-635f-4367-b497-ce5ebdcd7471.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                    "title": "Stytch — User infrastructure for modern applications",
                    "description": "Stytch is a full stack authentication and authorization platform, whose APIs make it simple to seamlessly onboard, authenticate and engage users. Improve security and user experience by going passwordless."
                  },
                  {
                    "rank": "10",
                    "imageUrl": "https://ph-files.imgix.net/36dac3fa-ed71-4def-992b-7178e2b78b26.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                    "title": "ApparenceKit — Ship your mobile app in days, not months",
                    "description": "ApparenceKit is a complete flutter boilerplate to help you ship a successful app on Android and iOS. Subscription, Notififications, Auth, Ads, translations, Architecture, Deployment...."
                  }
            ]
          },
          {
            "sub_cat_name": "Notion templates",
            "sub_cat_heading": "The best Notion templates in 2024",
            "products": [
                {
                    "rank": "1",
                    "imageUrl": "https://ph-files.imgix.net/7a01a00b-d41d-4367-b44e-e1d0a672819b.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                    "title": "Stripe — Financial infrastructure for the internet",
                    "description": "Accept payments, send payouts, automate financial processes, and ultimately grow revenue."
                  },
                  {
                    "rank": "2",
                    "imageUrl": "https://ph-files.imgix.net/d4ad8bb6-7bd5-4e3c-93af-b69c553312ed.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                    "title": "Expo — An open-source platform for building native apps",
                    "description": "Build, deploy, and quickly iterate on native Android, iOS, and web apps from the same JavaScript codebase."
                  },
                  {
                    "rank": "3",
                    "imageUrl": "https://ph-files.imgix.net/f01f527e-e5f9-4822-8f11-bfac2ed71eb8.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                    "title": "Remotion — Create videos programmatically",
                    "description": "Make real MP4 videos written in React using CSS, SVG, and WebGL to make interesting motion graphics. Use programming to dynamically make different variants of videos and automate it using server-side rendering."
                  },
                  {
                    "rank": "4",
                    "imageUrl": "https://ph-files.imgix.net/9acdbce2-d993-489b-b6e3-afb817d04d0b.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                    "title": "Zapier — Connect your apps and automate workflows",
                    "description": "Easy automation for busy people. Zapier empowers you to automate your work across 5,000+ apps—so you can move forward, faster."
                  },
                  {
                    "rank": "5",
                    "imageUrl": "https://ph-files.imgix.net/96034044-b256-4eff-9a6e-551b78203862.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                    "title": "Tailwind UI — Beautiful UI components, by the creators of Tailwind CSS",
                    "description": "Beautifully designed, expertly crafted components and templates, built by the makers of Tailwind CSS."
                  },
                  {
                    "rank": "6",
                    "imageUrl": "https://ph-files.imgix.net/f2fe3365-9ba8-498a-b1fe-e74bbd5b425e.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                    "title": "Trigger.dev — The open source background jobs framework",
                    "description": "Create long-running jobs directly in your codebase with features like API integrations, webhooks, scheduling and delays."
                  },
                  {
                    "rank": "7",
                    "imageUrl": "https://ph-files.imgix.net/a46e2608-8f72-4a89-82e0-abbe70f10f83.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                    "title": "AWS Lambda — An event-driven, serverless computing platform",
                    "description": "A compute service that runs your code in response to events and automatically manages the compute resources, making it the fastest way to turn an idea into a modern, production, serverless applications."
                  },
                  {
                    "rank": "8",
                    "imageUrl": "https://ph-files.imgix.net/7773976d-e914-4046-91b1-154f91680d94.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                    "title": "Shipixen — Create a blog & landing page in minutes",
                    "description": "Create a production-ready landing page & blog with your branding, theme & pages. You get the code & an SEO-optimized website so you can focus on building, not setting up."
                  },
                  {
                    "rank": "9",
                    "imageUrl": "https://ph-files.imgix.net/72dfe2ac-646f-44a8-9a6d-5d8097ccc835.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=14&h=14&fit=crop",
                    "title": "Albato — A no-code platform for all automations",
                    "description": "Integrate your applications into automated workflows using a no code builder."
                  },
                  {
                    "rank": "10",
                    "imageUrl": "https://ph-files.imgix.net/a6f3b218-e87c-460c-93f6-b5ea9d9de223.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=14&h=14&fit=crop",
                    "title": "monday.com — One platform for managing any project, task, and workflow",
                    "description": "Used by 180K+ global customers, monday.com is a customizable and easy-to-use work management platform that maximizes efficiency, boosts collaboration, and increases productivity. Easily plan, centralize, streamline, and automate your teams' work and projects by utilizing powerful features such as no-code automations, real-time notifications, customizable dashboards, 200+ pre-made templates, multiple views, 72+ integrations, and more. From idea to execution, manage it all on one robust platform."
                  }
            ]
          },
          {
            "sub_cat_name": "Slack apps",
            "sub_cat_heading": "The best Slack apps in 2024",
            "products": [
                {
                    "rank": "1",
                    "imageUrl": "https://ph-files.imgix.net/593ff5e2-9d11-491c-ab63-9e929e894214.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                    "title": "Vercel — Seamless hosting for frontend developers",
                    "description": "Vercel is a platform for frontend developers to deploy and manage web applications efficiently. It offers serverless infrastructure and integrations with popular frameworks and tools, focusing on performance and scalability."
                  },
                  {
                    "rank": "2",
                    "imageUrl": "https://ph-files.imgix.net/b9c546be-a73d-49be-84ac-92a774a5edfc.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                    "title": "Supabase — The open source Firebase alternative",
                    "description": "Supabase is an open-source backend-as-a-service that provides real-time databases, authentication, and API services. It enables developers to build and scale applications quickly without managing server infrastructure."
                  },
                  {
                    "rank": "3",
                    "imageUrl": "https://ph-files.imgix.net/cd6a3077-007d-4d68-a516-c8414b11bec8.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                    "title": "Firebase — An app development platform backed by Google",
                    "description": "An app development platform that helps you build and grow apps and games users love. Backed by Google and trusted by millions of businesses around the world."
                  },
                  {
                    "rank": "4",
                    "imageUrl": "https://ph-files.imgix.net/2df0eb38-7b7e-48a7-80d9-05c57b48d3d4.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                    "title": "Google Cloud Platform — A suite of cloud computing services by Google",
                    "description": "Build with generative AI, deploy apps fast, and analyze data in seconds with Google-grade security."
                  },
                  {
                    "rank": "5",
                    "imageUrl": "https://ph-files.imgix.net/db4ba1a3-da45-4435-b285-ca59047141e5.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                    "title": "DigitalOcean — A cloud platform to deploy, manage & scale apps of any size",
                    "description": "Helping millions of developers easily build, test, manage, and scale applications of any size faster than ever before."
                  },
                  {
                    "rank": "6",
                    "imageUrl": "https://ph-files.imgix.net/c5755a02-777d-4baf-a7d0-c5654511ef36.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                    "title": "Render — Build, deploy, and scale your apps with unparalleled ease",
                    "description": "A unified platform to build and run all your apps and websites with free SSL, a global CDN, private networks and auto deploys from Git."
                  },
                  {
                    "rank": "7",
                    "imageUrl": "https://ph-files.imgix.net/dcd7544f-1c99-42be-be2b-e0cc80c463b0.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                    "title": "Ruby on Rails — A full-stack framework to build amazing web apps",
                    "description": "Rendering HTML templates, updating databases, sending and receiving emails, maintaining live pages via WebSockets, enqueuing jobs for asynchronous work, storing uploads in the cloud, providing solid security protections for common attacks. Rails does it all and so much more."
                  },
                  {
                    "rank": "8",
                    "imageUrl": "https://ph-files.imgix.net/893eb4e0-61dd-4ee2-9f06-7db129d7582a.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                    "title": "replicate — source machine learning models with a cloud API",
                    "description": ""
                  },
                  {
                    "rank": "9",
                    "imageUrl": "https://ph-files.imgix.net/2244b16a-9d2e-4330-b432-3653fb1eb467.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                    "title": "Amazon Web Services — Virtual private server and web hosting-Amazon Lightsail",
                    "description": "Amazon Lightsail is an easy-to-use virtual private server (VPS) that offers simple management of cloud resources such as containers, at low, predictable prices."
                  },
                  {
                    "rank": "10",
                    "imageUrl": "https://ph-files.imgix.net/bccabb30-bb51-4ab2-8247-49dd657c3362.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                    "title": "Upstash — Serverless data platform for Redis and Kafka",
                    "description": "Serverless Redis and Kafka as a service with per request pricing. Use any Redis/Kafka clients. The built-in REST API enables use cases with serverless and edge functions."
                  }
            ]
          },
          {
            "sub_cat_name": "Twitter apps",
            "sub_cat_heading": "The best Twitter apps in 2024",
            "products": [
                {
                    "rank": "1",
                    "imageUrl": "https://ph-files.imgix.net/cb9865b0-a811-444b-81d9-8d9acef41ff4.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                    "title": "Preact — Fast 3kB alternative to React with the same modern API",
                    "description": "Thinnest possible Virtual DOM abstraction on top of the DOM. It builds on stable platform features, registers real event handlers and plays nicely with other libraries."
                  },
                  {
                    "rank": "2",
                    "imageUrl": "https://ph-files.imgix.net/2b33c6b3-be3a-47c4-9dff-6bb8f878e607.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                    "title": "WordPress — WordPress is open source software you can use to create a beautiful website, blog, or app.",
                    "description": "Trusted by the Best. 43% of the web uses WordPress, from hobby blogs to the biggest news sites online."
                  },
                  {
                    "rank": "3",
                    "imageUrl": "https://ph-files.imgix.net/cb8b3c52-b297-473a-99f9-4275df2fa2b0.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                    "title": "Strapi — Design APIs fast, manage content easily.",
                    "description": "Strapi is the next-gen headless CMS, open-source, javascript, enabling content-rich experiences to be created, managed and exposed to any digital device."
                  },
                  {
                    "rank": "4",
                    "imageUrl": "https://ph-files.imgix.net/6f69ca9b-eb3c-41ba-8297-d5a7927a0787.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                    "title": "Contentful — Launch faster with a modern content platform",
                    "description": "More than a headless CMS, Contentful is the API-first content management platform to create, manage and publish content on any digital channel."
                  },
                  {
                    "rank": "5",
                    "imageUrl": "https://ph-files.imgix.net/0752c2d8-ebbf-45b7-8790-b52c1993ad73.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                    "title": "Google Sites — A totally rebuilt Sites, customer-tested and open for business",
                    "description": "Google Sites is a structured wiki- and Web page-creation tool offered by Google. The declared goal of Google Sites is for anyone to be able to create simple web sites that support collaboration between different editors."
                  },
                  {
                    "rank": "6",
                    "imageUrl": "https://ph-files.imgix.net/1a847381-7751-4536-b652-3b486107b1b7.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                    "title": "WordPress Playground — Experience a WordPress that runs entirely in your browser!",
                    "description": "Explore, experiment, and play with WordPress—no setup required! WordPress Playground is a flexible tool that lets you: Try plugins and themes in a live virtual environment Experiment with an anonymous WordPress website"
                  },
                  {
                    "rank": "7",
                    "imageUrl": "https://ph-files.imgix.net/c5e674f4-3077-4976-bfe3-55064e647e74.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                    "title": "Ghost — Publish online, build a business, work from home",
                    "description": "The world's most popular modern open source publishing platform. A headless Node.js CMS used by Apple, Sky News, Tinder and thousands more. MIT licensed, with 30k+ stars on Github."
                  },
                  {
                    "rank": "8",
                    "imageUrl": "https://ph-files.imgix.net/46f667f9-aa1e-4736-bd55-1561deb4afae.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                    "title": "Notaku — Docs websites powered by Notion",
                    "description": "Notaku creates awesome docs websites from your Notion pages It's like GitBook but using Notion for your CMS Notaku is not limited to docs websites, you can also build docs, blog, help desk, changelog and roadmap websites."
                  },
                  {
                    "rank": "9",
                    "imageUrl": "https://ph-files.imgix.net/915c41a4-365e-4bea-a4dc-eb586f3d8cf1.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                    "title": "Docusaurus — Easy to maintain open source documentation websites",
                    "description": "Docusaurus helps you ship a top-notch documentation site in no time! Focus on your content: just write Markdown files! Put your site online in 5 minutes, then customize it. Full-featured: plugins, themes, search, blog, versioning, i18n, React..."
                  },
                  {
                    "rank": "10",
                    "imageUrl": "https://ph-files.imgix.net/f43e246a-e00e-49c6-a13a-36fc96b75187.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                    "title": "Zoho — An integrated suite of business apps",
                    "description": "Unique and powerful suite of software to run your entire business, brought to you by a company with the long term vision to transform the way you work."
                  }
            ]
          },
          {
            "sub_cat_name": "Wordpress plugins",
            "sub_cat_heading": "The best Wordpress plugins in 2024",
            "products": [
                {
                    "rank": "1",
                    "imageUrl": "https://ph-files.imgix.net/c07d85e1-8ac0-4793-8cc5-3b413644371d.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                    "title": "Xcode — Develop, test, and distribute apps for all Apple platforms",
                    "description": "Code and design your apps faster with enhanced code completion, interactive previews, and live animations. Use Git staging to craft your next commit without leaving your code. Explore and diagnose your test results with redesigned test reports with video recording. And start deploying seamlessly to TestFlight and the App Store from Xcode Cloud. Creating amazing apps has never been easier."
                  },
                  {
                    "rank": "2",
                    "imageUrl": "https://ph-files.imgix.net/a32a6a01-1bfe-49df-b196-b9cc342c5175.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                    "title": "VS Code — Microsoft Visual Studio Code lets you build and debug apps",
                    "description": "Visual Studio Code is a code editor redefined and optimized for building and debugging modern web and cloud applications."
                  },
                  {
                    "rank": "3",
                    "imageUrl": "https://ph-files.imgix.net/8fd47ed2-7e09-42c0-8a09-9e66744ab17d.svg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                    "title": "Laravel Framework — The PHP Framework for Web Artisans",
                    "description": "Laravel is a web application framework with expressive, elegant syntax. We’ve already laid the foundation — freeing you to create without sweating the small things."
                  },
                  {
                    "rank": "4",
                    "imageUrl": "https://ph-files.imgix.net/a91a21ee-1d99-4713-87a9-7466c778feb9.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                    "title": "JetBrains — A suite of intelligent development tools",
                    "description": "Powerful IDEs for most programming languages and technologies along with products for team collaboration."
                  },
                  {
                    "rank": "5",
                    "imageUrl": "https://ph-files.imgix.net/cdb23f26-b385-4854-a005-3862be50f79e.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                    "title": "GitHub Copilot Chat — AI chat features powered by Copilot",
                    "description": "GitHub Copilot Chat is a companion extension to GitHub Copilot that provides conversational AI assistance throughout your software development journey in VS Code."
                  },
                  {
                    "rank": "6",
                    "imageUrl": "https://ph-files.imgix.net/73e8b4ab-4112-4c4e-b475-e1c5923d01e4.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                    "title": "Rust — A high-level, safe and concurrent alternative to C++",
                    "description": "A blazingly fast and memory-efficient programming language with no runtime or garbage collector. It can power performance-critical services, run on embedded devices, and easily integrate with other languages."
                  },
                  {
                    "rank": "7",
                    "imageUrl": "https://ph-files.imgix.net/0643ccd3-579d-4a56-bdbb-17e68793ab86.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                    "title": "vscode.dev — Bringing VS Code to the browser",
                    "description": "Now when you go to https://vscode.dev, you'll be presented with a lightweight version of VS Code running fully in the browser. Open a folder on your local machine and start coding. No install required."
                  },
                  {
                    "rank": "8",
                    "imageUrl": "https://ph-files.imgix.net/1c3afe83-3ee9-4725-b586-f38f9deb8e2b.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                    "title": "Go Language — Go is an open source programming language",
                    "description": ""
                  },
                  {
                    "rank": "9",
                    "imageUrl": "https://ph-files.imgix.net/34177e7f-0f0d-4a4f-a872-65cbd506bae7.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                    "title": "Python Awesome — A nice collection of often useful awesome Python libraries.",
                    "description": "A nice collection of often useful awesome Python frameworks, libraries and software."
                  },
                  {
                    "rank": "10",
                    "imageUrl": "https://ph-files.imgix.net/5e384dcc-8e07-4d0a-93b6-720c0bb005b6.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                    "title": "Zed — Code at the speed of thought",
                    "description": "Zed is a high-performance, multiplayer code editor from the creators of Atom and Tree-sitter."
                  }
            ]
          },
          {
            "sub_cat_name": "Wordpress Themes",
            "sub_cat_heading": "The best Wordpress Themes in 2024",
            "products": [
                {
                    "rank": "1",
                    "imageUrl": "https://ph-files.imgix.net/c17453f9-e544-4e6a-86b0-4027cf710cf5.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                    "title": "GitHub — How people build software",
                    "description": "GitHub is a development platform inspired by the way you work."
                  },
                  {
                    "rank": "2",
                    "imageUrl": "https://ph-files.imgix.net/03b893f5-886d-43ec-977e-5e05e0f6f104.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                    "title": "Gitea — Painless self-hosted all-in-one software development service",
                    "description": "Git hosting, code review, team collaboration, package registry, and CI/CD."
                  },
                  {
                    "rank": "3",
                    "imageUrl": "https://ph-files.imgix.net/326ef23f-183c-40fa-a8d9-67718e1386eb.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                    "title": "T3 Stack, Next and React File Generator — Next.js with T3 Stack in VSCode: Effortless file generation.",
                    "description": "🚀 Boost your Next.js development with this extension for VSCode. Streamline file generation and optimize your project's lifecycle. Easily craft pages, components, layouts, and more. Includes commands and snippets for Next.js, Prisma, tRPC, and key frameworks."
                  },
                  {
                    "rank": "4",
                    "imageUrl": "https://ph-files.imgix.net/5aef40ff-3d74-405b-a375-993e1fdb26f7.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                    "title": "GitHub Actions — Automate your workflow from idea to production",
                    "description": "GitHub Actions makes it easy to automate all your software workflows, now with world-class CI/CD. Build, test, and deploy your code right from GitHub. Make code reviews, branch management, and issue triaging work the way you want."
                  },
                  {
                    "rank": "5",
                    "imageUrl": "https://ph-files.imgix.net/d837c665-999b-48c6-90be-38cdd03e5dac.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                    "title": "Wallaby — JS test runner in your code editor",
                    "description": ""
                  },
                  {
                    "rank": "6",
                    "imageUrl": "https://ph-files.imgix.net/7a4ae8ac-fafc-43d9-8156-f2eb8327b6b2.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                    "title": "Backpack for Laravel — Feature-packed admin panel for Laravel apps.",
                    "description": "Build custom admin panels 10x faster. Backpack will help you generate CRUDs for your Eloquent models, and easily create custom CRUDs for complex use cases."
                  },
                  {
                    "rank": "7",
                    "imageUrl": "https://ph-files.imgix.net/a35bc284-4813-440f-bd8d-c04bc08aaf18.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                    "title": "CopilotForXcode — intitni/CopilotForXcode",
                    "description": ""
                  },
                  {
                    "rank": "8",
                    "imageUrl": "https://ph-files.imgix.net/30687d08-5d93-4729-aac3-acc6ede03a0f.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                    "title": "Val Town — If GitHub Gists could run and AWS Lambda were fun.",
                    "description": "If GitHub Gists could run and AWS Lambda were fun."
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
