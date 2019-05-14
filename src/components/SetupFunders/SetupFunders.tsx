import React, { FC, HTMLAttributes } from "react";
import cx from "classnames";
import styles from "./SetupFunders.module.scss";

import Checkbox from "@govuk-react/checkbox";

import Button from "@govuk-react/button";
import { ListOpportunitysQuery } from "../../API";

interface Props {
    funders: any;
    opportunity: ListOpportunitysQuery;
}

function fundersList(funders: any) {
    return funders.map((funder: any, i: String) => (
        <Checkbox key={i}>{funder.name}</Checkbox>
    ));
}

function save() {
    console.log("SAVE IT!");
}

export const SetupFunders: FC<Props> = ({ funders }) => {
    return (
        <div>
            <h1> Funders </h1>
            {fundersList(funders)}
            <Button onClick={() => save()}> Done </Button>
        </div>
    );
};

export default SetupFunders;
