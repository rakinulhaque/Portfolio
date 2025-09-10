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
  ],
  researchExperience: [
        {
      "title": "Thesis: Exploration and Mitigation of Gender Bias in Word Embeddings from Transformer-based Language Models",
      "institution": "BRAC University — Department of Computer Science and Engineering",
      "dateRange": "September 2022 – September 2023",
      "bullets": [
       "Novel Evaluation Metric Development: Created MALoR (Mean Absolute Log Odds Ratio), an original metric for quantifying gender bias in transformer models providing a standardized approach to bias measurement.", "Methodical Template Design: Constructed 51 carefully crafted sentence templates across six occupational sectors as the foundation for bias detection, systematically avoiding linguistic artifacts that could skew model predictions and ensuring reliable probability measurements across diverse contexts.",
        "Multi-dimensional Gender Analysis: Conducted systematic experiments across three gender representation categories (he-she, his-her, male-female names) to capture the full spectrum of gender bias manifestations, ensuring comprehensive evaluation beyond simple pronoun-based assessments.",
        "Rigorous Experimental Methodology: Employed probability-based bias detection through BERT's masked language modeling capabilities, analyzing softmax distributions to quantify gender stereotypes in occupational contexts.",
        "Cross-model Applicability Assessment: Evaluated methodology across multiple transformer architectures (BERT, RoBERTa, ALBERT), identifying model-specific limitations and establishing the broader applicability of the proposed approach.",
        "Dataset Engineering and Curation: Created gender-balanced training datasets from WMT 18/15 corpora through systematic application of Counterfactual Data Augmentation, resulting in over 18,000 augmented sentence pairs for model training.",
        "Practical Implementation of Theoretical Concepts: Successfully bridged the gap between bias detection theory and practical mitigation by implementing continued pretraining with custom loss functions and optimization strategies.",
        "Reproducible Training Pipeline Development: Built a robust continued-pretraining infrastructure with optimized sequence handling and attention mechanisms, incorporating convergence monitoring through learning curves for reliable model evaluation.",
        "Effective Debiasing Through Continued Pretraining: Successfully reduced gender bias in BERT from a MALoR score of 1.27 to 0.056 using Counterfactual Data Augmentation on gender-balanced datasets.",
        "Strategic Research Roadmap: Outlined future work to broaden pronoun and name coverage while developing a lightweight, model-agnostic debiasing layer that can be applied across different transformer models without requiring retraining."
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
  experience: [
    {
      company: "Welldev Limited",
      title: "Software Engineer L2",
      dateRange: "July 2025 - Present",
      bullets: [
        "Led ISO 27001 certification implementing K8s security policies, Trivy scans, and RBAC",
        "Deployed OWASP ModSecurity WAF with custom rules, blocking 95% of attacks",
        "Authored K8s security best practices across environments, enhancing defense posture",
        "Built Jenkins pipeline with integrated security scanning, reducing vulnerabilities by 70%"
      ],
      companyLink: "https://www.welldev.io/",
    },
    {
      company: "Welldev Limited",
      title: "Junior Software Engineer",
      dateRange: "March 2024 - June 2024",
     bullets: [
        "Strengthened security across 6 K8s clusters with automated vulnerability scanning",
        "Enhanced CI/CD security via GitHub Actions with comprehensive scanning workflows",
        "Built secure infrastructure using Terraform with hardened VPN/firewall configs",
        "Secured data transmission with compression protocols maintaining system integrity"
      ],
      companyLink: "https://www.welldev.io/",
    },
    {
      company: "Bkash Limited",
      title: "Backend Developer Intern",
      dateRange: "September 2023 - January 2024",
      bullets: [
        "Contributed to live financial technology applications serving millions of users",
        "Gained hands-on experience with enterprise-level software development practices"
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
  education: [
    {
      school: "BRAC University",
      degree: "Bachelor of Science in Computer Science and Engineering",
      dateRange: "2020 - 2023",
      cgpa: "3.97/4.0",
      achievements: [
        "Graduated Magna Cum Laude with 3.8 GPA",
        "Dean's List all semesters",
        "Active member of ROBU (Robotics Club of BRAC University)",
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
    {
      school: "Chittagong Cantonment Public School & College",
      degree: "Secondary School Certificate (SSC)",
      dateRange: "2015 - 2016",
      gpa: "5.0/5.0",
      achievements: [
        "Achieved perfect GPA of 5.0 in Science group",
        "Participated in inter-school debate and quiz competitions",
      ],
      schoolLink: "https://ccpc.edu.bd/",
    },
  ],
  honorsAndAwards: [

    // onekbar deans and vc list
    // selected for welldev among 4000 candidates
    // Earned double promotion in  review cycles of the company
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
