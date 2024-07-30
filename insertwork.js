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
      "cat_name": "Work and Productivity",
      "cat_heading": "The best Work and Productivity in 2024",
      "sub_categories": [
        {
          "sub_cat_name": "Ad blockers",
          "sub_cat_heading": "The best Ad blockers in 2024",
          "products": [
            {
              "rank": "1",
              "imageUrl": "https://ph-files.imgix.net/10e7ef30-f2ed-482f-a5e9-d55de252202d.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
              "title": "ScreenshotOne — The Screenshot API you can finally rely on.",
              "description": "Render websites and HTML as images. Block cookie banners and ads. The API uses the latest Google Chrome for rendering and Google Cloud Platform for performance and scalability."
            },
            {
              "rank": "2",
              "imageUrl": "https://ph-files.imgix.net/be677203-0a88-4763-8513-73107463a558.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
              "title": "Brave Private Browser — The browser that rethinks the web.",
              "description": "The Brave Privacy Browser is your fast, free, and safe private web browser with ad blocker and pop-up blocker. Privately browse and search the internet without being tracked by advertisers, malware and pop-ups."
            }
          ]
        },
        {
          "sub_cat_name": "App switcher",
          "sub_cat_heading": "The best App switcher in 2024",
          "products": [
            {
              "rank": "1",
              "imageUrl": "https://ph-files.imgix.net/3558a5ca-e9a0-4ff2-a48c-e88adf779f1c.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
              "title": "React Native — A framework for building native apps using React",
              "description": "Create native apps for Android, iOS, and more using React."
            },
            {
              "rank": "2",
              "imageUrl": "https://ph-files.imgix.net/c6155af3-d909-4a4c-8226-894275d1bb7e.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
              "title": "Retool — Build internal tools, remarkably fast",
              "description": "An application development platform that enables developers to combine the benefits of traditional software development with a drag-and-drop UI editor and AI to build internal tools radically faster. Deploy it anywhere, connect to any internal service, import your libraries, debug with your toolchain, and share it securely to users to ensure good and well-governed software by default."
            },
            {
              "rank": "3",
              "imageUrl": "https://ph-files.imgix.net/3f03bdd9-7d1c-49a6-850a-4ec844fdc9ea.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
              "title": "ToDesktop — Convert your web app to a desktop app in 2 minutes",
              "description": "Take your web app codebase and transform it into a cross platform desktop app with native functionality."
            },
            {
              "rank": "4",
              "imageUrl": "https://ph-files.imgix.net/e277d09d-84de-4555-ba92-8b8e5a39d763.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
              "title": "Raycast — Application launcher and productivity software",
              "description": "A blazingly fast, totally extendable launcher. It lets you complete tasks, calculate, share common links, and much more."
            },
            {
              "rank": "5",
              "imageUrl": "https://ph-files.imgix.net/36dac3fa-ed71-4def-992b-7178e2b78b26.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
              "title": "ApparenceKit — Ship your mobile app in days, not months",
              "description": "ApparenceKit is a complete flutter boilerplate to help you ship a successful app on Android and iOS. Subscription, Notififications, Auth, Ads, translations, Architecture, Deployment...."
            },
            {
              "rank": "6",
              "imageUrl": "https://ph-files.imgix.net/d81028ec-db98-4c7c-a69a-d1a43f28d9d8.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=14&h=14&fit=crop",
              "title": "WorkGPT: Combination of ChatGPT & Zapier — AI Agent Chatbot-based Virtual Assistant",
              "description": "WorkGPT, a chatbot-based platform empowering users to create your very own virtual assistants that work tirelessly. You can seamlessly connect with various tools and applications, enhancing productivity and streamlining tasks effortlessly."
            },
            {
              "rank": "7",
              "imageUrl": "https://ph-files.imgix.net/b695db59-c050-431a-ba9b-8fec75520f3d.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
              "title": "WrapFast — Build an AI Wrapper or any iOS app in minutes",
              "description": "The SwiftUI Boilerplate for creating an AI Wrapper or any iOS app in minutes."
            },
            {
              "rank": "8",
              "imageUrl": "https://ph-files.imgix.net/c0fa3050-ed5d-45b4-8720-6d2ee9f0e81b.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
              "title": "AdMob — app ads & other actionable insights to help your app grow.",
              "description": ""
            },
            {
              "rank": "9",
              "imageUrl": "https://ph-files.imgix.net/300f2018-6c2a-425b-8bc4-7553c8b06dff.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
              "title": "Reveal — Runtime inspection for iOS apps",
              "description": ""
            },
            {
              "rank": "10",
              "imageUrl": "https://ph-files.imgix.net/40789696-36ff-42e5-86e7-406b110e5e47.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
              "title": "Glide — Build Beautiful Apps Without Programming",
              "description": ""
            }
          ]
        },
        {
            "sub_cat_name": "Calendar Apps",
            "sub_cat_heading": "The best Calendar Apps in 2024",
            "products": [
              {
                "rank": "1",
                "imageUrl": "https://ph-files.imgix.net/ff3e2acf-884a-4f4c-a383-6edfe3de0d88.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "Notion — The all-in-one workspace",
                "description": "Notion is an all-in-one workspace that combines note-taking, project management, and task organization. It allows users to create customized databases, documents, and calendars to streamline their personal and professional workflows."
              },
              {
                "rank": "2",
                "imageUrl": "https://ph-files.imgix.net/39eadfe0-8f39-40f8-8213-ee9e516df919.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "Cal.com — Scheduling infrastructure for absolutely everyone",
                "description": "The open source Calendly alternative. Self host it, or have it hosted. Integrate it seamlessly into your business with advanced customization and an open API."
              },
              {
                "rank": "3",
                "imageUrl": "https://ph-files.imgix.net/863849a4-8f1f-4f7c-a171-2029826e52e6.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=14&h=14&fit=crop",
                "title": "BeforeSunset AI — Turns your to-dos into the perfect schedule",
                "description": "BeforeSunset is an AI daily planner tool for busy professionals that plans your day based on your schedule and to-do list. Or, you can create a plan yourself by syncing your calendar. It provides analytics to get insights for sunsetting the day stress-free."
              },
              {
                "rank": "4",
                "imageUrl": "https://ph-files.imgix.net/17261807-4635-4fd2-ad56-2c3f5c79b56d.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "Lark — The simplest way to create and collaborate",
                "description": "Lark combines a multitude of essential collaboration tools in a single interconnected platform, including Chat, Calendar, Creation and Cloud storage. These functions are always in sync, and are easy access from one to the next."
              },
              {
                "rank": "5",
                "imageUrl": "https://ph-files.imgix.net/c5012277-16c1-4bde-83fd-07c4b99c2c49.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "Amie — The joyful productivity app",
                "description": "The joyful productivity app. Schedule time for todos, events, and contacts."
              },
              {
                "rank": "6",
                "imageUrl": "https://ph-files.imgix.net/a5f879de-2dab-44aa-a713-454559fedd35.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "Google Calendar — The shareable online calendar by Google",
                "description": "Spend less time planning and more time doing with a shareable calendar that works across Google Workspace."
              },
              {
                "rank": "7",
                "imageUrl": "https://ph-files.imgix.net/28dcb6f7-088d-4d81-aa6f-c1d5f77e2459.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "Todoist — The to-do list to organize work & life",
                "description": "Simplify life for both you and your team. The world’s #1 task manager and to-do list app."
              },
              {
                "rank": "8",
                "imageUrl": "https://ph-files.imgix.net/eab8aa48-ce0d-477a-9618-fcf3110369a8.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=14&h=14&fit=crop",
                "title": "Cron — Next-generation calendar for professionals and teams",
                "description": "Cron Calendar. Schedule meetings and control your time like never before. Time zone conversions. Multiple accounts. A cleaner, faster interface, and — did we mention it comes with dark mode? Get early access at cron.com"
              },
              {
                "rank": "9",
                "imageUrl": "https://ph-files.imgix.net/f2ec0011-2f03-45cf-b946-aafd5d110adc.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "Dashy — All-in-one app for your tools, data, and notifications",
                "description": "Dashy is an all-in-one app to organize your life and projects. It brings together common tools and data so everything is accessible from a single location, eliminating the need to navigate multiple platforms to find what you are looking for."
              },
              {
                "rank": "10",
                "imageUrl": "https://ph-files.imgix.net/9aaf71e8-fd35-4bd2-8025-68a7a7f51d9e.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=14&h=14&fit=crop",
                "title": "Outlook for Mac — Now free for email, calendars, contacts, and more",
                "description": "Outlook helps you stay connected and organized at the office and at home. It brings the best of Microsoft 365 together — with easy access to emails, files, calendar events, and contacts across all your accounts so you can quickly get things done."
              }
            ]
          },
          {
            "sub_cat_name": "Customer support",
            "sub_cat_heading": "The best Customer support in 2024",
            "products": [
              {
                "rank": "1",
                "imageUrl": "https://ph-files.imgix.net/6ca85bd3-ab80-4498-b678-0c9ef5efa73a.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "Intercom — An AI-first customer support platform",
                "description": "A platform to provide a seamless customer experience across AI and human support, delivering increased customer satisfaction while reducing costs."
              },
              {
                "rank": "2",
                "imageUrl": "https://ph-files.imgix.net/e58c5131-a65f-4287-aa49-b2fb3d105870.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "Cycle — Your feedback hub, on autopilot",
                "description": "Cycle is the fastest way for your team to capture product feedback and share customer insights - without the busywork 👉 https://www.cycle.app"
              },
              {
                "rank": "3",
                "imageUrl": "https://ph-files.imgix.net/06dc62a0-4054-4f9a-bde5-bc6b79093274.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "Zendesk — The #1 helpdesk software",
                "description": "Zendesk is a service-first CRM company that builds software designed to improve customer relationships. As employees, we encourage each other to grow and innovate. As a company, we roll up our sleeves to plant roots in the communities we call home."
              },
              {
                "rank": "4",
                "imageUrl": "https://ph-files.imgix.net/466643f6-a017-4276-ac7e-6a798f8a4dba.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "Attio — Customer relationship magic.",
                "description": "Attio gives you all the tools you need to build the perfect CRM for your team. 🔗 Sync your email & calendar and build a CRM in minutes ⚒️ Build unique workflows exactly to your business needs ⚖️ Iterate & scale easily with integrations and enriched data"
              },
              {
                "rank": "5",
                "imageUrl": "https://ph-files.imgix.net/fb8482c5-7250-467d-9b06-e5aeaa8cfcdd.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "Mailmodo — Boost email conversions with interactive AMP emails.",
                "description": "Mailmodo is an email marketing tool, powered by AMP Emails, enabling users to create & send app-like interactive emails to improve conversions. As interactions happen inside the email, users can take action seamlessly within the email."
              },
              {
                "rank": "6",
                "imageUrl": "https://ph-files.imgix.net/1c677187-acfd-428e-adc3-488f1a08e71e.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "Nolt — User feedback management software and roadmap tool",
                "description": "A free, fast & beautiful way to collect and organize user feedback in a central place. Prioritize feedback, create a roadmap with just a few clicks and keep everyone up-to-date with the roadmap."
              },
              {
                "rank": "7",
                "imageUrl": "https://ph-files.imgix.net/9b89dafe-b565-431d-9093-23e626ae286a.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "MindPal — Build AI agents for your tasks, with your data",
                "description": "Build customized ChatGPT-like agents that understand both your standards and your business context in seconds with no code — anything from a customer support chatbot, an internal AI search engine, to a full-scale CEO assistant."
              },
              {
                "rank": "8",
                "imageUrl": "https://ph-files.imgix.net/c5eeb80f-4c15-4fc8-833b-c9702a18a595.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "Postmark — Email for web applications",
                "description": "Trusted by thousands of developers, Postmark is a fast and reliable email delivery service. Send with Postmark to ensure your application's emails get to the inbox on time, every time."
              },
              {
                "rank": "9",
                "imageUrl": "https://ph-files.imgix.net/566bf379-2801-4ea6-9dfe-5a5ad581d016.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "Crisp — Give your customer experience a human touch",
                "description": "Discover our Business Messaging Platform for Startups & SMB's. The one stop for sales, marketing & support in one platform : Crisp. 14 Days free trial. No credit-card required. Try now ! We provide Knowledge base, Team Inbox, Chatbot, CRM and multiple other features to let you build your own way to customer success."
              },
              {
                "rank": "10",
                "imageUrl": "https://ph-files.imgix.net/a4e943d9-1cd8-4528-b015-07f71eee3bff.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "Twilio — Customer Engagement Platform",
                "description": "Deliver personalized engagement at scale with the Twilio Customer Engagement Platform. Build or buy your ideal customer engagement experience on a trusted, global platform that combines the best in digital communication channels, first-party customer data, and flexible, easy-to-build solutions."
              }
            ]
          },
          {
            "sub_cat_name": "Email clients",
            "sub_cat_heading": "The best Email clients in 2024",
            "products": [
              {
                "rank": "1",
                "imageUrl": "https://ph-files.imgix.net/9b1c0ade-930a-445a-a99d-6e1a0e080a01.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "Superhuman — Revolutionary AI email. Reimagined for teams.",
                "description": "Get through your inbox twice as fast as before, reply 1-2 days sooner, and save 4 hours or more every single week. Use Split Inbox to focus on what matters most, and Reminders to follow-up on time, every time. Instead of repeatedly forwarding or screenshotting, share, comment, and collaborate right from your inbox. Category-leading AI features include Write with AI, Auto Summarize, Instant Reply, and Ask AI. U.S. News recently chose Superhuman as the best AI-powered email client for 2024."
              },
              {
                "rank": "2",
                "imageUrl": "https://ph-files.imgix.net/d81028ec-db98-4c7c-a69a-d1a43f28d9d8.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=14&h=14&fit=crop",
                "title": "AI Writer: Essay Email Writing(APP) — ChatGPT App in your Pocket🤳🏼📱",
                "description": "AI Writer generates high-quality content that is tailored to your needs in just seconds. Whether you need to craft a persuasive essay or a professional email, AI Writer has got you covered. Download now and unleash your full writing potential!🙌"
              },
              {
                "rank": "3",
                "imageUrl": "https://ph-files.imgix.net/685567e8-43d9-4134-92bd-d6ffb1c9dbe6.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "Missive — Email, Chat and Tasks for Productive Teams",
                "description": "Email, group chat and tasks for productive teams. One app for all your internal and external communication. Work management at its best. Try it free!"
              },
              {
                "rank": "4",
                "imageUrl": "https://ph-files.imgix.net/1afd4142-399f-40a3-8da0-705c3c02dbfc.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "HEY — Email at its best, new from Basecamp",
                "description": "Email sucked for years. Not anymore — we fixed it. HEY’s fresh approach transforms email into something you want to use, not something you’re forced to deal with."
              },
              {
                "rank": "5",
                "imageUrl": "https://ph-files.imgix.net/9c9c3c45-376a-412b-87b6-417f99929bc2.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "Gmail — World's #1 free email service.",
                "description": "Gmail is a free email service developed by Google. Users can access Gmail on the web and using third-party programs that synchronize email content through POP or IMAP protocols. Gmail started as a limited beta release on April 1, 2004 and ended its testing phase on July 7, 2009."
              },
              {
                "rank": "6",
                "imageUrl": "https://ph-files.imgix.net/9aaf71e8-fd35-4bd2-8025-68a7a7f51d9e.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=14&h=14&fit=crop",
                "title": "Outlook for Mac — Now free for email, calendars, contacts, and more",
                "description": "Outlook helps you stay connected and organized at the office and at home. It brings the best of Microsoft 365 together — with easy access to emails, files, calendar events, and contacts across all your accounts so you can quickly get things done."
              },
              {
                "rank": "7",
                "imageUrl": "https://ph-files.imgix.net/97cd3103-6eb7-4618-98e3-87ec1c9e4b30.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "MailSlurp — Modern Email APIs for Developers and QA teams.",
                "description": "Create real, private email addresses on demand. Send and receive emails and attachments in application code and integration tests. Intuitive REST APIs and SDK Libraries. Free for personal use."
              },
              {
                "rank": "8",
                "imageUrl": "https://ph-files.imgix.net/43cca1a9-2040-4ba7-a978-f7068fa19cb8.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "Multi Mail for Gmail — Manage all your Gmail accounts under one roof in macOS app",
                "description": "Multi Mail for Gmail – the ultimate macOS app to streamline your email management experience. Effortlessly access and manage all your Gmail accounts under one roof. Say goodbye to juggling between multiple browser windows, & hello to centralized productivity!"
              }
            ]
          },
          {
            "sub_cat_name": "E-signature",
            "sub_cat_heading": "The best E-signature in 2024",
            "products": [
              {
                "rank": "1",
                "imageUrl": "https://ph-files.imgix.net/90491fc5-dace-4f57-b815-365f3100633a.x-icon?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "LinkedIn — LinkedIn Job Search: Find US Jobs, Internships, Jobs Near Me",
                "description": "64% of job seekers get hired through a referral. Use LinkedIn Jobs to boost your chances of getting hired through people you know."
              },
              {
                "rank": "2",
                "imageUrl": "https://ph-files.imgix.net/690f97bd-5978-4e0f-b804-66d753e0ea0a.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "Remote Rocketship — The remote job board with 18k+ tech jobs",
                "description": "Search 18,000+ open roles at 6,000+ remote companies. Filter by location, tech stack, salary, company size, full-time/part-time and more!"
              },
              {
                "rank": "3",
                "imageUrl": "https://ph-files.imgix.net/8b093985-7aea-4f39-923a-7fec97d3d891.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "Findem — Search for ideal candidates like never before",
                "description": "Findem’s Impossible Search lets you find candidates who have the EXACT attributes you’re looking for in a new hire. We’ve exposed 100+ Impossible Searches for free across different roles, so everyone can experience the magic for themselves!"
              }
            ]
          },
          {
            "sub_cat_name": "File storage and sharing",
            "sub_cat_heading": "The best File storage and sharing in 2024",
            "products": [
              {
                "rank": "1",
                "imageUrl": "https://ph-files.imgix.net/db4ba1a3-da45-4435-b285-ca59047141e5.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "DigitalOcean — A cloud platform to deploy, manage & scale apps of any size",
                "description": "Helping millions of developers easily build, test, manage, and scale applications of any size faster than ever before."
              },
              {
                "rank": "2",
                "imageUrl": "https://ph-files.imgix.net/2244b16a-9d2e-4330-b432-3653fb1eb467.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "Amazon Web Services — Virtual private server and web hosting-Amazon Lightsail",
                "description": "Amazon Lightsail is an easy-to-use virtual private server (VPS) that offers simple management of cloud resources such as containers, at low, predictable prices."
              },
              {
                "rank": "3",
                "imageUrl": "https://ph-files.imgix.net/71819a7f-095c-4668-b288-1b433984bf35.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "Flatfile — Extensible API + event based platform for data-file import",
                "description": "The Flatfile Data Exchange Platform provides developers an easy, fast, and secure way to build your ideal solution for importing CSV, Excel, or other data-files, without compromising on flexibility. With our API-first, event-driven architecture developers can build fully customizable, powerful workflows that address any file-based import use case, combined with a highly intuitive experience designed for end-users. See the magic of Flatfile for yourself and get started today, it’s free!"
              },
              {
                "rank": "4",
                "imageUrl": "https://ph-files.imgix.net/0521c34e-e39b-41b2-a535-42811ae627a5.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "Merge — One API to add hundreds of integrations to your product",
                "description": "Merge is one API to add hundreds of integrations to your product. Merge’s platform makes secure data access easy by offering Unified APIs across key software categories, including HRIS, accounting, CRM, file storage, and more. Merge handles the full integrations lifecycle — from an easy initial build taking weeks, to providing integration observability tools ensuring customer delight, and fully owning the maintenance of integrations. Thousands of companies use Merge to power their integrations."
              },
              {
                "rank": "5",
                "imageUrl": "https://ph-files.imgix.net/863849a4-8f1f-4f7c-a171-2029826e52e6.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=14&h=14&fit=crop",
                "title": "Flowla — Digital sales rooms that WOW buyers.",
                "description": "Auto-personalized deal rooms for revenue teams & clients that unite everything & everyone in the process in a single link. 🪄 Deliver an outstanding buying experience that increases conversion 📈 shortens deal cycles, and eases onboardings and renewals. 🚀"
              },
              {
                "rank": "6",
                "imageUrl": "https://ph-files.imgix.net/f71a3ea7-22a9-4946-bf63-d1aafc26d89d.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "Klever Suite — The smarter way to work",
                "description": "Meet the all-in-one workspace your productive teams deserve to have! Klever Suite brings all your work - projects, tasks, and Wiki docs in one place - so you can focus on being more productive! Here’s what you can do with Klever Suite 👀 🏃‍♂️ Run projects of any size with our flexible Kanban board 📑 Create all kinds of Wiki docs+ diagrams, from product requirement docs to flowcharts 📌 Organize all tasks you’re working on"
              },
              {
                "rank": "7",
                "imageUrl": "https://ph-files.imgix.net/170f96a0-3c47-4052-888a-7abade73aeda.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "IPFS — Powers the distributed web",
                "description": "The InterPlanetary File System is a protocol and peer-to-peer network for storing and sharing data in a distributed file system."
              },
              {
                "rank": "8",
                "imageUrl": "https://ph-files.imgix.net/b4c48188-ee68-410d-96b0-da6db37a0666.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "CompressX — Ultra video compression",
                "description": "Stop uploading your video to online website for compressing. CompressX helps you to compress your video up to 90% file size reduction without significant loss of quality while working totally offline."
              },
              {
                "rank": "9",
                "imageUrl": "https://ph-files.imgix.net/39c5d11b-4033-4ca1-88ef-3aadf4be9ddd.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "Cloudways — Your Managed Cloud Hosting Platform",
                "description": "Managed cloud hosting platform that empowers your business by facilitating choice, simplicity and performance. All this is backed by caring expert support."
              },
              {
                "rank": "10",
                "imageUrl": "https://ph-files.imgix.net/c2f596df-0837-4cb1-88c5-5a2703b2272a.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "Uppy — The next open source file uploader for web browsers",
                "description": "Uppy is a sleek, modular JavaScript file uploader that integrates seamlessly with any application. It’s fast, easy to use and lets you worry about more important problems than building a file uploader. - Fetch files from local disk, urls, Dropbox, Instagram, or snap with a camera - Preview and edit metadata - Upload, optionally process & encode"
              }
            ]
          },
          {
            "sub_cat_name": "Hiring software",
            "sub_cat_heading": "The best Hiring software Tools in 2024",
            "products": [
              {
                "rank": "1",
                "imageUrl": "https://ph-files.imgix.net/90491fc5-dace-4f57-b815-365f3100633a.x-icon?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "LinkedIn — LinkedIn Job Search: Find US Jobs, Internships, Jobs Near Me",
                "description": "64% of job seekers get hired through a referral. Use LinkedIn Jobs to boost your chances of getting hired through people you know."
              },
              {
                "rank": "2",
                "imageUrl": "https://ph-files.imgix.net/690f97bd-5978-4e0f-b804-66d753e0ea0a.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "Remote Rocketship — The remote job board with 18k+ tech jobs",
                "description": "Search 18,000+ open roles at 6,000+ remote companies. Filter by location, tech stack, salary, company size, full-time/part-time and more!"
              },
              {
                "rank": "3",
                "imageUrl": "https://ph-files.imgix.net/8b093985-7aea-4f39-923a-7fec97d3d891.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "Findem — Search for ideal candidates like never before",
                "description": "Findem’s Impossible Search lets you find candidates who have the EXACT attributes you’re looking for in a new hire. We’ve exposed 100+ Impossible Searches for free across different roles, so everyone can experience the magic for themselves!"
              }
            ]
          },
          {
            "sub_cat_name": "Knowledge base software",
            "sub_cat_heading": "The best Knowledge base software in 2024",
            "products": [
              {
                "rank": "1",
                "imageUrl": "https://ph-files.imgix.net/6ca85bd3-ab80-4498-b678-0c9ef5efa73a.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "Intercom — An AI-first customer support platform",
                "description": "A platform to provide a seamless customer experience across AI and human support, delivering increased customer satisfaction while reducing costs."
              },
              {
                "rank": "2",
                "imageUrl": "https://ph-files.imgix.net/7fecfb2e-a14e-41c7-baa8-0be3f468c4e1.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "Perplexity 2.0 — Where Knowledge Begins",
                "description": "Knowledge is power. Experience Perplexity's new brand, designed to unlock our curiosity, one question at a time. Discover knowledge and explore endless possibilities."
              },
              {
                "rank": "3",
                "imageUrl": "https://ph-files.imgix.net/2406be33-399a-4656-9e0b-03eeeba8fa1f.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "Whimsical — Where product teams align on their next build",
                "description": "Whimsical is the iterative product workspace. We help teams build clarity and shared understanding faster with documentation tools for solving any product challenge."
              },
              {
                "rank": "4",
                "imageUrl": "https://ph-files.imgix.net/db193b4c-13cc-4700-8cde-ebac26d3c247.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "Perplexity — Where Knowledge Begins",
                "description": "Your Research Assistant. Available wherever you are: 🤖 http://pplx.ai/android // 📱 http://pplx.ai/iphone"
              },
              {
                "rank": "5",
                "imageUrl": "https://ph-files.imgix.net/99901859-6f81-4d81-b7a0-40dce2644641.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=14&h=14&fit=crop",
                "title": "Fibery — Product discovery & development platform",
                "description": "Fibery is a product discovery and development platform. Analyze user feedback, identify top insights, track development, and close the feedback loop."
              },
              {
                "rank": "6",
                "imageUrl": "https://ph-files.imgix.net/f71a3ea7-22a9-4946-bf63-d1aafc26d89d.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "Klever Suite — The smarter way to work",
                "description": "Meet the all-in-one workspace your productive teams deserve to have! Klever Suite brings all your work - projects, tasks, and Wiki docs in one place - so you can focus on being more productive! Here’s what you can do with Klever Suite 👀 🏃‍♂️ Run projects of any size with our flexible Kanban board 📑 Create all kinds of Wiki docs+ diagrams, from product requirement docs to flowcharts 📌 Organize all tasks you’re working on"
              },
              {
                "rank": "7",
                "imageUrl": "https://ph-files.imgix.net/a70282fd-1cf2-42e3-b712-d1d39e7c7d1c.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "Features.Vote — Listen to your users. Know what to build next.",
                "description": "Let your users post and vote on features they want, driving your product's growth with precision and clarity. 🚀"
              },
              
              {
                "rank": "8",
                "imageUrl": "https://ph-files.imgix.net/32efc42b-f2e6-449e-a674-0308fa73cae8.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "Chatwith — Instantly answer questions with a custom AI chatbot",
                "description": "Create a support agent trained on your content and back-end data. Let it handle all customer questions, from realtime inventory information to document generation. Boost your customer service and cut your support workload."
              },
              {
                "rank": "9",
                "imageUrl": "https://ph-files.imgix.net/abff8d50-5720-4088-b7f2-5c68dc03de10.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "Realm App — Converts idle browser homepage into quick-access dashboard.",
                "description": "Realm App is a literacy and productivity tool as a browser extension. Users can customize their workspaces using a range of widgets such as bookmarks and curated reading lists, to suit their role and usage."
              }
            ]
          },
          {
            "sub_cat_name": "Legal services",
            "sub_cat_heading": "The best Legal services in 2024",
            "products": [
              {
                "rank": "1",
                "imageUrl": "https://ph-files.imgix.net/b1eb0c3f-4515-4fb9-bbbc-3faeaba633bb.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "Clerky — How the best startups get legal paperwork done",
                "description": "Clerky is the only online legal service obsessed with helping startup founders get legal paperwork done safely. Get your legal paperwork done with confidence, so you can get back to building your startup."
              },
              {
                "rank": "2",
                "imageUrl": "https://ph-files.imgix.net/dbaa002b-89da-43b9-a0b4-51c2551094df.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "Termly — All the Legal Policies You Need in One Place.",
                "description": ""
              }
            ]
          },
          {
            "sub_cat_name": "Meeting software",
            "sub_cat_heading": "The best Meeting software in 2024",
            "products": [
              {
                "rank": "1",
                "imageUrl": "https://ph-files.imgix.net/841b3aef-e135-4ef9-a5c8-48cc4d35a774.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=14&h=14&fit=crop",
                "title": "tl;dv — Catch up on meetings in minutes",
                "description": "Have fewer, more focused live meetings. Highlight and share relevant meeting moments on the fly. Keep your team always in the loop."
              },
              {
                "rank": "2",
                "imageUrl": "https://ph-files.imgix.net/2584f116-12d2-4fc5-bae0-092a5a0b44d5.svg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "Recall.ai — The universal API for meeting bots",
                "description": "The universal API for meeting bots. Recall.ai provides a single API for meeting bots on every platform like Zoom, Google Meet, Microsoft Teams and more."
              },
              {
                "rank": "3",
                "imageUrl": "https://ph-files.imgix.net/e4755d37-e4f4-40df-a803-4d125d4cc328.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "Google Meet — Premium video meetings. Now free for everyone.",
                "description": "Google Meet is a video conferencing app. Google Meet integrates with G Suite versions of Google Calendar and Gmail and shows the complete list of participants and scheduled meetings."
              },
              
              {
                "rank": "4",
                "imageUrl": "https://ph-files.imgix.net/f6c73f54-aad8-47c3-ae8f-9330f4efedb7.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "Calendly — Easy scheduling ahead",
                "description": "Calendly is your hub for scheduling meetings professionally and efficiently, eliminating the hassle of back-and-forth emails so you can get back to work."
              },
              {
                "rank": "5",
                "imageUrl": "https://ph-files.imgix.net/ccbaf14b-200f-4921-ae4c-8b7b873750be.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=14&h=14&fit=crop",
                "title": "Callbird — Instant meetings mean no more missed opportunities",
                "description": "We’re around all day to answer questions and collect your feedback! If you want to experience Callbird in action, just Callbird us! callbird.com/brad or callbird.com/jack"
              },
              {
                "rank": "6",
                "imageUrl": "https://ph-files.imgix.net/a8ec66e7-162f-4167-905a-ef88a134284a.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "Productlane — The new standard for product discovery",
                "description": "A feedback portal, research repository, and meeting recorder that's built around Linear to help you prioritize better."
              },
              {
                "rank": "7",
                "imageUrl": "https://ph-files.imgix.net/cf7da405-d28d-4625-982e-1573c9bdf930.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=14&h=14&fit=crop",
                "title": "Gamma — A new medium for presenting ideas. Powered by AI.",
                "description": "Gamma is an alternative to slide decks - a fast, simple way to share and present your work. Create engaging presentations, memos, briefs, and docs that are easy to discuss live or share async. All in your browser, nothing to download or install."
              }            ]
          },
          {
            "sub_cat_name": "Note and writing apps",
            "sub_cat_heading": "The best Note and writing apps in 2024",
            "products": [
              {
                "rank": "1",
                "imageUrl": "https://ph-files.imgix.net/ff3e2acf-884a-4f4c-a383-6edfe3de0d88.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "Notion — The all-in-one workspace",
                "description": "Notion is an all-in-one workspace that combines note-taking, project management, and task organization. It allows users to create customized databases, documents, and calendars to streamline their personal and professional workflows."
              },
              {
                "rank": "2",
                "imageUrl": "https://ph-files.imgix.net/6a207629-0ead-4a58-a19f-08202364b249.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "Tiptap — Developer toolkit for building collaborative apps",
                "description": "A suite of open source content editing and real-time collaboration tools for developers building apps like Notion or Google Docs."
              },
              {
                "rank": "3",
                "imageUrl": "https://ph-files.imgix.net/2406be33-399a-4656-9e0b-03eeeba8fa1f.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "Whimsical — Where product teams align on their next build",
                "description": "Whimsical is the iterative product workspace. We help teams build clarity and shared understanding faster with documentation tools for solving any product challenge."
              },
              {
                "rank": "4",
                "imageUrl": "https://ph-files.imgix.net/c4872c4d-5df6-456a-baa8-e1d3435f0dae.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "Google Docs — Create and share your work online",
                "description": ""
              },
              {
                "rank": "5",
                "imageUrl": "https://ph-files.imgix.net/211cc6af-7953-44b8-8831-706b156235cf.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "Focused Task — Open source mac menubar app that helps you do deep work",
                "description": "Features: * Focus on a single task * Shortcut for everything * Menu-bar app * Organize your tasks with todos, bookmarks and notes * Drag & Drop file as bookmarks * Open-sourced written with Electron, React, Redux"
              },
              {
                "rank": "6",
                "imageUrl": "https://ph-files.imgix.net/1297c152-6df5-4d72-9023-a9d53cdc6dbe.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "Atlassian — Maker of team collaboration tools",
                "description": "Atlassian develops products for software development, project management, and content management."
              },
              {
                "rank": "7",
                "imageUrl": "https://ph-files.imgix.net/90d3d238-4609-45ee-b250-b0d306ceaded.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "Obsidian — A versatile writing app tailored to your thinking",
                "description": "Store notes on your device, so you can access them quickly, even offline. Use hundreds of plugins and themes, to fit your way of thinking."
              },
              {
                "rank": "8",
                "imageUrl": "https://ph-files.imgix.net/1c4f244f-4f37-479e-a44d-6e3fac82436e.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "Simplenote — The simplest way to keep notes.",
                "description": "Simplenote is an easy way to take notes, create to-do lists, capture ideas, and more. Open it, jot down some thoughts, and you're done. As your collection grows, stay organized with tags and pins, and find what you need with instant search. Since Simplenote will sync across your devices for free, your notes are with you at all times."
              },
              {
                "rank": "9",
                "imageUrl": "https://ph-files.imgix.net/f71a3ea7-22a9-4946-bf63-d1aafc26d89d.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "Klever Suite — The smarter way to work",
                "description": "Meet the all-in-one workspace your productive teams deserve to have! Klever Suite brings all your work - projects, tasks, and Wiki docs in one place - so you can focus on being more productive! Here’s what you can do with Klever Suite 👀 🏃‍♂️ Run projects of any size with our flexible Kanban board 📑 Create all kinds of Wiki docs+ diagrams, from product requirement docs to flowcharts 📌 Organize all tasks you’re working on"
              }
            ]
          },
          {
            "sub_cat_name": "Password managers",
            "sub_cat_heading": "The best Password managers in 2024",
            "products": [
              {
                "rank": "1",
                "imageUrl": "https://ph-files.imgix.net/817b39a7-1e9d-4994-9351-15d9d8ceb9df.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "1Password — The world’s most-loved password manager",
                "description": "1Password is a password manager, digital vault, form filler and secure digital wallet. Easily store and use strong passwords. Log in to sites and fill forms securely with a single click."
              },
              {
                "rank": "2",
                "imageUrl": "https://ph-files.imgix.net/9bfc3f9b-3be8-43fb-8575-a4f437ef59ee.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "Cloaked — Virtual identities to protect your privacy",
                "description": "Cloaked is a people-first privacy app that generates virtual identities to protect your personal data. No one should have to choose between staying connected and personal privacy — with Cloaked, you can try new products, travel, shop, and even meet new people while staying in control of your data. Unique and unlimited phone numbers, passwords, and payments set us apart from other privacy tools and password managers. Go ahead and give them your (Cloaked) info — and say goodbye to spam forever."
              }
            ]
          },
          {
            "sub_cat_name": "Pdf editor",
            "sub_cat_heading": "The best Pdf editor in 2024",
            "products": [
              {
                "rank": "1",
                "imageUrl": "https://ph-files.imgix.net/cf08a44f-5fcc-42f2-b1c9-625a8ce65451.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "Web Highlights - PDF & Web Highlighter — Highlight text on any web page or PDF and take notes.",
                "description": "Tired of browsing your history to find the information you saw yesterday? Don't worry. Web Highlights got you covered. Organize your research by highlighting on any web page or PDF. Your highlights are directly synced to the web app."
              },
              {
                "rank": "2",
                "imageUrl": "https://ph-files.imgix.net/09e133eb-7f0f-4175-a272-d5d5c7a0a99b.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "Instafill — Fill PDF forms with AI",
                "description": "Facing challenges with filling out PDF forms? InstaFill uses Al to understand and complete fields for you, especially when you're unsure about how to fill them. Let us handle the paperwork while you focus on what matters."
              },
              {
                "rank": "3",
                "imageUrl": "https://ph-files.imgix.net/ca00908a-9631-477e-be3b-a5cf9f4afdbc.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "Robolly — Dynamic images, videos & PDFs via Google Sheets or API",
                "description": "Robolly is an all-in-one service for automated image, video & PDF generation. The potential is limitless; you can use it to generate branded social media content, open graph images, PDF certificates, personalized videos, slideshows, and so much more."
              }
            ]
          },
          {
            "sub_cat_name": "Presentation software",
            "sub_cat_heading": "The best Presentation software in 2024",
            "products": [
              {
                "rank": "1",
                "imageUrl": "https://ph-files.imgix.net/f95e7717-d2d5-49e7-a154-dbbe68522ab5.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "Pitch — Don’t just present. Pitch.",
                "description": "Create, collaborate on, and share impressive presentations faster than ever. Pitch has built the complete platform for presentations, so your team can bring your best ideas to life."
              },
              {
                "rank": "2",
                "imageUrl": "https://ph-files.imgix.net/acd19cd8-8d47-4c7f-b126-a2628553c882.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "Decktopus AI — No more wasting hours for bad slides 🙌",
                "description": "Decktopus, the new generation online presentation tool, lets you create the perfect presentation in the shortest time without any design skills."
              },
              {
                "rank": "3",
                "imageUrl": "https://ph-files.imgix.net/a8c42e42-6c5c-4c58-a71f-466149c947be.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "Xmind AI — Collaborative mind mapping tool enhanced with AI",
                "description": "Your all-in-one mind mapping toolkit powered by AI. Generate and expand ideas instantly, collaborate in real-time, and effortlessly transform your mind maps into stunning presentations. Experience a smarter way to organize and present your ideas with AI."
              },
              {
                "rank": "4",
                "imageUrl": "https://ph-files.imgix.net/faf939d8-548f-46e5-8822-636c79068264.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "PowerPoint — Microsoft PowerPoint Slide Presentation Software",
                "description": "Microsoft PowerPoint empowers you to create clean slideshow presentations and intricate pitch decks and gives you a powerful presentation maker to tell your story."
              },
              {
                "rank": "5",
                "imageUrl": "https://ph-files.imgix.net/a7227897-0c8a-44ea-b2f1-0e9c69155923.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "Tella — Screen recording for entrepreneurs",
                "description": "The screen recorder that edits videos for you."
              },
              {
                "rank": "6",
                "imageUrl": "https://ph-files.imgix.net/f81fb88e-13cc-4863-8b1f-4a51fa2b3c8b.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "Synthesia — Create AI videos from text in minutes!",
                "description": "Create AI videos with AI avatars and natural AI voices. Generate engaging videos for e-learning, customer onboarding, etc. No need for actors, cameras or audio equipment."
              },
              {
                "rank": "7",
                "imageUrl": "https://ph-files.imgix.net/e5cfdf2d-374a-4406-803f-890d7e80ddf4.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "Easy Charts — Refreshingly simple charts. No code shadcn/charts",
                "description": "Super simple charts, without a subscription. If you've used Excel or Sheets, you will feel right at home... If you know how to press a button, you already know how to use Easy Charts. If you have marveled at shadcn/charts, this is no-code shadcn/charts"
              },
              {
                "rank": "8",
                "imageUrl": "https://ph-files.imgix.net/c6cc51ef-6ceb-4f22-8b3e-eaaf022d2120.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "AI Perfect Assistant - GPT for Office365 — ChatGPT for Word/PowerPoint/Teams & Outlook",
                "description": "Let AI do the work for you! AI Perfect Assistant seamlessly integrates into Microsoft business suite and helps you and your team to be more productive. Generate PowerPoint slides, reply to mailings in Outlook & Teams, write elegant documents in Microsoft Word."
              },
              {
                "rank": "9",
                "imageUrl": "https://ph-files.imgix.net/cf7da405-d28d-4625-982e-1573c9bdf930.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=14&h=14&fit=crop",
                "title": "Gamma — A new medium for presenting ideas. Powered by AI.",
                "description": "Gamma is an alternative to slide decks - a fast, simple way to share and present your work. Create engaging presentations, memos, briefs, and docs that are easy to discuss live or share async. All in your browser, nothing to download or install."
              }
            ]
          },
          {
            "sub_cat_name": "Project management software",
            "sub_cat_heading": "The best Project management software in 2024",
            "products": [
              {
                "rank": "1",
                "imageUrl": "https://ph-files.imgix.net/ff3e2acf-884a-4f4c-a383-6edfe3de0d88.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "Notion — The all-in-one workspace",
                "description": "Notion is an all-in-one workspace that combines note-taking, project management, and task organization. It allows users to create customized databases, documents, and calendars to streamline their personal and professional workflows."
              },
              {
                "rank": "2",
                "imageUrl": "https://ph-files.imgix.net/e2a98636-71d2-4989-abf6-acefe8584e17.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "Linear — Manage software development and track bugs",
                "description": "Manage software development and track bugs. Linear's streamlined design is built for speed and efficiency to help high performing teams accomplish great things."
              },
              {
                "rank": "3",
                "imageUrl": "https://ph-files.imgix.net/6a207629-0ead-4a58-a19f-08202364b249.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "Tiptap — Developer toolkit for building collaborative apps",
                "description": "A suite of open source content editing and real-time collaboration tools for developers building apps like Notion or Google Docs."
              },
              {
                "rank": "4",
                "imageUrl": "https://ph-files.imgix.net/294de8fd-676b-423a-b8d3-b957fd521e68.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "JIRA — How teams do great",
                "description": "Create and track feedback for Atlassian products."
              },
              {
                "rank": "5",
                "imageUrl": "https://ph-files.imgix.net/c25d0c57-222f-489e-81bd-9d2439f189c1.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "ClickUp — An all-in-one productivity platform",
                "description": "Tasks, docs, goals, chat, and everything imaginable to make you more productive."
              },
              {
                "rank": "6",
                "imageUrl": "https://ph-files.imgix.net/01cca4e0-cc5d-4b42-931e-c76756e76f07.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "Miro — The visual collaboration platform for every team",
                "description": "The online collaborative whiteboard platform that enables distributed teams to work effectively together, from brainstorming with digital sticky notes to planning and managing agile workflows."
              },
              {
                "rank": "7",
                "imageUrl": "https://ph-files.imgix.net/e58c5131-a65f-4287-aa49-b2fb3d105870.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "Cycle — Your feedback hub, on autopilot",
                "description": "Cycle is the fastest way for your team to capture product feedback and share customer insights - without the busywork 👉 https://www.cycle.app"
              },
              {
                "rank": "8",
                "imageUrl": "https://ph-files.imgix.net/84609ac8-ee09-40f9-8be3-d7e90145081a.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "Trello — Visual collaboration with a shared perspective on projects",
                "description": "Trello is a web-based Kanban-style list-making application. Originally made by Fog Creek Software in 2011, it was spun out to form the basis of a separate company in 2014 and later sold to Atlassian in January 2017."
              },
              {
                "rank": "9",
                "imageUrl": "https://ph-files.imgix.net/f0202705-b7c6-4164-9027-bf12f424e441.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "Liveblocks — Complete toolkit to embed collaboration features fast",
                "description": "A real-time collaboration infrastructure for developers. A fully hosted solution and complete toolkit to modularly embed collaborative experiences into your product in just days, not months."
              },
              {
                "rank": "10",
                "imageUrl": "https://ph-files.imgix.net/2406be33-399a-4656-9e0b-03eeeba8fa1f.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "Whimsical — Where product teams align on their next build",
                "description": "Whimsical is the iterative product workspace. We help teams build clarity and shared understanding faster with documentation tools for solving any product challenge."
              }
            ]
          },
          {
            "sub_cat_name": "Resume tools",
            "sub_cat_heading": "The best Resume tools in 2024",
            "products": [
              {
                "rank": "1",
                "imageUrl": "https://ph-files.imgix.net/96d6beef-7855-4cae-8dec-cecff48229d5.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "LinkedIn — Connect, apply, and find jobs",
                "description": "Manage your professional identity. Build and engage with your professional network. Access knowledge, insights and opportunities. LinkedIn is an American business and employment-oriented service that operates via websites and mobile apps. Founded on December 28, 2002, and launched on May 5, 2003, it is mainly used for professional networking, including employers posting jobs and job seekers posting their CVs."
              },
              {
                "rank": "2",
                "imageUrl": "https://ph-files.imgix.net/366f94d3-2548-4d0f-a1c7-fcce5326a8b4.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=14&h=14&fit=crop",
                "title": "Resoume — A beautiful resume and website builder",
                "description": "An AI-powered resume builder to help you get hired."
              }
            ]
          },
          {
            "sub_cat_name": "Scheduling software",
            "sub_cat_heading": "The best Scheduling software in 2024",
            "products": [
              {
                "rank": "1",
                "imageUrl": "https://ph-files.imgix.net/39eadfe0-8f39-40f8-8213-ee9e516df919.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "Cal.com — Scheduling infrastructure for absolutely everyone",
                "description": "The open source Calendly alternative. Self host it, or have it hosted. Integrate it seamlessly into your business with advanced customization and an open API."
              },
              {
                "rank": "2",
                "imageUrl": "https://ph-files.imgix.net/863849a4-8f1f-4f7c-a171-2029826e52e6.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=14&h=14&fit=crop",
                "title": "BeforeSunset AI — Turns your to-dos into the perfect schedule",
                "description": "BeforeSunset is an AI daily planner tool for busy professionals that plans your day based on your schedule and to-do list. Or, you can create a plan yourself by syncing your calendar. It provides analytics to get insights for sunsetting the day stress-free."
              },
              {
                "rank": "3",
                "imageUrl": "https://ph-files.imgix.net/f2fe3365-9ba8-498a-b1fe-e74bbd5b425e.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "Trigger.dev — The open source background jobs framework",
                "description": "Create long-running jobs directly in your codebase with features like API integrations, webhooks, scheduling and delays."
              },
              {
                "rank": "4",
                "imageUrl": "https://ph-files.imgix.net/6c17a03d-52c6-4c6a-b521-bf84de68591b.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "Convex — A better type of backend",
                "description": "Convex is a full-stack TypeScript development platform that keeps you focused on your product. Use our realtime database to build apps that are reactive by default. Integrate OpenAI into your workflows with builtin functions, scheduling, and vector search."
              },
              {
                "rank": "5",
                "imageUrl": "https://ph-files.imgix.net/c5012277-16c1-4bde-83fd-07c4b99c2c49.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "Amie — The joyful productivity app",
                "description": "The joyful productivity app. Schedule time for todos, events, and contacts."
              },
              {
                "rank": "6",
                "imageUrl": "https://ph-files.imgix.net/a5f879de-2dab-44aa-a713-454559fedd35.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "Google Calendar — The shareable online calendar by Google",
                "description": "Spend less time planning and more time doing with a shareable calendar that works across Google Workspace."
              },
              {
                "rank": "7",
                "imageUrl": "https://ph-files.imgix.net/1c4f244f-4f37-479e-a44d-6e3fac82436e.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "Simplenote — The simplest way to keep notes.",
                "description": "Simplenote is an easy way to take notes, create to-do lists, capture ideas, and more. Open it, jot down some thoughts, and you're done. As your collection grows, stay organized with tags and pins, and find what you need with instant search. Since Simplenote will sync across your devices for free, your notes are with you at all times."
              },
              {
                "rank": "8",
                "imageUrl": "https://ph-files.imgix.net/5b05dea5-50a7-49f1-ae6d-80c3970f8ab5.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "Re:catch — Automate your inbound pipeline, and close a deal by tomorrow",
                "description": "Re:catch is a cloud-based sales funnel automation software that empowers revenue teams to achieve revenue acceleration by optimizing Speed-to-Lead and Time-to-Revenue."
              },
              {
                "rank": "9",
                "imageUrl": "https://ph-files.imgix.net/f6c73f54-aad8-47c3-ae8f-9330f4efedb7.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "Calendly — Easy scheduling ahead",
                "description": "Calendly is your hub for scheduling meetings professionally and efficiently, eliminating the hassle of back-and-forth emails so you can get back to work."
              },
              {
                "rank": "10",
                "imageUrl": "https://ph-files.imgix.net/eab8aa48-ce0d-477a-9618-fcf3110369a8.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=14&h=14&fit=crop",
                "title": "Cron — Next-generation calendar for professionals and teams",
                "description": "Cron Calendar. Schedule meetings and control your time like never before. Time zone conversions. Multiple accounts. A cleaner, faster interface, and — did we mention it comes with dark mode? Get early access at cron.com"
              }
            ]
          },
          {
            "sub_cat_name": "Screenshots and screen recording apps",
            "sub_cat_heading": "The best Screenshots and screen recording apps in 2024",
            "products": [
              {
                "rank": "1",
                "imageUrl": "https://ph-files.imgix.net/8022c507-8920-423f-9330-63a14764535d.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "Loom — Easily record and share videos",
                "description": "Record on your camera and screen on any device using the Chrome extension, desktop app, or mobile app. Share your video link in a few clicks."
              },
              {
                "rank": "2",
                "imageUrl": "https://ph-files.imgix.net/afa0f22b-c19b-4e7e-822f-3b82c9032f69.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "Screen Studio — Beautiful screen recordings in minutes",
                "description": "Screen Studio makes your mouse movement smooth, automatically zooms in on clicks, applies cinematic motion blur to all the animations, and adds beautiful background around your recording. In a minute your recording becomes a high-quality promotional video."
              },
              {
                "rank": "3",
                "imageUrl": "https://ph-files.imgix.net/fec09a7a-4702-4d56-b0e4-1a5d91ad1327.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "CleanShot — A superior way to capture your Mac's screen",
                "description": "Discover a superior way to capture your Mac's screen with built-in annotation and amazing Quick Access Overlay."
              },
              {
                "rank": "4",
                "imageUrl": "https://ph-files.imgix.net/a7227897-0c8a-44ea-b2f1-0e9c69155923.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "Tella — Screen recording for entrepreneurs",
                "description": "The screen recorder that edits videos for you."
              },
              {
                "rank": "5",
                "imageUrl": "https://ph-files.imgix.net/0dab3962-12e9-4e13-9031-618bf847952a.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "VEED — Anyone can make great video in just a few clicks.",
                "description": "Video editing made simple. Create great videos with a single click. Add subtitles, transcribe audio, browse AI tools, use templates, and much, much more. Try it now!"
              },
              {
                "rank": "6",
                "imageUrl": "https://ph-files.imgix.net/320b5132-502b-422b-bd75-accf0805a20c.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=14&h=14&fit=crop",
                "title": "ScreenSpace — Be The Hero 💜 Help Customers Fall In Love With Your Product",
                "description": "In a world of distractions, oversaturated markets, & millennials… Marketing & sales teams rely on ScreenSpace to break through the noise → emotionally engage high-quality buyers → and guide them on an irresistible journey to YES!"
              },
              {
                "rank": "7",
                "imageUrl": "https://ph-files.imgix.net/ed0e2783-29ad-40d6-aa90-8599937d8a53.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "RocketSim for Xcode — Record the iOS Simulator into MP4 or GIF",
                "description": "Record the iOS Simulator into GIF or MP4 Create a recording from the iOS simulator and export it as GIF or MP4. Directly drag it into Slack, GitHub, Twitter, or any other app. Recording is not all. Organise and launch Universal Links (deeplinks) with ease."
              },
              {
                "rank": "8",
                "imageUrl": "https://ph-files.imgix.net/59545654-d1a2-402f-81a7-d8da1e568a59.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "Screenflow 8 — Easily create stunning videos for Mac 🎬",
                "description": "Telestream ScreenFlow® offers high-quality screen, video, audio, and iOS capture, exceptionally powerful editing features as well as a new Stock Media Library option, ScreenFlow helps you create incredible looking videos, animated GIFs, and APNGs with unprecedented ease. You won’t find an easier to use or more intuitive interface for editing video."
              },
              {
                "rank": "9",
                "imageUrl": "https://ph-files.imgix.net/ecca7485-4473-4479-84ea-1702b0fe04e5?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "shots.so —",
                "description": ""
              },
              {
                "rank": "10",
                "imageUrl": "https://ph-files.imgix.net/3c59e7f6-aa4e-498b-b702-c11053826f89.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "FocuSee — Auto Turn Screen Recordings into Stunning Product Videos.",
                "description": "A screen recorder comes with automated editing - Automatically track cursor movement, apply dynamic zoom and click effects, add a pleasant background, and generate a professional-looking video/gif that is ready to use."
              }
            ]
          },
          {
            "sub_cat_name": "Search",
            "sub_cat_heading": "The best Search in 2024",
            "products": [
              {
                "rank": "1",
                "imageUrl": "https://ph-files.imgix.net/7fecfb2e-a14e-41c7-baa8-0be3f468c4e1.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "Perplexity 2.0 — Where Knowledge Begins",
                "description": "Knowledge is power. Experience Perplexity's new brand, designed to unlock our curiosity, one question at a time. Discover knowledge and explore endless possibilities."
              },
              {
                "rank": "2",
                "imageUrl": "https://ph-files.imgix.net/e7c84912-d91c-475a-91dc-d566f2908a82.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "Typesense — Fast, typo-tolerant open source search engine",
                "description": "Open source search engine that delivers instant relevant results out-of-the-box. OSS alternative to Algolia & an easier-to-use alternative to ElasticSearch."
              },
              {
                "rank": "3",
                "imageUrl": "https://ph-files.imgix.net/8faec3d0-ac24-49d7-8d6a-b2e3f66c3712.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "Algolia — Open source platform for building search",
                "description": "An AI powered, search API combining semantic and keyword search."
              },
              {
                "rank": "4",
                "imageUrl": "https://ph-files.imgix.net/f27f20c5-816f-4210-bbfa-8bdf797ffa3b.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "Google — Organizing the world's information",
                "description": "Search the world's information, including webpages, images, videos and more. Google has many special features to help you find exactly what you're looking for."
              },
              {
                "rank": "5",
                "imageUrl": "https://ph-files.imgix.net/18f91095-8433-4232-b9cc-ec4a474d43c4.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "OSO AI — AI Without Limits",
                "description": "An unbiased, censorship-free AI Search Engine and Chat platform. Do an hour of research in minutes. Chat about any topic without restriction."
              },
              {
                "rank": "6",
                "imageUrl": "https://ph-files.imgix.net/7f4cf8c2-9440-472a-829b-ac29790e6a5f.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "ElasticSearch — Lucene based search server.",
                "description": ""
              },
              {
                "rank": "7",
                "imageUrl": "https://ph-files.imgix.net/9e70fd6d-f9d2-43d3-84d7-65e93b89bb50.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "Google Lens — Search what you see",
                "description": "Explore what's around you in an entirely new way."
              },
              {
                "rank": "8",
                "imageUrl": "https://ph-files.imgix.net/aa769f35-40fa-4c8f-bbd9-7e18a15c3b3c.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "City Roads — Open source, visualization of all roads within any city.",
                "description": "Search for your city. The data is fetched from OpenStreetMap using overpass API."
              },
              {
                "rank": "9",
                "imageUrl": "https://ph-files.imgix.net/849c24c8-d3ac-4ce7-b42f-cfdd497c89b9.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "Meilisearch — Improve your search experience in a snap",
                "description": "Meilisearch makes it easy to build a fast and custom search experience. ⏱️Lightning fast: Response at each keystroke. 🧩 Plug ‘n play: No config required. 🎯Ultra relevant: The most advanced full-text search."
              },
              {
                "rank": "10",
                "imageUrl": "https://ph-files.imgix.net/6905d5a1-938b-4ef8-ad95-dbb7a097c58d.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "Google Maps Search API — Real-time Google Maps Searches - Places, Reviews and Photos",
                "description": "Super fast and robust Google Maps Search API - search for Places/Businesses, Reviews and Photos on Google Maps. Results include information such as Name, Phone, Address, Website, Reviews and Rating details, Opening hours and 20+ other fields."
              }
            ]
          },
          {
            "sub_cat_name": "Spreadsheets",
            "sub_cat_heading": "The best Spreadsheets in 2024",
            "products": [
              {
                "rank": "1",
                "imageUrl": "https://ph-files.imgix.net/725ed71c-b517-4cf1-89c5-92ff785a326b.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=14&h=14&fit=crop",
                "title": "Google Sheets — Free Online Spreadsheets for Personal Use",
                "description": "Google Sheets is a spreadsheet program included as part of a free, web-based software office suite offered by Google within its Google Drive service. The service also includes Google Docs and Google Slides, a word processor and presentation program respectively."
              },
              {
                "rank": "2",
                "imageUrl": "https://ph-files.imgix.net/ec714738-1a69-4821-ac8d-af4eff63d4d4.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "Airtable — The perfect tool to stay organized",
                "description": "Airtable is a platform that makes it easy to build powerful, custom applications. These tools can streamline just about any process, workflow, or project—and best of all, you can build them without ever learning to write a single line of code."
              },
              {
                "rank": "3",
                "imageUrl": "https://ph-files.imgix.net/deecbb94-38a6-43da-8dd8-305ea9e54974.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=14&h=14&fit=crop",
                "title": "Softr — Build custom apps powered by your data, no code required.",
                "description": "Softr turns your spreadsheets (Airtable, Google Sheets) and databases into customer portals, internal tools, and any other custom app. Pick a template or start from scratch."
              },
              {
                "rank": "4",
                "imageUrl": "https://ph-files.imgix.net/7ce855ec-7452-4439-952a-8d3288b57ed4.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "Equals — Next-generation analysis and reporting",
                "description": "Equals fills the void between one-size-fits-all and complex data platforms. It's as if your favorite spreadsheet and BI tool had a baby – a legit prodigy."
              },
              {
                "rank": "5",
                "imageUrl": "https://ph-files.imgix.net/71409bbb-a3d4-4e09-81d1-f20b328a7385.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=14&h=14&fit=crop",
                "title": "Glide — Create an app from a Google Sheet in five minutes",
                "description": "Glide turns spreadsheets into beautiful, easy-to-use apps, without code. Pick a spreadsheet or start with a template, customize your app, then share it instantly with anyone. Start today for free!"
              },
              {
                "rank": "6",
                "imageUrl": "https://ph-files.imgix.net/7c58d0cc-6624-4ad0-a385-0dbcd61df1d8.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "Lychee — AI-Powered Data Visualization in 0.32 seconds.",
                "description": "Tired of all these complex tools in the market when you’re just looking to turn your spreadsheets into graphs? We got you. No complex BS features you have to pay for, no coding skills, no high-tech language."
              },
              {
                "rank": "7",
                "imageUrl": "https://ph-files.imgix.net/e5cfdf2d-374a-4406-803f-890d7e80ddf4.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "Easy Charts — Refreshingly simple charts. No code shadcn/charts",
                "description": "Super simple charts, without a subscription. If you've used Excel or Sheets, you will feel right at home... If you know how to press a button, you already know how to use Easy Charts. If you have marveled at shadcn/charts, this is no-code shadcn/charts"
              }
            ]
          },
          {
            "sub_cat_name": "Team collaboration software",
            "sub_cat_heading": "The best Team collaboration software in 2024",
            "products": [
              {
                "rank": "1",
                "imageUrl": "https://ph-files.imgix.net/2f06cf02-5fa1-4b17-8246-8b4499d50e33.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "Slack — Team communication and collaboration platform",
                "description": "Slack is an application that helps teams communicate and work together by combining messaging, file sharing, and app integrations in one place. It makes it easy for teams to stay connected and work efficiently, whether they are in the office or working remotely."
              },
              {
                "rank": "2",
                "imageUrl": "https://ph-files.imgix.net/e2a98636-71d2-4989-abf6-acefe8584e17.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "Linear — Manage software development and track bugs",
                "description": "Manage software development and track bugs. Linear's streamlined design is built for speed and efficiency to help high performing teams accomplish great things."
              },
              {
                "rank": "3",
                "imageUrl": "https://ph-files.imgix.net/6ca85bd3-ab80-4498-b678-0c9ef5efa73a.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "Intercom — An AI-first customer support platform",
                "description": "A platform to provide a seamless customer experience across AI and human support, delivering increased customer satisfaction while reducing costs."
              },
              {
                "rank": "4",
                "imageUrl": "https://ph-files.imgix.net/6a207629-0ead-4a58-a19f-08202364b249.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "Tiptap — Developer toolkit for building collaborative apps",
                "description": "A suite of open source content editing and real-time collaboration tools for developers building apps like Notion or Google Docs."
              },
              {
                "rank": "5",
                "imageUrl": "https://ph-files.imgix.net/294de8fd-676b-423a-b8d3-b957fd521e68.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "JIRA — How teams do great",
                "description": "Create and track feedback for Atlassian products."
              },
              {
                "rank": "6",
                "imageUrl": "https://ph-files.imgix.net/c25d0c57-222f-489e-81bd-9d2439f189c1.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "ClickUp — An all-in-one productivity platform",
                "description": "Tasks, docs, goals, chat, and everything imaginable to make you more productive."
              },
              {
                "rank": "7",
                "imageUrl": "https://ph-files.imgix.net/841b3aef-e135-4ef9-a5c8-48cc4d35a774.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=14&h=14&fit=crop",
                "title": "tl;dv — Catch up on meetings in minutes",
                "description": "Have fewer, more focused live meetings. Highlight and share relevant meeting moments on the fly. Keep your team always in the loop."
              },
              {
                "rank": "8",
                "imageUrl": "https://ph-files.imgix.net/01cca4e0-cc5d-4b42-931e-c76756e76f07.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "Miro — The visual collaboration platform for every team",
                "description": "The online collaborative whiteboard platform that enables distributed teams to work effectively together, from brainstorming with digital sticky notes to planning and managing agile workflows."
              },
              {
                "rank": "9",
                "imageUrl": "https://ph-files.imgix.net/a91a21ee-1d99-4713-87a9-7466c778feb9.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "JetBrains — A suite of intelligent development tools",
                "description": "Powerful IDEs for most programming languages and technologies along with products for team collaboration."
              },
              {
                "rank": "10",
                "imageUrl": "https://ph-files.imgix.net/f95e7717-d2d5-49e7-a154-dbbe68522ab5.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "Pitch — Don’t just present. Pitch.",
                "description": "Create, collaborate on, and share impressive presentations faster than ever. Pitch has built the complete platform for presentations, so your team can bring your best ideas to life."
              }
            ]
          },
          {
            "sub_cat_name": "Time tracking apps",
            "sub_cat_heading": "The best Time tracking apps in 2024",
            "products": [
              {
                "rank": "1",
                "imageUrl": "https://ph-files.imgix.net/385e1f9a-53fa-41d8-8e0e-65e9118752fe.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=14&h=14&fit=crop",
                "title": "Focused Work - Focus Timer — Flexible focus sessions to stay productive & avoid burnout.",
                "description": "Focused Work is a flexible Focus Timer that helps you stay productive and avoid burnout. It’s purpose-built for people who struggle with focusing and structuring their time effectively."
              },
              {
                "rank": "2",
                "imageUrl": "https://ph-files.imgix.net/cc11264b-69f6-4f8d-95bc-319a606461e1.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "Jibble — TRACK TIME & ATTENDANCE FOR YOUR SLACK TEAM",
                "description": "jibble.io was first indexed by Google in September 2016"
              },
              {
                "rank": "3",
                "imageUrl": "https://ph-files.imgix.net/1a430d62-9b02-44b7-b979-c635b12905a2.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "Clocking - Work Tracker — Protect your free time from over hours!",
                "description": "Clocking protects your spare time. Receive notifications when it is time to stop working, automatically clock in and out by location, and keep track of your over hours at ease."
              },
              {
                "rank": "4",
                "imageUrl": "https://ph-files.imgix.net/235bce6b-8ba4-4f8a-9a35-96866d2b6c50.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "Focus Bear — Block Distractions. Build Habits. For ADHDers by ADHDers.",
                "description": "Focus Bear is a productivity and habit app built by a team with ADHD and ASD for people who need better focus. Helps you build better habits through real time habit guidance. Gets you into deep work by blocking distractions across all your devices (desktop and mobile)."
              },
              {
                "rank": "5",
                "imageUrl": "https://ph-files.imgix.net/9e44ee89-c743-4d5d-b0d4-be71dd38fb1b.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "Pulse.red — Keep your finger on the pulse of your projects and team.",
                "description": "Powerful time tracker for those who appriciate simplicity. No useless infographics; stay focused on the main things."
              }
            ]
          },
          {
            "sub_cat_name": "Video conferencing",
            "sub_cat_heading": "The best Video conferencing in 2024",
            "products": [
              {
                "rank": "1",
                "imageUrl": "https://ph-files.imgix.net/841b3aef-e135-4ef9-a5c8-48cc4d35a774.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=14&h=14&fit=crop",
                "title": "tl;dv — Catch up on meetings in minutes",
                "description": "Have fewer, more focused live meetings. Highlight and share relevant meeting moments on the fly. Keep your team always in the loop."
              },
              {
                "rank": "2",
                "imageUrl": "https://ph-files.imgix.net/2584f116-12d2-4fc5-bae0-092a5a0b44d5.svg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "Recall.ai — The universal API for meeting bots",
                "description": "The universal API for meeting bots. Recall.ai provides a single API for meeting bots on every platform like Zoom, Google Meet, Microsoft Teams and more."
              },
              {
                "rank": "3",
                "imageUrl": "https://ph-files.imgix.net/79438cd4-2556-44f8-8bf3-64dd3f72dc57.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "Around.co — Video calls loved by extraordinary Teams.",
                "description": "Meetings don't have to crush your soul. Discover radically unique video calls designed to help hybrid-remote teams create, collaborate and celebrate together."
              },
              {
                "rank": "4",
                "imageUrl": "https://ph-files.imgix.net/6c43a132-b78d-4c85-acc4-042d0a14b02a.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "Zoom — Video communication made simple and easy",
                "description": "Make teamwork more meaningful across hybrid teams with modern collaboration solutions."
              },
              {
                "rank": "5",
                "imageUrl": "https://ph-files.imgix.net/386fa292-2299-4d32-930c-cd6994a1f679.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "Tuple — The best pair programming tool for macOS and Windows",
                "description": "Tuple is an app for remote pair programming, optimized for everything that developers care about: Seamless collaboration with full-time mouse and keyboard support for all parties, crystal-clear webcam and screen-sharing, CL integration and pluginability."
              },
              {
                "rank": "6",
                "imageUrl": "https://ph-files.imgix.net/68503614-01df-48c9-b7cb-321746ecfd15.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "Daily.co — Real-time video infrastructure for developers",
                "description": "Build live video and audio applications using modern APIs and end-to-end tooling."
              },
              {
                "rank": "7",
                "imageUrl": "https://ph-files.imgix.net/e4755d37-e4f4-40df-a803-4d125d4cc328.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "Google Meet — Premium video meetings. Now free for everyone.",
                "description": "Google Meet is a video conferencing app. Google Meet integrates with G Suite versions of Google Calendar and Gmail and shows the complete list of participants and scheduled meetings."
              },
              {
                "rank": "8",
                "imageUrl": "https://ph-files.imgix.net/45e5b993-3081-4c6a-8578-4933431cbb0b.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=14&h=14&fit=crop",
                "title": "LiveKit — The open source platform for real-time communication",
                "description": "LiveKit is free, open source infrastructure for building and scaling real-time audio and video experiences in your applications. Use our APIs to easily build audio-only spaces, live classrooms, in-game video chat, collaborative screen sharing, and more."
              },
              {
                "rank": "9",
                "imageUrl": "https://ph-files.imgix.net/135e55ee-a739-450c-9cc0-d9ee1c468110.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "StreamYard — The easiest way to create professional live streams",
                "description": "StreamYard is a live streaming studio in your browser. Interview guests, brand your broadcast, and much more. Stream directly to Facebook, YouTube, LinkedIn, and other platforms."
              },
              {
                "rank": "10",
                "imageUrl": "https://ph-files.imgix.net/e65c2fca-dcd4-4b68-b6ff-2fa9b7b0e19e.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "Rewatch — Collaborative video workspace designed to help teams know more and move fast",
                "description": "Rewatch lets you securely save, manage, and search all your video content so teams collaborate faster and work just gets better."
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
