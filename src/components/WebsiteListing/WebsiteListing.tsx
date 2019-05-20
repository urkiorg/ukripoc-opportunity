import React, { FC, useState, useCallback } from "react";
import styles from "./WebsiteListing.module.scss";
import Button from "@govuk-react/button";

import { H2, H4 } from "@govuk-react/heading";
import Details from "@govuk-react/details";
import TextArea from "@govuk-react/text-area";

import { ukriGreen } from "../../theme";
import { GetWebsiteListingQuery } from "../../API";
import { Link } from "@reach/router";

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

    const [listingDescription, setlistingDescription] = useState(
        defaultListingDescription
    );

    console.log(listingDescription);

    const onButtonClick = useCallback(() => {
        updateWebsiteListing(listingDescription);
    }, [listingDescription, updateWebsiteListing]);

    const onInputChange = useCallback(
        event => setlistingDescription(event.target.value),
        []
    );

    return (
        <div className={styles.wrap}>
            <H4> {websiteListing.getWebsiteListing!.opportunity!.name}</H4>
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
            <textarea
                name="HLS"
                onChange={onInputChange}
                defaultValue={defaultListingDescription}
            />

            <Button buttonColour={ukriGreen} onClick={onButtonClick}>
                Publish
            </Button>
        </div>
    );
};

export default WebsiteListing;
