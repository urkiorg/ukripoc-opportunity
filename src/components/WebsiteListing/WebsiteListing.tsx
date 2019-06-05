import React, { FC, useState, useCallback } from "react";
import styles from "./WebsiteListing.module.scss";

import Button from "@govuk-react/button";
import Label from "@govuk-react/label-text";
import { H4 } from "@govuk-react/heading";
import Details from "@govuk-react/details";
import TextArea from "@govuk-react/text-area";
import Breadcrumbs from "@govuk-react/breadcrumbs";
import Caption from "@govuk-react/caption";
import GridRow from "@govuk-react/grid-row";
import GridCol from "@govuk-react/grid-col";

import { ukriGreen, Title, LinkButton } from "../../theme";

import { GetWebsiteListingQuery } from "../../API";

interface Props {
    updateWebsiteListing: (name: string) => void;
    websiteListing?: GetWebsiteListingQuery;
}

export const WebsiteListing: FC<Props> = ({
    updateWebsiteListing,
    websiteListing
}) => {
    const listing = websiteListing && websiteListing.getWebsiteListing;

    const defaultListingDescription = (listing && listing.description) || "";

    const [listingDescription, setlistingDescription] = useState(
        defaultListingDescription
    );

    const onButtonClick = useCallback(() => {
        updateWebsiteListing(listingDescription);
    }, [listingDescription, updateWebsiteListing]);

    const onInputChange = useCallback(event => {
        setlistingDescription(event.target.value);
    }, []);

    const opportunityName =
        (listing && listing.opportunity && listing.opportunity.name) || "";

    const opportunityId =
        (listing && listing.opportunity && listing.opportunity.id) || "";

    const lastPublished =
        listing && listing.lastPublished && new Date(listing.lastPublished);

    const linkBack = `/setup/${opportunityId}`;

    const breadcrumbs = (
        <Breadcrumbs>
            <Breadcrumbs.Link href={linkBack}>
                Opportunity setup
            </Breadcrumbs.Link>
            Website listing
        </Breadcrumbs>
    );

    return (
        <div className={styles.wrap}>
            {breadcrumbs}
            <Caption mb={1}>{opportunityName}</Caption>
            <Title>Website listing</Title>
            <Details summary="About this workflow component">
                The public website component allows you to define the
                opportunity details that are visible to optential applicants via
                the UKRI website. Only information defined within this component
                will be published. If you have added an application component,
                open and close dates will be published.
            </Details>

            {lastPublished && (
                <Label mb={2}>
                    Last published: {lastPublished.toLocaleDateString()}{" "}
                    {lastPublished.toLocaleTimeString()}
                </Label>
            )}

            <H4>High level summary</H4>

            <TextArea
                mb={3}
                input={{
                    onChange: onInputChange,
                    value: listingDescription
                }}
                meta={{
                    name: "hls",
                    active: true,
                    initial: listingDescription
                }}
            />

            <GridRow>
                <GridCol>
                    <Button buttonColour={ukriGreen} onClick={onButtonClick}>
                        Publish
                    </Button>
                </GridCol>
                <GridCol setWidth="90%">
                    <LinkButton onClick={onButtonClick}>
                        Save and return without publishing
                    </LinkButton>
                </GridCol>
            </GridRow>
        </div>
    );
};

export default WebsiteListing;
