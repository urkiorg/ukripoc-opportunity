import React, {
    FC,
    HTMLAttributes,
    useCallback,
    useState,
    SyntheticEvent
} from "react";
import cx from "classnames";

import Checkbox from "@govuk-react/checkbox";
import Button from "@govuk-react/button";

import { GetOpportunityQuery, UpdateOpportunityMutation } from "../../API";

interface Funder {
    name: string;
}
interface Props {
    application: string;
}

export const SetupApplication: FC<Props> = ({ application }) => {
    return (
        <div>
            <h1>Application</h1>
        </div>
    );
};

export default SetupApplication;
