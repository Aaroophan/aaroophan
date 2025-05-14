import { UserData } from '../types/user-data';

export class PortfolioService<T extends UserData> {
  private static instance: PortfolioService<UserData>;
  private data: T;

  private constructor(data: T) {
    this.data = data;
  }

  public static getInstance(data: UserData): PortfolioService<UserData> {
    if (!PortfolioService.instance) {
      PortfolioService.instance = new PortfolioService(data);
    }
    return PortfolioService.instance;
  }

  public getMainData(): UserData['Main'] {
    return this.data.Main;
  }

  // Add other data access methods
  public getProjects(): UserData['Projects'] {
    return this.data.Projects;
  }
}