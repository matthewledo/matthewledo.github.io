import imgNote from "../assets/img-projects/note-app.png";
import urbanStyle from "../assets/img-projects/urbanStyle.png";
import legalWeb from "../assets/img-projects/legalweb.webp";
import mediCare from "../assets/img-projects/medicare.jpg";
import astroFit from "../assets/img-projects/Astrofit.jpg";
import Verbenas from "../assets/img-projects/challenge-newyze.png";
import ReactEcommerce from "../assets/img-projects/ecommers.jpg";
import PortfolioDev from "../assets/img-projects/PortfolioDev.jpg";
import VintageTone from "../assets/img-projects/vintageToneApp.jpg";
import AstroEcommers from "../assets/img-projects/astroEcommers.jpg";
import CvBuilder from "../assets/img-projects/CvBuilder.png";


import AutomatedHTMLGenerator from "../assets/img-projects/Automated-HTML-Generator-&-Custom-CSS-Framework.webp";
import ProductDataExtractor from "../assets/img-projects/logging-data-transparency.webp";

export const projects = [
  {
    id: "Automated-HTML-Generator-&-Custom-CSS-Framework",
    category: ["Frontend", "Automation Tool"],
    title: "Automated HTML Generator & Custom CSS Framework",
    description:
      "Developed a custom automation tool to streamline frontend development via Google Sheets, resulting in a 20% reduction in development time for weekly marketing campaigns.",
    image: AutomatedHTMLGenerator.src,
    technologies: ["HTML", "CSS", "Google Sheets"],
   
    // New Case Study Fields
    role: "Lead Developer",
    techStack: "HTML, CSS, Google Sheets",
    timeline: "1 Week",
    client: "Leon's Furniture",
    challenge: "Weekly high-volume updates for Homepages and VIP events were creating a development bottleneck. Manual coding was time-consuming and prone to errors, while the lack of a standardized design system led to visual inconsistencies and significant CSS bloat (over 1,400 lines).",
    solution: "I engineered a Google Sheets-based HTML Generator paired with a custom-built utility-first CSS framework. This tool democratized the development process, allowing non-technical staff to generate production-ready code via a simple UI, effectively eliminating the bottleneck and enforcing code standards automatically.",
    results: [
      "Empowered non-technical team members to perform routine updates without developer intervention.",
      "Implemented a standardized utility-first CSS framework that reduced stylesheet size by 60%, improving maintainability.",
      "Achieved a 20% reduction in development time for weekly campaigns, enabling faster go-to-market and more agile marketing strategies."
],
    demo: "",
    code: "",
    videoTitle: "Automated HTML Generator - Workflow Demo",
videoSrc: "/public/video-projects/HTML Generator/HTML Generator Recording_Shortened_1080p.mp4", 
  sourceImages: [
    { src: "/public/img-projects/HTML Generator/modal-html-generator-1.webp", caption: "The Google Sheets UI: Dropdowns map to CSS classes" },
    { src: "/public/img-projects/HTML Generator/modal-html-generator-2.webp", caption: "The formula logic that determines element HTML and image width/height attributes" },
    { src: "/public/img-projects/HTML Generator/modal-html-generator-3.webp", caption: "The concatenation logic handling dynamic image inputs" },
    { src: "/public/img-projects/HTML Generator/modal-html-generator-4.webp", caption: "The concatenation logic handling dynamic banner element inputs" },
    { src: "/public/img-projects/HTML Generator/modal-html-generator-5.webp", caption: "The concatenation logic handiling the consolidation of the HTML output" },
    { src: "/public/img-projects/HTML Generator/modal-html-generator-6.webp", caption: "CSS/HTML Comparison: 1400 lines (Old) vs 600 lines (New)" }
  ]
  },
  {
  id: "Modern-Portfolio-&-Developer-Sandbox",
  category: ["Frontend"],
  title: "Modern Portfolio & Developer Sandbox",
  description: "A high-performance personal portfolio built from scratch to showcase professional projects while actively expanding my development toolkit into component-driven architecture.",
  image: "/public/img-projects/Portfolio Site/markuphero-699a3fac1b2e07a39b45623f.jpg", // Update with your actual image path
  challenge: "As a Digital Experience Developer deeply experienced with core web technologies (HTML, CSS, vanilla JavaScript) and SEO in high-traffic environments, I wanted to deliberately step outside my daily tech stack. The challenge was to learn and implement a modern, framework-based architecture with strict typing and utility-first styling, all while maintaining the rigorous performance and SEO standards I'm accustomed to building for.",
  solution: "I architected the site using Astro for its 'zero-JS by default' performance and exceptional SEO capabilities. I integrated React to handle interactive UI components, utilized Tailwind CSS for rapid, scalable styling, and enforced code quality throughout the build using TypeScript. The entire development lifecycle was managed through npm and GitHub, culminating in an automated deployment pipeline to GitHub Pages.",
  technologies: [
    "Astro", 
    "React", 
    "TypeScript", 
    "Tailwind CSS", 
    "npm", 
    "GitHub Actions"
  ],
  techStack: "Astro, React, TypeScript, Tailwind CSS, npm, GitHub Actions",
  results: [
    "Successfully architected and deployed a modern, component-based application from scratch.",
    "Mastered Astro's 'island architecture' to achieve optimal page load speeds.",
    "Gained practical, hands-on experience utilizing TypeScript for safer, more predictable code.",
    "Established a highly maintainable, scalable platform to document future technical projects."
  ],
  role: "Front-End Developer & Designer",
  client: "Personal Project",
  timeline: "Jan 2026 - Feb 2026",
  demo: "https://matthewledo.github.io/",
  code: "https://github.com/matthewledo/matthewledo.github.io" 
},
{
    id: "Dynamic-Holiday-Hours-Portal",
    category: ["Frontend", "Data Pipeline"],
    title: "Dynamic Holiday Hours Portal & Data Pipeline",
    description: "Architected an end-to-end solution to aggregate, standardize, and dynamically render bilingual holiday store hours for 86+ retail locations.",
    image: "/img-projects/holiday-hours-thumbnail.jpg", // Update with your actual image path
    technologies: ["JavaScript", "JSON", "HTML/CSS", "Excel Integration"],
    
    // Case Study Fields
    role: "Lead Front-End Developer",
    techStack: "Vanilla JS, JSON, CSS3, Excel Data Processing",
    timeline: "2 Weeks",
    client: "Leon's Furniture Company",
    
    challenge: "Managing the Christmas holiday hours for 86 corporate and franchise stores over a 10-day period was a logistical nightmare. Data arrived in varying formats via email, requiring tedious manual data entry. Displaying this massive amount of data on the frontend previously resulted in heavily bloated, hard-to-maintain static HTML pages that were prone to user error.",
    
    solution: "I engineered a two-part solution. First, I created a standardized Excel sheet for stakeholders to input hours, paired with a custom formula to compile that raw data into a clean, structured JSON object. Second, I built a lightweight Vanilla JavaScript frontend. Instead of static HTML, the app uses JavaScript to dynamically inject store hours into the DOM based on the user's selected date. I also wrote a custom localization script that automatically parses English 12-hour formats (e.g., '8:00AM - 5:00PM') and converts them into the French 24-hour standard ('08:00 - 17:00') on the fly.",
    
    results: [
      "Replaced thousands of lines of static HTML with a clean, dynamic JavaScript rendering engine.",
      "Eliminated manual HTML data entry errors by establishing an Excel-to-JSON data pipeline.",
      "Automated English-to-French time conversions, reducing the localization workload by 50%.",
      "Created a highly scalable, reusable template that is now the standard for all major retail holidays."
    ],
    demo: "", // Add link if you have a live demo or CodePen
    code: "", // Add GitHub repo link if available
    videoSrc: "", // Add a screen recording of clicking through the dates!
    sourceImages: [
      // Suggestion: Take screenshots of the Excel sheet, the JSON code block, and the final UI
      { src: "/img-projects/Holiday Hours/excel-data.webp", caption: "The standardized Excel intake sheet for franchise owners." },
      { src: "/img-projects/Holiday Hours/json-data.webp", caption: "The compiled JSON data structure." },
      { src: "/img-projects/Holiday Hours/ui-english.webp", caption: "The dynamic frontend rendering English hours." },
      { src: "/img-projects/Holiday Hours/ui-french.webp", caption: "The automatic 24-hour localization conversion in action." }
    ]
  },
  {
    id: "SEO-Dynamic-Category-Banners",
    category: ["Frontend", "SEO & Marketing Tools"],
    title: "Dynamic SEO Category Banners",
    description: "Developed a plug-and-play UI component that enabled marketing teams to scale internal linking and improve collection page SEO without developer intervention.",
    image: "/img-projects/seo-banner-thumbnail.jpg", // Update with your actual image path
    technologies: ["Vanilla JS", "CSS3", "Technical SEO", "DOM Manipulation"],
    
    // Case Study Fields
    role: "Front-End Developer",
    techStack: "JavaScript, CSS, HTML5",
    timeline: "1 Week",
    client: "Leon's Furniture Company",
    
    challenge: "Our e-commerce collection pages suffered from poor organic search rankings due to 'thin content'—typically just a title, a short description, and a grid of products. We needed a way to introduce targeted keywords and internal links to highly-searched sub-categories (e.g., 'Wooden Coffee Tables'). However, updating hundreds of pages manually was unscalable, and we needed a solution that non-technical marketing interns could safely deploy.",
    
    solution: "I architected a scalable HTML/CSS/JS template. The structural CSS and JavaScript rendering logic were fixed, exposing only a simple, human-readable JavaScript configuration object at the top of the file. Marketing interns only had to paste in image URLs, text headings, and destination links. The script automatically handles the rest—dynamically generating the DOM elements, applying responsive grid layouts, injecting CSS animations, and automatically adding SEO-critical accessibility tags like aria-labels.",
    
    results: [
      "Significantly improved organic search performance and page authority through optimized, scalable internal linking.",
      "Eliminated a major development bottleneck by empowering marketing interns to deploy responsive, branded banners independently.",
      "Ensured 100% consistency in UI and accessibility standards across all category pages, eliminating manual HTML authoring errors.",
      "Increased user click-through rates to high-margin, highly-searched sub-categories."
    ],
    demo: "", 
    code: "", 
    videoSrc: "", 
    sourceImages: [
      // Suggestion: Show the configuration vs the result
      { src: "/img-projects/SEO Banner/js-config.webp", caption: "The simple JS object exposed to the marketing team for easy input." },
      { src: "/img-projects/SEO Banner/rendered-ui.webp", caption: "The dynamically rendered, fully responsive UI output." },
      { src: "/img-projects/SEO Banner/mobile-view.webp", caption: "Flexbox automatically handling the responsive breakpoint for mobile users." }
    ]
  },
  {
    id: "Brand-Partnership-Giveaway-Portals",
    category: ["Frontend", "Lead Generation"],
    title: "High-Converting Brand Partnership & Giveaway Portals",
    description: "Architected a scalable landing page template for high-profile brand giveaways (Samsung, Toronto Maple Leafs) that directly integrated with CRM pipelines to drive email subscriber growth.",
    image: "/img-projects/giveaways-thumbnail.jpg", // Update with your actual image path
    technologies: ["JavaScript", "Listrak CRM", "CSS3", "HTML5"],
    
    // Case Study Fields
    role: "Front-End Developer",
    techStack: "Vanilla JS, Form Validation Regex, CSS Animations, Listrak API integration",
    timeline: "Ongoing Campaigns",
    client: "Leon's Furniture Company & Various Brand Partners",
    
    challenge: "Marketing required highly engaging, branded landing pages for major giveaway campaigns in partnership with brands like Samsung and the Toronto Maple Leafs. These pages needed to securely capture user data, integrate seamlessly into our Listrak email subscriber base, support bilingual audiences, and strictly adhere to regional contest laws (e.g., restricting Quebec entries) without creating a massive development bottleneck for each new campaign.",
    
    solution: "I developed a highly flexible, reusable landing page architecture. The core framework handles complex business logic: client-side Regex data sanitization, dynamic bilingual DOM translation based on the user's browser state, and a programmatic geofencing script that checks a user's pricing zone to automatically redirect non-eligible regions. The form securely posts sanitized entrant data directly to the Listrak CRM, automatically tagging them for targeted onboarding newsletters. Visually, the template uses CSS variables to easily swap out brand colors and injects animated countdown timers and social media engagement incentives.",
    
    results: [
      "Successfully processed thousands of entries for high-traffic campaigns including the Toronto Maple Leafs '$2500 Fan Cave' and Samsung promos.",
      "Significantly grew the marketing email database by seamlessly piping new entrants into the Listrak CRM new-subscriber pipeline.",
      "Ensured legal compliance by writing custom scripts to geofence and redirect ineligible users based on regional pricing zones.",
      "Reduced development time for future campaigns by creating a standardized, theme-able template with built-in accessibility and localization."
    ],
    demo: "", 
    code: "", 
    videoSrc: "", 
    sourceImages: [
      // Suggestion: Show the variety of the campaigns to prove reusability!
      { src: "/img-projects/Giveaways/maple-leafs-ui.webp", caption: "The Toronto Maple Leafs 'Bring Home the Passion' campaign UI." },
      { src: "/img-projects/Giveaways/samsung-ui.webp", caption: "The template adapted for the Samsung promotional partnership." },
      { src: "/img-projects/Giveaways/exp-realty-ui.webp", caption: "The B2B adaptation for the EXP Realty campaign." },
      { src: "/img-projects/Giveaways/form-validation-code.webp", caption: "Custom Regex validation and localized error handling." },
      { src: "/img-projects/Giveaways/geofence-code.webp", caption: "The geofencing logic used to restrict ineligible regional entries." }
    ]
  },
  {
    id: "Algolia-Product-Scraper-Bookmarklet",
    category: ["Frontend", "Automation Tool", "Data Extraction"],
    title: "Algolia Collection Scraper & Data Exporter",
    description: "Developed a custom JavaScript bookmarklet that automates the extraction of product data from Algolia-powered ecommerce collection pages, saving hours of manual data entry for promotional campaigns.",
    image: ProductDataExtractor.src, // Update with your actual image path
    technologies: ["JavaScript (ES6+)", "DOM Manipulation", "Regex", "Blob API"],
    
    // Case Study Fields
    role: "Front-End Developer / Automation Engineer",
    techStack: "Vanilla JS, Bookmarklet (IIFE), Algolia Search",
    timeline: "1 Week",
    client: "Leon's Furniture Company",
    
    challenge: "Native Shopify lacks the granularity to easily filter products for complex promotional campaigns (e.g., specific brand inclusions/exclusions). While our Algolia search integration could visually filter these products on the front end, the marketing team needed the underlying Product IDs to bulk-tag them in the backend (via Matrixify). The existing process required downloading a 76,000-product CSV and manually filtering it in Excel, which was incredibly tedious, slow, and prone to human error.",
    
    solution: "I built a lightweight Vanilla JS scraper packaged as a browser bookmarklet.  Instead of wrangling massive backend exports, merchandising colleagues can simply navigate to any visually filtered Algolia collection page and click the bookmarklet. The script automatically handles the pagination and infinite scrolling, parses the DOM using Regex to extract hidden product data (IDs, SKUs, prices, ratings), and compiles it.  Finally, it leverages the browser's Blob API to instantly generate both a downloadable CSV and a JSON array in the console.",
    
    results: [
      "Reduced a multi-hour manual data filtering process down to a few minutes.",
      "Packaged the script as a one-click bookmarklet, making complex data extraction fully accessible to non-technical merchandising teams.",
      "Successfully handled asynchronous DOM updates (infinite scrolling) to accurately scrape 1000+ products in a single session.",
      "Streamlined promotional tagging workflows by directly outputting Matrixify-ready Product IDs."
    ],
    demo: "", // N/A for an internal tool
    code: "", // N/A, but you could link to a GitHub gist of the un-minified code!
    videoTitle: "Algolia Product Scraper - Workflow Demo",
    videoSrc: "/public/video-projects/Product Data Extractor/Product Data Extractor.mp4",
    sourceImages: [
      // Suggestion: Show the workflow
      { src: "/public/img-projects/Product Data Extractor/Bookmarklet Prep.webp", caption: "Code gets minified and packaged into a bookmarklet for ease of use for non-developers." },
      { src: "/public/img-projects/Product Data Extractor/Extractor Tool UI.webp", caption: "The custom UI injected by the bookmarklet tracks scraping progress and notifies the user when complete." },
      { src: "/public/img-projects/Product Data Extractor/logging Data.webp", caption: "Product data gets output to the browser console for quick use or a generated CSV, formatted perfectly for backend Matrixify imports." }
    ]
  },
  {
    title: "HTML Generator",
    description:
      "E-commerce full stack desarrollado con React, Node.js y MongoDB. Incluye autenticación, carrito de compras, búsqueda, categorías, reseñas, etc.",
    image: ReactEcommerce.src,
    technologies: ["React", "Tailwind", "Express", "MongoDB"],
    demo: "https://react-e-commerce-three-phi.vercel.app",
    code: "https://github.com/Lautaro-R-collins/React-E-commerce.git",
    category: "frontend",
    id: "html-generator",
    // New Case Study Fields
    role: "Lead Developer",
    timeline: "4 Months",
    client: "Leon's Furniture",
    challenge: "The platform was experiencing a 15% drop in organic traffic due to unmanaged 404 errors and poor metadata structure after a migration.",
    solution: "I implemented a Python script to automate redirect mapping for 5,000+ URLs and restructured the Liquid theme to dynamically generate meta tags based on inventory status.",
    results: [
      "Recovered 6.27M annual organic sessions.",
      "Reduced 404 errors by 98% within the first month.",
      "Improved average page load speed by 1.2 seconds."
    ]
  },
  {
    title: "Astro Ecommerce",
    description:
      "E-commerce frontend desarrollado con Astro y React. Incluye carrito de compras, categorías, y diseño responsivo.",
    image: AstroEcommers.src,
    technologies: ["React", "Astro", "Tailwind", "daisyUI"],
    demo: "https://e-commer-astro.vercel.app",
    code: "https://github.com/Lautaro-R-collins/E-commer-Astro.git",
    category: "frontend",
    id: "a",
    // New Case Study Fields
    role: "Lead Developer",
    timeline: "4 Months",
    client: "Leon's Furniture",
    challenge: "The platform was experiencing a 15% drop in organic traffic due to unmanaged 404 errors and poor metadata structure after a migration.",
    solution: "I implemented a Python script to automate redirect mapping for 5,000+ URLs and restructured the Liquid theme to dynamically generate meta tags based on inventory status.",
    results: [
      "Recovered 6.27M annual organic sessions.",
      "Reduced 404 errors by 98% within the first month.",
      "Improved average page load speed by 1.2 seconds."
    ]
  },
  {
    title: "App organizacion",
    description:
      "App full-stack con funciones CRUD, creacion de tableros y listas, autentificacion de usuarios, desarrollada con MERN stack.",
    image: imgNote.src,
    technologies: ["React", "Tailwind", "Express", "MongoDB"],
    demo: "https://front-react-todo.onrender.com",
    code: "https://github.com/Lautaro-R-collins/Front-react-todo",
    category: "fullstack",
    id: "b",
    // New Case Study Fields
    role: "Lead Developer",
    timeline: "4 Months",
    client: "Leon's Furniture",
    challenge: "The platform was experiencing a 15% drop in organic traffic due to unmanaged 404 errors and poor metadata structure after a migration.",
    solution: "I implemented a Python script to automate redirect mapping for 5,000+ URLs and restructured the Liquid theme to dynamically generate meta tags based on inventory status.",
    results: [
      "Recovered 6.27M annual organic sessions.",
      "Reduced 404 errors by 98% within the first month.",
      "Improved average page load speed by 1.2 seconds."
    ]
  },
  {
    title: "CV Builder",
    description:
      "Generador de Currículum multi-idioma profesional siguiendo el formato recomendado por Harvard y amigable con los ATS. ",
    image: CvBuilder.src,
    technologies: ["React", "contextAPI", "tailwind", "i18n"],
    demo: "https://cv-builder-pi-three.vercel.app",
    code: "https://github.com/Lautaro-R-collins/CV-Builder.git",
    category: "frontend",
    id: "c",
    // New Case Study Fields
    role: "Lead Developer",
    timeline: "4 Months",
    client: "Leon's Furniture",
    challenge: "The platform was experiencing a 15% drop in organic traffic due to unmanaged 404 errors and poor metadata structure after a migration.",
    solution: "I implemented a Python script to automate redirect mapping for 5,000+ URLs and restructured the Liquid theme to dynamically generate meta tags based on inventory status.",
    results: [
      "Recovered 6.27M annual organic sessions.",
      "Reduced 404 errors by 98% within the first month.",
      "Improved average page load speed by 1.2 seconds."
    ]
  },
  {
    title: "E-commerce Urban Style",
    description:
      "E-commerce funcional de ropa y accesorios, con carrito de compras categorys y pasarela de pago desarrollado en React.",
    image: urbanStyle.src,
    technologies: ["React", "Tailwind", "Firebase"],
    demo: "https://proyecto-final-rodriguez-sable.vercel.app/",
    code: "https://github.com/Lautaro-R-collins/ProyectoFinal-Rodriguez.git",
    category: "fullstack",
    id: "d",
    // New Case Study Fields
    role: "Lead Developer",
    timeline: "4 Months",
    client: "Leon's Furniture",
    challenge: "The platform was experiencing a 15% drop in organic traffic due to unmanaged 404 errors and poor metadata structure after a migration.",
    solution: "I implemented a Python script to automate redirect mapping for 5,000+ URLs and restructured the Liquid theme to dynamically generate meta tags based on inventory status.",
    results: [
      "Recovered 6.27M annual organic sessions.",
      "Reduced 404 errors by 98% within the first month.",
      "Improved average page load speed by 1.2 seconds."
    ]
  },
  {
    title: "Tienda Artesana",
    description:
      "Ecommerce Full-Stack para ver, comprar y vender tus productos, con login para usuarios y vendedores.",
    image:
      "https://i.pinimg.com/736x/c9/70/bf/c970bfbc24489e39418b2c1b1f8f74ef.jpg",
    technologies: ["React", "Node", "Express", "MongoDB"],
    demo: "https://c21-05-ft-node-react-mirror-frontend-64qbwssi2-muyvisual.vercel.app/",
    code: "https://github.com/No-Country-simulation/c21-05-ft-node-react",
    category: "fullstack",
    id: "e",
    // New Case Study Fields
    role: "Lead Developer",
    timeline: "4 Months",
    client: "Leon's Furniture",
    challenge: "The platform was experiencing a 15% drop in organic traffic due to unmanaged 404 errors and poor metadata structure after a migration.",
    solution: "I implemented a Python script to automate redirect mapping for 5,000+ URLs and restructured the Liquid theme to dynamically generate meta tags based on inventory status.",
    results: [
      "Recovered 6.27M annual organic sessions.",
      "Reduced 404 errors by 98% within the first month.",
      "Improved average page load speed by 1.2 seconds."
    ]
  },
  // {
  //   title: "Traker Ingresos-Gastos",
  //   description:
  //     "App que realiza operaciones CRUD para agregar, ver, editar y eliminar ingresos/gastos.",
  //   image:
  //     "https://i.pinimg.com/736x/a4/85/c4/a485c4da3e78f4f518ddbcdb6637bacf.jpg",
  //   technologies: ["React", "contextAPI"],
  //   demo: "https://traker-gastos-ingresos.onrender.com/",
  //   code: "https://github.com/Lautaro-R-collins/Traker-Gastos-Ingresos",
  //   category: "frontend",
  //   id: "",
  //   // New Case Study Fields
  //   role: "Lead Developer",
  //   timeline: "4 Months",
  //   client: "Leon's Furniture",
  //   challenge: "The platform was experiencing a 15% drop in organic traffic due to unmanaged 404 errors and poor metadata structure after a migration.",
  //   solution: "I implemented a Python script to automate redirect mapping for 5,000+ URLs and restructured the Liquid theme to dynamically generate meta tags based on inventory status.",
  //   results: [
  //     "Recovered 6.27M annual organic sessions.",
  //     "Reduced 404 errors by 98% within the first month.",
  //     "Improved average page load speed by 1.2 seconds."
  //   ]
  // },
  // {
  //   title: "App-clima",
  //   description:
  //     "Aplicación hecha con React que utiliza una API para mostrar el clima en tiempo real.",
  //   image:
  //     "https://i.pinimg.com/736x/10/6e/cd/106ecd1bfe5ed1c3defb83ea0f87a334.jpg",
  //   technologies: ["React", "contextAPI", "tailwind"],
  //   demo: "https://app-clima-om19.onrender.com/",
  //   code: "https://github.com/Lautaro-R-collins/app-clima",
  //   category: "frontend",
  //   id: "",
  //   // New Case Study Fields
  //   role: "Lead Developer",
  //   timeline: "4 Months",
  //   client: "Leon's Furniture",
  //   challenge: "The platform was experiencing a 15% drop in organic traffic due to unmanaged 404 errors and poor metadata structure after a migration.",
  //   solution: "I implemented a Python script to automate redirect mapping for 5,000+ URLs and restructured the Liquid theme to dynamically generate meta tags based on inventory status.",
  //   results: [
  //     "Recovered 6.27M annual organic sessions.",
  //     "Reduced 404 errors by 98% within the first month.",
  //     "Improved average page load speed by 1.2 seconds."
  //   ]
  // },
  // {
  //   title: "Portfolio developers astro",
  //   description:
  //     "This is a modern, responsive developer portfolio built with Astro and Tailwind CSS.",
  //   image: PortfolioDev.src,
  //   technologies: ["Astro", "tailwind", "JavaScript"],
  //   demo: "https://portfolio-developers-astro.vercel.app/",
  //   code:
  //     "https://github.com/Lautaro-R-collins/Portfolio-developers-astro.git",
  //   category: "frontend",
  //   id: "",
  //   // New Case Study Fields
  //   role: "Lead Developer",
  //   timeline: "4 Months",
  //   client: "Leon's Furniture",
  //   challenge: "The platform was experiencing a 15% drop in organic traffic due to unmanaged 404 errors and poor metadata structure after a migration.",
  //   solution: "I implemented a Python script to automate redirect mapping for 5,000+ URLs and restructured the Liquid theme to dynamically generate meta tags based on inventory status.",
  //   results: [
  //     "Recovered 6.27M annual organic sessions.",
  //     "Reduced 404 errors by 98% within the first month.",
  //     "Improved average page load speed by 1.2 seconds."
  //   ]
  // },

  // {
  //   title: "Legal Staff",
  //   description:
  //     "Web desarrollada con Astro y Tailwind, embudo de marketing para estudios jurídicos.",
  //   image: legalWeb.src,
  //   technologies: ["Astro", "tailwind", "JavaScript"],
  //   demo: "https://legal-staff.vercel.app/",
  //   code: "https://github.com/Lautaro-R-collins/legal-staff",
  //   category: "frontend",
  //   id: "",
  //   // New Case Study Fields
  //   role: "Lead Developer",
  //   timeline: "4 Months",
  //   client: "Leon's Furniture",
  //   challenge: "The platform was experiencing a 15% drop in organic traffic due to unmanaged 404 errors and poor metadata structure after a migration.",
  //   solution: "I implemented a Python script to automate redirect mapping for 5,000+ URLs and restructured the Liquid theme to dynamically generate meta tags based on inventory status.",
  //   results: [
  //     "Recovered 6.27M annual organic sessions.",
  //     "Reduced 404 errors by 98% within the first month.",
  //     "Improved average page load speed by 1.2 seconds."
  //   ]
  // },
  // {
  //   title: "Medicare",
  //   description:
  //     "Web desarrollada con Astro y Tailwind, embudo de marketing para Obras Sociales.",
  //   image: mediCare.src,
  //   technologies: ["Astro", "tailwind", "JavaScript"],
  //   demo: "https://obra-social-landing.vercel.app/",
  //   code: "https://github.com/Lautaro-R-collins/obra-social-landing.git",
  //   category: "frontend",
  //   id: "",
  //   // New Case Study Fields
  //   role: "Lead Developer",
  //   timeline: "4 Months",
  //   client: "Leon's Furniture",
  //   challenge: "The platform was experiencing a 15% drop in organic traffic due to unmanaged 404 errors and poor metadata structure after a migration.",
  //   solution: "I implemented a Python script to automate redirect mapping for 5,000+ URLs and restructured the Liquid theme to dynamically generate meta tags based on inventory status.",
  //   results: [
  //     "Recovered 6.27M annual organic sessions.",
  //     "Reduced 404 errors by 98% within the first month.",
  //     "Improved average page load speed by 1.2 seconds."
  //   ]
  // },
  // {
  //   title: "AstroFit",
  //   description:
  //     "Web desarrollada con Astro y Tailwind, embudo de marketing para asesorias fitness.",
  //   image: astroFit.src,
  //   technologies: ["Astro", "tailwind", "JavaScript"],
  //   demo: "https://gym-page-sandy.vercel.app/",
  //   code: "https://github.com/Lautaro-R-collins/GymPage.git",
  //   category: "frontend",
  //   id: "",
  //   // New Case Study Fields
  //   role: "Lead Developer",
  //   timeline: "4 Months",
  //   client: "Leon's Furniture",
  //   challenge: "The platform was experiencing a 15% drop in organic traffic due to unmanaged 404 errors and poor metadata structure after a migration.",
  //   solution: "I implemented a Python script to automate redirect mapping for 5,000+ URLs and restructured the Liquid theme to dynamically generate meta tags based on inventory status.",
  //   results: [
  //     "Recovered 6.27M annual organic sessions.",
  //     "Reduced 404 errors by 98% within the first month.",
  //     "Improved average page load speed by 1.2 seconds."
  //   ]
  // },
  // {
  //   title: "API REST para Ecommerce",
  //   description:
  //     "API RESTful construida con Node.js, Express y MongoDB para gestionar tareas con operaciones CRUD, Registro de usuarios y login con JWT.",
  //   image: "https://miro.medium.com/1*47S4iWVwTicFkFL4-Z4uAA.png",
  //   technologies: ["Express", "Node.js", "MongoDB", "Mongoose"],
  //   demo: "https://react-e-commerce-three-phi.vercel.app",
  //   code: "https://github.com/Lautaro-R-collins/ApiRest-Ecommerce.git",
  //   category: "backend",
  //   id: "",
  //   // New Case Study Fields
  //   role: "Lead Developer",
  //   timeline: "4 Months",
  //   client: "Leon's Furniture",
  //   challenge: "The platform was experiencing a 15% drop in organic traffic due to unmanaged 404 errors and poor metadata structure after a migration.",
  //   solution: "I implemented a Python script to automate redirect mapping for 5,000+ URLs and restructured the Liquid theme to dynamically generate meta tags based on inventory status.",
  //   results: [
  //     "Recovered 6.27M annual organic sessions.",
  //     "Reduced 404 errors by 98% within the first month.",
  //     "Improved average page load speed by 1.2 seconds."
  //   ]
  // },
  // {
  //   title: "API REST Vintage Tone App",
  //   description:
  //     "API RESTful construida con Node.js, Express y MongoDB para gestionar tareas con operaciones CRUD, Registro de usuarios y login con JWT.",
  //   image: "https://miro.medium.com/1*47S4iWVwTicFkFL4-Z4uAA.png",
  //   technologies: ["Express", "Node.js", "MongoDB", "Cloudinary"],
  //   demo: "https://vintage-tone-front-vue.vercel.app",
  //   code: "https://github.com/Lautaro-R-collins/VintageTone-API-REST.git",
  //   category: "backend",
  //   id: "",
  //   // New Case Study Fields
  //   role: "Lead Developer",
  //   timeline: "4 Months",
  //   client: "Leon's Furniture",
  //   challenge: "The platform was experiencing a 15% drop in organic traffic due to unmanaged 404 errors and poor metadata structure after a migration.",
  //   solution: "I implemented a Python script to automate redirect mapping for 5,000+ URLs and restructured the Liquid theme to dynamically generate meta tags based on inventory status.",
  //   results: [
  //     "Recovered 6.27M annual organic sessions.",
  //     "Reduced 404 errors by 98% within the first month.",
  //     "Improved average page load speed by 1.2 seconds."
  //   ]
  // },
  // {
  //   title: "API REST",
  //   description:
  //     "API RESTful construida con Express y MongoDB para gestionar tareas con operaciones CRUD, Registro de usuarios y login con JWT.",
  //   image: "https://miro.medium.com/1*47S4iWVwTicFkFL4-Z4uAA.png",
  //   technologies: ["Express", "Node.js", "MongoDB", "Mongoose"],
  //   demo: "https://back-express-todo.onrender.com",
  //   code: "https://github.com/Lautaro-R-collins/Back-express-todo.git",
  //   category: "backend",
  //   id: "",
  //   // New Case Study Fields
  //   role: "Lead Developer",
  //   timeline: "4 Months",
  //   client: "Leon's Furniture",
  //   challenge: "The platform was experiencing a 15% drop in organic traffic due to unmanaged 404 errors and poor metadata structure after a migration.",
  //   solution: "I implemented a Python script to automate redirect mapping for 5,000+ URLs and restructured the Liquid theme to dynamically generate meta tags based on inventory status.",
  //   results: [
  //     "Recovered 6.27M annual organic sessions.",
  //     "Reduced 404 errors by 98% within the first month.",
  //     "Improved average page load speed by 1.2 seconds."
  //   ]
  // },
  // {
  //   title: "PlaniFy",
  //   description:
  //     "App Web para organizar tus proyectos, hecha con React + Vite, TypeScript y Tailwind para los estilos.",
  //   image:
  //     "https://i.pinimg.com/736x/8f/f0/bb/8ff0bbd0e5844ed254bede44522c8338.jpg",
  //   technologies: ["React", "Vite", "TypeScript", "Tailwind"],
  //   demo: "https://planify-1tu6.onrender.com/",
  //   code: "https://github.com/Lautaro-R-collins/PlaniFy-organization-app",
  //   category: "frontend",
  //   id: "",
  //   // New Case Study Fields
  //   role: "Lead Developer",
  //   timeline: "4 Months",
  //   client: "Leon's Furniture",
  //   challenge: "The platform was experiencing a 15% drop in organic traffic due to unmanaged 404 errors and poor metadata structure after a migration.",
  //   solution: "I implemented a Python script to automate redirect mapping for 5,000+ URLs and restructured the Liquid theme to dynamically generate meta tags based on inventory status.",
  //   results: [
  //     "Recovered 6.27M annual organic sessions.",
  //     "Reduced 404 errors by 98% within the first month.",
  //     "Improved average page load speed by 1.2 seconds."
  //   ]
  // },
  // {
  //   title: "Verbenas Paisajes",
  //   description:
  //     "Pagina estatica desarrollada con Astro y tailwind como reto para una startup.",
  //   image: Verbenas.src,
  //   technologies: ["Astro", "Tailwind", "JavaScript"],
  //   demo: "https://challenge-neowyze.onrender.com/",
  //   code: "https://github.com/Lautaro-R-collins/challenge-Neowyze.git",
  //   category: "frontend",
  //   id: "",
  //   // New Case Study Fields
  //   role: "Lead Developer",
  //   timeline: "4 Months",
  //   client: "Leon's Furniture",
  //   challenge: "The platform was experiencing a 15% drop in organic traffic due to unmanaged 404 errors and poor metadata structure after a migration.",
  //   solution: "I implemented a Python script to automate redirect mapping for 5,000+ URLs and restructured the Liquid theme to dynamically generate meta tags based on inventory status.",
  //   results: [
  //     "Recovered 6.27M annual organic sessions.",
  //     "Reduced 404 errors by 98% within the first month.",
  //     "Improved average page load speed by 1.2 seconds."
  //   ]
  // },

  // {
  //   title: "100 days coding in Js",
  //   description: "100 proyectos, realizados con HTML, CSS y JavaScript.",
  //   image:
  //     "https://i.pinimg.com/736x/3b/4f/4e/3b4f4e170fcb1795b88f4941f49df0a2.jpg",
  //   technologies: ["Next.js", "Tailwind", "GraphQL"],
  //   demo: "https://one00-proyects-web.onrender.com/",
  //   code: "https://github.com/Lautaro-R-collins/100-days-of-coding-in-JS",
  //   category: "frontend",
  //   id: "",
  //   // New Case Study Fields
  //   role: "Lead Developer",
  //   timeline: "4 Months",
  //   client: "Leon's Furniture",
  //   challenge: "The platform was experiencing a 15% drop in organic traffic due to unmanaged 404 errors and poor metadata structure after a migration.",
  //   solution: "I implemented a Python script to automate redirect mapping for 5,000+ URLs and restructured the Liquid theme to dynamically generate meta tags based on inventory status.",
  //   results: [
  //     "Recovered 6.27M annual organic sessions.",
  //     "Reduced 404 errors by 98% within the first month.",
  //     "Improved average page load speed by 1.2 seconds."
  //   ]
  // },
];
