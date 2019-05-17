interface OpportunityUpdateEvent {
    id: string;
    name: string;
    description: string;
    funders: string[];
    openDate?: string;
    closeDate?: string;
    websiteListings?: WebsiteListing[];
}

interface WebsiteListing {
    id: string;
    rank: number;
    lastPublished?: string;
    description?: string;
}

interface WebsiteListingPublish {
    listingId: string;
    opportunityId: string;
    description?: string;
}
