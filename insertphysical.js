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
      "cat_name": "Physical Products",
      "cat_heading": "The best Physical Products in 2024",
      "sub_categories": [
        {
          "sub_cat_name": "Books",
          "sub_cat_heading": "The best Books in 2024",
          "products": [
            {
              "rank": "1",
              "imageUrl": "https://ph-files.imgix.net/f75bcb63-7f73-459c-bac6-35e717c3bac1.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
              "title": "Storyworth — The easiest way to document & discover beloved life stories",
              "description": "Storyworth makes it simple to document & discover loved ones' life stories. Each week, they receive a question about their life and share a story in an email response. After a year, their memories are bound into a beautiful keepsake book. With Storyworth, friends and family love to document timeless stories and discover new tales they might have never known."
            }
          ]
        },
        {
          "sub_cat_name": "Fitness",
          "sub_cat_heading": "The best Fitness in 2024",
          "products": [
            {
              "rank": "1",
              "imageUrl": "https://ph-files.imgix.net/041ce41b-00f3-4acd-b38a-95592e297e9f.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
              "title": "Strava — The #1 app for runners and cyclists",
              "description": "Strava is a social fitness network, that is primarily used to track cycling and running exercises, using GPS data although alternative types are available."
            }
          ]
        },
          {
            "sub_cat_name": "Games",
            "sub_cat_heading": "The best Games in 2024",
            "products": [
              {
                "rank": "1",
                "imageUrl": "https://ph-files.imgix.net/6b21aecb-3803-4e33-ad56-8870f7667c47.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "Unity — 3D, 2D VR & AR Engine",
                "description": "Build real-time 3D projects for various industries across games, animation, automotive, architecture, and more. Start creating with Unity today!"
              },
              {
                "rank": "2",
                "imageUrl": "https://ph-files.imgix.net/bdfc0b1d-7a68-4664-a7f8-1268b628cd3b.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "NVIDIA — The official handle for NVIDIA.",
                "description": "NVIDIA, inventor of the GPU, which creates interactive graphics on laptops, workstations, mobile devices, notebooks, PCs, and more. We created the world’s largest gaming platform and the world’s fastest supercomputer. We are the brains of self-driving cars, intelligent machines, and IoT."
              },
              {
                "rank": "3",
                "imageUrl": "https://ph-files.imgix.net/226cb944-ade1-4740-bb4d-233bd30d682f.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "Twitch — Livestream multiplayer games & esports",
                "description": "Twitch is a video live streaming service operated by Twitch Interactive, a subsidiary of Amazon. Twitch is the world's leading live streaming platform for gamers and the things we love. Watch and chat now with millions of other fans from around the world."
              },
              {
                "rank": "4",
                "imageUrl": "https://ph-files.imgix.net/9e382b5d-8bbb-4fab-9d92-ee1d3e723055.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "Meta Quest — All-in-one gaming system for virtual reality",
                "description": "The Oculus Quest is a virtual reality headset created by Oculus VR, a division of Facebook Inc. The device is fully standalone, features two, six degrees of freedom controllers, and runs on a Qualcomm Snapdragon 835 system on chip."
              },
              {
                "rank": "5",
                "imageUrl": "https://ph-files.imgix.net/d3cdb50a-4828-481e-b8b6-638fa386ff1f.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "Unreal Engine — Make something unreal",
                "description": "Unreal Engine is the world’s most open and advanced real-time 3D creation platform. Continuously evolving to serve not only its original purpose as a state-of-the-art games engine, today it gives creators across industries the freedom and control to deliver cutting-edge content, interactive experiences, and immersive virtual worlds."
              },
              {
                "rank": "6",
                "imageUrl": "https://ph-files.imgix.net/b99d037f-b683-4801-8dc0-8ef28a5d75fa.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "Pokemon GO — Augmented reality Pokemon-catching game",
                "description": "Join Trainers across the globe who are discovering Pokémon as they explore the world around them. Pokémon GO is the global gaming sensation that has been downloaded over 1 billion times"
              },
              {
                "rank": "7",
                "imageUrl": "https://ph-files.imgix.net/ab125eab-35d4-4161-8cf2-0465264cde95.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "GODOT — Godot is a 2D and 3D cross-platform compatible game engine.",
                "description": "GODOT is a 2D and 3D cross-platform compatible game engine released as open source software under the MIT license."
              },
              {
                "rank": "8",
                "imageUrl": "https://ph-files.imgix.net/da71481f-a239-49ac-ba8e-d8b9c2e1cbfa.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "Heardle — Heardle - Spotify Music Guessing Game",
                "description": "Since spotify decided to get rid of their headle game, here is a new version. I really enjoyed playing heardle and hated that spotify got rid of it. So I have been playing this version now and made it into a website."
              }
            ]
          },
          {
            "sub_cat_name": "Toys",
            "sub_cat_heading": "The best Toys in 2024",
            "products": [
              {
                "rank": "1",
                "imageUrl": "https://ph-files.imgix.net/cfc32f05-9ae6-4ca0-9efd-c4e6b1ce0ab1.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "Poem/1 — AI clock that tells the time with a rhyme, every minute",
                "description": "Tells the time with a brand new poem every minute, every single day, composed by ChatGPT. It’s sometimes profound, and sometimes weird, and very occasionally it fibs about what the actual time is to make a rhyme work."
              }
            ]
          },
          {
            "sub_cat_name": "Wearables",
            "sub_cat_heading": "The best Wearables in 2024",
            "products": [
              {
                "rank": "1",
                "imageUrl": "https://ph-files.imgix.net/5b087bb6-4c55-4900-9852-2f962a57b87f.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "Terra — API for apps to connect to wearables easily",
                "description": "TERRA makes it easy to connect your app to wearables, through a single API. Connect to WHOOP, Oura, Garmin, Freestyle Libre, Peloton, Apple, Google, and all the integrations."
              },
              {
                "rank": "2",
                "imageUrl": "https://ph-files.imgix.net/9e382b5d-8bbb-4fab-9d92-ee1d3e723055.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "Meta Quest — All-in-one gaming system for virtual reality",
                "description": "The Oculus Quest is a virtual reality headset created by Oculus VR, a division of Facebook Inc. The device is fully standalone, features two, six degrees of freedom controllers, and runs on a Qualcomm Snapdragon 835 system on chip."
              },
              {
                "rank": "3",
                "imageUrl": "https://ph-files.imgix.net/93938e31-ee30-4085-aa94-3c009a72932c.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "Oura — The world's first wellness ring and app",
                "description": "The most accurate sleep and activity tracker is all about you: it measures the physiological signals of your body, understands your lifestyle, and guides you to make your own optimal daily choices."
              },
              {
                "rank": "4",
                "imageUrl": "https://ph-files.imgix.net/be524e6e-bb63-430b-96bd-bdf7ce5a78f1.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "Fitbit — Sharing inspiration, motivation and new ways to help you find your fit.",
                "description": "These trackers are easy to use thanks to a touchscreen, backlit display and on-screen dashboard that helps you track sleep, activity and more—right from your wrist. ... You can wear Inspire & Inspire HR in the shower, pool and beyond."
              },
              {
                "rank": "5",
                "imageUrl": "https://ph-files.imgix.net/39fa125b-b949-49d0-99bd-c960671e2a2e.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "Limitless — Go beyond your mind's limitations",
                "description": "Limitless is personalized AI powered by what you've seen, said, and heard. It is a web app, a Mac app, a Windows app, and a wearable that helps overcome the brain’s limitations, specifically memory and focus. We create tools that augment—not replace—human intelligence with artificial intelligence to overcome the brain’s limitations."
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
