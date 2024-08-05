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
    "cat_name": "Health and Fitness",
    "cat_heading": "The best Health and Fitness in 2024",
    "sub_categories": [
      {
        "sub_cat_name": "Activity tracking",
        "sub_cat_heading": "The best Activity tracking in 2024",
        "products": [
          {
            "rank": "1",
            "name": "beehiiv",
            "icon": "https://ph-files.imgix.net/7e52d2b9-4e2e-4451-a375-e71ce46358c4.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "beehiiv — The most creator-friendly newsletter platform, period.",
            "description": "beehiiv empowers people to create, monetize, and grow by providing the most powerful and robust newsletter platform, holistically under one roof. We'll provide best-in-class tools to help you succeed, and you get to keep all of the revenue for yourself.",
            "productUrl": "https://www.producthunt.com/products/beehiiv/shoutouts",
            "websiteUrl": "https://www.beehiiv.com/",
            "imageUrl1": "https://ph-files.imgix.net/10b35cb3-8c3a-4ccb-90ee-58576257d0f2.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl2": "https://ph-files.imgix.net/af3687ca-a13f-44e9-966a-2073da1c687c.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl3": "https://ph-files.imgix.net/8f92fe43-364d-4eb7-bdde-960f4d5ced76.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "videoUrl": ""
          },
          {
            "rank": "2",
            "name": "Strava",
            "icon": "https://ph-files.imgix.net/041ce41b-00f3-4acd-b38a-95592e297e9f.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "Strava — The #1 app for runners and cyclists",
            "description": "Strava is a social fitness network, that is primarily used to track cycling and running exercises, using GPS data although alternative types are available.",
            "productUrl": "https://www.producthunt.com/products/strava/shoutouts",
            "websiteUrl": "http://www.strava.com/",
            "imageUrl1": "https://ph-files.imgix.net/4cefa905-9973-41e1-b9af-1c457e88719c.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl2": "https://ph-files.imgix.net/721d6f4e-391c-4367-aca3-1f483b00dc2d.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl3": "https://ph-files.imgix.net/1c6e059f-d461-46e6-b1c0-168a423582f2.gif?fm=mp4&crop=max&w=256&h=160&dpr=2#t=0.001",
            "videoUrl": ""
          },
          {
            "rank": "3",
            "name": "Calorio",
            "icon": "https://ph-files.imgix.net/5b384483-286e-4f5b-ac39-9b6e8ff36ddf.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "Calorio — Track your calories easily by saying what you ate",
            "description": "Calorio simplifies calorie tracking: just click the mic button to tell your phone or computer what you ate, and our AI handles the rest!",
            "productUrl": "https://www.producthunt.com/products/calorio/shoutouts",
            "websiteUrl": "https://www.calorio.xyz/",
            "imageUrl1": "https://ph-files.imgix.net/78293fda-39f7-4afe-ac58-44dd5b92c2e7.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop&dpr=1",
            "imageUrl2": "https://ph-files.imgix.net/4cc9f22b-9fec-4c1c-9f63-5da01896eb0e.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop&dpr=1",
            "imageUrl3": "",
            "videoUrl": ""
          },
          {
            "rank": "4",
            "name": "Fitbit",
            "icon": "https://ph-files.imgix.net/be524e6e-bb63-430b-96bd-bdf7ce5a78f1.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "Fitbit — Sharing inspiration, motivation and new ways to help you find your fit.",
            "description": "These trackers are easy to use thanks to a touchscreen, backlit display and on-screen dashboard that helps you track sleep, activity and more—right from your wrist. ... You can wear Inspire & Inspire HR in the shower, pool and beyond.",
            "productUrl": "https://www.producthunt.com/products/fitbit/shoutouts",
            "websiteUrl": "http://www.fitbit.com/",
            "imageUrl1": "",
            "imageUrl2": "https://ph-files.imgix.net/9d472d80-2e74-4704-9d9f-e90b539cb40c.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl3": "https://ph-files.imgix.net/c2143ea0-ad82-4bd2-b724-072c9ba34f92.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "videoUrl": "https://youtu.be/MWAtfNqXttk"
          },
          {
            "rank": "5",
            "name": "Oura",
            "icon": "https://ph-files.imgix.net/93938e31-ee30-4085-aa94-3c009a72932c.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "Oura — The world's first wellness ring and app",
            "description": "The most accurate sleep and activity tracker is all about you: it measures the physiological signals of your body, understands your lifestyle, and guides you to make your own optimal daily choices.",
            "productUrl": "https://www.producthunt.com/products/oura/shoutouts",
            "websiteUrl": "http://www.ouraring.com/",
            "imageUrl1": "",
            "imageUrl2": "https://ph-files.imgix.net/740deb48-fe0b-4f50-8896-61489746392e.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl3": "https://ph-files.imgix.net/b2c656bb-a762-432c-bac6-0eade938147a.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "videoUrl": ""
          }
        ]
        
      },
      {
        "sub_cat_name": "Hiking apps",
        "sub_cat_heading": "The best Hiking apps in 2024",
        "products": [
          {
            "rank": "1",
            "name": "Google Maps",
            "icon": "https://ph-files.imgix.net/1a00ea36-1658-49a3-8736-dd83b7767e15.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "Google Maps — From your block to your next adventure, Google Maps helps you discover more 🗺️",
            "description": "Find a place. Your location. Trails. Dedicated lanes. Bicycle-friendly roads.",
            "productUrl": "https://www.producthunt.com/products/google-maps/shoutouts",
            "websiteUrl": "http://maps.google.com/",
            "imageUrl1": "https://ph-files.imgix.net/8c06e199-d55a-4845-8be8-d687c9ddd972.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop&dpr=1",
            "imageUrl2": "https://ph-files.imgix.net/92aea8ea-f594-495c-97f2-7631da694c23.gif?fm=mp4&crop=max&w=256&h=160&dpr=2#t=0.001",
            "imageUrl3": "",
            "videoUrl": ""
          },
          {
            "rank": "2",
            "name": "Strava",
            "icon": "https://ph-files.imgix.net/041ce41b-00f3-4acd-b38a-95592e297e9f.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "Strava — The #1 app for runners and cyclists",
            "description": "Strava is a social fitness network, that is primarily used to track cycling and running exercises, using GPS data although alternative types are available.",
            "productUrl": "https://www.producthunt.com/products/strava/shoutouts",
            "websiteUrl": "http://www.strava.com/",
            "imageUrl1": "https://ph-files.imgix.net/4cefa905-9973-41e1-b9af-1c457e88719c.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl2": "https://ph-files.imgix.net/721d6f4e-391c-4367-aca3-1f483b00dc2d.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl3": "https://ph-files.imgix.net/1c6e059f-d461-46e6-b1c0-168a423582f2.gif?fm=mp4&crop=max&w=256&h=160&dpr=2#t=0.001",
            "videoUrl": ""
          }
        ]
       
      },
      {
        "sub_cat_name": "Medical",
        "sub_cat_heading": "The best Medical in 2024",
        "products": [
          {
            "rank": "1",
            "name": "Thriva",
            "icon": "https://ph-files.imgix.net/10058ad5-0e31-487d-ba10-6e756768eeff.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "Thriva — Smart finger-prick blood tests you take at home",
            "description": "",
            "productUrl": "https://www.producthunt.com/products/thriva/shoutouts",
            "websiteUrl": "https://thriva.co/",
            "imageUrl1": "https://ph-files.imgix.net/3a173080-b981-4d44-86fa-13f40c8a0fe1.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl2": "https://ph-files.imgix.net/cd5cc33f-3091-4b3c-97d5-4a567b20bf44.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl3": "https://ph-files.imgix.net/8d57470d-60e9-4149-ae7f-017af44aff02.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "videoUrl": ""
          }
        ]
        
      },
      {
        "sub_cat_name": "Meditation apps",
        "sub_cat_heading": "The best Meditation apps in 2024",
        "products": [
          {
            "rank": "1",
            "name": "Calm",
            "icon": "https://ph-files.imgix.net/fa850061-a8dc-49b4-b524-5f501b0f9ad2.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "Calm — Find your calm",
            "description": "Calm is a software company based in San Francisco, California. It produces meditation products, including guided meditations and Sleep Stories.",
            "productUrl": "https://www.producthunt.com/products/calm/shoutouts",
            "websiteUrl": "http://www.calm.com/",
            "imageUrl1": "https://ph-files.imgix.net/b9ca627b-3757-49d8-bf91-a51e1e215a57.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop&dpr=1",
            "imageUrl2": "https://ph-files.imgix.net/e8d06a9e-76df-43b0-9fb0-304ce171477f.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop&dpr=1",
            "imageUrl3": "",
            "videoUrl": ""
          }
        ]
       
      },
      {
        "sub_cat_name": "Mental Health",
        "sub_cat_heading": "The best Mental Health in 2024",
        "products": [
          {
            "rank": "1",
            "name": "minimalist phone: reduce your screentime",
            "icon": "https://ph-files.imgix.net/358b066e-c0b7-4f98-95ca-a942a846b80d.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "minimalist phone: reduce your screentime — Turn your Android phone into minimalist phone.",
            "description": "Avoid mindless scrolling and eliminate distractions. With minimalist phone, you can filter notifications, block or hide other apps and much more. minimalist phone has reminders that help you not to get lost in apps with endless scroll feeds.",
            "productUrl": "https://www.producthunt.com/products/minimalist-phone-reduce-your-screentime/shoutouts",
            "websiteUrl": "https://www.minimalistphone.com/",
            "imageUrl1": "",
            "imageUrl2": "https://ph-files.imgix.net/b0f8c93b-f656-45c0-8df6-122f3a971b7f.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl3": "https://ph-files.imgix.net/49ddba02-9877-4f92-803c-08ca43455dd9.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "videoUrl": "https://youtu.be/lJKrmJve5Jo"
          },
          {
            "rank": "2",
            "name": "Focused Work - Focus Timer",
            "icon": "https://ph-files.imgix.net/385e1f9a-53fa-41d8-8e0e-65e9118752fe.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=14&h=14&fit=crop",
            "title": "Focused Work - Focus Timer — Flexible focus sessions to stay productive & avoid burnout.",
            "description": "Focused Work is a flexible Focus Timer that helps you stay productive and avoid burnout. It’s purpose-built for people who struggle with focusing and structuring their time effectively.",
            "productUrl": "https://www.producthunt.com/products/focused-work-focus-timer/shoutouts",
            "websiteUrl": "https://focusedwork.app/",
            "imageUrl1": "",
            "imageUrl2": "https://ph-files.imgix.net/a7ea21b0-850d-473a-aff4-ed0105457682.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl3": "https://ph-files.imgix.net/28212fa0-127f-450c-8292-306e6c9c9818.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "videoUrl": "https://youtu.be/HCVPfA5vgZw"
          },
          {
            "rank": "3",
            "name": "GoodMind",
            "icon": "https://ph-files.imgix.net/c45d7132-2a52-4e7c-a74d-8d2e361652ae.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "GoodMind — AI-powered assessments & stigma-free counselling sessions",
            "description": "▪️We are live. Take our free assessment test and book your appointment today! ▪️GoodMind has launched. No more suffering in silence. Talk about your feelings and get connected to the best therapist. ▪️Come let's embark on a journey towards a happier you.",
            "productUrl": "https://www.producthunt.com/products/goodmind/shoutouts",
            "websiteUrl": "https://goodmind.co/",
            "imageUrl1": "https://ph-files.imgix.net/2c6f035c-43bb-4db3-acd2-f770093c3db5.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl2": "https://ph-files.imgix.net/f3addfd3-2215-4f53-ab76-53b5e5eb7b55.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl3": "https://ph-files.imgix.net/d97ebf2d-354d-43f9-8609-8ab50eb57f76.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "videoUrl": ""
          },
          {
            "rank": "4",
            "name": "Sonia AI Therapy",
            "icon": "https://ph-files.imgix.net/948b4eda-cf34-4671-bda5-05995a7763de.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "Sonia AI Therapy — An emotionally intelligent AI-powered therapist",
            "description": "A fully AI-powered cognitive behavioral therapist. Think of a standard conversational therapy session, but talking to an empathic voice on your phone instead of to a human in their clinic.",
            "productUrl": "https://www.producthunt.com/products/sonia-ai-therapy/shoutouts",
            "websiteUrl": "https://apps.apple.com/us/app/sonia-ai-therapy/id6472111765",
            "imageUrl1": "https://ph-files.imgix.net/d08b332e-a5e3-464b-b442-569c234044dd.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl2": "https://ph-files.imgix.net/1e5909c8-f85d-498e-9b57-07c6368e9a36.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl3": "https://ph-files.imgix.net/4effdeb3-279b-46d6-9c96-85cbe6ebcf21.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "videoUrl": ""
          },
          {
            "rank": "5",
            "name": "ScreenZen",
            "icon": "https://ph-files.imgix.net/ee5a3e1f-185b-43eb-857c-14b6a2145499.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "ScreenZen — Build a balanced relationship with your phone",
            "description": "We all use our phones more than we should and setting app time limits doesn’t work. We just override it and get back to scrolling. ScreenZen for iOS uses rewards, gamification and awareness to help you build a balanced relationship with your phone that lasts.",
            "productUrl": "https://www.producthunt.com/products/screenzen/shoutouts",
            "websiteUrl": "https://apps.apple.com/us/app/screenzen-screen-time-control/id1541027222",
            "imageUrl1": "",
            "imageUrl2": "https://ph-files.imgix.net/2edaf2ba-aaa1-4b9f-a701-253e0bc16619.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl3": "https://ph-files.imgix.net/706bcb55-4a8f-40db-91bc-66bfea2b5afe.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "videoUrl": "https://youtu.be/T6IeuQw9DPU"
          },
          {
            "rank": "6",
            "name": "Replika",
            "icon": "https://ph-files.imgix.net/6e3e6dad-4890-4ae8-b0cb-5675c8dd273e.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "Replika — Always here to listen and talk. Always on your side.",
            "description": "",
            "productUrl": "https://www.producthunt.com/products/replika-2/shoutouts",
            "websiteUrl": "https://replika.com/",
            "imageUrl1": "",
            "imageUrl2": "",
            "imageUrl3": "",
            "videoUrl": ""
          },
          {
            "rank": "7",
            "name": "Focus Bear",
            "icon": "https://ph-files.imgix.net/235bce6b-8ba4-4f8a-9a35-96866d2b6c50.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "Focus Bear — Block Distractions. Build Habits. For ADHDers by ADHDers.",
            "description": "Focus Bear is a productivity and habit app built by a team with ADHD and ASD for people who need better focus. Helps you build better habits through real time habit guidance. Gets you into deep work by blocking distractions across all your devices (desktop and mobile).",
            "productUrl": "https://www.producthunt.com/products/focus-bear/shoutouts",
            "websiteUrl": "https://www.focusbear.io/",
            "imageUrl1": "https://ph-files.imgix.net/ee71446a-32af-45a5-be18-6f9fa064bec5.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&fit=crop&dpr=1",
            "imageUrl2": "",
            "imageUrl3": "",
            "videoUrl": ""
          },
          {
            "rank": "8",
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
            "rank": "9",
            "name": "Coffee",
            "icon": "https://ph-files.imgix.net/40bd4aa5-0cee-467f-83d1-48974a71e311.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "Coffee — Health, Coffee",
            "description": "Do you enjoy coffee? Many people do not begin their day without a cup of coffee in the morning. Coffee aficionados feel that coffee provides them with a true need for energy and helps them get through the day.",
            "productUrl": "https://www.producthunt.com/products/coffee-5/shoutouts",
            "websiteUrl": "https://www.whitecannon.com/2022/09/5-amazing-coffee-facts-everyone-should-know.html",
            "imageUrl1": "https://ph-files.imgix.net/d757304b-186d-4129-b29f-0905cba33c2d.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&fit=crop&dpr=1",
            "imageUrl2": "",
            "imageUrl3": "",
            "videoUrl": ""
          },
          {
            "rank": "10",
            "name": "Limitless",
            "icon": "https://ph-files.imgix.net/39fa125b-b949-49d0-99bd-c960671e2a2e.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "Limitless — Go beyond your mind's limitations",
            "description": "Limitless is personalized AI powered by what you've seen, said, and heard. It is a web app, a Mac app, a Windows app, and a wearable that helps overcome the brain’s limitations, specifically memory and focus. We create tools that augment—not replace—human intelligence with artificial intelligence to overcome the brain’s limitations.",
            "productUrl": "https://www.producthunt.com/products/rewind-2/shoutouts",
            "websiteUrl": "https://www.limitless.ai/",
            "imageUrl1": "https://ph-files.imgix.net/90de7cae-fd0c-46f6-986b-e13c8b063940.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl2": "https://ph-files.imgix.net/b8c7f5ba-f95c-4040-b455-a06baee8b921.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl3": "https://ph-files.imgix.net/a6d5459e-0f04-4269-b2b8-48c4b95bcc51.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "videoUrl": ""
          }
        ]
        
      },
      {
        "sub_cat_name": "Sleep apps",
        "sub_cat_heading": "The best Sleep apps in 2024",
        "products": [
          {
            "rank": "1",
            "name": "Dark Noise",
            "icon": "https://ph-files.imgix.net/385e1f9a-53fa-41d8-8e0e-65e9118752fe.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=14&h=14&fit=crop",
            "title": "Dark Noise — A simple white noise generator for iOS",
            "description": "Dark Noise is a simple yet powerful way to play ambient noise to help you sleep, focus, or relax. Each of the 30+ high-quality sounds features a delightfully animated icon that brings the sound to life. Deep integrations with iOS make it easier than ever to start an ambient noise with a tap or even your voice!",
            "productUrl": "https://www.producthunt.com/products/dark-noise/shoutouts",
            "websiteUrl": "https://darknoise.app/",
            "imageUrl1": "",
            "imageUrl2": "https://ph-files.imgix.net/9e2bd099-073d-402c-b136-e76ca040ba24.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl3": "https://ph-files.imgix.net/70194a5b-4a5d-43e5-bce2-2e31cceebded.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "videoUrl": "https://youtu.be/Q7BDtu9CkAI"
          },
          {
            "rank": "2",
            "name": "Calm",
            "icon": "https://ph-files.imgix.net/fa850061-a8dc-49b4-b524-5f501b0f9ad2.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "Calm — Find your calm",
            "description": "Calm is a software company based in San Francisco, California. It produces meditation products, including guided meditations and Sleep Stories.",
            "productUrl": "https://www.producthunt.com/products/calm/shoutouts",
            "websiteUrl": "http://www.calm.com/",
            "imageUrl1": "https://ph-files.imgix.net/b9ca627b-3757-49d8-bf91-a51e1e215a57.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop&dpr=1",
            "imageUrl2": "https://ph-files.imgix.net/e8d06a9e-76df-43b0-9fb0-304ce171477f.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop&dpr=1",
            "imageUrl3": "",
            "videoUrl": ""
          },
          {
            "rank": "3",
            "name": "Fitbit",
            "icon": "https://ph-files.imgix.net/be524e6e-bb63-430b-96bd-bdf7ce5a78f1.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "Fitbit — Sharing inspiration, motivation and new ways to help you find your fit.",
            "description": "These trackers are easy to use thanks to a touchscreen, backlit display and on-screen dashboard that helps you track sleep, activity and more—right from your wrist. ... You can wear Inspire & Inspire HR in the shower, pool and beyond.",
            "productUrl": "https://www.producthunt.com/products/fitbit/shoutouts",
            "websiteUrl": "http://www.fitbit.com/",
            "imageUrl1": "",
            "imageUrl2": "https://ph-files.imgix.net/9d472d80-2e74-4704-9d9f-e90b539cb40c.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl3": "https://ph-files.imgix.net/c2143ea0-ad82-4bd2-b724-072c9ba34f92.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "videoUrl": "https://youtu.be/MWAtfNqXttk"
          },
          {
            "rank": "4",
            "name": "Oura",
            "icon": "https://ph-files.imgix.net/93938e31-ee30-4085-aa94-3c009a72932c.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "Oura — The world's first wellness ring and app",
            "description": "The most accurate sleep and activity tracker is all about you: it measures the physiological signals of your body, understands your lifestyle, and guides you to make your own optimal daily choices.",
            "productUrl": "https://www.producthunt.com/products/oura/shoutouts",
            "websiteUrl": "http://www.ouraring.com/",
            "imageUrl1": "",
            "imageUrl2": "https://ph-files.imgix.net/740deb48-fe0b-4f50-8896-61489746392e.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl3": "https://ph-files.imgix.net/b2c656bb-a762-432c-bac6-0eade938147a.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "videoUrl": ""
          }
        ]
       
      },
      {
        "sub_cat_name": "Therapy apps",
        "sub_cat_heading": "The best Therapy apps in 2024",
        "products": [
          {
            "rank": "1",
            "name": "GoodMind",
            "icon": "https://ph-files.imgix.net/c45d7132-2a52-4e7c-a74d-8d2e361652ae.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "GoodMind — AI-powered assessments & stigma-free counselling sessions",
            "description": "▪️We are live. Take our free assessment test and book your appointment today! ▪️GoodMind has launched. No more suffering in silence. Talk about your feelings and get connected to the best therapist. ▪️Come let's embark on a journey towards a happier you.",
            "productUrl": "https://www.producthunt.com/products/goodmind/shoutouts",
            "websiteUrl": "https://goodmind.co/",
            "imageUrl1": "https://ph-files.imgix.net/2c6f035c-43bb-4db3-acd2-f770093c3db5.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl2": "https://ph-files.imgix.net/f3addfd3-2215-4f53-ab76-53b5e5eb7b55.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl3": "https://ph-files.imgix.net/d97ebf2d-354d-43f9-8609-8ab50eb57f76.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "videoUrl": ""
          },
          {
            "rank": "2",
            "name": "Sonia AI Therapy",
            "icon": "https://ph-files.imgix.net/948b4eda-cf34-4671-bda5-05995a7763de.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "Sonia AI Therapy — An emotionally intelligent AI-powered therapist",
            "description": "A fully AI-powered cognitive behavioral therapist. Think of a standard conversational therapy session, but talking to an empathic voice on your phone instead of to a human in their clinic.",
            "productUrl": "https://www.producthunt.com/products/sonia-ai-therapy/shoutouts",
            "websiteUrl": "https://apps.apple.com/us/app/sonia-ai-therapy/id6472111765",
            "imageUrl1": "https://ph-files.imgix.net/d08b332e-a5e3-464b-b442-569c234044dd.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl2": "https://ph-files.imgix.net/1e5909c8-f85d-498e-9b57-07c6368e9a36.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl3": "https://ph-files.imgix.net/4effdeb3-279b-46d6-9c96-85cbe6ebcf21.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "videoUrl": ""
          },
          {
            "rank": "3",
            "name": "Replika",
            "icon": "https://ph-files.imgix.net/6e3e6dad-4890-4ae8-b0cb-5675c8dd273e.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "Replika — Always here to listen and talk. Always on your side.",
            "description": "",
            "productUrl": "https://www.producthunt.com/products/replika-2/shoutouts",
            "websiteUrl": "https://replika.com/",
            "imageUrl1": "",
            "imageUrl2": "",
            "imageUrl3": "",
            "videoUrl": ""
          }
        ]
       
      },
      {
        "sub_cat_name": "Workout platforms",
        "sub_cat_heading": "The best Workout platforms in 2024",
        "products": [
          {
            "rank": "1",
            "name": "beehiiv",
            "icon": "https://ph-files.imgix.net/7e52d2b9-4e2e-4451-a375-e71ce46358c4.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "beehiiv — The most creator-friendly newsletter platform, period.",
            "description": "beehiiv empowers people to create, monetize, and grow by providing the most powerful and robust newsletter platform, holistically under one roof. We'll provide best-in-class tools to help you succeed, and you get to keep all of the revenue for yourself.",
            "productUrl": "https://www.producthunt.com/products/beehiiv/shoutouts",
            "websiteUrl": "https://www.beehiiv.com/",
            "imageUrl1": "https://ph-files.imgix.net/10b35cb3-8c3a-4ccb-90ee-58576257d0f2.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl2": "https://ph-files.imgix.net/af3687ca-a13f-44e9-966a-2073da1c687c.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl3": "https://ph-files.imgix.net/8f92fe43-364d-4eb7-bdde-960f4d5ced76.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "videoUrl": ""
          },
          {
            "rank": "2",
            "name": "Fitbit",
            "icon": "https://ph-files.imgix.net/be524e6e-bb63-430b-96bd-bdf7ce5a78f1.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "Fitbit — Sharing inspiration, motivation and new ways to help you find your fit.",
            "description": "These trackers are easy to use thanks to a touchscreen, backlit display and on-screen dashboard that helps you track sleep, activity and more—right from your wrist. ... You can wear Inspire & Inspire HR in the shower, pool and beyond.",
            "productUrl": "https://www.producthunt.com/products/fitbit/shoutouts",
            "websiteUrl": "http://www.fitbit.com/",
            "imageUrl1": "",
            "imageUrl2": "https://ph-files.imgix.net/9d472d80-2e74-4704-9d9f-e90b539cb40c.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl3": "https://ph-files.imgix.net/c2143ea0-ad82-4bd2-b724-072c9ba34f92.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "videoUrl": "https://youtu.be/MWAtfNqXttk"
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