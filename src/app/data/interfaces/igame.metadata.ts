export interface IGame {
    background_image: string;
    name: string;
    released: string;
    metacritic_url: string;
    website: string;
    description: string;
    metacritic: number;
    genres: Array<IGenre>;
    parent_platforms: Array<IParentPlatform>;
    publishers: Array<IPublishers>;
    ratings: Array<IRating>;
    screenshots: Array<IScreenshots>;
    trailers: Array<ITrailer>;
}

export interface IAPIResponse<T> {
    results: Array<T>;
}

interface IGenre {
    name: string;
}

interface IParentPlatform {
    platform: {
        name: string;
    };
}

interface IPublishers {
    name: string;
}

interface IRating {
    id: number;
    count: number;
    title: string;
}

interface IScreenshots {
    image: string;
}

interface ITrailer {
    data: {
        max: string;
    };
}