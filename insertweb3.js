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
      "cat_name": "Web3",
      "cat_heading": "The best Web3 in 2024",
      "sub_categories": [
        {
          "sub_cat_name": "Crypto Exchanges",
          "sub_cat_heading": "The best Crypto Exchanges in 2024",
          "products": [
            {
              "rank": "1",
              "imageUrl": "https://ph-files.imgix.net/3090d95b-e49a-497d-8a1c-38a2da573396.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
              "title": "Coingecko — Live Crypto Prices",
              "description": "CoinGecko provides a fundamental analysis of the crypto market. In addition to tracking price, volume and market capitalization, CoinGecko tracks community growth, open-source code development, major events and on-chain metrics"
            },

            {
              "rank": "2",
              "imageUrl": "https://ph-files.imgix.net/547b4b7a-a347-43ce-a81b-be9356057721.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
              "title": "Coinbase — The easiest place to buy and sell crypto",
              "description": "Coinbase is a digital currency exchange whose mission is to create an open financial system for the world."
            },
            {
              "rank": "3",
              "imageUrl": "https://ph-files.imgix.net/78942ed3-db23-4604-a92f-84cc575b87a4.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
              "title": "Binance — An easy to use cryptocurrency trading platform",
              "description": "The Binance NFT Marketplace brings together artists, creators, and crypto enthusiasts on a single platform to create and trade top NFTs. Powered by the Binance blockchain infrastructure and community."
            },
            {
              "rank": "4",
              "imageUrl": "https://ph-files.imgix.net/669da0d8-b061-46ec-8cb1-bfa246bbef7e.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
              "title": "Matrixport — Crypto financial products made simple and accessible",
              "description": "Matrixport is the most reliable place to buy, invest and trade your digital assets and earn interest. Matrixport offers innovative and easy-to-use crypto investment products and DeFi products tailored for all crypto investors."
            }
          ]
        },
        {
          "sub_cat_name": "Crypto tools",
          "sub_cat_heading": "The best Crypto tools in 2024",
          "products": [
            {
              "rank": "1",
              "imageUrl": "https://ph-files.imgix.net/abff8d50-5720-4088-b7f2-5c68dc03de10.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
              "title": "Realm App — Converts idle browser homepage into quick-access dashboard.",
              "description": "Realm App is a literacy and productivity tool as a browser extension. Users can customize their workspaces using a range of widgets such as bookmarks and curated reading lists, to suit their role and usage."
            },
            {
              "rank": "2",
              "imageUrl": "https://ph-files.imgix.net/3090d95b-e49a-497d-8a1c-38a2da573396.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
              "title": "Coingecko — Live Crypto Prices",
              "description": "CoinGecko provides a fundamental analysis of the crypto market. In addition to tracking price, volume and market capitalization, CoinGecko tracks community growth, open-source code development, major events and on-chain metrics"
            },
            {
              "rank": "3",
              "imageUrl": "https://ph-files.imgix.net/8a47f03c-5ebb-43bf-8340-d2eabb307b85.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
              "title": "Turnkey — Simple APIs to securely manage your crypto private keys",
              "description": "Introducing Turnkey, a new model for secure and easy-to-use private key infrastructure based on secure enclaves and built by the team behind Coinbase Custody. Create wallets, sign transactions, and easily manage access permissions for your team or end users."
            },
            {
              "rank": "4",
              "imageUrl": "https://ph-files.imgix.net/44f980f9-82c8-4eec-82d1-09e411b6ab04.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
              "title": "BscScan — BscScan - Binance (BNB) Blockchain Explorer",
              "description": "BscScan is a block pilgrim created by a similar group behind Etherscan It is an examination stage for the Binance Savvy Chain organization and has numerous other helpful elements. BscScan contains information to follow DeFi projects on BSC."
            },
            {
              "rank": "5",
              "imageUrl": "https://ph-files.imgix.net/b590bbf8-3c54-441a-be7b-55e1816d46a6.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
              "title": "OpenEden — A tokenized RWA vault",
              "description": "Bridging TradFi with DeFi, starting with U.S. treasury bills."
            },
            {
              "rank": "6",
              "imageUrl": "https://ph-files.imgix.net/742f1bed-887e-409a-a511-0e9840445d9e.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
              "title": "Capsule — Cross-app embedded wallet infrastructure",
              "description": "On a mission to radically simplify interacting with blockchains."
            }
          ]
        },
        {
            "sub_cat_name": "crypto Wallets",
            "sub_cat_heading": "The best crypto Wallets in 2024",
            "products": [
              {
                "rank": "1",
                "imageUrl": "https://ph-files.imgix.net/8842a545-1aaf-454a-8153-9b0f8dee4c00.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "Hiro Wallet for Stacks — Access DeFi & Web 3 apps built w/ Stacks in Chrome & Firefox",
                "description": "Hiro Wallet is a safe way to manage your STX, sign into decentralized apps, and protect your funds while interacting with the Stacks blockchain."
              },
              {
                "rank": "2",
                "imageUrl": "https://ph-files.imgix.net/547b4b7a-a347-43ce-a81b-be9356057721.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "Coinbase — The easiest place to buy and sell crypto",
                "description": "Coinbase is a digital currency exchange whose mission is to create an open financial system for the world."
              },
              {
                "rank": "3",
                "imageUrl": "https://ph-files.imgix.net/8c28d790-b8b1-4161-9316-16a22e20a45e.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "Family — Explore Ethereum with the best wallet for iOS",
                "description": "Checkout Family - Family is a beautiful self-custody Ethereum wallet designed for everyday use."
              },
              {
                "rank": "4",
                "imageUrl": "https://ph-files.imgix.net/742f1bed-887e-409a-a511-0e9840445d9e.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "Capsule — Cross-app embedded wallet infrastructure",
                "description": "On a mission to radically simplify interacting with blockchains."
              },
              {
                "rank": "5",
                "imageUrl": "https://ph-files.imgix.net/5277b313-95f7-4608-9cc1-c6ed1a9aa0b6.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "Phantom — A friendly multichain wallet built for DeFi & NFTs",
                "description": "Phantom makes it safe & easy for you to store, send, receive, stake, and swap tokens on Solana, Ethereum, Polygon, and Bitcoin."
              }            ]
          },
          {
            "sub_cat_name": "Defi",
            "sub_cat_heading": "The best Defi in 2024",
            "products": [
              {
                "rank": "1",
                "imageUrl": "https://ph-files.imgix.net/8842a545-1aaf-454a-8153-9b0f8dee4c00.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "Hiro Wallet for Stacks — Access DeFi & Web 3 apps built w/ Stacks in Chrome & Firefox",
                "description": "Hiro Wallet is a safe way to manage your STX, sign into decentralized apps, and protect your funds while interacting with the Stacks blockchain."
              },
              {
                "rank": "2",
                "imageUrl": "https://ph-files.imgix.net/1dfe3f22-80e7-4101-8786-46682ca3229b.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "Ethereum — Blockchains, Digital Assets, and Smart Contracts",
                "description": ""
              },
              {
                "rank": "3",
                "imageUrl": "https://ph-files.imgix.net/dfa94bd6-27a2-4af0-b729-e2606d9defdf.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "Dfinity — Build On The Internet. No Dependencies.",
                "description": "The Internet Computer extends the public Internet so it can natively host websites, software systems, open internet services and DeFi. It is created by independent data centers worldwide running the ICP protocol."
              },
              {
                "rank": "4",
                "imageUrl": "https://ph-files.imgix.net/57207a9e-73e5-4bdf-b327-10b34ebb91d7.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "DefiLlama — Defi dashboard",
                "description": "Defi Llama is a dashboard that provides cross-chain data on the state of Decentralized Finance. They're committed to accuracy and transparency. I've found it really useful for exploring new ecosystems!"
              },
              
              {
                "rank": "5",
                "imageUrl": "https://ph-files.imgix.net/669da0d8-b061-46ec-8cb1-bfa246bbef7e.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "Matrixport — Crypto financial products made simple and accessible",
                "description": "Matrixport is the most reliable place to buy, invest and trade your digital assets and earn interest. Matrixport offers innovative and easy-to-use crypto investment products and DeFi products tailored for all crypto investors."
              },
              {
                "rank": "6",
                "imageUrl": "https://ph-files.imgix.net/44f980f9-82c8-4eec-82d1-09e411b6ab04.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "BscScan — BscScan - Binance (BNB) Blockchain Explorer",
                "description": "BscScan is a block pilgrim created by a similar group behind Etherscan It is an examination stage for the Binance Savvy Chain organization and has numerous other helpful elements. BscScan contains information to follow DeFi projects on BSC."
              },
              {
                "rank": "7",
                "imageUrl": "https://ph-files.imgix.net/b590bbf8-3c54-441a-be7b-55e1816d46a6.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "OpenEden — A tokenized RWA vault",
                "description": "Bridging TradFi with DeFi, starting with U.S. treasury bills."
              },
              {
                "rank": "8",
                "imageUrl": "https://ph-files.imgix.net/5277b313-95f7-4608-9cc1-c6ed1a9aa0b6.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "Phantom — A friendly multichain wallet built for DeFi & NFTs",
                "description": "Phantom makes it safe & easy for you to store, send, receive, stake, and swap tokens on Solana, Ethereum, Polygon, and Bitcoin."
              }
           ]
          },
          {
            "sub_cat_name": "NFT creation Tools",
            "sub_cat_heading": "The best NFT creation Tools in 2024",
            "products": [
              {
                "rank": "1",
                "imageUrl": "https://ph-files.imgix.net/7179fa03-c2a3-425d-9c8f-1981d877ce9f.x-icon?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=14&h=14&fit=crop",
                "title": "thirdweb — Build web3 apps and games, easily",
                "description": "⛏️ **Build** features such as NFT's, marketplaces, tokens, and more in a few clicks 🧰 **Utility** SDK's, widgets, and interfaces to integrate web3 features into your app 🕹️ **Powers** blockchain games, DAO's, NFT card platforms, generative art drops and more"
              },
              {
                "rank": "2",
                "imageUrl": "https://ph-files.imgix.net/5277b313-95f7-4608-9cc1-c6ed1a9aa0b6.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "Phantom — A friendly multichain wallet built for DeFi & NFTs",
                "description": "Phantom makes it safe & easy for you to store, send, receive, stake, and swap tokens on Solana, Ethereum, Polygon, and Bitcoin."
              }
            ]
          },
          {
            "sub_cat_name": "NFT marketplaces",
            "sub_cat_heading": "The best NFT marketplaces in 2024",
            "products": [
              {
                "rank": "1",
                "imageUrl": "https://ph-files.imgix.net/bbfc5b73-e374-42ed-bf23-851b60426ed5.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "SimpleHash — NFT infrastructure & querying",
                "description": "SimpleHash allows web3 developers to query all NFT data from a single API. We index multiple blockchains, take care of edge cases, and can be integrated in a few lines of code."
              },
              {
                "rank": "2",
                "imageUrl": "https://ph-files.imgix.net/78942ed3-db23-4604-a92f-84cc575b87a4.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "Binance — An easy to use cryptocurrency trading platform",
                "description": "The Binance NFT Marketplace brings together artists, creators, and crypto enthusiasts on a single platform to create and trade top NFTs. Powered by the Binance blockchain infrastructure and community."
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
