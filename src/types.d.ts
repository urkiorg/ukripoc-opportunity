export interface WebsiteListing {
    id: string;
    rank: number;
    lastPublished: string | null;
    description: string | null;
    __typename: string;
}

export interface ApplicationQuestion {
    id: string;
    heading: string | null;
    title: string | null;
    subtitle: string | null;
    notes: string | null;
    wordLimit: number | null;
    __typename: string | null;
    complete: boolean;
}
