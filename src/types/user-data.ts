// types/user-data.ts

export interface SocialLink {
    Name: string;
    Icon: string;
    Href: string;
}

export interface MainData {
    Image: string;
    Greeting: string;
    Name: string;
    Tags: string[];
    Links: SocialLink[];
    Backgrounds: string[];
    Images: string[];
}

export interface AboutData {
    Description: string;
}

export type TechnologyItem = [string, string]; // [Image, Name]
export type TechnologyCategory = [string, TechnologyItem[]];
export type TechnologiesData = TechnologyCategory[];

export interface Project {
    Image: string;
    Name: string;
    Links: Array<SocialLink & { Icon?: string }>;
    Date: string;
    Description: string;
    Technologies: string;
}

export enum JobType {
    FullTime = "Full-time",
    PartTime = "Part-time",
    Internship = "Internship",
    Contract = "Contract"
}

export enum LocationType {
    OnSite = "On-site",
    Remote = "Remote",
    Hybrid = "Hybrid"
}

export interface Experience {
    Image?: string;
    Title: string;
    Company: string;
    JobType: JobType;
    Location: string;
    LocationType: LocationType;
    Date: string;
    Description: string[];
}

export interface Education {
    Image?: string;
    Name: string;
    Title: string;
    Date: string;
    Description: string[];
}

export interface Certificate {
    Image?: string;
    Name: string;
    Provider: string;
    Date: string;
    Credential: {
        Name: string;
        Link: string;
    };
}

export interface Reference {
    Name: string;
    Education?: string;
    Job?: string;
    Company: string;
    Phone: string;
    Email: string;
}

export interface UserData {
    Main: MainData;
    About: AboutData;
    Technologies: TechnologiesData;
    Projects: Project[];
    Experiences: Experience[];
    Educations: Education[];
    Certificates: Certificate[];
    References: Reference[];
}