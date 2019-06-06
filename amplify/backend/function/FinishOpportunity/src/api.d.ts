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

interface Applications {
    items: (ApplicationListing | null)[] | null;
}

interface WebsiteListings {
    items: (WebsiteListing | null)[] | null;
}
interface WebsiteListing {
    id: string;
    rank: number;
    lastPublished: string | null;
    description: string | null;
    __typename: string;
}

interface TeamMembers {
    items: (TeamMemberListing | null)[] | null;
}

interface TeamMemberListing {
    id: string;
    name: string;
    role: string | null;
}

interface OpportunityType {
    id: string;
    name: string;
    description: string;
}

interface Obj {
    [key: string]: any;
}

interface ApplicationListing {
    __typename: string;
    id: string;
    rank: number;
    openApplication: string | null;
    closeApplication: string | null;
}

interface ApplicationQuestionType {
    heading: string | null;
    title: string | null;
    subtitle: string | null;
    notes: string | null;
    wordLimit: number | null;
    complete: boolean | null;
}

interface ApplicationTypes {
    application: "Application";
    websiteListing: "Website Listing";
}

interface Application {
    applicationOpportunityId?: string;
    closeApplication?: string;
    createdAt?: string;
    id?: string;
    openApplication?: string;
    rank?: number;
    updatedAt?: string;
}
