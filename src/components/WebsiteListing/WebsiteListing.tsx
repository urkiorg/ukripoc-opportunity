import React, { FC, useState, useCallback } from "react";
import styles from "./WebsiteListing.module.scss";
import Button from "@govuk-react/button";

import { H2, H4 } from "@govuk-react/heading";
import Details from "@govuk-react/details";
import TextArea from "@govuk-react/text-area";

import { ukriGreen } from "../../theme";
import { GetWebsiteListingQuery } from "../../API";
import { Link } from "@reach/router";

import GridRow from "@govuk-react/grid-row";
import GridCol from "@govuk-react/grid-col";
import Label from "@govuk-react/label";
import SectionBreak from "@govuk-react/section-break";

interface Props {
    updateWebsiteListing: (name: string) => void;
    websiteListing: GetWebsiteListingQuery;
}

export const WebsiteListing: FC<Props> = ({
    updateWebsiteListing,
    websiteListing
}) => {
    const defaultListingDescription =
        websiteListing.getWebsiteListing &&
        websiteListing.getWebsiteListing.description
            ? websiteListing.getWebsiteListing.description
            : "";

    const opportunityName =
        websiteListing.getWebsiteListing &&
        websiteListing.getWebsiteListing.opportunity
            ? websiteListing.getWebsiteListing.opportunity.name
            : "";

    const [listingDescription, setlistingDescription] = useState(
        defaultListingDescription
    );

    const onButtonClick = useCallback(() => {
        updateWebsiteListing(listingDescription);
    }, [listingDescription, updateWebsiteListing]);

    const onInputChange = useCallback(
        event => setlistingDescription(event.target.value),
        [listingDescription]
    );

    console.log("The loaded in value is: ", defaultListingDescription);

    return (
        <div className={styles.wrap}>
            <H4> {opportunityName}</H4>
            <H2 textColour={ukriGreen}>Website listing</H2>
            <Details summary="About this workflow component">
                The public website component allows you to define the
                opportunity details that are visible to optential applicants via
                the UKRI website. Only information defined within this component
                will be published. If you have added an application component,
                open and close dates will be published.
            </Details>
            <p>Open date: Unavailable (set in the Application component)</p>
            <p>Close date: Unavailable (set in the Application component)</p>
            <b> High level summary </b>

            <TextArea
                mb={3}
                input={{
                    onChange: onInputChange,
                    value: defaultListingDescription
                }}
                meta={{
                    name: "hls",
                    active: true,
                    initial: defaultListingDescription
                }}
            />

            <GridRow>
                <GridCol setWidth="70%">
                    <Button buttonColour={ukriGreen} onClick={onButtonClick}>
                        Publish
                    </Button>
                </GridCol>
                <GridCol>
                    <Button onClick={onButtonClick}>
                        Save and return without publishing
                    </Button>
                </GridCol>
            </GridRow>
        </div>
    );
};

export default WebsiteListing;
