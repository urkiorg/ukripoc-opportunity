import { WebsiteListing, ApplicationListing, WorkflowItem } from "./types";

export const checkWebsiteListingComplete = (
    listing: WebsiteListing
): boolean => {
    return !!(listing.description && listing.lastPublished);
};
export const checkApplicationListingComplete = (
    listing: ApplicationListing
): boolean => {
    return (
        !!(listing.openApplication && listing.closeApplication) &&
        (!listing.applicationQuestions ||
            !listing.applicationQuestions.items ||
            !listing.applicationQuestions.items.find(
                question => question && !question.complete
            ))
    );
};

export const isWebsiteListing = (
    listing: WorkflowItem
): listing is WebsiteListing =>
    !!listing && listing.__typename === "WebsiteListing";

export const isApplicationListing = (
    listing: WorkflowItem
): listing is ApplicationListing =>
    !!listing && listing.__typename === "Application";

export const listingIsComplete = (listing: WorkflowItem) =>
    !listing ||
    (isWebsiteListing(listing)
        ? checkWebsiteListingComplete(listing)
        : checkApplicationListingComplete(listing));
