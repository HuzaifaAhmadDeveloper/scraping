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
    "category_name": "Web3",
    "category_heading": "The best Web3 in 2024",
    "sub_categories": [
      {
        "sub_category_name": "Crypto exchanges",
        "sub_category_heading": "The best Crypto exchanges in 2024",
        "products": [
          {
            "rank": "1",
            "name": "Coingecko",
            "icon": "https://ph-files.imgix.net/3090d95b-e49a-497d-8a1c-38a2da573396.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "Coingecko — Live Crypto Prices",
            "description": "CoinGecko provides a fundamental analysis of the crypto market. In addition to tracking price, volume and market capitalization, CoinGecko tracks community growth, open-source code development, major events and on-chain metrics",
            "productUrl": "https://www.producthunt.com/products/coingecko/shoutouts",
            "websiteUrl": "https://www.coingecko.com/",
            "imageUrl1": "https://ph-files.imgix.net/23d8f967-c59a-4fd4-9c08-419cae5106c7.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl2": "https://ph-files.imgix.net/d01f5fc2-46c7-42e9-85fa-faec603c77a2.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl3": "https://ph-files.imgix.net/4ec9c72d-256a-43d8-9ac1-de8a63fe7364.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "videoUrl": ""
          },
          {
            "rank": "2",
            "name": "Ethereum",
            "icon": "https://ph-files.imgix.net/1dfe3f22-80e7-4101-8786-46682ca3229b.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "Ethereum — Blockchains, Digital Assets, and Smart Contracts",
            "description": "",
            "productUrl": "https://www.producthunt.com/products/ethereum-2/shoutouts",
            "websiteUrl": "http://amzn.to/2tdZlOd",
            "imageUrl1": "",
            "imageUrl2": "",
            "imageUrl3": "",
            "videoUrl": ""
          },
          {
            "rank": "3",
            "name": "Coinbase",
            "icon": "https://ph-files.imgix.net/547b4b7a-a347-43ce-a81b-be9356057721.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "Coinbase — The easiest place to buy and sell crypto",
            "description": "Coinbase is a digital currency exchange whose mission is to create an open financial system for the world.",
            "productUrl": "https://www.producthunt.com/products/coinbase/shoutouts",
            "websiteUrl": "http://www.coinbase.com/",
            "imageUrl1": "",
            "imageUrl2": "https://ph-files.imgix.net/fb1b62ab-e75a-4f50-90fa-8143e6b7e592.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl3": "https://ph-files.imgix.net/460fe1f4-7217-4078-a994-75b98d9df254.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "videoUrl": "https://youtu.be/L9-qann-HLk"
          },
          {
            "rank": "4",
            "name": "CoinMarketCap",
            "icon": "https://ph-files.imgix.net/0d151da7-5553-4bec-98e8-71757a1338c6.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "CoinMarketCap — Crypto-currency market capitalizations",
            "description": "",
            "productUrl": "https://www.producthunt.com/products/coinmarketcap/shoutouts",
            "websiteUrl": "http://coinmarketcap.com/",
            "imageUrl1": "https://ph-files.imgix.net/d84e9586-d5c8-4360-9139-2435470b55cf.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop&dpr=1",
            "imageUrl2": "https://ph-files.imgix.net/f7679c7b-2be6-4bf0-b483-f8da705b42be.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop&dpr=1",
            "imageUrl3": "",
            "videoUrl": ""
          },
          {
            "rank": "5",
            "name": "Binance",
            "icon": "https://ph-files.imgix.net/78942ed3-db23-4604-a92f-84cc575b87a4.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "Binance — An easy to use cryptocurrency trading platform",
            "description": "The Binance NFT Marketplace brings together artists, creators, and crypto enthusiasts on a single platform to create and trade top NFTs. Powered by the Binance blockchain infrastructure and community.",
            "productUrl": "https://www.producthunt.com/products/binance/shoutouts",
            "websiteUrl": "https://www.binance.com/",
            "imageUrl1": "https://ph-files.imgix.net/6dfd2288-45e1-4c0a-bc39-1c93a0810ef8.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl2": "https://ph-files.imgix.net/6042cc62-8a27-422c-baa5-cef489b78759.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl3": "https://ph-files.imgix.net/8cd408a0-81ff-4791-ac9a-4e6d19001093.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "videoUrl": ""
          },
          {
            "rank": "6",
            "name": "Matrixport",
            "icon": "https://ph-files.imgix.net/669da0d8-b061-46ec-8cb1-bfa246bbef7e.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "Matrixport — Crypto financial products made simple and accessible",
            "description": "Matrixport is the most reliable place to buy, invest and trade your digital assets and earn interest. Matrixport offers innovative and easy-to-use crypto investment products and DeFi products tailored for all crypto investors.",
            "productUrl": "https://www.producthunt.com/products/matrixport/shoutouts",
            "websiteUrl": "https://www.matrixport.com/",
            "imageUrl1": "https://ph-files.imgix.net/f04c082e-47f1-4a72-bca9-1fde86a228bd.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop&dpr=1",
            "imageUrl2": "",
            "imageUrl3": "",
            "videoUrl": ""
          }
        ]
        
      },
      {
        "sub_category_name": "Crypto tools",
        "sub_category_heading": "The best Crypto tools in 2024",
        "products": [
          {
            "rank": "1",
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
            "rank": "2",
            "name": "Coingecko",
            "icon": "https://ph-files.imgix.net/3090d95b-e49a-497d-8a1c-38a2da573396.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "Coingecko — Live Crypto Prices",
            "description": "CoinGecko provides a fundamental analysis of the crypto market. In addition to tracking price, volume and market capitalization, CoinGecko tracks community growth, open-source code development, major events and on-chain metrics",
            "productUrl": "https://www.producthunt.com/products/coingecko/shoutouts",
            "websiteUrl": "https://www.coingecko.com/",
            "imageUrl1": "https://ph-files.imgix.net/23d8f967-c59a-4fd4-9c08-419cae5106c7.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl2": "https://ph-files.imgix.net/d01f5fc2-46c7-42e9-85fa-faec603c77a2.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl3": "https://ph-files.imgix.net/4ec9c72d-256a-43d8-9ac1-de8a63fe7364.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "videoUrl": ""
          },
          {
            "rank": "3",
            "name": "CoinMarketCap",
            "icon": "https://ph-files.imgix.net/0d151da7-5553-4bec-98e8-71757a1338c6.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "CoinMarketCap — Crypto-currency market capitalizations",
            "description": "",
            "productUrl": "https://www.producthunt.com/products/coinmarketcap/shoutouts",
            "websiteUrl": "http://coinmarketcap.com/",
            "imageUrl1": "https://ph-files.imgix.net/d84e9586-d5c8-4360-9139-2435470b55cf.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop&dpr=1",
            "imageUrl2": "https://ph-files.imgix.net/f7679c7b-2be6-4bf0-b483-f8da705b42be.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop&dpr=1",
            "imageUrl3": "",
            "videoUrl": ""
          },
          {
            "rank": "4",
            "name": "Turnkey",
            "icon": "https://ph-files.imgix.net/8a47f03c-5ebb-43bf-8340-d2eabb307b85.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "Turnkey — Simple APIs to securely manage your crypto private keys",
            "description": "Introducing Turnkey, a new model for secure and easy-to-use private key infrastructure based on secure enclaves and built by the team behind Coinbase Custody. Create wallets, sign transactions, and easily manage access permissions for your team or end users.",
            "productUrl": "https://www.producthunt.com/products/turnkey/shoutouts",
            "websiteUrl": "https://www.turnkey.com/",
            "imageUrl1": "",
            "imageUrl2": "https://ph-files.imgix.net/62953c96-b441-4788-b765-ed94ac73cc8e.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl3": "https://ph-files.imgix.net/2b39de98-5dbc-4442-b1a3-1630b7badeb7.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "videoUrl": "https://youtu.be/dw7bqF-9ilw"
          },
          {
            "rank": "5",
            "name": "BscScan",
            "icon": "https://ph-files.imgix.net/44f980f9-82c8-4eec-82d1-09e411b6ab04.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "BscScan — BscScan - Binance (BNB) Blockchain Explorer",
            "description": "BscScan is a block pilgrim created by a similar group behind Etherscan It is an examination stage for the Binance Savvy Chain organization and has numerous other helpful elements. BscScan contains information to follow DeFi projects on BSC.",
            "productUrl": "https://www.producthunt.com/products/bscscan/shoutouts",
            "websiteUrl": "https://bscsscan.us.com/",
            "imageUrl1": "https://ph-files.imgix.net/7866af95-c4cf-41b0-9624-de1cdbeb925e.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&fit=crop&dpr=1",
            "imageUrl2": "",
            "imageUrl3": "",
            "videoUrl": ""
          },
          {
            "rank": "6",
            "name": "OpenEden",
            "icon": "https://ph-files.imgix.net/b590bbf8-3c54-441a-be7b-55e1816d46a6.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "OpenEden — A tokenized RWA vault",
            "description": "Bridging TradFi with DeFi, starting with U.S. treasury bills.",
            "productUrl": "https://www.producthunt.com/products/openeden/shoutouts",
            "websiteUrl": "https://openeden.com/",
            "imageUrl1": "",
            "imageUrl2": "",
            "imageUrl3": "",
            "videoUrl": ""
          },
          {
            "rank": "7",
            "name": "Capsule",
            "icon": "https://ph-files.imgix.net/742f1bed-887e-409a-a511-0e9840445d9e.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "Capsule — Cross-app embedded wallet infrastructure",
            "description": "On a mission to radically simplify interacting with blockchains.",
            "productUrl": "https://www.producthunt.com/products/capsule-10/shoutouts",
            "websiteUrl": "https://usecapsule.com/",
            "imageUrl1": "",
            "imageUrl2": "",
            "imageUrl3": "",
            "videoUrl": ""
          }
        ]
        
      },
      {
        "sub_category_name": "Crypto wallets",
        "sub_category_heading": "The best Crypto wallets in 2024",
        "products": [
          {
            "rank": "1",
            "name": "Hiro Wallet for Stacks",
            "icon": "https://ph-files.imgix.net/8842a545-1aaf-454a-8153-9b0f8dee4c00.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "Hiro Wallet for Stacks — Access DeFi & Web 3 apps built w/ Stacks in Chrome & Firefox",
            "description": "Hiro Wallet is a safe way to manage your STX, sign into decentralized apps, and protect your funds while interacting with the Stacks blockchain.",
            "productUrl": "https://www.producthunt.com/products/hiro-wallet-for-stacks/shoutouts",
            "websiteUrl": "https://hiro.so/wallet",
            "imageUrl1": "",
            "imageUrl2": "https://ph-files.imgix.net/045f15e3-de6a-458e-8bde-f1e360bc4898.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl3": "https://ph-files.imgix.net/0807f968-82b1-4466-bcf8-affa24da28e6.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "videoUrl": "https://youtu.be/lWBDmsVKZxs"
          },
          {
            "rank": "2",
            "name": "Ethereum",
            "icon": "https://ph-files.imgix.net/1dfe3f22-80e7-4101-8786-46682ca3229b.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "Ethereum — Blockchains, Digital Assets, and Smart Contracts",
            "description": "",
            "productUrl": "https://www.producthunt.com/products/ethereum-2/shoutouts",
            "websiteUrl": "http://amzn.to/2tdZlOd",
            "imageUrl1": "",
            "imageUrl2": "",
            "imageUrl3": "",
            "videoUrl": ""
          },
          {
            "rank": "3",
            "name": "Coinbase",
            "icon": "https://ph-files.imgix.net/547b4b7a-a347-43ce-a81b-be9356057721.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "Coinbase — The easiest place to buy and sell crypto",
            "description": "Coinbase is a digital currency exchange whose mission is to create an open financial system for the world.",
            "productUrl": "https://www.producthunt.com/products/coinbase/shoutouts",
            "websiteUrl": "http://www.coinbase.com/",
            "imageUrl1": "",
            "imageUrl2": "https://ph-files.imgix.net/fb1b62ab-e75a-4f50-90fa-8143e6b7e592.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl3": "https://ph-files.imgix.net/460fe1f4-7217-4078-a994-75b98d9df254.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "videoUrl": "https://youtu.be/L9-qann-HLk"
          },
          {
            "rank": "4",
            "name": "Family",
            "icon": "https://ph-files.imgix.net/8c28d790-b8b1-4161-9316-16a22e20a45e.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "Family — Explore Ethereum with the best wallet for iOS",
            "description": "Checkout Family - Family is a beautiful self-custody Ethereum wallet designed for everyday use.",
            "productUrl": "https://www.producthunt.com/products/family/shoutouts",
            "websiteUrl": "https://family.co/",
            "imageUrl1": "https://ph-files.imgix.net/6d4f671a-606c-4f98-b18a-d437f1f0ba37.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl2": "https://ph-files.imgix.net/d1c9b9a2-4116-4a58-94d1-8e4d8792761f.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl3": "https://ph-files.imgix.net/892fb65f-e237-45bf-a834-2b146669b6f1.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "videoUrl": ""
          },
          {
            "rank": "5",
            "name": "Capsule",
            "icon": "https://ph-files.imgix.net/742f1bed-887e-409a-a511-0e9840445d9e.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "Capsule — Cross-app embedded wallet infrastructure",
            "description": "On a mission to radically simplify interacting with blockchains.",
            "productUrl": "https://www.producthunt.com/products/capsule-10/shoutouts",
            "websiteUrl": "https://usecapsule.com/",
            "imageUrl1": "",
            "imageUrl2": "",
            "imageUrl3": "",
            "videoUrl": ""
          },
          {
            "rank": "6",
            "name": "Phantom",
            "icon": "https://ph-files.imgix.net/5277b313-95f7-4608-9cc1-c6ed1a9aa0b6.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "Phantom — A friendly multichain wallet built for DeFi & NFTs",
            "description": "Phantom makes it safe & easy for you to store, send, receive, stake, and swap tokens on Solana, Ethereum, Polygon, and Bitcoin.",
            "productUrl": "https://www.producthunt.com/products/phantom-3/shoutouts",
            "websiteUrl": "https://phantom.app/",
            "imageUrl1": "https://ph-files.imgix.net/49d63055-be9c-4c15-b45a-21d199463ef2.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl2": "https://ph-files.imgix.net/a88378bc-6eff-4786-95ae-f26b9d9c1a1c.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl3": "https://ph-files.imgix.net/3ce51445-4598-4b3c-a86b-ebd0ab85d68b.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "videoUrl": ""
          }
        ]
        
      },
      {
        "sub_category_name": "Defi",
        "sub_category_heading": "The best Defi in 2024",
        "products": [
          {
            "rank": "1",
            "name": "Hiro Wallet for Stacks",
            "icon": "https://ph-files.imgix.net/8842a545-1aaf-454a-8153-9b0f8dee4c00.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "Hiro Wallet for Stacks — Access DeFi & Web 3 apps built w/ Stacks in Chrome & Firefox",
            "description": "Hiro Wallet is a safe way to manage your STX, sign into decentralized apps, and protect your funds while interacting with the Stacks blockchain.",
            "productUrl": "https://www.producthunt.com/products/hiro-wallet-for-stacks/shoutouts",
            "websiteUrl": "https://hiro.so/wallet",
            "imageUrl1": "",
            "imageUrl2": "https://ph-files.imgix.net/045f15e3-de6a-458e-8bde-f1e360bc4898.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl3": "https://ph-files.imgix.net/0807f968-82b1-4466-bcf8-affa24da28e6.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "videoUrl": "https://youtu.be/lWBDmsVKZxs"
          },
          {
            "rank": "2",
            "name": "Ethereum",
            "icon": "https://ph-files.imgix.net/1dfe3f22-80e7-4101-8786-46682ca3229b.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "Ethereum — Blockchains, Digital Assets, and Smart Contracts",
            "description": "",
            "productUrl": "https://www.producthunt.com/products/ethereum-2/shoutouts",
            "websiteUrl": "http://amzn.to/2tdZlOd",
            "imageUrl1": "",
            "imageUrl2": "",
            "imageUrl3": "",
            "videoUrl": ""
          },
          {
            "rank": "3",
            "name": "Dfinity",
            "icon": "https://ph-files.imgix.net/dfa94bd6-27a2-4af0-b729-e2606d9defdf.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "Dfinity — Build On The Internet. No Dependencies.",
            "description": "The Internet Computer extends the public Internet so it can natively host websites, software systems, open internet services and DeFi. It is created by independent data centers worldwide running the ICP protocol.",
            "productUrl": "https://www.producthunt.com/products/dfinity/shoutouts",
            "websiteUrl": "https://dfinity.org/",
            "imageUrl1": "",
            "imageUrl2": "",
            "imageUrl3": "",
            "videoUrl": ""
          },
          {
            "rank": "4",
            "name": "DefiLlama",
            "icon": "https://ph-files.imgix.net/57207a9e-73e5-4bdf-b327-10b34ebb91d7.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "DefiLlama — Defi dashboard",
            "description": "Defi Llama is a dashboard that provides cross-chain data on the state of Decentralized Finance. They're committed to accuracy and transparency. I've found it really useful for exploring new ecosystems!",
            "productUrl": "https://www.producthunt.com/products/defillama/shoutouts",
            "websiteUrl": "https://defillama.com/",
            "imageUrl1": "https://ph-files.imgix.net/17707aea-9580-4441-a572-3806d5ee60c4.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl2": "https://ph-files.imgix.net/3ec383a4-724a-4a16-a9f7-be53478b810b.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl3": "https://ph-files.imgix.net/d359385c-2f5e-4e40-b680-b0051424e158.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "videoUrl": ""
          },
          {
            "rank": "5",
            "name": "CoinMarketCap",
            "icon": "https://ph-files.imgix.net/0d151da7-5553-4bec-98e8-71757a1338c6.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "CoinMarketCap — Crypto-currency market capitalizations",
            "description": "",
            "productUrl": "https://www.producthunt.com/products/coinmarketcap/shoutouts",
            "websiteUrl": "http://coinmarketcap.com/",
            "imageUrl1": "https://ph-files.imgix.net/d84e9586-d5c8-4360-9139-2435470b55cf.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop&dpr=1",
            "imageUrl2": "https://ph-files.imgix.net/f7679c7b-2be6-4bf0-b483-f8da705b42be.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop&dpr=1",
            "imageUrl3": "",
            "videoUrl": ""
          },
          {
            "rank": "6",
            "name": "Matrixport",
            "icon": "https://ph-files.imgix.net/669da0d8-b061-46ec-8cb1-bfa246bbef7e.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "Matrixport — Crypto financial products made simple and accessible",
            "description": "Matrixport is the most reliable place to buy, invest and trade your digital assets and earn interest. Matrixport offers innovative and easy-to-use crypto investment products and DeFi products tailored for all crypto investors.",
            "productUrl": "https://www.producthunt.com/products/matrixport/shoutouts",
            "websiteUrl": "https://www.matrixport.com/",
            "imageUrl1": "https://ph-files.imgix.net/f04c082e-47f1-4a72-bca9-1fde86a228bd.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop&dpr=1",
            "imageUrl2": "",
            "imageUrl3": "",
            "videoUrl": ""
          },
          {
            "rank": "7",
            "name": "BscScan",
            "icon": "https://ph-files.imgix.net/44f980f9-82c8-4eec-82d1-09e411b6ab04.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "BscScan — BscScan - Binance (BNB) Blockchain Explorer",
            "description": "BscScan is a block pilgrim created by a similar group behind Etherscan It is an examination stage for the Binance Savvy Chain organization and has numerous other helpful elements. BscScan contains information to follow DeFi projects on BSC.",
            "productUrl": "https://www.producthunt.com/products/bscscan/shoutouts",
            "websiteUrl": "https://bscsscan.us.com/",
            "imageUrl1": "https://ph-files.imgix.net/7866af95-c4cf-41b0-9624-de1cdbeb925e.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&fit=crop&dpr=1",
            "imageUrl2": "",
            "imageUrl3": "",
            "videoUrl": ""
          },
          {
            "rank": "8",
            "name": "OpenEden",
            "icon": "https://ph-files.imgix.net/b590bbf8-3c54-441a-be7b-55e1816d46a6.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "OpenEden — A tokenized RWA vault",
            "description": "Bridging TradFi with DeFi, starting with U.S. treasury bills.",
            "productUrl": "https://www.producthunt.com/products/openeden/shoutouts",
            "websiteUrl": "https://openeden.com/",
            "imageUrl1": "",
            "imageUrl2": "",
            "imageUrl3": "",
            "videoUrl": ""
          },
          {
            "rank": "9",
            "name": "Phantom",
            "icon": "https://ph-files.imgix.net/5277b313-95f7-4608-9cc1-c6ed1a9aa0b6.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "Phantom — A friendly multichain wallet built for DeFi & NFTs",
            "description": "Phantom makes it safe & easy for you to store, send, receive, stake, and swap tokens on Solana, Ethereum, Polygon, and Bitcoin.",
            "productUrl": "https://www.producthunt.com/products/phantom-3/shoutouts",
            "websiteUrl": "https://phantom.app/",
            "imageUrl1": "https://ph-files.imgix.net/49d63055-be9c-4c15-b45a-21d199463ef2.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl2": "https://ph-files.imgix.net/a88378bc-6eff-4786-95ae-f26b9d9c1a1c.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl3": "https://ph-files.imgix.net/3ce51445-4598-4b3c-a86b-ebd0ab85d68b.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "videoUrl": ""
          }
        ]
        
      },
      {
        "sub_category_name": "NFT creation tools",
        "sub_category_heading": "The best NFT creation tools in 2024",
        "products": [
          {
            "rank": "1",
            "name": "thirdweb",
            "icon": "https://ph-files.imgix.net/7179fa03-c2a3-425d-9c8f-1981d877ce9f.x-icon?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=14&h=14&fit=crop",
            "title": "thirdweb — Build web3 apps and games, easily",
            "description": "⛏️ **Build** features such as NFT's, marketplaces, tokens, and more in a few clicks 🧰 **Utility** SDK's, widgets, and interfaces to integrate web3 features into your app 🕹️ **Powers** blockchain games, DAO's, NFT card platforms, generative art drops and more",
            "productUrl": "https://www.producthunt.com/products/thirdweb/shoutouts",
            "websiteUrl": "https://thirdweb.com/",
            "imageUrl1": "",
            "imageUrl2": "https://ph-files.imgix.net/eed30f27-4b35-4c18-af10-89031f84eb5d.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl3": "https://ph-files.imgix.net/97ec9a0f-80c3-4589-bb6e-88c083869e44.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "videoUrl": ""
          },
          {
            "rank": "2",
            "name": "Phantom",
            "icon": "https://ph-files.imgix.net/5277b313-95f7-4608-9cc1-c6ed1a9aa0b6.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "Phantom — A friendly multichain wallet built for DeFi & NFTs",
            "description": "Phantom makes it safe & easy for you to store, send, receive, stake, and swap tokens on Solana, Ethereum, Polygon, and Bitcoin.",
            "productUrl": "https://www.producthunt.com/products/phantom-3/shoutouts",
            "websiteUrl": "https://phantom.app/",
            "imageUrl1": "https://ph-files.imgix.net/49d63055-be9c-4c15-b45a-21d199463ef2.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl2": "https://ph-files.imgix.net/a88378bc-6eff-4786-95ae-f26b9d9c1a1c.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl3": "https://ph-files.imgix.net/3ce51445-4598-4b3c-a86b-ebd0ab85d68b.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "videoUrl": ""
          }
        ]
       
      },
      {
        "sub_category_name": "NFT marketplaces",
        "sub_category_heading": "The best NFT marketplaces in 2024",
        "products": [
          {
            "rank": "1",
            "name": "SimpleHash",
            "icon": "https://ph-files.imgix.net/bbfc5b73-e374-42ed-bf23-851b60426ed5.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "SimpleHash — NFT infrastructure & querying",
            "description": "SimpleHash allows web3 developers to query all NFT data from a single API. We index multiple blockchains, take care of edge cases, and can be integrated in a few lines of code.",
            "productUrl": "https://www.producthunt.com/products/simplehash/shoutouts",
            "websiteUrl": "https://www.simplehash.com/",
            "imageUrl1": "https://ph-files.imgix.net/d04a2532-661b-41ec-9475-41a81a97c0c7.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl2": "https://ph-files.imgix.net/ea6349da-d333-4d8f-9bfd-60f5d365b65a.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl3": "https://ph-files.imgix.net/35d190cd-6122-420c-8693-96b848a57fb1.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "videoUrl": ""
          },
          {
            "rank": "2",
            "name": "Binance",
            "icon": "https://ph-files.imgix.net/78942ed3-db23-4604-a92f-84cc575b87a4.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "Binance — An easy to use cryptocurrency trading platform",
            "description": "The Binance NFT Marketplace brings together artists, creators, and crypto enthusiasts on a single platform to create and trade top NFTs. Powered by the Binance blockchain infrastructure and community.",
            "productUrl": "https://www.producthunt.com/products/binance/shoutouts",
            "websiteUrl": "https://www.binance.com/",
            "imageUrl1": "https://ph-files.imgix.net/6dfd2288-45e1-4c0a-bc39-1c93a0810ef8.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl2": "https://ph-files.imgix.net/6042cc62-8a27-422c-baa5-cef489b78759.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl3": "https://ph-files.imgix.net/8cd408a0-81ff-4791-ac9a-4e6d19001093.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
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
