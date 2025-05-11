export interface MainData {
  image: string;
  name: string;
  title: string;
  description: string;
  github: string;
  linkedin: string;
  instagram: string;
  twitter: string;
  youtube: string;
  facebook: string;
  email: string;
  phone: string;
  location: string;
  resume: string;
}

export interface AboutData {
  image: string;
  description: string;
}

export interface Technology {
  name: string;
  image: string;
  description: string;
  link: string;
}

export interface Project {
  title: string;
  description: string;
  image: string;
  link: string;
  github: string;
  technologies: string[];
}

export enum JobType {
  FullTime = "Full-time",
  PartTime = "Part-time",
  Contract = "Contract",
  Internship = "Internship",
  Freelance = "Freelance"
}

export enum LocationType {
  OnSite = "On-site",
  Remote = "Remote",
  Hybrid = "Hybrid"
}

export interface Experience {
  title: string;
  company: string;
  location: string;
  description: string;
  startDate: string;
  endDate: string;
  image: string;
  jobType: JobType;
  locationType: LocationType;
}

export interface Education {
  title: string;
  school: string;
  location: string;
  description: string;
  startDate: string;
  endDate: string;
  image: string;
}

export interface Certificate {
  title: string;
  issuer: string;
  date: string;
  image: string;
  link: string;
}

export interface Reference {
  name: string;
  title: string;
  company: string;
  description: string;
  image: string;
  linkedin: string;
}

export interface PortfolioData {
  Main: MainData;
  About: AboutData;
  Technologies: Technology[];
  Projects: Project[];
  Experience: Experience[];
  Education: Education[];
  Certificates: Certificate[];
  References: Reference[];
} 