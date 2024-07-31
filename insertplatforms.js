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
      "cat_name": "Platforms",
      "cat_heading": "The best Platforms in 2024",
      "sub_categories": [
        {
          "sub_cat_name": "Crowdfunding",
          "sub_cat_heading": "The best Crowdfunding in 2024",
          "products": [
            {
              "rank": "1",
              "imageUrl": "https://ph-files.imgix.net/42ce2324-17d8-4dea-a428-8f950f7196e2.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=14&h=14&fit=crop",
              "title": "Ko-fi.com — Fund Your Passions.",
              "description": "Ko-fi is an online platform which helps creators such as illustrators, podcasters and bloggers receive financial support from fans of their work."
            }
          ]
        },
        {
          "sub_cat_name": "Event software",
          "sub_cat_heading": "The best Event software in 2024",
          "products": [
            {
              "rank": "1",
              "imageUrl": "https://ph-files.imgix.net/438af8e8-692c-4cfd-ac4f-1ac08b267074.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
              "title": "Meetup — Meet new people, do new things",
              "description": "Find Meetup events so you can do more of what matters to you. Or create your own group and meet people near you who share your interests."
            },
            {
              "rank": "2",
              "imageUrl": null,
              "title": "lablab.ai — Empowering AI innovation",
              "description": "Lablab.ai is a community of over 30,000 Makers building with state-of-the-art, modern Artificial Intelligence. Join a free Hackathon event today!"
            },
            {
              "rank": "3",
              "imageUrl": "https://ph-files.imgix.net/d72cdc8d-47ea-49c3-bfa8-b54e170a395e.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
              "title": "OpenAI Events — Uniting the global AI community",
              "description": "This domain is for sale!"
            },
            {
              "rank": "4",
              "imageUrl": "https://ph-files.imgix.net/b231e288-0294-4e14-95e0-009ebbbf9fa5.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
              "title": "Eventbrite — Local Events & Things To Do",
              "description": "Eventbrite brings people together through live experiences. Discover events that match your passions, or create your own with online ticketing tools."
            },
            {
              "rank": "5",
              "imageUrl": "https://ph-files.imgix.net/da71481f-a239-49ac-ba8e-d8b9c2e1cbfa.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
              "title": "Heardle — Heardle - Spotify Music Guessing Game",
              "description": "Since spotify decided to get rid of their headle game, here is a new version. I really enjoyed playing heardle and hated that spotify got rid of it. So I have been playing this version now and made it into a website."
            }
          ]
        },
        {
            "sub_cat_name": "Job boards",
            "sub_cat_heading": "The best Job boards in 2024",
            "products": [
              {
                "rank": "1",
                "imageUrl": "https://ph-files.imgix.net/96d6beef-7855-4cae-8dec-cecff48229d5.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "LinkedIn — Connect, apply, and find jobs",
                "description": "Manage your professional identity. Build and engage with your professional network. Access knowledge, insights and opportunities. LinkedIn is an American business and employment-oriented service that operates via websites and mobile apps. Founded on December 28, 2002, and launched on May 5, 2003, it is mainly used for professional networking, including employers posting jobs and job seekers posting their CVs."
              },
              {
                "rank": "2",
                "imageUrl": "https://ph-files.imgix.net/90491fc5-dace-4f57-b815-365f3100633a.x-icon?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "LinkedIn — LinkedIn Job Search: Find US Jobs, Internships, Jobs Near Me",
                "description": "64% of job seekers get hired through a referral. Use LinkedIn Jobs to boost your chances of getting hired through people you know."
              },
              {
                "rank": "3",
                "imageUrl": "https://ph-files.imgix.net/cf577e7b-42f4-4a5f-b21c-3ced9d9b679c.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "RanchWork.com — The oldest ranching job board on the internet",
                "description": "Welcoming over 40,000 visits & 195,000 pageviews a month, RanchWork.com is the leader in ranching & outdoors employment. We not only feature available jobs, but also job seekers searching for their dream ranch opportunity."
              },
              {
                "rank": "4",
                "imageUrl": "https://ph-files.imgix.net/690f97bd-5978-4e0f-b804-66d753e0ea0a.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "Remote Rocketship — The remote job board with 18k+ tech jobs",
                "description": "Search 18,000+ open roles at 6,000+ remote companies. Filter by location, tech stack, salary, company size, full-time/part-time and more!"
              },
              {
                "rank": "5",
                "imageUrl": "https://ph-files.imgix.net/c9b7be6c-f08e-4fb8-8436-fe849d8c062f.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "Upwork — How work should work",
                "description": "The world’s work marketplace, connecting millions of businesses with independent talent."
              }
            ]
          },
          {
            "sub_cat_name": "Language Learning",
            "sub_cat_heading": "The best Language Learning in 2024",
            "products": [
              {
                "rank": "1",
                "imageUrl": "https://ph-files.imgix.net/b739ac93-2899-4cc1-a893-40ea8afde77e.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "GPT-4 by OpenAI — LLM that exhibits human-level performance",
                "description": "GPT-4 is a multimodal model developed by OpenAI that can understand and generate human-like text based on the context provided. It is used in various applications, such as content creation, customer support, coding help, and educational tools."
              },
              {
                "rank": "2",
                "imageUrl": "https://ph-files.imgix.net/bd89fecd-21c2-43d2-8e0b-1fd956b8d498.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "Lemon Squeezy — Sell digital products the easy-peasy way",
                "description": "The all-in-one platform for selling digital products, subscriptions, software licenses, and courses is finally here, and it goes by the name Lemon Squeezy."
              },
              {
                "rank": "3",
                "imageUrl": "https://ph-files.imgix.net/1d58a372-e2bc-4eca-9a2b-d9828c193a22.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "GPT Store — Help you find useful and popular custom versions of ChatGPT.",
                "description": "The store features a diverse range of GPTs developed by our partners and the community. Browse popular and trending GPTs on the community leaderboard, with categories like DALL·E, writing, research, programming, education, and lifestyle."
              },
              {
                "rank": "4",
                "imageUrl": "https://ph-files.imgix.net/7fecfb2e-a14e-41c7-baa8-0be3f468c4e1.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "Perplexity 2.0 — Where Knowledge Begins",
                "description": "Knowledge is power. Experience Perplexity's new brand, designed to unlock our curiosity, one question at a time. Discover knowledge and explore endless possibilities."
              },
              {
                "rank": "5",
                "imageUrl": "https://ph-files.imgix.net/2a77db72-7177-4935-963d-496839aa07db.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "Llama 3 — Meta's openly available LLM",
                "description": "An openly accessible model that excels at language nuances, contextual understanding, and complex tasks like translation and dialogue generation."
              },
              {
                "rank": "6",
                "imageUrl": "https://ph-files.imgix.net/db193b4c-13cc-4700-8cde-ebac26d3c247.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "Perplexity — Where Knowledge Begins",
                "description": "Your Research Assistant. Available wherever you are: 🤖 http://pplx.ai/android // 📱 http://pplx.ai/iphone"
              },
              {
                "rank": "7",
                "imageUrl": "https://ph-files.imgix.net/31f7fa4d-ec8f-4904-ac08-b893980e372d.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "Duolingo — The free, fun & effective way to learn a language",
                "description": "Duolingo is a platform that includes a language-learning website and app, as well as a digital language proficiency assessment exam."
              },
              {
                "rank": "8",
                "imageUrl": "https://ph-files.imgix.net/d81028ec-db98-4c7c-a69a-d1a43f28d9d8.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=14&h=14&fit=crop",
                "title": "AI Writer: Essay Email Writing(APP) — ChatGPT App in your Pocket🤳🏼📱",
                "description": "AI Writer generates high-quality content that is tailored to your needs in just seconds. Whether you need to craft a persuasive essay or a professional email, AI Writer has got you covered. Download now and unleash your full writing potential!🙌"
              },
              {
                "rank": "9",
                "imageUrl": "https://ph-files.imgix.net/3922fd4d-6a84-47e3-96d3-3aefda3dda4d.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "Clipchamp — Fast forward your video editing",
                "description": "An online video editor that empowers anyone to quickly and easily create videos."
              },
              {
                "rank": "10",
                "imageUrl": "https://ph-files.imgix.net/2a107f42-4163-42b3-96b2-8d25bcbeb7f8.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "Wikipedia — The free encyclopedia that anyone can edit.",
                "description": ""
              }
            ]
          },
          {
            "sub_cat_name": "News",
            "sub_cat_heading": "The best News in 2024",
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
            "sub_cat_name": "Online learing",
            "sub_cat_heading": "The best Online learing in 2024",
            "products": [
              {
                "rank": "1",
                "imageUrl": "https://ph-files.imgix.net/b739ac93-2899-4cc1-a893-40ea8afde77e.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "GPT-4 by OpenAI — LLM that exhibits human-level performance",
                "description": "GPT-4 is a multimodal model developed by OpenAI that can understand and generate human-like text based on the context provided. It is used in various applications, such as content creation, customer support, coding help, and educational tools."
              },
              {
                "rank": "2",
                "imageUrl": "https://ph-files.imgix.net/bd89fecd-21c2-43d2-8e0b-1fd956b8d498.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "Lemon Squeezy — Sell digital products the easy-peasy way",
                "description": "The all-in-one platform for selling digital products, subscriptions, software licenses, and courses is finally here, and it goes by the name Lemon Squeezy."
              },
              {
                "rank": "3",
                "imageUrl": "https://ph-files.imgix.net/1d58a372-e2bc-4eca-9a2b-d9828c193a22.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "GPT Store — Help you find useful and popular custom versions of ChatGPT.",
                "description": "The store features a diverse range of GPTs developed by our partners and the community. Browse popular and trending GPTs on the community leaderboard, with categories like DALL·E, writing, research, programming, education, and lifestyle."
              },
              {
                "rank": "4",
                "imageUrl": "https://ph-files.imgix.net/7fecfb2e-a14e-41c7-baa8-0be3f468c4e1.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "Perplexity 2.0 — Where Knowledge Begins",
                "description": "Knowledge is power. Experience Perplexity's new brand, designed to unlock our curiosity, one question at a time. Discover knowledge and explore endless possibilities."
              },
              {
                "rank": "5",
                "imageUrl": "https://ph-files.imgix.net/2a77db72-7177-4935-963d-496839aa07db.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "Llama 3 — Meta's openly available LLM",
                "description": "An openly accessible model that excels at language nuances, contextual understanding, and complex tasks like translation and dialogue generation."
              },
              {
                "rank": "6",
                "imageUrl": "https://ph-files.imgix.net/db193b4c-13cc-4700-8cde-ebac26d3c247.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "Perplexity — Where Knowledge Begins",
                "description": "Your Research Assistant. Available wherever you are: 🤖 http://pplx.ai/android // 📱 http://pplx.ai/iphone"
              },
              {
                "rank": "7",
                "imageUrl": "https://ph-files.imgix.net/31f7fa4d-ec8f-4904-ac08-b893980e372d.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "Duolingo — The free, fun & effective way to learn a language",
                "description": "Duolingo is a platform that includes a language-learning website and app, as well as a digital language proficiency assessment exam."
              },
              {
                "rank": "8",
                "imageUrl": "https://ph-files.imgix.net/d81028ec-db98-4c7c-a69a-d1a43f28d9d8.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=14&h=14&fit=crop",
                "title": "AI Writer: Essay Email Writing(APP) — ChatGPT App in your Pocket🤳🏼📱",
                "description": "AI Writer generates high-quality content that is tailored to your needs in just seconds. Whether you need to craft a persuasive essay or a professional email, AI Writer has got you covered. Download now and unleash your full writing potential!🙌"
              },
              {
                "rank": "9",
                "imageUrl": "https://ph-files.imgix.net/3922fd4d-6a84-47e3-96d3-3aefda3dda4d.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "Clipchamp — Fast forward your video editing",
                "description": "An online video editor that empowers anyone to quickly and easily create videos."
              },
              {
                "rank": "10",
                "imageUrl": "https://ph-files.imgix.net/2a107f42-4163-42b3-96b2-8d25bcbeb7f8.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "Wikipedia — The free encyclopedia that anyone can edit.",
                "description": ""
              }
            ]
          },
          {
            "sub_cat_name": "Startup Communities",
            "sub_cat_heading": "The best Startup Communities in 2024",
            "products": [
              {
                "rank": "1",
                "imageUrl": "https://ph-files.imgix.net/7d6535a4-c2fe-4f75-a71e-e5bd5156b0c9.x-icon?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=14&h=14&fit=crop",
                "title": "ShipFast — Ship your startup in days, not weeks",
                "description": "The NextJS boilerplate with all the stuff you need to get your product in front of customers. From idea to production in 5 minutes."
              },
              {
                "rank": "2",
                "imageUrl": "https://ph-files.imgix.net/d618ea86-70ae-4d12-8ec2-0ed78c723ddf.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "Product Hunt — The place to discover your next favorite thing.",
                "description": "Founded in 2013 as a tiny side project, Product Hunt has become the place for makers and companies to launch their latest app, gadget, or physical products to the world. It's a global community of friendly folks sharing and discussing the latest in tech."
              },
              {
                "rank": "3",
                "imageUrl": "https://ph-files.imgix.net/967aae82-4147-40ab-8ed0-fedcc7a8d4fe.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "Morning Maker Show — Build in public show you need to know about",
                "description": "We keep everyone updated on cool makers and their great products. Sometimes we can be funny too."
              },
              {
                "rank": "4",
                "imageUrl": "https://ph-files.imgix.net/eb11eb6c-ee5e-412b-8ae1-0afbd85c7b12.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "AWS Activate — coupons: $5,000 in credits 2 years and others deals Dec 23",
                "description": "AWS Activate is a comprehensive program designed to support startups and businesses and provide them with the resources and tools they need to build and scale their businesses on the Amazon Web Services (AWS) cloud platform."
              },
              {
                "rank": "5",
                "imageUrl": "https://ph-files.imgix.net/e78180a6-884d-4a86-94e9-03a3097b021f.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "AffordHunt — Discover Affordable AI & SaaS Alternatives",
                "description": "With the rise of AI and SaaS tool prices, many indie hackers and SMBs feel left behind. Enter AffordHunt - a curated platform spotlighting powerful yet budget-friendly tool alternatives. Dive in to find the right tool that aligns with your needs and budget."
              },
              {
                "rank": "6",
                "imageUrl": "https://ph-files.imgix.net/3349e30d-93f8-4737-afe9-327e95ac8f5a.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "supastarter — A SaaS starter kit",
                "description": "Production-ready starter kits and templates to save time."
              },
              {
                "rank": "7",
                "imageUrl": "https://ph-files.imgix.net/b86322e8-b0b1-4a03-8c0c-863b81665896.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "Bot Business 101 — How to start, run & grow your Bot / AI business",
                "description": ""
              },
              {
                "rank": "8",
                "imageUrl": "https://ph-files.imgix.net/ee21e1e2-c5de-4e6e-9170-53e0192fed1c.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "AngelList — Build a startup. Build and manage a fund. Invest in both.",
                "description": "AngelList is building the infrastructure that powers the startup economy, providing startups and investors with the connected tools they need to launch and scale a startup or fund—and invest in both."
              },
              {
                "rank": "9",
                "imageUrl": "https://ph-files.imgix.net/b5b61344-60bd-4a67-85cc-3aa67d064079.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "Crunchbase — The leading platform to discover innovative companies",
                "description": "Crunchbase information includes investments and funding information, founding members and individuals in leadership positions, mergers and acquisitions, news, and industry trends."
              },
              {
                "rank": "10",
                "imageUrl": "https://ph-files.imgix.net/56d21e5e-06b5-467a-a4c3-826f521be169.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "BuildSpace Sage — the place where people build cool shit",
                "description": "sage is a new place on the internet for builders, makers, & creators to find and be found by the right group of ppl. any idea goes. a hip-hop album, short film, a novel, some indie software, a youtube channel — whatever."
              }
            ]
          },
          {
            "sub_cat_name": "Virtual Events",
            "sub_cat_heading": "The best Virtual Events in 2024",
            "products": [
              {
                "rank": "1",
                "imageUrl": "https://ph-files.imgix.net/99901859-6f81-4d81-b7a0-40dce2644641.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=14&h=14&fit=crop",
                "title": "Circle — The all-in-one community platform for creators",
                "description": "Bring together your discussions, memberships, and content. Integrate a thriving community wherever your audience is, all under your own brand."
              },
              {
                "rank": "2",
                "imageUrl": "https://ph-files.imgix.net/d3cdb50a-4828-481e-b8b6-638fa386ff1f.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "Unreal Engine — Make something unreal",
                "description": "Unreal Engine is the world’s most open and advanced real-time 3D creation platform. Continuously evolving to serve not only its original purpose as a state-of-the-art games engine, today it gives creators across industries the freedom and control to deliver cutting-edge content, interactive experiences, and immersive virtual worlds."
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
