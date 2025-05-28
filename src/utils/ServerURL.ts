import { UserData } from '../types/user-data';
import portfolioData from '../data/portfolioData';

class ServerURL {
    private static instance: ServerURL;
    private data: UserData;

    private constructor() {
        this.data = portfolioData.getAllData();
    }

    public static getInstance(): ServerURL {
        if (!ServerURL.instance) {
            ServerURL.instance = new ServerURL();
        }
        return ServerURL.instance;
    }

    public static Server(): string {
        // return import.meta.env.VITE_API_URL || "http://localhost:3001";
        return "http://localhost:3001";
    }

    public static Data(): UserData {
        return ServerURL.getInstance().data;
    }

    public getMainData(): UserData['Main'] {
        return this.data.Main;
    }

    public getAllData(): UserData {
        return this.data;
    }
}

export default ServerURL;