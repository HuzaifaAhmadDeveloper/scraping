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
      "cat_name": "Finance",
      "cat_heading": "The best Finance in 2024",
      "sub_categories": [
        {
          "sub_cat_name": "Acounting Software",
          "sub_cat_heading": "The best Acounting Software in 2024",
          "products": [
            {
              "rank": "1",
              "imageUrl": "https://ph-files.imgix.net/0329497e-75f9-4fcc-8dae-5b279bcb56e8.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=14&h=14&fit=crop",
              "title": "PostHog — The open source product OS",
              "description": "Open-source product analytics, session recording, feature flagging and A/B testing that you can self-host. Everything engineers need to build better products."
            },
            {
              "rank": "2",
              "imageUrl": "https://ph-files.imgix.net/6fedb2b3-4abe-47f0-999b-cac7a91b5a39.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
              "title": "Statsig — #1 feature management and product experimentation platform",
              "description": "Statsig is the leading product experimentation platform that helps businesses use data to ship fast and build better products. Companies like OpenAI, Notion, Brex, and Eventbrite use Statsig to manage feature rollouts, automate experiments, and make decisions based on performance metrics. Founded in 2021 by former Facebook engineers, Statsig supports thousands of experiments impacting over a billion end users globally."
            },
            {
              "rank": "3",
              "imageUrl": "https://ph-files.imgix.net/2e54cf9a-80a5-4397-ab91-16f56a8f9d1b.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=14&h=14&fit=crop",
              "title": "Adapty — Grow mobile in-app subscriptions 💵",
              "description": "Adapty is a service for analyzing and growing mobile in-app subscriptions. Use Adapty for paywalls A/B testing, measuring economy and customers promotion."
            },
            {
              "rank": "4",
              "imageUrl": "https://ph-files.imgix.net/35fa9a2c-e327-48b9-a9a7-0b6d95c69537.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
              "title": "Glassfy — The in-app subscriptions platform",
              "description": "Glassfy open-source SDK provides you with subscription infrastructure, real-time subscription events and out-of-the-box monetization tools on iOS, Android, Stripe and Paddle."
            },
            {
              "rank": "5",
              "imageUrl": "https://ph-files.imgix.net/f70f6d3f-d70d-4a12-b677-223b100edb59.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
              "title": "GrowthBook — The open-source LaunchDarkly alternative",
              "description": "GrowthBook is an open source feature flagging and experimentation platform. Safely release features to production and measure the impact on your key metrics."
            },
            {
              "rank": "6",
              "imageUrl": "https://ph-files.imgix.net/728aaa80-d054-4ff6-9cc5-56c61c9925ad.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
              "title": "Countly — # 1 privacy-led product analytics",
              "description": "Ensuring privacy compliance by design, the Countly platform brings together user-friendliness, privacy, customization, and all-in-one functionality. We help individuals, teams, and organizations reach their product dreams by tracking their product's performance, user journeys, and behavior. Make the best of our advanced User Profiles, Dashboards, Crashes, Events, Funnels, A/B Testing, Surveys, Cohorts, and more. PS. Whether you have a mobile, web, desktop, or IoT app, we have you covered. <3"
            }
          ]
        },
        {
          "sub_cat_name": "Budgeting apps",
          "sub_cat_heading": "The best Budgeting apps in 2024",
          "products": [
            {
              "rank": "1",
              "imageUrl": "https://ph-files.imgix.net/a91a21ee-1d99-4713-87a9-7466c778feb9.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
              "title": "JetBrains — A suite of intelligent development tools",
              "description": "Powerful IDEs for most programming languages and technologies along with products for team collaboration."
            },
            {
              "rank": "2",
              "imageUrl": "https://ph-files.imgix.net/cdb23f26-b385-4854-a005-3862be50f79e.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
              "title": "GitHub Copilot Chat — AI chat features powered by Copilot",
              "description": "GitHub Copilot Chat is a companion extension to GitHub Copilot that provides conversational AI assistance throughout your software development journey in VS Code."
            },
            {
              "rank": "3",
              "imageUrl": "https://ph-files.imgix.net/043ab050-9dff-4bb2-bff0-f6645ba07a58.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
              "title": "Groq Chat — An LPU inference engine",
              "description": "A new type of end-to-end processing unit system that provides the fastest inference for computationally intensive applications with a sequential component to them, such as AI language applications (LLMs)"
            },
            {
              "rank": "4",
              "imageUrl": "https://ph-files.imgix.net/96ea26ff-b99f-442d-aad9-49c3a4a6d433.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
              "title": "ggml — ML tensor library to enable LLMs on consumer hardware",
              "description": ""
            },
            {
              "rank": "5",
              "imageUrl": "https://ph-files.imgix.net/927733c0-76ff-402b-af77-e09cbd88f1cd.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
              "title": "Cursor Copilot++ — Autocomplete redesigned to predict your next edit",
              "description": "A more powerful version of Copilot that can suggest mid-line completions and entire diffs. Trained to autocomplete on sequences of edits, it's quick to understand the change you're making."
            },
            {
              "rank": "6",
              "imageUrl": "https://ph-files.imgix.net/1f84350b-c1ce-4670-ba12-642be36da364.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
              "title": "Dify.AI — Open-source platform for LLMOps,Define your AI-native Apps",
              "description": "Dify.AI is an open-source platform for LLMOpsIt offers visual management of prompts, operations, and datasets. Create an AI app in minutes or integrate LLM into your app for continuous improvement."
            },
            {
              "rank": "7",
              "imageUrl": "https://ph-files.imgix.net/1f885b01-0d52-48b7-a8af-74b4dac2b6b4.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
              "title": "LocalizeBot — Translate iOS app In 1 click",
              "description": "Simplifies app localization and helps you reach more users. Use a machine translation service to translate your App and App Store metadata. - Supported xliff and xcloc files. - Translate App Store metadata."
            },
            {
              "rank": "8",
              "imageUrl": "https://ph-files.imgix.net/4351458f-922c-4c5c-acb3-2a0e2dfc9edf.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
              "title": "Continue — Continue enables you to create your own AI code assistant",
              "description": "Continue enables you to create your own AI code assistant inside your IDE. Keep your developers in flow with open-source code copilots."
            },
            {
              "rank": "9",
              "imageUrl": "https://ph-files.imgix.net/13997079-0c04-4c79-b935-8d69cf91ad4b.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
              "title": "Hex — Streamlined data work, with notebooks, SQL, Python & no code",
              "description": "A modern workspace to help data teams build and share. Make decisions with live data, interactive workflows, data apps, and beautiful reporting in a collaborative environment."
            },
            {
              "rank": "10",
              "imageUrl": "https://ph-files.imgix.net/edf83002-3e91-4119-9a9d-5a8cf9231eb0.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
              "title": "Nashit 🎸 — Generate a full React App and a CI/CD pipeline in minutes",
              "description": "Nashit AI offers a fast and easy way to build React apps. In a couple of minutes, you will get a fully functioning React app with a full CI/CD pipeline."
            }
          ]
        },
        {
            "sub_cat_name": "Credit score tools",
            "sub_cat_heading": "The best Credit score tools in 2024",
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
            "sub_cat_name": "Financial Planning",
            "sub_cat_heading": "The best Financial Planning in 2024",
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
            "sub_cat_name": "Fundraising Resources",
            "sub_cat_heading": "The best Fundraising Resources in 2024",
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
            "sub_cat_name": "Investing",
            "sub_cat_heading": "The best Investing in 2024",
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
            "sub_cat_name": "Invoicing tools",
            "sub_cat_heading": "The best Invoicing tools in 2024",
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
            "sub_cat_name": "Money Transfer",
            "sub_cat_heading": "The best Money Transfer in 2024",
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
          },
          {
            "sub_cat_name": "Neobanks",
            "sub_cat_heading": "The best Neobanks in 2024",
            "products": [
                {
                    "rank": "1",
                    "imageUrl": "https://ph-files.imgix.net/53213ebd-6c42-4ec4-839a-8d40a4206354.svg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                    "title": "Vite — Next Generation Frontend Tooling",
                    "description": "Vite is a build tool that aims to provide a faster and leaner development experience for modern web projects. A dev server that provides rich feature enhancements. A build command that bundles your code, pre-configured to output highly optimized static assets."
                  },
                  {
                    "rank": "2",
                    "imageUrl": "https://ph-files.imgix.net/73e8b4ab-4112-4c4e-b475-e1c5923d01e4.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                    "title": "Rust — A high-level, safe and concurrent alternative to C++",
                    "description": "A blazingly fast and memory-efficient programming language with no runtime or garbage collector. It can power performance-critical services, run on embedded devices, and easily integrate with other languages."
                  },
                  {
                    "rank": "3",
                    "imageUrl": "https://ph-files.imgix.net/6c17a03d-52c6-4c6a-b521-bf84de68591b.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                    "title": "Convex — A better type of backend",
                    "description": "Convex is a full-stack TypeScript development platform that keeps you focused on your product. Use our realtime database to build apps that are reactive by default. Integrate OpenAI into your workflows with builtin functions, scheduling, and vector search."
                  },
                  {
                    "rank": "4",
                    "imageUrl": "https://ph-files.imgix.net/d5a12d33-9700-47e4-90b9-24b07edbd05d.vnd.microsoft.icon?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                    "title": "Electron — platform desktop apps with JavaScript, HTML, and CSS",
                    "description": ""
                  },
                  {
                    "rank": "5",
                    "imageUrl": "https://ph-files.imgix.net/6bad3f69-e994-422a-b532-569cbb4ee076.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                    "title": "Astro — The web framework that scales with you.",
                    "description": "Build fast content-driven websites, powerful SPA web applications, dynamic server APIs and everything in-between."
                  },
                  {
                    "rank": "6",
                    "imageUrl": "https://ph-files.imgix.net/1c3afe83-3ee9-4725-b586-f38f9deb8e2b.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                    "title": "Go Language — Go is an open source programming language",
                    "description": ""
                  },
                  {
                    "rank": "7",
                    "imageUrl": "https://ph-files.imgix.net/34177e7f-0f0d-4a4f-a872-65cbd506bae7.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                    "title": "Python Awesome — A nice collection of often useful awesome Python libraries.",
                    "description": "A nice collection of often useful awesome Python frameworks, libraries and software."
                  },
                  {
                    "rank": "8",
                    "imageUrl": "https://ph-files.imgix.net/02a2dbcc-3c93-40eb-85d9-2b5b77411b8c.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                    "title": "Warp — The terminal for the 21st century",
                    "description": "Warp is a fast Rust-based terminal that’s easy to use and built for teams. 1) Commands and outputs are grouped like a data notebook 2) Input is a modern code-editor preconfigured with useful completions 3) Share outputs via links 4) Save and run team commands"
                  },
                  {
                    "rank": "9",
                    "imageUrl": "https://ph-files.imgix.net/326ef23f-183c-40fa-a8d9-67718e1386eb.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                    "title": "T3 Stack, Next and React File Generator — Next.js with T3 Stack in VSCode: Effortless file generation.",
                    "description": "🚀 Boost your Next.js development with this extension for VSCode. Streamline file generation and optimize your project's lifecycle. Easily craft pages, components, layouts, and more. Includes commands and snippets for Next.js, Prisma, tRPC, and key frameworks."
                  },
                  {
                    "rank": "10",
                    "imageUrl": "https://ph-files.imgix.net/5b8f843b-51e2-4482-8f9f-a0535151462a.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=14&h=14&fit=crop",
                    "title": "snap2txt — Convert your project into prompt",
                    "description": "snap2txt is a Python utility that captures the structure and contents of a project directory and saves them into a text file. This text file is a ready-to-use base for a prompt to develop new features with ChatGPT."
                  }
            ]
          },
          {
            "sub_cat_name": "Online banking",
            "sub_cat_heading": "The best Online banking in 2024",
            "products": [
                {
                    "rank": "1",
                    "imageUrl": "https://ph-files.imgix.net/2df0eb38-7b7e-48a7-80d9-05c57b48d3d4.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                    "title": "Google Cloud Platform — A suite of cloud computing services by Google",
                    "description": "Build with generative AI, deploy apps fast, and analyze data in seconds with Google-grade security."
                  },
                  {
                    "rank": "2",
                    "imageUrl": "https://ph-files.imgix.net/0329497e-75f9-4fcc-8dae-5b279bcb56e8.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=14&h=14&fit=crop",
                    "title": "PostHog — The open source product OS",
                    "description": "Open-source product analytics, session recording, feature flagging and A/B testing that you can self-host. Everything engineers need to build better products."
                  },
                  {
                    "rank": "3",
                    "imageUrl": "https://ph-files.imgix.net/9f2fd64e-a608-46a9-9755-053e646f89b0.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                    "title": "June — The Simple Product Analytics App",
                    "description": "June is product analytics for B2B SaaS. Get auto-generated reports focused on how companies use your product, not users"
                  },
                  {
                    "rank": "4",
                    "imageUrl": "https://ph-files.imgix.net/c1ad78f3-60d5-4080-a915-5702a666ea08.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                    "title": "Tinybird — Turn raw data into realtime API at scale",
                    "description": "Build analytical API endpoints in minutes with no backend involved. Ingest huge amounts of data, transform it with SQL, and create dynamic endpoints on it."
                  },
                  {
                    "rank": "5",
                    "imageUrl": "https://ph-files.imgix.net/bccabb30-bb51-4ab2-8247-49dd657c3362.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                    "title": "Upstash — Serverless data platform for Redis and Kafka",
                    "description": "Serverless Redis and Kafka as a service with per request pricing. Use any Redis/Kafka clients. The built-in REST API enables use cases with serverless and edge functions."
                  },
                  {
                    "rank": "6",
                    "imageUrl": "https://ph-files.imgix.net/71819a7f-095c-4668-b288-1b433984bf35.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                    "title": "Flatfile — Extensible API + event based platform for data-file import",
                    "description": "The Flatfile Data Exchange Platform provides developers an easy, fast, and secure way to build your ideal solution for importing CSV, Excel, or other data-files, without compromising on flexibility. With our API-first, event-driven architecture developers can build fully customizable, powerful workflows that address any file-based import use case, combined with a highly intuitive experience designed for end-users. See the magic of Flatfile for yourself and get started today, it’s free!"
                  },
                  {
                    "rank": "7",
                    "imageUrl": "https://ph-files.imgix.net/da9e292c-e22c-46e7-bd6b-4a08bdb92d27.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                    "title": "Amplitude — Get data and insights to take action and drive growth",
                    "description": "Amplitude is the comprehensive product analytics software for web and mobile. Over 12,000 companies use Amplitude to set product strategy, increase key metrics like user engagement, retention, and conversion, and ultimately build better products."
                  },
                  {
                    "rank": "8",
                    "imageUrl": "https://ph-files.imgix.net/e7c84912-d91c-475a-91dc-d566f2908a82.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                    "title": "Typesense — Fast, typo-tolerant open source search engine",
                    "description": "Open source search engine that delivers instant relevant results out-of-the-box. OSS alternative to Algolia & an easier-to-use alternative to ElasticSearch."
                  },
                  {
                    "rank": "9",
                    "imageUrl": "https://ph-files.imgix.net/ac301ed1-8308-469d-841b-2eb5765021eb.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                    "title": "DataBricks — Simplify big data and AI",
                    "description": "Databricks’ mission is to accelerate innovation for its customers by unifying Data Science, Engineering and Business. Founded by the team who created Apache Spark, Databricks provides a Unified Analytics Platform for data science teams to collaborate with data engineering and lines of business to build data products."
                  },
                  {
                    "rank": "10",
                    "imageUrl": "https://ph-files.imgix.net/9c06d78c-6a07-429b-b750-b91eed907a8a.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                    "title": "FullStory — Craft a more perfect digital experience",
                    "description": "FullStory is your digital experience analytics platform for on-the-fly funnels, pixel-perfect replay, custom events, heat maps, advanced search, Dev Tools, and more."
                  }
            ]
          },
          {
            "sub_cat_name": "Payroll software",
            "sub_cat_heading": "The best Payroll software in 2024",
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
                    "imageUrl": "https://ph-files.imgix.net/e166b73e-887d-4ab8-ac43-483c0a0f14ca.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                    "title": "PostgreSQL — A powerful, open source object-relational database system",
                    "description": "An open source, object-relational database system with over 35 years of active development that has earned it a strong reputation for reliability, feature robustness, and performance."
                  },
                  {
                    "rank": "4",
                    "imageUrl": "https://ph-files.imgix.net/c5755a02-777d-4baf-a7d0-c5654511ef36.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                    "title": "Render — Build, deploy, and scale your apps with unparalleled ease",
                    "description": "A unified platform to build and run all your apps and websites with free SSL, a global CDN, private networks and auto deploys from Git."
                  },
                  {
                    "rank": "5",
                    "imageUrl": "https://ph-files.imgix.net/e0c7c876-e044-409e-81ff-6fc008a70415.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                    "title": "MongoDB — The database for modern applications.",
                    "description": "MongoDB Inc. is an American software company that develops and provides commercial support for the open source database MongoDB, a NoSQL database that stores data in JSON-like documents with flexible schemas."
                  },
                  {
                    "rank": "6",
                    "imageUrl": "https://ph-files.imgix.net/c1ad78f3-60d5-4080-a915-5702a666ea08.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                    "title": "Tinybird — Turn raw data into realtime API at scale",
                    "description": "Build analytical API endpoints in minutes with no backend involved. Ingest huge amounts of data, transform it with SQL, and create dynamic endpoints on it."
                  },
                  {
                    "rank": "7",
                    "imageUrl": "https://ph-files.imgix.net/bccabb30-bb51-4ab2-8247-49dd657c3362.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                    "title": "Upstash — Serverless data platform for Redis and Kafka",
                    "description": "Serverless Redis and Kafka as a service with per request pricing. Use any Redis/Kafka clients. The built-in REST API enables use cases with serverless and edge functions."
                  },
                  {
                    "rank": "8",
                    "imageUrl": "https://ph-files.imgix.net/04da03de-e75f-4453-acf2-39ba73b7c2d0.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                    "title": "Prisma — Turn your database into a GraphQL API",
                    "description": "Prisma is a realtime GraphQL database layer. Connect directly from the frontend or build your own GraphQL server. - Compatible with existing tooling - Powerful GraphQL API - Runs everywhere"
                  },
                  {
                    "rank": "9",
                    "imageUrl": "https://ph-files.imgix.net/8fd47ed2-7e09-42c0-8a09-9e66744ab17d.svg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                    "title": "Laravel Framework — The PHP Framework for Web Artisans",
                    "description": "Laravel is a web application framework with expressive, elegant syntax. We’ve already laid the foundation — freeing you to create without sweating the small things."
                  },
                  {
                    "rank": "10",
                    "imageUrl": "https://ph-files.imgix.net/a34b17cd-6269-42b7-bd6f-8474f59fd6e7.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                    "title": "PlanetScale — The ultimate MySQL database platform",
                    "description": "A MySQL-compatible database that brings you scale, performance, and reliability without sacrificing developer experience."
                  }
            ]
          },
          {
            "sub_cat_name": "Remote workforce tool",
            "sub_cat_heading": "The best Remote workforce tool in 2024",
            "products": [
                {
                    "rank": "1",
                    "imageUrl": "https://ph-files.imgix.net/e166b73e-887d-4ab8-ac43-483c0a0f14ca.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                    "title": "PostgreSQL — A powerful, open source object-relational database system",
                    "description": "An open source, object-relational database system with over 35 years of active development that has earned it a strong reputation for reliability, feature robustness, and performance."
                  },
                  {
                    "rank": "2",
                    "imageUrl": "https://ph-files.imgix.net/6859e0cb-5118-4c0f-82d4-3c54bd4d7621.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                    "title": "Mixpanel — Event analytics everyone can use",
                    "description": "An event analytics platform that allows anyone to get answers from their customer and revenue data in seconds. It offers powerful real-time charts and visualizations of how people interact with your digital products and company."
                  },
                  {
                    "rank": "3",
                    "imageUrl": "https://ph-files.imgix.net/24a944d4-ad23-4fcc-93a6-018fad330b9f.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                    "title": "Dokin — Sync live data from apps in Sheets, Slides, and Docs",
                    "description": "Connect marketing channels, CRMs, and databases to Google Sheets and Looker with no-code."
                  },
                  {
                    "rank": "4",
                    "imageUrl": "https://ph-files.imgix.net/0adbbeb6-a0bb-4e39-801d-950b3130e0c8.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                    "title": "AnimStats — Transform Your Stats into Captivating Animated GIFs",
                    "description": "Transform your stats into captivating animated GIFs. Boost engagement, grab attention, and turn your tweets into irresistible eye candy with AnimStats. Elevate your data visuals like never before. Unleash the power of scroll-stopping GIFs!"
                  },
                  {
                    "rank": "5",
                    "imageUrl": "https://ph-files.imgix.net/f605d90f-1d8c-4677-a740-bae76b1a9e8b.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                    "title": "Wolfram Mathematica — The world's definitive system for modern technical computing",
                    "description": "Wolfram Mathematica is a modern technical computing system spanning most areas of technical computing - including neural networks, machine learning, image processing, geometry, data science, visualizations, and others. The system is used in many technical, scientific, engineering, mathematical, and computing fields."
                  },
                  {
                    "rank": "6",
                    "imageUrl": "https://ph-files.imgix.net/aa769f35-40fa-4c8f-bbd9-7e18a15c3b3c.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                    "title": "City Roads — Open source, visualization of all roads within any city.",
                    "description": "Search for your city. The data is fetched from OpenStreetMap using overpass API."
                  },
                  {
                    "rank": "7",
                    "imageUrl": "https://ph-files.imgix.net/5fd2a535-a102-4627-b3d5-790ea06ffd6f.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                    "title": "MotherDuck — The ducking simple data warehouse for analytics",
                    "description": "The cloud SQL analytics platform that helps you do more with your data. A unique architecture enables dual query execution across local machines and the cloud, letting you experience smooth workflows and ultra-efficient performance that won’t break the bank."
                  },
                  {
                    "rank": "8",
                    "imageUrl": "https://ph-files.imgix.net/e91c28c7-3c90-4df7-a4eb-0c23c78ac1a5.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                    "title": "nivo — nivo provides a rich set of dataviz components",
                    "description": ""
                  },
                  {
                    "rank": "9",
                    "imageUrl": "https://ph-files.imgix.net/5143f8ed-4a8c-4175-81c4-f250ecf35bed.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                    "title": "Visual Capitalist — Visual content focused on emerging trends in business.",
                    "description": ""
                  },
                  {
                    "rank": "10",
                    "imageUrl": "https://ph-files.imgix.net/39ffa06f-5cdc-4061-8c0f-f4dbff2f60aa.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                    "title": "MapTiler — A software platform for building digital maps",
                    "description": "Easy to use maps, documentation, code samples, and developer tools for web & mobile. MapTiler is a software platform for building digital maps used by 300 million people a month. Companies and institutions integrate our street and satellite maps of the entire world with their products. Maps are personalized, smart, and without ads or customer data leaks."
                  }
            ]
          },
          {
            "sub_cat_name": "Retirement planning",
            "sub_cat_heading": "The best Retirement planning in 2024",
            "products": [
                {
                    "rank": "1",
                    "imageUrl": "https://ph-files.imgix.net/c17453f9-e544-4e6a-86b0-4027cf710cf5.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                    "title": "GitHub — How people build software",
                    "description": "GitHub is a development platform inspired by the way you work."
                  },
                  {
                    "rank": "2",
                    "imageUrl": "https://ph-files.imgix.net/c5755a02-777d-4baf-a7d0-c5654511ef36.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                    "title": "Render — Build, deploy, and scale your apps with unparalleled ease",
                    "description": "A unified platform to build and run all your apps and websites with free SSL, a global CDN, private networks and auto deploys from Git."
                  },
                  {
                    "rank": "3",
                    "imageUrl": "https://ph-files.imgix.net/c07d85e1-8ac0-4793-8cc5-3b413644371d.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                    "title": "Xcode — Develop, test, and distribute apps for all Apple platforms",
                    "description": "Code and design your apps faster with enhanced code completion, interactive previews, and live animations. Use Git staging to craft your next commit without leaving your code. Explore and diagnose your test results with redesigned test reports with video recording. And start deploying seamlessly to TestFlight and the App Store from Xcode Cloud. Creating amazing apps has never been easier."
                  },
                  {
                    "rank": "4",
                    "imageUrl": "https://ph-files.imgix.net/03b893f5-886d-43ec-977e-5e05e0f6f104.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                    "title": "Gitea — Painless self-hosted all-in-one software development service",
                    "description": "Git hosting, code review, team collaboration, package registry, and CI/CD."
                  },
                  {
                    "rank": "5",
                    "imageUrl": "https://ph-files.imgix.net/2e6a0690-2115-4a71-bb08-ab9974a7062a.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                    "title": "Tower – Git client for Mac and Windows — Build Better Software",
                    "description": "Over 100,000 developers and designers are more productive with Tower - the most powerful Git client for Mac and Windows."
                  },
                  {
                    "rank": "6",
                    "imageUrl": "https://ph-files.imgix.net/0c9d8a74-d6af-4869-b189-78d8b05bc9d8.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                    "title": "Fork — A fast and friendly git client for Mac",
                    "description": ""
                  },
                  {
                    "rank": "7",
                    "imageUrl": "https://ph-files.imgix.net/c07ea694-1fca-46b2-8c11-60bf5f92892d.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                    "title": "Github Pages — Websites for you and your projects.",
                    "description": "Build your own site from scratch or generate one for your project. You get one site per GitHub account and organization, and unlimited project sites. Let‘s get started."
                  },
                  {
                    "rank": "8",
                    "imageUrl": "https://ph-files.imgix.net/da67b505-bae5-4fa9-b9d7-dbbb4a53196b.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                    "title": "Atlassian Sourcetree — The best Mac and Windows client for Git and Mercurial.",
                    "description": "A Git GUI that offers a visual representation of your repositories. Sourcetree is a free Git client for Windows and Mac."
                  },
                  {
                    "rank": "9",
                    "imageUrl": "https://ph-files.imgix.net/30687d08-5d93-4729-aac3-acc6ede03a0f.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                    "title": "Val Town — If GitHub Gists could run and AWS Lambda were fun.",
                    "description": "If GitHub Gists could run and AWS Lambda were fun."
                  },
                  {
                    "rank": "10",
                    "imageUrl": "https://ph-files.imgix.net/e75faa98-9e40-4f1d-a6af-f689771343fd.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                    "title": "GitLab — Complete DevOps platform, delivered as a single application.",
                    "description": "GitLab is a web-based DevOps lifecycle tool that provides a Git-repository manager providing wiki, issue-tracking and CI/CD pipeline features, using an open-source license, developed by GitLab Inc."
                  }
            ]
          },
          {
            "sub_cat_name": "Saving apps",
            "sub_cat_heading": "The best Saving apps in 2024",
            "products": [
                {
                    "rank": "1",
                    "imageUrl": "https://ph-files.imgix.net/76ab59d2-551c-4775-a162-f8490956d66f.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                    "title": "Netlify — The composable platform for modern sites, stores, and apps.",
                    "description": "Netlify is the foundation for Enterprises looking to modernize their web architecture. With Netlify, your team can ship faster, be more productive, reduce risk and complexity, and drive higher conversions and revenue. It features continuous deployment from Git across a global application delivery network, serverless form handling, support for AWS Lambda functions, and full integration with Let's Encrypt."
                  },
                  {
                    "rank": "2",
                    "imageUrl": "https://ph-files.imgix.net/cd4263bb-796c-4829-905a-a350ccb6bbf7.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                    "title": "Dopt — The product-led growth platform for modern teams",
                    "description": "Use our pre-built React components, flexible SDKs, and powerful platform to effortlessly build better product onboarding, assistance, and announcements. Free for companies with under 1,000 monthly users."
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
                    "imageUrl": "https://ph-files.imgix.net/2dcacc76-6e98-4c8f-bee0-4d7d83fb1aa6.vnd.microsoft.icon?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=14&h=14&fit=crop",
                    "title": "Directus — Instant no-code app and dynamic API for any SQL database",
                    "description": "The Modern Data Stack 🐰 — Directus is an instant REST+GraphQL API and intuitive no-code data collaboration app for any SQL database."
                  },
                  {
                    "rank": "6",
                    "imageUrl": "https://ph-files.imgix.net/c5e674f4-3077-4976-bfe3-55064e647e74.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                    "title": "Ghost — Publish online, build a business, work from home",
                    "description": "The world's most popular modern open source publishing platform. A headless Node.js CMS used by Apple, Sky News, Tinder and thousands more. MIT licensed, with 30k+ stars on Github."
                  },
                  {
                    "rank": "7",
                    "imageUrl": "https://ph-files.imgix.net/46f667f9-aa1e-4736-bd55-1561deb4afae.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                    "title": "Notaku — Docs websites powered by Notion",
                    "description": "Notaku creates awesome docs websites from your Notion pages It's like GitBook but using Notion for your CMS Notaku is not limited to docs websites, you can also build docs, blog, help desk, changelog and roadmap websites."
                  }
            ]
          },
          {
            "sub_cat_name": "Startup financial planning",
            "sub_cat_heading": "The best Startup financial planning in 2024",
            "products": [
              {
                "rank": "1",
                "imageUrl": "https://ph-files.imgix.net/a91a21ee-1d99-4713-87a9-7466c778feb9.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "JetBrains — A suite of intelligent development tools",
                "description": "Powerful IDEs for most programming languages and technologies along with products for team collaboration."
              },
              {
                "rank": "2",
                "imageUrl": "https://ph-files.imgix.net/cdb23f26-b385-4854-a005-3862be50f79e.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "GitHub Copilot Chat — AI chat features powered by Copilot",
                "description": "GitHub Copilot Chat is a companion extension to GitHub Copilot that provides conversational AI assistance throughout your software development journey in VS Code."
              },
              {
                "rank": "3",
                "imageUrl": "https://ph-files.imgix.net/043ab050-9dff-4bb2-bff0-f6645ba07a58.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "Groq Chat — An LPU inference engine",
                "description": "A new type of end-to-end processing unit system that provides the fastest inference for computationally intensive applications with a sequential component to them, such as AI language applications (LLMs)"
              },
              {
                "rank": "4",
                "imageUrl": "https://ph-files.imgix.net/96ea26ff-b99f-442d-aad9-49c3a4a6d433.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "ggml — ML tensor library to enable LLMs on consumer hardware",
                "description": ""
              },
              {
                "rank": "5",
                "imageUrl": "https://ph-files.imgix.net/927733c0-76ff-402b-af77-e09cbd88f1cd.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "Cursor Copilot++ — Autocomplete redesigned to predict your next edit",
                "description": "A more powerful version of Copilot that can suggest mid-line completions and entire diffs. Trained to autocomplete on sequences of edits, it's quick to understand the change you're making."
              },
              {
                "rank": "6",
                "imageUrl": "https://ph-files.imgix.net/1f84350b-c1ce-4670-ba12-642be36da364.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "Dify.AI — Open-source platform for LLMOps,Define your AI-native Apps",
                "description": "Dify.AI is an open-source platform for LLMOpsIt offers visual management of prompts, operations, and datasets. Create an AI app in minutes or integrate LLM into your app for continuous improvement."
              },
              {
                "rank": "7",
                "imageUrl": "https://ph-files.imgix.net/1f885b01-0d52-48b7-a8af-74b4dac2b6b4.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "LocalizeBot — Translate iOS app In 1 click",
                "description": "Simplifies app localization and helps you reach more users. Use a machine translation service to translate your App and App Store metadata. - Supported xliff and xcloc files. - Translate App Store metadata."
              },
              {
                "rank": "8",
                "imageUrl": "https://ph-files.imgix.net/4351458f-922c-4c5c-acb3-2a0e2dfc9edf.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "Continue — Continue enables you to create your own AI code assistant",
                "description": "Continue enables you to create your own AI code assistant inside your IDE. Keep your developers in flow with open-source code copilots."
              },
              {
                "rank": "9",
                "imageUrl": "https://ph-files.imgix.net/13997079-0c04-4c79-b935-8d69cf91ad4b.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "Hex — Streamlined data work, with notebooks, SQL, Python & no code",
                "description": "A modern workspace to help data teams build and share. Make decisions with live data, interactive workflows, data apps, and beautiful reporting in a collaborative environment."
              },
              {
                "rank": "10",
                "imageUrl": "https://ph-files.imgix.net/edf83002-3e91-4119-9a9d-5a8cf9231eb0.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "Nashit 🎸 — Generate a full React App and a CI/CD pipeline in minutes",
                "description": "Nashit AI offers a fast and easy way to build React apps. In a couple of minutes, you will get a fully functioning React app with a full CI/CD pipeline."
              }
            ]
          },
          {
            "sub_cat_name": "Stock trading platforms",
            "sub_cat_heading": "The best Stock trading platforms in 2024",
            "products": [
                {
                    "rank": "1",
                    "imageUrl": "https://ph-files.imgix.net/e2a98636-71d2-4989-abf6-acefe8584e17.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                    "title": "Linear — Manage software development and track bugs",
                    "description": "Manage software development and track bugs. Linear's streamlined design is built for speed and efficiency to help high performing teams accomplish great things."
                  },
                  {
                    "rank": "2",
                    "imageUrl": "https://ph-files.imgix.net/c17453f9-e544-4e6a-86b0-4027cf710cf5.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                    "title": "GitHub — How people build software",
                    "description": "GitHub is a development platform inspired by the way you work."
                  },
                  {
                    "rank": "3",
                    "imageUrl": "https://ph-files.imgix.net/294de8fd-676b-423a-b8d3-b957fd521e68.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                    "title": "JIRA — How teams do great",
                    "description": "Create and track feedback for Atlassian products."
                  },
                  {
                    "rank": "4",
                    "imageUrl": "https://ph-files.imgix.net/84609ac8-ee09-40f9-8be3-d7e90145081a.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                    "title": "Trello — Visual collaboration with a shared perspective on projects",
                    "description": "Trello is a web-based Kanban-style list-making application. Originally made by Fog Creek Software in 2011, it was spun out to form the basis of a separate company in 2014 and later sold to Atlassian in January 2017."
                  },
                  {
                    "rank": "5",
                    "imageUrl": "https://ph-files.imgix.net/197f2704-229a-4a91-b9d7-10364042b31e.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                    "title": "Sentry — Application monitoring and error tracking software",
                    "description": "Self-hosted and cloud-based application monitoring that helps software teams see clearer, solve quicker, & learn continuously."
                  },
                  {
                    "rank": "6",
                    "imageUrl": "https://ph-files.imgix.net/1bf8e033-99c1-4442-b3da-e11d03c56559.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                    "title": "Asana — Track, manage, and connect your projects across any team",
                    "description": "Stay on track, keep projects organized, and hit deadlines. See project progress, track individual tasks, plan sprints, integrate with other tools, and achieve successful launches."
                  },
                  {
                    "rank": "7",
                    "imageUrl": "https://ph-files.imgix.net/a70282fd-1cf2-42e3-b712-d1d39e7c7d1c.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                    "title": "Features.Vote — Listen to your users. Know what to build next.",
                    "description": "Let your users post and vote on features they want, driving your product's growth with precision and clarity. 🚀"
                  },
                  {
                    "rank": "8",
                    "imageUrl": "https://ph-files.imgix.net/67ae6904-b04d-4376-a55c-e12d55afa71b.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                    "title": "LogRocket — Stop guessing why bugs happen",
                    "description": "LogRocket helps product teams build better experiences for their users. By recording videos of user sessions along with logs and network data, LogRocket surfaces UX problems and reveals the root cause of every bug."
                  },
                  {
                    "rank": "9",
                    "imageUrl": "https://ph-files.imgix.net/5aef40ff-3d74-405b-a375-993e1fdb26f7.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                    "title": "GitHub Actions — Automate your workflow from idea to production",
                    "description": "GitHub Actions makes it easy to automate all your software workflows, now with world-class CI/CD. Build, test, and deploy your code right from GitHub. Make code reviews, branch management, and issue triaging work the way you want."
                  },
                  {
                    "rank": "10",
                    "imageUrl": "https://ph-files.imgix.net/16a0684e-199b-4904-9c96-e5420217222c.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                    "title": "EnlightUp — Enhance your products with customer feedback",
                    "description": "Collect feedback from customers in one place to make better product decisions."
                  }
            ]
          },
          {
            "sub_cat_name": "Tax preparation ",
            "sub_cat_heading": "The best Tax preparation in 2024",
            "products": [
                {
                    "rank": "1",
                    "imageUrl": "https://ph-files.imgix.net/99901859-6f81-4d81-b7a0-40dce2644641.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=14&h=14&fit=crop",
                    "title": "Circle — The all-in-one community platform for creators",
                    "description": "Bring together your discussions, memberships, and content. Integrate a thriving community wherever your audience is, all under your own brand."
                  },
                  {
                    "rank": "2",
                    "imageUrl": "https://ph-files.imgix.net/fcde694f-6982-4d00-864c-a3c180203ab6.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                    "title": "Memberstack — Authentication & Payments for Webflow. Total design freedom.",
                    "description": "Memberstack empowers you to build anything - from gated blogs, to social media platforms - all using Memberstack & Webflow (or, whatever else you use to build sites & apps). Over 3,000 companies like Slack, Reddit, and American Airlines use Memberstack to build scalable, custom membership experiences. You can build everything you need without coding - but, you can also incorporate your own code into your projects and scale with Memberstack to a full-blown react application."
                  },
                  {
                    "rank": "3",
                    "imageUrl": "https://ph-files.imgix.net/1b273555-0240-4583-b16d-fe3a0810a9f9.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                    "title": "Buy Me a Coffee — A supporter is worth a thousand followers",
                    "description": "Buy Me a Coffee is a beautiful way for creators to accept one-time and monthly support from their fans. Without stitching together a bunch of apps like Patreon, Mailchimp, and a donate button — you can accept support, memberships, and build a direct relationship with your fans. Your fans are going to love it."
                  },
                  {
                    "rank": "4",
                    "imageUrl": "https://ph-files.imgix.net/e1deaf8f-8d1c-45f1-991f-6f4952ae5ba9.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                    "title": "staarter.dev — Launch Your Next SaaS Faster with staarter.dev",
                    "description": "A comprehensive Next.js boilerplate that empowers developers to launch their SaaS applications quickly and efficiently. With features like authentication, subscription management, and localization, it provides a solid foundation so you can focus on innovating."
                  },
                  {
                    "rank": "5",
                    "imageUrl": "https://ph-files.imgix.net/42ce2324-17d8-4dea-a428-8f950f7196e2.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=14&h=14&fit=crop",
                    "title": "Ko-fi.com — Fund Your Passions.",
                    "description": "Ko-fi is an online platform which helps creators such as illustrators, podcasters and bloggers receive financial support from fans of their work."
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
