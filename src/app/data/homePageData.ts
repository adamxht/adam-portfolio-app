import { Experience, Education, Publication } from '../../types/home';

export const workData: Experience[] = [
  {
    id: 1,
    role: "AI Algorithm Engineer",
    company: "Mediatek",
    period: "Aug 2025 - Present",
    description: [
      "Port models from model vendors such as Google to Mediatek's LLM SDK, enabling state-of-the-art LLMs to run on Mediatek's flagship devices.",
      "Optimize LLM graphs to run efficiently on Mobile devices with minimal accuracy loss.",
      "Perform Post Training Quantization and Quantization Aware Finetuning to minimize accuracy loss after model optimization.",
      "Develop Model Analytics and Visualization tools to analyze model health at various levels of granularity."
    ],
    logo: "/assets/icons/mediatek-logo.jpg"
  },
  {
    id: 2,
    role: "AI System Engineer",
    company: "Intel",
    period: "Jan 2024 - Aug 2025",
    description: [
      "Core developer of <a href='https://aibuilder.intel.com/' target='_blank' rel='noopener noreferrer' class='highlight-link'>Intel AI Assistant Builder</a>, a desktop LLM application running completely locally using LlamaIndex and Python with gRPC APIs.",
      "Developed advanced LLM features including RAG, Text-to-SQL, and Resume Scoring workflows.",
      "Optimized NPU kernel performance by 153% using Boolean Packing in C++.",
      "Fine-tuned domain-specific code generation models using PEFT and Unsloth, increasing accuracy from 36.1% to 84.8%.",
      "Mentored junior engineers and led teams in ongoing PEFT fine-tuning and model graph partitioning projects."
    ],
    logo: "/assets/icons/intel-logo.jpg"
  },
  {
    id: 3,
    role: "Freelance AI Engineer",
    company: "Fiverr",
    period: "Aug 2023 - Dec 2023",
    description: [
      "Fine-tuned Falcon 7b on mental health datasets using QLoRA.",
      "Conducted data transformation for fine-tuning by converting raw text into structured JSON prompt-response pairs.",
      "Applied semi-supervised self-training for MBTI personality prediction on Twitter datasets, achieving a 0.91 average f1-score."
    ],
    logo: "/assets/icons/fiverr-logo.jpg"
  },
  {
    id: 4,
    role: "Data Science Intern",
    company: "Jabil",
    period: "Feb 2023 - Jul 2023",
    description: [
      "Developed computer vision pipelines for PCB defect detection using YOLOv5/v8, OpenCV, and pretrained CNNs including void detection in X-ray images and component defect classification on 200,000+ components.",
      "Implemented safety compliance detection system using YOLOv5 to monitor worker PPE compliance with automated warning systems for non-compliance scenarios."
    ],
    logo: "/assets/icons/jabil-logo.jpg"
  }
];

export const educationData: Education[] = [
  {
    id: 1,
    degree: "Bachelor of Computer Science (Honours), Data Science",
    institution: "Tunku Abdul Rahman University of Management and Technology",
    year: "2018 - 2023",
    grade: "4.0/4.0 CGPA",
    achievements: "Full Scholarship | Top 1 - Book Prize Award Winner | First Class Honours"
  }
];

export const pubData: Publication[] = [
  {
    id: 1,
    title: "Deep Reinforcement Learning in Cryptocurrency Trading: A Profitable Approach",
    publisher: "Journal of Telecommunications and the Digital Economy (Scopus Q2)",
    link: "https://jtde.telsoc.org/index.php/jtde/article/view/985",
    year: "2024"
  }
];