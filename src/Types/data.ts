export interface Hero {
    id: number;
    modified: string;
    name: string;
    thumbnail: string;
    appearence: string;
    publisher: string;
} 

export interface HeroResponse {
    count: number,
    limit: number,
    offset: number,
    results: any[],
    total: number
}