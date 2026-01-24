import { Experience, Education, Publication } from '../../types/home';

export const workData: Experience[] = [
  {
    id: 1,
    role: "System Engineer in AI",
    company: "Intel Corporation",
    period: "Jan 2024 - Present",
    description: [
      "Core developer of an edge AI solution, building local LLM applications using LlamaIndex and Python with gRPC APIs[cite: 10, 13].",
      "Developed advanced LLM features including RAG, Text-to-SQL, and Resume Scoring workflows[cite: 15].",
      "Optimized NPU kernel performance by 153% using Boolean Packing in C++[cite: 18, 19].",
      "Fine-tuned domain-specific code generation models using PEFT and Unsloth, increasing accuracy from 36.1% to 84.8%[cite: 20, 21, 22].",
      "Mentored junior engineers and led teams in ongoing PEFT fine-tuning and model graph partitioning projects[cite: 24, 25, 26]."
    ],
    logo: "https://media.licdn.com/dms/image/v2/C560BAQGpvWtEtj9oTQ/company-logo_200_200/company-logo_200_200/0/1630663244735/intel_corporation_logo?e=1770854400&v=beta&t=ZJdeVgsqPOKYXMYcNuwCI8F9V9ePowptQ9oZH4nTXJY"
  },
  {
    id: 2,
    role: "Freelance AI Engineer",
    company: "Fiverr",
    period: "Aug 2023 - Dec 2023",
    description: [
      "Fine-tuned Falcon 7b on mental health datasets using QLoRA[cite: 27, 29].",
      "Conducted data transformation for fine-tuning by converting raw text into structured JSON prompt-response pairs[cite: 32].",
      "Applied semi-supervised self-training for MBTI personality prediction on Twitter datasets, achieving a 0.91 average f1-score[cite: 33, 34]."
    ],
    logo: "https://media.licdn.com/dms/image/v2/D560BAQGIZewdCoscfA/company-logo_100_100/company-logo_100_100/0/1690823958391/fiverr_freelancers_buyer_and_seller_logo?e=1770854400&v=beta&t=CrrXwOl3gArMhxwRxyFpAp0pWgjA-Z6TcFpGzA7TRyM"
  }
];

export const educationData: Education[] = [
  {
    id: 1,
    degree: "Bachelor of Computer Science (Honours), Data Science",
    institution: "Tunku Abdul Rahman University of Management and Technology",
    year: "2021 - 2023",
    grade: "4.0/4.0 CGPA", // [cite: 38]
    achievements: "Book Prize Award Winner - First Class Honours" // [cite: 39]
  }
];

export const pubData: Publication[] = [
  {
    id: 1,
    title: "Deep Reinforcement Learning in Cryptocurrency Trading: A Profitable Approach",
    publisher: "Journal of Telecommunications and the Digital Economy (Scopus Q2)",
    link: "https://doi.org/...", // [cite: 43, 44]
    year: "2024"
  }
];