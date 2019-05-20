interface ListingEvent {
    id: string;
    opportunityId: string;
    name: string;
    description?: string;
    funders: string[];
    openDate?: string;
    closeDate?: string;
    lastPublished?: string;
}

interface Opportunity {
    id: string;
    name: string;
    description: string;
    funders: string[];
    fundersComplete?: boolean;
    openDate?: string;
    closeDate?: string;
    websiteListings?: WebsiteListing[];
    teammembers?: TeamMember[];
    teammembersComplete?: boolean;
    type?: OpportunityType;
    typeComplete?: boolean;
}

interface WebsiteListing {
    id: string;
    rank: number;
    lastPublished?: string;
    description?: string;
}

interface TeamMember {
    id: string;
    name: string;
    role?: string;
}

interface OpportunityType {
    id: string;
    name: string;
    description: string;
}
