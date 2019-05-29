import React, { FC } from "react";
import { Link } from "@reach/router";
import GridRow from "@govuk-react/grid-row";
import GridCol from "@govuk-react/grid-col";
import { SettingsListItem } from "../../theme";

interface Props {
    component: any;
    deleteListing: (id: string) => (void);
    innerRef: any;
    draggableProps: any;
    dragHandleProps: any;
}

const typeNameToUrl = (name: string) => {
    switch (name) {
        case "Application":
            return "application";
        case "WebsiteListing":
            return "website-listing";
        default:
            console.warn("NO TYPENAMETOURL");
    }
}

export const WorkflowComponentItem: FC<Props> = ({...props}) => {
    const niceName = typeNameToUrl(props.component.__typename);
    const listingLink = `/component/${niceName}/${props.component.id}`;

    return (
        <div>
            <SettingsListItem ref={props.innerRef}>
                <GridRow>
                    <GridCol setWidth="90%">
                        <Link to={listingLink}>{niceName}</Link>
                    </GridCol>
                    <GridCol>
                        <button onClick={() => props.deleteListing(props.component.id)}>
                            Delete
                        </button>
                    </GridCol>
                </GridRow>
            </SettingsListItem>
        </div>
    )
};

export default WorkflowComponentItem;
