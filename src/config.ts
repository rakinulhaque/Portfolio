export const siteConfig = {
  photoUrl: 'images/IMG_1152.jpeg', // path relative to /public (or a full https URL)
  photoAlt: 'Rakinul Haque',
  name: "Rakinul Haque",
  title: "Software Engineer",
  description: "Portfolio website of Rakinul Haque",
  accentColor: "#1d4ed8",
  resumeUrl: "https://drive.google.com/file/d/1xxB6GCEX8sRoWVWsxJIB3kNfXL-wH2N3/view?usp=sharing",
  social: {
    email: "rakinul.haque@g.bracu.ac.bd",
    linkedin: "https://www.linkedin.com/in/rakinulhaque/",
    github: "https://github.com/rakinulhaque",
  },
  aboutMe: [
    "Hi, I'm Rakinul Haque. I'm a Computer Science graduate from BRAC University with a passion for Natural Language Processing and AI Safety. Currently working as a Software Engineer at Welldev Limited, I specialize in building secure, scalable systems while pursuing research in bias detection and mitigation for transformer-based LLM models.",

    "My research focuses on developing novel metrics like MALOR to quantify gender bias in contextualized word embeddings, combining technical excellence with ethical AI principles. With a 3.97/4.00 GPA and Vice Chancellor's List recognition for 10 semesters, I bring both academic excellence and practical experience to create AI systems that are powerful, fair, and transparent.",

    "Currently seeking PhD opportunities to advance NLP research and contribute to responsible AI development."
  ],
  skills: [
      "Python", 
      "PyTorch", 
      "Kubernetes", 
      "Docker", 
      "Cloud",
      "Pandas", 
      "TensorFlow",
      "NLTK", 
      "Transformers"
    ],
  
    researchExperience: [
        {
      "title": "Exploration and Mitigation of Gender Bias in Word Embeddings from Transformer-based Language Models",
      "institution": "BRAC University — Department of Computer Science and Engineering",
      "dateRange": "September 2022 – September 2023",
      "bullets": [
      "Developed MALOR metric for transformer bias detection - Created MALoR (Mean Absolute Log of Ratio) method specifically designed for contextualized word embeddings, addressing limitations of traditional cosine similarity approaches",
      "Methodical Template Design - Constructed 51 sentence templates across six occupational sectors as the foundation for bias detection, systematically avoiding linguistic artifacts that could skew model predictions.",
      "Multi-dimensional Gender Analysis - Conducted systematic experiments across three gender representation categories (he-she, his-her, male-female names) to capture the full spectrum of gender bias manifestations, ensuring comprehensive evaluation beyond simple pronoun-based assessments.",
      "Leveraged masked language modeling for bias quantification - Used BERT's core MLM mechanism to analyze probability distributions and detect gendered prediction patterns across occupational contexts.",
        "Cross-model Applicability Assessment - Evaluated methodology across multiple transformer architectures (BERT, RoBERTa, ALBERT), identifying model-specific limitations and establishing the broader applicability of the proposed approach.",
        "Dataset Engineering and Curation - Created gender-balanced training datasets from WMT 18/15 corpora through systematic application of Counterfactual Data Augmentation, resulting in over 18,000 augmented sentence pairs for model training.",
        "Reproducible Training Pipeline Development - Built a robust continued-pretraining infrastructure with optimized sequence handling and attention mechanisms.",
        "Achieved 95% gender bias reduction in BERT models - Reduced MALOR score from 1.27 to 0.056 while maintaining comparable performance on downstream tasks like SST-2 sentiment analysis",
        "Strategic Research Roadmap - Outlined future work to broaden pronoun and name coverage while developing a lightweight, model-agnostic debiasing layer that can be applied across different transformer models without requiring retraining."
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
        "paper": "https://drive.google.com/file/d/14Yl3wbuLf2I5sfCuQtoWBsoO0jRMQmT6/view?usp=sharing",
        "thesis": "https://drive.google.com/file/d/1RHM65KQJFR5QM-sJBDLeT37hJ37nIzJV/view",
        "codebase": "https://github.com/rakinulhaque/Exploration-and-Mitigation-of-Gender-Bias-in-Word-Embeddings-from-Transformer-based-Language-Models"
      }
    },
  ],
  education: [
    {
      school: "BRAC University",
      degree: "Bachelor of Science in Computer Science and Engineering",
      dateRange: "2020 - 2023",
      cgpa: "3.97/4.0",
      achievements: [
       " Graduated with Highest Distinction",
        "Recipient of Vice Chancellor's List recognition for 10 out of 11 semesters (awarded for CGPA of 3.90 and above) and Dean's List recognition for all semesters",
        "Earned A+ grades (97+ out of 100) in 12 courses throughout the program",
        "Active member of ROBU (Robotics Club of BRAC University), contributing to robotics projects and community initiatives"
      ],
      schoolLink: "https://www.bracu.ac.bd/",
    },
    {
      school: "Chittagong Cantonment Public School & College",
      degree: "Higher Secondary Certificate (HSC)",
      dateRange: "2017 - 2018",
      gpa: "5.0/5.0",
      achievements: [
        "Led student council initiatives and academic committees", 
        "Participated in inter-college science fair and technology exhibitions",
      ],
      schoolLink: "https://ccpc.edu.bd/",
    },
  ],
  experience: [
    {
      company: "Welldev Limited",
      title: "Software Engineer",
      dateRange: "July 2025 - Present",
      bullets: [
        "Led ISO 27001 certification implementing K8s security policies, Trivy scans, and RBAC",
        "Deployed OWASP ModSecurity Web Application Firewall (WAF) with custom rules, blocking 95% of attacks",
        "Authored K8s security best practices across environments, enhancing defense posture",
        "Specialize in backend development focusing on scalable API design and performance optimization"
      ],
      companyLink: "https://www.welldev.io/",
    },
    {
      company: "Welldev Limited",
      title: "Junior Software Engineer",
      dateRange: "March 2024 - June 2025",
     bullets: [
        "Strengthened security across 6 K8s clusters with automated vulnerability scanning",
        "Developed RESTful APIs and backend logic with Django and PostgreSQL",
        "Built secure infrastructure using Terraform with hardened VPN/firewall configs",
        "Implemented real-time features using Django and WebSockets"
      ],
      companyLink: "https://www.welldev.io/",
    },
    {
      company: "Bkash Limited",
      title: "Backend Developer Intern",
      dateRange: "September 2023 - January 2024",
      bullets: [
        "Contributed to live financial technology applications serving millions of users",
        "Gained hands-on experience with enterprise-level software development practices",
        "Developed backend features with Express.js and frontend components using React.js"
      ],
      companyLink: "https://www.bkash.com/",
    },
    {
      company: "Brac University",
      title: "Undergraduate Teaching Assistant/ Student Tutor",
      dateRange: "June 2022 - September 2023",
      bullets: [
        "Assisted professors in delivering computer science and engineering coursework",
        "Provided one-on-one tutoring sessions helping students improve academic performance",
        "Graded assignments and exams while providing constructive feedback to students",
        "Supported lab sessions and practical exercises in programming and technical subjects"
      ],
      companyLink: "https://www.bracu.ac.bd/",
    },
  ],
  projects: [
    {
      name: "AI-Powered Inclusive Job Screening Tool",
      description:
        "An AI-driven end to end Machine Learning Project developed during a workplace hackathon to promote inclusivity in hiring. The tool analyzes job descriptions using NLP to detect biased language and suggests improvements, ensuring fairer hiring practices. It also streamlines candidate evaluation with explainable AI techniques.",
      link: "https://github.com/rakinulhaque/Ctrl-Alt-Hire",
      skills: ["Python", "NLP", "Transformers", "Flask", "Explainable AI", "scikit-learn"],
    },
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
  ],
  
  honorsAndAwards: [
    {
      title: "Vice Chancellor's List",
      organization: "BRAC University",
      description: "Recognized for exceptional academic excellence with CGPA above 3.90 for 10 semesters",
    },
    {
      title: "Merit-Based Scholarship",
      organization: "BRAC University", 
      description: "Awarded merit-based tuition scholarship ranging from 75% to 100% coverage based on outstanding academic performance",
    },
    {
      title: "Performance-Based Promotion",
      organization: "Welldev Limited",
      description: "Received two-level promotion in recognition of consistent performance and contributions to key project initiatives",
    }
  ],
};
