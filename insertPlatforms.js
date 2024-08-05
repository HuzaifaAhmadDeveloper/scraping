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
    "category_name": "Platforms",
    "category_heading": "The best Platforms in 2024",
    "sub_categories": [
      {
        "sub_category_name": "Crowdfunding",
        "sub_category_heading": "The best Crowdfunding in 2024",
        "products": [
          {
            "rank": "1",
            "name": "Fairmint - Equity of the Future",
            "icon": "https://ph-files.imgix.net/117b0c9c-5374-42cd-b5a1-89d2f1fd6d42.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=14&h=14&fit=crop",
            "title": "Fairmint - Equity of the Future — Share your company's success with your community",
            "description": "Give your community skin in the game. Fairmint empowers you to grant equity to anyone that adds value to your company and passively receive investment from your biggest fans. Launch in a few clicks and get back to building your business.",
            "productUrl": "https://www.producthunt.com/products/fairmint-equity-of-the-future/shoutouts",
            "websiteUrl": "https://www.fairmint.com/",
            "imageUrl1": "",
            "imageUrl2": "https://ph-files.imgix.net/978f084e-97a6-46f5-980a-9776de89aff1.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl3": "https://ph-files.imgix.net/f8778032-3c21-400d-9e5b-03e1d74f8547.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "videoUrl": "https://youtu.be/Xi_D6FeXK4A"
          },
          {
            "rank": "2",
            "name": "Ko-fi.com",
            "icon": "https://ph-files.imgix.net/42ce2324-17d8-4dea-a428-8f950f7196e2.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=14&h=14&fit=crop",
            "title": "Ko-fi.com — Fund Your Passions.",
            "description": "Ko-fi is an online platform which helps creators such as illustrators, podcasters and bloggers receive financial support from fans of their work.",
            "productUrl": "https://www.producthunt.com/products/ko-fi-com/shoutouts",
            "websiteUrl": "https://ko-fi.com/",
            "imageUrl1": "https://ph-files.imgix.net/3942cebc-f885-4839-81bf-9079389ce071.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&fit=crop&dpr=1",
            "imageUrl2": "",
            "imageUrl3": "",
            "videoUrl": ""
          }
        ]
        
      },
      {
        "sub_category_name": "Event software",
        "sub_category_heading": "The best Event software in 2024",
        "products": [
          {
            "rank": "1",
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
            "rank": "3",
            "name": "OpenAI Events",
            "icon": "https://ph-files.imgix.net/d72cdc8d-47ea-49c3-bfa8-b54e170a395e.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "OpenAI Events — Uniting the global AI community",
            "description": "This domain is for sale!",
            "productUrl": "https://www.producthunt.com/products/openai-events/shoutouts",
            "websiteUrl": "https://openaievents.org/",
            "imageUrl1": "https://ph-files.imgix.net/da22e16c-7a99-487b-b019-fb2f5627d9b4.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl2": "https://ph-files.imgix.net/6041c415-02a9-41c1-8478-55e8a64909a6.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl3": "https://ph-files.imgix.net/f11ffaeb-868a-4473-bf5b-1f79b5300420.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "videoUrl": ""
          },
          {
            "rank": "4",
            "name": "Eventbrite",
            "icon": "https://ph-files.imgix.net/b231e288-0294-4e14-95e0-009ebbbf9fa5.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "Eventbrite — Local Events & Things To Do",
            "description": "Eventbrite brings people together through live experiences. Discover events that match your passions, or create your own with online ticketing tools.",
            "productUrl": "https://www.producthunt.com/products/eventbrite/shoutouts",
            "websiteUrl": "http://eventbrite.com/",
            "imageUrl1": "https://ph-files.imgix.net/c0929cdf-d720-4dc6-9cae-d0f2bf387c6d.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl2": "https://ph-files.imgix.net/72ec44f0-23cc-40f6-b785-5c2de1417ca6.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl3": "https://ph-files.imgix.net/096f7bec-ed5d-4d99-bcd2-f32534985bb7.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "videoUrl": ""
          },
          {
            "rank": "5",
            "name": "Heardle",
            "icon": "https://ph-files.imgix.net/da71481f-a239-49ac-ba8e-d8b9c2e1cbfa.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "Heardle — Heardle - Spotify Music Guessing Game",
            "description": "Since spotify decided to get rid of their headle game, here is a new version. I really enjoyed playing heardle and hated that spotify got rid of it. So I have been playing this version now and made it into a website.",
            "productUrl": "https://www.producthunt.com/products/heardle-2/shoutouts",
            "websiteUrl": "https://www.heardleunlimited.xyz/",
            "imageUrl1": "https://ph-files.imgix.net/58ab1eb9-6c0b-4528-bf3a-682fb94ea651.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop&dpr=1",
            "imageUrl2": "https://ph-files.imgix.net/ecf89072-9240-4847-a11f-17ac67fb74ad.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop&dpr=1",
            "imageUrl3": "",
            "videoUrl": ""
          }
        ]
        
      },
      {
        "sub_category_name": "Job boards",
        "sub_category_heading": "The best Job boards in 2024",
        "products": [
          {
            "rank": "1",
            "name": "LinkedIn",
            "icon": "https://ph-files.imgix.net/96d6beef-7855-4cae-8dec-cecff48229d5.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "LinkedIn — Connect, apply, and find jobs",
            "description": "Manage your professional identity. Build and engage with your professional network. Access knowledge, insights and opportunities. LinkedIn is an American business and employment-oriented service that operates via websites and mobile apps. Founded on December 28, 2002, and launched on May 5, 2003, it is mainly used for professional networking, including employers posting jobs and job seekers posting their CVs.",
            "productUrl": "https://www.producthunt.com/products/linkedin/shoutouts",
            "websiteUrl": "https://linkedin.com/",
            "imageUrl1": "",
            "imageUrl2": "https://ph-files.imgix.net/0fe8a06e-9b35-44dd-8f53-077a235f11eb.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop&dpr=1",
            "imageUrl3": "",
            "videoUrl": "https://youtu.be/fFAqBXp9ibo"
          },
          {
            "rank": "2",
            "name": "LinkedIn",
            "icon": "https://ph-files.imgix.net/90491fc5-dace-4f57-b815-365f3100633a.x-icon?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "LinkedIn — LinkedIn Job Search: Find US Jobs, Internships, Jobs Near Me",
            "description": "64% of job seekers get hired through a referral. Use LinkedIn Jobs to boost your chances of getting hired through people you know.",
            "productUrl": "https://www.producthunt.com/products/linkedin-2/shoutouts",
            "websiteUrl": "https://www.linkedin.com/jobs",
            "imageUrl1": "https://ph-files.imgix.net/6e3ef5d8-0e4a-4966-9e18-8ec7943bed70.x-icon?auto=compress&codec=mozjpeg&cs=strip&auto=format&fit=crop&dpr=1",
            "imageUrl2": "",
            "imageUrl3": "",
            "videoUrl": ""
          },
          {
            "rank": "3",
            "name": "RanchWork.com",
            "icon": "https://ph-files.imgix.net/cf577e7b-42f4-4a5f-b21c-3ced9d9b679c.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "RanchWork.com — The oldest ranching job board on the internet",
            "description": "Welcoming over 40,000 visits & 195,000 pageviews a month, RanchWork.com is the leader in ranching & outdoors employment. We not only feature available jobs, but also job seekers searching for their dream ranch opportunity.",
            "productUrl": "https://www.producthunt.com/products/ranchwork-com/shoutouts",
            "websiteUrl": "https://www.ranchwork.com/",
            "imageUrl1": "https://ph-files.imgix.net/15cab144-36ca-4d36-b1d1-9313032407c6.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop&dpr=1",
            "imageUrl2": "https://ph-files.imgix.net/8a55f771-0d5c-441b-a916-af73cb545469.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop&dpr=1",
            "imageUrl3": "",
            "videoUrl": ""
          },
          {
            "rank": "4",
            "name": "Remote Rocketship",
            "icon": "https://ph-files.imgix.net/690f97bd-5978-4e0f-b804-66d753e0ea0a.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "Remote Rocketship — The remote job board with 18k+ tech jobs",
            "description": "Search 18,000+ open roles at 6,000+ remote companies. Filter by location, tech stack, salary, company size, full-time/part-time and more!",
            "productUrl": "https://www.producthunt.com/products/remote-rocketship/shoutouts",
            "websiteUrl": "http://www.remoterocketship.com/",
            "imageUrl1": "",
            "imageUrl2": "https://ph-files.imgix.net/0888ac2d-0da1-41d7-a508-3f5b358d072b.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl3": "https://ph-files.imgix.net/cfcf3876-7136-4abb-bbbc-4dd465ba4d38.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "videoUrl": "https://youtu.be/xvSu5_cxboI"
          },
          {
            "rank": "5",
            "name": "Upwork",
            "icon": "https://ph-files.imgix.net/c9b7be6c-f08e-4fb8-8436-fe849d8c062f.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "Upwork — How work should work",
            "description": "The world’s work marketplace, connecting millions of businesses with independent talent.",
            "productUrl": "https://www.producthunt.com/products/upwork/shoutouts",
            "websiteUrl": "https://www.upwork.com/",
            "imageUrl1": "https://ph-files.imgix.net/61cda391-0141-4cc2-8740-a4737d6b4b80.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl2": "https://ph-files.imgix.net/197ab134-5dae-4342-8f00-3aebdeeac46c.webp?fm=mp4&crop=max&w=256&h=160&dpr=2#t=0.001",
            "imageUrl3": "https://ph-files.imgix.net/949773fa-6a72-4520-8401-1463ea54445f.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "videoUrl": ""
          }
        ]
        
      },
      {
        "sub_category_name": "Language Learning",
        "sub_category_heading": "The best Language Learning in 2024",
        "products": [
          {
            "rank": "1",
            "name": "Duolingo",
            "icon": "https://ph-files.imgix.net/31f7fa4d-ec8f-4904-ac08-b893980e372d.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "Duolingo — The free, fun & effective way to learn a language",
            "description": "Duolingo is a platform that includes a language-learning website and app, as well as a digital language proficiency assessment exam.",
            "productUrl": "https://www.producthunt.com/products/duolingo/shoutouts",
            "websiteUrl": "https://duolingo.com/",
            "imageUrl1": "https://ph-files.imgix.net/e46ed027-6873-447b-8f37-a203713788b3.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl2": "https://ph-files.imgix.net/6d8becec-9831-4e7a-8805-0726e74c55fc.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl3": "https://ph-files.imgix.net/cba97e29-07f9-445c-a603-f6a1f3fc9dbd.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "videoUrl": ""
          },
          {
            "rank": "2",
            "name": "maths.ai",
            "icon": "https://ph-files.imgix.net/883021eb-264e-411f-a45b-0a3f90eb3e2a.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "maths.ai — Your favourite AI maths teacher",
            "description": "An AI powered maths tutor, designed to mimic your friendly, patient and nice maths and science teacher.",
            "productUrl": "https://www.producthunt.com/products/maths-ai/shoutouts",
            "websiteUrl": "https://maths.ai/",
            "imageUrl1": "",
            "imageUrl2": "https://ph-files.imgix.net/cab9e1a7-2dea-4ab9-a2af-064b60288340.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl3": "https://ph-files.imgix.net/0906406c-0c8f-428f-892c-583f997846bc.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "videoUrl": "https://youtu.be/JHtlRDeMwog"
          },
          {
            "rank": "3",
            "name": "Five Phrases",
            "icon": "https://ph-files.imgix.net/9d85c750-84b7-405a-8e59-e09da53640cc.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "Five Phrases — Your travel buddy",
            "description": "Don’t know the language? No problemo! Your new travel buddy is here to help you learn the most important phrases for your trip.",
            "productUrl": "https://www.producthunt.com/products/five-phrases/shoutouts",
            "websiteUrl": "https://www.fivephrasesapp.com/",
            "imageUrl1": "https://ph-files.imgix.net/a6f8f3a7-6b28-4aa0-b9b7-ea25e55193a7.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl2": "https://ph-files.imgix.net/4c1011ac-0605-46d7-adf4-c3969b68bdd6.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl3": "https://ph-files.imgix.net/d949f4eb-b24e-4324-9b18-3ddbfe05520c.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "videoUrl": ""
          }
        ]
       
      },
      {
        "sub_category_name": "News",
        "sub_category_heading": "The best News in 2024",
        "products": [
          {
            "rank": "1",
            "name": "Morning Maker Show",
            "icon": "https://ph-files.imgix.net/967aae82-4147-40ab-8ed0-fedcc7a8d4fe.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "Morning Maker Show — Build in public show you need to know about",
            "description": "We keep everyone updated on cool makers and their great products. Sometimes we can be funny too.",
            "productUrl": "https://www.producthunt.com/products/morning-maker-show/shoutouts",
            "websiteUrl": "https://morningmakershow.com/",
            "imageUrl1": "https://ph-files.imgix.net/a97d53d3-f3f2-433d-83c4-972d3a19172b.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl2": "https://ph-files.imgix.net/e353eb74-b040-4198-a6d8-677aeb190ef7.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl3": "https://ph-files.imgix.net/4f83ce91-b2ba-4495-915e-1de3ad746806.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "videoUrl": ""
          },
          {
            "rank": "2",
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
            "rank": "3",
            "name": "The Masters",
            "icon": "https://ph-files.imgix.net/e2dfc64d-f948-4ef4-a6f1-1c0ba2f32f74.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "The Masters — Follow everyone on their final day at the Masters Tournament",
            "description": "",
            "productUrl": "https://www.producthunt.com/products/the-masters/shoutouts",
            "websiteUrl": "https://itunes.apple.com/us/app/the-masters-tournament/id309025938",
            "imageUrl1": "https://ph-files.imgix.net/bf09134a-298e-40be-b521-5006effed95d.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl2": "https://ph-files.imgix.net/a9756c9f-bd2e-4938-b7e5-08d019b2df22.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl3": "https://ph-files.imgix.net/69a6437e-3c2a-4fd8-aaf7-63b6aa9b53e0.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "videoUrl": ""
          },
          {
            "rank": "4",
            "name": "News API",
            "icon": "https://ph-files.imgix.net/099448f9-f6c8-4934-8319-a442de8af08d.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=14&h=14&fit=crop",
            "title": "News API — Search worldwide news with code",
            "description": "Search worldwide news articles and headlines from all over the web in real-time with our free News API.",
            "productUrl": "https://www.producthunt.com/products/news-api/shoutouts",
            "websiteUrl": "https://newsapi.org/",
            "imageUrl1": "https://ph-files.imgix.net/5247d426-806a-4dde-a1f1-6526fb0023ec.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop&dpr=1",
            "imageUrl2": "https://ph-files.imgix.net/accd8c9f-4319-428e-84ac-e69fd1fb1108.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop&dpr=1",
            "imageUrl3": "",
            "videoUrl": ""
          },
          {
            "rank": "5",
            "name": "Hacker News",
            "icon": "https://ph-files.imgix.net/3a55e536-0506-4897-b2f2-538988eb51ab.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "Hacker News — I'm a news.ycombinator bot",
            "description": "Y Combinator is an American seed accelerator launched in March 2005 and was used to launch over 2,000 companies including Dropbox, Airbnb, Stripe, Reddit, Optimizely, Zenefits, Docker, DoorDash, Mixpanel, Heroku.",
            "productUrl": "https://www.producthunt.com/products/hacker-news/shoutouts",
            "websiteUrl": "http://news.ycombinator.com/",
            "imageUrl1": "",
            "imageUrl2": "",
            "imageUrl3": "",
            "videoUrl": ""
          }
        ]
        
      },
      {
        "sub_category_name": "Online learning",
        "sub_category_heading": "The best Online learning in 2024",
        "products": [
          {
            "rank": "1",
            "name": "GPT-4 by OpenAI",
            "icon": "https://ph-files.imgix.net/b739ac93-2899-4cc1-a893-40ea8afde77e.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "GPT-4 by OpenAI — LLM that exhibits human-level performance",
            "description": "GPT-4 is a multimodal model developed by OpenAI that can understand and generate human-like text based on the context provided. It is used in various applications, such as content creation, customer support, coding help, and educational tools.",
            "productUrl": "https://www.producthunt.com/products/gpt-4-openai/shoutouts",
            "websiteUrl": "https://openai.com/",
            "imageUrl1": "https://ph-files.imgix.net/1b43e012-b487-4f92-a613-e54e326317c9.webp?fm=mp4&crop=max&w=256&h=160&dpr=2#t=0.001",
            "imageUrl2": "https://ph-files.imgix.net/5eaec999-c653-4b6f-9cf3-acb6ff6ce827.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl3": "https://ph-files.imgix.net/ea7a908d-8551-42cc-ac0a-a11133502585.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "videoUrl": ""
          },
          {
            "rank": "2",
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
            "rank": "3",
            "name": "GPT Store",
            "icon": "https://ph-files.imgix.net/1d58a372-e2bc-4eca-9a2b-d9828c193a22.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "GPT Store — Help you find useful and popular custom versions of ChatGPT.",
            "description": "The store features a diverse range of GPTs developed by our partners and the community. Browse popular and trending GPTs on the community leaderboard, with categories like DALL·E, writing, research, programming, education, and lifestyle.",
            "productUrl": "https://www.producthunt.com/products/gpt-store-3/shoutouts",
            "websiteUrl": "https://openai.com/blog/introducing-the-gpt-store",
            "imageUrl1": "https://ph-files.imgix.net/3429e2b2-569e-4fc7-aa88-3f5ea08bf6a9.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl2": "https://ph-files.imgix.net/21a0c713-0edd-448d-84da-a9703bc6be5d.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl3": "https://ph-files.imgix.net/aa012e1b-7d67-4c58-8af4-1b2a7a60e446.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "videoUrl": ""
          },
          {
            "rank": "4",
            "name": "Perplexity 2.0",
            "icon": "https://ph-files.imgix.net/7fecfb2e-a14e-41c7-baa8-0be3f468c4e1.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "Perplexity 2.0 — Where Knowledge Begins",
            "description": "Knowledge is power. Experience Perplexity's new brand, designed to unlock our curiosity, one question at a time. Discover knowledge and explore endless possibilities.",
            "productUrl": "https://www.producthunt.com/products/perplexity-2-0/shoutouts",
            "websiteUrl": "https://pplx.ai/",
            "imageUrl1": "",
            "imageUrl2": "",
            "imageUrl3": "",
            "videoUrl": ""
          },
          {
            "rank": "5",
            "name": "Llama 3",
            "icon": "https://ph-files.imgix.net/2a77db72-7177-4935-963d-496839aa07db.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "Llama 3 — Meta's openly available LLM",
            "description": "An openly accessible model that excels at language nuances, contextual understanding, and complex tasks like translation and dialogue generation.",
            "productUrl": "https://www.producthunt.com/products/llama-3-2/shoutouts",
            "websiteUrl": "https://llama3.dev/",
            "imageUrl1": "https://ph-files.imgix.net/cef8d39e-d217-4da6-9654-74e487e7a759.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl2": "https://ph-files.imgix.net/383cf2b1-6d36-4996-8473-124c73490665.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl3": "https://ph-files.imgix.net/3b106641-8bd7-4f27-9179-6ccbdea4d9c2.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "videoUrl": ""
          },
          {
            "rank": "6",
            "name": "Perplexity",
            "icon": "https://ph-files.imgix.net/db193b4c-13cc-4700-8cde-ebac26d3c247.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "Perplexity — Where Knowledge Begins",
            "description": "Your Research Assistant. Available wherever you are: 🤖 http://pplx.ai/android // 📱 http://pplx.ai/iphone",
            "productUrl": "https://www.producthunt.com/products/perplexity-ai/shoutouts",
            "websiteUrl": "https://www.perplexity.ai/",
            "imageUrl1": "https://ph-files.imgix.net/9da04a44-b924-438d-9f13-98d3dd3a7415.gif?fm=mp4&crop=max&w=256&h=160&dpr=2#t=0.001",
            "imageUrl2": "https://ph-files.imgix.net/095c2bff-42b9-4dd2-aeca-d2fbe15fc272.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl3": "https://ph-files.imgix.net/937c8ffc-614e-4120-a4bf-64cb22c29a11.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "videoUrl": ""
          },
          {
            "rank": "7",
            "name": "Duolingo",
            "icon": "https://ph-files.imgix.net/31f7fa4d-ec8f-4904-ac08-b893980e372d.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "Duolingo — The free, fun & effective way to learn a language",
            "description": "Duolingo is a platform that includes a language-learning website and app, as well as a digital language proficiency assessment exam.",
            "productUrl": "https://www.producthunt.com/products/duolingo/shoutouts",
            "websiteUrl": "https://duolingo.com/",
            "imageUrl1": "https://ph-files.imgix.net/e46ed027-6873-447b-8f37-a203713788b3.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl2": "https://ph-files.imgix.net/6d8becec-9831-4e7a-8805-0726e74c55fc.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl3": "https://ph-files.imgix.net/cba97e29-07f9-445c-a603-f6a1f3fc9dbd.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "videoUrl": ""
          },
          {
            "rank": "8",
            "name": "AI Writer: Essay Email Writing(APP)",
            "icon": "https://ph-files.imgix.net/d81028ec-db98-4c7c-a69a-d1a43f28d9d8.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=14&h=14&fit=crop",
            "title": "AI Writer: Essay Email Writing(APP) — ChatGPT App in your Pocket🤳🏼📱",
            "description": "AI Writer generates high-quality content that is tailored to your needs in just seconds. Whether you need to craft a persuasive essay or a professional email, AI Writer has got you covered. Download now and unleash your full writing potential!🙌",
            "productUrl": "https://www.producthunt.com/products/ai-writer-essay-email-writing/shoutouts",
            "websiteUrl": "https://ai-writer.app/",
            "imageUrl1": "https://ph-files.imgix.net/bfe1bbec-f92e-45e2-b2c1-61f11dcc53ef.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl2": "https://ph-files.imgix.net/a01c2dfd-8b23-400a-85e4-335566e31a24.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl3": "https://ph-files.imgix.net/a71a4114-f78d-4102-bd1a-7b94c4ab2b4d.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "videoUrl": ""
          },
          {
            "rank": "9",
            "name": "Clipchamp",
            "icon": "https://ph-files.imgix.net/3922fd4d-6a84-47e3-96d3-3aefda3dda4d.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "Clipchamp — Fast forward your video editing",
            "description": "An online video editor that empowers anyone to quickly and easily create videos.",
            "productUrl": "https://www.producthunt.com/products/clipchamp/shoutouts",
            "websiteUrl": "https://clipchamp.com/en",
            "imageUrl1": "https://ph-files.imgix.net/2ac0bd1f-05ca-4084-93f8-6bc8185ab10e.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl2": "https://ph-files.imgix.net/8cdcdbe1-872c-469a-a75f-f249bd3aa5fd.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl3": "https://ph-files.imgix.net/21dac7e6-0504-4f1b-b599-55da0d06e42f.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "videoUrl": ""
          },
          {
            "rank": "10",
            "name": "Wikipedia",
            "icon": "https://ph-files.imgix.net/2a107f42-4163-42b3-96b2-8d25bcbeb7f8.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "Wikipedia — The free encyclopedia that anyone can edit.",
            "description": "A free online encyclopedia, created and edited by volunteers around the world",
            "productUrl": "https://www.producthunt.com/products/wikipedia/shoutouts",
            "websiteUrl": "http://wikipedia.org/",
            "imageUrl1": "",
            "imageUrl2": "",
            "imageUrl3": "",
            "videoUrl": ""
          },
          {
            "rank": "11",
            "name": "maths.ai",
            "icon": "https://ph-files.imgix.net/883021eb-264e-411f-a45b-0a3f90eb3e2a.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "maths.ai — Your favourite AI maths teacher",
            "description": "An AI powered maths tutor, designed to mimic your friendly, patient and nice maths and science teacher.",
            "productUrl": "https://www.producthunt.com/products/maths-ai/shoutouts",
            "websiteUrl": "https://maths.ai/",
            "imageUrl1": "",
            "imageUrl2": "https://ph-files.imgix.net/cab9e1a7-2dea-4ab9-a2af-064b60288340.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl3": "https://ph-files.imgix.net/0906406c-0c8f-428f-892c-583f997846bc.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "videoUrl": "https://youtu.be/JHtlRDeMwog"
          },
          {
            "rank": "12",
            "name": "CodeSandbox",
            "icon": "https://ph-files.imgix.net/5be8c1b8-f78d-4ca7-b76e-7951490ba063.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "CodeSandbox — Free, instant, collaborative sandboxes for rapid web development.",
            "description": "CodeSandbox is an online code editor and prototyping tool that makes creating and sharing web apps faster",
            "productUrl": "https://www.producthunt.com/products/codesandbox/shoutouts",
            "websiteUrl": "https://codesandbox.io/",
            "imageUrl1": "",
            "imageUrl2": "https://ph-files.imgix.net/e6732851-e71f-4465-bea9-0c6d8e931897.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl3": "https://ph-files.imgix.net/11bbb762-0b2b-48c5-b45f-4535607633fd.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "videoUrl": "https://youtu.be/5AWGpS0Npzk"
          },
          {
            "rank": "13",
            "name": "BuildSpace Sage",
            "icon": "https://ph-files.imgix.net/56d21e5e-06b5-467a-a4c3-826f521be169.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "BuildSpace Sage — the place where people build cool shit",
            "description": "sage is a new place on the internet for builders, makers, & creators to find and be found by the right group of ppl. any idea goes. a hip-hop album, short film, a novel, some indie software, a youtube channel — whatever.",
            "productUrl": "https://www.producthunt.com/products/buildspace-sage/shoutouts",
            "websiteUrl": "https://sage.buildspace.so/",
            "imageUrl1": "https://ph-files.imgix.net/a331ef6a-7ad2-4f0f-9e5d-7b9a973de640.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop&dpr=1",
            "imageUrl2": "https://ph-files.imgix.net/91f26664-4c33-411f-ad46-a82364588b33.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop&dpr=1",
            "imageUrl3": "",
            "videoUrl": ""
          },
          {
            "rank": "14",
            "name": "Afforai",
            "icon": "https://ph-files.imgix.net/4ddcb523-0d61-4ec8-a42c-f038b50a3502.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "Afforai — AI research assistant tool",
            "description": "Afforai is an advanced AI research assistant designed to search, summarize, and translate information from various sources, providing reliable and accurate research results.",
            "productUrl": "https://www.producthunt.com/products/afforai-2/shoutouts",
            "websiteUrl": "https://miqbalblog.com/afforai-review",
            "imageUrl1": "https://ph-files.imgix.net/b06fcea7-65ab-43c9-80b9-67378b51beb4.gif?fm=mp4&crop=max#t=0.001",
            "imageUrl2": "",
            "imageUrl3": "",
            "videoUrl": ""
          },
          {
            "rank": "15",
            "name": "Colab Notebooks",
            "icon": "https://ph-files.imgix.net/6c5b634e-03b1-4829-96f8-24c2d7056c5a.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "Colab Notebooks — Browse notebooks from Google Colaboratory",
            "description": "Google Colab has become a reference point for many web developers and AI enthusiasts. Each notebook has a unique link from which it can be accessed. Consequently, why not create a website where you can browse, add and collect all the Jupyter notebooks?",
            "productUrl": "https://www.producthunt.com/products/colab-notebooks/shoutouts",
            "websiteUrl": "http://colabnotebooks.com/",
            "imageUrl1": "https://ph-files.imgix.net/463584b2-9bb4-4adc-a21e-b413c6a2e819.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop&dpr=1",
            "imageUrl2": "",
            "imageUrl3": "",
            "videoUrl": ""
          },
          {
            "rank": "16",
            "name": "Semantic Scholar",
            "icon": "https://ph-files.imgix.net/b363906d-585a-4397-ab04-24ebbec7a661.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "Semantic Scholar — Vertical search across academic papers",
            "description": "",
            "productUrl": "https://www.producthunt.com/products/semantic-scholar/shoutouts",
            "websiteUrl": "https://www.semanticscholar.org/",
            "imageUrl1": "https://ph-files.imgix.net/9462ec0a-bf56-4ab9-9be8-3ad7c1b690c8.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl2": "https://ph-files.imgix.net/cc7757d3-c7b0-4988-ace9-a07a8abfcdf0.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl3": "https://ph-files.imgix.net/46c46bef-dc37-4c64-814e-622979c276ac.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "videoUrl": ""
          },
          {
            "rank": "17",
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
            "rank": "18",
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
            "rank": "19",
            "name": "Founder University",
            "icon": "https://ph-files.imgix.net/da99d696-026e-4534-8ca6-2400ed28c629.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "Founder University — 12-Week Pre-Accelerator: MVP to $25k Investment",
            "description": "Work on your idea, MVP, or existing product for 12 weeks. If you launch, get users, and demonstrate product velocity, you'll have a chance at receiving a $25k investment. Accepting 200+ builder founders for our upcoming cohort and look to invest in 30 teams.",
            "productUrl": "https://www.producthunt.com/products/founder-university/shoutouts",
            "websiteUrl": "https://www.founder.university/ph",
            "imageUrl1": "",
            "imageUrl2": "https://ph-files.imgix.net/6ed2f9d9-d514-4e9b-b76d-15bb04dc26d6.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl3": "https://ph-files.imgix.net/ef392e7c-62bd-44b3-8e4b-a9570e6b6805.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "videoUrl": "https://youtu.be/yDOzXfIouSQ"
          },
          {
            "rank": "20",
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
        "sub_category_name": "Startup communities",
        "sub_category_heading": "The best Startup communities in 2024",
        "products": [
          {
            "rank": "1",
            "name": "ShipFast",
            "icon": "https://ph-files.imgix.net/e34c1244-d93f-4803-b5ea-7dbc16336bbb.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=14&h=14&fit=crop",
            "title": "ShipFast — Ship your startup in days, not weeks",
            "description": "The NextJS boilerplate with all the stuff you need to get your product in front of customers. From idea to production in 5 minutes.",
            "productUrl": "https://www.producthunt.com/products/shipfast-2/shoutouts",
            "websiteUrl": "https://shipfa.st/",
            "imageUrl1": "",
            "imageUrl2": "https://ph-files.imgix.net/6b6b5c6b-fe20-43f2-860a-473fd9417785.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop&dpr=1",
            "imageUrl3": "",
            "videoUrl": "https://youtu.be/tT8hdQhrJVI"
          },
          {
            "rank": "2",
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
            "rank": "3",
            "name": "Morning Maker Show",
            "icon": "https://ph-files.imgix.net/967aae82-4147-40ab-8ed0-fedcc7a8d4fe.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "Morning Maker Show — Build in public show you need to know about",
            "description": "We keep everyone updated on cool makers and their great products. Sometimes we can be funny too.",
            "productUrl": "https://www.producthunt.com/products/morning-maker-show/shoutouts",
            "websiteUrl": "https://morningmakershow.com/",
            "imageUrl1": "https://ph-files.imgix.net/a97d53d3-f3f2-433d-83c4-972d3a19172b.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl2": "https://ph-files.imgix.net/e353eb74-b040-4198-a6d8-677aeb190ef7.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl3": "https://ph-files.imgix.net/4f83ce91-b2ba-4495-915e-1de3ad746806.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "videoUrl": ""
          },
          {
            "rank": "4",
            "name": "AWS Activate",
            "icon": "https://ph-files.imgix.net/eb11eb6c-ee5e-412b-8ae1-0afbd85c7b12.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "AWS Activate — coupons: $5,000 in credits 2 years and others deals Dec 23",
            "description": "AWS Activate is a comprehensive program designed to support startups and businesses and provide them with the resources and tools they need to build and scale their businesses on the Amazon Web Services (AWS) cloud platform.",
            "productUrl": "https://www.producthunt.com/products/aws-activate/shoutouts",
            "websiteUrl": "https://1kb.link/e5fe6",
            "imageUrl1": "https://ph-files.imgix.net/80520f41-60dc-43d0-8a3d-68e2474ba018.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl2": "https://ph-files.imgix.net/b9854487-35c0-43a7-a60c-e33fd5d313f1.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl3": "https://ph-files.imgix.net/97648582-f5e1-483a-be74-5948144f3842.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "videoUrl": ""
          },
          {
            "rank": "5",
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
            "rank": "6",
            "name": "supastarter",
            "icon": "https://ph-files.imgix.net/3349e30d-93f8-4737-afe9-327e95ac8f5a.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "supastarter — A SaaS starter kit",
            "description": "Production-ready starter kits and templates to save time.",
            "productUrl": "https://www.producthunt.com/products/supastarter/shoutouts",
            "websiteUrl": "https://supastarter.dev/",
            "imageUrl1": "https://ph-files.imgix.net/1a0603d7-3647-43f5-b680-c2760122a7f7.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl2": "https://ph-files.imgix.net/a616477c-19d4-4da8-9afb-66395f07289e.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl3": "https://ph-files.imgix.net/2fe1902a-7570-4acb-87ab-386d42cbde5f.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "videoUrl": ""
          },
          {
            "rank": "7",
            "name": "Bot Business 101",
            "icon": "https://ph-files.imgix.net/b86322e8-b0b1-4a03-8c0c-863b81665896.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "Bot Business 101 — How to start, run & grow your Bot / AI business",
            "description": "",
            "productUrl": "https://www.producthunt.com/products/bot-business-101/shoutouts",
            "websiteUrl": "https://www.amazon.com/dp/B01NBU30DA",
            "imageUrl1": "https://ph-files.imgix.net/069c2f08-cb28-485d-b771-18d21519cf2b.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop&dpr=1",
            "imageUrl2": "",
            "imageUrl3": "",
            "videoUrl": ""
          },
          {
            "rank": "8",
            "name": "AngelList",
            "icon": "https://ph-files.imgix.net/ee21e1e2-c5de-4e6e-9170-53e0192fed1c.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "AngelList — Build a startup. Build and manage a fund. Invest in both.",
            "description": "AngelList is building the infrastructure that powers the startup economy, providing startups and investors with the connected tools they need to launch and scale a startup or fund—and invest in both.",
            "productUrl": "https://www.producthunt.com/products/angellist/shoutouts",
            "websiteUrl": "http://angellist.com/",
            "imageUrl1": "https://ph-files.imgix.net/a427f410-1380-45e8-8c00-6b2dc47c8e70.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl2": "https://ph-files.imgix.net/2c54611c-b05e-475a-b219-e8d2ca2ead14.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl3": "https://ph-files.imgix.net/0c7be955-6cdf-44fb-9305-c881769fd698.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "videoUrl": ""
          },
          {
            "rank": "9",
            "name": "Crunchbase",
            "icon": "https://ph-files.imgix.net/b5b61344-60bd-4a67-85cc-3aa67d064079.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "Crunchbase — The leading platform to discover innovative companies",
            "description": "Crunchbase information includes investments and funding information, founding members and individuals in leadership positions, mergers and acquisitions, news, and industry trends.",
            "productUrl": "https://www.producthunt.com/products/crunchbase/shoutouts",
            "websiteUrl": "http://www.crunchbase.com/",
            "imageUrl1": "",
            "imageUrl2": "https://ph-files.imgix.net/3839b9e0-fcc7-4e48-9066-a2ad1b5bf07c.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl3": "https://ph-files.imgix.net/2b382333-e01f-442f-91ee-b2863e0fd4e4.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "videoUrl": "https://youtu.be/LpbqF6_nPzs"
          },
          {
            "rank": "10",
            "name": "BuildSpace Sage",
            "icon": "https://ph-files.imgix.net/56d21e5e-06b5-467a-a4c3-826f521be169.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "BuildSpace Sage — the place where people build cool shit",
            "description": "sage is a new place on the internet for builders, makers, & creators to find and be found by the right group of ppl. any idea goes. a hip-hop album, short film, a novel, some indie software, a youtube channel — whatever.",
            "productUrl": "https://www.producthunt.com/products/buildspace-sage/shoutouts",
            "websiteUrl": "https://sage.buildspace.so/",
            "imageUrl1": "https://ph-files.imgix.net/a331ef6a-7ad2-4f0f-9e5d-7b9a973de640.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop&dpr=1",
            "imageUrl2": "https://ph-files.imgix.net/91f26664-4c33-411f-ad46-a82364588b33.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop&dpr=1",
            "imageUrl3": "",
            "videoUrl": ""
          },
          {
            "rank": "11",
            "name": "Clerky",
            "icon": "https://ph-files.imgix.net/b1eb0c3f-4515-4fb9-bbbc-3faeaba633bb.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "Clerky — How the best startups get legal paperwork done",
            "description": "Clerky is the only online legal service obsessed with helping startup founders get legal paperwork done safely. Get your legal paperwork done with confidence, so you can get back to building your startup.",
            "productUrl": "https://www.producthunt.com/products/clerky/shoutouts",
            "websiteUrl": "https://www.clerky.com/",
            "imageUrl1": "https://ph-files.imgix.net/6d562aae-c037-44c6-8f70-fe762228891b.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop&dpr=1",
            "imageUrl2": "https://ph-files.imgix.net/2636e6df-262a-464a-8b9b-6db6fca451bf.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop&dpr=1",
            "imageUrl3": "",
            "videoUrl": ""
          },
          {
            "rank": "12",
            "name": "EarlyAccessHQ.com",
            "icon": "https://ph-files.imgix.net/ba375f96-6d97-482a-8408-9a8851576da6.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "EarlyAccessHQ.com — The Fastest Waitlist Page Builder",
            "description": "🚀 EarlyAccessHQ is the fastest waitlist page builder for SaaS, Mobile Apps, Game Developers, AI Startups, Books, etc. Build unlimited waitlists, and launch your products effortlessly with a fully functional landing page. Launch your next big idea!",
            "productUrl": "https://www.producthunt.com/products/earlyaccesshq-com/shoutouts",
            "websiteUrl": "https://www.earlyaccesshq.com/",
            "imageUrl1": "",
            "imageUrl2": "https://ph-files.imgix.net/0bf7107a-debf-42ea-9099-999c80f2cb0c.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl3": "https://ph-files.imgix.net/ee4ebf62-3f39-449c-92dc-c54b59ba5e39.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "videoUrl": "https://youtu.be/NhgM3L1w_cA"
          },
          {
            "rank": "14",
            "name": "Hacker News",
            "icon": "https://ph-files.imgix.net/3a55e536-0506-4897-b2f2-538988eb51ab.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "Hacker News — I'm a news.ycombinator bot",
            "description": "Y Combinator is an American seed accelerator launched in March 2005 and was used to launch over 2,000 companies including Dropbox, Airbnb, Stripe, Reddit, Optimizely, Zenefits, Docker, DoorDash, Mixpanel, Heroku.",
            "productUrl": "https://www.producthunt.com/products/hacker-news/shoutouts",
            "websiteUrl": "http://news.ycombinator.com/",
            "imageUrl1": "",
            "imageUrl2": "",
            "imageUrl3": "",
            "videoUrl": ""
          },
          {
            "rank": "15",
            "name": "Y Combinator",
            "icon": "https://ph-files.imgix.net/11da97b2-de36-4a3a-b394-66ad581b766c.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "Y Combinator — Make something people want.",
            "description": "Y Combinator is an American seed accelerator launched in March 2005 and was used to launch over 2,000 companies including Dropbox, Airbnb, Stripe, Reddit, Optimizely, Zenefits, Docker, DoorDash, Mixpanel, Heroku.",
            "productUrl": "https://www.producthunt.com/products/y-combinator/shoutouts",
            "websiteUrl": "http://ycombinator.com/",
            "imageUrl1": "https://ph-files.imgix.net/b5db4e52-af5f-4ea5-b344-05b80d297aa6.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl2": "https://ph-files.imgix.net/2b9854e8-b7d8-4c86-a4db-6c82fca4a715.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl3": "https://ph-files.imgix.net/fcb1b80e-97fa-4039-b28b-ec71f5934684.gif?fm=mp4&crop=max&w=256&h=160&dpr=2#t=0.001",
            "videoUrl": ""
          },
          {
            "rank": "16",
            "name": "Founder University",
            "icon": "https://ph-files.imgix.net/da99d696-026e-4534-8ca6-2400ed28c629.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "Founder University — 12-Week Pre-Accelerator: MVP to $25k Investment",
            "description": "Work on your idea, MVP, or existing product for 12 weeks. If you launch, get users, and demonstrate product velocity, you'll have a chance at receiving a $25k investment. Accepting 200+ builder founders for our upcoming cohort and look to invest in 30 teams.",
            "productUrl": "https://www.producthunt.com/products/founder-university/shoutouts",
            "websiteUrl": "https://www.founder.university/ph",
            "imageUrl1": "",
            "imageUrl2": "https://ph-files.imgix.net/6ed2f9d9-d514-4e9b-b76d-15bb04dc26d6.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl3": "https://ph-files.imgix.net/ef392e7c-62bd-44b3-8e4b-a9570e6b6805.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "videoUrl": "https://youtu.be/yDOzXfIouSQ"
          }
        ]
       
      },
      {
        "sub_category_name": "Virtual events",
        "sub_category_heading": "The best Virtual events in 2024",
        "products": [
          {
            "rank": "1",
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
            "rank": "2",
            "name": "Unreal Engine",
            "icon": "https://ph-files.imgix.net/d3cdb50a-4828-481e-b8b6-638fa386ff1f.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "Unreal Engine — Make something unreal",
            "description": "Unreal Engine is the world’s most open and advanced real-time 3D creation platform. Continuously evolving to serve not only its original purpose as a state-of-the-art games engine, today it gives creators across industries the freedom and control to deliver cutting-edge content, interactive experiences, and immersive virtual worlds.",
            "productUrl": "https://www.producthunt.com/products/unreal-engine/shoutouts",
            "websiteUrl": "https://www.unrealengine.com/",
            "imageUrl1": "",
            "imageUrl2": "https://youtu.be/bJPxq6QogKE",
            "imageUrl3": "https://ph-files.imgix.net/01e6cf0e-ad50-47b3-a5bc-e8c2027cfa8a.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "videoUrl": "https://youtu.be/VxzmukMHeCE"
          },
          {
            "rank": "3",
            "name": "Meta",
            "icon": "https://ph-files.imgix.net/d03e4bed-f4c2-4dc2-b8fa-8b031eed6fd6.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "Meta — Building the next evolution of digital connection.",
            "description": "Meta is helping build a future where people have more ways to play and connect in the metaverse. Welcome to the next chapter of social connection.",
            "productUrl": "https://www.producthunt.com/products/meta/shoutouts",
            "websiteUrl": "https://www.meta.com/",
            "imageUrl1": "https://ph-files.imgix.net/79ed5ed4-7a89-475e-85ed-3624a3b926ce.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&fit=crop&dpr=1",
            "imageUrl2": "https://ph-files.imgix.net/79ed5ed4-7a89-475e-85ed-3624a3b926ce.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&fit=crop&dpr=1",
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
      `INSERT INTO category (category_name, category_heading) VALUES ($1, $2) ON CONFLICT DO NOTHING RETURNING category_id`,
      [data.category.category_name, data.category.category_heading]
    );

    const category_id = categoryResult.rows[0].category_id;

    // Insert sub-categories and products
    for (const sub_category of data.category.sub_categories) {
      const subCategoryResult = await client.query(
        `INSERT INTO sub_category (sub_category_name, sub_category_heading, category_id) VALUES ($1, $2, $3) RETURNING sub_category_id`,
        [sub_category.sub_category_name, sub_category.sub_category_heading, category_id]
      );

      const sub_category_id = subCategoryResult.rows[0].sub_category_id;

      for (const product of sub_category.products) {
        // Check if the product already exists
        const productResult = await client.query(
          `SELECT product_id FROM products WHERE product_name = $1`,
          [product.product_name]
        );

        let product_id;
        if (productResult.rows.length === 0) {
          // Insert new product if it doesn't exist
          const newProductResult = await client.query(
            `INSERT INTO products (product_rank, product_name, product_icon, product_title, product_description, product_Url, website_Url, image_Url1, image_Url2, image_Url3, video_Url, category_id, sub_category_id) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13) RETURNING product_id`,
            [
              product.product_rank,
              product.product_name,
              product.product_icon,
              product.product_title,
              product.product_description,
              product.product_Url,
              product.website_Url,
              product.image_Url1,
              product.image_Url2,
              product.image_Url3,
              product.video_Url,
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
