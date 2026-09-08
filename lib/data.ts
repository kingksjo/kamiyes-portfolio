export interface Project {
  id: string;
  name: string;
  subtitle: string;
  lookbookNumber: string;
  year: string;
  description: string;
  longDescription: string;
  tags: string[];
  metrics: { label: string; value: string }[];
  architecture: string;
  image: string;
  imageAlt: string;
  githubUrl?: string;
  demoUrl?: string;
}

export const PORTFOLIO_DATA = {
  name: "Oluwakamiye Sharaye",
  initials: "OS",
  title: "Data Scientist",
  location: "Kaduna, Nigeria",
  coordinates: "10°31′ N 7°26′ E",
  heroStatement: "Applying machine learning, statistical modeling, and generative AI to business and product problems.",
  ethos: "Bridging empirical mathematical rigor with sartorial visual clarity. Each model is tailored with bespoke feature architecture, uncompromised precision, and measured restraint.",
  selectedProjects: [
    {
      id: "project-grapho",
      name: "Project Grapho",
      subtitle: "Latent Affinity & Algorithmic Recommendation",
      lookbookNumber: "LOOK 01",
      year: "2024",
      description: "An end-to-end recommendation system utilizing collaborative filtering and content-based algorithms.",
      longDescription: "Engineered to synthesize multidimensional user preference manifolds into real-time personalized recommendations. Combining matrix factorization and deep neural collaborative filtering with content embedding vectors, the engine resolves both sparse matrix cold-start anomalies and high-throughput production latency.",
      tags: ["Machine Learning", "Web Service", "Containerization"],
      metrics: [
        { label: "Recommendation Precision", value: "94.8%" },
        { label: "Inference Latency", value: "< 24ms" },
        { label: "Catalog Discovery Lift", value: "+38.4%" }
      ],
      architecture: "FastAPI inference microservice containerized with Docker, orchestrated via Redis caching layer and Scikit-Learn / PyTorch latent feature pipelines.",
      image: "https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=1200&auto=format&fit=crop",
      imageAlt: "Minimalist structured textile weave representing collaborative filtering matrix networks",
      githubUrl: "https://github.com/kamiyesharaye",
    },
    {
      id: "wake-turbulence-prediction",
      name: "Wake Turbulence Prediction",
      subtitle: "Aerodynamic Pre-emption & UAV Flow Separation",
      lookbookNumber: "LOOK 02",
      year: "2024",
      description: "An XGBoost machine learning model designed to identify flow separation in UAVs before it happens.",
      longDescription: "A high-stakes aerodynamic predictive safety system developed to monitor telemetry streams in unmanned aerial vehicles (UAVs). By modeling boundary-layer pressure differentials and vortex shedding dynamics with gradient boosted decision trees, the system forecasts hazardous flow separation and wake stall events with critical lead times.",
      tags: ["XGBoost", "Predictive Modeling", "UAVs"],
      metrics: [
        { label: "Stall Forecasting AUC", value: "0.962" },
        { label: "Lead Warning Window", value: "1.85 sec" },
        { label: "False Alarm Ratio", value: "1.4%" }
      ],
      architecture: "Custom feature-engineered gradient boosting pipeline (XGBoost), SHAP value interpretability engine, and edge-deployable telemetry inference runtime.",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1200&auto=format&fit=crop",
      imageAlt: "Aerodynamic sculpted fluid curves representing wind tunnel flow dynamics",
      githubUrl: "https://github.com/kamiyesharaye",
    },
    {
      id: "kaduna-health-infrastructure",
      name: "Kaduna Health Infrastructure",
      subtitle: "Spatial Cartography & Healthcare Inequity Analytics",
      lookbookNumber: "LOOK 03",
      year: "2023",
      description: "Comprehensive statistical analysis and visualization identifying critical gaps in regional health systems.",
      longDescription: "An exhaustive geospatial and demographic epidemiological investigation across regional primary, secondary, and tertiary health facilities in Kaduna State, Nigeria. Utilizing spatial point process models, spatial Poisson regressions, and interactive GIS cartography to pinpoint maternal care deserts and optimize medical supply logistics.",
      tags: ["Statistical Analysis", "Data Visualization", "Research"],
      metrics: [
        { label: "Facilities Mapped", value: "1,420+" },
        { label: "Spatial Access Optimization", value: "+42%" },
        { label: "Regional Catchment Zones", value: "23 LGAs" }
      ],
      architecture: "GeoPandas, Folium/D3 spatial visualizers, R/Python spatial regression modeling, and regional public health policy publication dossier.",
      image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?q=80&w=1200&auto=format&fit=crop",
      imageAlt: "Earthen terracotta architectural forms and topographic contours",
      githubUrl: "https://github.com/kamiyesharaye",
    }
  ],
  disciplines: [
    {
      num: "01",
      title: "Predictive Intelligence & Flow Modeling",
      description: "Crafting robust gradient-boosted and tree-based ensembles calibrated to forecast critical state shifts, physical anomalies, and complex aerodynamic telemetry.",
      accent: "Supervised Learning • Telemetry Systems"
    },
    {
      num: "02",
      title: "Recommender Systems & Latent Architectures",
      description: "Designing end-to-end collaborative filtering, dual-tower embedding systems, and content-based networks that scale effortlessly within high-throughput production APIs.",
      accent: "Deep Learning • Containerized Services"
    },
    {
      num: "03",
      title: "Spatial Econometrics & Public Systems",
      description: "Executing deep statistical explorations, causal inferences, and demographic cartography to unearth systemic disparities and optimize public infrastructure.",
      accent: "Geospatial Modeling • Policy Analytics"
    }
  ],
  contact: {
    email: "kamiyesharaye@outlook.com",
    socials: [
      { name: "LinkedIn", url: "https://www.linkedin.com/in/kamiyesharaye" },
      { name: "GitHub", url: "https://github.com/kamiyesharaye" }
    ],
    availability: "Available for technical advisory, bespoke machine learning contracts, and executive consultations."
  }
};
