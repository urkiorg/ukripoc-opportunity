export type WebsiteListingType  = "WebsiteListing";
export type ApplicationType  = "Application"

export interface WebsiteListing {
    __typename: WebsiteListingType;
    id: string;
    rank: number;
    lastPublished: string | null;
    description: string | null;
}

export interface ApplicationListing {
    __typename: ApplicationType;
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
