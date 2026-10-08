export interface Project {
  id: string;
  name: string;
  subtitle: string;
  lookbookNumber: string;
  year: string;
  description: string;
  longDescription: string;
  tags: string[];
  disciplines: string[];
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
      disciplines: ["Machine Learning", "Software Engineering"],
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
      disciplines: ["Machine Learning"],
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
      disciplines: ["Machine Learning", "Software Engineering"],
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
  projectsSection: {
    eyebrow: "Projects",
    title: "Work I've done",
    intro: "Some projects i've worked on and contributed to",
    filters: ["All", "Machine Learning", "AI Engineering", "Software Engineering"]
  },
  projectsSummary: {
    work: {
      label: "Work I've done",
      text: "Recommender systems, a flight-safety forecasting model, and a geospatial health access study, each taken from data to deployable output."
    },
    value: {
      label: "How I've provided value",
      text: "Stall forecasts at 0.962 AUC with a 1.4% false alarm ratio, +42% spatial access optimization, and 1,420+ facilities mapped for planning."
    }
  },
  disciplinesSection: {
    eyebrow: "Disciplines",
    title: "What I can do",
    intro: "Three areas I work across, from models to products that people use."
  },
  disciplines: [
    {
      num: "01",
      title: "Machine Learning",
      description: "I build and evaluate AI models for prediction, classification, and personalization, from optimizing telemetry data to NLP classifiers and recommender systems, measured against real-world performance.",
      capabilities: ["Predictive Modeling", "NLP", "Recommendation Systems", "Semantic Search"]
    },
    {
      num: "02",
      title: "AI Engineering",
      description: "I design and ship systems built on large language models, like RAG systems, Agents, and evaluation harnesses. So generative AI works reliably inside real products and workflows.",
      capabilities: ["RAG Systems", "Fine-Tuning", "Agent Harness Engineering", "AI Eval Design and Analysis"]
    },
    {
      num: "03",
      title: "Software Engineering",
      description: "I write production software around data, pipelines that move and transform it, APIs and dashboards that serve it — packaged in containers and deployed on cloud platforms.",
      capabilities: ["Python & SQL", "Data Pipelines", "APIs & Dashboards", "Docker & Cloud"]
    }
  ],
  contact: {
    email: "kamiyesharaye@outlook.com",
    socials: [
      { name: "LinkedIn", url: "https://www.linkedin.com/in/kamiye-sharaye" },
      { name: "GitHub", url: "https://github.com/kingksjo" }
    ],
    availability: "Available to work on products that need AI to deliver value to users"
  }
};
