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
      "cat_name": "Marketing and Sales",
      "cat_heading": "The best Marketing and Sales in 2024",
      "sub_categories": [
        {
          "sub_cat_name": "Advertising tools",
          "sub_cat_heading": "The best Advertising tools in 2024",
          "products": [
            {
              "rank": "1",
              "imageUrl": "https://ph-files.imgix.net/320b5132-502b-422b-bd75-accf0805a20c.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=14&h=14&fit=crop",
              "title": "ScreenSpace — Be The Hero 💜 Help Customers Fall In Love With Your Product",
              "description": "In a world of distractions, oversaturated markets, & millennials… Marketing & sales teams rely on ScreenSpace to break through the noise → emotionally engage high-quality buyers → and guide them on an irresistible journey to YES!"
            },
            {
              "rank": "2",
              "imageUrl": "https://ph-files.imgix.net/a2220e26-efbe-4256-b5d0-13ac11ae5e31.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
              "title": "Passionfroot Discovery — Discover & book top creators to promote your product",
              "description": "Discover, book, and collaborate with quality creators to promote your product to +100M people. All creators run their business on Passionfroot - so you get replies fast and make bespoke collaborations as easy as paid ads."
            },
            {
              "rank": "3",
              "imageUrl": "https://ph-files.imgix.net/7606f641-1be9-429f-bd9c-038d3e730858.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=14&h=14&fit=crop",
              "title": "Creatify — Paste a product URL. Video ad made in seconds",
              "description": "An AI-powered tool that quickly generates variety of video ads from any product URL. It analyzes product details, gathers media, and creates engaging visuals and scripts, simplifying video ad production."
            },
            {
              "rank": "4",
              "imageUrl": "https://ph-files.imgix.net/d1faf456-01bb-4f0c-97a8-cd288cab10db.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=14&h=14&fit=crop",
              "title": "Pexmotion — Get motion videos for marketing at a flat monthly fee",
              "description": "We are a motion video editing agency who create videos that work for you. Through our subscription model, we provide ongoing motion videos that support to help elevate your marketing. We create product demos, launch promos, explainers and more."
            },
            {
              "rank": "5",
              "imageUrl": "https://ph-files.imgix.net/c0fa3050-ed5d-45b4-8720-6d2ee9f0e81b.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
              "title": "AdMob — app ads & other actionable insights to help your app grow.",
              "description": ""
            },
            {
              "rank": "6",
              "imageUrl": "https://ph-files.imgix.net/d829bd87-562c-487e-a425-51fdc7d5ef28.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
              "title": "AppSumo.com — Reduce your business costs",
              "description": "AppSumo was created with one idea in mind: the tools you need to grow your business shouldn’t put you out of business. AppSumo was started by serial online entrepreneur Noah Kagan — in his mom’s basement. Today, AppSumo is home to some of the best-looking and smartest (not to mention most humble) techies Austin, Texas has ever seen."
            }
          ]
        },
        {
          "sub_cat_name": "Affiliate marketing",
          "sub_cat_heading": "The best Affiliate marketing in 2024",
          "products": [
            {
              "rank": "1",
              "imageUrl": "https://ph-files.imgix.net/3bb3ea09-8afe-42b0-8545-160370510ec5.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
              "title": "Dub.co — Short links with superpowers",
              "description": "A link management infrastructure for modern marketing teams."
            },
            {
              "rank": "2",
              "imageUrl": "https://ph-files.imgix.net/e78180a6-884d-4a86-94e9-03a3097b021f.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
              "title": "AffordHunt — Discover Affordable AI & SaaS Alternatives",
              "description": "With the rise of AI and SaaS tool prices, many indie hackers and SMBs feel left behind. Enter AffordHunt - a curated platform spotlighting powerful yet budget-friendly tool alternatives. Dive in to find the right tool that aligns with your needs and budget."
            },
            {
              "rank": "3",
              "imageUrl": "https://ph-files.imgix.net/f5b81193-8e83-4f18-b745-0d02099fe702.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=14&h=14&fit=crop",
              "title": "Viral Loops — The all-in-one viral marketing platform to design.",
              "description": "Viral Loops is a viral and referral marketing platform to launch ranking competitions, sweepstakes, pre-launch and referral programs."
            },
            {
              "rank": "4",
              "imageUrl": "https://ph-files.imgix.net/0d27f231-de7a-4e98-bc28-c48442987747.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
              "title": "PartnerStack — Grow Revenue With Any Partner Program",
              "description": "PartnerStack is the only PRM built to support B2B SaaS companies and their partners to drive recurring revenue. Scale multiple programs at once on any channel."
            },
            {
              "rank": "5",
              "imageUrl": "https://ph-files.imgix.net/684d689c-a9bd-4b42-8dec-ffdd245b94c3.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
              "title": "Rewardful — Turn your biggest fans into your best marketers!",
              "description": "Turn your biggest fans into your best marketers. Rewardful is a simple way for SaaS companies to setup affiliate and referral programs with Stripe."
            },
            {
              "rank": "6",
              "imageUrl": "https://ph-files.imgix.net/6bea32bc-ca16-4a3b-98c6-73632a56134b.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=14&h=14&fit=crop",
              "title": "Geniuslink — Squeeze more revenue out of every link you share",
              "description": "Geniuslink makes localizing, tracking, and managing smart links dead simple, so you can earn more without added work. Get the most out of every link with simple and powerful tools that improve conversions and save you time."
            },
            {
              "rank": "7",
              "imageUrl": "https://ph-files.imgix.net/d829bd87-562c-487e-a425-51fdc7d5ef28.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
              "title": "AppSumo.com — Reduce your business costs",
              "description": "AppSumo was created with one idea in mind: the tools you need to grow your business shouldn’t put you out of business. AppSumo was started by serial online entrepreneur Noah Kagan — in his mom’s basement. Today, AppSumo is home to some of the best-looking and smartest (not to mention most humble) techies Austin, Texas has ever seen."
            },
            {
              "rank": "8",
              "imageUrl": "https://ph-files.imgix.net/ab17daaf-dca2-4134-bb0f-74fa1531405c.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
              "title": "SalesMate — Notion Sales Management CRM for any Small Business",
              "description": "SalesMate is Notion Sales Management CRM for any small b2b businesses or a freelancer - easily track and manage your leads, get a view on the probability adjusted pipeline value, manage and calculate commissions for your affiliates and a lot more."
            },
            {
              "rank": "9",
              "imageUrl": "https://ph-files.imgix.net/4cedfbe8-b1ef-45eb-a362-cb13a895948a.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
              "title": "TikTok Shop App Store — Your growth is here. Launch your app on our marketplace.",
              "description": "TikTok Shop's App Store is an ecommerce solution marketplace where developers are able to innovate and shape the future of social commerce for sellers. With robust API documentation, developer tools, and an engaged community, your success is on the horizon!"
            }
          ]
        },
        {
            "sub_cat_name": "Best SEO tools",
            "sub_cat_heading": "The best Best SEO tools in 2024",
            "products": [
              {
                "rank": "1",
                "imageUrl": "https://ph-files.imgix.net/7773976d-e914-4046-91b1-154f91680d94.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "Shipixen — Create a blog & landing page in minutes",
                "description": "Create a production-ready landing page & blog with your branding, theme & pages. You get the code & an SEO-optimized website so you can focus on building, not setting up."
              },
              {
                "rank": "2",
                "imageUrl": "https://ph-files.imgix.net/5d6e6951-17d1-4dfb-a617-75ed37c035c2.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=14&h=14&fit=crop",
                "title": "Exploding Topics — Discover rapidly growing content topics before they take off",
                "description": "Exploding Topics scours the internet to find exploding content topics before they take off."
              },
              {
                "rank": "3",
                "imageUrl": "https://ph-files.imgix.net/d0974721-8b14-48f9-a56c-b6915ba0f92c.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "AI Blog Articles — Boost your website's traffic with SEO-optimized content",
                "description": "AI Blog Articles in an AI-powered content writer that creates SEO-optimized blog articles for your website. It uses state-of-the-art LLMs to produce content that will make your website’s traffic grow."
              },
              {
                "rank": "4",
                "imageUrl": "https://ph-files.imgix.net/ab5519aa-926d-4e39-a319-6608f7e0d511.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "Google Search REST API — Google Search SERP API",
                "description": "Get the first page of Google structured with a simple GET request."
              },
              {
                "rank": "5",
                "imageUrl": "https://ph-files.imgix.net/f7e8a869-a082-42a9-ae1e-af89e9e7a12f.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "Astro — App Store Optimization Tool for Apple Developers",
                "description": "With Astro, you can track your rankings across all Apple platforms (iOS, iPadOS, Mac, TVOS, WatchOS) for FREE and access reliable data on keyword popularity sourced directly from Apple Search Ads."
              },
              {
                "rank": "6",
                "imageUrl": "https://ph-files.imgix.net/f02335c0-f195-4e4f-aabd-e577cb8bdf1b.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "Dev Tools — Best Online web tools for developers",
                "description": "Your one stop destination for all developer utility tools including code generator tools, code converter tools, html code generator, css code generator, minifiers, seo tolls and many more."
              },
              {
                "rank": "7",
                "imageUrl": "https://ph-files.imgix.net/38bda942-15d7-40b0-b0b0-48f06564b7eb.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "Semrush Website SEO Tools For Firefox — SEO analysis, keyword research, backlink checking, and more.",
                "description": "The Semrush Website SEO Tools extension for Firefox offers a range of tools to help improve your website's SEO performance. With features for on-page SEO analysis, keyword research, backlink checking, and more."
              }
            ]
          },
          {
            "sub_cat_name": "Business intelligence software",
            "sub_cat_heading": "The best Business intelligence software in 2024",
            "products": [
              {
                "rank": "1",
                "imageUrl": "https://ph-files.imgix.net/6859e0cb-5118-4c0f-82d4-3c54bd4d7621.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "Mixpanel — Event analytics everyone can use",
                "description": "An event analytics platform that allows anyone to get answers from their customer and revenue data in seconds. It offers powerful real-time charts and visualizations of how people interact with your digital products and company."
              },
              {
                "rank": "2",
                "imageUrl": "https://ph-files.imgix.net/9f2fd64e-a608-46a9-9755-053e646f89b0.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "June — The Simple Product Analytics App",
                "description": "June is product analytics for B2B SaaS. Get auto-generated reports focused on how companies use your product, not users"
              },
              {
                "rank": "3",
                "imageUrl": "https://ph-files.imgix.net/3bb3ea09-8afe-42b0-8545-160370510ec5.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "Dub.co — Short links with superpowers",
                "description": "A link management infrastructure for modern marketing teams."
              },
              {
                "rank": "4",
                "imageUrl": "https://ph-files.imgix.net/da9e292c-e22c-46e7-bd6b-4a08bdb92d27.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "Amplitude — Get data and insights to take action and drive growth",
                "description": "Amplitude is the comprehensive product analytics software for web and mobile. Over 12,000 companies use Amplitude to set product strategy, increase key metrics like user engagement, retention, and conversion, and ultimately build better products."
              },
              {
                "rank": "5",
                "imageUrl": "https://ph-files.imgix.net/36d2a89f-dbcd-4ba5-a234-4d39e12329d9.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "Metabase — Metabase is the easy, open source way for everyone.",
                "description": "The fastest, easiest way to share data and analytics inside your company. An open source Business Intelligence server you can install in 5 minutes that connects to MySQL, PostgreSQL, MongoDB and more! Anyone can use it to build charts, dashboards and n..."
              },
              {
                "rank": "6",
                "imageUrl": "https://ph-files.imgix.net/24a944d4-ad23-4fcc-93a6-018fad330b9f.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "Dokin — Sync live data from apps in Sheets, Slides, and Docs",
                "description": "Connect marketing channels, CRMs, and databases to Google Sheets and Looker with no-code."
              },
              {
                "rank": "7",
                "imageUrl": "https://ph-files.imgix.net/863849a4-8f1f-4f7c-a171-2029826e52e6.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=14&h=14&fit=crop",
                "title": "Flowla — Digital sales rooms that WOW buyers.",
                "description": "Auto-personalized deal rooms for revenue teams & clients that unite everything & everyone in the process in a single link. 🪄 Deliver an outstanding buying experience that increases conversion 📈 shortens deal cycles, and eases onboardings and renewals. 🚀"
              },
              {
                "rank": "8",
                "imageUrl": "https://ph-files.imgix.net/b184c1b8-c945-45fd-96d6-5d8ef1ce93fb.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "Morning Toasts - Business & Tech AI News — World's First Business and Tech AI News Portal",
                "description": "Stay ahead with Morning Toasts, the world's first AI Business & Tech news portal. Daily, concise updates in just 5 minutes, curated by experts for the latest, relevant insights. Effortlessly stay informed and ahead in technology and business."
              },
              {
                "rank": "9",
                "imageUrl": "https://ph-files.imgix.net/522d48b1-30e5-4a2b-afdb-693f1f76d66f.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "ChartMogul — Unlock the full revenue potential of your SaaS business",
                "description": "Our subscription analytics platform seamlessly combines and normalizes SaaS revenue data from multiple sources, delivering a clear and accurate view of your B2B SaaS business. You'll be ready to make data-driven decisions that take your business to the next level."
              },
              {
                "rank": "10",
                "imageUrl": "https://ph-files.imgix.net/6819516b-a862-4aa0-908e-72f4a9a1ffa5.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "Middesk — A business identity platform",
                "description": "A suite of identity products to help companies across the US verify their commercial customers."
              }
            ]
          },
          {
            "sub_cat_name": "CRM software",
            "sub_cat_heading": "The best CRM software in 2024",
            "products": [
              {
                "rank": "1",
                "imageUrl": "https://ph-files.imgix.net/c25d0c57-222f-489e-81bd-9d2439f189c1.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "ClickUp — An all-in-one productivity platform",
                "description": "Tasks, docs, goals, chat, and everything imaginable to make you more productive."
              },
              {
                "rank": "2",
                "imageUrl": "https://ph-files.imgix.net/ccb84135-f373-453d-b4de-837f8b77d00f.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "folk — Next generation CRM",
                "description": "folk is the CRM that works for you, not the other way around. It’s lightweight, customizable, and powered with AI to let you easily build stronger relationships."
              },
              {
                "rank": "3",
                "imageUrl": "https://ph-files.imgix.net/06dc62a0-4054-4f9a-bde5-bc6b79093274.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "Zendesk — The #1 helpdesk software",
                "description": "Zendesk is a service-first CRM company that builds software designed to improve customer relationships. As employees, we encourage each other to grow and innovate. As a company, we roll up our sleeves to plant roots in the communities we call home."
              },
              {
                "rank": "4",
                "imageUrl": "https://ph-files.imgix.net/0521c34e-e39b-41b2-a535-42811ae627a5.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "Merge — One API to add hundreds of integrations to your product",
                "description": "Merge is one API to add hundreds of integrations to your product. Merge’s platform makes secure data access easy by offering Unified APIs across key software categories, including HRIS, accounting, CRM, file storage, and more. Merge handles the full integrations lifecycle — from an easy initial build taking weeks, to providing integration observability tools ensuring customer delight, and fully owning the maintenance of integrations. Thousands of companies use Merge to power their integrations."
              },
              {
                "rank": "5",
                "imageUrl": "https://ph-files.imgix.net/466643f6-a017-4276-ac7e-6a798f8a4dba.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "Attio — Customer relationship magic.",
                "description": "Attio gives you all the tools you need to build the perfect CRM for your team. 🔗 Sync your email & calendar and build a CRM in minutes ⚒️ Build unique workflows exactly to your business needs ⚖️ Iterate & scale easily with integrations and enriched data"
              },
              {
                "rank": "6",
                "imageUrl": "https://ph-files.imgix.net/648a1784-de77-4fbc-b7e8-dd83215258ef.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "Plunk — The Email Platform for SaaS",
                "description": "Plunk is the affordable, developer-friendly email platform that brings together marketing, transactional and broadcast emails into one single, complete solution."
              },
              {
                "rank": "7",
                "imageUrl": "https://ph-files.imgix.net/24a944d4-ad23-4fcc-93a6-018fad330b9f.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "Dokin — Sync live data from apps in Sheets, Slides, and Docs",
                "description": "Connect marketing channels, CRMs, and databases to Google Sheets and Looker with no-code."
              },
              {
                "rank": "8",
                "imageUrl": "https://ph-files.imgix.net/566bf379-2801-4ea6-9dfe-5a5ad581d016.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "Crisp — Give your customer experience a human touch",
                "description": "Discover our Business Messaging Platform for Startups & SMB's. The one stop for sales, marketing & support in one platform : Crisp. 14 Days free trial. No credit-card required. Try now ! We provide Knowledge base, Team Inbox, Chatbot, CRM and multiple other features to let you build your own way to customer success."
              },
              {
                "rank": "9",
                "imageUrl": "https://ph-files.imgix.net/863849a4-8f1f-4f7c-a171-2029826e52e6.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=14&h=14&fit=crop",
                "title": "Flowla — Digital sales rooms that WOW buyers.",
                "description": "Auto-personalized deal rooms for revenue teams & clients that unite everything & everyone in the process in a single link. 🪄 Deliver an outstanding buying experience that increases conversion 📈 shortens deal cycles, and eases onboardings and renewals. 🚀"
              },
              {
                "rank": "10",
                "imageUrl": "https://ph-files.imgix.net/5e530268-ed61-44e6-a586-789c449c47d8.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "Segment — The leading customer data platform",
                "description": "A customer data platform that helps companies harness first-party customer data and democratizes access to reliable data for all teams. Standardize data collection, unify user records, and route customer data into any system where it’s needed."
              }
            ]
          },
          {
            "sub_cat_name": "Customer loyalty platforms",
            "sub_cat_heading": "The best Customer loyalty platforms in 2024",
            "products": [
              {
                "rank": "1",
                "imageUrl": "https://ph-files.imgix.net/1e52b732-a1a1-49e0-aed9-fb22e35dc898.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "SendGrid — Deliver transactional and marketing emails",
                "description": "Partner with the email service trusted by developers and marketers for time-savings, scalability, and delivery expertise."
              },
              {
                "rank": "2",
                "imageUrl": "https://ph-files.imgix.net/1901839b-7784-4e5e-bb0c-2fe7be046e1f.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=14&h=14&fit=crop",
                "title": "Senja — Collect, manage, and share customer testimonials.",
                "description": "Collect, manage, and market all the great things customers are loving about your product or service. Senja makes it super easy for your happy customers to leave video and text testimonials, then gives you the tools to create stunning marketing out of them."
              },
              {
                "rank": "3",
                "imageUrl": "https://ph-files.imgix.net/320b5132-502b-422b-bd75-accf0805a20c.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=14&h=14&fit=crop",
                "title": "ScreenSpace — Be The Hero 💜 Help Customers Fall In Love With Your Product",
                "description": "In a world of distractions, oversaturated markets, & millennials… Marketing & sales teams rely on ScreenSpace to break through the noise → emotionally engage high-quality buyers → and guide them on an irresistible journey to YES!"
              },
              {
                "rank": "4",
                "imageUrl": "https://ph-files.imgix.net/ed7295fa-0f47-4752-8a10-d39b32d8dfb3.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=14&h=14&fit=crop",
                "title": "Frill — Feedback, Roadmap and Announcements",
                "description": "Working out what features your customers want is messy business. Frill makes light work of collecting, prioritising and communicating these feature updates."
              },
              {
                "rank": "5",
                "imageUrl": null,
                "title": "Told — Collect user feedback with in-product surveys",
                "description": "A no-code survey tool that helps you collect user or customer feedback and understand your data simply."
              },
              {
                "rank": "6",
                "imageUrl": null,
                "title": "Acalytica Social Proof — Skyrocket Conversions & Increase Growth.",
                "description": "Skyrocket Conversions & Increase Growth. Increase your website's growth by using our notification widgets."
              },
              {
                "rank": "7",
                "imageUrl": "https://ph-files.imgix.net/6cda860b-560e-4b96-bbc8-a11df4aad327.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "AfterShip — Build a connected experience across the customer lifecycle.",
                "description": "Improve customer lifecycle management throughout the shopping journey. And empower your brand with tools that inspire product discovery, enable end-to-end order visibility, and facilitate worry-free returns."
              },
              {
                "rank": "8",
                "imageUrl": "https://ph-files.imgix.net/671fe5c2-6604-424e-98fc-f90e9d0b29b0.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "Trustpilot — Experience the power of customer",
                "description": "Trustpilot hosts reviews to help consumers shop with confidence, and deliver rich insights to help businesses improve the experiences they offer."
              },
              {
                "rank": "9",
                "imageUrl": "https://ph-files.imgix.net/8d6c4046-59eb-4a05-a932-b62297f57d64.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "Web Push Notification Tool — web push notification, push notification,",
                "description": "Re-engage users, even when they are offsite on mobile and desktop"
              }
            ]
          },
          {
            "sub_cat_name": "Email Marketing",
            "sub_cat_heading": "The best Email Marketing in 2024",
            "products": [
              {
                "rank": "1",
                "imageUrl": "https://ph-files.imgix.net/a87b4a30-b9bf-4b17-bbec-79d55ef82670.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "Resend — Email for developers",
                "description": "Build, test, and send transactional emails at scale. Resend provides the best developer experience helping you reach users instead of spam folders."
              },
              {
                "rank": "2",
                "imageUrl": "https://ph-files.imgix.net/7b71ea48-9987-463a-8e1d-8995069b3e27.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "Loops — Email for modern SaaS",
                "description": "A better way to send marketing and transactional email."
              },
              {
                "rank": "3",
                "imageUrl": "https://ph-files.imgix.net/14b8f695-e063-428c-92a8-641ed3f5bfb0.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "Customer IO — Automate powerful behavioral messages for web & mobile apps",
                "description": "A tool that lends you a helping hand to craft ideal customer interaction for your clients. It is a B2C solution that connects emails to mobile phones and helps in sending all types of messages across all platforms."
              },
              {
                "rank": "4",
                "imageUrl": "https://ph-files.imgix.net/1e52b732-a1a1-49e0-aed9-fb22e35dc898.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "SendGrid — Deliver transactional and marketing emails",
                "description": "Partner with the email service trusted by developers and marketers for time-savings, scalability, and delivery expertise."
              },
              {
                "rank": "5",
                "imageUrl": "https://ph-files.imgix.net/fb8482c5-7250-467d-9b06-e5aeaa8cfcdd.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "Mailmodo — Boost email conversions with interactive AMP emails.",
                "description": "Mailmodo is an email marketing tool, powered by AMP Emails, enabling users to create & send app-like interactive emails to improve conversions. As interactions happen inside the email, users can take action seamlessly within the email."
              },
              {
                "rank": "6",
                "imageUrl": "https://ph-files.imgix.net/c5eeb80f-4c15-4fc8-833b-c9702a18a595.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "Postmark — Email for web applications",
                "description": "Trusted by thousands of developers, Postmark is a fast and reliable email delivery service. Send with Postmark to ensure your application's emails get to the inbox on time, every time."
              },
              {
                "rank": "7",
                "imageUrl": "https://ph-files.imgix.net/648a1784-de77-4fbc-b7e8-dd83215258ef.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "Plunk — The Email Platform for SaaS",
                "description": "Plunk is the affordable, developer-friendly email platform that brings together marketing, transactional and broadcast emails into one single, complete solution."
              },
              {
                "rank": "8",
                "imageUrl": "https://ph-files.imgix.net/9cecc8bf-09e0-4333-86ea-0a94afa9e1dd.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "MailerLite — Advanced Email Marketing Made Easy",
                "description": "Grow your business using MailerLite’s lightning fast email marketing platform. Attract new customers with advanced features like pop-ups, multi-trigger automations, surveys, Facebook audiences, and AI-generated email content and subject lines. Anyone can create professional newsletters, landing pages and websites using drag & drop builders and pre-designed templates. Then connect workflows using Zapier, sell digital products and subscriptions with Stripe, sync e-commerce data, and so much more."
              },
              {
                "rank": "9",
                "imageUrl": "https://ph-files.imgix.net/ad938778-e017-4ecd-9d5c-b5a3c87733d8.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "Designmodo — No-code email template and website builders.",
                "description": "Designmodo is an all-in-one solution to create website and email newsletter designs that impress and engage your audience. Create your email templates and websites 20x faster, with no design limitations and no need for coding skills. Postcards email buidler provides you with all the tools necessary to start building and customizing your email template - from scratch to the finished product in just a few minutes. Collaborate with the entire team to bring ideas to the table from everyone."
              },
              {
                "rank": "10",
                "imageUrl": "https://ph-files.imgix.net/7e52d2b9-4e2e-4451-a375-e71ce46358c4.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "beehiiv — The most creator-friendly newsletter platform, period.",
                "description": "beehiiv empowers people to create, monetize, and grow by providing the most powerful and robust newsletter platform, holistically under one roof. We'll provide best-in-class tools to help you succeed, and you get to keep all of the revenue for yourself."
              }
            ]
          },
          {
            "sub_cat_name": "Influencer marketing platforms",
            "sub_cat_heading": "The best Influencer marketing platforms in 2024",
            "products": [
              {
                "rank": "1",
                "imageUrl": "https://ph-files.imgix.net/a2220e26-efbe-4256-b5d0-13ac11ae5e31.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "Passionfroot Discovery — Discover & book top creators to promote your product",
                "description": "Discover, book, and collaborate with quality creators to promote your product to +100M people. All creators run their business on Passionfroot - so you get replies fast and make bespoke collaborations as easy as paid ads."
              },
              {
                "rank": "2",
                "imageUrl": "https://ph-files.imgix.net/4104cfc9-8533-4b34-912f-f5b98f8138bb.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "Avatars by Studio Neiro AI — Craft captivating videos using scalable AI driven avatars",
                "description": "Generate video avatars with human-like features and micro-expressions that accurately represent your brand script or audio speech. Customize the voice of AI avatar to match the speaker's persona. First ultrarealistic avatars for vertical videos by Studio Neiro AI."
              }
            ]
          },
          {
            "sub_cat_name": "Keyword research tools",
            "sub_cat_heading": "The best Keyword research tools in 2024",
            "products": [
              {
                "rank": "1",
                "imageUrl": "https://ph-files.imgix.net/8efcd572-19c7-4323-a3b7-53b929d10e22.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "Niche Tools — Skip the market research rabbit hole Find tools that convert",
                "description": "Helping others find profitable niches that are tools. This is anything from generators, countdown timers, calculators and more. Get a growing list of curated easy to filter tools that you can build in a weekend and profit."
              },
              {
                "rank": "2",
                "imageUrl": "https://ph-files.imgix.net/5d6e6951-17d1-4dfb-a617-75ed37c035c2.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=14&h=14&fit=crop",
                "title": "Exploding Topics — Discover rapidly growing content topics before they take off",
                "description": "Exploding Topics scours the internet to find exploding content topics before they take off."
              },
              {
                "rank": "3",
                "imageUrl": "https://ph-files.imgix.net/f7e8a869-a082-42a9-ae1e-af89e9e7a12f.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "Astro — App Store Optimization Tool for Apple Developers",
                "description": "With Astro, you can track your rankings across all Apple platforms (iOS, iPadOS, Mac, TVOS, WatchOS) for FREE and access reliable data on keyword popularity sourced directly from Apple Search Ads."
              },
              {
                "rank": "4",
                "imageUrl": "https://ph-files.imgix.net/38bda942-15d7-40b0-b0b0-48f06564b7eb.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "Semrush Website SEO Tools For Firefox — SEO analysis, keyword research, backlink checking, and more.",
                "description": "The Semrush Website SEO Tools extension for Firefox offers a range of tools to help improve your website's SEO performance. With features for on-page SEO analysis, keyword research, backlink checking, and more."
              }
            ]
          },
          {
            "sub_cat_name": "Landing page builders",
            "sub_cat_heading": "The best Landing page builders in 2024",
            "products": [
              {
                "rank": "1",
                "imageUrl": "https://ph-files.imgix.net/7773976d-e914-4046-91b1-154f91680d94.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "Shipixen — Create a blog & landing page in minutes",
                "description": "Create a production-ready landing page & blog with your branding, theme & pages. You get the code & an SEO-optimized website so you can focus on building, not setting up."
              },
              {
                "rank": "2",
                "imageUrl": "https://ph-files.imgix.net/e27da880-1b85-4171-b086-f9bd9d30a9fb.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=14&h=14&fit=crop",
                "title": "Dora AI — Generate sites using AI",
                "description": "A text-to-website tool that generates landing pages with natural language, using a powerful no-code editor."
              },
              {
                "rank": "3",
                "imageUrl": "https://ph-files.imgix.net/5a6c6c6a-21a5-4b76-8264-55fc7f92cacb.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "Momentum Page — Launch your landing page in seconds. Get users in minutes.",
                "description": "Page is a stupid-simple no-code landing page builder, that allows you to launch page in seconds, use social media to grow your views, get your signups, message them and eventually sell. It's free if you build in public."
              },
              {
                "rank": "4",
                "imageUrl": "https://ph-files.imgix.net/a7227897-0c8a-44ea-b2f1-0e9c69155923.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "Tella — Screen recording for entrepreneurs",
                "description": "The screen recorder that edits videos for you."
              },
              {
                "rank": "5",
                "imageUrl": "https://ph-files.imgix.net/9cecc8bf-09e0-4333-86ea-0a94afa9e1dd.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "MailerLite — Advanced Email Marketing Made Easy",
                "description": "Grow your business using MailerLite’s lightning fast email marketing platform. Attract new customers with advanced features like pop-ups, multi-trigger automations, surveys, Facebook audiences, and AI-generated email content and subject lines. Anyone can create professional newsletters, landing pages and websites using drag & drop builders and pre-designed templates. Then connect workflows using Zapier, sell digital products and subscriptions with Stripe, sync e-commerce data, and so much more."
              },
              {
                "rank": "6",
                "imageUrl": "https://ph-files.imgix.net/ad938778-e017-4ecd-9d5c-b5a3c87733d8.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "Designmodo — No-code email template and website builders.",
                "description": "Designmodo is an all-in-one solution to create website and email newsletter designs that impress and engage your audience. Create your email templates and websites 20x faster, with no design limitations and no need for coding skills. Postcards email buidler provides you with all the tools necessary to start building and customizing your email template - from scratch to the finished product in just a few minutes. Collaborate with the entire team to bring ideas to the table from everyone."
              },
              {
                "rank": "7",
                "imageUrl": "https://ph-files.imgix.net/f834fbaa-7d81-4fb6-a447-5027c80fe12f.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=14&h=14&fit=crop",
                "title": "SaaS AI — The fastest way to launch your AI SaaS",
                "description": "SaaS AI: The Only Next.js Starter Kit Tailored for AI Web-Apps. Designed to streamline your development process, it eliminates weeks of work, empowering you to concentrate on delivering the features that matter most."
              },
              {
                "rank": "8",
                "imageUrl": "https://ph-files.imgix.net/f5b81193-8e83-4f18-b745-0d02099fe702.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=14&h=14&fit=crop",
                "title": "Viral Loops — The all-in-one viral marketing platform to design.",
                "description": "Viral Loops is a viral and referral marketing platform to launch ranking competitions, sweepstakes, pre-launch and referral programs."
              },
              {
                "rank": "9",
                "imageUrl": "https://ph-files.imgix.net/6450295b-5925-446c-a1aa-bb64d3306406.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "Mailchimp — Turn emails into revenue",
                "description": "Mailchimp has email marketing, automations, ads, landing pages, CRM tools, and more to grow your business on your terms. Get the word out with email, social ads, and make your life easier with automation. It's easy, and you can start for free."
              },
              {
                "rank": "10",
                "imageUrl": "https://ph-files.imgix.net/ba375f96-6d97-482a-8408-9a8851576da6.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "EarlyAccessHQ.com — The Fastest Waitlist Page Builder",
                "description": "🚀 EarlyAccessHQ is the fastest waitlist page builder for SaaS, Mobile Apps, Game Developers, AI Startups, Books, etc. Build unlimited waitlists, and launch your products effortlessly with a fully functional landing page. Launch your next big idea!"
              }
            ]
          },
          {
            "sub_cat_name": "Lead generation software",
            "sub_cat_heading": "The best Lead generation software in 2024",
            "products": [
              {
                "rank": "1",
                "imageUrl": "https://ph-files.imgix.net/ccb84135-f373-453d-b4de-837f8b77d00f.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "folk — Next generation CRM",
                "description": "folk is the CRM that works for you, not the other way around. It’s lightweight, customizable, and powered with AI to let you easily build stronger relationships."
              },
              {
                "rank": "2",
                "imageUrl": "https://ph-files.imgix.net/290edd0f-e78e-4fce-ba2d-aec0c8e4e67a.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "Wondercraft — An AI powered audio studio",
                "description": "The easy and enjoyable way to create professional, studio-quality audio for podcasts, audiobooks, ads, company communications, and more."
              },
              {
                "rank": "3",
                "imageUrl": "https://ph-files.imgix.net/32d8ac55-bed0-4e4f-9ce7-fc2cca86ce2f.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "Product Marketing Alliance — Insights from 90,000 product marketing leaders",
                "description": "The State of Product Marketing report 2023 contains the most important survey and interview insights we discovered from talking directly to hundreds of product marketers."
              },
              {
                "rank": "4",
                "imageUrl": "https://ph-files.imgix.net/863849a4-8f1f-4f7c-a171-2029826e52e6.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=14&h=14&fit=crop",
                "title": "Flowla — Digital sales rooms that WOW buyers.",
                "description": "Auto-personalized deal rooms for revenue teams & clients that unite everything & everyone in the process in a single link. 🪄 Deliver an outstanding buying experience that increases conversion 📈 shortens deal cycles, and eases onboardings and renewals. 🚀"
              },
              {
                "rank": "5",
                "imageUrl": null,
                "title": "Clearbit — Data to power your entire business",
                "description": "Clearbit provides powerful products and data APIs to help your business grow. Contact enrichment, lead generation, financial compliance, and more..."
              },
              {
                "rank": "6",
                "imageUrl": "https://ph-files.imgix.net/5b05dea5-50a7-49f1-ae6d-80c3970f8ab5.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "Re:catch — Automate your inbound pipeline, and close a deal by tomorrow",
                "description": "Re:catch is a cloud-based sales funnel automation software that empowers revenue teams to achieve revenue acceleration by optimizing Speed-to-Lead and Time-to-Revenue."
              },
              {
                "rank": "7",
                "imageUrl": "https://ph-files.imgix.net/1343b5b2-1fce-4c5a-a9c7-7dc7f8f227b9.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "Tally — The simplest way to create forms",
                "description": "A simple, yet powerful form builder that allows you to create any type of form without breaking the bank."
              },
              {
                "rank": "8",
                "imageUrl": "https://ph-files.imgix.net/320b5132-502b-422b-bd75-accf0805a20c.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=14&h=14&fit=crop",
                "title": "ScreenSpace — Be The Hero 💜 Help Customers Fall In Love With Your Product",
                "description": "In a world of distractions, oversaturated markets, & millennials… Marketing & sales teams rely on ScreenSpace to break through the noise → emotionally engage high-quality buyers → and guide them on an irresistible journey to YES!"
              },
              {
                "rank": "9",
                "imageUrl": "https://ph-files.imgix.net/a2220e26-efbe-4256-b5d0-13ac11ae5e31.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "Passionfroot Discovery — Discover & book top creators to promote your product",
                "description": "Discover, book, and collaborate with quality creators to promote your product to +100M people. All creators run their business on Passionfroot - so you get replies fast and make bespoke collaborations as easy as paid ads."
              },
              {
                "rank": "10",
                "imageUrl": "https://ph-files.imgix.net/a3721298-cf1a-4abd-8949-e2a5197fc80e.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "Hunter — Connect with anyone.",
                "description": "Hunter is the leading solution to find and verify professional email addresses. Start using Hunter and connect with the people that matter for your business."
              }
            ]
          },
          {
            "sub_cat_name": "Marketing automation platform",
            "sub_cat_heading": "The best Marketing automation platform in 2024",
            "products": [
              {
                "rank": "1",
                "imageUrl": "https://ph-files.imgix.net/7b71ea48-9987-463a-8e1d-8995069b3e27.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "Loops — Email for modern SaaS",
                "description": "A better way to send marketing and transactional email."
              },
              {
                "rank": "2",
                "imageUrl": "https://ph-files.imgix.net/14b8f695-e063-428c-92a8-641ed3f5bfb0.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "Customer IO — Automate powerful behavioral messages for web & mobile apps",
                "description": "A tool that lends you a helping hand to craft ideal customer interaction for your clients. It is a B2C solution that connects emails to mobile phones and helps in sending all types of messages across all platforms."
              },
              {
                "rank": "3",
                "imageUrl": "https://ph-files.imgix.net/3bb3ea09-8afe-42b0-8545-160370510ec5.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "Dub.co — Short links with superpowers",
                "description": "A link management infrastructure for modern marketing teams."
              },
              {
                "rank": "4",
                "imageUrl": "https://ph-files.imgix.net/7676c5ad-4e39-4396-b586-bb0c355cb89d.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "Typeframes — Stunning product videos, in minutes",
                "description": "Typeframes lets you create eye-catching product videos to elevate your brand and convert more customers."
              },
              {
                "rank": "5",
                "imageUrl": "https://ph-files.imgix.net/1e52b732-a1a1-49e0-aed9-fb22e35dc898.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "SendGrid — Deliver transactional and marketing emails",
                "description": "Partner with the email service trusted by developers and marketers for time-savings, scalability, and delivery expertise."
              },
              {
                "rank": "6",
                "imageUrl": "https://ph-files.imgix.net/fb8482c5-7250-467d-9b06-e5aeaa8cfcdd.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "Mailmodo — Boost email conversions with interactive AMP emails.",
                "description": "Mailmodo is an email marketing tool, powered by AMP Emails, enabling users to create & send app-like interactive emails to improve conversions. As interactions happen inside the email, users can take action seamlessly within the email."
              },
              {
                "rank": "7",
                "imageUrl": "https://ph-files.imgix.net/648a1784-de77-4fbc-b7e8-dd83215258ef.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "Plunk — The Email Platform for SaaS",
                "description": "Plunk is the affordable, developer-friendly email platform that brings together marketing, transactional and broadcast emails into one single, complete solution."
              },
              {
                "rank": "8",
                "imageUrl": "https://ph-files.imgix.net/a4e943d9-1cd8-4528-b015-07f71eee3bff.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "Twilio — Customer Engagement Platform",
                "description": "Deliver personalized engagement at scale with the Twilio Customer Engagement Platform. Build or buy your ideal customer engagement experience on a trusted, global platform that combines the best in digital communication channels, first-party customer data, and flexible, easy-to-build solutions."
              },
              {
                "rank": "9",
                "imageUrl": "https://ph-files.imgix.net/9cecc8bf-09e0-4333-86ea-0a94afa9e1dd.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "MailerLite — Advanced Email Marketing Made Easy",
                "description": "Grow your business using MailerLite’s lightning fast email marketing platform. Attract new customers with advanced features like pop-ups, multi-trigger automations, surveys, Facebook audiences, and AI-generated email content and subject lines. Anyone can create professional newsletters, landing pages and websites using drag & drop builders and pre-designed templates. Then connect workflows using Zapier, sell digital products and subscriptions with Stripe, sync e-commerce data, and so much more."
              },
              {
                "rank": "10",
                "imageUrl": "https://ph-files.imgix.net/5b05dea5-50a7-49f1-ae6d-80c3970f8ab5.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "Re:catch — Automate your inbound pipeline, and close a deal by tomorrow",
                "description": "Re:catch is a cloud-based sales funnel automation software that empowers revenue teams to achieve revenue acceleration by optimizing Speed-to-Lead and Time-to-Revenue."
              }
            ]
          },
          {
            "sub_cat_name": "Sales Training",
            "sub_cat_heading": "The best Sales Training in 2024",
            "products": [
              {
                "rank": "1",
                "imageUrl": "https://ph-files.imgix.net/863849a4-8f1f-4f7c-a171-2029826e52e6.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=14&h=14&fit=crop",
                "title": "Flowla — Digital sales rooms that WOW buyers.",
                "description": "Auto-personalized deal rooms for revenue teams & clients that unite everything & everyone in the process in a single link. 🪄 Deliver an outstanding buying experience that increases conversion 📈 shortens deal cycles, and eases onboardings and renewals. 🚀"
              },
              {
                "rank": "2",
                "imageUrl": "https://ph-files.imgix.net/bd81d0d1-9c8c-4123-bf66-bd79251da340.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "Clay — Build tools & workflows to supercharge your sales team",
                "description": "Quickly connect your apps and code into automated workflows, build useful tools, enrich data sets and more."
              },
              {
                "rank": "3",
                "imageUrl": "https://ph-files.imgix.net/320b5132-502b-422b-bd75-accf0805a20c.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=14&h=14&fit=crop",
                "title": "ScreenSpace — Be The Hero 💜 Help Customers Fall In Love With Your Product",
                "description": "In a world of distractions, oversaturated markets, & millennials… Marketing & sales teams rely on ScreenSpace to break through the noise → emotionally engage high-quality buyers → and guide them on an irresistible journey to YES!"
              },
              {
                "rank": "4",
                "imageUrl": "https://ph-files.imgix.net/8fbd4713-1f51-4cff-9610-f33baaa187aa.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=14&h=14&fit=crop",
                "title": "Storylane — Create and share interactive product demo in 10 mins",
                "description": "Storylane helps marketing and sales teams create and share clickable and interactive product demos. You can embed these demos on your website, campaigns or sales followups to get highly qualified leads and win more deals."
              }
            ]
          },
          {
            "sub_cat_name": "Social Media Management Tools",
            "sub_cat_heading": "The best Social Media Management Tools in 2024",
            "products": [
              {
                "rank": "1",
                "imageUrl": "https://ph-files.imgix.net/5a6c6c6a-21a5-4b76-8264-55fc7f92cacb.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "Momentum Page — Launch your landing page in seconds. Get users in minutes.",
                "description": "Page is a stupid-simple no-code landing page builder, that allows you to launch page in seconds, use social media to grow your views, get your signups, message them and eventually sell. It's free if you build in public."
              },
              {
                "rank": "2",
                "imageUrl": "https://ph-files.imgix.net/5f04fd44-3645-4baa-b39d-c74f9ee434b9.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "CapCut — All-in-one video editor",
                "description": "CapCut is an all-in-one video editor that makes video creating and sharing easier."
              },
              {
                "rank": "3",
                "imageUrl": "https://ph-files.imgix.net/e2d35a4c-c184-4faa-af66-bd3997615f09.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=14&h=14&fit=crop",
                "title": "Replayed - YouTube Production App — Creator Economy Services",
                "description": "Replayed helps creators make more meaningful content without risking burn out Sign up for FREE to meet your team. Don't pay until you are happy. Rates from $130 per video."
              },
              {
                "rank": "4",
                "imageUrl": "https://ph-files.imgix.net/0adbbeb6-a0bb-4e39-801d-950b3130e0c8.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "AnimStats — Transform Your Stats into Captivating Animated GIFs",
                "description": "Transform your stats into captivating animated GIFs. Boost engagement, grab attention, and turn your tweets into irresistible eye candy with AnimStats. Elevate your data visuals like never before. Unleash the power of scroll-stopping GIFs!"
              },
              {
                "rank": "5",
                "imageUrl": "https://ph-files.imgix.net/ed7295fa-0f47-4752-8a10-d39b32d8dfb3.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=14&h=14&fit=crop",
                "title": "ContentStudio — Discover Plan Schedule Analyze",
                "description": "ContentStudio offers a content discovery tool that makes content curation blogs and social media effortless for business in any niche or market. An online platform to better organize your business' content curation efforts."
              },
              {
                "rank": "6",
                "imageUrl": "https://ph-files.imgix.net/ed7295fa-0f47-4752-8a10-d39b32d8dfb3.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=14&h=14&fit=crop",
                "title": "Contentdrips — Contentdrips helps create micro content for social media.",
                "description": "Create personalised micro content for your social media growth."
              },
              {
                "rank": "7",
                "imageUrl": "https://ph-files.imgix.net/ffaf1907-e70a-4208-adb4-2dbdc58f4a52.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "BrandBird — Turn screenshots into beautiful social media images & posts",
                "description": "Create beautiful images for Twitter, Instagram, Dribbble, LinkedIn, and boost your social media views & engagement in seconds. BrandBird allows you to brand your accounts uniquely by creating templates, adding your brand colors, and your personal watermark!"
              },
              {
                "rank": "8",
                "imageUrl": "https://ph-files.imgix.net/7c730041-9cb7-4f9e-95c6-9749de8ac883.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=14&h=14&fit=crop",
                "title": "Waalaxy — Reach 100 people per week. In 10mn per day. For 0$ per month",
                "description": "The simplest LinkedIn automation tool on the market. 60k+ users. Rated 4.8/5. Automate your LinkedIn & Email outreach. Get hundreds of responses. In just 10min a day. No technical skill required. No credit card required. Test it & see. 😉"
              },
              {
                "rank": "9",
                "imageUrl": "https://ph-files.imgix.net/b4426700-71f2-459e-87f3-206f3b9f6471.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "Metricool — Analyze, manage and measure your digital content",
                "description": "All in one site: web analytics, blog content, Twitter, Facebook, Instagram, publication planner, real-time and more. The ultimate tool for analysing, managing and measuring the success of all your digital content and campaigns. Free of charge. Complete. Intuitive."
              },
              {
                "rank": "10",
                "imageUrl": "https://ph-files.imgix.net/d0bb79f4-dead-4c5c-b6d6-c4d584394a00.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "Typefully — Write, schedule, and publish great Twitter threads.",
                "description": "Write, schedule & publish great threads, without distractions — and boost your Twitter growth with powerful analytics."
              }
            ]
          },
          {
            "sub_cat_name": "Social Media Scheduling Tools",
            "sub_cat_heading": "The best Social Media Scheduling Tools in 2024",
            "products": [
              {
                "rank": "1",
                "imageUrl": "https://ph-files.imgix.net/ed7295fa-0f47-4752-8a10-d39b32d8dfb3.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=14&h=14&fit=crop",
                "title": "Contentdrips — Contentdrips helps create micro content for social media.",
                "description": "Create personalised micro content for your social media growth."
              },
              {
                "rank": "2",
                "imageUrl": "https://ph-files.imgix.net/b4426700-71f2-459e-87f3-206f3b9f6471.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "Metricool — Analyze, manage and measure your digital content",
                "description": "All in one site: web analytics, blog content, Twitter, Facebook, Instagram, publication planner, real-time and more. The ultimate tool for analysing, managing and measuring the success of all your digital content and campaigns. Free of charge. Complete. Intuitive."
              },
              {
                "rank": "3",
                "imageUrl": "https://ph-files.imgix.net/d0bb79f4-dead-4c5c-b6d6-c4d584394a00.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "Typefully — Write, schedule, and publish great Twitter threads.",
                "description": "Write, schedule & publish great threads, without distractions — and boost your Twitter growth with powerful analytics."
              },
              {
                "rank": "4",
                "imageUrl": "https://ph-files.imgix.net/87ae88d0-2d31-4823-96a3-7aa7d92b280e.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=14&h=14&fit=crop",
                "title": "Buffer — Make your business stand out and reach more customers on social media",
                "description": "Buffer is a software application for the web and mobile, designed to manage accounts in social networks."
              }
            ]
          },
          {
            "sub_cat_name": "Servey and form builder",
            "sub_cat_heading": "The best Servey and form builder in 2024",
            "products": [
              {
                "rank": "1",
                "imageUrl": "https://ph-files.imgix.net/32d8ac55-bed0-4e4f-9ce7-fc2cca86ce2f.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "Product Marketing Alliance — Insights from 90,000 product marketing leaders",
                "description": "The State of Product Marketing report 2023 contains the most important survey and interview insights we discovered from talking directly to hundreds of product marketers."
              },
              {
                "rank": "2",
                "imageUrl": "https://ph-files.imgix.net/8c7b16db-c6c1-4695-a26e-7c9baca30f95.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "Weavely — Build web forms with custom UX and UI from Figma designs",
                "description": "Build web forms that stand out with custom UX and UI, without coding. The Weavely form builder enables you to design and publish forms directly in Figma. Get creative with form design, apply conditional logic and reuse brand assets to collect more responses."
              },
              {
                "rank": "3",
                "imageUrl": "https://ph-files.imgix.net/bf707a85-fbbd-4beb-85cc-ec056f488cf8.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "Fillout.com — Make any form in minutes",
                "description": "Fillout is a powerful, no-code form builder. Create a form in minutes and style the form to match your brand. Add multiple pages, powerful conditional logic, and 40+ customizable question types."
              },
              {
                "rank": "4",
                "imageUrl": "https://ph-files.imgix.net/5b05dea5-50a7-49f1-ae6d-80c3970f8ab5.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "Re:catch — Automate your inbound pipeline, and close a deal by tomorrow",
                "description": "Re:catch is a cloud-based sales funnel automation software that empowers revenue teams to achieve revenue acceleration by optimizing Speed-to-Lead and Time-to-Revenue."
              },
              {
                "rank": "5",
                "imageUrl": "https://ph-files.imgix.net/1343b5b2-1fce-4c5a-a9c7-7dc7f8f227b9.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "Tally — The simplest way to create forms",
                "description": "A simple, yet powerful form builder that allows you to create any type of form without breaking the bank."
              },
              {
                "rank": "6",
                "imageUrl": "https://ph-files.imgix.net/0d00ffee-a16a-4c89-8ba6-a7249963f194.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "Typeform — People-friendly forms and surveys",
                "description": "Typeform is a software as a service company that specializes in online form building and online surveys."
              },
              {
                "rank": "7",
                "imageUrl": "https://ph-files.imgix.net/653ff69d-8ed6-457b-a8a9-bef5fefa6fdc.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "Formbricks — Harvest user-insights, build irresistible experiences",
                "description": "A free and open source surveying platform. Gather feedback at every point in the user journey with beautiful in-app, website, link and email surveys"
              },
              {
                "rank": "8",
                "imageUrl": "https://ph-files.imgix.net/fc85ecb8-e629-43da-af6e-6f3393d7d9d9.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "Reform — Clean-looking, on-brand forms, no code required",
                "description": "Clean-looking, on-brand forms that are easy to use in your no-code projects, send out in emails, or put on your website. A modern form builder for your tool belt."
              },
              {
                "rank": "9",
                "imageUrl": null,
                "title": "Tandemz — Recruit research participants in just a couple of clicks",
                "description": "Find research participants from all over the world easily, for your interviews, usability tests, and surveys."
              },
              {
                "rank": "10",
                "imageUrl": null,
                "title": "Told — Collect user feedback with in-product surveys",
                "description": "A no-code survey tool that helps you collect user or customer feedback and understand your data simply."
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
