// src/types/index.ts

export interface Experience {
  id: number;
  role: string;
  company: string;
  period: string;
  description: string[];
  logo?: string;
}

export interface Education {
  id: number;
  degree: string;
  institution: string;
  year: string;
  grade: string;
  achievements: string;
}

export interface Publication {
  id: number;
  title: string;
  publisher: string;
  link: string;
  year: string;
}