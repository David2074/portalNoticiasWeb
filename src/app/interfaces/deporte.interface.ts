// Generated by https://quicktype.io

export interface IDeporte {
    status:       string;
    totalResults: number;
    results:      Result[];
    nextPage:     string;
}

export interface Result {
    title:       string;
    link:        string;
    keywords:    string[];
    creator:     null;
    video_url:   null;
    description: string;
    content:     null | string;
    pubDate:     string;
    image_url:   string;
    source_id:   SourceID;
    category:    Category[];
    country:     Country[];
    language:    Language;
    expanded?: boolean;
}

export enum Category {
    Sports = "sports",
}

export enum Country {
    Spain = "spain",
}

export enum Language {
    Spanish = "spanish",
}

export enum SourceID {
    Europapress = "europapress",
    Libertaddigital = "libertaddigital",
}
