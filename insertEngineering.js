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
      },
      {
        "sub_cat_name": "AI coding assistants",
        "sub_cat_heading": "The best AI coding assistants in 2024",
        "products": [
          {
            "rank": "1",
            "name": "JetBrains",
            "icon": "https://ph-files.imgix.net/a91a21ee-1d99-4713-87a9-7466c778feb9.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "JetBrains — A suite of intelligent development tools",
            "description": "Powerful IDEs for most programming languages and technologies along with products for team collaboration.",
            "productUrl":"https://www.producthunt.com/products/jetbrains/shoutouts",
            "websiteUrl":"https://www.jetbrains.com/?ref=producthunt",
            "imageUrl1":"https://ph-files.imgix.net/b45f1201-a239-48fa-90db-7fb3b1cebaf7.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&fit=crop&dpr=1",
            "imageUrl2":"",
            "imageUrl3":"",
            "videoUrl":""
          },
          {
            "rank": "2",
            "name": "GitHub Copilot Chat",
            "icon": "https://ph-files.imgix.net/cdb23f26-b385-4854-a005-3862be50f79e.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "GitHub Copilot Chat — AI chat features powered by Copilot",
            "description": "GitHub Copilot Chat is a companion extension to GitHub Copilot that provides conversational AI assistance throughout your software development journey in VS Code.",
            "productUrl":"https://www.producthunt.com/products/github-copilot-chat",
            "websiteUrl":"https://github.com/features/copilot?ref=producthunt",
            "imageUrl1":"https://ph-files.imgix.net/f0b776d7-f4dd-4a0c-81f4-9d3d05808d2d.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl2":"https://ph-files.imgix.net/6f07a661-3190-4532-8973-1b2c5cab3b8e.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl3":"",
            "videoUrl":""
          },
          {
            "rank": "3",
            "name": "Groq Chat",
            "icon": "https://ph-files.imgix.net/043ab050-9dff-4bb2-bff0-f6645ba07a58.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "Groq Chat — An LPU inference engine",
            "description": "A new type of end-to-end processing unit system that provides the fastest inference for computationally intensive applications with a sequential component to them, such as AI language applications (LLMs)",
            "productUrl":"https://www.producthunt.com/products/groq-chat/shoutouts",
            "websiteUrl":"https://chat.groq.com/?ref=producthunt",
            "imageUrl1":"https://ph-files.imgix.net/dae72806-6864-4ec6-ae3a-ffbd634e503a.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl2":"https://ph-files.imgix.net/df0cb900-2558-48fd-bc31-87e5d0c36aea.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl3":"",
            "videoUrl":""
          },
          {
            "rank": "4",
            "name": "ggml",
            "icon": "https://ph-files.imgix.net/96ea26ff-b99f-442d-aad9-49c3a4a6d433.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "ggml — ML tensor library to enable LLMs on consumer hardware",
            "description": "",
            "productUrl":"https://www.producthunt.com/products/ggml/shoutouts",
            "websiteUrl":"https://ggml.ai/?ref=producthunt",
            "imageUrl1":"",
            "imageUrl2":"",
            "imageUrl3":"",
            "videoUrl":""
          },
          {
            "rank": "5",
            "name": "Cursor Copilot++",
            "icon": "https://ph-files.imgix.net/927733c0-76ff-402b-af77-e09cbd88f1cd.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "Cursor Copilot++ — Autocomplete redesigned to predict your next edit",
            "description": "A more powerful version of Copilot that can suggest mid-line completions and entire diffs. Trained to autocomplete on sequences of edits, it's quick to understand the change you're making.",
            "productUrl":"https://www.producthunt.com/products/cursor-copilot/shoutouts",
            "websiteUrl":"https://cursor.sh/cpp?ref=producthunt",
            "imageUrl1":"https://ph-files.imgix.net/39d1e83f-a1af-4fe1-af4e-419aa3f20858.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl2":"https://ph-files.imgix.net/b437ccc1-fdbc-41cf-8e9b-a76095bc223b.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl3":"https://ph-files.imgix.net/72937da8-7a3e-40e3-a53f-deb1226715bd.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "videoUrl":""
          },
          {
            "rank": "6",
            "name": "Dify.AI",
            "icon": "https://ph-files.imgix.net/1f84350b-c1ce-4670-ba12-642be36da364.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "Dify.AI — Open-source platform for LLMOps,Define your AI-native Apps",
            "description": "Dify.AI is an open-source platform for LLMOpsIt offers visual management of prompts, operations, and datasets. Create an AI app in minutes or integrate LLM into your app for continuous improvement.",
            "productUrl":"https://www.producthunt.com/products/dify-ai/shoutouts",
            "websiteUrl":"https://dify.ai/?ref=producthunt",
            "imageUrl1":"https://ph-files.imgix.net/d5dce577-4876-450b-a576-d7e2b3167f88.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl2":"https://ph-files.imgix.net/8418cf45-79b8-4b5a-ab54-0c53cba16adf.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl3":"https://ph-files.imgix.net/a952b3be-03f8-4d3c-983d-697b2058035c.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "videoUrl":""
          },
          {
            "rank": "7",
            "name": "LocalizeBot",
            "icon": "https://ph-files.imgix.net/1f885b01-0d52-48b7-a8af-74b4dac2b6b4.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "LocalizeBot — Translate iOS app In 1 click",
            "description": "Simplifies app localization and helps you reach more users. Use a machine translation service to translate your App and App Store metadata. - Supported xliff and xcloc files. - Translate App Store metadata.",
            "productUrl":"https://www.producthunt.com/products/localizebot/shoutouts",
            "websiteUrl":"https://localizebot.com/?ref=producthunt",
            "imageUrl1":"https://ph-files.imgix.net/bc617502-e156-4eb2-9e68-f1df41820e6f.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl2":"https://ph-files.imgix.net/2388fd5e-9b0a-4fe4-be99-645dde2fbd27.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl3":"https://ph-files.imgix.net/ba809447-2182-4ff1-a8c2-386e179ec6b3.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "videoUrl":""
          },
          {
            "rank": "8",
            "name": "Continue",
            "icon": "https://ph-files.imgix.net/4351458f-922c-4c5c-acb3-2a0e2dfc9edf.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "Continue — Continue enables you to create your own AI code assistant",
            "description": "Continue enables you to create your own AI code assistant inside your IDE. Keep your developers in flow with open-source VS Code and JetBrains extensions that can be connected to any model, any context, and anything else you need",
            "productUrl":"https://www.producthunt.com/products/continue/shoutouts",
            "websiteUrl":"https://continue.dev/?ref=producthunt",
            "imageUrl1":"https://ph-files.imgix.net/a72519d4-e11d-415b-9e7a-e0c8a6900126.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl2":"https://ph-files.imgix.net/f3eb3aed-5029-443a-9fc7-f99c3353b49d.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl3":"https://ph-files.imgix.net/0800408f-c622-4298-b3a9-054749d8f1f2.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "videoUrl":""
          },
          {
            "rank": "9",
            "name": "Langfuse",
            "icon": "https://ph-files.imgix.net/9a61a5f2-5dd2-492c-ae2a-5fdafe0d9c82.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "Langfuse — Open Source LLM Engineering Platform",
            "description": "Langfuse is the open source LLM Engineering Platform. It provides observability, metrics, evals, prompt management and a playground and to debug and improve LLM apps. Langfuse is open. It works with any model, any framework, allows for complex nesting and has open APIs to build downstream use cases. Docs: https://langfuse.com/docs Github: https://github.com/langfuse/langfuse",
            "productUrl":"https://www.producthunt.com/products/langfuse/shoutouts",
            "websiteUrl":"https://langfuse.com/?ref=producthunt",
            "imageUrl1":"https://ph-files.imgix.net/00781215-ec91-4ad4-af51-dd7fd5a55fbc.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop&dpr=1",
            "imageUrl2":"https://ph-files.imgix.net/151cece2-f032-4ace-84ef-b6dec0818f01.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop&dpr=1",
            "imageUrl3":"",
            "videoUrl":""
          },
          {
            "rank": "10",
            "name": "Journalist",
            "icon": "https://ph-files.imgix.net/004c521d-0849-482c-bdbf-92e6615e19eb.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "Journalist — Instantly generate hundreds of high-quality articles.",
            "description": "Journalist is an AI Article Generator that generates high-quality articles for your business. With a few clicks, you're able to automate your content with well-structured, unique and optimised articles for your niche.",
            "productUrl":"https://www.producthunt.com/products/journalist/shoutouts",
            "websiteUrl":"https://journalist.cafe/?ref=producthunt",
            "imageUrl1":"https://ph-files.imgix.net/fb6f2559-a382-47e5-911a-ca89f114fe16.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl2":"https://ph-files.imgix.net/d5487aea-2d22-4c7d-8ea0-ffe5b80345d0.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl3":"https://ph-files.imgix.net/55aed00e-a8c4-4968-bf9b-cbdb1b0a0db6.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "videoUrl":""
          },
          {
            "rank": "11",
            "name": "Ollama",
            "icon": "https://ph-files.imgix.net/c8b766e6-b9b3-4eed-93dc-602ab5a0f2ff.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "Ollama — The easiest way to run large language models locally",
            "description": "Run Llama 2 and other models on macOS, with Windows and Linux coming soon. Customize and create your own.",
            "productUrl":"https://www.producthunt.com/products/ollama/shoutouts",
            "websiteUrl":"https://github.com/jmorganca/ollama?ref=producthunt",
            "imageUrl1":"https://ph-files.imgix.net/5458784e-eb0d-4d4e-a08e-c0d2af61549c.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&fit=crop&dpr=1",
            "imageUrl2":"",
            "imageUrl3":"",
            "videoUrl":""
          },
          {
            "rank": "12",
            "name": "snap2txt",
            "icon": "https://ph-files.imgix.net/5b8f843b-51e2-4482-8f9f-a0535151462a.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=14&h=14&fit=crop",
            "title": "snap2txt — Convert your project into prompt",
            "description": "snap2txt is a Python utility that captures the structure and contents of a project directory and saves them into a text file. This text file is a ready-to-use base for a prompt to develop new features with ChatGPT.",
            "productUrl":"https://www.producthunt.com/products/snap2txt/shoutouts",
            "websiteUrl":"https://vorniches.com/snap2txt?ref=producthunt",
            "imageUrl1":"https://ph-files.imgix.net/7b7afc54-f2c1-4941-a6f8-5cce1e6d7b77.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl2":"https://ph-files.imgix.net/22462d90-8e7a-433c-9d02-1d6674cf1b02.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl3":"https://ph-files.imgix.net/fecae3c5-447f-415c-aef5-c19911c3c586.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "videoUrl":""
          },
          {
            "rank": "13",
            "name": "Coze",
            "icon": "https://ph-files.imgix.net/814d5f70-be1a-43cb-a33b-87d550f999a9.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "Coze — The easiest way to build AI bots",
            "description": "Coze is a no-code AI bot builder. Whether you have coding experience or not, you can quickly turn your bot ideas into reality. Build powerful bots powered by Large Language Models, and publish them to various messaging apps like Discord, Telegram or Slack.",
            "productUrl":"https://www.producthunt.com/products/coze/shoutouts",
            "websiteUrl":"https://www.coze.com/?ref=producthunt",
            "imageUrl1":"https://ph-files.imgix.net/0d75cc7d-8cef-4825-962b-957f77f563e2.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl2":"https://ph-files.imgix.net/d3265aaf-3e12-49d4-bd05-98ecf0b799fd.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl3":"https://ph-files.imgix.net/ceca9f39-c613-40dd-8c6c-8d6b8adbcf28.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "videoUrl":""
          },
          {
            "rank": "14",
            "name": "Octomind",
            "icon": "https://ph-files.imgix.net/3d81a8a3-7984-4a99-9050-f54e574bcb0f.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=14&h=14&fit=crop",
            "title": "Octomind — Find bugs before your users do with AI",
            "description": "AI-powered testing tool for web apps that finds bugs before your users do. We only need your website’s URL. Our AI agent knows what to test, writes the tests and keeps them relevant. Run the tests from our app or plug them into your CI/CD pipeline.",
            "productUrl":"https://www.producthunt.com/products/octomind/shoutouts",
            "websiteUrl":"https://octomind.dev/?ref=producthunt",
            "imageUrl1":"https://ph-files.imgix.net/d0189195-0500-49d6-9bb8-5cb9988c31f9.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl2":"https://ph-files.imgix.net/b1c8187c-c360-4e36-9401-9b60db921f5b.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl3":"https://ph-files.imgix.net/ad8e2548-4041-404a-aef9-aac05f3d52d8.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "videoUrl":""
          },
          {
            "rank": "15",
            "name": "Novel",
            "icon": "https://ph-files.imgix.net/33ea6c5c-575b-4ac1-adf4-11a978ea444d.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "Novel — Open-source Notion-style editor with AI autocomplete",
            "description": "Novel is an open-source Notion-style WYSYWIG editor with AI-powered autocompletions ✨ Built with Next.js Tiptap, OpenAI, and the Vercel AI SDK: https://sdk.vercel.ai/docs",
            "productUrl":"https://www.producthunt.com/products/novel-3/shoutouts",
            "websiteUrl":"https://novel.sh/?ref=producthunt",
            "imageUrl1":"https://ph-files.imgix.net/9fcef56a-754c-41bc-bbc7-bfdd20cf5c2d.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl2":"https://ph-files.imgix.net/1b975b09-93b6-4402-bb46-7a2a41903abd.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl3":"https://ph-files.imgix.net/90ba9047-6398-46d2-a524-4ca35595d84e.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "videoUrl":""
          },
          {
            "rank": "16",
            "name": "V0.dev",
            "icon": "https://ph-files.imgix.net/7225c497-8c9e-4e00-a832-0485c4eb50b4.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "V0.dev — Generate UI from simple text prompts and images.",
            "description": "Generate UI from simple text prompts and images.",
            "productUrl":"https://www.producthunt.com/products/v0-dev/shoutouts",
            "websiteUrl":"https://v0.dev/?ref=producthunt",
            "imageUrl1":"https://ph-files.imgix.net/c79f8a60-c3b9-4879-87fb-ba05fb0dcf8a.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl2":"https://ph-files.imgix.net/0daae321-07cb-4cfe-8a1c-e2b399c95c12.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl3":"https://ph-files.imgix.net/c1a99d58-5616-4b50-8c60-b317ca9ffa34.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "videoUrl":""
          },
          {
            "rank": "17",
            "name": "Colab Notebooks",
            "icon": "https://ph-files.imgix.net/6c5b634e-03b1-4829-96f8-24c2d7056c5a.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "Colab Notebooks — Browse notebooks from Google Colaboratory",
            "description": "Google Colab has become a reference point for many web developers and AI enthusiasts. Each notebook has a unique link from which it can be accessed. Consequently, why not create a website where you can browse, add and collect all the Jupyter notebooks?",
            "productUrl":"https://www.producthunt.com/products/colab-notebooks/shoutouts",
            "websiteUrl":"http://colabnotebooks.com/?ref=producthunt",
            "imageUrl1":"https://ph-files.imgix.net/41500161-0ee0-4623-8e80-e73d10f0f214.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop&dpr=1",
            "imageUrl2":"",
            "imageUrl3":"",
            "videoUrl":""
          },
          {
            "rank": "18",
            "name": "CopilotForXcode",
            "icon": "https://ph-files.imgix.net/a35bc284-4813-440f-bd8d-c04bc08aaf18.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "CopilotForXcode — intitni/CopilotForXcode",
            "description": "",
            "productUrl":"https://www.producthunt.com/products/copilotforxcode/shoutouts",
            "websiteUrl":"https://github.com/intitni/CopilotForXcode?ref=producthunt",
            "imageUrl1":"",
            "imageUrl2":"",
            "imageUrl3":"",
            "videoUrl":""
          },
          {
            "rank": "19",
            "name": "OpenAI Tools",
            "icon": "https://ph-files.imgix.net/045e1776-1aef-441d-901a-d5870829fee8.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "OpenAI Tools — Super App For Fine-tuning Datasets, Jobs, Metrics & Models",
            "description": "Toolkit to get the most out of your OpenAI account: Track API usage; Manage ChatGPT fine-tuning datasets; Create, monitor and cancel fine-tuning jobs; Review and visualize training logs; Test and compare fine-tuned and other models directly, and more.",
            "productUrl":"https://www.producthunt.com/products/openai-tools/shoutouts",
            "websiteUrl":"https://www.openaitools.io/?ref=producthunt",
            "imageUrl1":"https://ph-files.imgix.net/39ee3401-161b-46b2-8baf-2d1dbb370b36.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl2":"https://ph-files.imgix.net/a77a3b41-8cd7-4fe7-9e64-d779932513ca.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl3":"https://ph-files.imgix.net/c4f741b9-68b0-431b-9aae-dfe89389574a.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "videoUrl":""
          },
          {
            "rank": "20",
            "name": "Supermaven",
            "icon": "https://ph-files.imgix.net/72ab3c22-d6c5-4c90-947f-4052c7f092ef.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "Supermaven — The fastest copilot with 300000 token context window.",
            "description": "Supermaven's new neural network architecture surpasses Transformers (the current standard architecture) in efficiency, integrating information across a 300,000-token context window at the cost and latency of a 4,000-token Transformer window.",
            "productUrl":"https://www.producthunt.com/products/supermaven/shoutouts",
            "websiteUrl":"https://supermaven.com/?ref=producthunt",
            "imageUrl1":"https://ph-files.imgix.net/c64f386f-9a09-41b2-b266-521f99e54110.svg?auto=compress&codec=mozjpeg&cs=strip&auto=format&fit=crop&dpr=1",
            "imageUrl2":"",
            "imageUrl3":"",
            "videoUrl":""
          }
          
        ]
      },
      {
        "sub_cat_name": "Authentication And Identity",
        "sub_cat_heading": "The best Authentication And Identity in 2024",
        "products": [
          {
            "rank": "1",
            "name": "JetBrains",
            "icon": "https://ph-files.imgix.net/a91a21ee-1d99-4713-87a9-7466c778feb9.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "JetBrains — A suite of intelligent development tools",
            "description": "Powerful IDEs for most programming languages and technologies along with products for team collaboration.",
            "productUrl":"https://www.producthunt.com/products/jetbrains/shoutouts",
            "websiteUrl":"https://www.jetbrains.com/?ref=producthunt",
            "imageUrl1":"https://ph-files.imgix.net/b45f1201-a239-48fa-90db-7fb3b1cebaf7.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&fit=crop&dpr=1",
            "imageUrl2":"",
            "imageUrl3":"",
            "videoUrl":""
          },
          {
            "rank": "2",
            "name": "GitHub Copilot Chat",
            "icon": "https://ph-files.imgix.net/cdb23f26-b385-4854-a005-3862be50f79e.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "GitHub Copilot Chat — AI chat features powered by Copilot",
            "description": "GitHub Copilot Chat is a companion extension to GitHub Copilot that provides conversational AI assistance throughout your software development journey in VS Code.",
            "productUrl":"https://www.producthunt.com/products/github-copilot-chat",
            "websiteUrl":"https://github.com/features/copilot?ref=producthunt",
            "imageUrl1":"https://ph-files.imgix.net/f0b776d7-f4dd-4a0c-81f4-9d3d05808d2d.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl2":"https://ph-files.imgix.net/6f07a661-3190-4532-8973-1b2c5cab3b8e.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl3":"",
            "videoUrl":""
          },
          {
            "rank": "3",
            "name": "Groq Chat",
            "icon": "https://ph-files.imgix.net/043ab050-9dff-4bb2-bff0-f6645ba07a58.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "Groq Chat — An LPU inference engine",
            "description": "A new type of end-to-end processing unit system that provides the fastest inference for computationally intensive applications with a sequential component to them, such as AI language applications (LLMs)",
            "productUrl":"https://www.producthunt.com/products/groq-chat/shoutouts",
            "websiteUrl":"https://chat.groq.com/?ref=producthunt",
            "imageUrl1":"https://ph-files.imgix.net/dae72806-6864-4ec6-ae3a-ffbd634e503a.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl2":"https://ph-files.imgix.net/df0cb900-2558-48fd-bc31-87e5d0c36aea.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl3":"",
            "videoUrl":""
          },
          {
            "rank": "4",
            "name": "ggml",
            "icon": "https://ph-files.imgix.net/96ea26ff-b99f-442d-aad9-49c3a4a6d433.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "ggml — ML tensor library to enable LLMs on consumer hardware",
            "description": "",
            "productUrl":"https://www.producthunt.com/products/ggml/shoutouts",
            "websiteUrl":"https://ggml.ai/?ref=producthunt",
            "imageUrl1":"",
            "imageUrl2":"",
            "imageUrl3":"",
            "videoUrl":""
          },
          {
            "rank": "5",
            "name": "Cursor Copilot++",
            "icon": "https://ph-files.imgix.net/927733c0-76ff-402b-af77-e09cbd88f1cd.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "Cursor Copilot++ — Autocomplete redesigned to predict your next edit",
            "description": "A more powerful version of Copilot that can suggest mid-line completions and entire diffs. Trained to autocomplete on sequences of edits, it's quick to understand the change you're making.",
            "productUrl":"https://www.producthunt.com/products/cursor-copilot/shoutouts",
            "websiteUrl":"https://cursor.sh/cpp?ref=producthunt",
            "imageUrl1":"https://ph-files.imgix.net/39d1e83f-a1af-4fe1-af4e-419aa3f20858.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl2":"https://ph-files.imgix.net/b437ccc1-fdbc-41cf-8e9b-a76095bc223b.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl3":"https://ph-files.imgix.net/72937da8-7a3e-40e3-a53f-deb1226715bd.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "videoUrl":""
          },
          {
            "rank": "6",
            "name": "Dify.AI",
            "icon": "https://ph-files.imgix.net/1f84350b-c1ce-4670-ba12-642be36da364.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "Dify.AI — Open-source platform for LLMOps,Define your AI-native Apps",
            "description": "Dify.AI is an open-source platform for LLMOpsIt offers visual management of prompts, operations, and datasets. Create an AI app in minutes or integrate LLM into your app for continuous improvement.",
            "productUrl":"https://www.producthunt.com/products/dify-ai/shoutouts",
            "websiteUrl":"https://dify.ai/?ref=producthunt",
            "imageUrl1":"https://ph-files.imgix.net/d5dce577-4876-450b-a576-d7e2b3167f88.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl2":"https://ph-files.imgix.net/8418cf45-79b8-4b5a-ab54-0c53cba16adf.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl3":"https://ph-files.imgix.net/a952b3be-03f8-4d3c-983d-697b2058035c.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "videoUrl":""
          },
          {
            "rank": "7",
            "name": "LocalizeBot",
            "icon": "https://ph-files.imgix.net/1f885b01-0d52-48b7-a8af-74b4dac2b6b4.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "LocalizeBot — Translate iOS app In 1 click",
            "description": "Simplifies app localization and helps you reach more users. Use a machine translation service to translate your App and App Store metadata. - Supported xliff and xcloc files. - Translate App Store metadata.",
            "productUrl":"https://www.producthunt.com/products/localizebot/shoutouts",
            "websiteUrl":"https://localizebot.com/?ref=producthunt",
            "imageUrl1":"https://ph-files.imgix.net/bc617502-e156-4eb2-9e68-f1df41820e6f.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl2":"https://ph-files.imgix.net/2388fd5e-9b0a-4fe4-be99-645dde2fbd27.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl3":"https://ph-files.imgix.net/ba809447-2182-4ff1-a8c2-386e179ec6b3.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "videoUrl":""
          },
          {
            "rank": "8",
            "name": "Continue",
            "icon": "https://ph-files.imgix.net/4351458f-922c-4c5c-acb3-2a0e2dfc9edf.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "Continue — Continue enables you to create your own AI code assistant",
            "description": "Continue enables you to create your own AI code assistant inside your IDE. Keep your developers in flow with open-source VS Code and JetBrains extensions that can be connected to any model, any context, and anything else you need",
            "productUrl":"https://www.producthunt.com/products/continue/shoutouts",
            "websiteUrl":"https://continue.dev/?ref=producthunt",
            "imageUrl1":"https://ph-files.imgix.net/a72519d4-e11d-415b-9e7a-e0c8a6900126.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl2":"https://ph-files.imgix.net/f3eb3aed-5029-443a-9fc7-f99c3353b49d.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl3":"https://ph-files.imgix.net/0800408f-c622-4298-b3a9-054749d8f1f2.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "videoUrl":""
          },
          {
            "rank": "9",
            "name": "Langfuse",
            "icon": "https://ph-files.imgix.net/9a61a5f2-5dd2-492c-ae2a-5fdafe0d9c82.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "Langfuse — Open Source LLM Engineering Platform",
            "description": "Langfuse is the open source LLM Engineering Platform. It provides observability, metrics, evals, prompt management and a playground and to debug and improve LLM apps. Langfuse is open. It works with any model, any framework, allows for complex nesting and has open APIs to build downstream use cases. Docs: https://langfuse.com/docs Github: https://github.com/langfuse/langfuse",
            "productUrl":"https://www.producthunt.com/products/langfuse/shoutouts",
            "websiteUrl":"https://langfuse.com/?ref=producthunt",
            "imageUrl1":"https://ph-files.imgix.net/00781215-ec91-4ad4-af51-dd7fd5a55fbc.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop&dpr=1",
            "imageUrl2":"https://ph-files.imgix.net/151cece2-f032-4ace-84ef-b6dec0818f01.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop&dpr=1",
            "imageUrl3":"",
            "videoUrl":""
          },
          {
            "rank": "10",
            "name": "Journalist",
            "icon": "https://ph-files.imgix.net/004c521d-0849-482c-bdbf-92e6615e19eb.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "Journalist — Instantly generate hundreds of high-quality articles.",
            "description": "Journalist is an AI Article Generator that generates high-quality articles for your business. With a few clicks, you're able to automate your content with well-structured, unique and optimised articles for your niche.",
            "productUrl":"https://www.producthunt.com/products/journalist/shoutouts",
            "websiteUrl":"https://journalist.cafe/?ref=producthunt",
            "imageUrl1":"https://ph-files.imgix.net/fb6f2559-a382-47e5-911a-ca89f114fe16.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl2":"https://ph-files.imgix.net/d5487aea-2d22-4c7d-8ea0-ffe5b80345d0.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl3":"https://ph-files.imgix.net/55aed00e-a8c4-4968-bf9b-cbdb1b0a0db6.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "videoUrl":""
          },
          {
            "rank": "11",
            "name": "Ollama",
            "icon": "https://ph-files.imgix.net/c8b766e6-b9b3-4eed-93dc-602ab5a0f2ff.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "Ollama — The easiest way to run large language models locally",
            "description": "Run Llama 2 and other models on macOS, with Windows and Linux coming soon. Customize and create your own.",
            "productUrl":"https://www.producthunt.com/products/ollama/shoutouts",
            "websiteUrl":"https://github.com/jmorganca/ollama?ref=producthunt",
            "imageUrl1":"https://ph-files.imgix.net/5458784e-eb0d-4d4e-a08e-c0d2af61549c.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&fit=crop&dpr=1",
            "imageUrl2":"",
            "imageUrl3":"",
            "videoUrl":""
          },
          {
            "rank": "12",
            "name": "snap2txt",
            "icon": "https://ph-files.imgix.net/5b8f843b-51e2-4482-8f9f-a0535151462a.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=14&h=14&fit=crop",
            "title": "snap2txt — Convert your project into prompt",
            "description": "snap2txt is a Python utility that captures the structure and contents of a project directory and saves them into a text file. This text file is a ready-to-use base for a prompt to develop new features with ChatGPT.",
            "productUrl":"https://www.producthunt.com/products/snap2txt/shoutouts",
            "websiteUrl":"https://vorniches.com/snap2txt?ref=producthunt",
            "imageUrl1":"https://ph-files.imgix.net/7b7afc54-f2c1-4941-a6f8-5cce1e6d7b77.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl2":"https://ph-files.imgix.net/22462d90-8e7a-433c-9d02-1d6674cf1b02.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl3":"https://ph-files.imgix.net/fecae3c5-447f-415c-aef5-c19911c3c586.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "videoUrl":""
          },
          {
            "rank": "13",
            "name": "Coze",
            "icon": "https://ph-files.imgix.net/814d5f70-be1a-43cb-a33b-87d550f999a9.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "Coze — The easiest way to build AI bots",
            "description": "Coze is a no-code AI bot builder. Whether you have coding experience or not, you can quickly turn your bot ideas into reality. Build powerful bots powered by Large Language Models, and publish them to various messaging apps like Discord, Telegram or Slack.",
            "productUrl":"https://www.producthunt.com/products/coze/shoutouts",
            "websiteUrl":"https://www.coze.com/?ref=producthunt",
            "imageUrl1":"https://ph-files.imgix.net/0d75cc7d-8cef-4825-962b-957f77f563e2.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl2":"https://ph-files.imgix.net/d3265aaf-3e12-49d4-bd05-98ecf0b799fd.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl3":"https://ph-files.imgix.net/ceca9f39-c613-40dd-8c6c-8d6b8adbcf28.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "videoUrl":""
          },
          {
            "rank": "14",
            "name": "Octomind",
            "icon": "https://ph-files.imgix.net/3d81a8a3-7984-4a99-9050-f54e574bcb0f.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=14&h=14&fit=crop",
            "title": "Octomind — Find bugs before your users do with AI",
            "description": "AI-powered testing tool for web apps that finds bugs before your users do. We only need your website’s URL. Our AI agent knows what to test, writes the tests and keeps them relevant. Run the tests from our app or plug them into your CI/CD pipeline.",
            "productUrl":"https://www.producthunt.com/products/octomind/shoutouts",
            "websiteUrl":"https://octomind.dev/?ref=producthunt",
            "imageUrl1":"https://ph-files.imgix.net/d0189195-0500-49d6-9bb8-5cb9988c31f9.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl2":"https://ph-files.imgix.net/b1c8187c-c360-4e36-9401-9b60db921f5b.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl3":"https://ph-files.imgix.net/ad8e2548-4041-404a-aef9-aac05f3d52d8.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "videoUrl":""
          },
          {
            "rank": "15",
            "name": "Novel",
            "icon": "https://ph-files.imgix.net/33ea6c5c-575b-4ac1-adf4-11a978ea444d.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "Novel — Open-source Notion-style editor with AI autocomplete",
            "description": "Novel is an open-source Notion-style WYSYWIG editor with AI-powered autocompletions ✨ Built with Next.js Tiptap, OpenAI, and the Vercel AI SDK: https://sdk.vercel.ai/docs",
            "productUrl":"https://www.producthunt.com/products/novel-3/shoutouts",
            "websiteUrl":"https://novel.sh/?ref=producthunt",
            "imageUrl1":"https://ph-files.imgix.net/9fcef56a-754c-41bc-bbc7-bfdd20cf5c2d.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl2":"https://ph-files.imgix.net/1b975b09-93b6-4402-bb46-7a2a41903abd.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl3":"https://ph-files.imgix.net/90ba9047-6398-46d2-a524-4ca35595d84e.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "videoUrl":""
          },
          {
            "rank": "16",
            "name": "V0.dev",
            "icon": "https://ph-files.imgix.net/7225c497-8c9e-4e00-a832-0485c4eb50b4.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "V0.dev — Generate UI from simple text prompts and images.",
            "description": "Generate UI from simple text prompts and images.",
            "productUrl":"https://www.producthunt.com/products/v0-dev/shoutouts",
            "websiteUrl":"https://v0.dev/?ref=producthunt",
            "imageUrl1":"https://ph-files.imgix.net/c79f8a60-c3b9-4879-87fb-ba05fb0dcf8a.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl2":"https://ph-files.imgix.net/0daae321-07cb-4cfe-8a1c-e2b399c95c12.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl3":"https://ph-files.imgix.net/c1a99d58-5616-4b50-8c60-b317ca9ffa34.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "videoUrl":""
          },
          {
            "rank": "17",
            "name": "Colab Notebooks",
            "icon": "https://ph-files.imgix.net/6c5b634e-03b1-4829-96f8-24c2d7056c5a.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "Colab Notebooks — Browse notebooks from Google Colaboratory",
            "description": "Google Colab has become a reference point for many web developers and AI enthusiasts. Each notebook has a unique link from which it can be accessed. Consequently, why not create a website where you can browse, add and collect all the Jupyter notebooks?",
            "productUrl":"https://www.producthunt.com/products/colab-notebooks/shoutouts",
            "websiteUrl":"http://colabnotebooks.com/?ref=producthunt",
            "imageUrl1":"https://ph-files.imgix.net/41500161-0ee0-4623-8e80-e73d10f0f214.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop&dpr=1",
            "imageUrl2":"",
            "imageUrl3":"",
            "videoUrl":""
          },
          {
            "rank": "18",
            "name": "CopilotForXcode",
            "icon": "https://ph-files.imgix.net/a35bc284-4813-440f-bd8d-c04bc08aaf18.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "CopilotForXcode — intitni/CopilotForXcode",
            "description": "",
            "productUrl":"https://www.producthunt.com/products/copilotforxcode/shoutouts",
            "websiteUrl":"https://github.com/intitni/CopilotForXcode?ref=producthunt",
            "imageUrl1":"",
            "imageUrl2":"",
            "imageUrl3":"",
            "videoUrl":""
          },
          {
            "rank": "19",
            "name": "OpenAI Tools",
            "icon": "https://ph-files.imgix.net/045e1776-1aef-441d-901a-d5870829fee8.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "OpenAI Tools — Super App For Fine-tuning Datasets, Jobs, Metrics & Models",
            "description": "Toolkit to get the most out of your OpenAI account: Track API usage; Manage ChatGPT fine-tuning datasets; Create, monitor and cancel fine-tuning jobs; Review and visualize training logs; Test and compare fine-tuned and other models directly, and more.",
            "productUrl":"https://www.producthunt.com/products/openai-tools/shoutouts",
            "websiteUrl":"https://www.openaitools.io/?ref=producthunt",
            "imageUrl1":"https://ph-files.imgix.net/39ee3401-161b-46b2-8baf-2d1dbb370b36.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl2":"https://ph-files.imgix.net/a77a3b41-8cd7-4fe7-9e64-d779932513ca.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl3":"https://ph-files.imgix.net/c4f741b9-68b0-431b-9aae-dfe89389574a.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "videoUrl":""
          },
          {
            "rank": "20",
            "name": "Supermaven",
            "icon": "https://ph-files.imgix.net/72ab3c22-d6c5-4c90-947f-4052c7f092ef.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "Supermaven — The fastest copilot with 300000 token context window.",
            "description": "Supermaven's new neural network architecture surpasses Transformers (the current standard architecture) in efficiency, integrating information across a 300,000-token context window at the cost and latency of a 4,000-token Transformer window.",
            "productUrl":"https://www.producthunt.com/products/supermaven/shoutouts",
            "websiteUrl":"https://supermaven.com/?ref=producthunt",
            "imageUrl1":"https://ph-files.imgix.net/c64f386f-9a09-41b2-b266-521f99e54110.svg?auto=compress&codec=mozjpeg&cs=strip&auto=format&fit=crop&dpr=1",
            "imageUrl2":"",
            "imageUrl3":"",
            "videoUrl":""
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
          `INSERT INTO Products (rank, name, icon, title, description, productUrl, websiteUrl, imageUrl1, imageUrl2, imageUrl3, videoUrl, cat_id, sub_cat_id) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13)`,
          [product.rank, product.name, product.icon, product.title, product.description, product.productUrl, product.websiteUrl, product.imageUrl1, product.imageUrl2, product.imageUrl3, product.videoUrl, cat_id, sub_cat_id]
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
