interface Opportunity {
    __typename: string;
    id: string;
    name: string;
    description: string | null;
    funders: (string | null)[] | null;
    fundersComplete?: boolean | null;
    websiteListings?: WebsiteListings | null;
    teammembers?: TeamMembers | null;
    teammembersComplete?: boolean | null;
    type?: OpportunityType | null;
    typeComplete?: boolean | null;
    application?: Applications | null;
}

export type WorkflowItem = ApplicationListing | WebsiteListing | null;

export interface Applications {
    items: (ApplicationListing | null)[] | null;
}

export interface WebsiteListings {
    items: (WebsiteListing | null)[] | null;
}
export interface WebsiteListing {
    id: string;
    rank: number;
    lastPublished: string | null;
    description: string | null;
    __typename: "WebsiteListing";
}

export interface TeamMembers {
    items: (TeamMemberListing | null)[] | null;
}

export interface TeamMemberListing {
    id: string;
    name: string;
    role: string | null;
}

export interface OpportunityType {
    id: string;
    name: string;
    description: string;
}

export interface Obj {
    [key: string]: any;
}

export interface ApplicationListing {
    __typename: "Application";
    id: string;
    rank: number;
    openApplication: string | null;
    closeApplication: string | null;
    applicationQuestions: {
        items: (ApplicationQuestionType | null)[] | null;
    } | null;
}

export interface ApplicationQuestionType {
    heading: string | null;
    title: string | null;
    subtitle: string | null;
    notes: string | null;
    wordLimit: number | null;
    complete: boolean | null;
}

export interface WorkflowTypes {
    application: "Application";
    websiteListing: "Website Listing";
}

export interface WorkflowUrls {
    application: "application";
    websiteListing: "website-listing";
}
