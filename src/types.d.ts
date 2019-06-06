export type WebsiteListing  = "WebsiteListing";
export type Application  = "Application"

export interface WebsiteListing {
    id: string;
    rank: number;
    lastPublished: string | null;
    description: string | null;
    __typename: WebsiteListing;
}

export interface ApplicationListing {
    __typename: Application;
    id: string;
    rank: number;
    openApplication: string | null;
    closeApplication: string | null;
}

export interface ApplicationQuestionType {
    heading: string | null;
    title: string | null;
    subtitle: string | null;
    notes: string | null;
    wordLimit: number | null;
    complete: boolean | null;
}

export interface ApplicationTypes {
    application: "Application";
    websiteListing: "Website Listing";
}
