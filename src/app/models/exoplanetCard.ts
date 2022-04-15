import { ExoplanetCardComments } from "./exoplanetCardComments";

export interface ExoplanetCards{
    exoId: number;
    planetName: string;
    hostName: string;
    numberOfPlanets: number;
    numberOfStars: number;
    discoverYear: number;
    planetMass: number;
    distanceFromEarth: number;
    likeCount: number;
    cardRank: string;
    comments: ExoplanetCardComments[];
    
    
}