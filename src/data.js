// Central place to edit your portfolio content.
// All sections pull from this file, so you only edit data here.

export const profile = {
  name: "Germán Ruiz Cabello",
  title: "Backend & Cloud Engineering",
  tagline:
    "Building reliable, scalable systems — and the web apps in front of them.",
  meta: "Lausanne · Computer Science at UPM & EPFL",
  current: "Computer Science Graduate",
  location: "Lausanne, Switzerland",
  email: "cabelloruizgerman@gmail.com",
  phone: "+41 76 266 38 31",
  phone2: "+34 640 56 80 10",
  github: "https://github.com/geermanruuiz",
  linkedin: "https://www.linkedin.com/in/germán-ruiz-cabello-7906681b9/", // ← add your LinkedIn handle
  resumeUrl: "/CV.pdf",       // place CV.pdf in /public
  photoUrl: "/me.jpg",         // place me.jpg in /public
};

export const about = `I'm a final-year Informatics Engineering student at the Technical University of Madrid (UPM), currently on an exchange year at EPFL in Lausanne. I design systems end-to-end — from architecting reliable backends with Java and Spring Boot on AWS, to crafting clean, responsive frontends with React and Vite.

My entrepreneurial path — co-founding a SaaS startup, running a summer social club brand, and consulting as a freelance developer — taught me to treat software as a tool that drives real business outcomes. I'm now looking for a software engineering role where I can design scalable solutions and have technical impact from day one.`;

export const education = [
  {
    school: "EPFL — Swiss Federal Institute of Technology Lausanne",
    degree: "Computer Science · Exchange year",
    location: "Lausanne, Switzerland",
    period: "Sep 2025 — Jun 2026",
    highlights: [
      "Distributed Algorithms",
      "System Design",
      "Research Project",
      "Machine Learning",
    ],
  },
  {
    school: "Technical University of Madrid (UPM)",
    degree: "B.Sc. Informatics Engineering",
    location: "Madrid, Spain",
    period: "Graduation: Jun 2026",
    highlights: [],
  },
];

export const experience = [
  {
    role: "Co-Founder & Backend Engineer",
    company: "Avalohost",
    location: "Remote",
    period: "2025 — Present",
    status: "Current",
    bullets: [
      "Co-founding a multi-tenant SaaS booking platform for partner sports centers.",
      "Architecting a highly available backend on AWS (EC2, RDS) with Java and Spring Boot.",
      "Leading technical design end-to-end: domain modeling, REST API, database schema, infra.",
    ],
    stack: ["Java", "Spring Boot", "PostgreSQL", "AWS EC2", "AWS RDS", "REST"],
    link: "https://avalohost.com",
  },
  {
    role: "Freelance Web Developer & IT Consultant",
    company: "Independent",
    location: "Remote",
    period: "Jan 2026 — Present",
    status: "Current",
    bullets: [
      "Designed and shipped a responsive portfolio site for an architecture firm.",
      "Owned the full lifecycle: requirements, UI/UX, implementation, delivery.",
    ],
    stack: ["React", "Vite", "Tailwind CSS", "UI/UX"],
  },
  {
    role: "Co-Founder",
    company: "La Terraza — Summer Social Club",
    location: "Spain",
    period: "Summer 2023 · 2024 · 2025",
    bullets: [
      "Built and ran a summer social club brand.",
      "Designed automated systems for accounting, inventory, sales, and staff scheduling.",
      "Led process optimization and HR — talent acquisition and shift planning.",
    ],
    stack: ["Automation", "Operations", "HR", "Process Design"],
  },
];

export const projects = [
  {
    name: "Architecture Firm Portfolio",
    role: "Freelance Developer",
    year: "2026",
    status: "Delivered",
    description:
      "End-to-end design and development of a responsive portfolio website for an architecture firm.",
    stack: ["React", "Vite", "Tailwind CSS"],
    link: null,
  },
  {
    name: "Popnet",
    role: "Agenda Layer Engineer",
    year: "2026",
    status: "On-going",
    description:
      "How a community can make democratic decisions at scale without a central authority and without being gamed by Sybil attacks.",
    stack: ["Go", "Svelte"],
    link: null,
  },
];

export const skills = {
  Languages: ["Java", "C", "JavaScript", "Python", "SQL"],
  Frameworks: [
    "Spring Boot",
    "Spring MVC",
    "Spring Data JPA",
    "Spring Security",
    "Keycloak",
    "React",
    "Vite",
    "Tailwind CSS",
  ],
  "Cloud & DevOps": [
    "AWS EC2",
    "AWS S3",
    "AWS RDS",
    "AWS ELB",
    "Git",
    "GitHub Actions",
    "GitLab CI",
  ],
  "APIs & Architecture": [
    "RESTful Services",
    "Client–Server",
    "JSON",
    "Postman",
    "Design Patterns",
  ],
  Databases: ["PostgreSQL", "Relational Design"],
};

export const certifications = [
  {
    name: "AWS Academy Cloud Foundations",
    issuer: "Amazon Web Services",
  },
  {
    name: "Cambridge English Advanced (CAE)",
    issuer: "Cambridge Assessment English",
  },
];

export const languages = [
  { name: "Spanish", level: "Native" },
  { name: "English", level: "Advanced (C1)" },
  { name: "French", level: "DELF A2 — learning" },
];
