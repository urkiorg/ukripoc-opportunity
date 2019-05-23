import React, { FC, useState, useCallback } from "react";
import styles from "./WebsiteListing.module.scss";
import Button from "@govuk-react/button";

import { H2, H4 } from "@govuk-react/heading";
import P from "@govuk-react/paragraph";
import Details from "@govuk-react/details";
import TextArea from "@govuk-react/text-area";
import Breadcrumbs from "@govuk-react/breadcrumbs";
import Caption from "@govuk-react/caption";

import { ukriGreen, Title } from "../../theme";
import { GetWebsiteListingQuery } from "../../API";
import { Link } from "@reach/router";

import GridRow from "@govuk-react/grid-row";
import GridCol from "@govuk-react/grid-col";
import Label from "@govuk-react/label";
import SectionBreak from "@govuk-react/section-break";

interface Props {
    updateWebsiteListing: (name: string) => void;
    websiteListing?: GetWebsiteListingQuery;
}

export const WebsiteListing: FC<Props> = ({
    updateWebsiteListing,
    websiteListing
}) => {
    const defaultListingDescription =
        websiteListing &&
        websiteListing.getWebsiteListing &&
        websiteListing.getWebsiteListing.description
            ? websiteListing.getWebsiteListing.description
            : "";
    const [listingDescription, setlistingDescription] = useState(
        defaultListingDescription
    );

    const onButtonClick = useCallback(() => {
        updateWebsiteListing(listingDescription);
    }, [listingDescription, updateWebsiteListing]);

    const onInputChange = useCallback(
        event => {
            console.log(event.target.value);
            setlistingDescription(event.target.value);
        },
        [listingDescription]
    );

    if (!websiteListing || !websiteListing.getWebsiteListing) {
        return <Title>Not found</Title>;
    }

    const opportunityName =
        websiteListing.getWebsiteListing &&
        websiteListing.getWebsiteListing.opportunity
            ? websiteListing.getWebsiteListing.opportunity.name
            : "";

    const opportunityId =
        websiteListing.getWebsiteListing &&
        websiteListing.getWebsiteListing.opportunity
            ? websiteListing.getWebsiteListing.opportunity.id
            : "";

    console.log("The loaded in value is: ", defaultListingDescription);

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
            <P mb={0}>
                Open date: Unavailable (set in the Application component)
            </P>
            <P>Close date: Unavailable (set in the Application component)</P>
            <P mb={3} mt={6}>
                **High level summary**
            </P>

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
                    <Button
                        onClick={onButtonClick}
                        buttonColour="#fff"
                        buttonHoverColour="#fff"
                        buttonShadowColour="#fff"
                        buttonTextColour="blue"
                    >
                        Save and return without publishing
                    </Button>
                </GridCol>
            </GridRow>
        </div>
    );
};

export default WebsiteListing;
