export interface WebsiteListing {
    id: string;
    rank: number;
    lastPublished: string | null;
    description: string | null;
    __typename: string;
}

export interface ApplicationQuestionType {
    heading: string | null;
    title: string | null;
    subtitle: string | null;
    notes: string | null;
    wordLimit: number | null;
    complete: boolean | null;
}
