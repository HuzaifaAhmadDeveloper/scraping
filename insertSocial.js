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
    "cat_name": "Social and Community",
    "cat_heading": "The best Social and Community in 2024",
    "sub_categories": [
      {
        "sub_cat_name": "Blogging platforms",
        "sub_cat_heading": "The best Blogging platforms in 2024",
        "products": [
          {
            "rank": "1",
            "name": "Shipixen",
            "icon": "https://ph-files.imgix.net/7773976d-e914-4046-91b1-154f91680d94.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "Shipixen — Create a blog & landing page in minutes",
            "description": "Create a production-ready landing page & blog with your branding, theme & pages. You get the code & an SEO-optimized website so you can focus on building, not setting up.",
            "productUrl": "https://www.producthunt.com/products/shipixen/shoutouts",
            "websiteUrl": "https://shipixen.com/",
            "imageUrl1": "https://ph-files.imgix.net/38dae5bc-b2af-43a7-94a9-9f9e814d4c3f.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl2": "https://ph-files.imgix.net/22a5d0e4-7476-49fc-82a7-9e30178c66ed.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl3": "https://ph-files.imgix.net/7c2f160d-dc90-43f9-9354-52a69fa9b663.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "videoUrl": ""
          },
          {
            "rank": "2",
            "name": "WordPress",
            "icon": "https://ph-files.imgix.net/2b33c6b3-be3a-47c4-9dff-6bb8f878e607.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "WordPress — WordPress is open source software you can use to create a beautiful website, blog, or app.",
            "description": "Trusted by the Best. 43% of the web uses WordPress, from hobby blogs to the biggest news sites online.",
            "productUrl": "https://www.producthunt.com/products/wordpress/shoutouts",
            "websiteUrl": "",
            "imageUrl1": "",
            "imageUrl2": "",
            "imageUrl3": "",
            "videoUrl": ""
          },
          {
            "rank": "3",
            "name": "Ghost",
            "icon": "https://ph-files.imgix.net/c5e674f4-3077-4976-bfe3-55064e647e74.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "Ghost — Publish online, build a business, work from home",
            "description": "The world's most popular modern open source publishing platform. A headless Node.js CMS used by Apple, Sky News, Tinder and thousands more. MIT licensed, with 30k+ stars on Github.",
            "productUrl": "https://www.producthunt.com/products/ghost/shoutouts",
            "websiteUrl": "http://ghost.org/",
            "imageUrl1": "https://ph-files.imgix.net/a61f307c-b184-4fb0-b887-bd008cc7b8a7.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl2": "https://ph-files.imgix.net/a1d3fdb6-8f7f-43df-b472-59f4a3c017ad.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl3": "https://ph-files.imgix.net/f91bcadc-6704-48aa-9f61-2a11f4168101.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "videoUrl": ""
          },
          {
            "rank": "4",
            "name": "AI URL to Video",
            "icon": "https://ph-files.imgix.net/ab9d8a23-beb8-4b4e-b8c7-6ece26fe3c1f.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "AI URL to Video — Turn any text content from URL into videos with one click",
            "description": "FlexClip AI URL to Video plugin turns online content or news into personalized videos with a 10x efficiency boost using AI. Perfect for bloggers and creators to boost impact and engagement for their content.",
            "productUrl": "https://www.producthunt.com/products/ai-url-to-video/shoutouts",
            "websiteUrl": "https://chromewebstore.google.com/detail/flexclip-ai-url-to-video/nkhcnkgodkchhoeebpolddblmoijkffn",
            "imageUrl1": "https://ph-files.imgix.net/80491841-5f3f-4365-a254-d9ff30361d2c.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl2": "https://ph-files.imgix.net/f3782b33-675f-440e-b988-abc854c3c06d.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl3": "https://ph-files.imgix.net/b7d37977-5bc3-4d8a-a3b2-00be3b4f25d6.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "videoUrl": ""
          },
          {
            "rank": "5",
            "name": "Bublr",
            "icon": "https://ph-files.imgix.net/1df8c15b-92c2-4a89-bfdf-52584936c711.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "Bublr — An ultra-minimal platform to let your thoughts out",
            "description": "Embrace catharsis with our minimalist platform, a safe haven for your highs and lows. Share thoughts anonymously or unmasked, celebrating the essence of you. Your voice, your choice. Bublr, made by people, for the people.",
            "productUrl": "https://www.producthunt.com/products/the-abyss/shoutouts",
            "websiteUrl": "https://bublr.life/",
            "imageUrl1": "https://ph-files.imgix.net/1d2114e8-ca80-4a21-9f96-44aaf85132a0.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl2": "https://ph-files.imgix.net/ca74e2d9-fdbe-48bb-a774-fb3e4151f922.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl3": "https://ph-files.imgix.net/2353a952-dab0-4459-a8e3-fe7f7aa3e632.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "videoUrl": ""
          },
          {
            "rank": "6",
            "name": "Ko-fi.com",
            "icon": "https://ph-files.imgix.net/42ce2324-17d8-4dea-a428-8f950f7196e2.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=14&h=14&fit=crop",
            "title": "Ko-fi.com — Fund Your Passions.",
            "description": "Ko-fi is an online platform which helps creators such as illustrators, podcasters and bloggers receive financial support from fans of their work.",
            "productUrl": "https://www.producthunt.com/products/ko-fi-com/shoutouts",
            "websiteUrl": "https://ko-fi.com/",
            "imageUrl1": "",
            "imageUrl2": "",
            "imageUrl3": "",
            "videoUrl": ""
          }
        ]
        
      },
      {
        "sub_cat_name": "Community management",
        "sub_cat_heading": "The best Community management in 2024",
        "products": [
          {
            "rank": "1",
            "name": "Product Hunt",
            "icon": "https://ph-files.imgix.net/d618ea86-70ae-4d12-8ec2-0ed78c723ddf.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "Product Hunt — The place to discover your next favorite thing.",
            "description": "Founded in 2013 as a tiny side project, Product Hunt has become the place for makers and companies to launch their latest app, gadget, or physical products to the world. It's a global community of friendly folks sharing and discussing the latest in tech.",
            "productUrl": "https://www.producthunt.com/products/product-hunt/shoutouts",
            "websiteUrl": "https://producthunt.com/",
            "imageUrl1": "https://ph-files.imgix.net/ac3abba7-db07-4f98-8b71-e86dc048fd6d.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl2": "https://ph-files.imgix.net/f94b58ce-009f-4fd6-8b1f-a6481f090ec4.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl3": "https://ph-files.imgix.net/f028ccfc-9695-4d5e-9032-26a7dca7b0d1.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "videoUrl": ""
          },
          {
            "rank": "2",
            "name": "Circle",
            "icon": "https://ph-files.imgix.net/99901859-6f81-4d81-b7a0-40dce2644641.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=14&h=14&fit=crop",
            "title": "Circle — The all-in-one community platform for creators",
            "description": "Bring together your discussions, memberships, and content. Integrate a thriving community wherever your audience is, all under your own brand.",
            "productUrl": "https://www.producthunt.com/products/circle-9/shoutouts",
            "websiteUrl": "https://circle.so/",
            "imageUrl1": "https://ph-files.imgix.net/d0920ccf-f4a3-4b0c-82b4-4e4fdd6b2566.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl2": "https://ph-files.imgix.net/879a86e3-cc22-4cd6-b392-e9eadd45838b.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl3": "https://ph-files.imgix.net/6b866e5d-85bf-4393-a651-468fab765e80.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "videoUrl": ""
          },
          {
            "rank": "3",
            "name": "Discourse",
            "icon": "https://ph-files.imgix.net/bcc85027-9c41-47a3-8682-59b047b2194f.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "Discourse — Civilized discussion for your community",
            "description": "Discourse is an open source Internet forum and mailing list management software application founded in 2013 by Jeff Atwood, Robin Ward, and Sam Saffron.",
            "productUrl": "https://www.producthunt.com/products/discourse/shoutouts",
            "websiteUrl": "http://www.discourse.org/",
            "imageUrl1": "https://ph-files.imgix.net/dbde5970-2b76-4347-a934-da6ff67fb788.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl2": "",
            "imageUrl3": "",
            "videoUrl": ""
          },
          {
            "rank": "4",
            "name": "Morning Toasts - Business & Tech AI News",
            "icon": "https://ph-files.imgix.net/b184c1b8-c945-45fd-96d6-5d8ef1ce93fb.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "Morning Toasts - Business & Tech AI News — World's First Business and Tech AI News Portal",
            "description": "Stay ahead with Morning Toasts, the world's first AI Business & Tech news portal. Daily, concise updates in just 5 minutes, curated by experts for the latest, relevant insights. Effortlessly stay informed and ahead in technology and business.",
            "productUrl": "https://www.producthunt.com/products/morning-toasts-business-tech-ai-news/shoutouts",
            "websiteUrl": "https://morningtoasts.com/",
            "imageUrl1": "https://ph-files.imgix.net/ea4f04b8-f5a8-462b-8ae7-2c1e233cdcd8.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl2": "https://ph-files.imgix.net/2c446b9f-9ced-4466-90a5-8c1b6cf5b29a.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl3": "https://ph-files.imgix.net/9d0c5080-99c2-41c3-8bd6-08a0a46548af.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "videoUrl": ""
          },
          {
            "rank": "5",
            "name": "Intros.ai",
            "icon": "https://ph-files.imgix.net/ad462085-d7ad-432a-828d-a9e2419fbbc5.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "Intros.ai — Boost community engagement by automating interactions.",
            "description": "",
            "productUrl": "https://www.producthunt.com/products/intros-ai/shoutouts",
            "websiteUrl": "https://www.intros.ai/",
            "imageUrl1": "",
            "imageUrl2": "",
            "imageUrl3": "",
            "videoUrl": ""
          },
          {
            "rank": "6",
            "name": "Featurebase",
            "icon": "https://ph-files.imgix.net/ef204391-f54c-42e6-ad3e-fa48e79bc004.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "Featurebase — Free public feedback board for your project",
            "description": "Featurebase helps you understand what ideas or problems your customers have about your product and, therefore, helps you steer your startup in the right direction. You can capture all their feedback, bug reports and feature requests on a public board.",
            "productUrl": "https://www.producthunt.com/products/featurebase/shoutouts",
            "websiteUrl": "https://featurebase.app/",
            "imageUrl1": "",
            "imageUrl2": "",
            "imageUrl3": "",
            "videoUrl": ""
          },
          {
            "rank": "7",
            "name": "Buy Me a Coffee",
            "icon": "https://ph-files.imgix.net/1b273555-0240-4583-b16d-fe3a0810a9f9.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "Buy Me a Coffee — A supporter is worth a thousand followers",
            "description": "Buy Me a Coffee is a beautiful way for creators to accept one-time and monthly support from their fans. Without stitching together a bunch of apps like Patreon, Mailchimp, and a donate button — you can accept support, memberships, and build a direct relationship with your fans. Your fans are going to love it.",
            "productUrl": "https://www.producthunt.com/products/buy-me-a-coffee/shoutouts",
            "websiteUrl": "https://www.buymeacoffee.com/",
            "imageUrl1": "https://ph-files.imgix.net/9bef7002-3475-4462-bd16-2ddcecbd5779.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl2": "https://ph-files.imgix.net/bf8b2df0-e313-4f04-9645-e93212e90cf9.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl3": "",
            "videoUrl": ""
          },
          {
            "rank": "8",
            "name": "CodePen",
            "icon": "https://ph-files.imgix.net/f407ca6a-a6b6-4ab1-88c7-cf62e8114351.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "CodePen — Demo or it didn't happen.",
            "description": "CodePen is a social development environment for front-end designers and developers. Build and deploy a website, show off your work, build test cases to learn and debug, and find inspiration. CodePen is a playground for the front end side of the web. It's all about inspiration, education, and sharing.",
            "productUrl": "https://www.producthunt.com/products/codepen/shoutouts",
            "websiteUrl": "http://codepen.io/",
            "imageUrl1": "https://ph-files.imgix.net/aab2ea86-3dc7-4b4a-8d43-7ada84df609c.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl2": "https://ph-files.imgix.net/213e8684-3d7f-4d30-bf20-b3c4bdd0245f.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl3": "https://ph-files.imgix.net/b16aebda-eac8-41c0-9d8a-17cbf452730b?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "videoUrl": ""
          },
          {
            "rank": "9",
            "name": "Meetup",
            "icon": "https://ph-files.imgix.net/438af8e8-692c-4cfd-ac4f-1ac08b267074.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "Meetup — Meet new people, do new things",
            "description": "Find Meetup events so you can do more of what matters to you. Or create your own group and meet people near you who share your interests.",
            "productUrl": "https://www.producthunt.com/products/meetup/shoutouts",
            "websiteUrl": "http://www.meetup.com/",
            "imageUrl1": "https://ph-files.imgix.net/c925e0a7-e035-496e-8927-0cc94c339ead.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl2": "https://ph-files.imgix.net/e12772ab-a8a2-4da1-bbde-60b2ad0faf52.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl3": "https://ph-files.imgix.net/1ed8d92b-c1b6-40e8-a79a-629a61329ebb.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "videoUrl": ""
          }
        ]
        
      },
      {
        "sub_cat_name": "Link in bio tools",
        "sub_cat_heading": "The best Link in bio tools in 2024",
        "products": [
          {
            "rank": "1",
            "name": "Dub.co",
            "icon": "https://ph-files.imgix.net/3bb3ea09-8afe-42b0-8545-160370510ec5.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "Dub.co — Short links with superpowers",
            "description": "A link management infrastructure for modern marketing teams.",
            "productUrl": "https://www.producthunt.com/products/dub/shoutouts",
            "websiteUrl": "https://dub.co/",
            "imageUrl1": "https://ph-files.imgix.net/31019773-724e-4fac-98e7-12ff182cc8c1.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl2": "https://ph-files.imgix.net/c2525e84-f627-4054-9a26-3b88124bd0fe.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl3": "https://ph-files.imgix.net/5f79cd53-6634-4380-b478-b763725b0056.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "videoUrl": ""
          },
          {
            "rank": "2",
            "name": "Bento",
            "icon": "https://ph-files.imgix.net/383901b4-d901-45cb-a3c1-60d4abcf4d75.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=14&h=14&fit=crop",
            "title": "Bento — A link in bio, but rich and beautiful. ✨",
            "description": "Your personal page to show everything you are and create. Bento makes it fun and delightful to tell your story by beautifully displaying all your content and links. Show the world who you are and start your journey today.",
            "productUrl": "https://www.producthunt.com/products/bento-22a484ea-84c2-42e5-9739-4bd97b040659/shoutouts",
            "websiteUrl": "https://bento.me/signup",
            "imageUrl1": "https://ph-files.imgix.net/6b1b8de0-3fe0-4ef8-9cc5-3bf0228fb727.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl2": "https://ph-files.imgix.net/c78af76f-6561-4e9f-a6ef-bf821fa2ad0d.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl3": "",
            "videoUrl": ""
          },
          {
            "rank": "3",
            "name": "Geniuslink",
            "icon": "https://ph-files.imgix.net/6bea32bc-ca16-4a3b-98c6-73632a56134b.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=14&h=14&fit=crop",
            "title": "Geniuslink — Squeeze more revenue out of every link you share",
            "description": "Geniuslink makes localizing, tracking, and managing smart links dead simple, so you can earn more without added work. Get the most out of every link with simple and powerful tools that improve conversions and save you time.",
            "productUrl": "https://www.producthunt.com/products/geniuslink-2/shoutouts",
            "websiteUrl": "https://geniuslink.com/",
            "imageUrl1": "https://ph-files.imgix.net/85fa38c3-9041-41cf-8c32-33bc7ac04bcb.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl2": "https://ph-files.imgix.net/c65701e2-11c1-4853-906b-0b92b8c1e717.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl3": "https://ph-files.imgix.net/2df42403-376b-4526-9e00-9c16eab2ba48.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "videoUrl": ""
          },
          {
            "rank": "4",
            "name": "Drupico",
            "icon": "https://ph-files.imgix.net/e6db4274-2740-4a03-8233-17db3c4635fc.vnd.microsoft.icon?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "Drupico — Link management for developers.",
            "description": "All your articles, references, links, bookmarks. One place. Organised. Accessible.",
            "productUrl": "https://www.producthunt.com/products/drupico/shoutouts",
            "websiteUrl": "https://drupico.com/",
            "imageUrl1": "https://ph-files.imgix.net/3d0a2fa2-da21-4798-aae9-cd4cff6ebddf.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl2": "https://ph-files.imgix.net/f9391d64-72df-4350-8a6f-db9bc5c8430a.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl3": "https://ph-files.imgix.net/3b91c9ed-e687-4b28-aee9-70b6647b5000.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "videoUrl": ""
          }
        ]
       
      },
      {
        "sub_cat_name": "Live streaming platforms",
        "sub_cat_heading": "The best Live streaming platforms in 2024",
        "products": [
          {
            "rank": "1",
            "name": "Twitch",
            "icon": "https://ph-files.imgix.net/226cb944-ade1-4740-bb4d-233bd30d682f.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "Twitch — Livestream multiplayer games & esports",
            "description": "Twitch is a video live streaming service operated by Twitch Interactive, a subsidiary of Amazon. Twitch is the world's leading live streaming platform for gamers and the things we love. Watch and chat now with millions of other fans from around the world.",
            "productUrl": "https://www.producthunt.com/products/twitch/shoutouts",
            "websiteUrl": "http://twitch.tv/",
            "imageUrl1": "https://ph-files.imgix.net/1a1e8fbc-00b2-4840-845a-787a5425ad4b.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl2": "https://ph-files.imgix.net/04413e13-0d4a-4837-b7f0-4f1987834850.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl3": "https://ph-files.imgix.net/5f92e81e-ec5a-4f4f-93bd-84617fb79b32.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "videoUrl": ""
          },
          {
            "rank": "2",
            "name": "StreamYard",
            "icon": "https://ph-files.imgix.net/135e55ee-a739-450c-9cc0-d9ee1c468110.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "StreamYard — The easiest way to create professional live streams",
            "description": "StreamYard is a live streaming studio in your browser. Interview guests, brand your broadcast, and much more. Stream directly to Facebook, YouTube, LinkedIn, and other platforms.",
            "productUrl": "https://www.producthunt.com/products/streamyard/shoutouts",
            "websiteUrl": "https://streamyard.com/",
            "imageUrl1": "https://ph-files.imgix.net/68168793-fa61-4f75-81ca-3af75eebb88a.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl2": "https://ph-files.imgix.net/067f268f-29e6-45b3-9637-4134052c7421.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl3": "https://ph-files.imgix.net/92cd77c5-e750-4a4b-8bf7-9fbb51001fdf.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "videoUrl": ""
          },
          {
            "rank": "3",
            "name": "Tawk.to",
            "icon": "https://ph-files.imgix.net/1c69311f-92af-44fe-b6fb-6f193ddba9ea.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "Tawk.to — Awesome FREE live chat app for your website",
            "description": "Tawk.to is a powerful and feature-rich live chat and messaging platform that enables businesses to engage with their website visitors and customers in real-time. With its user-friendly interface and extensive functionality, Tawk.to revolutionizes customer communication by providing a seamless and efficient way to connect and interact.",
            "productUrl": "https://www.producthunt.com/products/tawk-to/shoutouts",
            "websiteUrl": "https://www.tawk.to/",
            "imageUrl1": "https://ph-files.imgix.net/fe32820d-4b87-47e3-80a7-7e14145bb9b0.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl2": "https://ph-files.imgix.net/18d8c3b7-4aab-4bcc-82ec-70c06653242d.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl3": "https://ph-files.imgix.net/5705bc96-1672-4443-aeec-36b317be8c4f.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "videoUrl": ""
          },
          {
            "rank": "4",
            "name": "Tidio",
            "icon": "https://ph-files.imgix.net/4f20794e-caf1-49f9-a46f-0f5e973ab6ae.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "Tidio — Tidio- live chat boosted with bots",
            "description": "Tidio Live Chat is a live chat service which allows you to communicate with your customers easily, also with the help of chatbots. A feature-rich free version with paid upgrades available pending your need.",
            "productUrl": "https://www.producthunt.com/products/tidio-2/shoutouts",
            "websiteUrl": "https://www.tidio.com/",
            "imageUrl1": "https://ph-files.imgix.net/de9abc23-4c9b-41f8-8076-f73af6f81fa9.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl2": "https://ph-files.imgix.net/cff4d678-85ef-464b-ba40-0994ebc29729.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl3": "https://ph-files.imgix.net/3acd3240-4f9d-4999-a04f-a88a0cec0f30.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "videoUrl": ""
          }
        ]
        
      },
      {
        "sub_cat_name": "Messaging apps",
        "sub_cat_heading": "The best Messaging apps in 2024",
        "products": [
          {
            "rank": "1",
            "name": "Slack",
            "icon": "https://ph-files.imgix.net/2f06cf02-5fa1-4b17-8246-8b4499d50e33.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "Slack — Team communication and collaboration platform",
            "description": "Slack is an application that helps teams communicate and work together by combining messaging, file sharing, and app integrations in one place. It makes it easy for teams to stay connected and work efficiently, whether they are in the office or working remotely.",
            "productUrl": "https://www.producthunt.com/products/slack/shoutouts",
            "websiteUrl": "https://slack.com/",
            "imageUrl1": "https://ph-files.imgix.net/28da28a1-40cf-4eb1-bedf-203d8a3e63de.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl2": "https://ph-files.imgix.net/c0c63ac8-9ab0-47f5-8b70-a65c5795d22e.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl3": "https://ph-files.imgix.net/c32461c2-e961-4d4c-8776-d93d8d997f4d.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "videoUrl": ""
          },
          {
            "rank": "2",
            "name": "Discord",
            "icon": "https://ph-files.imgix.net/669179de-f4dd-42da-92bd-a1238fbc2073.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "Discord — A platform to talk and hang out",
            "description": "A voice, video and text communication service used by over a hundred million people to hang out and talk with their friends and communities.",
            "productUrl": "https://www.producthunt.com/products/discord/shoutouts",
            "websiteUrl": "https://discord.com/",
            "imageUrl1": "",
            "imageUrl2": "",
            "imageUrl3": "",
            "videoUrl": ""
          },
          {
            "rank": "3",
            "name": "Circle",
            "icon": "https://ph-files.imgix.net/99901859-6f81-4d81-b7a0-40dce2644641.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=14&h=14&fit=crop",
            "title": "Circle — The all-in-one community platform for creators",
            "description": "Bring together your discussions, memberships, and content. Integrate a thriving community wherever your audience is, all under your own brand.",
            "productUrl": "https://www.producthunt.com/products/circle-9/shoutouts",
            "websiteUrl": "https://circle.so/",
            "imageUrl1": "https://ph-files.imgix.net/d0920ccf-f4a3-4b0c-82b4-4e4fdd6b2566.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl2": "https://ph-files.imgix.net/879a86e3-cc22-4cd6-b392-e9eadd45838b.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl3": "https://ph-files.imgix.net/6b866e5d-85bf-4393-a651-468fab765e80.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "videoUrl": ""
          },
          {
            "rank": "4",
            "name": "Telegram 4.7",
            "icon": "https://ph-files.imgix.net/ffb82f9d-697d-4b9f-8c05-5a5c34b39af5.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "Telegram 4.7 — Cloud-based, secure messaging app",
            "description": "Telegram Messenger is a globally accessible freemium, cross-platform, encrypted, cloud-based and centralized instant messaging service.",
            "productUrl": "https://www.producthunt.com/products/telegram-4-7/shoutouts",
            "websiteUrl": "https://itunes.apple.com/app/telegram-messenger/id686449807",
            "imageUrl1": "",
            "imageUrl2": "",
            "imageUrl3": "",
            "videoUrl": ""
          },
          {
            "rank": "5",
            "name": "Discourse",
            "icon": "https://ph-files.imgix.net/bcc85027-9c41-47a3-8682-59b047b2194f.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "Discourse — Civilized discussion for your community",
            "description": "Discourse is an open source Internet forum and mailing list management software application founded in 2013 by Jeff Atwood, Robin Ward, and Sam Saffron.",
            "productUrl": "https://www.producthunt.com/products/discourse/shoutouts",
            "websiteUrl": "http://www.discourse.org/",
            "imageUrl1": "https://ph-files.imgix.net/dbde5970-2b76-4347-a934-da6ff67fb788.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl2": "",
            "imageUrl3": "",
            "videoUrl": ""
          },
          {
            "rank": "6",
            "name": "WhatsApp",
            "icon": "https://ph-files.imgix.net/f10c6d2d-2799-49d1-91ad-d9280879ebc8.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "WhatsApp — The simple, reliable, secure messaging app.",
            "description": "WhatsApp Messenger is a FREE messaging app available for iPhone, Android, and other smartphones. WhatsApp uses your phone's Internet connection (4G/3G/2G/EDGE or Wi-Fi, as available) to let you message and call friends and family. Switch from SMS to WhatsApp to send and receive messages, calls, photos, videos, documents, and Voice Messages.",
            "productUrl": "https://www.producthunt.com/products/whatsapp/shoutouts",
            "websiteUrl": "http://www.whatsapp.com/",
            "imageUrl1": "https://ph-files.imgix.net/fae2707c-dcd8-4c3c-b891-247937af5f35.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl2": "https://ph-files.imgix.net/dd6e3eac-6661-4dee-be2c-8c5c060e8b61.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl3": "https://ph-files.imgix.net/71ddbeaf-a88b-498b-8bd2-503f19361db6.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "videoUrl": ""
          },
          {
            "rank": "7",
            "name": "Socket.IO 2.0",
            "icon": "https://ph-files.imgix.net/2b84056b-dbd5-4460-9e95-80d082d4f64c.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "Socket.IO 2.0 — Featuring the fastest & most reliable real-time engine",
            "description": "Socket.IO enables real-time bidirectional event-based communication. It works on every platform, browser or device, focusing equally on reliability and speed. - Real-time analytics - Instant messaging and chat - Binary streaming - Document collaboration",
            "productUrl": "https://www.producthunt.com/products/socket-io-2-0/shoutouts",
            "websiteUrl": "https://github.com/socketio/socket.io",
            "imageUrl1": "",
            "imageUrl2": "",
            "imageUrl3": "",
            "videoUrl": ""
          },
          {
            "rank": "8",
            "name": "Rock",
            "icon": "https://ph-files.imgix.net/53555233-e091-44fe-ad7f-6f4ad18fc8d9.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "Rock — Instant collaboration for startups, DAOs, and remote teams",
            "description": "Thousands of people and hundreds of startups, DAOs & remote teams use Rock to build, connect & collaborate. With messaging, tasks & all your favorite apps in one space, Rock is built for how we work today. Connect with anyone, start rocking within seconds.",
            "productUrl": "https://www.producthunt.com/products/rock/shoutouts",
            "websiteUrl": "https://www.rock.so/",
            "imageUrl1": "https://ph-files.imgix.net/92bc1be0-2b27-424f-8c65-bc71abfe4fd0.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl2": "https://ph-files.imgix.net/1021e49d-6ca2-4c96-9f55-42b1b426053b.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl3": "https://ph-files.imgix.net/9a9430c7-dc36-42aa-aeba-9ddcddadda0c.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "videoUrl": ""
          },
          {
            "rank": "9",
            "name": "Coze",
            "icon": "https://ph-files.imgix.net/814d5f70-be1a-43cb-a33b-87d550f999a9.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "Coze — The easiest way to build AI bots",
            "description": "Coze is a no-code AI bot builder. Whether you have coding experience or not, you can quickly turn your bot ideas into reality. Build powerful bots powered by Large Language Models, and publish them to various messaging apps like Discord, Telegram or Slack.",
            "productUrl": "https://www.producthunt.com/products/coze/shoutouts",
            "websiteUrl": "https://www.coze.com/",
            "imageUrl1": "https://ph-files.imgix.net/0d75cc7d-8cef-4825-962b-957f77f563e2.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl2": "https://ph-files.imgix.net/d3265aaf-3e12-49d4-bd05-98ecf0b799fd.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl3": "https://ph-files.imgix.net/ceca9f39-c613-40dd-8c6c-8d6b8adbcf28.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "videoUrl": ""
          },
          {
            "rank": "10",
            "name": "HEY",
            "icon": "https://ph-files.imgix.net/1afd4142-399f-40a3-8da0-705c3c02dbfc.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "HEY — Email at its best, new from Basecamp",
            "description": "Email sucked for years. Not anymore — we fixed it. HEY’s fresh approach transforms email into something you want to use, not something you’re forced to deal with.",
            "productUrl": "https://www.producthunt.com/products/hey/shoutouts",
            "websiteUrl": "https://hey.com/",
            "imageUrl1": "https://ph-files.imgix.net/ef492f57-7901-43bb-972e-d485608f173f.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl2": "https://ph-files.imgix.net/bd6e0c4e-0bcd-4d71-9e20-f971e4172d18.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl3": "https://ph-files.imgix.net/814d1189-61d1-41ee-9938-2956513626b8.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "videoUrl": ""
          },
          {
            "rank": "11",
            "name": "Android 14",
            "icon": "https://ph-files.imgix.net/6eab1c05-92f8-416b-a19c-a42fc9ec53e8.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "Android 14 — Express yourself, take control, and stay safe",
            "description": "Android 14 is available today on Pixel phones 4A, 5G, and up with phones from Samsung, Nothing, and OnePlus. More supporting will be supporting it later this year.",
            "productUrl": "https://www.producthunt.com/products/android-14/shoutouts",
            "websiteUrl": "https://blog.google/products/android/android-14",
            "imageUrl1": "",
            "imageUrl2": "",
            "imageUrl3": "",
            "videoUrl": ""
          },
          {
            "rank": "12",
            "name": "Chaty",
            "icon": null,
            "title": "Chaty — Connect with your customers on 20+ popular messaging apps",
            "description": "Provide your website visitors' a frictionless customer communication by allowing customers easy access to all the platforms you’re available on improving your customers’ experience and increasing your chances of conversion or sales.",
            "productUrl": "https://www.producthunt.com/products/chaty/shoutouts",
            "websiteUrl": "https://chaty.app/",
            "imageUrl1": "https://ph-files.imgix.net/aceda95a-2b40-4d4e-b02a-e6b18288dec4.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl2": "https://ph-files.imgix.net/135a7097-e584-4fb6-900a-10be806b1d2a.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl3": "https://ph-files.imgix.net/b00d130f-9459-4d86-9b2a-373b68465512.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "videoUrl": ""
          },
          {
            "rank": "13",
            "name": "OneSignal",
            "icon": "https://ph-files.imgix.net/493d793b-3f12-4ed1-856f-bdfb5eac6406.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "OneSignal — The most widely used customer engagement solution",
            "description": "OneSignal is the market-leading customer messaging and engagement solution, offering mobile and web push notifications, in-app messaging, SMS, and email. Our powerful omnichannel platform enables 1M+ businesses to deliver over 10B+ messages daily. Powered by superior architecture, OneSignal is designed to scale with your business and deliver messages more quickly and reliably than the competition.",
            "productUrl": "https://www.producthunt.com/products/onesignal/shoutouts",
            "websiteUrl": "https://onesignal.com/",
            "imageUrl1": "https://ph-files.imgix.net/b631ebc8-91d6-45d7-99d0-6973b7b58174.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl2": "https://ph-files.imgix.net/66da23cb-4a8a-4fb7-86ff-ac8cf0f9d2bb.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl3": "https://ph-files.imgix.net/98c9a62a-3e5f-4d84-b685-90279fb0cbc6.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "videoUrl": ""
          },
          {
            "rank": "14",
            "name": "Tawk.to",
            "icon": "https://ph-files.imgix.net/1c69311f-92af-44fe-b6fb-6f193ddba9ea.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "Tawk.to — Awesome FREE live chat app for your website",
            "description": "Tawk.to is a powerful and feature-rich live chat and messaging platform that enables businesses to engage with their website visitors and customers in real-time. With its user-friendly interface and extensive functionality, Tawk.to revolutionizes customer communication by providing a seamless and efficient way to connect and interact.",
            "productUrl": "https://www.producthunt.com/products/tawk-to/shoutouts",
            "websiteUrl": "https://www.tawk.to/",
            "imageUrl1": "https://ph-files.imgix.net/fe32820d-4b87-47e3-80a7-7e14145bb9b0.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl2": "https://ph-files.imgix.net/18d8c3b7-4aab-4bcc-82ec-70c06653242d.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl3": "https://ph-files.imgix.net/5705bc96-1672-4443-aeec-36b317be8c4f.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "videoUrl": ""
          },
          {
            "rank": "15",
            "name": "twilio",
            "icon": "https://ph-files.imgix.net/161e59aa-e2ef-425a-b636-bbdce6569172.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "twilio — Build the future of communications",
            "description": "Twilio is a cloud communications platform as a service company based in San Francisco, California.Twilio powers the future of business communications. Enabling phones, VoIP, and messaging to be embedded into web, desktop, and mobile software.",
            "productUrl": "https://www.producthunt.com/products/twilio/shoutouts",
            "websiteUrl": "http://www.twilio.com/",
            "imageUrl1": "https://ph-files.imgix.net/fe6f6075-78e0-4c52-8ae4-0f56a6f2146e.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl2": "https://ph-files.imgix.net/20880aba-f21a-448a-9612-9f071c9349e9.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl3": "https://ph-files.imgix.net/429944d7-79f5-42d0-9fc7-d4346113084a.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "videoUrl": ""
          },
          {
            "rank": "16",
            "name": "Zoho Cliq",
            "icon": "https://ph-files.imgix.net/f43e246a-e00e-49c6-a13a-36fc96b75187.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=14&h=14&fit=crop",
            "title": "Zoho Cliq — Business & Team Chat App",
            "description": "Zoho Cliq, a team communication app powers business productivity by organizing people, conversations & workflows in one single place. Sign up now!",
            "productUrl": "https://www.producthunt.com/products/zoho-cliq/shoutouts",
            "websiteUrl": "https://www.zoho.com/cliq",
            "imageUrl1": "https://ph-files.imgix.net/5842a2a8-aa72-4364-8730-c608fb8d30c3.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl2": "https://ph-files.imgix.net/51d06fd1-5b2f-45b3-9ae0-ef89878920e0.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl3": "https://ph-files.imgix.net/8035a097-ea11-45ea-a44b-c3f05c6e7934.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "videoUrl": ""
          },
          {
            "rank": "17",
            "name": "Microsoft Teams",
            "icon": "https://ph-files.imgix.net/1742c916-6cb4-4e88-be43-5b134b360648.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "Microsoft Teams — Microsoft's Slack competitor",
            "description": "Microsoft Teams is the digital hub that brings conversations, content, assignments, and apps together in one place",
            "productUrl": "https://www.producthunt.com/products/microsoft-teams-2/shoutouts",
            "websiteUrl": "http://teams.microsoft.com/",
            "imageUrl1": "https://ph-files.imgix.net/11386aca-4f72-45f2-a7a8-2cc7bfb0d414.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl2": "https://ph-files.imgix.net/bb98b604-acd4-4608-b969-a125f30f295c.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl3": "https://ph-files.imgix.net/25c06fdd-1e26-426a-88b6-cb0ac505f61d.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "videoUrl": ""
          },
          {
            "rank": "18",
            "name": "Web Push Notification Tool",
            "icon": "https://ph-files.imgix.net/8d6c4046-59eb-4a05-a932-b62297f57d64.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "Web Push Notification Tool — web push notification, push notification,",
            "description": "Re-engage users, even when they are offsite on mobile and desktop",
            "productUrl": "https://www.producthunt.com/products/web-push-notification-tool/shoutouts",
            "websiteUrl": "https://www.notifyvisitors.com/product/web-push-notification",
            "imageUrl1": "",
            "imageUrl2": "",
            "imageUrl3": "",
            "videoUrl": ""
          }
        ]
       
      },
      {
        "sub_cat_name": "Microblogging platforms",
        "sub_cat_heading": "The best Microblogging platforms in 2024",
        "products": [
          {
            "rank": "1",
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
            "rank": "2",
            "name": "Threads",
            "icon": "https://ph-files.imgix.net/ec77d93a-9530-4a03-a95a-1450e139cf1f.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "Threads — Share ideas & trends with text",
            "description": "Threads is the platform where communities unite to discuss current interests and upcoming trends. Connect with favorite creators and like-minded individuals to explore shared passions, and share your thoughts, ideas, and creativity.",
            "productUrl": "https://www.producthunt.com/products/threads-an-instagram-app-2/shoutouts",
            "websiteUrl": "https://www.threads.net/",
            "imageUrl1": "https://ph-files.imgix.net/b5595297-f422-4569-9292-12894f84fa82.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl2": "https://ph-files.imgix.net/0347d075-0799-48bd-874f-1ac0f77f2ac1.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl3": "https://ph-files.imgix.net/c5211e78-cd87-4d3d-aa22-26400717356a.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "videoUrl": ""
          }
        ]
        
      },
      {
        "sub_cat_name": "Newsletter platforms",
        "sub_cat_heading": "The best Newsletter platforms in 2024",
        "products": [
          {
            "rank": "1",
            "name": "Morning Toasts - Business & Tech AI News",
            "icon": "https://ph-files.imgix.net/b184c1b8-c945-45fd-96d6-5d8ef1ce93fb.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "Morning Toasts - Business & Tech AI News — World's First Business and Tech AI News Portal",
            "description": "Stay ahead with Morning Toasts, the world's first AI Business & Tech news portal. Daily, concise updates in just 5 minutes, curated by experts for the latest, relevant insights. Effortlessly stay informed and ahead in technology and business.",
            "productUrl": "https://www.producthunt.com/products/morning-toasts-business-tech-ai-news/shoutouts",
            "websiteUrl": "https://morningtoasts.com/",
            "imageUrl1": "https://ph-files.imgix.net/ea4f04b8-f5a8-462b-8ae7-2c1e233cdcd8.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl2": "https://ph-files.imgix.net/2c446b9f-9ced-4466-90a5-8c1b6cf5b29a.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl3": "https://ph-files.imgix.net/9d0c5080-99c2-41c3-8bd6-08a0a46548af.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "videoUrl": ""
          },
          {
            "rank": "2",
            "name": "Listmonk",
            "icon": "https://ph-files.imgix.net/0739c79a-04d4-421b-9691-f5941e3e7445.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "Listmonk — Self-hosted newsletter and mailing list manager",
            "description": "Send e-mail campaigns, newsletters, manage mailing lists, all from a powerful self-hosted dashboard released as a single binary. High performance and feature packed open source app written in Golang, and backed by Postgres. https://listmonk.app/",
            "productUrl": "https://www.producthunt.com/products/listmonk/shoutouts",
            "websiteUrl": "https://github.com/knadh/listmonk",
            "imageUrl1": "https://ph-files.imgix.net/19121564-ca10-460a-9599-2875385431cd.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl2": "https://ph-files.imgix.net/267bc6bb-6871-4419-9a1b-db9a95398ea1.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl3": "https://ph-files.imgix.net/82d4dbc4-f628-41c7-bb4f-3a08603c90ce.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "videoUrl": ""
          },
          {
            "rank": "3",
            "name": "Tedium",
            "icon": "https://ph-files.imgix.net/c381849d-8f9d-45fd-80c3-74380a712d63.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "Tedium — The dull side of the internet (weekly newsletter)",
            "description": "",
            "productUrl": "https://www.producthunt.com/products/tedium/shoutouts",
            "websiteUrl": "http://tedium.co/",
            "imageUrl1": "https://ph-files.imgix.net/9175bede-e188-44fc-9a99-c3b0f3fc345a.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl2": "https://ph-files.imgix.net/3f54fb1a-ee6a-4b8a-9046-3577612f90c6.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl3": "https://ph-files.imgix.net/1dae3ed5-8053-4bf0-9bb7-7d90665a8da7.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "videoUrl": ""
          }
        ]
       
      },
      {
        "sub_cat_name": "Photo sharing",
        "sub_cat_heading": "The best Photo sharing in 2024",
        "products": [
          {
            "rank": "1",
            "name": "Unsplash",
            "icon": "https://ph-files.imgix.net/6a90b081-b506-41f4-9867-170b6e4050a3.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "Unsplash — The internet’s source of freely-usable images",
            "description": "Over 3 million free high-resolution images brought to you by the world’s most generous community of photographers.",
            "productUrl": "https://www.producthunt.com/products/unsplash/shoutouts",
            "websiteUrl": "http://unsplash.com/",
            "imageUrl1": "https://ph-files.imgix.net/fa4f9bd2-bdbf-45af-8a53-fe4572c07f4c.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl2": "https://ph-files.imgix.net/00a136ab-2a03-48fc-8f16-5a3cd7646cde.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl3": "https://ph-files.imgix.net/4d75a42a-43c5-4381-af7f-d80adaad02d7.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "videoUrl": ""
          },
          {
            "rank": "2",
            "name": "WhatsApp",
            "icon": "https://ph-files.imgix.net/f10c6d2d-2799-49d1-91ad-d9280879ebc8.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "WhatsApp — The simple, reliable, secure messaging app.",
            "description": "WhatsApp Messenger is a FREE messaging app available for iPhone, Android, and other smartphones. WhatsApp uses your phone's Internet connection (4G/3G/2G/EDGE or Wi-Fi, as available) to let you message and call friends and family. Switch from SMS to WhatsApp to send and receive messages, calls, photos, videos, documents, and Voice Messages.",
            "productUrl": "https://www.producthunt.com/products/whatsapp/shoutouts",
            "websiteUrl": "http://www.whatsapp.com/",
            "imageUrl1": "https://ph-files.imgix.net/fae2707c-dcd8-4c3c-b891-247937af5f35.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl2": "https://ph-files.imgix.net/dd6e3eac-6661-4dee-be2c-8c5c060e8b61.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl3": "https://ph-files.imgix.net/71ddbeaf-a88b-498b-8bd2-503f19361db6.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "videoUrl": ""
          },
          {
            "rank": "3",
            "name": "Rewind",
            "icon": "https://ph-files.imgix.net/dcb6f7e1-7c36-4de7-b79e-d909fa1135d7.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=14&h=14&fit=crop",
            "title": "Rewind — Freeze and share your memories and unlock them together!",
            "description": "Imagine a world where time locks your best moments made with your friends! Lock your group for 6 months, a year, two – you choose! You share your moments together, but, no one can view them! Once unlocked, feel the joy of reliving those same moments, together!",
            "productUrl": "https://www.producthunt.com/products/rewind-5/shoutouts",
            "websiteUrl": "https://play.google.com/store/apps/details",
            "imageUrl1": "https://ph-files.imgix.net/fadc846d-dc9f-453d-88f1-9e82db325aa6.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl2": "https://ph-files.imgix.net/f323e2bb-a65c-4c34-b8e9-2689aa26cdb3.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl3": "https://ph-files.imgix.net/02d8cf7c-616f-4a2b-8d6c-117c50cb400b.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "videoUrl": ""
          },
          {
            "rank": "4",
            "name": "Instagram",
            "icon": "https://ph-files.imgix.net/fe5239aa-8072-4806-8f9c-4c801bdf6eb6.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=14&h=14&fit=crop",
            "title": "Instagram — We bring you closer to the people and things you love",
            "description": "Instagram is a social networking app that gives its users the ability to easily share pictures and videos with their friends.",
            "productUrl": "https://www.producthunt.com/products/instagram/shoutouts",
            "websiteUrl": "http://instagram.com/",
            "imageUrl1": "https://ph-files.imgix.net/6d98ba5c-548e-4137-9946-b1245deaf98d.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl2": "https://ph-files.imgix.net/e5032a5c-577b-4358-8dc6-00693277ff87.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl3": "https://ph-files.imgix.net/a5fe333b-e695-498e-9159-6cc03ce4f436.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "videoUrl": ""
          },
          {
            "rank": "5",
            "name": "iNaturalist",
            "icon": "https://ph-files.imgix.net/bc17e440-e29d-46b9-a98e-0c628ced7bff.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "iNaturalist — Real life Pokemon - identify/share plants and animals nearby",
            "description": "Pokemon was inspired by the author's childhood memory of running around chasing after rare insects. This app was able to correctly identify the type of the butterfly from a picture of a caterpillar I shared. It's also sponsored by National Geographic",
            "productUrl": "https://www.producthunt.com/products/inaturalist/shoutouts",
            "websiteUrl": "https://apps.apple.com/us/app/inaturalist/id421397028",
            "imageUrl1": "",
            "imageUrl2": "",
            "imageUrl3": "",
            "videoUrl": ""
          }
        ]
       
      },
      {
        "sub_cat_name": "Professional networking platforms",
        "sub_cat_heading": "The best Professional networking platforms in 2024",
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
            "name": "LinkedIn",
            "icon": "https://ph-files.imgix.net/96d6beef-7855-4cae-8dec-cecff48229d5.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "LinkedIn — Connect, apply, and find jobs",
            "description": "Manage your professional identity. Build and engage with your professional network. Access knowledge, insights and opportunities. LinkedIn is an American business and employment-oriented service that operates via websites and mobile apps. Founded on December 28, 2002, and launched on May 5, 2003, it is mainly used for professional networking, including employers posting jobs and job seekers posting their CVs.",
            "productUrl": "https://www.producthunt.com/products/linkedin/shoutouts",
            "websiteUrl": "https://linkedin.com/",
            "imageUrl1": "",
            "imageUrl2": "",
            "imageUrl3": "",
            "videoUrl": ""
          },
          {
            "rank": "3",
            "name": "Proxycurl",
            "icon": "https://ph-files.imgix.net/9a974efe-6ffa-4b9a-875e-bdc343992758.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "Proxycurl — Scrape 1M Linkedin profiles in real-time",
            "description": "Proxycurl's Linkedin API takes a Linkedin Profile and returns scraped structured data of the profile",
            "productUrl": "https://www.producthunt.com/products/proxycurl/shoutouts",
            "websiteUrl": "https://nubela.co/proxycurl/linkedin",
            "imageUrl1": "",
            "imageUrl2": "",
            "imageUrl3": "",
            "videoUrl": ""
          },
          {
            "rank": "4",
            "name": "LinkedIn",
            "icon": "https://ph-files.imgix.net/90491fc5-dace-4f57-b815-365f3100633a.x-icon?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "LinkedIn — LinkedIn Job Search: Find US Jobs, Internships, Jobs Near Me",
            "description": "64% of job seekers get hired through a referral. Use LinkedIn Jobs to boost your chances of getting hired through people you know.",
            "productUrl": "https://www.producthunt.com/products/linkedin-2/shoutouts",
            "websiteUrl": "https://www.linkedin.com/jobs",
            "imageUrl1": "",
            "imageUrl2": "",
            "imageUrl3": "",
            "videoUrl": ""
          },
          {
            "rank": "5",
            "name": "Gated",
            "icon": "https://ph-files.imgix.net/2c8f9d6b-6372-4ccb-8aac-829de8f9967c.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "Gated — One simple link for more signal - less noise.",
            "description": "Professionals, makers, and \"do-ers\" have to be more present on more channels today than ever before. And the more you put yourself out there, the more junk you get back. Gated is one simple link to share what you’re focused on anywhere you’re building your presence online and start conversations about the topics you actually care about. We create tech and A.I. that's on *your* side - protecting your time and keeping you focused on your goals in this noisy digital world.",
            "productUrl": "https://www.producthunt.com/products/gated/shoutouts",
            "websiteUrl": "https://www.gated.com/",
            "imageUrl1": "",
            "imageUrl2": "",
            "imageUrl3": "",
            "videoUrl": ""
          },
          {
            "rank": "6",
            "name": "BuildSpace Sage",
            "icon": "https://ph-files.imgix.net/56d21e5e-06b5-467a-a4c3-826f521be169.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "BuildSpace Sage — the place where people build cool shit",
            "description": "sage is a new place on the internet for builders, makers, & creators to find and be found by the right group of ppl. any idea goes. a hip-hop album, short film, a novel, some indie software, a youtube channel — whatever.",
            "productUrl": "https://www.producthunt.com/products/buildspace-sage/shoutouts",
            "websiteUrl": "https://sage.buildspace.so/",
            "imageUrl1": "",
            "imageUrl2": "",
            "imageUrl3": "",
            "videoUrl": ""
          },
          {
            "rank": "7",
            "name": "SkillShare",
            "icon": "https://ph-files.imgix.net/e1c12cb6-e2ba-48e0-b574-c207e04ad401.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "SkillShare — Start Learning Now with On-Demand Courses",
            "description": "Skillshare.live is the premier destination for free online courses! Whether you’re looking for professional development, personal growth, or just want to explore something new, we’ve got you covered.",
            "productUrl": "https://www.producthunt.com/products/skillshare-2/shoutouts",
            "websiteUrl": "https://www.skillshare.live/",
            "imageUrl1": "https://ph-files.imgix.net/6e7da593-d99e-4384-b723-0b0b3e5d2a10.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl2": "https://ph-files.imgix.net/57fd5cdd-5ec6-48df-bec2-272cc931e2d4.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl3": "https://ph-files.imgix.net/de321eef-86ee-4bfb-a7c7-764a07222657.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "videoUrl": ""
          },
          {
            "rank": "8",
            "name": "Findem",
            "icon": "https://ph-files.imgix.net/8b093985-7aea-4f39-923a-7fec97d3d891.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "Findem — Search for ideal candidates like never before",
            "description": "Findem’s Impossible Search lets you find candidates who have the EXACT attributes you’re looking for in a new hire. We’ve exposed 100+ Impossible Searches for free across different roles, so everyone can experience the magic for themselves!",
            "productUrl": "https://www.producthunt.com/products/findem/shoutouts",
            "websiteUrl": "https://www.findem.ai/#scroll",
            "imageUrl1": "https://ph-files.imgix.net/7b9d8210-a21b-4428-8341-db8890fabed4.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl2": "https://ph-files.imgix.net/9e97ea43-2134-4877-9e79-732201271a3b.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl3": "https://ph-files.imgix.net/6aadb21f-c161-489a-8ed3-60190715c30a.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "videoUrl": ""
          }
        ]
       
      },
      {
        "sub_cat_name": "Safety and Privacy platforms",
        "sub_cat_heading": "The best Safety and Privacy platforms in 2024",
        "products": [
          {
            "rank": "1",
            "name": "Gated",
            "icon": "https://ph-files.imgix.net/2c8f9d6b-6372-4ccb-8aac-829de8f9967c.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "Gated — One simple link for more signal - less noise.",
            "description": "Professionals, makers, and \"do-ers\" have to be more present on more channels today than ever before. And the more you put yourself out there, the more junk you get back. Gated is one simple link to share what you’re focused on anywhere you’re building your presence online and start conversations about the topics you actually care about. We create tech and A.I. that's on *your* side - protecting your time and keeping you focused on your goals in this noisy digital world.",
            "productUrl": "https://www.producthunt.com/products/gated/shoutouts",
            "websiteUrl": "https://www.gated.com/",
            "imageUrl1": "",
            "imageUrl2": "",
            "imageUrl3": "",
            "videoUrl": ""
          },
          {
            "rank": "2",
            "name": "Safari",
            "icon": "https://ph-files.imgix.net/86f6aa96-eb12-4196-a016-a56404eaa5ff.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "Safari — The best way to see the sites.",
            "description": "We built Safari to be the best browser for your Mac, iPhone, and iPad. Built-in privacy features keep your browsing your business. You can stream and search smarter with handy tools that help you save, find, and share your favorite sites. Apple Pay in Safari lets you shop safely and simply. Safari for Mac is faster and more energy efficient than other browsers.",
            "productUrl": "https://www.producthunt.com/products/safari/shoutouts",
            "websiteUrl": "https://www.apple.com/safari",
            "imageUrl1": "https://ph-files.imgix.net/1bc59eb8-ac00-4b7e-880c-0f7aee43ed6b.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl2": "https://ph-files.imgix.net/f00720a8-2f11-4407-9ade-97a4e6166214.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl3": "https://ph-files.imgix.net/f727b5fe-5719-411c-91cb-19dba04feaf8.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "videoUrl": ""
          },
          {
            "rank": "3",
            "name": "Secureframe",
            "icon": "https://ph-files.imgix.net/84ed2728-0087-4906-8bb8-4d56e608fb4d.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "Secureframe — Automated security & privacy compliance (SOC 2/ISO 27001)",
            "description": "Secureframe empowers businesses to build trust with customers by automating information security and compliance. Thousands of fast-growing businesses such as AngelList, Ramp, Remote, and Coda, trust Secureframe to simplify and expedite their compliance journey for global security and privacy standards such as SOC 2, ISO 27001, PCI DSS, HIPAA, GDPR, and more.",
            "productUrl": "https://www.producthunt.com/products/secureframe/shoutouts",
            "websiteUrl": "https://secureframe.com/offer/producthunt",
            "imageUrl1": "https://ph-files.imgix.net/e7c58b7e-441b-4060-82f6-a330f8e2892b.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl2": "https://ph-files.imgix.net/0764d8fc-9c33-4bc6-8251-effab25eed74.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl3": "",
            "videoUrl": ""
          },
          {
            "rank": "4",
            "name": "Brave Private Browser",
            "icon": "https://ph-files.imgix.net/be677203-0a88-4763-8513-73107463a558.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "Brave Private Browser — The browser that rethinks the web.",
            "description": "The Brave Privacy Browser is your fast, free, and safe private web browser with ad blocker and pop-up blocker. Privately browse and search the internet without being tracked by advertisers, malware and pop-ups.",
            "productUrl": "https://www.producthunt.com/products/brave-private-browser/shoutouts",
            "websiteUrl": "https://brave.com/",
            "imageUrl1": "https://ph-files.imgix.net/73da3c74-10b9-46bf-ab82-c17603df4f0d.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl2": "https://ph-files.imgix.net/467d6e49-9477-4256-bf8f-a37426bd9ed4.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl3": "https://ph-files.imgix.net/4fb82470-cd76-439a-920e-73129dab0459.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "videoUrl": ""
          },
          {
            "rank": "5",
            "name": "Cloaked",
            "icon": "https://ph-files.imgix.net/9bfc3f9b-3be8-43fb-8575-a4f437ef59ee.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "Cloaked — Virtual identities to protect your privacy",
            "description": "Cloaked is a people-first privacy app that generates virtual identities to protect your personal data. No one should have to choose between staying connected and personal privacy — with Cloaked, you can try new products, travel, shop, and even meet new people while staying in control of your data. Unique and unlimited phone numbers, passwords, and payments set us apart from other privacy tools and password managers. Go ahead and give them your (Cloaked) info — and say goodbye to spam forever.",
            "productUrl": "https://www.producthunt.com/products/keepitcloaked/shoutouts",
            "websiteUrl": "https://www.cloaked.com/",
            "imageUrl1": "",
            "imageUrl2": "",
            "imageUrl3": "",
            "videoUrl": ""
          }
        ]
       
      },
      {
        "sub_cat_name": "Social bookmarking",
        "sub_cat_heading": "The best Social bookmarking in 2024",
        "products": [
          {
            "rank": "1",
            "name": "Pinterest",
            "icon": "https://ph-files.imgix.net/86dd34a8-8816-425c-a972-549da1d342d1.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "Pinterest — Bringing everyone the inspiration to create a life they love.",
            "description": "Looking for inspiration? Whether you’re designing a home or searching for travel ideas, good ideas start on Pinterest. Explore over 100 billion new ideas for every part of your life, from what haircut to get to what to make for dinner. Create extra storage space in your home, turn an old t-shirt into a stylish dress, or plan your next vacation with Pinterest.",
            "productUrl": "https://www.producthunt.com/products/pinterest/shoutouts",
            "websiteUrl": "http://about.pinterest.com/",
            "imageUrl1": "https://ph-files.imgix.net/de8da9f5-a737-49f5-bd92-7b15208e72a1.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl2": "https://ph-files.imgix.net/2540cd29-e59f-4de5-8b0a-e21d2041669b.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl3": "",
            "videoUrl": ""
          }
        ]
        
      },
      {
        "sub_cat_name": "Social Networking",
        "sub_cat_heading": "The best Social Networking in 2024",
        "products": [
          {
            "rank": "1",
            "name": "Morning Toasts - Business & Tech AI News",
            "icon": "https://ph-files.imgix.net/b184c1b8-c945-45fd-96d6-5d8ef1ce93fb.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "Morning Toasts - Business & Tech AI News — World's First Business and Tech AI News Portal",
            "description": "Stay ahead with Morning Toasts, the world's first AI Business & Tech news portal. Daily, concise updates in just 5 minutes, curated by experts for the latest, relevant insights. Effortlessly stay informed and ahead in technology and business.",
            "productUrl": "https://www.producthunt.com/products/morning-toasts-business-tech-ai-news/shoutouts",
            "websiteUrl": "https://morningtoasts.com/",
            "imageUrl1": "https://ph-files.imgix.net/ea4f04b8-f5a8-462b-8ae7-2c1e233cdcd8.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl2": "https://ph-files.imgix.net/2c446b9f-9ced-4466-90a5-8c1b6cf5b29a.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl3": "https://ph-files.imgix.net/9d0c5080-99c2-41c3-8bd6-08a0a46548af.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "videoUrl": ""
          },
          {
            "rank": "2",
            "name": "LinkedIn",
            "icon": "https://ph-files.imgix.net/96d6beef-7855-4cae-8dec-cecff48229d5.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "LinkedIn — Connect, apply, and find jobs",
            "description": "Manage your professional identity. Build and engage with your professional network. Access knowledge, insights and opportunities. LinkedIn is an American business and employment-oriented service that operates via websites and mobile apps. Founded on December 28, 2002, and launched on May 5, 2003, it is mainly used for professional networking, including employers posting jobs and job seekers posting their CVs.",
            "productUrl": "https://www.producthunt.com/products/linkedin/shoutouts",
            "websiteUrl": "https://linkedin.com/",
            "imageUrl1": "",
            "imageUrl2": "",
            "imageUrl3": "",
            "videoUrl": ""
          },
          {
            "rank": "3",
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
            "rank": "4",
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
            "rank": "5",
            "name": "Pinterest",
            "icon": "https://ph-files.imgix.net/86dd34a8-8816-425c-a972-549da1d342d1.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "Pinterest — Bringing everyone the inspiration to create a life they love.",
            "description": "Looking for inspiration? Whether you’re designing a home or searching for travel ideas, good ideas start on Pinterest. Explore over 100 billion new ideas for every part of your life, from what haircut to get to what to make for dinner. Create extra storage space in your home, turn an old t-shirt into a stylish dress, or plan your next vacation with Pinterest.",
            "productUrl": "https://www.producthunt.com/products/pinterest/shoutouts",
            "websiteUrl": "http://about.pinterest.com/",
            "imageUrl1": "https://ph-files.imgix.net/de8da9f5-a737-49f5-bd92-7b15208e72a1.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl2": "https://ph-files.imgix.net/2540cd29-e59f-4de5-8b0a-e21d2041669b.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl3": "",
            "videoUrl": ""
          },
          {
            "rank": "6",
            "name": "Rewind",
            "icon": "https://ph-files.imgix.net/dcb6f7e1-7c36-4de7-b79e-d909fa1135d7.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=14&h=14&fit=crop",
            "title": "Rewind — Freeze and share your memories and unlock them together!",
            "description": "Imagine a world where time locks your best moments made with your friends! Lock your group for 6 months, a year, two – you choose! You share your moments together, but, no one can view them! Once unlocked, feel the joy of reliving those same moments, together!",
            "productUrl": "https://www.producthunt.com/products/rewind-5/shoutouts",
            "websiteUrl": "https://play.google.com/store/apps/details",
            "imageUrl1": "https://ph-files.imgix.net/fadc846d-dc9f-453d-88f1-9e82db325aa6.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl2": "https://ph-files.imgix.net/f323e2bb-a65c-4c34-b8e9-2689aa26cdb3.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl3": "https://ph-files.imgix.net/02d8cf7c-616f-4a2b-8d6c-117c50cb400b.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "videoUrl": ""
          },
          {
            "rank": "7",
            "name": "Strava",
            "icon": "https://ph-files.imgix.net/041ce41b-00f3-4acd-b38a-95592e297e9f.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "Strava — The #1 app for runners and cyclists",
            "description": "Strava is a social fitness network, that is primarily used to track cycling and running exercises, using GPS data although alternative types are available.",
            "productUrl": "https://www.producthunt.com/products/strava/shoutouts",
            "websiteUrl": "http://www.strava.com/",
            "imageUrl1": "https://ph-files.imgix.net/4cefa905-9973-41e1-b9af-1c457e88719c.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl2": "https://ph-files.imgix.net/721d6f4e-391c-4367-aca3-1f483b00dc2d.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl3": "",
            "videoUrl": ""
          },
          {
            "rank": "8",
            "name": "Threads",
            "icon": "https://ph-files.imgix.net/ec77d93a-9530-4a03-a95a-1450e139cf1f.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "Threads — Share ideas & trends with text",
            "description": "Threads is the platform where communities unite to discuss current interests and upcoming trends. Connect with favorite creators and like-minded individuals to explore shared passions, and share your thoughts, ideas, and creativity.",
            "productUrl": "https://www.producthunt.com/products/threads-an-instagram-app-2/shoutouts",
            "websiteUrl": "https://www.threads.net/",
            "imageUrl1": "https://ph-files.imgix.net/b5595297-f422-4569-9292-12894f84fa82.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl2": "https://ph-files.imgix.net/0347d075-0799-48bd-874f-1ac0f77f2ac1.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl3": "https://ph-files.imgix.net/c5211e78-cd87-4d3d-aa22-26400717356a.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "videoUrl": ""
          },
          {
            "rank": "9",
            "name": "CapCut",
            "icon": "https://ph-files.imgix.net/a9dee8e4-b7f6-436f-bbcd-30bc43bee807.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "CapCut — All-in-one video editing app for creating TikTok videos",
            "description": "CapCut is a free all-in-one video editing app that helps you create incredible videos, from ByteDance. 📣Easy to use 📣 High quality 📣 Top Music Hits/Sounding incredible 📣 Stickers and text 📣 Effects",
            "productUrl": "https://www.producthunt.com/products/capcut/shoutouts",
            "websiteUrl": "https://apps.apple.com/us/app/capcut/id1500855883",
            "imageUrl1": "https://ph-files.imgix.net/fd1d103e-810a-49d4-956c-cae5ecf2cf7f.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl2": "https://ph-files.imgix.net/c23cba35-1345-4963-8b97-5c2a94c118a3.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl3": "https://ph-files.imgix.net/b7d9573b-3293-4ed5-a7bf-bdd8ac3faff5.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "videoUrl": ""
          },
          {
            "rank": "10",
            "name": "Gated",
            "icon": "https://ph-files.imgix.net/2c8f9d6b-6372-4ccb-8aac-829de8f9967c.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "Gated — One simple link for more signal - less noise.",
            "description": "Professionals, makers, and \"do-ers\" have to be more present on more channels today than ever before. And the more you put yourself out there, the more junk you get back. Gated is one simple link to share what you’re focused on anywhere you’re building your presence online and start conversations about the topics you actually care about. We create tech and A.I. that's on *your* side - protecting your time and keeping you focused on your goals in this noisy digital world.",
            "productUrl": "https://www.producthunt.com/products/gated/shoutouts",
            "websiteUrl": "https://www.gated.com/",
            "imageUrl1": "",
            "imageUrl2": "",
            "imageUrl3": "",
            "videoUrl": ""
          },
          {
            "rank": "11",
            "name": "Instagram",
            "icon": "https://ph-files.imgix.net/fe5239aa-8072-4806-8f9c-4c801bdf6eb6.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=14&h=14&fit=crop",
            "title": "Instagram — We bring you closer to the people and things you love",
            "description": "Instagram is a social networking app that gives its users the ability to easily share pictures and videos with their friends.",
            "productUrl": "https://www.producthunt.com/products/instagram/shoutouts",
            "websiteUrl": "http://instagram.com/",
            "imageUrl1": "https://ph-files.imgix.net/6d98ba5c-548e-4137-9946-b1245deaf98d.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl2": "https://ph-files.imgix.net/e5032a5c-577b-4358-8dc6-00693277ff87.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl3": "https://ph-files.imgix.net/a5fe333b-e695-498e-9159-6cc03ce4f436.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "videoUrl": ""
          },
          {
            "rank": "12",
            "name": "Chaty",
            "icon": null,
            "title": "Chaty — Connect with your customers on 20+ popular messaging apps",
            "description": "Provide your website visitors' a frictionless customer communication by allowing customers easy access to all the platforms you’re available on improving your customers’ experience and increasing your chances of conversion or sales.",
            "productUrl": "https://www.producthunt.com/products/chaty/shoutouts",
            "websiteUrl": "https://chaty.app/",
            "imageUrl1": "https://ph-files.imgix.net/aceda95a-2b40-4d4e-b02a-e6b18288dec4.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl2": "https://ph-files.imgix.net/135a7097-e584-4fb6-900a-10be806b1d2a.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl3": "https://ph-files.imgix.net/b00d130f-9459-4d86-9b2a-373b68465512.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "videoUrl": ""
          },
          {
            "rank": "13",
            "name": "BuildSpace Sage",
            "icon": "https://ph-files.imgix.net/56d21e5e-06b5-467a-a4c3-826f521be169.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "BuildSpace Sage — the place where people build cool shit",
            "description": "sage is a new place on the internet for builders, makers, & creators to find and be found by the right group of ppl. any idea goes. a hip-hop album, short film, a novel, some indie software, a youtube channel — whatever.",
            "productUrl": "https://www.producthunt.com/products/buildspace-sage/shoutouts",
            "websiteUrl": "https://sage.buildspace.so/",
            "imageUrl1": "",
            "imageUrl2": "",
            "imageUrl3": "",
            "videoUrl": ""
          },
          {
            "rank": "14",
            "name": "Apple Music",
            "icon": "https://ph-files.imgix.net/4acb3d8c-7f7f-4b0c-8087-82fee1559021.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "Apple Music — Lose yourself in 60 million songs",
            "description": "Discover and listen. In perfect harmony. Sing along to your favorite songs with lyrics view, find new music just by seeing what your friends are into, and listen to playlists curated for every occasion. That’s just part of what makes Apple Music the ultimate music streaming experience.",
            "productUrl": "https://www.producthunt.com/products/apple-music/shoutouts",
            "websiteUrl": "https://www.apple.com/music",
            "imageUrl1": "https://ph-files.imgix.net/87240fa5-4017-4110-9b9d-378df0fb42bc.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl2": "https://ph-files.imgix.net/304cfb41-fb5e-4729-ad4f-c9d1c94db425.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl3": "https://ph-files.imgix.net/c74ee0cc-606f-4f74-90da-af9723fe2427.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "videoUrl": ""
          },
          {
            "rank": "15",
            "name": "Meetup",
            "icon": "https://ph-files.imgix.net/438af8e8-692c-4cfd-ac4f-1ac08b267074.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "Meetup — Meet new people, do new things",
            "description": "Find Meetup events so you can do more of what matters to you. Or create your own group and meet people near you who share your interests.",
            "productUrl": "https://www.producthunt.com/products/meetup/shoutouts",
            "websiteUrl": "http://www.meetup.com/",
            "imageUrl1": "https://ph-files.imgix.net/c925e0a7-e035-496e-8927-0cc94c339ead.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl2": "https://ph-files.imgix.net/e12772ab-a8a2-4da1-bbde-60b2ad0faf52.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl3": "https://ph-files.imgix.net/1ed8d92b-c1b6-40e8-a79a-629a61329ebb.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "videoUrl": ""
          },
          {
            "rank": "16",
            "name": "Couchsurfing",
            "icon": "https://ph-files.imgix.net/eb31d5ae-40dd-44fd-9a6a-4b3089b73c3a.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "Couchsurfing — Stay with locals and meet travelers",
            "description": "With Couchsurfing, you can stay with locals in every country on earth. Travel like a local, stay in someone’s home, and experience the world in a way money can’t buy.",
            "productUrl": "https://www.producthunt.com/products/couchsurfing/shoutouts",
            "websiteUrl": "https://www.couchsurfing.com/",
            "imageUrl1": "https://ph-files.imgix.net/6f3d836e-2054-4e0e-9f35-e4461be36668.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl2": "https://ph-files.imgix.net/29545ef7-b65b-405a-b198-56af3d6670c3.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl3": "https://ph-files.imgix.net/07171e5f-4556-4622-8b40-78735e015def.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "videoUrl": ""
          },
          {
            "rank": "17",
            "name": "PropelAuth",
            "icon": "https://ph-files.imgix.net/b9c907c3-5a24-487f-8a76-a988c249e25b.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "PropelAuth — Authentication that works before you write any code",
            "description": "PropelAuth hosts and manages your authentication. Features like social logins, magic links, or managing profile pictures can be added in a single click. With our B2B support, your users can create organizations and invite their team members out of the box.",
            "productUrl": "https://www.producthunt.com/products/propelauth/shoutouts",
            "websiteUrl": "https://www.propelauth.com/",
            "imageUrl1": "https://ph-files.imgix.net/b9ad1a54-fb98-482c-ba0c-fb8afc5ff76d.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl2": "https://ph-files.imgix.net/063db6d7-0bfd-4e52-9348-e31f509f61d7.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl3": "https://ph-files.imgix.net/b3414779-c51c-43e1-b50d-369067d56ea0.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "videoUrl": ""
          },
          {
            "rank": "18",
            "name": "Ready Player Me Halloween Edition",
            "icon": "https://ph-files.imgix.net/98bd5896-5f3f-4bee-9d12-26b81a1f61d3.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "Ready Player Me Halloween Edition — Create a spooky Halloween avatar from a selfie",
            "description": "Create a spooky Halloween avatar from a single selfie. Snap a photo and use your creativity to customize a terrifying virtual Halloween costume. Use it as a profile picture or share in social.",
            "productUrl": "https://www.producthunt.com/products/ready-player-me-halloween-edition/shoutouts",
            "websiteUrl": "https://halloween.readyplayer.me/",
            "imageUrl1": "https://ph-files.imgix.net/93cd1cc5-5cce-46b5-9b0e-3e3904751dda.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl2": "https://ph-files.imgix.net/a63f5783-0a63-4223-bdb3-ccc7c6852b6d.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl3": "https://ph-files.imgix.net/6e9982ee-619f-412d-a208-c887d5e085f6.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "videoUrl": ""
          },
          {
            "rank": "19",
            "name": "Bublr",
            "icon": "https://ph-files.imgix.net/1df8c15b-92c2-4a89-bfdf-52584936c711.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "Bublr — An ultra-minimal platform to let your thoughts out",
            "description": "Embrace catharsis with our minimalist platform, a safe haven for your highs and lows. Share thoughts anonymously or unmasked, celebrating the essence of you. Your voice, your choice. Bublr, made by people, for the people.",
            "productUrl": "https://www.producthunt.com/products/the-abyss/shoutouts",
            "websiteUrl": "https://bublr.life/",
            "imageUrl1": "https://ph-files.imgix.net/1d2114e8-ca80-4a21-9f96-44aaf85132a0.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl2": "https://ph-files.imgix.net/ca74e2d9-fdbe-48bb-a774-fb3e4151f922.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl3": "https://ph-files.imgix.net/2353a952-dab0-4459-a8e3-fe7f7aa3e632.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "videoUrl": ""
          },
          {
            "rank": "20",
            "name": "Partiful",
            "icon": "https://ph-files.imgix.net/a99dce07-2db2-4857-af8a-7f08c6bff756.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "Partiful — Highkey parties, Lowkey planning",
            "description": "facebook events for hot people ✨ create your party page in seconds ⚡️ letting you create party pages for every vibe.",
            "productUrl": "https://www.producthunt.com/products/partiful/shoutouts",
            "websiteUrl": "https://partiful.com/",
            "imageUrl1": "",
            "imageUrl2": "",
            "imageUrl3": "",
            "videoUrl": ""
          },
          {
            "rank": "21",
            "name": "Heardle",
            "icon": "https://ph-files.imgix.net/da71481f-a239-49ac-ba8e-d8b9c2e1cbfa.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "Heardle — Heardle - Spotify Music Guessing Game",
            "description": "Since spotify decided to get rid of their headle game, here is a new version. I really enjoyed playing heardle and hated that spotify got rid of it. So I have been playing this version now and made it into a website.",
            "productUrl": "https://www.producthunt.com/products/heardle-2/shoutouts",
            "websiteUrl": "https://www.heardleunlimited.xyz/",
            "imageUrl1": "",
            "imageUrl2": "",
            "imageUrl3": "",
            "videoUrl": ""
          },
          {
            "rank": "22",
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
            "rank": "23",
            "name": "Reddit",
            "icon": "https://ph-files.imgix.net/9570287e-07de-4237-8c47-b08a3b7ac251.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "Reddit — The front page of the internet",
            "description": "Reddit is a network of communities based on people's interests. Find communities you're interested in, and become part of an online community!",
            "productUrl": "https://www.producthunt.com/products/reddit/shoutouts",
            "websiteUrl": "https://reddit.com/",
            "imageUrl1": "https://ph-files.imgix.net/479e8bef-f09f-4120-85ce-76530de077bf.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl2": "https://ph-files.imgix.net/3773f79a-6439-47e6-a607-0f3f2098bf7b.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl3": "https://ph-files.imgix.net/27c60a3b-cca2-4021-a5a6-4dafa4fc953d.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "videoUrl": ""
          },
          {
            "rank": "24",
            "name": "Ice Cubes",
            "icon": "https://ph-files.imgix.net/b4cd5136-4e0d-4d37-b88c-90a92d69db6b.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "Ice Cubes — A blazing fast, open source, smart Mastodon client",
            "description": "Ice Cubes is a new Mastodon client and offer a few features unlike what's already available. You can quote toot, pin other local timelines and even ask our little AI friend some help before tooting!",
            "productUrl": "https://www.producthunt.com/products/ice-cubes/shoutouts",
            "websiteUrl": "https://apps.apple.com/fr/app/ice-cubes-for-mastodon/id6444915884",
            "imageUrl1": "https://ph-files.imgix.net/d3654095-3cf7-4dbe-8fa1-b1f3b240645a.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl2": "https://ph-files.imgix.net/f1c73743-b4ed-41e7-b626-967ea0edc3c7.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl3": "https://ph-files.imgix.net/47fce5f7-1026-4825-8b1b-aa3986b2c35f.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "videoUrl": ""
          },
          {
            "rank": "25",
            "name": "YouTube",
            "icon": "https://ph-files.imgix.net/cbf2681e-7deb-41da-9f9a-33b92ced0f52.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "YouTube — A fresh look for YouTube",
            "description": "",
            "productUrl": "https://www.producthunt.com/products/youtube-2/shoutouts",
            "websiteUrl": "https://www.youtube.com/new",
            "imageUrl1": "",
            "imageUrl2": "",
            "imageUrl3": "",
            "videoUrl": ""
          },
          {
            "rank": "26",
            "name": "Meta",
            "icon": "https://ph-files.imgix.net/d03e4bed-f4c2-4dc2-b8fa-8b031eed6fd6.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "Meta — Building the next evolution of digital connection.",
            "description": "Meta is helping build a future where people have more ways to play and connect in the metaverse. Welcome to the next chapter of social connection.",
            "productUrl": "https://www.producthunt.com/products/meta/shoutouts",
            "websiteUrl": "https://www.meta.com/",
            "imageUrl1": "",
            "imageUrl2": "",
            "imageUrl3": "",
            "videoUrl": ""
          }
        ]
       
      },
      {
        "sub_cat_name": "Video and Voice calling",
        "sub_cat_heading": "The best Video and Voice calling in 2024",
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
            "name": "Discord",
            "icon": "https://ph-files.imgix.net/669179de-f4dd-42da-92bd-a1238fbc2073.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "Discord — A platform to talk and hang out",
            "description": "A voice, video and text communication service used by over a hundred million people to hang out and talk with their friends and communities.",
            "productUrl": "https://www.producthunt.com/products/discord/shoutouts",
            "websiteUrl": "https://discord.com/",
            "imageUrl1": "",
            "imageUrl2": "",
            "imageUrl3": "",
            "videoUrl": ""
          },
          {
            "rank": "3",
            "name": "CapCut",
            "icon": "https://ph-files.imgix.net/5f04fd44-3645-4baa-b39d-c74f9ee434b9.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "CapCut — All-in-one video editor",
            "description": "CapCut is an all-in-one video editor that makes video creating and sharing easier.",
            "productUrl": "https://www.producthunt.com/products/capcut-2/shoutouts",
            "websiteUrl": "https://www.capcut.net/",
            "imageUrl1": "https://ph-files.imgix.net/6541236f-516e-470f-9ba2-48a1d73725a7.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl2": "https://ph-files.imgix.net/bba1a2d3-0a22-407c-aa47-55f8248b4b2a.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl3": "https://ph-files.imgix.net/314dbb69-94a8-41df-bcbf-7d1ed3b9995c.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "videoUrl": ""
          },
          {
            "rank": "4",
            "name": "Daily.co",
            "icon": "https://ph-files.imgix.net/68503614-01df-48c9-b7cb-321746ecfd15.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "Daily.co — Real-time video infrastructure for developers",
            "description": "Build live video and audio applications using modern APIs and end-to-end tooling.",
            "productUrl": "https://www.producthunt.com/products/daily-co/shoutouts",
            "websiteUrl": "https://www.daily.co/",
            "imageUrl1": "https://ph-files.imgix.net/14a9b970-2053-4fe3-b086-09bb977c6321.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl2": "https://ph-files.imgix.net/84c13dc2-0e26-43d2-991c-77ec24bb70f6.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl3": "https://ph-files.imgix.net/dc144b43-fa34-44d6-9901-de7775abbc74.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "videoUrl": ""
          },
          {
            "rank": "5",
            "name": "WhatsApp",
            "icon": "https://ph-files.imgix.net/f10c6d2d-2799-49d1-91ad-d9280879ebc8.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "WhatsApp — The simple, reliable, secure messaging app.",
            "description": "WhatsApp Messenger is a FREE messaging app available for iPhone, Android, and other smartphones. WhatsApp uses your phone's Internet connection (4G/3G/2G/EDGE or Wi-Fi, as available) to let you message and call friends and family. Switch from SMS to WhatsApp to send and receive messages, calls, photos, videos, documents, and Voice Messages.",
            "productUrl": "https://www.producthunt.com/products/whatsapp/shoutouts",
            "websiteUrl": "http://www.whatsapp.com/",
            "imageUrl1": "https://ph-files.imgix.net/fae2707c-dcd8-4c3c-b891-247937af5f35.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl2": "https://ph-files.imgix.net/dd6e3eac-6661-4dee-be2c-8c5c060e8b61.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl3": "https://ph-files.imgix.net/71ddbeaf-a88b-498b-8bd2-503f19361db6.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "videoUrl": ""
          },
          {
            "rank": "6",
            "name": "Mux",
            "icon": "https://ph-files.imgix.net/404c3af4-a51d-4e86-967e-5dd1d7cc686b.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "Mux — How developers build online video",
            "description": "Mux Video is an API that enables developers to build unique live and on-demand video experiences.",
            "productUrl": "https://www.producthunt.com/products/mux/shoutouts",
            "websiteUrl": "http://www.mux.com/",
            "imageUrl1": "https://ph-files.imgix.net/e99e39c6-41e0-436a-8e8b-e0f1a6316675.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl2": "https://ph-files.imgix.net/36e75322-dd9a-4309-a676-abd98f49ef48.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl3": "https://ph-files.imgix.net/7710d256-fbc2-4d2a-a96d-d76e77f4dd5a.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "videoUrl": ""
          },
          {
            "rank": "7",
            "name": "Krisp",
            "icon": null,
            "title": "Krisp — Magically mutes background noise during calls",
            "description": "Krisp is a superior noise cancelling app that mutes background noise in real time calls. With one click it removes all extraneous noises for incoming and outgoing calls. Available on Windows, Mac, and iOS.",
            "productUrl": "https://www.producthunt.com/products/krisp/shoutouts",
            "websiteUrl": "https://krisp.ai/",
            "imageUrl1": "https://ph-files.imgix.net/7d9908cf-aed2-48d3-9bb1-d5df74245862.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl2": "https://ph-files.imgix.net/1811dacf-b137-49c3-98c6-aaf15b0dcdc2.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl3": "https://ph-files.imgix.net/10b52e64-006d-41f3-9fce-26ff9707c2c6.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "videoUrl": ""
          },
          {
            "rank": "8",
            "name": "LiveKit",
            "icon": "https://ph-files.imgix.net/45e5b993-3081-4c6a-8578-4933431cbb0b.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=14&h=14&fit=crop",
            "title": "LiveKit — The open source platform for real-time communication",
            "description": "LiveKit is free, open source infrastructure for building and scaling real-time audio and video experiences in your applications. Use our APIs to easily build audio-only spaces, live classrooms, in-game video chat, collaborative screen sharing, and more.",
            "productUrl": "https://www.producthunt.com/products/livekit/shoutouts",
            "websiteUrl": "https://livekit.io/",
            "imageUrl1": "https://ph-files.imgix.net/b8735417-9571-4fcd-9f07-1406c88500fe.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl2": "https://ph-files.imgix.net/c97eb938-2e98-4569-bfc5-0010e5d577cc.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl3": "https://ph-files.imgix.net/9b486984-a996-4f39-81a3-9664a0bbd84d.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "videoUrl": ""
          },
          {
            "rank": "9",
            "name": "Instagram",
            "icon": "https://ph-files.imgix.net/fe5239aa-8072-4806-8f9c-4c801bdf6eb6.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=14&h=14&fit=crop",
            "title": "Instagram — We bring you closer to the people and things you love",
            "description": "Instagram is a social networking app that gives its users the ability to easily share pictures and videos with their friends.",
            "productUrl": "https://www.producthunt.com/products/instagram/shoutouts",
            "websiteUrl": "http://instagram.com/",
            "imageUrl1": "https://ph-files.imgix.net/6d98ba5c-548e-4137-9946-b1245deaf98d.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl2": "https://ph-files.imgix.net/e5032a5c-577b-4358-8dc6-00693277ff87.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl3": "https://ph-files.imgix.net/a5fe333b-e695-498e-9159-6cc03ce4f436.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "videoUrl": ""
          },
          {
            "rank": "10",
            "name": "Backtrack 2.0",
            "icon": "https://ph-files.imgix.net/ebaac67b-2161-468c-8482-bd4b808f07ce.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "Backtrack 2.0 — Record any meeting backwards & generate AI notes.",
            "description": "Backtrack is a meeting recording app that overwrites a 5 hour window of audio/video over and over throughout the day, locally on your Mac. It allows you to privately save anything you've seen, said, or heard in the past and turn it into AI notes/summaries.",
            "productUrl": "https://www.producthunt.com/products/backtrack-2-0/shoutouts",
            "websiteUrl": "https://www.usebacktrack.com/",
            "imageUrl1": "https://ph-files.imgix.net/bb78620e-ba42-4e2f-8780-68fa88972f14.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl2": "https://ph-files.imgix.net/f73bad4c-9097-4065-956e-c157b3bd50f2.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl3": "https://ph-files.imgix.net/755e6ad8-d5af-4d61-aefd-8e3ebf01d5c3.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "videoUrl": ""
          },
          {
            "rank": "11",
            "name": "twilio",
            "icon": "https://ph-files.imgix.net/161e59aa-e2ef-425a-b636-bbdce6569172.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "twilio — Build the future of communications",
            "description": "Twilio is a cloud communications platform as a service company based in San Francisco, California.Twilio powers the future of business communications. Enabling phones, VoIP, and messaging to be embedded into web, desktop, and mobile software.",
            "productUrl": "https://www.producthunt.com/products/twilio/shoutouts",
            "websiteUrl": "http://www.twilio.com/",
            "imageUrl1": "https://ph-files.imgix.net/fe6f6075-78e0-4c52-8ae4-0f56a6f2146e.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl2": "https://ph-files.imgix.net/20880aba-f21a-448a-9612-9f071c9349e9.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl3": "https://ph-files.imgix.net/429944d7-79f5-42d0-9fc7-d4346113084a.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "videoUrl": ""
          },
          {
            "rank": "12",
            "name": "Vidyard",
            "icon": "https://ph-files.imgix.net/ccbaf14b-200f-4921-ae4c-8b7b873750be.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=14&h=14&fit=crop",
            "title": "Vidyard — Video messaging, digital sales rooms, and other GTM tools",
            "description": "It's getting harder than ever to stand out above the noise and engage your prospects and customers. Buying committees have grown larger, inboxes more flooded, and prospects spend more time conducting their own research. Vidyard is building a suite of products that allows teams to adapt and take advantage of these trends. Visit our site to learn more!",
            "productUrl": "https://www.producthunt.com/products/vidyard-studio/shoutouts",
            "websiteUrl": "https://www.vidyard.com/",
            "imageUrl1": "",
            "imageUrl2": "",
            "imageUrl3": "",
            "videoUrl": ""
          },
          {
            "rank": "13",
            "name": "YouTube",
            "icon": "https://ph-files.imgix.net/cbf2681e-7deb-41da-9f9a-33b92ced0f52.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "YouTube — A fresh look for YouTube",
            "description": "",
            "productUrl": "https://www.producthunt.com/products/youtube-2/shoutouts",
            "websiteUrl": "https://www.youtube.com/new",
            "imageUrl1": "",
            "imageUrl2": "",
            "imageUrl3": "",
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