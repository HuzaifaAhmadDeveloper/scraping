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
    "category_name": "Travel",
    "category_heading": "The best Travel in 2024",
    "sub_categories": [
      {
        "sub_category_name": "Flight booking apps",
        "sub_category_heading": "The best Flight booking apps in 2024",
        "products": [
          {
            "rank": "1",
            "name": "Kiwi.com",
            "icon": "https://ph-files.imgix.net/ffe31ca3-cf8e-4016-8943-7e6c63597df4.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "Kiwi.com — Kiwi.com",
            "description": "Cheap flights, trains, hotels, and car hire with 24/7 customer support & the Kiwi.com Guarantee. Discover a new way of traveling with our interactive map, airport, and destination guides in your pocket.",
            "productUrl": "https://www.producthunt.com/products/kiwi-com/shoutouts",
            "websiteUrl": "https://www.kiwi.com/en",
            "imageUrl1": "https://ph-files.imgix.net/55ab20ac-95b4-40a0-b5ad-49dfcd4d157d.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop&dpr=1",
            "imageUrl2": "https://ph-files.imgix.net/9e72760d-50c5-48da-ba36-515da1d1fb28.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop&dpr=1",
            "imageUrl3": "",
            "videoUrl": ""
          }
        ]
        
      },
      {
        "sub_category_name": "Hotel booking app",
        "sub_category_heading": "The best Hotel booking app in 2024",
        "products": [
          {
            "rank": "1",
            "name": "Kiwi.com",
            "icon": "https://ph-files.imgix.net/ffe31ca3-cf8e-4016-8943-7e6c63597df4.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "Kiwi.com — Kiwi.com",
            "description": "Cheap flights, trains, hotels, and car hire with 24/7 customer support & the Kiwi.com Guarantee. Discover a new way of traveling with our interactive map, airport, and destination guides in your pocket.",
            "productUrl": "https://www.producthunt.com/products/kiwi-com/shoutouts",
            "websiteUrl": "https://www.kiwi.com/en",
            "imageUrl1": "https://ph-files.imgix.net/55ab20ac-95b4-40a0-b5ad-49dfcd4d157d.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop&dpr=1",
            "imageUrl2": "https://ph-files.imgix.net/9e72760d-50c5-48da-ba36-515da1d1fb28.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop&dpr=1",
            "imageUrl3": "",
            "videoUrl": ""
          },
          {
            "rank": "2",
            "name": "Airbnb",
            "icon": "https://ph-files.imgix.net/ebe7dd51-d9d7-496d-9363-61730abf011a.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "Airbnb — The world’s largest community driven hospitality company",
            "description": "Unforgettable trips start with Airbnb. Find adventures nearby or in faraway places and access unique homes, experiences, and places around the world.",
            "productUrl": "https://www.producthunt.com/products/airbnb/shoutouts",
            "websiteUrl": "http://www.airbnb.com/",
            "imageUrl1": "https://ph-files.imgix.net/b2532557-d891-4e0e-8aa0-88aadf951068.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl2": "https://ph-files.imgix.net/fd21e206-9039-469a-92e8-bb8fd1dcce86.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl3": "https://ph-files.imgix.net/82898515-4a0b-46b9-9985-90c0dac0a58e.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "videoUrl": ""
          }
        ]
        
      },
      {
        "sub_category_name": "Maps and GPS",
        "sub_category_heading": "The best Maps and GPS in 2024",
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
            "name": "Mapbox",
            "icon": "https://ph-files.imgix.net/d7a4f23c-7450-4710-a927-5caf811ffaaf.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "Mapbox — Location data platform for mobile and web applications.",
            "description": "Mapbox is an American provider of custom online maps, navigation, address search, and location data for websites and applications such as Foursquare, Lonely Planet, Facebook, the Financial Times, The Weather Channel and Snapchat.",
            "productUrl": "https://www.producthunt.com/products/mapbox/shoutouts",
            "websiteUrl": "http://www.mapbox.com/",
            "imageUrl1": "https://ph-files.imgix.net/898f6032-cb41-49d9-bdd8-b5e426d43a6b.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl2": "https://ph-files.imgix.net/616979eb-e0a2-4dc8-ab6d-34a2f4d3ded8.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl3": "https://ph-files.imgix.net/76a34031-c5ae-4000-aabb-9d15d73c2d8d.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "videoUrl": ""
          },
          {
            "rank": "3",
            "name": "Foursquare",
            "icon": "https://ph-files.imgix.net/305922f1-445a-41cc-ae1e-57ebd7f557df.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "Foursquare — The Future of Location Technology",
            "description": "Foursquare Labs Inc., commonly known as Foursquare, is an American technology company.Your partner in finding creative ways to power location-based experiences, transforming your business from the ground up.",
            "productUrl": "https://www.producthunt.com/products/foursquare/shoutouts",
            "websiteUrl": "http://enterprise.foursquare.com/",
            "imageUrl1": "",
            "imageUrl2": "https://ph-files.imgix.net/c1b5b439-3e6f-4c62-9dc3-3220439c285c.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl3": "https://ph-files.imgix.net/592af88f-1eb6-4262-b9df-ba7768a09e50.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "videoUrl": "https://youtu.be/KReNUqEQ648"
          },
          {
            "rank": "4",
            "name": "Google Lens",
            "icon": "https://ph-files.imgix.net/9e70fd6d-f9d2-43d3-84d7-65e93b89bb50.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "Google Lens — Search what you see",
            "description": "Explore what's around you in an entirely new way.",
            "productUrl": "https://www.producthunt.com/products/google-lens/shoutouts",
            "websiteUrl": "https://lens.google.com/",
            "imageUrl1": "https://ph-files.imgix.net/1a3f4856-a8ac-43fe-9fa5-8a4d969f12c4.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl2": "https://ph-files.imgix.net/81e7da0a-b350-4ed6-8b21-4e0cfeada1bc.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl3": "https://ph-files.imgix.net/5fe4d97f-4e54-4598-8c58-32a8e481f3fd.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "videoUrl": ""
          },
          {
            "rank": "5",
            "name": "City Roads",
            "icon": "https://ph-files.imgix.net/aa769f35-40fa-4c8f-bbd9-7e18a15c3b3c.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "City Roads — Open source, visualization of all roads within any city.",
            "description": "Search for your city. The data is fetched from OpenStreetMap using overpass API.",
            "productUrl": "https://www.producthunt.com/products/city-roads/shoutouts",
            "websiteUrl": "https://github.com/anvaka/city-roads",
            "imageUrl1": "https://ph-files.imgix.net/bff68dbe-1a10-4779-9028-70c6d913cee2.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl2": "https://ph-files.imgix.net/4c626187-6fea-42bd-8f5d-a2cb663fcb63.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl3": "https://ph-files.imgix.net/413386e7-bb56-4c11-82da-6242f38b83a2.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "videoUrl": ""
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
            "name": "OpenStreetMap",
            "icon": "https://ph-files.imgix.net/8ad85979-0d46-41d2-b2d2-edf358d28308.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "OpenStreetMap — The free wiki world map.",
            "description": "OpenStreetMap is a collaborative project to create a free editable map of the world. The geodata underlying the map is considered the primary output of the project.",
            "productUrl": "https://www.producthunt.com/products/openstreetmap/shoutouts",
            "websiteUrl": "https://www.openstreetmap.org/",
            "imageUrl1": "https://ph-files.imgix.net/5486d1d9-5b64-42af-80ab-77dac454f7ac.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&fit=crop&dpr=1",
            "imageUrl2": "",
            "imageUrl3": "",
            "videoUrl": ""
          },
          {
            "rank": "8",
            "name": "MapTiler",
            "icon": "https://ph-files.imgix.net/39ffa06f-5cdc-4061-8c0f-f4dbff2f60aa.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "MapTiler — A software platform for building digital maps",
            "description": "Easy to use maps, documentation, code samples, and developer tools for web & mobile. MapTiler is a software platform for building digital maps used by 300 million people a month. Companies and institutions integrate our street and satellite maps of the entire world with their products. Maps are personalized, smart, and without ads or customer data leaks.",
            "productUrl": "https://www.producthunt.com/products/maptiler/shoutouts",
            "websiteUrl": "https://www.maptiler.com/",
            "imageUrl1": "https://ph-files.imgix.net/d233bb19-05f1-433b-ad50-a25a38e181ab.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl2": "https://ph-files.imgix.net/ed6de5dd-d574-47ec-b055-b90776764359.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl3": "https://ph-files.imgix.net/70d7a95b-8036-4651-839c-75071376b4aa.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "videoUrl": ""
          },
          {
            "rank": "9",
            "name": "Google Maps Search API",
            "icon": "https://ph-files.imgix.net/6905d5a1-938b-4ef8-ad95-dbb7a097c58d.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "Google Maps Search API — Real-time Google Maps Searches - Places, Reviews and Photos",
            "description": "Super fast and robust Google Maps Search API - search for Places/Businesses, Reviews and Photos on Google Maps. Results include information such as Name, Phone, Address, Website, Reviews and Rating details, Opening hours and 20+ other fields.",
            "productUrl": "https://www.producthunt.com/products/google-maps-search-api/shoutouts",
            "websiteUrl": "https://rapidapi.com/letscrape-6bRBa3QguO5/api/google-maps-search1",
            "imageUrl1": "https://ph-files.imgix.net/6fac1ec0-d8be-4b2d-91c8-7e333c4e77f2.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl2": "https://ph-files.imgix.net/3ee49e33-2e23-47d6-946a-8f3ec92c0d78.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl3": "https://ph-files.imgix.net/254b2987-183f-433d-96e5-3afb1094de6a.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "videoUrl": ""
          }
        ]
        
      },
      {
        "sub_category_name": "Outdoors platforms",
        "sub_category_heading": "The best Outdoors platforms in 2024",
        "products": [
          {
            "rank": "1",
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
            "rank": "2",
            "name": "iNaturalist",
            "icon": "https://ph-files.imgix.net/bc17e440-e29d-46b9-a98e-0c628ced7bff.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "iNaturalist — Real life Pokemon - identify/share plants and animals nearby",
            "description": "Pokemon was inspired by the author's childhood memory of running around chasing after rare insects. This app was able to correctly identify the type of the butterfly from a picture of a caterpillar I shared. It's also sponsored by National Geographic",
            "productUrl": "https://www.producthunt.com/products/inaturalist/shoutouts",
            "websiteUrl": "https://apps.apple.com/us/app/inaturalist/id421397028",
            "imageUrl1": "https://ph-files.imgix.net/9583e4ba-3ef5-4709-baf5-00adebbb7f0a.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop&dpr=1",
            "imageUrl2": "https://ph-files.imgix.net/d3567809-1b14-43ec-8eb1-bb4fa0f85eda.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop&dpr=1",
            "imageUrl3": "",
            "videoUrl": ""
          }
        ]
       
      },
      {
        "sub_category_name": "Short term rentals",
        "sub_category_heading": "The best Short term rentals in 2024",
        "products": [
          {
            "rank": "1",
            "name": "Airbnb",
            "icon": "https://ph-files.imgix.net/ebe7dd51-d9d7-496d-9363-61730abf011a.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "Airbnb — The world’s largest community driven hospitality company",
            "description": "Unforgettable trips start with Airbnb. Find adventures nearby or in faraway places and access unique homes, experiences, and places around the world.",
            "productUrl": "https://www.producthunt.com/products/airbnb/shoutouts",
            "websiteUrl": "http://www.airbnb.com/",
            "imageUrl1": "https://ph-files.imgix.net/b2532557-d891-4e0e-8aa0-88aadf951068.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl2": "https://ph-files.imgix.net/fd21e206-9039-469a-92e8-bb8fd1dcce86.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl3": "https://ph-files.imgix.net/82898515-4a0b-46b9-9985-90c0dac0a58e.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "videoUrl": ""
          },
          {
            "rank": "2",
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
            "rank": "3",
            "name": "Vertoe",
            "icon": "https://ph-files.imgix.net/9f591e57-f1a4-4626-8eae-71bca60baa1c.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=14&h=14&fit=crop",
            "title": "Vertoe — On demand short term storage. Anywhere, anytime",
            "description": "Vertoe is an on-demand short term storage provider connecting people looking to safely store their bags/personal items for a few hours/days to nearby local shops that have space. We aim to provide instant storage within 5 minutes of wherever you are.",
            "productUrl": "https://www.producthunt.com/products/vertoe/shoutouts",
            "websiteUrl": "https://apps.apple.com/us/app/vertoe/id1455519147",
            "imageUrl1": "https://ph-files.imgix.net/9e00fc01-1b0e-4d4a-959f-18c3d77b4f66.gif?fm=mp4&crop=max&w=256&h=160&dpr=2#t=0.001",
            "imageUrl2": "https://ph-files.imgix.net/977b3d11-7540-4da9-a89e-81520c6d0758.gif?fm=mp4&crop=max&w=256&h=160&dpr=2#t=0.001",
            "imageUrl3": "https://ph-files.imgix.net/6935de9c-2f70-4631-a536-1293a42504a9.gif?fm=mp4&crop=max&w=256&h=160&dpr=2#t=0.001",
            "videoUrl": ""
          }
        ]
        
      },
      {
        "sub_category_name": "Travel apps",
        "sub_category_heading": "The best Travel apps in 2024",
        "products": [
          {
            "rank": "1",
            "name": "Foursquare",
            "icon": "https://ph-files.imgix.net/305922f1-445a-41cc-ae1e-57ebd7f557df.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "Foursquare — The Future of Location Technology",
            "description": "Foursquare Labs Inc., commonly known as Foursquare, is an American technology company.Your partner in finding creative ways to power location-based experiences, transforming your business from the ground up.",
            "productUrl": "https://www.producthunt.com/products/foursquare/shoutouts",
            "websiteUrl": "http://enterprise.foursquare.com/",
            "imageUrl1": "",
            "imageUrl2": "https://ph-files.imgix.net/c1b5b439-3e6f-4c62-9dc3-3220439c285c.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl3": "https://ph-files.imgix.net/592af88f-1eb6-4262-b9df-ba7768a09e50.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "videoUrl": "https://youtu.be/KReNUqEQ648"
          },
          {
            "rank": "2",
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
          },
          {
            "rank": "4",
            "name": "Mindtrip",
            "icon": "https://ph-files.imgix.net/6dbc7f5c-4f27-4549-8145-7156b174488a.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "Mindtrip — AI platform for travel, personalized to you",
            "description": "Mindtrip is a travel platform that combines conversational AI with a proprietary knowledge base of places to deliver personalized travel experiences that are accurate, actionable, and all in one place.",
            "productUrl": "https://www.producthunt.com/products/mindtrip/shoutouts",
            "websiteUrl": "https://mindtrip.ai/",
            "imageUrl1": "https://ph-files.imgix.net/fe4039e8-fece-4f5b-afbf-04506ccf2400.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl2": "https://ph-files.imgix.net/9feb2ff5-2269-4175-99ab-9ec744d37635.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl3": "https://ph-files.imgix.net/f943ad42-c521-4bb6-a240-601a0bbd9ffc.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "videoUrl": ""
          },
          {
            "rank": "5",
            "name": "Vertoe",
            "icon": "https://ph-files.imgix.net/9f591e57-f1a4-4626-8eae-71bca60baa1c.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=14&h=14&fit=crop",
            "title": "Vertoe — On demand short term storage. Anywhere, anytime",
            "description": "Vertoe is an on-demand short term storage provider connecting people looking to safely store their bags/personal items for a few hours/days to nearby local shops that have space. We aim to provide instant storage within 5 minutes of wherever you are.",
            "productUrl": "https://www.producthunt.com/products/vertoe/shoutouts",
            "websiteUrl": "https://apps.apple.com/us/app/vertoe/id1455519147",
            "imageUrl1": "https://ph-files.imgix.net/9e00fc01-1b0e-4d4a-959f-18c3d77b4f66.gif?fm=mp4&crop=max&w=256&h=160&dpr=2#t=0.001",
            "imageUrl2": "https://ph-files.imgix.net/977b3d11-7540-4da9-a89e-81520c6d0758.gif?fm=mp4&crop=max&w=256&h=160&dpr=2#t=0.001",
            "imageUrl3": "https://ph-files.imgix.net/6935de9c-2f70-4631-a536-1293a42504a9.gif?fm=mp4&crop=max&w=256&h=160&dpr=2#t=0.001",
            "videoUrl": ""
          }
        ]
       
      },
      {
        "sub_category_name": "Travel Planning",
        "sub_category_heading": "The best Travel Planning in 2024",
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
            "name": "Mapbox",
            "icon": "https://ph-files.imgix.net/d7a4f23c-7450-4710-a927-5caf811ffaaf.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "Mapbox — Location data platform for mobile and web applications.",
            "description": "Mapbox is an American provider of custom online maps, navigation, address search, and location data for websites and applications such as Foursquare, Lonely Planet, Facebook, the Financial Times, The Weather Channel and Snapchat.",
            "productUrl": "https://www.producthunt.com/products/mapbox/shoutouts",
            "websiteUrl": "http://www.mapbox.com/",
            "imageUrl1": "https://ph-files.imgix.net/898f6032-cb41-49d9-bdd8-b5e426d43a6b.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl2": "https://ph-files.imgix.net/616979eb-e0a2-4dc8-ab6d-34a2f4d3ded8.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl3": "https://ph-files.imgix.net/76a34031-c5ae-4000-aabb-9d15d73c2d8d.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "videoUrl": ""
          },
          {
            "rank": "3",
            "name": "Pinterest",
            "icon": "https://ph-files.imgix.net/86dd34a8-8816-425c-a972-549da1d342d1.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "Pinterest — Bringing everyone the inspiration to create a life they love.",
            "description": "Looking for inspiration? Whether you’re designing a home or searching for travel ideas, good ideas start on Pinterest. Explore over 100 billion new ideas for every part of your life, from what haircut to get to what to make for dinner. Create extra storage space in your home, turn an old t-shirt into a stylish dress, or plan your next vacation with Pinterest.",
            "productUrl": "https://www.producthunt.com/products/pinterest/shoutouts",
            "websiteUrl": "http://about.pinterest.com/",
            "imageUrl1": "https://ph-files.imgix.net/de8da9f5-a737-49f5-bd92-7b15208e72a1.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl2": "https://ph-files.imgix.net/2540cd29-e59f-4de5-8b0a-e21d2041669b.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl3": "https://ph-files.imgix.net/671fae72-dd85-4b9c-ae56-2151537f402a.gif?fm=mp4&crop=max&w=256&h=160&dpr=2#t=0.001",
            "videoUrl": ""
          },
          {
            "rank": "4",
            "name": "Kiwi.com",
            "icon": "https://ph-files.imgix.net/ffe31ca3-cf8e-4016-8943-7e6c63597df4.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "Kiwi.com — Kiwi.com",
            "description": "Cheap flights, trains, hotels, and car hire with 24/7 customer support & the Kiwi.com Guarantee. Discover a new way of traveling with our interactive map, airport, and destination guides in your pocket.",
            "productUrl": "https://www.producthunt.com/products/kiwi-com/shoutouts",
            "websiteUrl": "https://www.kiwi.com/en",
            "imageUrl1": "https://ph-files.imgix.net/55ab20ac-95b4-40a0-b5ad-49dfcd4d157d.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop&dpr=1",
            "imageUrl2": "https://ph-files.imgix.net/9e72760d-50c5-48da-ba36-515da1d1fb28.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop&dpr=1",
            "imageUrl3": "",
            "videoUrl": ""
          },
          {
            "rank": "5",
            "name": "Airbnb",
            "icon": "https://ph-files.imgix.net/ebe7dd51-d9d7-496d-9363-61730abf011a.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "Airbnb — The world’s largest community driven hospitality company",
            "description": "Unforgettable trips start with Airbnb. Find adventures nearby or in faraway places and access unique homes, experiences, and places around the world.",
            "productUrl": "https://www.producthunt.com/products/airbnb/shoutouts",
            "websiteUrl": "http://www.airbnb.com/",
            "imageUrl1": "https://ph-files.imgix.net/b2532557-d891-4e0e-8aa0-88aadf951068.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl2": "https://ph-files.imgix.net/fd21e206-9039-469a-92e8-bb8fd1dcce86.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl3": "https://ph-files.imgix.net/82898515-4a0b-46b9-9985-90c0dac0a58e.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "videoUrl": ""
          },
          {
            "rank": "6",
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
            "rank": "7",
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
          },
          {
            "rank": "8",
            "name": "Mindtrip",
            "icon": "https://ph-files.imgix.net/6dbc7f5c-4f27-4549-8145-7156b174488a.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "Mindtrip — AI platform for travel, personalized to you",
            "description": "Mindtrip is a travel platform that combines conversational AI with a proprietary knowledge base of places to deliver personalized travel experiences that are accurate, actionable, and all in one place.",
            "productUrl": "https://www.producthunt.com/products/mindtrip/shoutouts",
            "websiteUrl": "https://mindtrip.ai/",
            "imageUrl1": "https://ph-files.imgix.net/fe4039e8-fece-4f5b-afbf-04506ccf2400.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl2": "https://ph-files.imgix.net/9feb2ff5-2269-4175-99ab-9ec744d37635.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl3": "https://ph-files.imgix.net/f943ad42-c521-4bb6-a240-601a0bbd9ffc.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "videoUrl": ""
          },
          {
            "rank": "9",
            "name": "Vertoe",
            "icon": "https://ph-files.imgix.net/9f591e57-f1a4-4626-8eae-71bca60baa1c.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=14&h=14&fit=crop",
            "title": "Vertoe — On demand short term storage. Anywhere, anytime",
            "description": "Vertoe is an on-demand short term storage provider connecting people looking to safely store their bags/personal items for a few hours/days to nearby local shops that have space. We aim to provide instant storage within 5 minutes of wherever you are.",
            "productUrl": "https://www.producthunt.com/products/vertoe/shoutouts",
            "websiteUrl": "https://apps.apple.com/us/app/vertoe/id1455519147",
            "imageUrl1": "https://ph-files.imgix.net/9e00fc01-1b0e-4d4a-959f-18c3d77b4f66.gif?fm=mp4&crop=max&w=256&h=160&dpr=2#t=0.001",
            "imageUrl2": "https://ph-files.imgix.net/977b3d11-7540-4da9-a89e-81520c6d0758.gif?fm=mp4&crop=max&w=256&h=160&dpr=2#t=0.001",
            "imageUrl3": "https://ph-files.imgix.net/6935de9c-2f70-4631-a536-1293a42504a9.gif?fm=mp4&crop=max&w=256&h=160&dpr=2#t=0.001",
            "videoUrl": ""
          }
        ]
       
      },
      {
        "sub_category_name": "Weather apps",
        "sub_category_heading": "The best Weather apps in 2024",
        "products": [
          {
            "rank": "1",
            "name": "Mapbox",
            "icon": "https://ph-files.imgix.net/d7a4f23c-7450-4710-a927-5caf811ffaaf.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "Mapbox — Location data platform for mobile and web applications.",
            "description": "Mapbox is an American provider of custom online maps, navigation, address search, and location data for websites and applications such as Foursquare, Lonely Planet, Facebook, the Financial Times, The Weather Channel and Snapchat.",
            "productUrl": "https://www.producthunt.com/products/mapbox/shoutouts",
            "websiteUrl": "http://www.mapbox.com/",
            "imageUrl1": "https://ph-files.imgix.net/898f6032-cb41-49d9-bdd8-b5e426d43a6b.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl2": "https://ph-files.imgix.net/616979eb-e0a2-4dc8-ab6d-34a2f4d3ded8.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl3": "https://ph-files.imgix.net/76a34031-c5ae-4000-aabb-9d15d73c2d8d.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
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
