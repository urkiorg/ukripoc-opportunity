interface Opportunity {
    id: string;
    name: string;
    description: string;
    funders: string[];
    fundersComplete?: boolean;
    openDate: string | null;
    closeDate: string | null;
    websiteListings: WebsiteListing[] | null;
    teammembers: TeamMember[] | null;
    teammembersComplete: boolean | null;
    type: OpportunityType | null;
    typeComplete: boolean | null;
}

export interface WebsiteListing {
    id: string;
    rank: number;
    lastPublished: string | null;
    description: string | null;
    __typename: string;
}

interface TeamMember {
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
