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
      name: "AI Dev Roundup Newsletter",
      description:
        "One concise email. Five minutes. Every Tuesday. Essential AI news & trends, production-ready libraries, powerful AI tools, and real-world code examples",
      link: "https://aidevroundup.com/?ref=devportfolio",
      skills: ["React", "Node.js", "AWS"],
    },
    {
      name: "Chrome Extension Mastery: Build Full-Stack Extensions with React & Node.js",
      description:
        "Master the art of building production-ready, full-stack Chrome Extensions using modern web technologies and best practices",
      link: "https://fullstackextensions.com/?ref=devportfolio",
      skills: ["React", "Node.js", "AWS"],
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
      title: "Machine Learning Research Project",
      institution: "University Research Lab",
      dateRange: "Jan 2023 - Present",
      description: "Investigating novel approaches to deep learning optimization for computer vision applications",
      bullets: [
        "Developed new optimization algorithms that improved model convergence by 25%",
        "Published findings in top-tier conference proceedings",
        "Collaborated with industry partners on real-world implementation",
        "Mentored 3 undergraduate research assistants",
      ],
      skills: ["Python", "TensorFlow", "PyTorch", "Computer Vision"],
      links: {
        paper: "https://arxiv.org/abs/example-paper-1",
        thesis: "https://university.edu/thesis/example-thesis-1",
        codebase: "https://github.com/username/ml-optimization-project",
      },
    },
    {
      title: "Natural Language Processing Study",
      institution: "AI Research Institute",
      dateRange: "Jun 2022 - Dec 2022",
      description: "Explored transformer architectures for multilingual text understanding and generation",
      bullets: [
        "Implemented custom transformer models for low-resource languages",
        "Achieved state-of-the-art results on benchmark datasets",
        "Presented research at international AI conference",
        "Open-sourced research code with 500+ GitHub stars",
      ],
      skills: ["Python", "Transformers", "BERT", "NLP"],
      links: {
        paper: "https://arxiv.org/abs/example-paper-2",
        thesis: "https://university.edu/thesis/example-thesis-2",
        codebase: "https://github.com/username/nlp-multilingual-project",
      },
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
