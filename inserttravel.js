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
      "cat_name": "Travel",
      "cat_heading": "The best Travel in 2024",
      "sub_categories": [
        {
          "sub_cat_name": "Flight booking apps",
          "sub_cat_heading": "The best Flight booking apps in 2024",
          "products": [
            {
              "rank": "1",
              "imageUrl": "https://ph-files.imgix.net/ffe31ca3-cf8e-4016-8943-7e6c63597df4.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
              "title": "Kiwi.com — Kiwi.com",
              "description": "Cheap flights, trains, hotels, and car hire with 24/7 customer support & the Kiwi.com Guarantee. Discover a new way of traveling with our interactive map, airport, and destination guides in your pocket."
            }
          ]
        },
        {
          "sub_cat_name": "Hotel booking apps",
          "sub_cat_heading": "The best Hotel booking apps in 2024",
          "products": [
            {
              "rank": "1",
              "imageUrl": "https://ph-files.imgix.net/ffe31ca3-cf8e-4016-8943-7e6c63597df4.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
              "title": "Kiwi.com — Kiwi.com",
              "description": "Cheap flights, trains, hotels, and car hire with 24/7 customer support & the Kiwi.com Guarantee. Discover a new way of traveling with our interactive map, airport, and destination guides in your pocket."
            },
            {
              "rank": "2",
              "imageUrl": "https://ph-files.imgix.net/ebe7dd51-d9d7-496d-9363-61730abf011a.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
              "title": "Airbnb — The world’s largest community driven hospitality company",
              "description": "Unforgettable trips start with Airbnb. Find adventures nearby or in faraway places and access unique homes, experiences, and places around the world."
            }
          ]
        },
        {
            "sub_cat_name": "Maps and GPS",
            "sub_cat_heading": "The best Maps and GPS in 2024",
            "products": [
              {
                "rank": "1",
                "imageUrl": "https://ph-files.imgix.net/1a00ea36-1658-49a3-8736-dd83b7767e15.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "Google Maps — From your block to your next adventure, Google Maps helps you discover more 🗺️",
                "description": "Find a place. Your location. Trails. Dedicated lanes. Bicycle-friendly roads."
              },
              {
                "rank": "2",
                "imageUrl": "https://ph-files.imgix.net/d7a4f23c-7450-4710-a927-5caf811ffaaf.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "Mapbox — Location data platform for mobile and web applications.",
                "description": "Mapbox is an American provider of custom online maps, navigation, address search, and location data for websites and applications such as Foursquare, Lonely Planet, Facebook, the Financial Times, The Weather Channel and Snapchat."
              },
              {
                "rank": "3",
                "imageUrl": "https://ph-files.imgix.net/305922f1-445a-41cc-ae1e-57ebd7f557df.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "Foursquare — The Future of Location Technology",
                "description": "Foursquare Labs Inc., commonly known as Foursquare, is an American technology company.Your partner in finding creative ways to power location-based experiences, transforming your business from the ground up."
              },
              {
                "rank": "4",
                "imageUrl": "https://ph-files.imgix.net/9e70fd6d-f9d2-43d3-84d7-65e93b89bb50.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "Google Lens — Search what you see",
                "description": "Explore what's around you in an entirely new way."
              },
              {
                "rank": "5",
                "imageUrl": "https://ph-files.imgix.net/aa769f35-40fa-4c8f-bbd9-7e18a15c3b3c.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "City Roads — Open source, visualization of all roads within any city.",
                "description": "Search for your city. The data is fetched from OpenStreetMap using overpass API."
              },
              {
                "rank": "6",
                "imageUrl": "https://ph-files.imgix.net/d49f026e-6021-46cd-8dd8-e94e15059e5b.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "Ingress — Real world mobile game from Google",
                "description": ""
              },
              {
                "rank": "7",
                "imageUrl": "https://ph-files.imgix.net/39ffa06f-5cdc-4061-8c0f-f4dbff2f60aa.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "MapTiler — A software platform for building digital maps",
                "description": "Easy to use maps, documentation, code samples, and developer tools for web & mobile. MapTiler is a software platform for building digital maps used by 300 million people a month. Companies and institutions integrate our street and satellite maps of the entire world with their products. Maps are personalized, smart, and without ads or customer data leaks."
              },
              {
                "rank": "8",
                "imageUrl": "https://ph-files.imgix.net/8ad85979-0d46-41d2-b2d2-edf358d28308.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "OpenStreetMap — The free wiki world map.",
                "description": "OpenStreetMap is a collaborative project to create a free editable map of the world. The geodata underlying the map is considered the primary output of the project."
              },
              {
                "rank": "9",
                "imageUrl": "https://ph-files.imgix.net/6905d5a1-938b-4ef8-ad95-dbb7a097c58d.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "Google Maps Search API — Real-time Google Maps Searches - Places, Reviews and Photos",
                "description": "Super fast and robust Google Maps Search API - search for Places/Businesses, Reviews and Photos on Google Maps. Results include information such as Name, Phone, Address, Website, Reviews and Rating details, Opening hours and 20+ other fields."
              }
            ]
          },
          {
            "sub_cat_name": "Outdoor platforms",
            "sub_cat_heading": "The best Outdoor platforms in 2024",
            "products": [
              {
                "rank": "1",
                "imageUrl": "https://ph-files.imgix.net/cf577e7b-42f4-4a5f-b21c-3ced9d9b679c.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "RanchWork.com — The oldest ranching job board on the internet",
                "description": "Welcoming over 40,000 visits & 195,000 pageviews a month, RanchWork.com is the leader in ranching & outdoors employment. We not only feature available jobs, but also job seekers searching for their dream ranch opportunity."
              },
              {
                "rank": "2",
                "imageUrl": "https://ph-files.imgix.net/bc17e440-e29d-46b9-a98e-0c628ced7bff.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "iNaturalist — Real life Pokemon - identify/share plants and animals nearby",
                "description": "Pokemon was inspired by the author's childhood memory of running around chasing after rare insects. This app was able to correctly identify the type of the butterfly from a picture of a caterpillar I shared. It's also sponsored by National Geographic"
              }
            ]
          },
          {
            "sub_cat_name": "Short term rentals",
            "sub_cat_heading": "The best Short term rentals in 2024",
            "products": [
              {
                "rank": "1",
                "imageUrl": "https://ph-files.imgix.net/ebe7dd51-d9d7-496d-9363-61730abf011a.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "Airbnb — The world’s largest community driven hospitality company",
                "description": "Unforgettable trips start with Airbnb. Find adventures nearby or in faraway places and access unique homes, experiences, and places around the world."
              },
              {
                "rank": "2",
                "imageUrl": "https://ph-files.imgix.net/eb31d5ae-40dd-44fd-9a6a-4b3089b73c3a.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "Couchsurfing — Stay with locals and meet travelers",
                "description": "With Couchsurfing, you can stay with locals in every country on earth. Travel like a local, stay in someone’s home, and experience the world in a way money can’t buy."
              },
              {
                "rank": "3",
                "imageUrl": "https://ph-files.imgix.net/9f591e57-f1a4-4626-8eae-71bca60baa1c.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=14&h=14&fit=crop",
                "title": "Vertoe — On demand short term storage. Anywhere, anytime",
                "description": "Vertoe is an on-demand short term storage provider connecting people looking to safely store their bags/personal items for a few hours/days to nearby local shops that have space. We aim to provide instant storage within 5 minutes of wherever you are."
              }
            ]
          },
          {
            "sub_cat_name": "Travel apps",
            "sub_cat_heading": "The best Travel apps in 2024",
            "products": [
              {
                "rank": "1",
                "imageUrl": "https://ph-files.imgix.net/305922f1-445a-41cc-ae1e-57ebd7f557df.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "Foursquare — The Future of Location Technology",
                "description": "Foursquare Labs Inc., commonly known as Foursquare, is an American technology company.Your partner in finding creative ways to power location-based experiences, transforming your business from the ground up."
              },
              {
                "rank": "2",
                "imageUrl": "https://ph-files.imgix.net/eb31d5ae-40dd-44fd-9a6a-4b3089b73c3a.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "Couchsurfing — Stay with locals and meet travelers",
                "description": "With Couchsurfing, you can stay with locals in every country on earth. Travel like a local, stay in someone’s home, and experience the world in a way money can’t buy."
              },
              {
                "rank": "3",
                "imageUrl": "https://ph-files.imgix.net/9d85c750-84b7-405a-8e59-e09da53640cc.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "Five Phrases — Your travel buddy",
                "description": "Don’t know the language? No problemo! Your new travel buddy is here to help you learn the most important phrases for your trip."
              },
              {
                "rank": "4",
                "imageUrl": "https://ph-files.imgix.net/6dbc7f5c-4f27-4549-8145-7156b174488a.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "Mindtrip — AI platform for travel, personalized to you",
                "description": "Mindtrip is a travel platform that combines conversational AI with a proprietary knowledge base of places to deliver personalized travel experiences that are accurate, actionable, and all in one place."
              },
              {
                "rank": "5",
                "imageUrl": "https://ph-files.imgix.net/9f591e57-f1a4-4626-8eae-71bca60baa1c.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=14&h=14&fit=crop",
                "title": "Vertoe — On demand short term storage. Anywhere, anytime",
                "description": "Vertoe is an on-demand short term storage provider connecting people looking to safely store their bags/personal items for a few hours/days to nearby local shops that have space. We aim to provide instant storage within 5 minutes of wherever you are."
              }
            ]
          },
          {
            "sub_cat_name": "Travel Planning",
            "sub_cat_heading": "The best Travel Planning in 2024",
            "products": [
              {
                "rank": "1",
                "imageUrl": "https://ph-files.imgix.net/1a00ea36-1658-49a3-8736-dd83b7767e15.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "Google Maps — From your block to your next adventure, Google Maps helps you discover more 🗺️",
                "description": "Find a place. Your location. Trails. Dedicated lanes. Bicycle-friendly roads."
              },
              {
                "rank": "2",
                "imageUrl": "https://ph-files.imgix.net/d7a4f23c-7450-4710-a927-5caf811ffaaf.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "Mapbox — Location data platform for mobile and web applications.",
                "description": "Mapbox is an American provider of custom online maps, navigation, address search, and location data for websites and applications such as Foursquare, Lonely Planet, Facebook, the Financial Times, The Weather Channel and Snapchat."
              },
              {
                "rank": "3",
                "imageUrl": "https://ph-files.imgix.net/86dd34a8-8816-425c-a972-549da1d342d1.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "Pinterest — Bringing everyone the inspiration to create a life they love.",
                "description": "Looking for inspiration? Whether you’re designing a home or searching for travel ideas, good ideas start on Pinterest. Explore over 100 billion new ideas for every part of your life, from what haircut to get to what to make for dinner. Create extra storage space in your home, turn an old t-shirt into a stylish dress, or plan your next vacation with Pinterest."
              },
              {
                "rank": "4",
                "imageUrl": "https://ph-files.imgix.net/ffe31ca3-cf8e-4016-8943-7e6c63597df4.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "Kiwi.com — Kiwi.com",
                "description": "Cheap flights, trains, hotels, and car hire with 24/7 customer support & the Kiwi.com Guarantee. Discover a new way of traveling with our interactive map, airport, and destination guides in your pocket."
              },
              {
                "rank": "5",
                "imageUrl": "https://ph-files.imgix.net/ebe7dd51-d9d7-496d-9363-61730abf011a.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "Airbnb — The world’s largest community driven hospitality company",
                "description": "Unforgettable trips start with Airbnb. Find adventures nearby or in faraway places and access unique homes, experiences, and places around the world."
              },
              {
                "rank": "6",
                "imageUrl": "https://ph-files.imgix.net/eb31d5ae-40dd-44fd-9a6a-4b3089b73c3a.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "Couchsurfing — Stay with locals and meet travelers",
                "description": "With Couchsurfing, you can stay with locals in every country on earth. Travel like a local, stay in someone’s home, and experience the world in a way money can’t buy."
              },
              {
                "rank": "7",
                "imageUrl": "https://ph-files.imgix.net/9d85c750-84b7-405a-8e59-e09da53640cc.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "Five Phrases — Your travel buddy",
                "description": "Don’t know the language? No problemo! Your new travel buddy is here to help you learn the most important phrases for your trip."
              },
              {
                "rank": "8",
                "imageUrl": "https://ph-files.imgix.net/6dbc7f5c-4f27-4549-8145-7156b174488a.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "Mindtrip — AI platform for travel, personalized to you",
                "description": "Mindtrip is a travel platform that combines conversational AI with a proprietary knowledge base of places to deliver personalized travel experiences that are accurate, actionable, and all in one place."
              },
              {
                "rank": "9",
                "imageUrl": "https://ph-files.imgix.net/9f591e57-f1a4-4626-8eae-71bca60baa1c.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=14&h=14&fit=crop",
                "title": "Vertoe — On demand short term storage. Anywhere, anytime",
                "description": "Vertoe is an on-demand short term storage provider connecting people looking to safely store their bags/personal items for a few hours/days to nearby local shops that have space. We aim to provide instant storage within 5 minutes of wherever you are."
              }
            ]
          },
          {
            "sub_cat_name": "Weather Apps",
            "sub_cat_heading": "The best Weather Apps in 2024",
            "products": [
              {
                "rank": "1",
                "imageUrl": "https://ph-files.imgix.net/d7a4f23c-7450-4710-a927-5caf811ffaaf.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "Mapbox — Location data platform for mobile and web applications.",
                "description": "Mapbox is an American provider of custom online maps, navigation, address search, and location data for websites and applications such as Foursquare, Lonely Planet, Facebook, the Financial Times, The Weather Channel and Snapchat."
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
