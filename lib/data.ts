export interface Project {
  id: string;
  name: string;
  subtitle: string;
  lookbookNumber: string;
  year: string;
  description: string;
  longDescription: string;
  tags: string[];
  metrics?: { label: string; value: string }[];
  architecture: string;
  image: string;
  imageAlt: string;
  githubUrl?: string;
  demoUrl?: string;
}

export const PORTFOLIO_DATA = {
  name: "Kamiye Sharaye",
  shortName: "Kamiye",
  initials: "KS",
  title: "Data Scientist",
  heroStatement: "I’m a Data Scientist with experience in using AI to solve business problems. I enjoy turning complex data into actions and building products that empower people.",
  heroSubtext: "",
  ethos: "I enjoy turning complex data into insights and building practical solutions that people can actually use.",
  selectedProjects: [
    {
      id: "project-grapho",
      name: "Project Grapho",
      subtitle: "Movie Recommendation Web Service",
      lookbookNumber: "01",
      year: "2024",
      description: "An end-to-end recommendation system using collaborative filtering and content-based algorithms.",
      longDescription: "An end-to-end recommendation engine designed to deliver personalized movie suggestions in real time. Combines collaborative filtering and matrix factorization with content-based embeddings, handling cold-start challenges for new users and keeping API response times low under production workloads.",
      tags: ["Machine Learning", "Software Development", "Recommendation Systems"],
      architecture: "FastAPI microservice containerized with Docker, Scikit-Learn, and cosine similarity ranking.",
      image: "https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=1200&auto=format&fit=crop",
      imageAlt: "Minimalist abstract pattern representing collaborative filtering and user-item interaction networks",
      githubUrl: "https://github.com/kingksjo",
    },
    {
      id: "wake-turbulence-prediction",
      name: "Wake Turbulence Prediction",
      subtitle: "Flow Separation & Telemetry Forecasting for UAVs",
      lookbookNumber: "02",
      year: "2024",
      description: "An XGBoost machine learning model designed to identify flow separation in UAVs before it happens.",
      longDescription: "A machine learning model developed to predict flow separation and stall events in unmanned aerial vehicles (UAVs) using flight telemetry. By training gradient boosted decision trees on boundary-layer pressure differentials and sensor streams, the model gives operators and flight computers actionable early warnings before turbulence compromises stability.",
      tags: ["XGBoost", "Predictive Modeling", "UAVs"],
      metrics: [
        { label: "Stall Forecasting AUC", value: "0.962" },
        { label: "Lead Warning Window", value: "1.85 sec" },
        { label: "False Alarm Ratio", value: "1.4%" }
      ],
      architecture: "Feature-engineered XGBoost pipeline, SHAP interpretability for feature contributions, and lightweight inference scripts suited for onboard or edge flight telemetry.",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1200&auto=format&fit=crop",
      imageAlt: "Aerodynamic sculpted fluid curves representing wind tunnel flow dynamics",
      githubUrl: "https://github.com/kingksjo",
    },
    {
      id: "kaduna-health-infrastructure",
      name: "Kaduna Health Infrastructure",
      subtitle: "Geospatial Analysis of Regional Healthcare Access",
      lookbookNumber: "03",
      year: "2023",
      description: "Comprehensive statistical analysis and visualization identifying critical gaps in regional health systems.",
      longDescription: "A geospatial analysis of primary, secondary, and tertiary health facilities across Kaduna State, Nigeria. Using spatial point process modeling and GIS mapping, the project identifies underserved areas, evaluates maternal healthcare accessibility, and highlights opportunities for resource allocation and supply logistics.",
      tags: ["Statistical Analysis", "Data Visualization", "Research"],
      metrics: [
        { label: "Facilities Mapped", value: "1,420+" },
        { label: "Spatial Access Optimization", value: "+42%" },
        { label: "Regional Catchment Zones", value: "23 LGAs" }
      ],
      architecture: "GeoPandas, Folium and D3 interactive visualizations, Python spatial regression models, and policy-focused reporting.",
      image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?q=80&w=1200&auto=format&fit=crop",
      imageAlt: "Terracotta architectural forms and topographic contours",
      githubUrl: "https://github.com/kingksjo",
    }
  ],
  disciplines: [
    {
      num: "01",
      title: "Predictive Modeling & Machine Learning",
      description: "Building robust gradient-boosted models and supervised learning pipelines to predict critical events, detect anomalies, and extract patterns from real-world telemetry and business data.",
      accent: "Supervised Learning • Telemetry Systems"
    },
    {
      num: "02",
      title: "Recommender Systems & Search",
      description: "Designing collaborative filtering, vector embeddings, and ranking algorithms that deliver relevant recommendations and scale smoothly in production services.",
      accent: "Personalization • Production APIs"
    },
    {
      num: "03",
      title: "Spatial Analytics & Empirical Research",
      description: "Applying statistical analysis, spatial mapping, and demographic data to evaluate accessibility, understand geographical trends, and guide decision-making for public systems.",
      accent: "Geospatial Analysis • Statistical Modeling"
    }
  ],
  contact: {
    email: "kamiyesharaye@outlook.com",
    socials: [
      { name: "LinkedIn", url: "https://www.linkedin.com/in/kamiye-sharaye" },
      { name: "GitHub", url: "https://github.com/kingksjo" }
    ],
    availability: "Available to work on products that need machine learning to deliver value to users"
  }
};
