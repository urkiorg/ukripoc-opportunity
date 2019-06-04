import React, { FC, HTMLAttributes } from "react";
import LoadingBox from "@govuk-react/loading-box";
import { Query } from "react-apollo";

import { Link } from "@reach/router";

import gql from "graphql-tag";

import Table from "@govuk-react/table";

interface Props extends HTMLAttributes<HTMLElement> {}

const GET_OPP = gql`
    {
        listOpportunitys {
            items {
                name
                description
                id
            }
        }
    }
`;

export const AllOpportunities: FC<Props> = ({ ...props }) => (
    <div>
        <Query query={GET_OPP} fetchPolicy="cache-and-network">
            {({ loading, error, data, refetch }: any) => {
                if (error) return `Error! ${error.message}`;
                return (
                    <LoadingBox loading={loading}>
                        <Table caption="All opportunities">
                            {data &&
                                data.listOpportunitys &&
                                data.listOpportunitys.items.map(
                                    (opportunity: any, i: any) => (
                                        <Table.Row key={i}>
                                            <Table.Cell>
                                                <Link
                                                    to={`/setup/${
                                                        opportunity.id
                                                    }`}
                                                >
                                                    {opportunity.name}
                                                </Link>
                                            </Table.Cell>
                                        </Table.Row>
                                    )
                                )}
                        </Table>
                    </LoadingBox>
                );
            }}
        </Query>
    </div>
);

export default AllOpportunities;
