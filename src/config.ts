export const siteConfig = {
  photoUrl: 'images/IMG_1152.jpeg', // path relative to /public (or a full https URL)
  photoAlt: 'Rakinul Haque',
  name: "Rakinul Haque",
  title: "Software Engineer",
  description: "Portfolio website of Rakinul Haque",
  accentColor: "#1d4ed8",
  social: {
    email: "rakinul.haque@g.bracu.ac.bd",
    linkedin: "https://www.linkedin.com/in/rakinulhaque/",
    github: "https://github.com/rakinulhaque",
  },
  aboutMe:
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem quos asperiores nihil consequatur tempore cupiditate architecto natus commodi corrupti quas quasi facere est, dignissimos odit nam veniam sapiente ut, vitae eligendi ipsum dolor, nostrum ullam impedit! Corrupti ratione mollitia temporibus necessitatibus, consectetur reiciendis recusandae id, dolorum quaerat, vero pariatur. Ratione!",
  skills: ["Javascript", "React", "Node.js", "Python", "AWS", "Docker"],
  projects: [
    {
      name: "Explainable Detection of Online Sexism",
      description:
        "Research-driven NLP project addressing online sexism with explainable AI. Detects sexist content while providing contextual explanations to improve transparency, trust, and interpretability in automated moderation systems.",
      link: "https://github.com/rakinulhaque/Explainable-Detection-of-Online-sexism",
      skills: ["Python", "NLP", "Transformers", "Explainable AI", "scikit-learn", "Jupyter Notebook"],
    },
    {
      name: "Loan Eligibility & Traffic Prediction",
      description:
        "Two end-to-end machine learning projects showcasing classification for loan approval and regression/time-series forecasting for traffic volume—covering data cleaning, feature engineering, model development, evaluation, and explainability.",
      link: "https://github.com/rakinulhaque/Loan-Eligibility-and-Traffic-Prediction",
      skills: [
        "Python", "scikit-learn","Pandas","NumPy","XGBoost","Classification"
      ],
    },

    {
      name: "ExtensionKit",
      description:
        "Kit to jump-start your Chrome extension projects with a variety of battle-tested starter templates & examples",
      link: "https://extensionkit.io/?ref=devportfolio",
      skills: ["React", "Node.js", "AWS"],
    },
  ],
  researchExperience: [
        {
      "title": "Thesis: Exploration and Mitigation of Gender Bias in Word Embeddings from Transformer-based Language Models",
      "institution": "BRAC University — Department of Computer Science and Engineering",
      "dateRange": "Jan 2023 – Present",
      "description": "Designed an evaluation metric (MALoR) and a continued-pretraining pipeline to measure and mitigate gender bias in BERT and related transformer models.",
      "bullets": [
        "Defined MALoR, a model-agnostic bias score that averages log-ratios of male vs female token probabilities across 51 templates and 60 occupations; 0 indicates no bias.",
        "Designed two masked-LM probes—(a) mask pronoun with occupation fixed and (b) mask occupation with pronoun fixed—to reveal contextual gender stereotypes in BERT.",
        "Curated 51 neutral sentence templates that avoid linguistic confounds (e.g., 'a/an') and span six sectors with 60 occupations for robust, context-diverse evaluation.",
        "Built a gender-balanced corpus via Counterfactual Data Augmentation on WMT’15/’18, yielding 6,182 he↔she, 6,064 his↔her, and 6,000 name-swap sentences for training.",
        "Implemented an end-to-end continued-pretraining pipeline (tokenization, power-of-two padding, attention masks) and trained BERT-base for 100 epochs with AdamW (2e-5) and linear warm-up.",
        "Reduced measured bias on BERT-base by ~95.6% (MALoR 1.27 -> 0.056), with a learning curve confirming convergence and stability.",
        "Validated parity after debiasing: male and female probabilities become near-equal across diverse occupations under both probing setups.",
        "Demonstrated MALoR’s generality for MLM transformers and diagnosed vocabulary coverage gaps that hinder RoBERTa/ALBERT on name/occupation probes.",
        "Delivered a reproducible fairness-improvement recipe: MALoR auditing combined with CDA-driven continued pretraining, guided by an interpretable bias score.",
        "Outlined practical next steps: expand pronoun/name coverage and develop a lightweight debiasing layer to filter outputs from pretrained transformers."
      ],
      "skills": [
        "Python",
        "PyTorch",
        "Hugging Face Transformers",
        "BERT (Masked Language Modeling)",
        "NLP Fairness & Bias Mitigation",
        "Counterfactual Data Augmentation (CDA)",
        "Data Curation (WMT’15/’18)",
        "Experiment Design & Evaluation",
        "Pandas",
        "NumPy"
      ],
      "links": {
        "paper": "null",
        "thesis": "null",
        "codebase": "REPLACE_WITH_GITHUB_URL"
      }
    },
  ],
  experience: [
    {
      company: "Tech Company",
      title: "Senior Software Engineer",
      dateRange: "Jan 2022 - Present",
      bullets: [
        "Led development of microservices architecture serving 1M+ users",
        "Reduced API response times by 40% through optimization",
        "Mentored team of 5 junior developers",
      ],
      companyLink: "https://techcompany.com",
    },
    {
      company: "Startup Inc",
      title: "Full Stack Developer",
      dateRange: "Jun 2020 - Dec 2021",
      bullets: [
        "Built and launched MVP product from scratch using React and Node.js",
        "Implemented CI/CD pipeline reducing deployment time by 60%",
        "Collaborated with product team to define technical requirements",
      ],
      companyLink: "https://startup-inc.com",
    },
    {
      company: "Digital Agency",
      title: "Frontend Developer",
      dateRange: "Aug 2018 - May 2020",
      bullets: [
        "Developed responsive web applications for 20+ clients",
        "Improved site performance scores by 35% on average",
        "Introduced modern JavaScript frameworks to legacy codebases",
      ],
      companyLink: "https://digitalagency.com",
    },
  ],
  education: [
    {
      school: "University Name",
      degree: "Bachelor of Science in Computer Science",
      dateRange: "2014 - 2018",
      gpa: "3.8/4.0",
      achievements: [
        "Graduated Magna Cum Laude with 3.8 GPA",
        "Dean's List all semesters",
        "President of Computer Science Club",
      ],
      schoolLink: "https://university.edu",
    },
    {
      school: "Online Platform",
      degree: "Full Stack Development Certificate",
      dateRange: "2019",
      cgpa: "4.0/4.0",
      achievements: [
        "Completed 500+ hours of coursework",
        "Built 10+ portfolio projects",
        "Specialized in React and Node.js",
      ],
      schoolLink: "https://onlineplatform.com",
    },
  ],
  honorsAndAwards: [
    {
      title: "Dean's List",
      organization: "University Name",
      description: "Recognized for academic excellence with GPA above 3.5 for consecutive semesters",
    },
    {
      title: "Presidential Scholarship",
      organization: "University Name",
      description: "Full tuition scholarship awarded to top 5% of incoming students based on academic merit",
    },
    {
      title: "Best Research Paper Award",
      organization: "International AI Conference",
      description: "Awarded for outstanding contribution to machine learning optimization research",
    },
    {
      title: "Outstanding Student Leader Award",
      organization: "Computer Science Department",
      description: "Recognized for leadership in organizing tech events and mentoring fellow students",
    },
    {
      title: "Hackathon Winner",
      organization: "Tech Innovation Challenge",
      description: "First place in 48-hour hackathon with innovative AI-powered healthcare solution",
    },
  ],
};
