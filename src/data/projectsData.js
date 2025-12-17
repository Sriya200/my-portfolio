// src/data/projectsData.js
export const projects = [
  {
    id: "netflix",
    title: "Netflix Content & Release Trend Analysis",
    shortTitle: "Netflix Content Analysis",
    short: "Netflix’s content strategy shows clear regional and seasonal patterns, indicating opportunities to optimize release timing and balance Movies vs. TV Shows based on audience demand.",
    long: `Analyzed Netflix’s Movies and TV Shows dataset to uncover trends in content distribution, release patterns, ratings, and regional contributions. Explored yearly and seasonal release trends, country-wise content production, director diversity across content types, and movie duration patterns. Used structured data analysis and visualizations to identify how Netflix’s content strategy has evolved over time and how different regions and creators contribute to its catalog.`,
    imgPath: new URL("../assets/projects/netflix.png", import.meta.url).href,
    links: {
      code_python: "https://github.com/Sriya200/Netflix_content_analysis/blob/main/Netflix_data_analysis.ipynb",
    },
  },
  {
    id: "bumble",
    title: "Bumble User Profile Analysis",
    shortTitle: "Bumble User Profile Analysis",
    short: "Age and lifestyle-based segmentation can be leveraged to deliver more relevant matches and improve overall user engagement.",
    long: `Analyzed Bumble user profile data to uncover demographic, lifestyle, and behavioral patterns on a dating platform. Cleaned and processed real-world data, engineered features like age groups, income brackets, profile completeness, and activity recency, and used exploratory analysis and visualizations to identify trends that support better user segmentation and matchmaking strategies.`,
    imgPath: new URL("../assets/projects/bumble.png", import.meta.url).href,
    links: {
      code_python: "https://github.com/Sriya200/Bumble_profile_analysis/blob/main/bumble_milestone.ipynb",
    },
  },
  {
    id: "swiggy",
    title: "Swiggy Web Traffic & Conversion Analysis",
    shortTitle:"Swiggy Web Traffic & Conversion Analysis",
    short: "While Swiggy receives high traffic, conversions vary significantly by traffic source and device type, highlighting clear opportunities to optimize mobile experience and channel-specific marketing strategies.",
    long: `Built an interactive Tableau dashboard to analyze Swiggy’s website traffic, user engagement, and conversion performance. Tracked key KPIs such as sessions, bounce rate, average session duration, and conversion rate, with drill-downs by traffic source, device type, user type, geography, and time. Designed a story-driven dashboard with filters and funnel views to help marketing teams identify drop-off points, high-performing channels, and opportunities to improve conversion rates and revenue.`,
    imgPath: new URL("../assets/projects/swiggy.png", import.meta.url).href,
    links: {
      tableau: "https://public.tableau.com/views/Swiggybook/Dashboard2?:language=en-US&publish=yes&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link",
    },
  },
   {
    id: "flipkart",
    title: "Flipkart Customer Service & Retention Analysis",
    shortTitle: "Flipkart Customer Service & Retention Analysis",
    short: "Customer satisfaction varies significantly by issue type, response time, and call center location, indicating that targeted service improvements can directly improve retention and loyalty.",
    long: `Analyzed Flipkart’s customer call data to understand how customer service performance impacts customer satisfaction and retention. Defined key metrics and hypotheses, conducted exploratory data analysis in Excel using descriptive statistics, correlation analysis, and pivot tables, and evaluated CSAT trends across channels, issue types, response times, and call center locations. Built interactive dashboards to highlight service gaps and identify operational improvements that can drive higher customer retention.`,
    imgPath: new URL("../assets/projects/flipkart.png", import.meta.url).href,
    links: {
      excel: "https://github.com/Sriya200/Flipkart-Customer-Retention-Service-Analysis-Excel-/blob/main/Flipkart%20Analysis.xlsx",
      report_pdf: "https://github.com/Sriya200/Flipkart-Customer-Retention-Service-Analysis-Excel-/blob/main/Flipkart%20Analysis%20Report.pdf",
    },
  },
   {
    id: "amazon",
    title: "Amazon Brazil Sales & Customer Analysis",
    shortTitle:"Amazon Brazil Sales & Customer Analysis",
    short: "Customer purchase frequency, payment preferences, and seasonal demand patterns reveal clear opportunities for targeted promotions, loyalty programs, and revenue optimization in the Indian market.",
    long: `Analyzed Amazon Brazil’s multi-table e-commerce dataset to extract insights that can inform Amazon India’s growth strategy. Built a PostgreSQL database, designed schemas, and performed advanced SQL analysis using joins, subqueries, CTEs, window functions, and recursive CTEs. Explored customer segmentation, payment behavior, product performance, seasonal sales trends, and revenue growth to identify high-value customers, top-performing categories, and scalable business opportunities.`,
    imgPath: new URL("../assets/projects/amazon.png", import.meta.url).href,
    links: {
      code_sql: "https://github.com/Sriya200/Amazon_data_analysis/blob/main/Amazon_Data_Analysis.sql",
      report_pdf: "https://github.com/Sriya200/Amazon_data_analysis/blob/main/Amazon_Data_Analysis.pdf",
    },
  },
   {
    id: "snapdeal",
    title: "Snapdeal Product & Sales Performance Analysis",
    shortTitle:"Snapdeal Product & Sales Performance Analysis",
    short: "Several high-revenue products operate on thin or negative margins, indicating that pricing and cost optimization—rather than demand—are the biggest levers for improving profitability.",
    long: `Analyzed Snapdeal’s historical sales data to evaluate product, category, and regional performance using SQL and Python. Compared actual sales against targets, identified high-revenue but low-profit products, analyzed customer purchasing behavior across locations, and detected products outperforming their category averages. The analysis highlights key opportunities for inventory optimization, pricing strategy improvements, and targeted promotions to drive higher profitability.`,
    imgPath: new URL("../assets/projects/snapdeal.png", import.meta.url).href,
    links: {
      code_python: "https://github.com/Sriya200/Snapdeal_sales_performance/blob/main/Snapdeal_data_analysis.ipynb",
      code_sql: "https://github.com/Sriya200/Snapdeal_sales_performance/blob/main/Snapdeal_product_data.sql",
      report_pdf: "https://github.com/Sriya200/Snapdeal_sales_performance/blob/main/Snapdeal%20_data_analysis_report.pdf",
    },
  },
    {
    id: "freshmart",
    title: "FreshMart Revenue Optimization & Retail Performance Analysis",
    shortTitle:"FreshMart Revenue Optimization & Retail Performance Analysis",
    short: "Revenue growth is driven more by quantity sold and premium product mix than by aggressive discounting—indicating that inventory prioritization, upselling, and seasonal planning outperform deep discounts as revenue levers.",
    long: `Conducted an end-to-end analysis of FreshMart’s four-month retail sales data to identify key drivers of Total Sales Revenue across products, customers, employees, and regions. Built a unified dataset from multiple sources, engineered revenue metrics, and performed exploratory analysis, correlation studies, and hypothesis testing to evaluate pricing, quantity, discounts, seasonality, and employee performance. Delivered actionable insights through a Jupyter Notebook, Tableau dashboards, and a structured business report to support smarter inventory planning, pricing strategies, and regional growth decisions.`,
    imgPath: new URL("../assets/projects/freshmart.png", import.meta.url).href,
    links: {
      code_python: "https://github.com/Sriya200/Freshmart_revenue_data_analysis/blob/main/FreshMart_revenue_data.ipynb",
      tableau: "https://public.tableau.com/shared/Q7S3F3THY?:display_count=n&:origin=viz_share_link",
      report_pdf: "https://github.com/Sriya200/Freshmart_revenue_data_analysis/blob/main/FreshMart_revenue_data.pdf",
    },
  },
    {
    id: "global",
    title: "Consumer Behavior & Marketing Effectiveness Analysis",
    shortTitle:"Consumer Behavior & Marketing Effectiveness Analysis",
    short: "Customer engagement and campaign effectiveness vary significantly by region, demographics, and purchase channel—indicating that personalized, region-aware marketing strategies outperform broad, one-size-fits-all campaigns.",
    long: `Analyzed multi-channel consumer data to understand customer behavior, spending patterns, and marketing campaign effectiveness for a global retail brand. Conducted exploratory data analysis, feature engineering, and hypothesis-driven statistical analysis to identify drivers of in-store purchases, regional behavior differences, and demographic influences on category-level spending. Evaluated campaign performance and customer profiles to uncover actionable insights that help optimize marketing investments, improve targeting, and increase ROI.`,
    imgPath: new URL("../assets/projects/global.png", import.meta.url).href,
    links: {
      code_python: "https://github.com/Sriya200/Consumer-Spending-Marketing-Effectiveness/blob/main/Marketing_data.ipynb",
    },
  },
    {
    id: "Northwind",
    title: "Northwind Traders Sales Analysis (SQL)",
    shortTitle:"Northwind Traders Sales Analysis (SQL)",
    short: "Sales growth and customer value are driven by a small set of high-performing customers, products, and suppliers—highlighting strong opportunities for targeted promotions, loyalty programs, and focused supplier partnerships.",
    long: `Performed advanced SQL analysis on the Northwind Traders dataset to answer critical business questions across sales, customers, products, suppliers, and employees. Used CTEs, window functions (RANK, DENSE_RANK, LAG, LEAD), and aggregations to identify top-performing products and customers, evaluate supplier contributions, analyze customer reorder behavior, track cumulative sales trends, and surface high-value orders and sales representatives. The analysis delivers actionable insights to support inventory planning, customer engagement, and revenue growth decisions.`,
    imgPath: new URL("../assets/projects/Northwind.png", import.meta.url).href,
    links: {
      code_sql: "https://github.com/Sriya200/Northwind-Traders-Advanced-SQL-Analysis/blob/main/Northwind%20Traders%20Analysis.sql",
      report_pdf: "https://github.com/Sriya200/Northwind-Traders-Advanced-SQL-Analysis/blob/main/Northwind%20Traders%20Analysis%20Report.pdf",
    },
  },
];
