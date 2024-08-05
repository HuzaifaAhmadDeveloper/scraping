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
    "category_name": "Physical Products",
    "category_heading": "The best Physical Products in 2024",
    "sub_categories": [
      {
        "sub_category_name": "Books",
        "sub_category_heading": "The best Books in 2024",
        "products": [
          {
            "rank": "1",
            "name": "Storyworth",
            "icon": "https://ph-files.imgix.net/f75bcb63-7f73-459c-bac6-35e717c3bac1.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "Storyworth — The easiest way to document & discover beloved life stories",
            "description": "Storyworth makes it simple to document & discover loved ones' life stories. Each week, they receive a question about their life and share a story in an email response. After a year, their memories are bound into a beautiful keepsake book. With Storyworth, friends and family love to document timeless stories and discover new tales they might have never known.",
            "productUrl": "https://www.producthunt.com/products/storyworth/shoutouts",
            "websiteUrl": "https://www.storyworth.com/",
            "imageUrl1": "https://ph-files.imgix.net/8f4fc41f-551c-4eb2-a403-ae9a13ebef78.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl2": "https://ph-files.imgix.net/f87a4489-7578-405c-92c7-c93ca4f282d5.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl3": "https://ph-files.imgix.net/029f919d-fa9e-48cd-bafc-8ac0558f7148.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "videoUrl": ""
          }
        ]
        
      },
      {
        "sub_category_name": "Fitness",
        "sub_category_heading": "The best Fitness in 2024",
        "products": [
          {
            "rank": "1",
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
        "sub_category_name": "Games",
        "sub_category_heading": "The best Games in 2024",
        "products": [
          {
            "rank": "1",
            "name": "Unity",
            "icon": "https://ph-files.imgix.net/6b21aecb-3803-4e33-ad56-8870f7667c47.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "Unity — 3D, 2D VR & AR Engine",
            "description": "Build real-time 3D projects for various industries across games, animation, automotive, architecture, and more. Start creating with Unity today!",
            "productUrl": "https://www.producthunt.com/products/unity/shoutouts",
            "websiteUrl": "https://unity.com/",
            "imageUrl1": "https://ph-files.imgix.net/45c238cc-ec96-4dc9-a071-d27cc59d88f7.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&fit=crop&dpr=1",
            "imageUrl2": "",
            "imageUrl3": "",
            "videoUrl": ""
          },
          {
            "rank": "2",
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
            "rank": "3",
            "name": "NVIDIA",
            "icon": "https://ph-files.imgix.net/bdfc0b1d-7a68-4664-a7f8-1268b628cd3b.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "NVIDIA — The official handle for NVIDIA.",
            "description": "NVIDIA, inventor of the GPU, which creates interactive graphics on laptops, workstations, mobile devices, notebooks, PCs, and more. We created the world’s largest gaming platform and the world’s fastest supercomputer. We are the brains of self-driving cars, intelligent machines, and IoT.",
            "productUrl": "https://www.producthunt.com/products/nvidia/shoutouts",
            "websiteUrl": "http://www.nvidia.com/",
            "imageUrl1": "",
            "imageUrl2": "https://ph-files.imgix.net/aa0c314f-e383-43e7-a557-88f1045d9314.webp?fm=mp4&crop=max&w=256&h=160&dpr=2#t=0.001",
            "imageUrl3": "https://ph-files.imgix.net/1a63bc12-0986-4b4a-bf47-2d3e2993eb2f.webp?fm=mp4&crop=max&w=256&h=160&dpr=2#t=0.001",
            "videoUrl": "https://youtu.be/Y2F8yisiS6E"
          },
          {
            "rank": "4",
            "name": "Meta Quest",
            "icon": "https://ph-files.imgix.net/9e382b5d-8bbb-4fab-9d92-ee1d3e723055.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "Meta Quest — All-in-one gaming system for virtual reality",
            "description": "The Oculus Quest is a virtual reality headset created by Oculus VR, a division of Facebook Inc. The device is fully standalone, features two, six degrees of freedom controllers, and runs on a Qualcomm Snapdragon 835 system on chip.",
            "productUrl": "https://www.producthunt.com/products/meta-quest/shoutouts",
            "websiteUrl": "https://www.meta.com/gb/quest/%20",
            "imageUrl1": "",
            "imageUrl2": "https://ph-files.imgix.net/ecc0b5d2-a1d5-4996-92e9-028b60c17387.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl3": "https://ph-files.imgix.net/78428291-fc23-423d-a414-b013e05cbea5.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "videoUrl": "https://youtu.be/5AKl_cEB26c"
          },
          {
            "rank": "5",
            "name": "Unreal Engine",
            "icon": "https://ph-files.imgix.net/d3cdb50a-4828-481e-b8b6-638fa386ff1f.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "Unreal Engine — Make something unreal",
            "description": "Unreal Engine is the world’s most open and advanced real-time 3D creation platform. Continuously evolving to serve not only its original purpose as a state-of-the-art games engine, today it gives creators across industries the freedom and control to deliver cutting-edge content, interactive experiences, and immersive virtual worlds.",
            "productUrl": "https://www.producthunt.com/products/unreal-engine/shoutouts",
            "websiteUrl": "https://www.unrealengine.com/",
            "imageUrl1": "https://youtu.be/VxzmukMHeCE",
            "imageUrl2": "",
            "imageUrl3": "https://ph-files.imgix.net/01e6cf0e-ad50-47b3-a5bc-e8c2027cfa8a.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "videoUrl": "https://youtu.be/bJPxq6QogKE"
          },
          {
            "rank": "6",
            "name": "Ingress",
            "icon": "https://ph-files.imgix.net/d49f026e-6021-46cd-8dd8-e94e15059e5b.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "Ingress — Real world mobile game from Google",
            "description": "",
            "productUrl": "https://www.producthunt.com/products/ingress/shoutouts",
            "websiteUrl": "https://www.ingress.com/",
            "imageUrl1": "",
            "imageUrl2": "",
            "imageUrl3": "",
            "videoUrl": ""
          },
          {
            "rank": "7",
            "name": "Pokemon GO",
            "icon": "https://ph-files.imgix.net/b99d037f-b683-4801-8dc0-8ef28a5d75fa.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "Pokemon GO — Augmented reality Pokemon-catching game",
            "description": "Join Trainers across the globe who are discovering Pokémon as they explore the world around them. Pokémon GO is the global gaming sensation that has been downloaded over 1 billion times",
            "productUrl": "https://www.producthunt.com/products/pokemon-go-2/shoutouts",
            "websiteUrl": "https://itunes.apple.com/app/pokemon-go/id1094591345",
            "imageUrl1": "https://youtu.be/nV98M3v5GNg",
            "imageUrl2": "",
            "imageUrl3": "https://ph-files.imgix.net/810b0cc9-9d95-406c-8d02-e5725777e7a4.gif?fm=mp4&crop=max&w=256&h=160&dpr=2#t=0.001",
            "videoUrl": "https://youtu.be/2sj2iQyBTQs"
          },
          {
            "rank": "8",
            "name": "GODOT",
            "icon": "https://ph-files.imgix.net/ab125eab-35d4-4161-8cf2-0465264cde95.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "GODOT — Godot is a 2D and 3D cross-platform compatible game engine.",
            "description": "GODOT is a 2D and 3D cross-platform compatible game engine released as open source software under the MIT license.",
            "productUrl": "https://www.producthunt.com/products/godot/shoutouts",
            "websiteUrl": "https://godotengine.org/",
            "imageUrl1": "",
            "imageUrl2": "https://ph-files.imgix.net/1d6745b4-3a50-4c9a-a002-40562922c095.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl3": "https://ph-files.imgix.net/254755fa-8530-4352-b77d-b7b733fc35cd.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "videoUrl": "https://youtu.be/P6nQ3E-Cyfk"
          },
          {
            "rank": "9",
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
        "sub_category_name": "Toys",
        "sub_category_heading": "The best Toys in 2024",
        "products": [
          {
            "rank": "1",
            "name": "Poem/1",
            "icon": "https://ph-files.imgix.net/cfc32f05-9ae6-4ca0-9efd-c4e6b1ce0ab1.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "Poem/1 — AI clock that tells the time with a rhyme, every minute",
            "description": "Tells the time with a brand new poem every minute, every single day, composed by ChatGPT. It’s sometimes profound, and sometimes weird, and very occasionally it fibs about what the actual time is to make a rhyme work.",
            "productUrl": "https://www.producthunt.com/products/poem-1/shoutouts",
            "websiteUrl": "https://www.kickstarter.com/projects/genmon/poem-1-the-ai-poetry-clock",
            "imageUrl1": "",
            "imageUrl2": "https://ph-files.imgix.net/e2155447-a1e6-4497-9b15-1390817c1741.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl3": "https://ph-files.imgix.net/e2b505ed-24b9-4894-afd9-43a10c375e58.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "videoUrl": "https://youtu.be/NqCsUdmhBxA"
          }
        ]
        
      },
      {
        "sub_category_name": "Wearables",
        "sub_category_heading": "The best Wearables in 2024",
        "products": [
          {
            "rank": "1",
            "name": "Terra",
            "icon": "https://ph-files.imgix.net/5b087bb6-4c55-4900-9852-2f962a57b87f.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "Terra — API for apps to connect to wearables easily",
            "description": "TERRA makes it easy to connect your app to wearables, through a single API. Connect to WHOOP, Oura, Garmin, Freestyle Libre, Peloton, Apple, Google, and all the integrations.",
            "productUrl": "https://www.producthunt.com/products/terra-2/shoutouts",
            "websiteUrl": "https://tryterra.co/",
            "imageUrl1": "",
            "imageUrl2": "https://ph-files.imgix.net/30ff8f4d-9014-45b1-a137-4453c6c0f442.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl3": "https://ph-files.imgix.net/c06ccd10-c5e6-4ac1-9434-6303bde5caf0.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "videoUrl": "https://youtu.be/dkG6ZM017ug"
          },
          {
            "rank": "3",
            "name": "Meta Quest",
            "icon": "https://ph-files.imgix.net/9e382b5d-8bbb-4fab-9d92-ee1d3e723055.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "Meta Quest — All-in-one gaming system for virtual reality",
            "description": "The Oculus Quest is a virtual reality headset created by Oculus VR, a division of Facebook Inc. The device is fully standalone, features two, six degrees of freedom controllers, and runs on a Qualcomm Snapdragon 835 system on chip.",
            "productUrl": "https://www.producthunt.com/products/meta-quest/shoutouts",
            "websiteUrl": "https://www.meta.com/gb/quest/%20",
            "imageUrl1": "",
            "imageUrl2": "https://ph-files.imgix.net/ecc0b5d2-a1d5-4996-92e9-028b60c17387.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl3": "https://ph-files.imgix.net/78428291-fc23-423d-a414-b013e05cbea5.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "videoUrl": "https://youtu.be/5AKl_cEB26c"
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
          },
          {
            "rank": "5",
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
            "rank": "6",
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
          },
          {
            "rank": "7",
            "name": "Apple Vision Pro",
            "icon": "https://ph-files.imgix.net/8ba0c43e-a89b-4bbd-ae67-788f5cb9156f.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "Apple Vision Pro — Apple Vision Pro is Apple’s first spatial computer.",
            "description": "",
            "productUrl": "https://www.producthunt.com/products/apple-vision-pro/shoutouts",
            "websiteUrl": "https://www.apple.com/apple-vision-pro",
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
      `INSERT INTO Category (category_name, category_heading) VALUES ($1, $2) ON CONFLICT DO NOTHING RETURNING category_id`,
      [data.category.category_name, data.category.category_heading]
    );

    const category_id = categoryResult.rows[0].category_id;

    // Insert sub-categories and products
    for (const sub_category of data.category.sub_categories) {
      const subCategoryResult = await client.query(
        `INSERT INTO Sub_Category (sub_category_name, sub_category_heading, category_id) VALUES ($1, $2, $3) RETURNING sub_category_id`,
        [sub_category.sub_category_name, sub_category.sub_category_heading, category_id]
      );

      const sub_category_id = subCategoryResult.rows[0].sub_category_id;

      for (const product of sub_category.products) {
        // Check if the product already exists
        const productResult = await client.query(
          `SELECT product_id FROM Products WHERE name = $1`,
          [product.name]
        );

        let product_id;
        if (productResult.rows.length === 0) {
          // Insert new product if it doesn't exist
          const newProductResult = await client.query(
            `INSERT INTO Products (rank, name, icon, title, description, productUrl, websiteUrl, imageUrl1, imageUrl2, imageUrl3, videoUrl, category_id, sub_category_id) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13) RETURNING product_id`,
            [
              product.rank,
              product.name,
              product.icon,
              product.title,
              product.description,
              product.productUrl,
              product.websiteUrl,
              product.imageUrl1,
              product.imageUrl2,
              product.imageUrl3,
              product.videoUrl,
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
