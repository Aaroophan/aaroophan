import { PortfolioService } from './services/PortfolioService';
import { portfolioData } from './data/portfolioData';

// Initialize the portfolio service with the data
const portfolioService = PortfolioService.getInstance(portfolioData);

// Export the service instance as default
export default portfolioService; 