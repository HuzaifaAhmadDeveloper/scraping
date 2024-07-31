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
      "cat_name": "AI",
      "cat_heading": "The best AI in 2024",
      "sub_categories": [
        {
          "sub_cat_name": "AI characters",
          "sub_cat_heading": "The best AI characters in 2024",
          "products": [
            {
              "rank": "1",
              "imageUrl": "https://ph-files.imgix.net/f81fb88e-13cc-4863-8b1f-4a51fa2b3c8b.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
              "title": "Synthesia — Create AI videos from text in minutes!",
              "description": "Create AI videos with AI avatars and natural AI voices. Generate engaging videos for e-learning, customer onboarding, etc. No need for actors, cameras or audio equipment."
            },
            {
              "rank": "2",
              "imageUrl": "https://ph-files.imgix.net/12d8f295-d199-4358-8cf1-39d1698f67d9.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
              "title": "Character AI — Building the next generation of conversational AI",
              "description": "Create and talk to AI Characters! Characters can be fictional or based on real people, dead or alive or even inanimate objects. Our dialog agents are powered by our own proprietary technology based on large language models."
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
          "sub_cat_name": "AI chatbots",
          "sub_cat_heading": "The best AI chatbots in 2024",
          "products": [
            {
              "rank": "1",
              "imageUrl": "https://ph-files.imgix.net/b739ac93-2899-4cc1-a893-40ea8afde77e.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
              "title": "GPT-4 by OpenAI — LLM that exhibits human-level performance",
              "description": "GPT-4 is a multimodal model developed by OpenAI that can understand and generate human-like text based on the context provided. It is used in various applications, such as content creation, customer support, coding help, and educational tools."
            },
            {
              "rank": "2",
              "imageUrl": "https://ph-files.imgix.net/c19875b6-dac0-49da-8faa-f2fe24b98cc2.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
              "title": "ChatGPT by OpenAI — Optimizing language models for dialogue",
              "description": "An LLM to get instant answers, find creative inspiration, and learn something new."
            },
            {
              "rank": "3",
              "imageUrl": "https://ph-files.imgix.net/ae49ce7d-30a4-457b-823a-2e1ee8d44dbb.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
              "title": "Claude by Anthropic — A family of foundational AI models",
              "description": "We're an AI research company that builds reliable, interpretable, and steerable AI systems. Our first product is Claude, an AI assistant for tasks at any scale."
            },
            {
              "rank": "4",
              "imageUrl": "https://ph-files.imgix.net/a95ffb3c-476e-4eea-9349-c39ec9e1744c.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
              "title": "OpenAI Assistants API — Designed to help developers build powerful AI assistants",
              "description": "The Assistants API is designed to help developers build powerful AI assistants capable of performing a variety of tasks."
            },
            {
              "rank": "5",
              "imageUrl": "https://ph-files.imgix.net/6ca85bd3-ab80-4498-b678-0c9ef5efa73a.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
              "title": "Intercom — An AI-first customer support platform",
              "description": "A platform to provide a seamless customer experience across AI and human support, delivering increased customer satisfaction while reducing costs."
            },
            {
              "rank": "6",
              "imageUrl": "https://ph-files.imgix.net/1d58a372-e2bc-4eca-9a2b-d9828c193a22.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
              "title": "GPT Store — Help you find useful and popular custom versions of ChatGPT.",
              "description": "The store features a diverse range of GPTs developed by our partners and the community. Browse popular and trending GPTs on the community leaderboard, with categories like DALL·E, writing, research, programming, education, and lifestyle."
            },
            {
              "rank": "7",
              "imageUrl": "https://ph-files.imgix.net/b2de76c7-180d-42ca-892c-e360ad7b8771.svg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
              "title": "Hugging Face — The AI community building the future.",
              "description": "We’re on a journey to advance and democratize artificial intelligence through open source and open science."
            },
            {
              "rank": "8",
              "imageUrl": "https://ph-files.imgix.net/7fecfb2e-a14e-41c7-baa8-0be3f468c4e1.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
              "title": "Perplexity 2.0 — Where Knowledge Begins",
              "description": "Knowledge is power. Experience Perplexity's new brand, designed to unlock our curiosity, one question at a time. Discover knowledge and explore endless possibilities."
            },
            {
              "rank": "9",
              "imageUrl": "https://ph-files.imgix.net/2a77db72-7177-4935-963d-496839aa07db.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
              "title": "Llama 3 — Meta's openly available LLM",
              "description": "An openly accessible model that excels at language nuances, contextual understanding, and complex tasks like translation and dialogue generation."
            },
            {
              "rank": "10",
              "imageUrl": "https://ph-files.imgix.net/cdb23f26-b385-4854-a005-3862be50f79e.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
              "title": "GitHub Copilot Chat — AI chat features powered by Copilot",
              "description": "GitHub Copilot Chat is a companion extension to GitHub Copilot that provides conversational AI assistance throughout your software development journey in VS Code."
            }
          ]
        },
        {
            "sub_cat_name": "AI content Detection",
            "sub_cat_heading": "The best AI content Detection in 2024",
            "products": [
              {
                "rank": "1",
                "imageUrl": "https://ph-files.imgix.net/a8edd340-963d-44fc-bc80-98f49ae2cfa5.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "YOLO — Real-time object detection",
                "description": ""
              },
              {
                "rank": "2",
                "imageUrl": "https://ph-files.imgix.net/004c521d-0849-482c-bdbf-92e6615e19eb.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "Journalist — Instantly generate hundreds of high-quality articles.",
                "description": "Journalist is an AI Article Generator that generates high-quality articles for your business. With a few clicks, you're able to automate your content with well-structured, unique and optimised articles for your niche."
              },
              {
                "rank": "3",
                "imageUrl": "https://ph-files.imgix.net/253ec319-b2f1-470f-8780-d52d4ccc526b.svg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "Detector De IA Gratuito — Detector de IA gratuito",
                "description": "El detector de IA le ayuda a encontrar la puntuación de similitud de IA y determinar si el contenido está escrito por un humano o por una herramienta de IA."
              }
            ]
          },
          {
            "sub_cat_name": "AI generative art",
            "sub_cat_heading": "The best AI generative art in 2024",
            "products": [
              {
                "rank": "1",
                "imageUrl": "https://ph-files.imgix.net/ce3cfb14-76cf-4244-ad2c-1359ce7bc887.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "DALL-E by OpenAI — Creating images from text",
                "description": "A 12-billion parameter version of GPT-3 trained to generate images from text descriptions, using a dataset of text–image pairs."
              },
              {
                "rank": "2",
                "imageUrl": "https://ph-files.imgix.net/ac23983e-9400-414b-aedf-8d46a164a4e9.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "Deepgram — Build voice AI into your apps",
                "description": "A voice AI platform that provides APIs for speech-to-text, text-to-speech, and language understanding."
              },
              {
                "rank": "3",
                "imageUrl": "https://ph-files.imgix.net/d672baa2-0961-48e5-a7c7-f83a6098e6c8.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "Stable Diffusion XL — Richer images & jaw-dropping aesthetics from shorter prompts",
                "description": "Create descriptive images with shorter prompts and generate words within images. This is a significant advancement in image generation capabilities, offering enhanced image composition and face generation resulting in stunning visuals and realistic aesthetics."
              },
              {
                "rank": "4",
                "imageUrl": "https://ph-files.imgix.net/296959f2-f1f5-408c-803c-58b33e049208.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "Mistral AI — Open and portable generative AI for devs and businesses",
                "description": "- We’re committed to empower the AI community with open technology. Our open models sets the bar for efficiency, and are available for free, with fully permissive license. - Our optimized commercial models are designed for performance and are available via our flexible deployment options."
              },
              {
                "rank": "5",
                "imageUrl": "https://ph-files.imgix.net/a41a6d25-2903-460b-be86-06be70e5adf7.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "Stable Diffusion — Open models in every modality, for everyone, everywhere.",
                "description": ""
              },
              {
                "rank": "6",
                "imageUrl": "https://ph-files.imgix.net/7afbbdc1-07f9-4236-9f3a-e5fdceec7698.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "Lummi — Free stock photos made and curated by AI artists",
                "description": "A collection of 13,000+ AI-crafted, highly curated images from creators across the globe."
              },
              {
                "rank": "7",
                "imageUrl": "https://ph-files.imgix.net/25878109-5a7a-4b7b-924e-877109a0824f.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "Midjourney — Create AI generated images from a text prompt",
                "description": "Create images, paintings, digital art, logos and much more simply by writing a prompt."
              },
              {
                "rank": "8",
                "imageUrl": "https://ph-files.imgix.net/290edd0f-e78e-4fce-ba2d-aec0c8e4e67a.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "Wondercraft — An AI powered audio studio",
                "description": "The easy and enjoyable way to create professional, studio-quality audio for podcasts, audiobooks, ads, company communications, and more."
              },
              {
                "rank": "9",
                "imageUrl": "https://ph-files.imgix.net/5690fe51-6b30-4bb7-ac61-23789510491e.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "Stable Diffusion — ✨ Generate AI Art for FREE",
                "description": "Unleash your creativity with Stable Diffusion - the latent text-to-image diffusion model that empowers you to produce photo-realistic images from any text input, in seconds."
              },
              {
                "rank": "10",
                "imageUrl": "https://ph-files.imgix.net/d29b83ef-b2b8-497e-b06a-ebd4d62d2486.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "AI Mirror — AI art photo & video editor",
                "description": "AI Mirror is an AI-powered photo & video generation app that transforms your artwork into anime-styles with just a few taps. Our technology can create a brand-new image in the style of your favorite animations. With AI Mirror, you can cartoonize yourself, create a magical avatar, or just have fun with digital art. Give it a try and transform your photos into stunning anime characters!"
              }
            ]
          },
          {
            "sub_cat_name": "AI headshot generators",
            "sub_cat_heading": "The best AI headshot generators in 2024",
            "products": [
              {
                "rank": "1",
                "imageUrl": "https://ph-files.imgix.net/d672baa2-0961-48e5-a7c7-f83a6098e6c8.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "Stable Diffusion XL — Richer images & jaw-dropping aesthetics from shorter prompts",
                "description": "Create descriptive images with shorter prompts and generate words within images. This is a significant advancement in image generation capabilities, offering enhanced image composition and face generation resulting in stunning visuals and realistic aesthetics."
              },
              {
                "rank": "2",
                "imageUrl": "https://ph-files.imgix.net/4104cfc9-8533-4b34-912f-f5b98f8138bb.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "Avatars by Studio Neiro AI — Craft captivating videos using scalable AI driven avatars",
                "description": "Generate video avatars with human-like features and micro-expressions that accurately represent your brand script or audio speech. Customize the voice of AI avatar to match the speaker's persona. First ultrarealistic avatars for vertical videos by Studio Neiro AI."
              }
            ]
          },
          {
            "sub_cat_name": "AI infrastructure",
            "sub_cat_heading": "The best AI infrastructure in 2024",
            "products": [
              {
                "rank": "1",
                "imageUrl": "https://ph-files.imgix.net/a95ffb3c-476e-4eea-9349-c39ec9e1744c.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "OpenAI Assistants API — Designed to help developers build powerful AI assistants",
                "description": "The Assistants API is designed to help developers build powerful AI assistants capable of performing a variety of tasks."
              },
              {
                "rank": "2",
                "imageUrl": "https://ph-files.imgix.net/2df0eb38-7b7e-48a7-80d9-05c57b48d3d4.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "Google Cloud Platform — A suite of cloud computing services by Google",
                "description": "Build with generative AI, deploy apps fast, and analyze data in seconds with Google-grade security."
              },
              {
                "rank": "3",
                "imageUrl": "https://ph-files.imgix.net/99b3e788-14c7-4bbb-97ea-d87c23c9318f.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "Gemini — Google's answer to GPT-4",
                "description": "Google's largest and most capable AI model. Built from the ground up to be multimodal, Gemini can generalize and seamlessly understand, operate across and combine different types of information, including text, images, audio, video and code."
              },
              {
                "rank": "4",
                "imageUrl": "https://ph-files.imgix.net/ac23983e-9400-414b-aedf-8d46a164a4e9.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "Deepgram — Build voice AI into your apps",
                "description": "A voice AI platform that provides APIs for speech-to-text, text-to-speech, and language understanding."
              },
              {
                "rank": "5",
                "imageUrl": "https://ph-files.imgix.net/893eb4e0-61dd-4ee2-9f06-7db129d7582a.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "replicate — source machine learning models with a cloud API",
                "description": ""
              },
              {
                "rank": "6",
                "imageUrl": "https://ph-files.imgix.net/b2de76c7-180d-42ca-892c-e360ad7b8771.svg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "Hugging Face — The AI community building the future.",
                "description": "We’re on a journey to advance and democratize artificial intelligence through open source and open science."
              },
              {
                "rank": "7",
                "imageUrl": "https://ph-files.imgix.net/35b92c0d-5cc6-499a-b2cf-9d25d3e9538b.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "Langchain — LangChain’s suite of products supports AI development",
                "description": ""
              },
              {
                "rank": "8",
                "imageUrl": "https://ph-files.imgix.net/f904aec8-e324-4aed-ae3b-ff68795ce44f.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "OpenAI API — GPT-4 API",
                "description": ""
              },
              {
                "rank": "9",
                "imageUrl": "https://ph-files.imgix.net/043ab050-9dff-4bb2-bff0-f6645ba07a58.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "Groq Chat — An LPU inference engine",
                "description": "A new type of end-to-end processing unit system that provides the fastest inference for computationally intensive applications with a sequential component to them, such as AI language applications (LLMs)"
              },
              {
                "rank": "10",
                "imageUrl": "https://ph-files.imgix.net/6c80b7b1-050d-45b3-afad-2b94cdddbf01.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "Pinecone — Long-term memory for AI",
                "description": "A vector database that makes it easy to build high-performance vector search applications. Developer-friendly, fully managed, and easily scalable without infrastructure hassles."
              }
            ]
          },
          {
            "sub_cat_name": "AI metric and evaluation",
            "sub_cat_heading": "The best AI metric and evaluation in 2024",
            "products": [
              {
                "rank": "1",
                "imageUrl": "https://ph-files.imgix.net/b2de76c7-180d-42ca-892c-e360ad7b8771.svg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "Hugging Face — The AI community building the future.",
                "description": "We’re on a journey to advance and democratize artificial intelligence through open source and open science."
              },
              {
                "rank": "2",
                "imageUrl": "https://ph-files.imgix.net/f9b89eda-07db-4e65-9807-cd8247ee3124.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "TensorFlow — An end-to-end open source machine learning platform",
                "description": "TensorFlow is a fast, flexible, and scalable open-source machine learning library for research and production."
              },
              {
                "rank": "3",
                "imageUrl": "https://ph-files.imgix.net/9a61a5f2-5dd2-492c-ae2a-5fdafe0d9c82.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "Langfuse — Open Source LLM Engineering Platform",
                "description": "Langfuse is the open source LLM Engineering Platform. It provides observability, metrics, evals, prompt management and a playground and to debug and improve LLM apps. Langfuse is open. It works with any model, any framework, allows for complex nesting and has open APIs to build downstream use cases. Docs: https://langfuse.com/docs Github: https://github.com/langfuse/langfuse"
              },
              {
                "rank": "4",
                "imageUrl": "https://ph-files.imgix.net/e9dc34ff-8c5d-4f49-bd9e-3300710bbee2.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=14&h=14&fit=crop",
                "title": "Weights & Biases — Building the future of AI",
                "description": "Weights & Biases is the leading AI developer platform to train and fine-tune models, manage models from experimentation to production, and track and evaluate GenAI applications powered by LLMs."
              },
              {
                "rank": "5",
                "imageUrl": "https://ph-files.imgix.net/045e1776-1aef-441d-901a-d5870829fee8.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "OpenAI Tools — Super App For Fine-tuning Datasets, Jobs, Metrics & Models",
                "description": "Toolkit to get the most out of your OpenAI account: Track API usage; Manage ChatGPT fine-tuning datasets; Create, monitor and cancel fine-tuning jobs; Review and visualize training logs; Test and compare fine-tuned and other models directly, and more."
              },
              {
                "rank": "6",
                "imageUrl": "https://ph-files.imgix.net/ec5d95dd-fb14-4e28-a2e7-6100387899e7.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "spaCy — Industrial-strength, open source natural language processing",
                "description": "spaCy is a library for advanced Natural Language Processing in Python and Cython. It's built on the very latest research, and was designed from day one to be used in real products."
              },
              {
                "rank": "7",
                "imageUrl": "https://ph-files.imgix.net/05dfad60-12e0-4cea-9247-f54e64c5ca70.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "Kuasar Video AI — Score videos on social media , analyze them using video AI.",
                "description": "Kuasar Video is an initiative that provides artificial intelligence-supported video solutions to companies and enables them to reach more audiences up to 1000% thanks to its products."
              }
            ]
          },
          {
            "sub_cat_name": "AI voice generation software",
            "sub_cat_heading": "The best AI voice generation software in 2024",
            "products": [
              {
                "rank": "1",
                "imageUrl": "https://ph-files.imgix.net/fa7288c3-29bb-4b88-9f03-37a01dc5b9b5.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "ElevenLabs — Create natural AI voices instantly in any language",
                "description": "The most realistic text to speech and voice cloning software. The most compelling, rich, and lifelike voices for creators and publishers seeking the ultimate tools for storytelling."
              },
              {
                "rank": "2",
                "imageUrl": "https://ph-files.imgix.net/ac23983e-9400-414b-aedf-8d46a164a4e9.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "Deepgram — Build voice AI into your apps",
                "description": "A voice AI platform that provides APIs for speech-to-text, text-to-speech, and language understanding."
              },
              {
                "rank": "3",
                "imageUrl": "https://ph-files.imgix.net/7d14b963-beed-4f24-a8ef-4390312c179e.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=14&h=14&fit=crop",
                "title": "Whisper by OpenAI — A neural net for speech recognition",
                "description": "Whisper is an automatic speech recognition (ASR) system trained on 680,000 hours of multilingual and multitask supervised data collected from the web."
              },
              {
                "rank": "4",
                "imageUrl": "https://ph-files.imgix.net/7335ee15-c394-4a85-b2b7-7bc6faf56919.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "Vapi — Voice AI for developers",
                "description": "Build, test and deploy voicebots in minutes rather than months."
              },
              {
                "rank": "5",
                "imageUrl": "https://ph-files.imgix.net/290edd0f-e78e-4fce-ba2d-aec0c8e4e67a.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "Wondercraft — An AI powered audio studio",
                "description": "The easy and enjoyable way to create professional, studio-quality audio for podcasts, audiobooks, ads, company communications, and more."
              },
              {
                "rank": "6",
                "imageUrl": "https://ph-files.imgix.net/50275928-8f99-4ecd-afd4-f72353b15049.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "Voicely — Convert text to speech online",
                "description": "Text To Speech, Text To Sound online converter. Generate text to voice in more than 60 languages and +500 voices. Voicely: AI Text To Voice converter."
              },
              {
                "rank": "7",
                "imageUrl": "https://ph-files.imgix.net/77d51987-9156-4014-9b49-92f808b76b7c.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "AssemblyAI — Powerful AI models to transcribe and understand speech",
                "description": "At AssemblyAI, we keep our pulse on the latest developments and breakthroughs in AI research and use these advances to inform our production-ready AI models. Thousands of companies – like Spotify, CallRail, and Writer – use our API to access state-of-the-art AI models to transcribe and understand speech, and build scalable AI-powered products and features faster. LeMUR, our new framework for applying powerful LLMs to transcribed speech, is now available."
              },
              {
                "rank": "8",
                "imageUrl": "https://ph-files.imgix.net/a43f578f-adf9-4285-904c-42c3228eb1aa.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=14&h=14&fit=crop",
                "title": "Singify by Fineshare — Make AI music covers with your favorite artists anytime",
                "description": "Fineshare Singify is a free online AI Song Cover Generator. Whether you are a music lover or a creator, you can easily turn your favorite songs into unique and personalized masterpieces with the power of AI."
              },
              {
                "rank": "9",
                "imageUrl": "https://ph-files.imgix.net/853e16e5-2f1d-48b9-ac05-73ee867f1044.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "Play — Making AI speak better than humans.",
                "description": "Leaders in Conversational Voice AI. We're building generative AI voices for the conversational future. Join https://discord.gg/yBbq7UfUsF"
              },
              {
                "rank": "10",
                "imageUrl": "https://ph-files.imgix.net/4104cfc9-8533-4b34-912f-f5b98f8138bb.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "Avatars by Studio Neiro AI — Craft captivating videos using scalable AI driven avatars",
                "description": "Generate video avatars with human-like features and micro-expressions that accurately represent your brand script or audio speech. Customize the voice of AI avatar to match the speaker's persona. First ultrarealistic avatars for vertical videos by Studio Neiro AI."
              }
            ]
          },
          {
            "sub_cat_name": "Avatar generators",
            "sub_cat_heading": "The best Avatar generators in 2024",
            "products": [
              {
                "rank": "1",
                "imageUrl": "https://ph-files.imgix.net/d29b83ef-b2b8-497e-b06a-ebd4d62d2486.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "AI Mirror — AI art photo & video editor",
                "description": "AI Mirror is an AI-powered photo & video generation app that transforms your artwork into anime-styles with just a few taps. Our technology can create a brand-new image in the style of your favorite animations. With AI Mirror, you can cartoonize yourself, create a magical avatar, or just have fun with digital art. Give it a try and transform your photos into stunning anime characters!"
              },
              {
                "rank": "2",
                "imageUrl": "https://ph-files.imgix.net/1758ac06-82cc-43a9-8fc6-42956bc8de07.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=14&h=14&fit=crop",
                "title": "LogoFast — Make beautiful logos with AI",
                "description": "Create a logo using premade icons and editing tools or let AI take the lead."
              },
              {
                "rank": "3",
                "imageUrl": "https://ph-files.imgix.net/7606f641-1be9-429f-bd9c-038d3e730858.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=14&h=14&fit=crop",
                "title": "Creatify — Paste a product URL. Video ad made in seconds",
                "description": "An AI-powered tool that quickly generates variety of video ads from any product URL. It analyzes product details, gathers media, and creates engaging visuals and scripts, simplifying video ad production."
              },
              {
                "rank": "4",
                "imageUrl": "https://ph-files.imgix.net/4104cfc9-8533-4b34-912f-f5b98f8138bb.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "Avatars by Studio Neiro AI — Craft captivating videos using scalable AI driven avatars",
                "description": "Generate video avatars with human-like features and micro-expressions that accurately represent your brand script or audio speech. Customize the voice of AI avatar to match the speaker's persona. First ultrarealistic avatars for vertical videos by Studio Neiro AI."
              },
              {
                "rank": "5",
                "imageUrl": "https://ph-files.imgix.net/f81fb88e-13cc-4863-8b1f-4a51fa2b3c8b.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "Synthesia — Create AI videos from text in minutes!",
                "description": "Create AI videos with AI avatars and natural AI voices. Generate engaging videos for e-learning, customer onboarding, etc. No need for actors, cameras or audio equipment."
              },
              {
                "rank": "6",
                "imageUrl": "https://ph-files.imgix.net/ccbaf14b-200f-4921-ae4c-8b7b873750be.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=14&h=14&fit=crop",
                "title": "Vidyard — Video messaging, digital sales rooms, and other GTM tools",
                "description": "It's getting harder than ever to stand out above the noise and engage your prospects and customers. Buying committees have grown larger, inboxes more flooded, and prospects spend more time conducting their own research. Vidyard is building a suite of products that allows teams to adapt and take advantage of these trends. Visit our site to learn more!"
              },
              {
                "rank": "7",
                "imageUrl": "https://ph-files.imgix.net/98bd5896-5f3f-4bee-9d12-26b81a1f61d3.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "Ready Player Me Halloween Edition — Create a spooky Halloween avatar from a selfie",
                "description": "Create a spooky Halloween avatar from a single selfie. Snap a photo and use your creativity to customize a terrifying virtual Halloween costume. Use it as a profile picture or share in social."
              },
              {
                "rank": "8",
                "imageUrl": "https://ph-files.imgix.net/a4e7b091-a934-4408-a9da-55166dc27fad.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "DiceBear — An avatar library for designers and developers",
                "description": "Create avatars for your profiles, designs, websites or apps. Piece by piece or based on a seed."
              }
            ]
          },
          {
            "sub_cat_name": "Chatgpt prompts",
            "sub_cat_heading": "The best Chatgpt prompts in 2024",
            "products": [
              {
                "rank": "1",
                "imageUrl": "https://ph-files.imgix.net/c19875b6-dac0-49da-8faa-f2fe24b98cc2.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "ChatGPT by OpenAI — Optimizing language models for dialogue",
                "description": "An LLM to get instant answers, find creative inspiration, and learn something new."
              },
              {
                "rank": "2",
                "imageUrl": "https://ph-files.imgix.net/1d58a372-e2bc-4eca-9a2b-d9828c193a22.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "GPT Store — Help you find useful and popular custom versions of ChatGPT.",
                "description": "The store features a diverse range of GPTs developed by our partners and the community. Browse popular and trending GPTs on the community leaderboard, with categories like DALL·E, writing, research, programming, education, and lifestyle."
              },
              {
                "rank": "3",
                "imageUrl": "https://ph-files.imgix.net/e58c5131-a65f-4287-aa49-b2fb3d105870.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "Cycle — Your feedback hub, on autopilot",
                "description": "Cycle is the fastest way for your team to capture product feedback and share customer insights - without the busywork 👉 https://www.cycle.app"
              },
              {
                "rank": "4",
                "imageUrl": "https://ph-files.imgix.net/566bf379-2801-4ea6-9dfe-5a5ad581d016.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "Crisp — Give your customer experience a human touch",
                "description": "Discover our Business Messaging Platform for Startups & SMB's. The one stop for sales, marketing & support in one platform : Crisp. 14 Days free trial. No credit-card required. Try now ! We provide Knowledge base, Team Inbox, Chatbot, CRM and multiple other features to let you build your own way to customer success."
              },
              {
                "rank": "5",
                "imageUrl": "https://ph-files.imgix.net/cf20298e-38fa-4485-8259-7652534b86f9.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "OpenAI Cookbook — Examples and guides for using the OpenAI API",
                "description": "Example code and prompts for accomplishing common tasks with the OpenAI API. To try the examples yourself, you’ll need an OpenAI account. Most code examples are written in Python, though the concepts can be applied in any language."
              },
              {
                "rank": "6",
                "imageUrl": "https://ph-files.imgix.net/d81028ec-db98-4c7c-a69a-d1a43f28d9d8.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=14&h=14&fit=crop",
                "title": "AI Writer: Essay Email Writing(APP) — ChatGPT App in your Pocket🤳🏼📱",
                "description": "AI Writer generates high-quality content that is tailored to your needs in just seconds. Whether you need to craft a persuasive essay or a professional email, AI Writer has got you covered. Download now and unleash your full writing potential!🙌"
              },
              {
                "rank": "7",
                "imageUrl": "https://ph-files.imgix.net/d81028ec-db98-4c7c-a69a-d1a43f28d9d8.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=14&h=14&fit=crop",
                "title": "WorkGPT: Combination of ChatGPT & Zapier — AI Agent Chatbot-based Virtual Assistant",
                "description": "WorkGPT, a chatbot-based platform empowering users to create your very own virtual assistants that work tirelessly. You can seamlessly connect with various tools and applications, enhancing productivity and streamlining tasks effortlessly."
              },
              {
                "rank": "8",
                "imageUrl": "https://ph-files.imgix.net/b695db59-c050-431a-ba9b-8fec75520f3d.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "WrapFast — Build an AI Wrapper or any iOS app in minutes",
                "description": "The SwiftUI Boilerplate for creating an AI Wrapper or any iOS app in minutes."
              },
              {
                "rank": "9",
                "imageUrl": "https://ph-files.imgix.net/5b8f843b-51e2-4482-8f9f-a0535151462a.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=14&h=14&fit=crop",
                "title": "snap2txt — Convert your project into prompt",
                "description": "snap2txt is a Python utility that captures the structure and contents of a project directory and saves them into a text file. This text file is a ready-to-use base for a prompt to develop new features with ChatGPT."
              },
              {
                "rank": "10",
                "imageUrl": "https://ph-files.imgix.net/1eef7c06-cbe2-4a14-866a-ffd3af1be970.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "Albus Beta — Probably the most fun way to explore a topic, powered by GPT",
                "description": "Albus is a live board that will help you explore any topic you like in new ways, from different perspectives. Think of it as Google meets Pinterest. Enjoy the early beta. Welcome and have fun."
              }
            ]
          },
          {
            "sub_cat_name": "LLMs",
            "sub_cat_heading": "The best LLMs in 2024",
            "products": [
              {
                "rank": "1",
                "imageUrl": "https://ph-files.imgix.net/b739ac93-2899-4cc1-a893-40ea8afde77e.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "GPT-4 by OpenAI — LLM that exhibits human-level performance",
                "description": "GPT-4 is a multimodal model developed by OpenAI that can understand and generate human-like text based on the context provided. It is used in various applications, such as content creation, customer support, coding help, and educational tools."
              },
              {
                "rank": "2",
                "imageUrl": "https://ph-files.imgix.net/c19875b6-dac0-49da-8faa-f2fe24b98cc2.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "ChatGPT by OpenAI — Optimizing language models for dialogue",
                "description": "An LLM to get instant answers, find creative inspiration, and learn something new."
              },
              {
                "rank": "3",
                "imageUrl": "https://ph-files.imgix.net/ae49ce7d-30a4-457b-823a-2e1ee8d44dbb.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "Claude by Anthropic — A family of foundational AI models",
                "description": "We're an AI research company that builds reliable, interpretable, and steerable AI systems. Our first product is Claude, an AI assistant for tasks at any scale."
              },
              {
                "rank": "4",
                "imageUrl": "https://ph-files.imgix.net/99b3e788-14c7-4bbb-97ea-d87c23c9318f.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "Gemini — Google's answer to GPT-4",
                "description": "Google's largest and most capable AI model. Built from the ground up to be multimodal, Gemini can generalize and seamlessly understand, operate across and combine different types of information, including text, images, audio, video and code."
              },
              {
                "rank": "5",
                "imageUrl": "https://ph-files.imgix.net/b2de76c7-180d-42ca-892c-e360ad7b8771.svg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "Hugging Face — The AI community building the future.",
                "description": "We’re on a journey to advance and democratize artificial intelligence through open source and open science."
              },
              {
                "rank": "6",
                "imageUrl": "https://ph-files.imgix.net/35b92c0d-5cc6-499a-b2cf-9d25d3e9538b.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "Langchain — LangChain’s suite of products supports AI development",
                "description": ""
              },
              {
                "rank": "7",
                "imageUrl": "https://ph-files.imgix.net/7fecfb2e-a14e-41c7-baa8-0be3f468c4e1.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "Perplexity 2.0 — Where Knowledge Begins",
                "description": "Knowledge is power. Experience Perplexity's new brand, designed to unlock our curiosity, one question at a time. Discover knowledge and explore endless possibilities."
              },
              {
                "rank": "8",
                "imageUrl": "https://ph-files.imgix.net/2a77db72-7177-4935-963d-496839aa07db.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "Llama 3 — Meta's openly available LLM",
                "description": "An openly accessible model that excels at language nuances, contextual understanding, and complex tasks like translation and dialogue generation."
              },
              {
                "rank": "9",
                "imageUrl": "https://ph-files.imgix.net/f904aec8-e324-4aed-ae3b-ff68795ce44f.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "OpenAI API — GPT-4 API",
                "description": ""
              },
              {
                "rank": "10",
                "imageUrl": "https://ph-files.imgix.net/043ab050-9dff-4bb2-bff0-f6645ba07a58.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "Groq Chat — An LPU inference engine",
                "description": "A new type of end-to-end processing unit system that provides the fastest inference for computationally intensive applications with a sequential component to them, such as AI language applications (LLMs)"
              }
            ]
          },
          {
            "sub_cat_name": "Predictive AI",
            "sub_cat_heading": "The best Predictive AI in 2024",
            "products": [
              {
                "rank": "1",
                "imageUrl": "https://ph-files.imgix.net/ae49ce7d-30a4-457b-823a-2e1ee8d44dbb.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "Claude by Anthropic — A family of foundational AI models",
                "description": "We're an AI research company that builds reliable, interpretable, and steerable AI systems. Our first product is Claude, an AI assistant for tasks at any scale."
              },
              {
                "rank": "2",
                "imageUrl": "https://ph-files.imgix.net/127c1dc7-bdef-43bd-b5be-e1c717670122.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "LanceDB — The Database for Multimodal AI",
                "description": "LanceDB is a developer-friendly, open source database for AI. From hyper scalable vector search and advanced retrieval for RAG, to streaming training data and interactive exploration of large scale AI datasets, LanceDB is the best foundation for your AI application"
              },
              {
                "rank": "3",
                "imageUrl": "https://ph-files.imgix.net/ad6d08ff-396e-4450-a046-88ed244b47a5.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "PostgresML — You know Postgres. Now you know machine learning.",
                "description": "PostgresML is a complete MLops platform in a simple PostgreSQL extension. Build fast, simple and powerful models right inside your database."
              },
              {
                "rank": "4",
                "imageUrl": "https://ph-files.imgix.net/1f582c86-a6ff-4447-9a0c-1c7d28645cd9.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "SendPulse — Maximizing e-mail marketing open rates.",
                "description": "SendPulse maximizes the core metric of e-mail marketing - newsletter open rate - atomatically. We collect tons of data about billions of subscribers in our system and predict the best time and channel for each subscriber when to deliver the next message to him. In a result our customers see 50% open rate increase in average."
              }
            ]
          },
          {
            "sub_cat_name": "Text-to-speech",
            "sub_cat_heading": "The best Text-to-speech in 2024",
            "products": [
              {
                "rank": "1",
                "imageUrl": "https://ph-files.imgix.net/fa7288c3-29bb-4b88-9f03-37a01dc5b9b5.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "ElevenLabs — Create natural AI voices instantly in any language",
                "description": "The most realistic text to speech and voice cloning software. The most compelling, rich, and lifelike voices for creators and publishers seeking the ultimate tools for storytelling."
              },
              {
                "rank": "2",
                "imageUrl": "https://ph-files.imgix.net/ac23983e-9400-414b-aedf-8d46a164a4e9.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "Deepgram — Build voice AI into your apps",
                "description": "A voice AI platform that provides APIs for speech-to-text, text-to-speech, and language understanding."
              },
              {
                "rank": "3",
                "imageUrl": "https://ph-files.imgix.net/7d14b963-beed-4f24-a8ef-4390312c179e.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=14&h=14&fit=crop",
                "title": "Whisper by OpenAI — A neural net for speech recognition",
                "description": "Whisper is an automatic speech recognition (ASR) system trained on 680,000 hours of multilingual and multitask supervised data collected from the web."
              },
              {
                "rank": "4",
                "imageUrl": "https://ph-files.imgix.net/50275928-8f99-4ecd-afd4-f72353b15049.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "Voicely — Convert text to speech online",
                "description": "Text To Speech, Text To Sound online converter. Generate text to voice in more than 60 languages and +500 voices. Voicely: AI Text To Voice converter."
              },
              {
                "rank": "5",
                "imageUrl": "https://ph-files.imgix.net/77d51987-9156-4014-9b49-92f808b76b7c.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "AssemblyAI — Powerful AI models to transcribe and understand speech",
                "description": "At AssemblyAI, we keep our pulse on the latest developments and breakthroughs in AI research and use these advances to inform our production-ready AI models. Thousands of companies – like Spotify, CallRail, and Writer – use our API to access state-of-the-art AI models to transcribe and understand speech, and build scalable AI-powered products and features faster. LeMUR, our new framework for applying powerful LLMs to transcribed speech, is now available."
              },
              {
                "rank": "6",
                "imageUrl": "https://ph-files.imgix.net/a924b4e5-bb61-489f-b800-a0f2f16089cf.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "Speechify Voice Over Generator​ — Natural sounding, human-quality voice generator.",
                "description": "Using Speechify Voice Over Generator is a breeze. It takes only a few minutes and you’ll be turning any text into natural-sounding Voice Over audio. Our Voice Over Generator page uses Artificial Intelligence technology to generate your voice overs instantly."
              },
              {
                "rank": "7",
                "imageUrl": "https://ph-files.imgix.net/80a26274-b44d-4470-bc62-a605dd5c79f3.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "Bbedit — Leading professional HTML and text editor for macOS.",
                "description": "BBEdit is the leading professional HTML and text editor for macOS. This award-winning product has been crafted to serve the needs of writers, Web authors and software developers, and provides an abundance of features for editing, searching, and manipulation of prose, source code, and textual data."
              },
              {
                "rank": "8",
                "imageUrl": "https://ph-files.imgix.net/127dfec6-4b04-424d-bed6-8fac6cafe67d.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "TinyMCE — Full featured web based JavaScript WYSIWYG HTML Editor",
                "description": "TinyMCE is a powerful and stable WYSIWYG HTML editor. It comes with more than 40 editing tools and premium features such as improved spell check, file management and upgraded copy-paste."
              },
              {
                "rank": "9",
                "imageUrl": "https://ph-files.imgix.net/ced54d7f-0cba-4438-8f7f-14ebf4162dcc.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=42&h=42&fit=crop",
                "title": "FlexClip — 🎞️ Easily create and edit videos online!",
                "description": "FlexClip is a versatile video editing platform catering to creators of all skill levels. It offers customizable templates for personal and professional projects, along with a vast collection of stock photos, videos, and music. With powerful editing features, users can effortlessly trim, merge, add text, music, and transitions to their videos. The AI-powered tools, including auto subtitle, text-to-speech, AI image generator, text-to-video, and AI script, enhance the editing experience."
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
