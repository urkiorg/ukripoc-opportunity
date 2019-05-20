import React, { FC, HTMLAttributes, useCallback } from "react";
import cx from "classnames";
import styles from "./WorkflowComponentAdd.module.scss";

import Select from "@govuk-react/select";
import Button from "@govuk-react/button";
import { navigate } from "@reach/router";

import { useMutation } from "react-apollo-hooks";
import { gql } from "apollo-boost";
import { getOpportunity } from "../../graphql/queries";

// interface Props {
//     addOpportunityWorkFlowComponent: (id: string) => void;
// }

interface Props {
    opportunityId: string;
}

const CREATE_WORKFLOW_COMPONENT = gql(getOpportunity);

export const WorkflowComponentAdd: FC<Props> = ({ opportunityId }) => {
    const addOpportunityMutation = useMutation(CREATE_WORKFLOW_COMPONENT);

    const onButtonClick = useCallback(
        async (name: string) => {
            const opportunityId = 1;

            const result = await addOpportunityMutation({
                variables: {
                    input: { opportunity: opportunityId }
                }
            });

            const { data, loading, error } = result;

            if (data) {
                navigate(`/setup/${data.createOpportunity.id}`);
            }
        },
        [addOpportunityMutation]
    );

    return (
        <div>
            <p> Add workflow component</p>

            <Select name="group1">
                <option value="0">Website Listing</option>
            </Select>

            <Button onClick={onButtonClick}> Save </Button>
        </div>
    );
};

// export const WorkflowComponentAdd: FC<Props> = ({ ...props }) => (

// );

export default WorkflowComponentAdd;
