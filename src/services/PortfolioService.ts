import { PortfolioData } from '../types/portfolio';

export class PortfolioService {
  private static instance: PortfolioService;
  private data: PortfolioData;

  private constructor(data: PortfolioData) {
    this.data = data;
  }

  public static getInstance(data?: PortfolioData): PortfolioService {
    if (!PortfolioService.instance && data) {
      PortfolioService.instance = new PortfolioService(data);
    }
    return PortfolioService.instance;
  }

  public getAllData(): PortfolioData {
    return this.data;
  }

  public getMainData() {
    return this.data.Main;
  }

  public getAboutData() {
    return this.data.About;
  }

  public getTechnologies() {
    return this.data.Technologies;
  }

  public getProjects() {
    return this.data.Projects;
  }

  public getExperience() {
    return this.data.Experience;
  }

  public getEducation() {
    return this.data.Education;
  }

  public getCertificates() {
    return this.data.Certificates;
  }

  public getReferences() {
    return this.data.References;
  }
} 