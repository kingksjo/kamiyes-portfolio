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
  githubUrl?: string;
  xUrl?: string;
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
      tags: ["Python", "FastAPI", "scikit-learn", "TF-IDF", "Docker", "TMDb API"],
      disciplines: ["Machine Learning", "Software Engineering"],
      architecture: "FastAPI microservice containerized with Docker, Scikit-Learn, and cosine similarity ranking.",
      githubUrl: "https://github.com/kingksjo/project-grapho",
    },
    {
      id: "wake-turbulence-prediction",
      name: "Wake Turbulence Prediction",
      subtitle: "Classifier for CFD data",
      lookbookNumber: "02",
      year: "2024",
      description: "An XGBoost classifier that predicts whether the flow around an aircraft is attached, near onset of separation, or separated, using simulated aerodynamic data.",
      longDescription: "A repeatable training pipeline for a classifier that reads aerodynamic measurements at a given flight condition and predicts the flow state around the body. The dataset starts from 80 real CFD simulations across a grid of velocity and angle of attack, expanded to 1,057 points with a Gaussian Process surrogate. The labels come from a physics-informed rule rather than measured ground truth, and SHAP is used to check that the learned feature importances match aerodynamic theory.",
      tags: ["XGBoost", "SHAP", "CFD", "Gaussian Process Regression", "Latin Hypercube Sampling"],
      disciplines: ["Machine Learning"],
      metrics: [
        { label: "Training Points (CFD + Surrogate)", value: "1,057" },
        { label: "Surrogate Validation R²", value: "> 0.91" },
        { label: "Real CFD Holdout Points", value: "80" }
      ],
      architecture: "Python pipeline with engineered features (normalized turbulent kinetic energy, lift and drag slopes, lift-to-drag ratio, pressure loading), a 5-fold stratified XGBoost model with class-balanced weights, and an evaluation that holds out the real CFD rows.",
      githubUrl: "https://github.com/kingksjo/predicting-flow-separation",
      xUrl: "https://x.com/king_ksjo/status/2098462018026004734",
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
      githubUrl: "https://github.com/kingksjo/Kaduna-Health-Infrastructure",
    },
    {
      id: "alosphere",
      name: "Alosphere",
      subtitle: "Sports Commentary to Podcast Service",
      lookbookNumber: "04",
      year: "2026",
      description: "A service that turns raw sports commentary transcripts into polished 3–5 minute podcast audio.",
      longDescription: "A Python microservice that autonomously transforms raw sports commentary transcripts into professional-grade podcast audio. It uses Google Gemini to script the episode and Vertex AI to generate the voice, and is built for Cloud Run deployment.",
      tags: ["Generative AI", "Google Gemini", "Vertex AI", "Cloud Run"],
      disciplines: ["AI Engineering", "Software Engineering"],
      architecture: "Python service on Google Gemini and Vertex AI, containerized for Google Cloud Run with a Cloud Build pipeline and a Vercel-hosted frontend.",
      githubUrl: "https://github.com/kingksjo/sports-podcast-service",
      demoUrl: "https://sports-podcast-service.vercel.app",
    },
    {
      id: "fake-news-detector",
      name: "Fake News Detector",
      subtitle: "NLP Classifier for Misleading News",
      lookbookNumber: "05",
      year: "2024",
      description: "An NLP classifier that flags misleading news from writing style, reaching 99.21% test accuracy.",
      longDescription: "A text classification model that labels news articles as real or fake. It compares a headline-only baseline with a model trained on headlines and full article text, cutting classification errors by over 85%. It is a style-checker, not a fact-checker, and is meant to flag suspicious content for review.",
      tags: ["NLP", "scikit-learn", "spaCy", "TF-IDF"],
      disciplines: ["Machine Learning"],
      metrics: [
        { label: "Test Accuracy (Headlines + Text)", value: "99.21%" },
        { label: "Test Accuracy (Headlines Only)", value: "94.25%" },
        { label: "Reduction in Errors", value: "85%+" }
      ],
      architecture: "spaCy lemmatization and stop-word removal, TF-IDF feature engineering, and scikit-learn classifiers, developed in a Jupyter notebook.",
      githubUrl: "https://github.com/kingksjo/fake-news-detector",
    },
    {
      id: "luxe-voice-retail",
      name: "Luxe",
      subtitle: "Fashion Voice Agent",
      lookbookNumber: "06",
      year: "2025",
      description: "A voice-driven fashion retail demo where shoppers talk to an AI agent to browse products.",
      longDescription: "A demo of a fashion voice agent for retail. Shoppers interact with a Gemini-powered assistant by voice to explore the product catalog, built as a TypeScript single-page app.",
      tags: ["Voice Agent", "Gemini API", "TypeScript", "React"],
      disciplines: ["AI Engineering"],
      architecture: "React and TypeScript front end built with Vite and Tailwind CSS, connected to the Gemini API for voice interaction.",
      githubUrl: "https://github.com/kingksjo/luxe-voice-retail",
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
      capabilities: ["Predictive Modeling", "NLP", "Recommendation Systems", "Semantic Search", "PyTorch"]
    },
    {
      num: "02",
      title: "AI Engineering",
      description: "I design and ship systems built on large language models, like RAG systems, Agents, and evaluation harnesses. So generative AI works reliably inside real products and workflows.",
      capabilities: ["RAG Systems", "Fine-Tuning", "Agent Harness Engineering", "AI Eval Design and Analysis", "Voice Agents"]
    },
    {
      num: "03",
      title: "Software Engineering",
      description: "I write production software around data, pipelines that move and transform it, APIs and dashboards that serve it — packaged in containers and deployed on cloud platforms.",
      capabilities: ["Python & SQL", "Data Pipelines", "Apache Airflow", "APIs & Dashboards", "Docker & Cloud"]
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
