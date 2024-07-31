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
      "cat_name": "Health and Fitness",
      "cat_heading": "The best Health and Fitness in 2024",
      "sub_categories": [
        {
          "sub_cat_name": "Activity Tracking",
          "sub_cat_heading": "The best Activity Tracking in 2024",
          "products": [
            {
              "rank": "1",
              "imageUrl": "https://ph-files.imgix.net/5b384483-286e-4f5b-ac39-9b6e8ff36ddf.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
              "title": "Calorio — Track your calories easily by saying what you ate",
              "description": "Calorio simplifies calorie tracking: just click the mic button to tell your phone or computer what you ate, and our AI handles the rest!"
            },
            {
              "rank": "2",
              "imageUrl": "https://ph-files.imgix.net/be524e6e-bb63-430b-96bd-bdf7ce5a78f1.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
              "title": "Fitbit — Sharing inspiration, motivation and new ways to help you find your fit.",
              "description": "These trackers are easy to use thanks to a touchscreen, backlit display and on-screen dashboard that helps you track sleep, activity and more—right from your wrist. ... You can wear Inspire & Inspire HR in the shower, pool and beyond."
            },
            {
              "rank": "3",
              "imageUrl": "https://ph-files.imgix.net/93938e31-ee30-4085-aa94-3c009a72932c.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
              "title": "Oura — The world's first wellness ring and app",
              "description": "The most accurate sleep and activity tracker is all about you: it measures the physiological signals of your body, understands your lifestyle, and guides you to make your own optimal daily choices."
            },
            {
              "rank": "4",
              "imageUrl": "https://ph-files.imgix.net/041ce41b-00f3-4acd-b38a-95592e297e9f.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
              "title": "Strava — The #1 app for runners and cyclists",
              "description": "Strava is a social fitness network, that is primarily used to track cycling and running exercises, using GPS data although alternative types are available."
            }
          ]
        },
          {
            "sub_cat_name": "Hiking apps",
            "sub_cat_heading": "The best Hiking apps in 2024",
            "products": [
              {
                "rank": "1",
                "imageUrl": "https://ph-files.imgix.net/1a00ea36-1658-49a3-8736-dd83b7767e15.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "Google Maps — From your block to your next adventure, Google Maps helps you discover more 🗺️",
                "description": "Find a place. Your location. Trails. Dedicated lanes. Bicycle-friendly roads."
              },
              {
                "rank": "2",
                "imageUrl": "https://ph-files.imgix.net/041ce41b-00f3-4acd-b38a-95592e297e9f.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "Strava — The #1 app for runners and cyclists",
                "description": "Strava is a social fitness network, that is primarily used to track cycling and running exercises, using GPS data although alternative types are available."
              }
            ]
          },
          {
            "sub_cat_name": "Medical",
            "sub_cat_heading": "The best Medical in 2024",
            "products": [
              {
                "rank": "1",
                "imageUrl": "https://ph-files.imgix.net/10058ad5-0e31-487d-ba10-6e756768eeff.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "Thriva — Smart finger-prick blood tests you take at home",
                "description": ""
              }
            ]
          },
          {
            "sub_cat_name": "Meditation apps",
            "sub_cat_heading": "The best Meditation apps in 2024",
            "products": [
              {
                "rank": "1",
                "imageUrl": "https://ph-files.imgix.net/fa850061-a8dc-49b4-b524-5f501b0f9ad2.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "Calm — Find your calm",
                "description": "Calm is a software company based in San Francisco, California. It produces meditation products, including guided meditations and Sleep Stories."
              }
            ]
          },
          {
            "sub_cat_name": "Mental Health",
            "sub_cat_heading": "The best Mental Health in 2024",
            "products": [
              {
                "rank": "1",
                "imageUrl": "https://ph-files.imgix.net/385e1f9a-53fa-41d8-8e0e-65e9118752fe.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=14&h=14&fit=crop",
                "title": "Focused Work - Focus Timer — Flexible focus sessions to stay productive & avoid burnout.",
                "description": "Focused Work is a flexible Focus Timer that helps you stay productive and avoid burnout. It’s purpose-built for people who struggle with focusing and structuring their time effectively."
              },
              {
                "rank": "2",
                "imageUrl": "https://ph-files.imgix.net/c45d7132-2a52-4e7c-a74d-8d2e361652ae.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "GoodMind — AI-powered assessments & stigma-free counselling sessions",
                "description": "▪️We are live. Take our free assessment test and book your appointment today! ▪️GoodMind has launched. No more suffering in silence. Talk about your feelings and get connected to the best therapist. ▪️Come let's embark on a journey towards a happier you."
              },
              {
                "rank": "3",
                "imageUrl": "https://ph-files.imgix.net/948b4eda-cf34-4671-bda5-05995a7763de.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "Sonia AI Therapy — An emotionally intelligent AI-powered therapist",
                "description": "A fully AI-powered cognitive behavioral therapist. Think of a standard conversational therapy session, but talking to an empathic voice on your phone instead of to a human in their clinic."
              },
              {
                "rank": "4",
                "imageUrl": "https://ph-files.imgix.net/ee5a3e1f-185b-43eb-857c-14b6a2145499.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "ScreenZen — Build a balanced relationship with your phone",
                "description": "We all use our phones more than we should and setting app time limits doesn’t work. We just override it and get back to scrolling. ScreenZen for iOS uses rewards, gamification and awareness to help you build a balanced relationship with your phone that lasts."
              },
              {
                "rank": "5",
                "imageUrl": "https://ph-files.imgix.net/6e3e6dad-4890-4ae8-b0cb-5675c8dd273e.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "Replika — Always here to listen and talk. Always on your side.",
                "description": ""
              },
              {
                "rank": "6",
                "imageUrl": "https://ph-files.imgix.net/235bce6b-8ba4-4f8a-9a35-96866d2b6c50.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "Focus Bear — Block Distractions. Build Habits. For ADHDers by ADHDers.",
                "description": "Focus Bear is a productivity and habit app built by a team with ADHD and ASD for people who need better focus. Helps you build better habits through real time habit guidance. Gets you into deep work by blocking distractions across all your devices (desktop and mobile)."
              },
              {
                "rank": "7",
                "imageUrl": "https://ph-files.imgix.net/1df8c15b-92c2-4a89-bfdf-52584936c711.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "Bublr — An ultra-minimal platform to let your thoughts out",
                "description": "Embrace catharsis with our minimalist platform, a safe haven for your highs and lows. Share thoughts anonymously or unmasked, celebrating the essence of you. Your voice, your choice. Bublr, made by people, for the people."
              },
              {
                "rank": "8",
                "imageUrl": "https://ph-files.imgix.net/40bd4aa5-0cee-467f-83d1-48974a71e311.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "Coffee — Health, Coffee",
                "description": "Do you enjoy coffee? Many people do not begin their day without a cup of coffee in the morning. Coffee aficionados feel that coffee provides them with a true need for energy and helps them get through the day."
              },
              {
                "rank": "9",
                "imageUrl": "https://ph-files.imgix.net/39fa125b-b949-49d0-99bd-c960671e2a2e.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "Limitless — Go beyond your mind's limitations",
                "description": "Limitless is personalized AI powered by what you've seen, said, and heard. It is a web app, a Mac app, a Windows app, and a wearable that helps overcome the brain’s limitations, specifically memory and focus. We create tools that augment—not replace—human intelligence with artificial intelligence to overcome the brain’s limitations."
              }
            ]
          },
          {
            "sub_cat_name": "Sleep apps",
            "sub_cat_heading": "The best Sleep apps in 2024",
            "products": [
              {
                "rank": "1",
                "imageUrl": "https://ph-files.imgix.net/385e1f9a-53fa-41d8-8e0e-65e9118752fe.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=14&h=14&fit=crop",
                "title": "Dark Noise — A simple white noise generator for iOS",
                "description": "Dark Noise is a simple yet powerful way to play ambient noise to help you sleep, focus, or relax. Each of the 30+ high-quality sounds features a delightfully animated icon that brings the sound to life. Deep integrations with iOS make it easier than ever to start an ambient noise with a tap or even your voice!"
              },
              {
                "rank": "2",
                "imageUrl": "https://ph-files.imgix.net/fa850061-a8dc-49b4-b524-5f501b0f9ad2.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "Calm — Find your calm",
                "description": "Calm is a software company based in San Francisco, California. It produces meditation products, including guided meditations and Sleep Stories."
              },
              {
                "rank": "3",
                "imageUrl": "https://ph-files.imgix.net/be524e6e-bb63-430b-96bd-bdf7ce5a78f1.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "Fitbit — Sharing inspiration, motivation and new ways to help you find your fit.",
                "description": "These trackers are easy to use thanks to a touchscreen, backlit display and on-screen dashboard that helps you track sleep, activity and more—right from your wrist. ... You can wear Inspire & Inspire HR in the shower, pool and beyond."
              },
              {
                "rank": "4",
                "imageUrl": "https://ph-files.imgix.net/93938e31-ee30-4085-aa94-3c009a72932c.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "Oura — The world's first wellness ring and app",
                "description": "The most accurate sleep and activity tracker is all about you: it measures the physiological signals of your body, understands your lifestyle, and guides you to make your own optimal daily choices."
              }
            ]
          },
          {
            "sub_cat_name": "Therapy apps",
            "sub_cat_heading": "The best Therapy apps in 2024",
            "products": [
              {
                "rank": "1",
                "imageUrl": "https://ph-files.imgix.net/c45d7132-2a52-4e7c-a74d-8d2e361652ae.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "GoodMind — AI-powered assessments & stigma-free counselling sessions",
                "description": "▪️We are live. Take our free assessment test and book your appointment today! ▪️GoodMind has launched. No more suffering in silence. Talk about your feelings and get connected to the best therapist. ▪️Come let's embark on a journey towards a happier you."
              },
              {
                "rank": "2",
                "imageUrl": "https://ph-files.imgix.net/948b4eda-cf34-4671-bda5-05995a7763de.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "Sonia AI Therapy — An emotionally intelligent AI-powered therapist",
                "description": "A fully AI-powered cognitive behavioral therapist. Think of a standard conversational therapy session, but talking to an empathic voice on your phone instead of to a human in their clinic."
              },
              {
                "rank": "3",
                "imageUrl": "https://ph-files.imgix.net/6e3e6dad-4890-4ae8-b0cb-5675c8dd273e.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "Replika — Always here to listen and talk. Always on your side.",
                "description": ""
              }
            ]
          },
          {
            "sub_cat_name": "Workout platforms",
            "sub_cat_heading": "The best Workout platforms in 2024",
            "products": [
              {
                "rank": "1",
                "imageUrl": "https://ph-files.imgix.net/be524e6e-bb63-430b-96bd-bdf7ce5a78f1.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "Fitbit — Sharing inspiration, motivation and new ways to help you find your fit.",
                "description": "These trackers are easy to use thanks to a touchscreen, backlit display and on-screen dashboard that helps you track sleep, activity and more—right from your wrist. ... You can wear Inspire & Inspire HR in the shower, pool and beyond."
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
