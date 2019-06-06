import React, { FC, useCallback, useState, SyntheticEvent } from "react";

import Checkbox from "@govuk-react/checkbox";
import Button from "@govuk-react/button";

import Breadcrumbs from "@govuk-react/breadcrumbs";
import Caption from "@govuk-react/caption";

import { Title } from "../../theme";

import { GetOpportunityQuery } from "../../API";

interface Funder {
    name: string;
}
interface Props {
    funders: Funder[];
    currentOpportunity: GetOpportunityQuery;
    fundersChanged: (funder: string[]) => void;
}

export const SetupFunders: FC<Props> = ({
    funders,
    fundersChanged,
    currentOpportunity
}) => {
    const selected =
        (currentOpportunity.getOpportunity &&
            currentOpportunity.getOpportunity.funders) ||
        [];

    const opportunityName =
        currentOpportunity.getOpportunity &&
        currentOpportunity.getOpportunity.name;

    const opportunityId =
        currentOpportunity.getOpportunity &&
        currentOpportunity.getOpportunity.id;

    const [funderList, setFunderList] = useState(
        funders.reduce(
            (prev, next) => {
                prev[next.name] = !!selected.find(f => !!f && f === next.name);
                return prev;
            },
            {} as { [key: string]: boolean }
        )
    );

    const updateFunderStatus = useCallback(
        (funder: string, state: boolean) => {
            setFunderList(list => {
                const newList = { ...list };
                newList[funder] = state;
                return newList;
            });
        },
        [setFunderList]
    );

    const save = useCallback(() => {
        fundersChanged(
            Object.keys(funderList).filter(funder => funderList[funder])
        );
    }, [funderList, fundersChanged]);

    return (
        <div>
            <Breadcrumbs>
                <Breadcrumbs.Link href={`/setup/${opportunityId}`}>
                    Opportunity setup
                </Breadcrumbs.Link>
                Funders
            </Breadcrumbs>
            <Caption mb={1}>{opportunityName} </Caption>
            <Title>Funders</Title>
            {funders.map(funder => (
                <Checkbox
                    key={funder.name}
                    checked={funderList[funder.name]}
                    onChange={(event: SyntheticEvent<HTMLInputElement>) => {
                        updateFunderStatus(
                            funder.name,
                            event.currentTarget.checked
                        );
                    }}
                >
                    {funder.name}
                </Checkbox>
            ))}
            <Button onClick={save}>Done</Button>
        </div>
    );
};

export default SetupFunders;
