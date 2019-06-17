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