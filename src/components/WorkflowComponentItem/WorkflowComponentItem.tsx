import React, { FC } from "react";
import { Link } from "@reach/router";
import GridRow from "@govuk-react/grid-row";
import GridCol from "@govuk-react/grid-col";
import { SettingsListItem } from "../../theme";
import { WebsiteListing, ApplicationListing, ApplicationTypes } from "../../types";
import styles from "./WorkflowComponentItem.module.scss";

interface Props {
    component: WebsiteListing | ApplicationListing;
    deleteListing: (id: string) => (void);
}

const niceName: ApplicationTypes = {
    application: "Application",
    websiteListing: "Website Listing",
}

const formatCasing = (word: string) => word.charAt(0).toLowerCase() + word.slice(1);
const noInformation = "Unknown"

const renderApplicationDetails = (component: ApplicationListing) => {
    const {openApplication, closeApplication} = component;
    return (
        <div className={styles.info}>
            <p>Application open</p>
            <p className={styles.bold}>
                {openApplication ? openApplication : noInformation}
            </p>
            <p>Application close</p>
            <p className={styles.bold}>
                {closeApplication ? closeApplication : noInformation}
            </p>
        </div>
    )
}

const renderWebsiteListing = (component: WebsiteListing) => {
    const {lastPublished} = component;
    return (
        !lastPublished &&
            <div className={styles.info}>
                <p>Publish data</p>
                <p className={styles.bold}>
                    {lastPublished ? lastPublished : noInformation}
                </p>
            </div>
    )
}

export const WorkflowComponentItem: FC<Props> = ({deleteListing, component}) => {
    const formattedName = niceName[formatCasing(component.__typename) as keyof ApplicationTypes];
    const listingLink = `/component/${formattedName}/${component.id}`;
    
    return (
        <SettingsListItem className={styles.row}>
            <GridRow>
                <GridCol className={styles.draggable} setWidth="50%">
                    <Link className={styles.title} to={listingLink}>{formattedName}</Link>
                </GridCol>
                <GridCol className={styles.divider}>
                    <a className={styles.remove} onClick={() => deleteListing(component.id)}>
                        remove
                    </a>
                </GridCol>
                <GridCol>
                    {component.__typename === "Application" && 
                        renderApplicationDetails(component) }
                    {component.__typename === "WebsiteListing" 
                        && renderWebsiteListing(component) }
                </GridCol>
            </GridRow>
        </SettingsListItem>
    )
};

export default WorkflowComponentItem;
