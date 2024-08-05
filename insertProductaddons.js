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
    "cat_name": "Product add-ons",
    "cat_heading": "The best Product add-ons in 2024",
    "sub_categories": [
      {
        "sub_cat_name": "Chrome Extensions",
        "sub_cat_heading": "The best Chrome Extensions in 2024",
        "products": [
          {
            "rank": "1",
            "name": "Loom",
            "icon": "https://ph-files.imgix.net/8022c507-8920-423f-9330-63a14764535d.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "Loom — Easily record and share videos",
            "description": "Record on your camera and screen on any device using the Chrome extension, desktop app, or mobile app. Share your video link in a few clicks.",
            "productUrl": "https://www.producthunt.com/products/loom/shoutouts",
            "websiteUrl": "https://www.loom.com/",
            "imageUrl1": "https://ph-files.imgix.net/9bdc0c4d-573c-4b3d-9bcb-af6ea680c256.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl2": "https://ph-files.imgix.net/09fbc87a-49f4-4e06-8beb-93fbf8c443d0.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl3": "https://ph-files.imgix.net/5c7da7e0-db4d-40a7-9822-ab7554725d2e.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "videoUrl": ""
          },
          {
            "rank": "2",
            "name": "tl;dv",
            "icon": "https://ph-files.imgix.net/841b3aef-e135-4ef9-a5c8-48cc4d35a774.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=14&h=14&fit=crop",
            "title": "tl;dv — Catch up on meetings in minutes",
            "description": "Have fewer, more focused live meetings. Highlight and share relevant meeting moments on the fly. Keep your team always in the loop.",
            "productUrl": "https://www.producthunt.com/products/tl-dv/shoutouts",
            "websiteUrl": "https://www.tldv.io/",
            "imageUrl1": "",
            "imageUrl2": "https://ph-files.imgix.net/e6cdd439-14bd-4867-a60e-fc0a8e1a1e6d.gif?fm=mp4&crop=max&w=256&h=160&dpr=2#t=0.001",
            "imageUrl3": "https://ph-files.imgix.net/3b6ce304-2d75-4ff1-b8cb-418938034aa3.gif?fm=mp4&crop=max&w=256&h=160&dpr=2#t=0.001",
            "videoUrl": "https://youtu.be/igSn0bX4izw"
          },
          {
            "rank": "3",
            "name": "Plasmo",
            "icon": "https://ph-files.imgix.net/4698ac9d-f1ce-41ff-9c01-189cf0d609a4.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "Plasmo — The browser extension platform",
            "description": "Streamline the process of building browser extensions, allowing you to focus on shipping your product. Say goodbye to slow iteration and hello to a better development experience",
            "productUrl": "https://www.producthunt.com/products/plasmo/shoutouts",
            "websiteUrl": "https://www.plasmo.com/",
            "imageUrl1": "https://ph-files.imgix.net/16d6e24c-3f74-4c5e-8d75-ed2224519147.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl2": "https://ph-files.imgix.net/fb1041ba-b6d0-4072-80c7-3ddbffd47b2e.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl3": "https://ph-files.imgix.net/0e12e96e-2a31-40ff-8b26-65f40d9a1c6d.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "videoUrl": ""
          },
          {
            "rank": "4",
            "name": "Hunter",
            "icon": "https://ph-files.imgix.net/a3721298-cf1a-4abd-8949-e2a5197fc80e.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "Hunter — Connect with anyone.",
            "description": "Hunter is the leading solution to find and verify professional email addresses. Start using Hunter and connect with the people that matter for your business.",
            "productUrl": "https://www.producthunt.com/products/hunter/shoutouts",
            "websiteUrl": "https://hunter.io/",
            "imageUrl1": "https://ph-files.imgix.net/5bd3deeb-fa1a-4999-a8f0-3b9c5062c12a.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl2": "https://ph-files.imgix.net/efd1f4be-4106-4aa1-90f7-6729cb97ceed.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl3": "https://ph-files.imgix.net/bc840bd1-380e-44d5-90d7-05001e600bb6.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "videoUrl": ""
          },
          {
            "rank": "5",
            "name": "Realm App",
            "icon": "https://ph-files.imgix.net/abff8d50-5720-4088-b7f2-5c68dc03de10.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "Realm App — Converts idle browser homepage into quick-access dashboard.",
            "description": "Realm App is a literacy and productivity tool as a browser extension. Users can customize their workspaces using a range of widgets such as bookmarks and curated reading lists, to suit their role and usage.",
            "productUrl": "https://www.producthunt.com/products/realm-app/shoutouts",
            "websiteUrl": "https://realmapp.io/",
            "imageUrl1": "",
            "imageUrl2": "https://ph-files.imgix.net/5434b6cb-f957-4d2f-9a06-0f563090ed6d.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl3": "https://ph-files.imgix.net/38301c4e-f9c0-4495-ba6a-45b9f9c228fa.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "videoUrl": "https://youtu.be/b3P5URPw9zY"
          },
          {
            "rank": "6",
            "name": "Journey",
            "icon": "https://ph-files.imgix.net/1cd74839-6c3a-4a07-8f45-41b23409929c.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "Journey — A journal writing app for android and chrome.",
            "description": "",
            "productUrl": "https://www.producthunt.com/products/journey-5/shoutouts",
            "websiteUrl": "https://chrome.google.com/webstore/detail/journey-diary-journal/jlncjaehedpdoinepaejmlpbmdkgmpog",
            "imageUrl1": "",
            "imageUrl2": "",
            "imageUrl3": "",
            "videoUrl": ""
          },
          {
            "rank": "7",
            "name": "Yandex Translate for Chrome",
            "icon": "https://ph-files.imgix.net/e1fd5359-bc49-44dd-85e9-561feb680394.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "Yandex Translate for Chrome — Extension for Chrome browser",
            "description": "Quickly translate selected text on web page. In toolbar popup, you can translate input text. And also you can translate text directly in pictures.",
            "productUrl": "https://www.producthunt.com/products/yandex-translate-for-chrome/shoutouts",
            "websiteUrl": "https://chrome.google.com/webstore/detail/yandex-translate/afbjfmdncdlpomhgjanodjfogbaiknho",
            "imageUrl1": "https://ph-files.imgix.net/557b7160-0869-43d4-a112-b6b1e522d65c.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl2": "https://ph-files.imgix.net/5670a59c-e213-4b9c-a43f-f7d45177f550.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl3": "https://ph-files.imgix.net/7eed0be1-ec31-4804-ba64-225e1d080b9f.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "videoUrl": ""
          },
          {
            "rank": "8",
            "name": "Ugly Duckling",
            "icon": "https://ph-files.imgix.net/f026c8ee-75a2-44de-afa4-684be5c68bdc.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "Ugly Duckling — Consistency on 𝕏 made easier.",
            "description": "Ugly Duckling is a simple and affordable analytics tool that helps you stay consistent and grow on X. The first version of Ugly Duckling, a Chrome extension, received a warm reception from the community and garnered over 100 daily active users now makes a comeback as a web application with new sharing features, beautiful charts and community leaderboard.",
            "productUrl": "https://www.producthunt.com/products/ugly-duckling/shoutouts",
            "websiteUrl": "https://uglyduckling.app/",
            "imageUrl1": "https://ph-files.imgix.net/e402cc8d-7c4a-4144-89c8-170d0b3fbd30.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl2": "https://ph-files.imgix.net/2e3c342d-e286-4d4e-8d78-7cf0baa3a8da.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl3": "https://ph-files.imgix.net/1ba4bbfb-5be5-4b5e-9ab4-2470ddec6054.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "videoUrl": ""
          },
          {
            "rank": "9",
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
            "rank": "10",
            "name": "Hugo",
            "icon": "https://ph-files.imgix.net/1c6953e7-5544-4ac7-ba46-1ae7e8106728.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "Hugo — Hugo - the extension you really want!",
            "description": "A Chrome Extension that enhances your browsing experience for Hugo. Right now, the basic features allow you to see when a website you're visiting has been built with Hugo as well as search the Hugo Docs from your Omnibox (address) Bar.",
            "productUrl": "https://www.producthunt.com/products/hugo-2/shoutouts",
            "websiteUrl": "https://chrome.google.com/webstore/detail/hugo-the-extension-you-re/hbaembbfbmpbjgkgcjcfonnimlekbfea",
            "imageUrl1": "https://ph-files.imgix.net/d2554b67-144a-495a-a78e-a654428afa78.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl2": "https://ph-files.imgix.net/037895a1-cd75-4868-af0a-ee6b1d69ec7b.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl3": "",
            "videoUrl": ""
          },
          {
            "rank": "11",
            "name": "Redux Dev Tools",
            "icon": "https://ph-files.imgix.net/9a496822-69dd-42fb-bbf3-d081c129c850.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "Redux Dev Tools — DevTools for Redux with hot reloading, action replay",
            "description": "Developer Tools to power-up Redux development workflow or any other architecture which handles the state change. It can be used as a browser extension (for Chrome and Firefox), as a standalone app or as a React component integrated in the client app.",
            "productUrl": "https://www.producthunt.com/products/redux-dev-tools/shoutouts",
            "websiteUrl": "https://github.com/reduxjs/redux-devtools",
            "imageUrl1": "https://ph-files.imgix.net/54cbfe23-4cca-41ef-b1e0-ba266d6aa177.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop&dpr=1",
            "imageUrl2": "https://ph-files.imgix.net/0555dc42-365c-463f-bda1-f220f22e7c88.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop&dpr=1",
            "imageUrl3": "",
            "videoUrl": ""
          },
          {
            "rank": "12",
            "name": "Semrush Website SEO Tools For Firefox",
            "icon": "https://ph-files.imgix.net/38bda942-15d7-40b0-b0b0-48f06564b7eb.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "Semrush Website SEO Tools For Firefox — SEO analysis, keyword research, backlink checking, and more.",
            "description": "The Semrush Website SEO Tools extension for Firefox offers a range of tools to help improve your website's SEO performance. With features for on-page SEO analysis, keyword research, backlink checking, and more.",
            "productUrl": "https://www.producthunt.com/products/semrush-website-seo-tools-for-firefox/shoutouts",
            "websiteUrl": "https://github.com/papitekno/semrush-website-seo-tools",
            "imageUrl1": "https://ph-files.imgix.net/70c1a788-c116-4e66-a922-c3fd53047eaf.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl2": "https://ph-files.imgix.net/2493a1d1-1303-4862-8b9c-f8e5e8cc7091.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl3": "https://ph-files.imgix.net/dee7c849-8a68-45e1-b272-f6d8124e248e.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "videoUrl": ""
          },
          {
            "rank": "13",
            "name": "Cloaked",
            "icon": "https://ph-files.imgix.net/9bfc3f9b-3be8-43fb-8575-a4f437ef59ee.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "Cloaked — Virtual identities to protect your privacy",
            "description": "Cloaked is a people-first privacy app that generates virtual identities to protect your personal data. No one should have to choose between staying connected and personal privacy — with Cloaked, you can try new products, travel, shop, and even meet new people while staying in control of your data. Unique and unlimited phone numbers, passwords, and payments set us apart from other privacy tools and password managers. Go ahead and give them your (Cloaked) info — and say goodbye to spam forever.",
            "productUrl": "https://www.producthunt.com/products/keepitcloaked/shoutouts",
            "websiteUrl": "https://www.cloaked.com/",
            "imageUrl1": "https://ph-files.imgix.net/b61d4238-8001-4a92-939b-c0b9b78c5d2e.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop&dpr=1",
            "imageUrl2": "https://ph-files.imgix.net/44a5e744-ac83-4c89-a60a-0b9c8934240c.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop&dpr=1",
            "imageUrl3": "",
            "videoUrl": ""
          },
          {
            "rank": "14",
            "name": "MacPaw",
            "icon": "https://ph-files.imgix.net/4fa58cb2-14fb-4c54-abca-009642d4b26c.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "MacPaw — We help machines help you",
            "description": "MacPaw is a software development company that develops and distributes software for macOS and iOS. MacPaw is the maker behind CleanMyMac X, Setapp, ClearVPN, SpyBuster and other products. In 2017, MacPaw acquired The Unarchiver and has been actively supporting the product since. Today, MacPaw products have more than 30 million users worldwide. Every fifth Mac on Earth has at least one app by MacPaw. The company was founded in 2008 in Kyiv, Ukraine.",
            "productUrl": "https://www.producthunt.com/products/macpaw/shoutouts",
            "websiteUrl": "http://macpaw.com/",
            "imageUrl1": "https://ph-files.imgix.net/5f90c984-9745-41d7-9177-292393ed74c6.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl2": "https://ph-files.imgix.net/f5abdaf7-d5c8-47eb-a697-dafbc5226e45.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl3": "https://ph-files.imgix.net/48daf40c-025f-4123-9ca2-63918f6f1bc8.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "videoUrl": ""
          }
        ]
        
      },
      {
        "sub_cat_name": "Figma Plugins",
        "sub_cat_heading": "The best Figma Plugins in 2024",
        "products": [
          {
            "rank": "1",
            "name": "Figma",
            "icon": "https://ph-files.imgix.net/db00a7a1-6778-4e51-a953-de5a9a339bc9.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "Figma — The collaborative interface design tool",
            "description": "A collaborative design tool for creating user interfaces, mobile apps, and websites with a wide range of features, including vector editing tools, prototyping, and version control, all in a cloud-based platform.",
            "productUrl": "https://www.producthunt.com/products/figma/shoutouts",
            "websiteUrl": "https://www.figma.com/",
            "imageUrl1": "https://ph-files.imgix.net/da03af27-d94d-4fe8-b020-82471c32b380.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl2": "https://ph-files.imgix.net/43c127d4-4f51-4194-8c35-6b063b0ae8a7.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl3": "",
            "videoUrl": ""
          },
          {
            "rank": "2",
            "name": "Jitter",
            "icon": "https://ph-files.imgix.net/6b009896-a716-4e21-a13e-963837356563.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "Jitter — 💫 Fast and simple motion design tool on the web.",
            "description": "Jitter is like Figma for motion design: it makes it easy to create animations for your videos, websites or apps, all in the browser.",
            "productUrl": "https://www.producthunt.com/products/jitter/shoutouts",
            "websiteUrl": "https://jitter.video/",
            "imageUrl1": "",
            "imageUrl2": "https://ph-files.imgix.net/f41fdfda-5cab-47f7-9847-74c41211c3a0.gif?fm=mp4&crop=max&w=256&h=160&dpr=2#t=0.001",
            "imageUrl3": "https://ph-files.imgix.net/e43a3473-c956-4061-a958-1b315a2c7dc2.gif?fm=mp4&crop=max&w=256&h=160&dpr=2#t=0.001",
            "videoUrl": "https://youtu.be/DlS41IjSR4g"
          },
          {
            "rank": "3",
            "name": "Weavely",
            "icon": "https://ph-files.imgix.net/8c7b16db-c6c1-4695-a26e-7c9baca30f95.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "Weavely — Build web forms with custom UX and UI from Figma designs",
            "description": "Build web forms that stand out with custom UX and UI, without coding. The Weavely form builder enables you to design and publish forms directly in Figma. Get creative with form design, apply conditional logic and reuse brand assets to collect more responses.",
            "productUrl": "https://www.producthunt.com/products/weavely/shoutouts",
            "websiteUrl": "https://www.weavely.ai/",
            "imageUrl1": "",
            "imageUrl2": "https://ph-files.imgix.net/343fbd4c-c7c4-48a6-8286-e700dd1fd4f9.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl3": "https://ph-files.imgix.net/47395cec-4952-4bc9-8e6d-14a762c86b17.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "videoUrl": "https://youtu.be/V4ikzkGgsBQ"
          },
          {
            "rank": "4",
            "name": "Musho",
            "icon": "https://ph-files.imgix.net/284b90ea-f607-4802-b74e-701e8bc52cab.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=14&h=14&fit=crop",
            "title": "Musho — Your new AI design assistant",
            "description": "Musho is so much more than a design tool—think of it as your go-to creative assistant in Figma that turns simple prompts into gorgeous websites. 💛",
            "productUrl": "https://www.producthunt.com/products/musho/shoutouts",
            "websiteUrl": "https://musho.ai/",
            "imageUrl1": "https://ph-files.imgix.net/02886dff-1af7-43d1-a2e9-a23413f13f19.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl2": "https://ph-files.imgix.net/5a1a9f01-0b37-4cac-90ad-d9288db44719.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl3": "https://ph-files.imgix.net/bdc1959c-3789-41a9-9b31-06152684bb25.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "videoUrl": ""
          },
          {
            "rank": "5",
            "name": "Heroicons",
            "icon": "https://ph-files.imgix.net/3f1c203b-342e-43e7-9f51-b9dc39b7d2c7.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "Heroicons — A unique set of icons that are easy to customize with CSS",
            "description": "Beautiful hand-crafted SVG icons, by the makers of Tailwind CSS.",
            "productUrl": "https://www.producthunt.com/products/heroicons/shoutouts",
            "websiteUrl": "http://www.heroicons.com/",
            "imageUrl1": "https://ph-files.imgix.net/fc5f516e-7e95-444d-aa50-dbce213580df.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl2": "https://ph-files.imgix.net/73708776-db88-4516-a0ae-7b6868fe70b4.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl3": "https://ph-files.imgix.net/5d8e107e-ab0a-43a3-bf2a-11440192f078.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "videoUrl": ""
          }
        ]
        
      },
      {
        "sub_cat_name": "Figma Templates",
        "sub_cat_heading": "The best Figma Templates in 2024",
        "products": [
          {
            "rank": "1",
            "name": "Relume",
            "icon": "https://ph-files.imgix.net/47c001f9-2e78-4e5b-bfcf-d97b12baf5b4.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "Relume — Build Faster, Design Better in Webflow & Figma",
            "description": "Search our library of 1,000+ components, copy with one click and paste them into your Webflow or Figma project. You can also create components for personal use, clients or the Webflow community. Simply paste in components from your Webflow project, save them to a folder and share it to anyone.",
            "productUrl": "https://www.producthunt.com/products/relume/shoutouts",
            "websiteUrl": "https://library.relume.io/",
            "imageUrl1": "https://ph-files.imgix.net/b65cf8be-be74-442d-b350-dbe5538d928f.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl2": "https://ph-files.imgix.net/a7637fd8-d958-4021-bab0-26ff4dc70c96.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl3": "https://ph-files.imgix.net/c79b7490-4faa-48cc-8ad7-da9c379b35e3.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "videoUrl": ""
          },
          {
            "rank": "2",
            "name": "Flowbite",
            "icon": "https://ph-files.imgix.net/8482c47c-c154-4343-8bdd-53f8c4282d9a.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "Flowbite — Open-source ecosystem built on top of Tailwind CSS",
            "description": "Flowbite is an ecosystem of open-source libraries, tools, and products built around Tailwind CSS consisting of a Figma design system, component library, website section and page templates, and other tools.",
            "productUrl": "https://www.producthunt.com/products/flowbite/shoutouts",
            "websiteUrl": "https://flowbite.com/figma",
            "imageUrl1": "https://ph-files.imgix.net/3483107e-a7fe-44c8-8df5-9b3f191d7598.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl2": "https://ph-files.imgix.net/9dadc5cd-85d2-4c7c-add0-f768cd75047f.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl3": "https://ph-files.imgix.net/5354161f-adad-4a3a-bfde-2cc6ee843534.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "videoUrl": ""
          },
          {
            "rank": "3",
            "name": "Polaris for Admin Figma UI kit",
            "icon": "https://ph-files.imgix.net/4ee7be67-1c05-4c06-8845-7306ab362af8.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "Polaris for Admin Figma UI kit — Shopify Polaris UI kit now available in Figma",
            "description": "Our Polaris for Admin Web UI kit is now available in Figma. You can access the full kit in Figma with reusable components and up-to-date Polaris guidelines, icons, and color palette. Find out more at https://figma.com/@shopify and https://polaris.shopify.com",
            "productUrl": "https://www.producthunt.com/products/polaris-for-admin-figma-ui-kit/shoutouts",
            "websiteUrl": "https://figma.com/@shopify",
            "imageUrl1": "https://ph-files.imgix.net/d2e47514-2b83-4ab5-b69a-e2d981b0bb93.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl2": "https://ph-files.imgix.net/df26786b-b197-473e-857b-2f5ce9754300.gif?fm=mp4&crop=max&w=256&h=160&dpr=2#t=0.001",
            "imageUrl3": "https://ph-files.imgix.net/b29001af-bba8-40ed-8d31-f1f94989beab.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "videoUrl": ""
          }
        ]
        
      },
      {
        "sub_cat_name": "Notion Templates",
        "sub_cat_heading": "The best Notion Templates in 2024",
        "products": [
          {
            "rank": "1",
            "name": "Super",
            "icon": "https://ph-files.imgix.net/8cbc145a-5abf-456c-bd2d-2576b74a6c0d.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "Super — Create Websites with Notion",
            "description": "Create a website in less than a minute that’s easy to manage and looks great, with instant page loads, SEO optimization, and no-code. All your content stays in Notion so you can focus on creating while Super handles the rest.",
            "productUrl": "https://www.producthunt.com/products/super-websites/shoutouts",
            "websiteUrl": "https://super.so/",
            "imageUrl1": "https://ph-files.imgix.net/85de9d4c-e48c-478a-8e8f-926a6e7170ac.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl2": "https://ph-files.imgix.net/91d2ca69-5d78-470a-bfdf-299633e7031e.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl3": "https://ph-files.imgix.net/b8b86517-2293-49b0-81c3-744debb38220.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "videoUrl": ""
          }
        ]
       
      },
      {
        "sub_cat_name": "Slack apps",
        "sub_cat_heading": "The best Slack apps in 2024",
        "products": [
          {
            "rank": "1",
            "name": "RocketSim for Xcode",
            "icon": "https://ph-files.imgix.net/ed0e2783-29ad-40d6-aa90-8599937d8a53.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "RocketSim for Xcode — Record the iOS Simulator into MP4 or GIF",
            "description": "Record the iOS Simulator into GIF or MP4 Create a recording from the iOS simulator and export it as GIF or MP4. Directly drag it into Slack, GitHub, Twitter, or any other app. Recording is not all. Organise and launch Universal Links (deeplinks) with ease.",
            "productUrl": "https://www.producthunt.com/products/rocketsim-for-xcode/shoutouts",
            "websiteUrl": "https://www.rocketsim.app/",
            "imageUrl1": "https://ph-files.imgix.net/6259ff45-a27d-4bc3-97f0-08435aebcc1b.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl2": "https://ph-files.imgix.net/b5051fc4-fcef-43f4-9ade-65f39f90fca0.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl3": "https://ph-files.imgix.net/6409a821-cd03-4c03-9863-edd76ae38ee2.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "videoUrl": ""
          },
          {
            "rank": "2",
            "name": "Standuply: Poll & Survey Scrum Bot",
            "icon": "https://ph-files.imgix.net/d2e024f8-11f8-4993-8932-a2b5c3cca9e0.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "Standuply: Poll & Survey Scrum Bot — Project Management Assistant for Slack and MS Teams",
            "description": "Standuply is the #1 Standup Bot. It runs asynchronous stand-up & retrospective meetings, Slack polls, and tracks team performance to automate your Agile processes.",
            "productUrl": "https://www.producthunt.com/products/standuply/shoutouts",
            "websiteUrl": "http://standuply.com/",
            "imageUrl1": "https://ph-files.imgix.net/e32eed9c-3799-40f1-b4d1-2ac692e45072.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl2": "https://ph-files.imgix.net/48dd9a53-35ca-4d79-92b9-d5fa03ca79d0.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl3": "https://ph-files.imgix.net/377dc98b-32fa-44fd-aac2-f41b607786d5.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "videoUrl": ""
          },
          {
            "rank": "3",
            "name": "ChatBotKit",
            "icon": "https://ph-files.imgix.net/98500024-bbc4-4a50-a532-67abb3dd00c0.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "ChatBotKit — The fastest way to build advanced AI chat bots",
            "description": "ChatBotKit helps you create conversational AI chatbots with your own data to communicate naturally with users on your website, Slack, and Discord.",
            "productUrl": "https://www.producthunt.com/products/chatbotkit/shoutouts",
            "websiteUrl": "https://chatbotkit.com/",
            "imageUrl1": "https://ph-files.imgix.net/c4818c14-2cd4-4841-b3ad-b20553bb2ee7.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl2": "https://ph-files.imgix.net/4eb87a7f-3b9c-4fff-8fee-8aff46cb112d.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl3": "https://ph-files.imgix.net/e48784e4-8b27-43fb-83ec-2c9f67bd5147.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "videoUrl": ""
          },
          {
            "rank": "4",
            "name": "Jibble",
            "icon": "https://ph-files.imgix.net/cc11264b-69f6-4f8d-95bc-319a606461e1.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "Jibble — TRACK TIME & ATTENDANCE FOR YOUR SLACK TEAM",
            "description": "jibble.io was first indexed by Google in September 2016",
            "productUrl": "https://www.producthunt.com/products/jibble/shoutouts",
            "websiteUrl": "http://www.jibble.io/",
            "imageUrl1": "https://ph-files.imgix.net/7d9d22ca-b31c-432f-9b5f-03566f18e071.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl2": "https://ph-files.imgix.net/3f1f9f35-0638-4bc7-a1fa-dc46551415b3.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl3": "https://ph-files.imgix.net/3122a49e-4e3d-4ae4-8997-1a19c1ed3fd6.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "videoUrl": ""
          },
          {
            "rank": "5",
            "name": "Karmabot",
            "icon": "https://ph-files.imgix.net/4dd05943-c165-41a7-95eb-3cf85416f3a3.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "Karmabot — Peer recognition and appreciation for business chats",
            "description": "Praise, values, rewards, reports, surveys, mini-games, onboardings and 1-on-1s automated. Karma brings true bonding to remote teams. You can build stronger, happier teams on Slack and MS Teams, set goals, track performance and reward excellence.",
            "productUrl": "https://www.producthunt.com/products/karmabot/shoutouts",
            "websiteUrl": "https://karmabot.chat/",
            "imageUrl1": "https://ph-files.imgix.net/a18e5789-fcdb-401a-b213-190431d439fc.gif?fm=mp4&crop=max&w=256&h=160&dpr=2#t=0.001",
            "imageUrl2": "https://ph-files.imgix.net/b92e185a-344e-4d44-be0c-836480536ea8.gif?fm=mp4&crop=max&w=256&h=160&dpr=2#t=0.001",
            "imageUrl3": "https://ph-files.imgix.net/19a0b3a1-ecb2-4d0c-8bed-a22882ef0aa4.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "videoUrl": ""
          },
          {
            "rank": "6",
            "name": "Billy (birthday bot for Slack)",
            "icon": "https://ph-files.imgix.net/294a07d2-7039-445e-ab71-89fb51bdf139.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "Billy (birthday bot for Slack) — Never forget a teammate's birthday again",
            "description": "🎉 Automates birthday and work anniversary celebrations in Slack. 🎉 Join thousands of companies who brought fun into their workplace. Install now for free (in less than 30s ⚡️)",
            "productUrl": "https://www.producthunt.com/products/billy-birthday-bot-for-slack/shoutouts",
            "websiteUrl": "https://billybirthday.com/",
            "imageUrl1": "https://ph-files.imgix.net/73d9d622-f47e-4b22-8341-ec8b55d86c53.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl2": "https://ph-files.imgix.net/ea37e6db-43bb-4a2e-bc7d-f76c97a72c48.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl3": "https://ph-files.imgix.net/21f5a588-4f89-48d3-8de9-d037f984407d.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "videoUrl": ""
          },
          {
            "rank": "7",
            "name": "Alfy",
            "icon": "https://ph-files.imgix.net/918d10ab-6b2c-4561-bdcc-8835033549a3.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "Alfy — Random Coffee App for Slack",
            "description": "The simplest and most-affordable random coffee app for Slack. Alfy is a must-have for every remote/hybrid company. Made with love by BuddiesHR.com 💜",
            "productUrl": "https://www.producthunt.com/products/alfy/shoutouts",
            "websiteUrl": "https://buddieshr.com/alfy",
            "imageUrl1": "https://ph-files.imgix.net/83114339-6cfd-4acf-8c16-ae6a65a0148f.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl2": "https://ph-files.imgix.net/9969f4ea-62db-4041-8e33-7243e4ce8a2a.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl3": "https://ph-files.imgix.net/41046ace-c572-420e-b02c-eb494d8f8af7.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "videoUrl": ""
          }
        ]
        
      },
      {
        "sub_cat_name": "Twitter apps",
        "sub_cat_heading": "The best Twitter apps in 2024",
        "products": [
          {
            "rank": "1",
            "name": "Typefully 2.0",
            "icon": "https://ph-files.imgix.net/fc9be527-b179-4e6a-8046-046df8e25bf4.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "Typefully 2.0 — Effortlessly publish your content",
            "description": "Write and improve your content with AI. Grow your audience across Twitter and LinkedIn. Become more productive with a Command Bar.",
            "productUrl": "https://www.producthunt.com/products/typefully-2-0/shoutouts",
            "websiteUrl": "https://typefully.com/",
            "imageUrl1": "",
            "imageUrl2": "",
            "imageUrl3": "",
            "videoUrl": ""
          },
          {
            "rank": "2",
            "name": "Twitter",
            "icon": "https://ph-files.imgix.net/ffd43e31-ce84-466a-a5c1-c53bcbd398e5.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "Twitter — Communicate and stay connected",
            "description": "Twitter brings you closer to what you care about.",
            "productUrl": "https://www.producthunt.com/products/twitter/shoutouts",
            "websiteUrl": "https://www.twitter.com/",
            "imageUrl1": "https://ph-files.imgix.net/ffcf123c-0325-4a26-bbb9-ff6d32dec66d.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl2": "https://ph-files.imgix.net/27536c5e-ea3e-4632-9c6d-6f5ddf103534.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl3": "https://ph-files.imgix.net/c07b1bfd-6237-46d6-aa57-39829acd0cb6.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "videoUrl": ""
          },
          {
            "rank": "3",
            "name": "RocketSim for Xcode",
            "icon": "https://ph-files.imgix.net/ed0e2783-29ad-40d6-aa90-8599937d8a53.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "RocketSim for Xcode — Record the iOS Simulator into MP4 or GIF",
            "description": "Record the iOS Simulator into GIF or MP4 Create a recording from the iOS simulator and export it as GIF or MP4. Directly drag it into Slack, GitHub, Twitter, or any other app. Recording is not all. Organise and launch Universal Links (deeplinks) with ease.",
            "productUrl": "https://www.producthunt.com/products/rocketsim-for-xcode/shoutouts",
            "websiteUrl": "https://www.rocketsim.app/",
            "imageUrl1": "https://ph-files.imgix.net/6259ff45-a27d-4bc3-97f0-08435aebcc1b.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl2": "https://ph-files.imgix.net/b5051fc4-fcef-43f4-9ade-65f39f90fca0.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl3": "https://ph-files.imgix.net/6409a821-cd03-4c03-9863-edd76ae38ee2.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "videoUrl": ""
          },
          {
            "rank": "4",
            "name": "BrandBird",
            "icon": "https://ph-files.imgix.net/ffaf1907-e70a-4208-adb4-2dbdc58f4a52.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "BrandBird — Turn screenshots into beautiful social media images & posts",
            "description": "Create beautiful images for Twitter, Instagram, Dribbble, LinkedIn, and boost your social media views & engagement in seconds. BrandBird allows you to brand your accounts uniquely by creating templates, adding your brand colors, and your personal watermark!",
            "productUrl": "https://www.producthunt.com/products/brandbird/shoutouts",
            "websiteUrl": "https://www.brandbird.app/",
            "imageUrl1": "",
            "imageUrl2": "https://ph-files.imgix.net/c7494e2e-9c70-4779-b1c2-53d83b1f41d5.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl3": "https://ph-files.imgix.net/56820092-f44d-4a28-8cfc-f51be23ac261.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "videoUrl": "https://youtu.be/YFB_xIKfXjc"
          },
          {
            "rank": "5",
            "name": "Typefully",
            "icon": "https://ph-files.imgix.net/d0bb79f4-dead-4c5c-b6d6-c4d584394a00.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "Typefully — Write, schedule, and publish great Twitter threads.",
            "description": "Write, schedule & publish great threads, without distractions — and boost your Twitter growth with powerful analytics.",
            "productUrl": "https://www.producthunt.com/products/typefully/shoutouts",
            "websiteUrl": "https://typefully.app/",
            "imageUrl1": "https://ph-files.imgix.net/481c6685-a41d-4242-9d71-c8d8cbe726f0.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl2": "https://ph-files.imgix.net/3d85a53e-b9e2-4bb0-a6b6-3508bfad06af.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl3": "https://ph-files.imgix.net/5e41ed46-d62d-4206-844a-9019719ecb58.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "videoUrl": ""
          },
          {
            "rank": "6",
            "name": "Buffer",
            "icon": "https://ph-files.imgix.net/87ae88d0-2d31-4823-96a3-7aa7d92b280e.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=14&h=14&fit=crop",
            "title": "Buffer — Make your business stand out and reach more customers on social media",
            "description": "Buffer is a software application for the web and mobile, designed to manage accounts in social networks.",
            "productUrl": "https://www.producthunt.com/products/buffer/shoutouts",
            "websiteUrl": "http://buffer.com/",
            "imageUrl1": "",
            "imageUrl2": "https://ph-files.imgix.net/00d9303a-a2d5-45ad-a96c-57e901e9ebe1.webp?fm=mp4&crop=max&w=256&h=160&dpr=2#t=0.001",
            "imageUrl3": "https://ph-files.imgix.net/a54f6e00-6e86-4a1a-9c6d-f3b9d141194f.webp?fm=mp4&crop=max&w=256&h=160&dpr=2#t=0.001",
            "videoUrl": "https://youtu.be/bOFf1h5pOY0"
          }
        ]
       
      },
      {
        "sub_cat_name": "Wordpress Plugins",
        "sub_cat_heading": "The best Wordpress Plugins in 2024",
        "products": [
          {
            "rank": "1",
            "name": "Elementor",
            "icon": "https://ph-files.imgix.net/6f8d05f2-a10f-4337-8a91-0fbcd54a267f.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=14&h=14&fit=crop",
            "title": "Elementor — The World's Leading WordPress Website Builder",
            "description": "Elementor is the best FREE WordPress Page Builder, with over 3 million active installs. Create beautiful websites using a simple drag and drop interface.",
            "productUrl": "https://www.producthunt.com/products/elementor/shoutouts",
            "websiteUrl": "https://elementor.com/",
            "imageUrl1": "",
            "imageUrl2": "https://ph-files.imgix.net/07bb8172-6ec5-4796-a7e5-685d27734a52.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl3": "https://ph-files.imgix.net/5e3af3c4-20a9-4fec-a6de-36e20cfff829.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "videoUrl": "https://youtu.be/kdINK9EREXc"
          },
          {
            "rank": "2",
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
            "rank": "3",
            "name": "WordPress Playground",
            "icon": "https://ph-files.imgix.net/1a847381-7751-4536-b652-3b486107b1b7.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "WordPress Playground — Experience a WordPress that runs entirely in your browser!",
            "description": "Explore, experiment, and play with WordPress—no setup required! WordPress Playground is a flexible tool that lets you: Try plugins and themes in a live virtual environment Experiment with an anonymous WordPress website",
            "productUrl": "https://www.producthunt.com/products/wordpress-playground/shoutouts",
            "websiteUrl": "https://developer.wordpress.org/playground/demo/https:",
            "imageUrl1": "https://ph-files.imgix.net/4f1745b0-8da1-4515-b996-b96f5cea9957.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl2": "https://ph-files.imgix.net/13d4c14f-4b5b-44ea-8846-7d8d569bee5b.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl3": "https://ph-files.imgix.net/6a2d8e64-6b08-4e76-83e9-4a26fa61a634.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "videoUrl": ""
          }
        ]
        
      },
      {
        "sub_cat_name": "Wordpress themes",
        "sub_cat_heading": "The best Wordpress themes in 2024",
        "products": [
          {
            "rank": "1",
            "name": "Elementor",
            "icon": "https://ph-files.imgix.net/6f8d05f2-a10f-4337-8a91-0fbcd54a267f.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=14&h=14&fit=crop",
            "title": "Elementor — The World's Leading WordPress Website Builder",
            "description": "Elementor is the best FREE WordPress Page Builder, with over 3 million active installs. Create beautiful websites using a simple drag and drop interface.",
            "productUrl": "https://www.producthunt.com/products/elementor/shoutouts",
            "websiteUrl": "https://elementor.com/",
            "imageUrl1": "",
            "imageUrl2": "https://ph-files.imgix.net/07bb8172-6ec5-4796-a7e5-685d27734a52.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl3": "https://ph-files.imgix.net/5e3af3c4-20a9-4fec-a6de-36e20cfff829.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "videoUrl": "https://youtu.be/kdINK9EREXc"
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
  
      // Insert sub-categories
      for (const sub_category of data.category.sub_categories) {
        await client.query(
          `INSERT INTO Sub_Category (sub_cat_name, sub_cat_heading, cat_id) VALUES ($1, $2, $3)`,
          [sub_category.sub_cat_name, sub_category.sub_cat_heading, cat_id]
        );
      }
  
      console.log("Data inserted successfully");
    } catch (err) {
      console.error("Error inserting data", err);
    } finally {
      await client.end();
    }
  };
  
  insertData();