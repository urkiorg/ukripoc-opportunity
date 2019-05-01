/* tslint:disable */
//  This file was automatically generated and should not be edited.

export type CreateOpportunityInput = {
  id?: string | null,
  name: string,
  description?: string | null,
};

export type UpdateOpportunityInput = {
  id: string,
  name?: string | null,
  description?: string | null,
};

export type DeleteOpportunityInput = {
  id?: string | null,
};

export type ModelOpportunityFilterInput = {
  id?: ModelIDFilterInput | null,
  name?: ModelStringFilterInput | null,
  description?: ModelStringFilterInput | null,
  and?: Array< ModelOpportunityFilterInput | null > | null,
  or?: Array< ModelOpportunityFilterInput | null > | null,
  not?: ModelOpportunityFilterInput | null,
};

export type ModelIDFilterInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export type ModelStringFilterInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export type CreateOpportunityMutationVariables = {
  input: CreateOpportunityInput,
};

export type CreateOpportunityMutation = {
  createOpportunity:  {
    __typename: "Opportunity",
    id: string,
    name: string,
    description: string | null,
  } | null,
};

export type UpdateOpportunityMutationVariables = {
  input: UpdateOpportunityInput,
};

export type UpdateOpportunityMutation = {
  updateOpportunity:  {
    __typename: "Opportunity",
    id: string,
    name: string,
    description: string | null,
  } | null,
};

export type DeleteOpportunityMutationVariables = {
  input: DeleteOpportunityInput,
};

export type DeleteOpportunityMutation = {
  deleteOpportunity:  {
    __typename: "Opportunity",
    id: string,
    name: string,
    description: string | null,
  } | null,
};

export type GetOpportunityQueryVariables = {
  id: string,
};

export type GetOpportunityQuery = {
  getOpportunity:  {
    __typename: "Opportunity",
    id: string,
    name: string,
    description: string | null,
  } | null,
};

export type ListOpportunitysQueryVariables = {
  filter?: ModelOpportunityFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListOpportunitysQuery = {
  listOpportunitys:  {
    __typename: "ModelOpportunityConnection",
    items:  Array< {
      __typename: "Opportunity",
      id: string,
      name: string,
      description: string | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type OnCreateOpportunitySubscription = {
  onCreateOpportunity:  {
    __typename: "Opportunity",
    id: string,
    name: string,
    description: string | null,
  } | null,
};

export type OnUpdateOpportunitySubscription = {
  onUpdateOpportunity:  {
    __typename: "Opportunity",
    id: string,
    name: string,
    description: string | null,
  } | null,
};

export type OnDeleteOpportunitySubscription = {
  onDeleteOpportunity:  {
    __typename: "Opportunity",
    id: string,
    name: string,
    description: string | null,
  } | null,
};
