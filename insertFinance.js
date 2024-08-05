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
    "cat_name": "Finance",
    "cat_heading": "The best Finance in 2024",
    "sub_categories": [
      {
        "sub_cat_name": "Accounting software",
        "sub_cat_heading": "The best Accounting software in 2024",
        "products": [
          {
            "rank": "1",
            "name": "QuickBooks",
            "icon": "https://ph-files.imgix.net/edb8aea8-7335-49a5-924d-46a9f0d76d64.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "QuickBooks — Connector- Integrate with the applications you love!",
            "description": "Simplifies all aspects of your financial operations by integrating QB with the applications you love. www.bizappln.com/integration/crm-quickbooks.html Check out our site to realize its full potential.",
            "productUrl": "https://www.producthunt.com/products/quickbooks-2/shoutouts",
            "websiteUrl": "https://www.bizappln.com/integration/crm-quickbooks.html",
            "imageUrl1": "",
            "imageUrl2": "",
            "imageUrl3": "",
            "videoUrl": ""
          },
          {
            "rank": "2",
            "name": "Fondo",
            "icon": "https://ph-files.imgix.net/f146eb83-55b8-4ecd-be04-f25646db0e70.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "Fondo — Bookkeeping, tax, and tax credits for startups",
            "description": "Fondo is the easy way to get your startup's books closed, taxes filed, & cash back from the IRS ($21k on average).",
            "productUrl": "https://www.producthunt.com/products/fondo/shoutouts",
            "websiteUrl": "https://tryfondo.com/credits",
            "imageUrl1": "https://ph-files.imgix.net/02819f1d-2b11-4af2-a573-7f441e2356db.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl2": "https://ph-files.imgix.net/098dec9f-92a8-4fe7-a412-a05905c1e55a.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl3": "https://ph-files.imgix.net/2f9040aa-66ba-47db-a6a5-5d756eae64c9.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "videoUrl": ""
          },
          {
            "rank": "3",
            "name": "Xero",
            "icon": "https://ph-files.imgix.net/c0dec3a8-2030-4e98-a73a-9b0c288b4751.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "Xero — Accounting software to do your to-do",
            "description": "Xero online accounting software for your business connects you to your bank, accountant, bookkeeper, and other business apps. Start a free trial today.",
            "productUrl": "https://www.producthunt.com/products/xero-2/shoutouts",
            "websiteUrl": "https://www.xero.com/us",
            "imageUrl1": "https://ph-files.imgix.net/a7e719e9-7d1e-494a-a86a-8d06f31ad73b.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl2": "https://ph-files.imgix.net/3adaa06a-f8c1-4adc-8322-1e3ca029b54a.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl3": "https://ph-files.imgix.net/5a5b5820-bf06-456e-86f4-c4ede209000c.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "videoUrl": ""
          },
          {
            "rank": "4",
            "name": "Fortune",
            "icon": "https://ph-files.imgix.net/8e509d6c-5aea-4c10-a945-643642e25eb5.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "Fortune — An AI-powered accountant",
            "description": "Connect all your banks in one place, leverage AI to automate accounting, track cash flow, and forecast.",
            "productUrl": "https://www.producthunt.com/products/fortune-finance-accounting/shoutouts",
            "websiteUrl": "https://www.fortune.app/",
            "imageUrl1": "https://ph-files.imgix.net/8b731373-5b45-4e34-90b2-465a725cb4db.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl2": "https://ph-files.imgix.net/2cfc2f6c-5140-4847-bb6c-8f03b55cb301.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl3": "https://ph-files.imgix.net/1b0cfa55-8453-4efb-a2e9-06303342447b.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "videoUrl": ""
          }
        ]
        
      },
      {
        "sub_cat_name": "Budgeting apps",
        "sub_cat_heading": "The best Budgeting apps in 2024",
        "products": [
          {
            "rank": "1",
            "name": "Brex",
            "icon": "https://ph-files.imgix.net/0385458c-bf0b-452e-bb49-17d8cca36c9d.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "Brex — The #1 spend platform for strategic finance teams.",
            "description": "Brex is all-in-one finance for growing businesses. We help companies spend, save, and earn smarter—and take every dollar further—by doing more than a bank, bookkeeping, or reward program could ever do alone. After completing the Y Combinator accelerator program in 2017, Brex has grown to over 600 employees and raised over US $940 million in venture capital.",
            "productUrl": "https://www.producthunt.com/products/brex/shoutouts",
            "websiteUrl": "https://brex.com/",
            "imageUrl1": "",
            "imageUrl2": "",
            "imageUrl3": "",
            "videoUrl": ""
          },
          {
            "rank": "2",
            "name": "Razorpay",
            "icon": "https://ph-files.imgix.net/f24237a4-b7c8-44ac-8b92-e91a3d28628b.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "Razorpay — Power your finance, grow your business",
            "description": "Accept payments from customers. Automate payouts to vendors & employees. Never run out of working capital.",
            "productUrl": "https://www.producthunt.com/products/razorpay/shoutouts",
            "websiteUrl": "https://razorpay.com/",
            "imageUrl1": "https://ph-files.imgix.net/1fb1bb24-3491-4df4-be32-304857cdf967.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl2": "https://ph-files.imgix.net/06c39bba-a267-48c7-b50f-c6e87361d55f.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl3": "https://ph-files.imgix.net/f5fe8429-f2b7-4aff-9422-37f9f8a1dd65.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "videoUrl": ""
          },
          {
            "rank": "3",
            "name": "Monefy - money manager",
            "icon": "https://ph-files.imgix.net/72536b62-229e-4e9b-baae-b9899ea9e6e9.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "Monefy - money manager — Personal finance manager and expense tracker",
            "description": "",
            "productUrl": "https://www.producthunt.com/products/monefy-money-manager/shoutouts",
            "websiteUrl": "http://monefy.me/",
            "imageUrl1": "https://ph-files.imgix.net/7b499ffc-623e-4f96-b144-85a4dd6799ba.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl2": "https://ph-files.imgix.net/9f291126-16e1-43a2-92ca-013ff23d6625.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl3": "https://ph-files.imgix.net/b3aa0922-0a0a-408e-8f33-004bf60cdaba.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "videoUrl": ""
          },
          {
            "rank": "4",
            "name": "Splitwise",
            "icon": "https://ph-files.imgix.net/ba8cff2f-bc48-49c5-9477-e7aefa91a375.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "Splitwise — Split expenses with friends",
            "description": "Splitwise is a free tool for friends and roommates to track bills and other shared expenses, so that everyone gets paid back. On the web, iPhone & Android!",
            "productUrl": "https://www.producthunt.com/products/splitwise/shoutouts",
            "websiteUrl": "https://www.splitwise.com/",
            "imageUrl1": "https://ph-files.imgix.net/5a9c22d5-e11d-45df-85a6-52c0ef1f5a22.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl2": "https://ph-files.imgix.net/95569e24-f0dd-4df0-946a-dd5e052d090f.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl3": "https://ph-files.imgix.net/0820ad3d-4163-44fd-b62b-fee8439013ca.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "videoUrl": ""
          },
          {
            "rank": "5",
            "name": "Guap - Budget Planner App",
            "icon": "https://ph-files.imgix.net/55b92be8-04e7-4d14-bf28-b177f65fcd58.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "Guap - Budget Planner App — Earn more, spend less, control is everything",
            "description": "Guap is a cute and very simple budget planner. The app helps you easily track your expenses and income. You can easily view statistics for any period. Persistence Tree is a new game mode for your personal motivation.",
            "productUrl": "https://www.producthunt.com/products/guap-budget-planner-app/shoutouts",
            "websiteUrl": "https://apps.apple.com/us/app/guap-budget-planner-app/id6451455721",
            "imageUrl1": "https://ph-files.imgix.net/02288919-00e6-48ef-a4a8-a089faa981ab.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl2": "https://ph-files.imgix.net/97f9cba9-2ed4-4fe2-90d1-f563b48b2d4a.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl3": "https://ph-files.imgix.net/2a2d27fc-c8c8-4811-927e-3e5c9a91a043.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "videoUrl": ""
          },
          {
            "rank": "6",
            "name": "Cashews for iOS & Android",
            "icon": "https://ph-files.imgix.net/2266da69-03cb-496c-97ae-29b92d11ca02.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "Cashews for iOS & Android — No more financial anxiety",
            "description": "Meet your smart personal accountant who'll tell you exactly what you can safely spend every day, week, and month without having a budget 💰 Cashews effortesly tracks your finances with an advanced cashflow algorithm and supports 12,000+ US banks.",
            "productUrl": "https://www.producthunt.com/products/cashews-for-ios-android/shoutouts",
            "websiteUrl": "https://cashews.finance/",
            "imageUrl1": "https://ph-files.imgix.net/761189b5-c2af-47b3-801a-f7d2519f7665.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl2": "https://ph-files.imgix.net/99241dc7-b867-42b3-b0bd-41b7d497f4ef.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl3": "https://ph-files.imgix.net/8e461988-ac84-40e6-970e-5f8bf89f9bfb.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "videoUrl": ""
          },
          {
            "rank": "7",
            "name": "Budget Hound",
            "icon": "https://ph-files.imgix.net/d9ec7c39-d361-4dd4-b888-d5c24ca86618.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "Budget Hound — Smart and simple personal budget planner",
            "description": "An indie iOS app for not just tracking — but also planning and analyzing — your budget. If you value money and want to be wise with your spending, or if you want to learn how to do budgeting, the updated Budget Hound is here to help you.",
            "productUrl": "https://www.producthunt.com/products/budget-hound-3/shoutouts",
            "websiteUrl": "https://budgethound.app/",
            "imageUrl1": "https://ph-files.imgix.net/8acd37f9-9c13-46d5-a157-f350be11aee8.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl2": "https://ph-files.imgix.net/5e0dcbc7-c17f-43ba-88b0-ab18f7383d3c.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl3": "https://ph-files.imgix.net/52707553-f5ba-495d-bea3-b5f2e4d645ce.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "videoUrl": ""
          },
          {
            "rank": "8",
            "name": "Fortune",
            "icon": "https://ph-files.imgix.net/8e509d6c-5aea-4c10-a945-643642e25eb5.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "Fortune — An AI-powered accountant",
            "description": "Connect all your banks in one place, leverage AI to automate accounting, track cash flow, and forecast.",
            "productUrl": "https://www.producthunt.com/products/fortune-finance-accounting/shoutouts",
            "websiteUrl": "https://www.fortune.app/",
            "imageUrl1": "https://ph-files.imgix.net/8b731373-5b45-4e34-90b2-465a725cb4db.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl2": "https://ph-files.imgix.net/2cfc2f6c-5140-4847-bb6c-8f03b55cb301.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl3": "https://ph-files.imgix.net/1b0cfa55-8453-4efb-a2e9-06303342447b.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "videoUrl": ""
          },
          {
            "rank": "9",
            "name": "Monarch",
            "icon": "https://ph-files.imgix.net/1bcf747f-5c40-4b92-9c8e-53d13614ed7b.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "Monarch — The modern way to manage your money",
            "description": "Managing money can be complicated. Track all of your accounts in one place, collaborate with a partner, and create a long term plan to achieve your goals. Get personalized advice along the way.",
            "productUrl": "https://www.producthunt.com/products/monarch/shoutouts",
            "websiteUrl": "https://www.monarchmoney.com/",
            "imageUrl1": "https://ph-files.imgix.net/d85f6820-d068-43f2-9e79-11e94e782daf.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl2": "https://ph-files.imgix.net/8211012e-5a37-4df1-a284-4dd48520600c.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl3": "https://ph-files.imgix.net/f8ca9477-fb9d-4569-911a-dc2ff236fad5.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "videoUrl": ""
          },
          {
            "rank": "10",
            "name": "Mint",
            "icon": "https://ph-files.imgix.net/9614f548-5c4c-4767-abf4-393e6a7d24c7.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "Mint — Budget Tracker & Planner | Free Online Money Management | Mint",
            "description": "Take charge of your finances with Mint’s online budget planner. Our free budget tracker helps you understand your spending for a brighter financial future.",
            "productUrl": "https://www.producthunt.com/products/mint-2/shoutouts",
            "websiteUrl": "https://mint.intuit.com/",
            "imageUrl1": "",
            "imageUrl2": "",
            "imageUrl3": "",
            "videoUrl": ""
          },
          {
            "rank": "11",
            "name": "Rocket Money",
            "icon": "https://ph-files.imgix.net/cb7bec49-bd4e-4696-b174-4d884a3dd625.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "Rocket Money — The money app that works for you",
            "description": "Managing money is hard, but you don’t have to do it alone. Rocket Money empowers you to save more, spend less, see everything, and take back control of your financial life. Formerly known as Truebill.",
            "productUrl": "https://www.producthunt.com/products/rocket-money/shoutouts",
            "websiteUrl": "https://www.rocketmoney.com/",
            "imageUrl1": "https://ph-files.imgix.net/726f4060-035b-4593-9263-d576f04a7c97.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl2": "https://ph-files.imgix.net/b3f57c25-9fca-46ee-9cd0-8fb03bdd728e.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl3": "https://ph-files.imgix.net/cc0ec7cb-1f15-4c7f-9595-68ad524a816b.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "videoUrl": ""
          }
        ]
        
      },
      {
        "sub_cat_name": "Financial planning",
        "sub_cat_heading": "The best Financial planning in 2024",
        "products": [
          {
            "rank": "1",
            "name": "ChartMogul",
            "icon": "https://ph-files.imgix.net/522d48b1-30e5-4a2b-afdb-693f1f76d66f.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "ChartMogul — Unlock the full revenue potential of your SaaS business",
            "description": "Our subscription analytics platform seamlessly combines and normalizes SaaS revenue data from multiple sources, delivering a clear and accurate view of your B2B SaaS business. You'll be ready to make data-driven decisions that take your business to the next level.",
            "productUrl": "https://www.producthunt.com/products/chartmogul/shoutouts",
            "websiteUrl": "https://chartmogul.com/",
            "imageUrl1": "https://ph-files.imgix.net/047fe495-5ab1-47d6-a6fe-bd1432508fee.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl2": "https://ph-files.imgix.net/02b06a79-f6d8-4a65-8500-d7bbf0a9d599.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl3": "https://ph-files.imgix.net/5aa1b3c9-04b4-46cb-82df-03f917d98bc3.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "videoUrl": ""
          },
          {
            "rank": "2",
            "name": "Brex",
            "icon": "https://ph-files.imgix.net/0385458c-bf0b-452e-bb49-17d8cca36c9d.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "Brex — The #1 spend platform for strategic finance teams.",
            "description": "Brex is all-in-one finance for growing businesses. We help companies spend, save, and earn smarter—and take every dollar further—by doing more than a bank, bookkeeping, or reward program could ever do alone. After completing the Y Combinator accelerator program in 2017, Brex has grown to over 600 employees and raised over US $940 million in venture capital.",
            "productUrl": "https://www.producthunt.com/products/brex/shoutouts",
            "websiteUrl": "https://brex.com/",
            "imageUrl1": "",
            "imageUrl2": "",
            "imageUrl3": "",
            "videoUrl": ""
          },
          {
            "rank": "3",
            "name": "Sardine",
            "icon": "https://ph-files.imgix.net/520f10cf-db80-4319-9ecc-c693e1558c87.svg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "Sardine — A fraud and financial crime protection platform",
            "description": "Protect every customer interaction from financial crime. Used by banks, retailers, and fintechs to detect fraud patterns, prevent money laundering, and stop sophisticated scams.",
            "productUrl": "https://www.producthunt.com/products/sardine/shoutouts",
            "websiteUrl": "https://www.sardine.ai/",
            "imageUrl1": "",
            "imageUrl2": "",
            "imageUrl3": "",
            "videoUrl": ""
          },
          {
            "rank": "4",
            "name": "Carta",
            "icon": "https://ph-files.imgix.net/ce57e4fa-2158-406f-a22f-0d1c7a22c9ff.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "Carta — Equity. Simplified.",
            "description": "Carta is an ownership and equity management platform trusted by thousands of founders, investors, and employees.",
            "productUrl": "https://www.producthunt.com/products/carta/shoutouts",
            "websiteUrl": "https://carta.com/",
            "imageUrl1": "https://ph-files.imgix.net/db296001-a528-44e4-8d36-fa12073d0b24.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl2": "https://ph-files.imgix.net/828b4671-2631-4a13-98c9-8e2c5cca6314.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl3": "https://ph-files.imgix.net/ce23e1ad-08e5-452a-996b-f45889d6de64.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "videoUrl": ""
          },
          {
            "rank": "5",
            "name": "Arc",
            "icon": "https://ph-files.imgix.net/bb119d1c-5312-47ce-bb40-df80abf79e26.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "Arc — Software-driven banking & growth capital for startups",
            "description": "Arc empowers startups with a better banking experience. With Arc, you can open FDIC-insurance eligible accounts in minutes, manage everyday banking needs without fees, diversify & safeguard cash, maximize yield, and instantly access growth capital—all in one platform and partnering with trusted banks. Based in SF & NYC, Arc has raised $180M+ of equity and debt funding from Left Lane, NFX, BCV, YC, among others. [Arc is a technology company, not a bank: arc.tech/general-disclosures]",
            "productUrl": "https://www.producthunt.com/products/arc-6/shoutouts",
            "websiteUrl": "https://www.arc.tech/",
            "imageUrl1": "https://ph-files.imgix.net/7d3dcd45-3c46-4a64-8416-470c7dcadcf7.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl2": "https://ph-files.imgix.net/32eadd82-ee7b-4fd4-933a-537bb30e9f96.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl3": "https://ph-files.imgix.net/40214df0-e9c8-4b47-9569-0f1e6ed0261c.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "videoUrl": ""
          },
          {
            "rank": "6",
            "name": "xIgnite",
            "icon": "https://ph-files.imgix.net/fc5e701a-cca8-47f7-83b2-424b4415786b.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "xIgnite — Realtime financial data APIs, at a fraction of the price.",
            "description": "",
            "productUrl": "https://www.producthunt.com/products/xignite/shoutouts",
            "websiteUrl": "http://www.xignite.com/",
            "imageUrl1": "",
            "imageUrl2": "",
            "imageUrl3": "",
            "videoUrl": ""
          },
          {
            "rank": "7",
            "name": "Monefy - money manager",
            "icon": "https://ph-files.imgix.net/72536b62-229e-4e9b-baae-b9899ea9e6e9.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "Monefy - money manager — Personal finance manager and expense tracker",
            "description": "",
            "productUrl": "https://www.producthunt.com/products/monefy-money-manager/shoutouts",
            "websiteUrl": "http://monefy.me/",
            "imageUrl1": "https://ph-files.imgix.net/7b499ffc-623e-4f96-b144-85a4dd6799ba.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl2": "https://ph-files.imgix.net/9f291126-16e1-43a2-92ca-013ff23d6625.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl3": "https://ph-files.imgix.net/b3aa0922-0a0a-408e-8f33-004bf60cdaba.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "videoUrl": ""
          },
          {
            "rank": "8",
            "name": "Budget Hound",
            "icon": "https://ph-files.imgix.net/d9ec7c39-d361-4dd4-b888-d5c24ca86618.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "Budget Hound — Smart and simple personal budget planner",
            "description": "An indie iOS app for not just tracking — but also planning and analyzing — your budget. If you value money and want to be wise with your spending, or if you want to learn how to do budgeting, the updated Budget Hound is here to help you.",
            "productUrl": "https://www.producthunt.com/products/budget-hound-3/shoutouts",
            "websiteUrl": "https://budgethound.app/",
            "imageUrl1": "https://ph-files.imgix.net/8acd37f9-9c13-46d5-a157-f350be11aee8.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl2": "https://ph-files.imgix.net/5e0dcbc7-c17f-43ba-88b0-ab18f7383d3c.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl3": "https://ph-files.imgix.net/52707553-f5ba-495d-bea3-b5f2e4d645ce.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "videoUrl": ""
          },
          {
            "rank": "9",
            "name": "Monarch",
            "icon": "https://ph-files.imgix.net/1bcf747f-5c40-4b92-9c8e-53d13614ed7b.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "Monarch — The modern way to manage your money",
            "description": "Managing money can be complicated. Track all of your accounts in one place, collaborate with a partner, and create a long term plan to achieve your goals. Get personalized advice along the way.",
            "productUrl": "https://www.producthunt.com/products/monarch/shoutouts",
            "websiteUrl": "https://www.monarchmoney.com/",
            "imageUrl1": "https://ph-files.imgix.net/d85f6820-d068-43f2-9e79-11e94e782daf.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl2": "https://ph-files.imgix.net/8211012e-5a37-4df1-a284-4dd48520600c.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl3": "https://ph-files.imgix.net/f8ca9477-fb9d-4569-911a-dc2ff236fad5.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "videoUrl": ""
          },
          {
            "rank": "10",
            "name": "Mint",
            "icon": "https://ph-files.imgix.net/9614f548-5c4c-4767-abf4-393e6a7d24c7.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "Mint — Budget Tracker & Planner | Free Online Money Management | Mint",
            "description": "Take charge of your finances with Mint’s online budget planner. Our free budget tracker helps you understand your spending for a brighter financial future.",
            "productUrl": "https://www.producthunt.com/products/mint-2/shoutouts",
            "websiteUrl": "https://mint.intuit.com/",
            "imageUrl1": "",
            "imageUrl2": "",
            "imageUrl3": "",
            "videoUrl": ""
          },
          {
            "rank": "11",
            "name": "Rocket Money",
            "icon": "https://ph-files.imgix.net/cb7bec49-bd4e-4696-b174-4d884a3dd625.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "Rocket Money — The money app that works for you",
            "description": "Managing money is hard, but you don’t have to do it alone. Rocket Money empowers you to save more, spend less, see everything, and take back control of your financial life. Formerly known as Truebill.",
            "productUrl": "https://www.producthunt.com/products/rocket-money/shoutouts",
            "websiteUrl": "https://www.rocketmoney.com/",
            "imageUrl1": "https://ph-files.imgix.net/726f4060-035b-4593-9263-d576f04a7c97.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl2": "https://ph-files.imgix.net/b3f57c25-9fca-46ee-9cd0-8fb03bdd728e.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl3": "https://ph-files.imgix.net/cc0ec7cb-1f15-4c7f-9595-68ad524a816b.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "videoUrl": ""
          },
          {
            "rank": "12",
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
          }
        ]
       
      },
      {
        "sub_cat_name": "Fundraising resources",
        "sub_cat_heading": "The best Fundraising resources in 2024",
        "products": [
          {
            "rank": "1",
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
            "rank": "2",
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
            "rank": "3",
            "name": "Carta",
            "icon": "https://ph-files.imgix.net/ce57e4fa-2158-406f-a22f-0d1c7a22c9ff.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "Carta — Equity. Simplified.",
            "description": "Carta is an ownership and equity management platform trusted by thousands of founders, investors, and employees.",
            "productUrl": "https://www.producthunt.com/products/carta/shoutouts",
            "websiteUrl": "https://carta.com/",
            "imageUrl1": "https://ph-files.imgix.net/db296001-a528-44e4-8d36-fa12073d0b24.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl2": "https://ph-files.imgix.net/828b4671-2631-4a13-98c9-8e2c5cca6314.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl3": "https://ph-files.imgix.net/ce23e1ad-08e5-452a-996b-f45889d6de64.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "videoUrl": ""
          },
          {
            "rank": "4",
            "name": "Crunchbase",
            "icon": "https://ph-files.imgix.net/b5b61344-60bd-4a67-85cc-3aa67d064079.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "Crunchbase — The leading platform to discover innovative companies",
            "description": "Crunchbase information includes investments and funding information, founding members and individuals in leadership positions, mergers and acquisitions, news, and industry trends.",
            "productUrl": "https://www.producthunt.com/products/crunchbase/shoutouts",
            "websiteUrl": "http://www.crunchbase.com/",
            "imageUrl1": "https://ph-files.imgix.net/71add3eb-b0b0-4011-87c6-a8b84dbc8408.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl2": "https://ph-files.imgix.net/3839b9e0-fcc7-4e48-9066-a2ad1b5bf07c.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl3": "https://ph-files.imgix.net/2b382333-e01f-442f-91ee-b2863e0fd4e4.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "videoUrl": ""
          },
          {
            "rank": "5",
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
            "rank": "6",
            "name": "Fairmint - Equity of the Future",
            "icon": "https://ph-files.imgix.net/117b0c9c-5374-42cd-b5a1-89d2f1fd6d42.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=14&h=14&fit=crop",
            "title": "Fairmint - Equity of the Future — Share your company's success with your community",
            "description": "Give your community skin in the game. Fairmint empowers you to grant equity to anyone that adds value to your company and passively receive investment from your biggest fans. Launch in a few clicks and get back to building your business.",
            "productUrl": "https://www.producthunt.com/products/fairmint-equity-of-the-future/shoutouts",
            "websiteUrl": "https://www.fairmint.com/",
            "imageUrl1": "https://ph-files.imgix.net/16a1500a-3285-42f1-8290-31263c90c798.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl2": "https://ph-files.imgix.net/978f084e-97a6-46f5-980a-9776de89aff1.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl3": "https://ph-files.imgix.net/f8778032-3c21-400d-9e5b-03e1d74f8547.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "videoUrl": ""
          },
          {
            "rank": "7",
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
            "rank": "8",
            "name": "Y Combinator",
            "icon": "https://ph-files.imgix.net/11da97b2-de36-4a3a-b394-66ad581b766c.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "Y Combinator — Make something people want.",
            "description": "Y Combinator is an American seed accelerator launched in March 2005 and was used to launch over 2,000 companies including Dropbox, Airbnb, Stripe, Reddit, Optimizely, Zenefits, Docker, DoorDash, Mixpanel, Heroku.",
            "productUrl": "https://www.producthunt.com/products/y-combinator/shoutouts",
            "websiteUrl": "http://ycombinator.com/",
            "imageUrl1": "https://ph-files.imgix.net/b5db4e52-af5f-4ea5-b344-05b80d297aa6.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl2": "https://ph-files.imgix.net/2b9854e8-b7d8-4c86-a4db-6c82fca4a715.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl3": "",
            "videoUrl": ""
          },
          {
            "rank": "9",
            "name": "Founder University",
            "icon": "https://ph-files.imgix.net/da99d696-026e-4534-8ca6-2400ed28c629.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "Founder University — 12-Week Pre-Accelerator: MVP to $25k Investment",
            "description": "Work on your idea, MVP, or existing product for 12 weeks. If you launch, get users, and demonstrate product velocity, you'll have a chance at receiving a $25k investment. Accepting 200+ builder founders for our upcoming cohort and look to invest in 30 teams.",
            "productUrl": "https://www.producthunt.com/products/founder-university/shoutouts",
            "websiteUrl": "https://www.founder.university/ph",
            "imageUrl1": "https://ph-files.imgix.net/13af426a-0da0-4b1d-81fe-c1594f5210e9.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl2": "https://ph-files.imgix.net/6ed2f9d9-d514-4e9b-b76d-15bb04dc26d6.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl3": "https://ph-files.imgix.net/ef392e7c-62bd-44b3-8e4b-a9570e6b6805.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "videoUrl": ""
          }
        ]
        
      },
      {
        "sub_cat_name": "Investing",
        "sub_cat_heading": "The best Investing in 2024",
        "products": [
          {
            "rank": "1",
            "name": "Acorns",
            "icon": "https://ph-files.imgix.net/3f3fde58-f873-4a3f-ad29-b328b63a014b.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "Acorns — Investing. Earning. Growing.",
            "description": "Join over 8 million people and help your money grow in the background of life! Sign up in under 5 minutes and automatically save and invest for you and the kids you love. “Acorns is my favorite money app, because it makes it simple & cheap to make small investments.” - Business Insider (1) SAVE AND INVEST YOUR MONEY WITH OUR FINANCIAL WELLNESS SYSTEM…",
            "productUrl": "https://www.producthunt.com/products/acorns/shoutouts",
            "websiteUrl": "http://www.acorns.com/",
            "imageUrl1": "https://ph-files.imgix.net/f183a78d-9198-4094-9e34-2e80bb6247d5.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl2": "https://ph-files.imgix.net/ccf9e4b0-01a0-4288-b2d4-15a01a3ed37b.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl3": "https://ph-files.imgix.net/82a92c2e-6d8a-4d3b-9d57-07fe8798f6c2.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "videoUrl": ""
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
            "rank": "4",
            "name": "Fairmint - Equity of the Future",
            "icon": "https://ph-files.imgix.net/117b0c9c-5374-42cd-b5a1-89d2f1fd6d42.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=14&h=14&fit=crop",
            "title": "Fairmint - Equity of the Future — Share your company's success with your community",
            "description": "Give your community skin in the game. Fairmint empowers you to grant equity to anyone that adds value to your company and passively receive investment from your biggest fans. Launch in a few clicks and get back to building your business.",
            "productUrl": "https://www.producthunt.com/products/fairmint-equity-of-the-future/shoutouts",
            "websiteUrl": "https://www.fairmint.com/",
            "imageUrl1": "https://ph-files.imgix.net/16a1500a-3285-42f1-8290-31263c90c798.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl2": "https://ph-files.imgix.net/978f084e-97a6-46f5-980a-9776de89aff1.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl3": "https://ph-files.imgix.net/f8778032-3c21-400d-9e5b-03e1d74f8547.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "videoUrl": ""
          },
          {
            "rank": "5",
            "name": "LunarCrush",
            "icon": "https://ph-files.imgix.net/8ea0dbef-dc73-4f0d-8d14-441bd252cbb8.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "LunarCrush — Trade what people can't stop talking about",
            "description": "Invest smarter with insights from millions of conversations happening across social.",
            "productUrl": "https://www.producthunt.com/products/lunarcrush/shoutouts",
            "websiteUrl": "https://lunarcrush.com/",
            "imageUrl1": "",
            "imageUrl2": "",
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
            "imageUrl1": "",
            "imageUrl2": "",
            "imageUrl3": "",
            "videoUrl": ""
          },
          {
            "rank": "7",
            "name": "Founder University",
            "icon": "https://ph-files.imgix.net/da99d696-026e-4534-8ca6-2400ed28c629.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "Founder University — 12-Week Pre-Accelerator: MVP to $25k Investment",
            "description": "Work on your idea, MVP, or existing product for 12 weeks. If you launch, get users, and demonstrate product velocity, you'll have a chance at receiving a $25k investment. Accepting 200+ builder founders for our upcoming cohort and look to invest in 30 teams.",
            "productUrl": "https://www.producthunt.com/products/founder-university/shoutouts",
            "websiteUrl": "https://www.founder.university/ph",
            "imageUrl1": "https://ph-files.imgix.net/13af426a-0da0-4b1d-81fe-c1594f5210e9.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl2": "https://ph-files.imgix.net/6ed2f9d9-d514-4e9b-b76d-15bb04dc26d6.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl3": "https://ph-files.imgix.net/ef392e7c-62bd-44b3-8e4b-a9570e6b6805.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "videoUrl": ""
          },
          {
            "rank": "8",
            "name": "Robinhood",
            "icon": "https://ph-files.imgix.net/a7f4e15f-626d-4212-9d0c-d7b1279a569c.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "Robinhood — Investing for everyone",
            "description": "Robinhood, a pioneer of commission-free investing, gives you more ways to make your money work harder.",
            "productUrl": "https://www.producthunt.com/products/robinhood/shoutouts",
            "websiteUrl": "http://robinhood.com/",
            "imageUrl1": "https://ph-files.imgix.net/a9ca2384-a809-4179-832c-92eeb73171c4.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl2": "",
            "imageUrl3": "",
            "videoUrl": ""
          }
        ]
       
      },
      {
        "sub_cat_name": "Invoicing tools",
        "sub_cat_heading": "The best Invoicing tools in 2024",
        "products": [
          {
            "rank": "1",
            "name": "Stripe",
            "icon": "https://ph-files.imgix.net/7a01a00b-d41d-4367-b44e-e1d0a672819b.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "Stripe — Financial infrastructure for the internet",
            "description": "Accept payments, send payouts, automate financial processes, and ultimately grow revenue.",
            "productUrl": "https://www.producthunt.com/products/stripe/shoutouts",
            "websiteUrl": "https://stripe.com/",
            "imageUrl1": "https://ph-files.imgix.net/4b1b7159-41d5-4351-b455-7cf020407a72.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl2": "https://ph-files.imgix.net/9946c056-ef74-4f1c-b372-0dc645e111ce.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl3": "https://ph-files.imgix.net/01345684-3785-4c22-89f4-1e1aa33001c5.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "videoUrl": ""
          },
          {
            "rank": "2",
            "name": "Usequeue",
            "icon": "https://ph-files.imgix.net/ad5ebf69-433d-4c60-878f-2c87b0a93fba.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "Usequeue — All-in-one platform to launch your productized services",
            "description": "Launch your productized service business in less than 5mins with everything setup and ready to go for you. No more gluing together 8 softwares and confusing your clients. Add checkout, client portal, and collaboration tools to your website for a seamless experience for your clients and giving you the only platform you'll need to work with them. All 100% white-labeled on your domain.",
            "productUrl": "https://www.producthunt.com/products/queue-4/shoutouts",
            "websiteUrl": "https://usequeue.com/",
            "imageUrl1": "https://ph-files.imgix.net/50df5ccc-87ca-41f9-9a5d-0fe8c2c16514.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl2": "https://ph-files.imgix.net/5f2769cc-bb67-443d-a2cb-c6d7b8bda634.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl3": "https://ph-files.imgix.net/847e9905-e5d0-4a5f-8cf8-7c0bca5197f2.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "videoUrl": ""
          }
        ]
        
      },
      {
        "sub_cat_name": "Money transfer",
        "sub_cat_heading": "The best Money transfer in 2024",
        "products": [
          {
            "rank": "1",
            "name": "Stripe",
            "icon": "https://ph-files.imgix.net/7a01a00b-d41d-4367-b44e-e1d0a672819b.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "Stripe — Financial infrastructure for the internet",
            "description": "Accept payments, send payouts, automate financial processes, and ultimately grow revenue.",
            "productUrl": "https://www.producthunt.com/products/stripe/shoutouts",
            "websiteUrl": "https://stripe.com/",
            "imageUrl1": "https://ph-files.imgix.net/4b1b7159-41d5-4351-b455-7cf020407a72.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl2": "https://ph-files.imgix.net/9946c056-ef74-4f1c-b372-0dc645e111ce.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl3": "https://ph-files.imgix.net/01345684-3785-4c22-89f4-1e1aa33001c5.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "videoUrl": ""
          },
          {
            "rank": "2",
            "name": "Razorpay",
            "icon": "https://ph-files.imgix.net/f24237a4-b7c8-44ac-8b92-e91a3d28628b.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "Razorpay — Power your finance, grow your business",
            "description": "Accept payments from customers. Automate payouts to vendors & employees. Never run out of working capital.",
            "productUrl": "https://www.producthunt.com/products/razorpay/shoutouts",
            "websiteUrl": "https://razorpay.com/",
            "imageUrl1": "https://ph-files.imgix.net/1fb1bb24-3491-4df4-be32-304857cdf967.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl2": "https://ph-files.imgix.net/06c39bba-a267-48c7-b50f-c6e87361d55f.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl3": "https://ph-files.imgix.net/f5fe8429-f2b7-4aff-9422-37f9f8a1dd65.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
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
            "imageUrl1": "https://ph-files.imgix.net/50db6a6a-dfb1-4c28-8e58-fb193bba2b21.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl2": "https://ph-files.imgix.net/fb1b62ab-e75a-4f50-90fa-8143e6b7e592.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl3": "https://ph-files.imgix.net/460fe1f4-7217-4078-a994-75b98d9df254.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "videoUrl": ""
          },
          {
            "rank": "4",
            "name": "PayPal",
            "icon": "https://ph-files.imgix.net/c5f08f1d-6637-46e5-874f-6c411827048e.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "PayPal — Send Payments, Pay Online, Merchant Account",
            "description": "New Money gives you more control over your funds so you can spend, send, and receive the way you want. See what’s possible. For help, tweet us at @AskPayPal.",
            "productUrl": "https://www.producthunt.com/products/paypal/shoutouts",
            "websiteUrl": "https://www.paypal.com/",
            "imageUrl1": "https://ph-files.imgix.net/fdceb42c-f78f-4c7a-bec1-03a721ff22c6.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl2": "https://ph-files.imgix.net/1688557a-73bb-4484-b3f4-4359f8cdd92a.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl3": "https://ph-files.imgix.net/b40966bf-7ffe-44fe-bfb4-cef0772323ec.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "videoUrl": ""
          },
          {
            "rank": "5",
            "name": "Visa",
            "icon": "https://ph-files.imgix.net/a3104e91-362d-4548-8b92-f3079affbd7d.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "Visa — It's everywhere you want to be",
            "description": "Visa is a global payments technology company that connects consumers, businesses, financial institutions, and governments to fast, secure and reliable electronic payments.",
            "productUrl": "https://www.producthunt.com/products/visa/shoutouts",
            "websiteUrl": "https://usa.visa.com/",
            "imageUrl1": "https://ph-files.imgix.net/3924d7aa-e040-4145-a622-7c3de4656713.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl2": "https://ph-files.imgix.net/c427c12c-051b-4cc4-87a7-b997512cf457.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl3": "https://ph-files.imgix.net/c87ad229-0def-4ce1-98ce-f52e0f3d221c.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "videoUrl": ""
          },
          {
            "rank": "6",
            "name": "Splitwise",
            "icon": "https://ph-files.imgix.net/ba8cff2f-bc48-49c5-9477-e7aefa91a375.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "Splitwise — Split expenses with friends",
            "description": "Splitwise is a free tool for friends and roommates to track bills and other shared expenses, so that everyone gets paid back. On the web, iPhone & Android!",
            "productUrl": "https://www.producthunt.com/products/splitwise/shoutouts",
            "websiteUrl": "https://www.splitwise.com/",
            "imageUrl1": "https://ph-files.imgix.net/5a9c22d5-e11d-45df-85a6-52c0ef1f5a22.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl2": "https://ph-files.imgix.net/95569e24-f0dd-4df0-946a-dd5e052d090f.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl3": "https://ph-files.imgix.net/0820ad3d-4163-44fd-b62b-fee8439013ca.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "videoUrl": ""
          },
          {
            "rank": "7",
            "name": "Dots",
            "icon": "https://ph-files.imgix.net/7fad5ead-5a29-4653-b59c-cd887a4ad6c5.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "Dots — Cash for the internet",
            "description": "Dots is the simplest way to send and accept payments online, especially if you’re a marketplace or hiring 1099 workers. Our API accepts payments from your favorite credit card processor, PayPal, and more. It also enables payouts using Venmo, ACH, Zelle, etc.",
            "productUrl": "https://www.producthunt.com/products/dots-3/shoutouts",
            "websiteUrl": "https://www.senddots.com/",
            "imageUrl1": "https://ph-files.imgix.net/3039467a-0241-4955-b759-722225279588.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl2": "https://ph-files.imgix.net/1828ea06-e04f-4b1c-94d8-1459cf1d2d13.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl3": "https://ph-files.imgix.net/0589cfa3-cfca-4ce3-a7bf-d927005ee06f.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "videoUrl": ""
          }
        ]
       
      },
      {
        "sub_cat_name": "Neobanks",
        "sub_cat_heading": "The best Neobanks in 2024",
        "products": [
          {
            "rank": "1",
            "name": "Mercury",
            "icon": "https://ph-files.imgix.net/3fd6f338-a734-467f-a7a1-ec9496466480.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "Mercury — Banking for startups",
            "description": "Confidently run all your financial operations with software built from a powerful banking core. Scale with business bank accounts & debit and credit cards.",
            "productUrl": "https://www.producthunt.com/products/mercury/shoutouts",
            "websiteUrl": "https://www.mercury.com/",
            "imageUrl1": "https://ph-files.imgix.net/e3bad900-ad03-4e74-a967-62ee8cc30e71.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl2": "https://ph-files.imgix.net/44dbd106-728e-42a6-b388-8f865f8639d7.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl3": "https://ph-files.imgix.net/09afc871-3ca3-4b43-adda-9c497e91a359.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "videoUrl": ""
          },
          {
            "rank": "2",
            "name": "Brex",
            "icon": "https://ph-files.imgix.net/0385458c-bf0b-452e-bb49-17d8cca36c9d.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "Brex — The #1 spend platform for strategic finance teams.",
            "description": "Brex is all-in-one finance for growing businesses. We help companies spend, save, and earn smarter—and take every dollar further—by doing more than a bank, bookkeeping, or reward program could ever do alone. After completing the Y Combinator accelerator program in 2017, Brex has grown to over 600 employees and raised over US $940 million in venture capital.",
            "productUrl": "https://www.producthunt.com/products/brex/shoutouts",
            "websiteUrl": "https://brex.com/",
            "imageUrl1": "",
            "imageUrl2": "",
            "imageUrl3": "",
            "videoUrl": ""
          },
          {
            "rank": "3",
            "name": "Acorns",
            "icon": "https://ph-files.imgix.net/3f3fde58-f873-4a3f-ad29-b328b63a014b.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "Acorns — Investing. Earning. Growing.",
            "description": "Join over 8 million people and help your money grow in the background of life! Sign up in under 5 minutes and automatically save and invest for you and the kids you love. “Acorns is my favorite money app, because it makes it simple & cheap to make small investments.” - Business Insider (1) SAVE AND INVEST YOUR MONEY WITH OUR FINANCIAL WELLNESS SYSTEM…",
            "productUrl": "https://www.producthunt.com/products/acorns/shoutouts",
            "websiteUrl": "http://www.acorns.com/",
            "imageUrl1": "https://ph-files.imgix.net/f183a78d-9198-4094-9e34-2e80bb6247d5.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl2": "https://ph-files.imgix.net/ccf9e4b0-01a0-4288-b2d4-15a01a3ed37b.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl3": "https://ph-files.imgix.net/82a92c2e-6d8a-4d3b-9d57-07fe8798f6c2.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "videoUrl": ""
          },
          {
            "rank": "4",
            "name": "Arc",
            "icon": "https://ph-files.imgix.net/bb119d1c-5312-47ce-bb40-df80abf79e26.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "Arc — Software-driven banking & growth capital for startups",
            "description": "Arc empowers startups with a better banking experience. With Arc, you can open FDIC-insurance eligible accounts in minutes, manage everyday banking needs without fees, diversify & safeguard cash, maximize yield, and instantly access growth capital—all in one platform and partnering with trusted banks. Based in SF & NYC, Arc has raised $180M+ of equity and debt funding from Left Lane, NFX, BCV, YC, among others. [Arc is a technology company, not a bank: arc.tech/general-disclosures]",
            "productUrl": "https://www.producthunt.com/products/arc-6/shoutouts",
            "websiteUrl": "https://www.arc.tech/",
            "imageUrl1": "https://ph-files.imgix.net/7d3dcd45-3c46-4a64-8416-470c7dcadcf7.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl2": "https://ph-files.imgix.net/32eadd82-ee7b-4fd4-933a-537bb30e9f96.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl3": "https://ph-files.imgix.net/40214df0-e9c8-4b47-9569-0f1e6ed0261c.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "videoUrl": ""
          },
          {
            "rank": "5",
            "name": "Robinhood",
            "icon": "https://ph-files.imgix.net/a7f4e15f-626d-4212-9d0c-d7b1279a569c.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "Robinhood — Investing for everyone",
            "description": "Robinhood, a pioneer of commission-free investing, gives you more ways to make your money work harder.",
            "productUrl": "https://www.producthunt.com/products/robinhood/shoutouts",
            "websiteUrl": "http://robinhood.com/",
            "imageUrl1": "https://ph-files.imgix.net/a9ca2384-a809-4179-832c-92eeb73171c4.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl2": "",
            "imageUrl3": "",
            "videoUrl": ""
          }
        ]
       
      },
      {
        "sub_cat_name": "Online banking",
        "sub_cat_heading": "The best Online banking in 2024",
        "products": [
          {
            "rank": "1",
            "name": "Mercury",
            "icon": "https://ph-files.imgix.net/3fd6f338-a734-467f-a7a1-ec9496466480.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "Mercury — Banking for startups",
            "description": "Confidently run all your financial operations with software built from a powerful banking core. Scale with business bank accounts & debit and credit cards.",
            "productUrl": "https://www.producthunt.com/products/mercury/shoutouts",
            "websiteUrl": "https://www.mercury.com/",
            "imageUrl1": "https://ph-files.imgix.net/e3bad900-ad03-4e74-a967-62ee8cc30e71.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl2": "https://ph-files.imgix.net/44dbd106-728e-42a6-b388-8f865f8639d7.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl3": "https://ph-files.imgix.net/09afc871-3ca3-4b43-adda-9c497e91a359.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "videoUrl": ""
          },
          {
            "rank": "2",
            "name": "Brex",
            "icon": "https://ph-files.imgix.net/0385458c-bf0b-452e-bb49-17d8cca36c9d.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "Brex — The #1 spend platform for strategic finance teams.",
            "description": "Brex is all-in-one finance for growing businesses. We help companies spend, save, and earn smarter—and take every dollar further—by doing more than a bank, bookkeeping, or reward program could ever do alone. After completing the Y Combinator accelerator program in 2017, Brex has grown to over 600 employees and raised over US $940 million in venture capital.",
            "productUrl": "https://www.producthunt.com/products/brex/shoutouts",
            "websiteUrl": "https://brex.com/",
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
            "imageUrl1": "https://ph-files.imgix.net/50db6a6a-dfb1-4c28-8e58-fb193bba2b21.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl2": "https://ph-files.imgix.net/fb1b62ab-e75a-4f50-90fa-8143e6b7e592.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl3": "https://ph-files.imgix.net/460fe1f4-7217-4078-a994-75b98d9df254.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "videoUrl": ""
          },
          {
            "rank": "4",
            "name": "PayPal",
            "icon": "https://ph-files.imgix.net/c5f08f1d-6637-46e5-874f-6c411827048e.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "PayPal — Send Payments, Pay Online, Merchant Account",
            "description": "New Money gives you more control over your funds so you can spend, send, and receive the way you want. See what’s possible. For help, tweet us at @AskPayPal.",
            "productUrl": "https://www.producthunt.com/products/paypal/shoutouts",
            "websiteUrl": "https://www.paypal.com/",
            "imageUrl1": "https://ph-files.imgix.net/fdceb42c-f78f-4c7a-bec1-03a721ff22c6.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl2": "https://ph-files.imgix.net/1688557a-73bb-4484-b3f4-4359f8cdd92a.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl3": "https://ph-files.imgix.net/b40966bf-7ffe-44fe-bfb4-cef0772323ec.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "videoUrl": ""
          },
          {
            "rank": "5",
            "name": "Arc",
            "icon": "https://ph-files.imgix.net/bb119d1c-5312-47ce-bb40-df80abf79e26.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "Arc — Software-driven banking & growth capital for startups",
            "description": "Arc empowers startups with a better banking experience. With Arc, you can open FDIC-insurance eligible accounts in minutes, manage everyday banking needs without fees, diversify & safeguard cash, maximize yield, and instantly access growth capital—all in one platform and partnering with trusted banks. Based in SF & NYC, Arc has raised $180M+ of equity and debt funding from Left Lane, NFX, BCV, YC, among others. [Arc is a technology company, not a bank: arc.tech/general-disclosures]",
            "productUrl": "https://www.producthunt.com/products/arc-6/shoutouts",
            "websiteUrl": "https://www.arc.tech/",
            "imageUrl1": "https://ph-files.imgix.net/7d3dcd45-3c46-4a64-8416-470c7dcadcf7.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl2": "https://ph-files.imgix.net/32eadd82-ee7b-4fd4-933a-537bb30e9f96.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl3": "https://ph-files.imgix.net/40214df0-e9c8-4b47-9569-0f1e6ed0261c.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "videoUrl": ""
          },
          {
            "rank": "6",
            "name": "Xero",
            "icon": "https://ph-files.imgix.net/c0dec3a8-2030-4e98-a73a-9b0c288b4751.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "Xero — Accounting software to do your to-do",
            "description": "Xero online accounting software for your business connects you to your bank, accountant, bookkeeper, and other business apps. Start a free trial today.",
            "productUrl": "https://www.producthunt.com/products/xero-2/shoutouts",
            "websiteUrl": "https://www.xero.com/us",
            "imageUrl1": "https://ph-files.imgix.net/a7e719e9-7d1e-494a-a86a-8d06f31ad73b.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl2": "https://ph-files.imgix.net/3adaa06a-f8c1-4adc-8322-1e3ca029b54a.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl3": "https://ph-files.imgix.net/5a5b5820-bf06-456e-86f4-c4ede209000c.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "videoUrl": ""
          }
        ]
       
      },
      {
        "sub_cat_name": "Remote workforce tools",
        "sub_cat_heading": "The best Remote workforce tools in 2024",
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
            "name": "vscode.dev",
            "icon": "https://ph-files.imgix.net/0643ccd3-579d-4a56-bdbb-17e68793ab86.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "vscode.dev — Bringing VS Code to the browser",
            "description": "Now when you go to https://vscode.dev, you'll be presented with a lightweight version of VS Code running fully in the browser. Open a folder on your local machine and start coding. No install required.",
            "productUrl": "https://www.producthunt.com/products/vscode-dev/shoutouts",
            "websiteUrl": "https://vscode.dev/",
            "imageUrl1": "https://ph-files.imgix.net/4cffaa77-c923-4ea5-af70-b7f275c5b36f.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl2": "https://ph-files.imgix.net/435023d3-9580-4741-b974-a5fcccf98f1b.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl3": "https://ph-files.imgix.net/715793cc-f92d-4152-82fb-0fff058e23c3.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "videoUrl": ""
          },
          {
            "rank": "3",
            "name": "Liveblocks",
            "icon": "https://ph-files.imgix.net/f0202705-b7c6-4164-9027-bf12f424e441.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "Liveblocks — Complete toolkit to embed collaboration features fast",
            "description": "A real-time collaboration infrastructure for developers. A fully hosted solution and complete toolkit to modularly embed collaborative experiences into your product in just days, not months.",
            "productUrl": "https://www.producthunt.com/products/liveblocks/shoutouts",
            "websiteUrl": "https://liveblocks.io/",
            "imageUrl1": "https://ph-files.imgix.net/29bef8fa-aa66-45f1-b775-58e34c993c36.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl2": "https://ph-files.imgix.net/c737db98-84f6-4a08-bf88-0b37054cf036.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl3": "https://ph-files.imgix.net/fe45de01-5f8b-44d2-895a-a6a3c276fef7.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "videoUrl": ""
          },
          {
            "rank": "4",
            "name": "Google Docs",
            "icon": "https://ph-files.imgix.net/c4872c4d-5df6-456a-baa8-e1d3435f0dae.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "Google Docs — Create and share your work online",
            "description": "",
            "productUrl": "https://www.producthunt.com/products/google-docs/shoutouts",
            "websiteUrl": "https://drive.google.com/",
            "imageUrl1": "",
            "imageUrl2": "",
            "imageUrl3": "",
            "videoUrl": ""
          },
          {
            "rank": "5",
            "name": "Around.co",
            "icon": "https://ph-files.imgix.net/79438cd4-2556-44f8-8bf3-64dd3f72dc57.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "Around.co — Video calls loved by extraordinary Teams.",
            "description": "Meetings don't have to crush your soul. Discover radically unique video calls designed to help hybrid-remote teams create, collaborate and celebrate together.",
            "productUrl": "https://www.producthunt.com/products/around-co/shoutouts",
            "websiteUrl": "https://around.co/",
            "imageUrl1": "https://ph-files.imgix.net/ff440a8d-2430-493a-9f8d-d21b6ae04e97.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl2": "https://ph-files.imgix.net/1353d4e2-3b7f-4be9-9360-ed2449a40596.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl3": "",
            "videoUrl": ""
          },
          {
            "rank": "6",
            "name": "Basecamp",
            "icon": "https://ph-files.imgix.net/92f47709-ee31-4a20-8815-2ea52e4a13c0.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "Basecamp — Everything you need to get work done in one place",
            "description": "Basecamp, formerly named 37signals, is a privately held American web application company based in Chicago, Illinois.",
            "productUrl": "https://www.producthunt.com/products/basecamp/shoutouts",
            "websiteUrl": "https://basecamp.com/",
            "imageUrl1": "https://ph-files.imgix.net/fe96d30a-5da5-45b8-bb33-fcf1fad0de96.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl2": "https://ph-files.imgix.net/50031729-629c-47dd-b9d5-c072b56b5218.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl3": "https://ph-files.imgix.net/9495b474-479d-4486-8fc3-653351e76838.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "videoUrl": ""
          },
          {
            "rank": "7",
            "name": "Tuple",
            "icon": "https://ph-files.imgix.net/386fa292-2299-4d32-930c-cd6994a1f679.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "Tuple — The best pair programming tool for macOS and Windows",
            "description": "Tuple is an app for remote pair programming, optimized for everything that developers care about: Seamless collaboration with full-time mouse and keyboard support for all parties, crystal-clear webcam and screen-sharing, CL integration and pluginability.",
            "productUrl": "https://www.producthunt.com/products/tuple/shoutouts",
            "websiteUrl": "https://tuple.app/",
            "imageUrl1": "https://ph-files.imgix.net/ab409093-6dbb-4a49-b824-963de53749cc.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl2": "https://ph-files.imgix.net/9dc53acd-fcf9-40be-97f7-454bfd73ef0b.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl3": "https://ph-files.imgix.net/8b2abf48-d686-4183-a9a1-168bfbd8cd68.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "videoUrl": ""
          },
          {
            "rank": "8",
            "name": "Google Calendar",
            "icon": "https://ph-files.imgix.net/a5f879de-2dab-44aa-a713-454559fedd35.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "Google Calendar — The shareable online calendar by Google",
            "description": "Spend less time planning and more time doing with a shareable calendar that works across Google Workspace.",
            "productUrl": "https://www.producthunt.com/products/google-calendar/shoutouts",
            "websiteUrl": "https://calendar.google.com/",
            "imageUrl1": "https://ph-files.imgix.net/98d85c97-2d9f-426f-93ef-166d774c7b85.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl2": "https://ph-files.imgix.net/bc9e8de1-832c-4344-ac1b-64a2666e83ce.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl3": "",
            "videoUrl": ""
          },
          {
            "rank": "9",
            "name": "Persona",
            "icon": "https://ph-files.imgix.net/362dde8b-376b-41ba-b569-cb7970627b26.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=14&h=14&fit=crop",
            "title": "Persona — Identity verification for any use case, starting at $0",
            "description": "Persona offers a suite of fully-automated identity verification components with worldwide coverage that can be configured and branded to create custom-tailored flows for any use case. Sign up for the Starter plan and start for free in <10 minutes.",
            "productUrl": "https://www.producthunt.com/products/persona-4/shoutouts",
            "websiteUrl": "https://withpersona.com/",
            "imageUrl1": "https://ph-files.imgix.net/1d403d77-4ccb-4ce7-98fb-5ce3ccbb4917.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl2": "https://ph-files.imgix.net/66da78c9-f9ee-4e79-8567-34210320aece.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl3": "",
            "videoUrl": ""
          },
          {
            "rank": "10",
            "name": "Reflect",
            "icon": "https://ph-files.imgix.net/ce7ab8a8-6245-4bea-8426-bb09f7a1072e.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "Reflect — Fast networked note-taking",
            "description": "Reflect is a note-taking tool designed to mirror the way your brain works. We're simple, speedy, secure, and, dare we say it, quite pleasing on the eye.",
            "productUrl": "https://www.producthunt.com/products/reflect-notes/shoutouts",
            "websiteUrl": "https://reflect.app/",
            "imageUrl1": "https://ph-files.imgix.net/93579e72-f369-45f5-9bf0-3a42d0ba775d.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl2": "https://ph-files.imgix.net/4c7fedf5-2dae-4532-a445-786ef91c5cda.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl3": "https://ph-files.imgix.net/dbfe0ec3-c216-4aba-a510-54aca2c61b5b.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "videoUrl": ""
          },
          {
            "rank": "11",
            "name": "Auth0",
            "icon": "https://ph-files.imgix.net/245e6401-8144-4663-b12a-a11446a39958.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "Auth0 — Secure access for everyone. But not just anyone.",
            "description": "Whether you’re a developer looking to innovate or a security professional looking to mitigate, we make identity work for everyone. Auth0 is the solution you need for web, mobile, IoT, and internal applications. Loved by developers and trusted by enterprises.",
            "productUrl": "https://www.producthunt.com/products/auth0/shoutouts",
            "websiteUrl": "https://auth0.com/",
            "imageUrl1": "https://ph-files.imgix.net/acda176d-71a4-4af9-b38b-bf580764e338.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl2": "https://ph-files.imgix.net/6485bf0a-8445-48c6-b0ad-a7626e6580c4.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl3": "https://ph-files.imgix.net/377348eb-485d-4eb8-b30a-74f1cf2b41d4.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "videoUrl": ""
          },
          {
            "rank": "12",
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
            "rank": "13",
            "name": "Remote Rocketship",
            "icon": "https://ph-files.imgix.net/690f97bd-5978-4e0f-b804-66d753e0ea0a.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "Remote Rocketship — The remote job board with 18k+ tech jobs",
            "description": "Search 18,000+ open roles at 6,000+ remote companies. Filter by location, tech stack, salary, company size, full-time/part-time and more!",
            "productUrl": "https://www.producthunt.com/products/remote-rocketship/shoutouts",
            "websiteUrl": "http://www.remoterocketship.com/",
            "imageUrl1": "https://ph-files.imgix.net/e59bc327-205c-40a0-bc64-75c9e81bde14.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl2": "https://ph-files.imgix.net/0888ac2d-0da1-41d7-a508-3f5b358d072b.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl3": "https://ph-files.imgix.net/cfcf3876-7136-4abb-bbbc-4dd465ba4d38.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "videoUrl": ""
          },
          {
            "rank": "14",
            "name": "Excalidraw",
            "icon": "https://ph-files.imgix.net/eb2aff23-26c7-4601-b69d-1d99a9f4ed05.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "Excalidraw — Virtual whiteboard for sketching hand-drawn like diagrams",
            "description": "Sketch hand-drawn like diagrams on your own or live collaborate during brainstorming sessions or architecture interviews in a safe way thanks to end-to-end encryption.",
            "productUrl": "https://www.producthunt.com/products/excalidraw/shoutouts",
            "websiteUrl": "https://excalidraw.com/",
            "imageUrl1": "https://ph-files.imgix.net/2195803d-60d5-4f43-b81e-41cde48a3dd3.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl2": "https://ph-files.imgix.net/9d8cc888-5104-4b86-94b5-8b7e322e8a36.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl3": "https://ph-files.imgix.net/cd025f7f-2e3c-4c6d-8275-7cafa8162986.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "videoUrl": ""
          },
          {
            "rank": "15",
            "name": "Upwork",
            "icon": "https://ph-files.imgix.net/c9b7be6c-f08e-4fb8-8436-fe849d8c062f.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "Upwork — How work should work",
            "description": "The world’s work marketplace, connecting millions of businesses with independent talent.",
            "productUrl": "https://www.producthunt.com/products/upwork/shoutouts",
            "websiteUrl": "https://www.upwork.com/",
            "imageUrl1": "https://ph-files.imgix.net/61cda391-0141-4cc2-8740-a4737d6b4b80.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl2": "https://ph-files.imgix.net/949773fa-6a72-4520-8401-1463ea54445f.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl3": "",
            "videoUrl": ""
          },
          {
            "rank": "16",
            "name": "Alfy",
            "icon": "https://ph-files.imgix.net/918d10ab-6b2c-4561-bdcc-8835033549a3.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "Alfy — Random Coffee App for Slack",
            "description": "The simplest and most-affordable random coffee app for Slack. Alfy is a must-have for every remote/hybrid company. Made with love by BuddiesHR.com 💜",
            "productUrl": "https://www.producthunt.com/products/alfy/shoutouts",
            "websiteUrl": "https://buddieshr.com/alfy",
            "imageUrl1": "https://ph-files.imgix.net/83114339-6cfd-4acf-8c16-ae6a65a0148f.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl2": "https://ph-files.imgix.net/9969f4ea-62db-4041-8e33-7243e4ce8a2a.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl3": "https://ph-files.imgix.net/41046ace-c572-420e-b02c-eb494d8f8af7.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "videoUrl": ""
          },
          {
            "rank": "17",
            "name": "Focusmate",
            "icon": "https://ph-files.imgix.net/22eb6aa5-47da-43be-abc2-e1eb9c2e1c8b.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "Focusmate — Virtual coworking for getting anything done.",
            "description": "Focusmate changes the way you work by partnering you with an accountability partner for a live, virtual coworking session that will keep you on task.",
            "productUrl": "https://www.producthunt.com/products/focusmate/shoutouts",
            "websiteUrl": "https://www.focusmate.com/",
            "imageUrl1": "",
            "imageUrl2": "",
            "imageUrl3": "",
            "videoUrl": ""
          }
        ]
        
      },
      {
        "sub_cat_name": "Saving apps",
        "sub_cat_heading": "The best Saving apps in 2024",
        "products": [
          {
            "rank": "1",
            "name": "Acorns",
            "icon": "https://ph-files.imgix.net/3f3fde58-f873-4a3f-ad29-b328b63a014b.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "Acorns — Investing. Earning. Growing.",
            "description": "Join over 8 million people and help your money grow in the background of life! Sign up in under 5 minutes and automatically save and invest for you and the kids you love. “Acorns is my favorite money app, because it makes it simple & cheap to make small investments.” - Business Insider (1) SAVE AND INVEST YOUR MONEY WITH OUR FINANCIAL WELLNESS SYSTEM…",
            "productUrl": "https://www.producthunt.com/products/acorns/shoutouts",
            "websiteUrl": "http://www.acorns.com/",
            "imageUrl1": "https://ph-files.imgix.net/f183a78d-9198-4094-9e34-2e80bb6247d5.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl2": "https://ph-files.imgix.net/ccf9e4b0-01a0-4288-b2d4-15a01a3ed37b.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl3": "https://ph-files.imgix.net/82a92c2e-6d8a-4d3b-9d57-07fe8798f6c2.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "videoUrl": ""
          },
          {
            "rank": "2",
            "name": "Monarch",
            "icon": "https://ph-files.imgix.net/1bcf747f-5c40-4b92-9c8e-53d13614ed7b.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "Monarch — The modern way to manage your money",
            "description": "Managing money can be complicated. Track all of your accounts in one place, collaborate with a partner, and create a long term plan to achieve your goals. Get personalized advice along the way.",
            "productUrl": "https://www.producthunt.com/products/monarch/shoutouts",
            "websiteUrl": "https://www.monarchmoney.com/",
            "imageUrl1": "https://ph-files.imgix.net/d85f6820-d068-43f2-9e79-11e94e782daf.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl2": "https://ph-files.imgix.net/8211012e-5a37-4df1-a284-4dd48520600c.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl3": "https://ph-files.imgix.net/f8ca9477-fb9d-4569-911a-dc2ff236fad5.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "videoUrl": ""
          },
          {
            "rank": "3",
            "name": "Mint",
            "icon": "https://ph-files.imgix.net/9614f548-5c4c-4767-abf4-393e6a7d24c7.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "Mint — Budget Tracker & Planner | Free Online Money Management | Mint",
            "description": "Take charge of your finances with Mint’s online budget planner. Our free budget tracker helps you understand your spending for a brighter financial future.",
            "productUrl": "https://www.producthunt.com/products/mint-2/shoutouts",
            "websiteUrl": "https://mint.intuit.com/",
            "imageUrl1": "",
            "imageUrl2": "",
            "imageUrl3": "",
            "videoUrl": ""
          },
          {
            "rank": "4",
            "name": "Rocket Money",
            "icon": "https://ph-files.imgix.net/cb7bec49-bd4e-4696-b174-4d884a3dd625.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "Rocket Money — The money app that works for you",
            "description": "Managing money is hard, but you don’t have to do it alone. Rocket Money empowers you to save more, spend less, see everything, and take back control of your financial life. Formerly known as Truebill.",
            "productUrl": "https://www.producthunt.com/products/rocket-money/shoutouts",
            "websiteUrl": "https://www.rocketmoney.com/",
            "imageUrl1": "https://ph-files.imgix.net/726f4060-035b-4593-9263-d576f04a7c97.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl2": "https://ph-files.imgix.net/b3f57c25-9fca-46ee-9cd0-8fb03bdd728e.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl3": "https://ph-files.imgix.net/cc0ec7cb-1f15-4c7f-9595-68ad524a816b.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "videoUrl": ""
          }
        ]
       
      },
      {
        "sub_cat_name": "Startup financial planning",
        "sub_cat_heading": "The best Startup financial planning in 2024",
        "products": [
          {
            "rank": "1",
            "name": "Mercury",
            "icon": "https://ph-files.imgix.net/3fd6f338-a734-467f-a7a1-ec9496466480.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "Mercury — Banking for startups",
            "description": "Confidently run all your financial operations with software built from a powerful banking core. Scale with business bank accounts & debit and credit cards.",
            "productUrl": "https://www.producthunt.com/products/mercury/shoutouts",
            "websiteUrl": "https://www.mercury.com/",
            "imageUrl1": "https://ph-files.imgix.net/e3bad900-ad03-4e74-a967-62ee8cc30e71.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl2": "https://ph-files.imgix.net/44dbd106-728e-42a6-b388-8f865f8639d7.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl3": "https://ph-files.imgix.net/09afc871-3ca3-4b43-adda-9c497e91a359.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "videoUrl": ""
          },
          {
            "rank": "2",
            "name": "Brex",
            "icon": "https://ph-files.imgix.net/0385458c-bf0b-452e-bb49-17d8cca36c9d.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "Brex — The #1 spend platform for strategic finance teams.",
            "description": "Brex is all-in-one finance for growing businesses. We help companies spend, save, and earn smarter—and take every dollar further—by doing more than a bank, bookkeeping, or reward program could ever do alone. After completing the Y Combinator accelerator program in 2017, Brex has grown to over 600 employees and raised over US $940 million in venture capital.",
            "productUrl": "https://www.producthunt.com/products/brex/shoutouts",
            "websiteUrl": "https://brex.com/",
            "imageUrl1": "",
            "imageUrl2": "",
            "imageUrl3": "",
            "videoUrl": ""
          },
          {
            "rank": "3",
            "name": "Carta",
            "icon": "https://ph-files.imgix.net/ce57e4fa-2158-406f-a22f-0d1c7a22c9ff.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "Carta — Equity. Simplified.",
            "description": "Carta is an ownership and equity management platform trusted by thousands of founders, investors, and employees.",
            "productUrl": "https://www.producthunt.com/products/carta/shoutouts",
            "websiteUrl": "https://carta.com/",
            "imageUrl1": "https://ph-files.imgix.net/db296001-a528-44e4-8d36-fa12073d0b24.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl2": "https://ph-files.imgix.net/828b4671-2631-4a13-98c9-8e2c5cca6314.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl3": "https://ph-files.imgix.net/ce23e1ad-08e5-452a-996b-f45889d6de64.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "videoUrl": ""
          },
          {
            "rank": "4",
            "name": "Fondo",
            "icon": "https://ph-files.imgix.net/f146eb83-55b8-4ecd-be04-f25646db0e70.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "Fondo — Bookkeeping, tax, and tax credits for startups",
            "description": "Fondo is the easy way to get your startup's books closed, taxes filed, & cash back from the IRS ($21k on average).",
            "productUrl": "https://www.producthunt.com/products/fondo/shoutouts",
            "websiteUrl": "https://tryfondo.com/credits",
            "imageUrl1": "https://ph-files.imgix.net/02819f1d-2b11-4af2-a573-7f441e2356db.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl2": "https://ph-files.imgix.net/098dec9f-92a8-4fe7-a412-a05905c1e55a.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl3": "https://ph-files.imgix.net/2f9040aa-66ba-47db-a6a5-5d756eae64c9.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "videoUrl": ""
          }
        ]
        
      },
      {
        "sub_cat_name": "Stock trading platforms",
        "sub_cat_heading": "The best Stock trading platforms in 2024",
        "products": [
          {
            "rank": "1",
            "name": "Polygon.io",
            "icon": "https://ph-files.imgix.net/94b63a94-9e28-4daf-ad64-3bfb4a41b412.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "Polygon.io — API for Real-Time stock data",
            "description": "",
            "productUrl": "https://www.producthunt.com/products/polygon-io/shoutouts",
            "websiteUrl": "https://polygon.io/",
            "imageUrl1": "https://ph-files.imgix.net/2e0c43e2-3260-4b3a-b42d-3dc2a858507c.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl2": "https://ph-files.imgix.net/ef7c49bf-04da-4587-9bae-b83921b78b19.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl3": "https://ph-files.imgix.net/1e72cd8b-bb85-43ef-a9df-a2f5e32bcc9c.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "videoUrl": ""
          },
          {
            "rank": "2",
            "name": "Robinhood",
            "icon": "https://ph-files.imgix.net/a7f4e15f-626d-4212-9d0c-d7b1279a569c.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "Robinhood — Investing for everyone",
            "description": "Robinhood, a pioneer of commission-free investing, gives you more ways to make your money work harder.",
            "productUrl": "https://www.producthunt.com/products/robinhood/shoutouts",
            "websiteUrl": "http://robinhood.com/",
            "imageUrl1": "https://ph-files.imgix.net/a9ca2384-a809-4179-832c-92eeb73171c4.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl2": "",
            "imageUrl3": "",
            "videoUrl": ""
          }
        ]
       
      },
      {
        "sub_cat_name": "Tax preparation",
        "sub_cat_heading": "The best Tax preparation in 2024",
        "products": [
          {
            "rank": "1",
            "name": "Fondo",
            "icon": "https://ph-files.imgix.net/f146eb83-55b8-4ecd-be04-f25646db0e70.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
            "title": "Fondo — Bookkeeping, tax, and tax credits for startups",
            "description": "Fondo is the easy way to get your startup's books closed, taxes filed, & cash back from the IRS ($21k on average).",
            "productUrl": "https://www.producthunt.com/products/fondo/shoutouts",
            "websiteUrl": "https://tryfondo.com/credits",
            "imageUrl1": "https://ph-files.imgix.net/02819f1d-2b11-4af2-a573-7f441e2356db.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl2": "https://ph-files.imgix.net/098dec9f-92a8-4fe7-a412-a05905c1e55a.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
            "imageUrl3": "https://ph-files.imgix.net/2f9040aa-66ba-47db-a6a5-5d756eae64c9.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop",
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