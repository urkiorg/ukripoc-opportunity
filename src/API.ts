/* tslint:disable */
//  This file was automatically generated and should not be edited.

export type CreateOpportunityInput = {
  id?: string | null,
  name: string,
  description?: string | null,
  funders?: Array< string | null > | null,
  fundersComplete?: boolean | null,
  teammembersComplete?: boolean | null,
  typeComplete?: boolean | null,
  opportunityTypeId?: string | null,
};

export type UpdateOpportunityInput = {
  id: string,
  name?: string | null,
  description?: string | null,
  funders?: Array< string | null > | null,
  fundersComplete?: boolean | null,
  teammembersComplete?: boolean | null,
  typeComplete?: boolean | null,
  opportunityTypeId?: string | null,
};

export type DeleteOpportunityInput = {
  id?: string | null,
};

export type CreateTeamMemberInput = {
  id?: string | null,
  name: string,
  role?: string | null,
  teamMemberOpportunityId?: string | null,
};

export type UpdateTeamMemberInput = {
  id: string,
  name?: string | null,
  role?: string | null,
  teamMemberOpportunityId?: string | null,
};

export type DeleteTeamMemberInput = {
  id?: string | null,
};

export type CreateOpportunityTypeInput = {
  id?: string | null,
  name: string,
  description: string,
  opportunityTypeOpportunitiesId?: string | null,
};

export type UpdateOpportunityTypeInput = {
  id: string,
  name?: string | null,
  description?: string | null,
  opportunityTypeOpportunitiesId?: string | null,
};

export type DeleteOpportunityTypeInput = {
  id?: string | null,
};

export type CreateWebsiteListingInput = {
  id?: string | null,
  rank: number,
  lastPublished?: string | null,
  description?: string | null,
  websiteListingOpportunityId?: string | null,
};

export type UpdateWebsiteListingInput = {
  id: string,
  rank?: number | null,
  lastPublished?: string | null,
  description?: string | null,
  websiteListingOpportunityId?: string | null,
};

export type DeleteWebsiteListingInput = {
  id?: string | null,
};

export type CreateApplicationInput = {
  id?: string | null,
  rank: number,
  openApplication?: string | null,
  closeApplication?: string | null,
  applicationOpportunityId?: string | null,
};

export type UpdateApplicationInput = {
  id: string,
  rank?: number | null,
  openApplication?: string | null,
  closeApplication?: string | null,
  applicationOpportunityId?: string | null,
};

export type DeleteApplicationInput = {
  id?: string | null,
};

export type CreateApplicationQuestionInput = {
  id?: string | null,
  heading?: string | null,
  title?: string | null,
  subtitle?: string | null,
  notes?: string | null,
  wordLimit?: number | null,
  complete?: boolean | null,
  applicationQuestionApplicationId?: string | null,
};

export type UpdateApplicationQuestionInput = {
  id: string,
  heading?: string | null,
  title?: string | null,
  subtitle?: string | null,
  notes?: string | null,
  wordLimit?: number | null,
  complete?: boolean | null,
  applicationQuestionApplicationId?: string | null,
};

export type DeleteApplicationQuestionInput = {
  id?: string | null,
};

export type ModelOpportunityFilterInput = {
  id?: ModelIDFilterInput | null,
  name?: ModelStringFilterInput | null,
  description?: ModelStringFilterInput | null,
  funders?: ModelStringFilterInput | null,
  fundersComplete?: ModelBooleanFilterInput | null,
  teammembersComplete?: ModelBooleanFilterInput | null,
  typeComplete?: ModelBooleanFilterInput | null,
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

export type ModelBooleanFilterInput = {
  ne?: boolean | null,
  eq?: boolean | null,
};

export type ModelTeamMemberFilterInput = {
  id?: ModelIDFilterInput | null,
  name?: ModelStringFilterInput | null,
  role?: ModelStringFilterInput | null,
  and?: Array< ModelTeamMemberFilterInput | null > | null,
  or?: Array< ModelTeamMemberFilterInput | null > | null,
  not?: ModelTeamMemberFilterInput | null,
};

export type ModelOpportunityTypeFilterInput = {
  id?: ModelIDFilterInput | null,
  name?: ModelStringFilterInput | null,
  description?: ModelStringFilterInput | null,
  and?: Array< ModelOpportunityTypeFilterInput | null > | null,
  or?: Array< ModelOpportunityTypeFilterInput | null > | null,
  not?: ModelOpportunityTypeFilterInput | null,
};

export type ModelWebsiteListingFilterInput = {
  id?: ModelIDFilterInput | null,
  rank?: ModelIntFilterInput | null,
  lastPublished?: ModelStringFilterInput | null,
  description?: ModelStringFilterInput | null,
  and?: Array< ModelWebsiteListingFilterInput | null > | null,
  or?: Array< ModelWebsiteListingFilterInput | null > | null,
  not?: ModelWebsiteListingFilterInput | null,
};

export type ModelIntFilterInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  contains?: number | null,
  notContains?: number | null,
  between?: Array< number | null > | null,
};

export type ModelApplicationFilterInput = {
  id?: ModelIDFilterInput | null,
  rank?: ModelIntFilterInput | null,
  openApplication?: ModelStringFilterInput | null,
  closeApplication?: ModelStringFilterInput | null,
  and?: Array< ModelApplicationFilterInput | null > | null,
  or?: Array< ModelApplicationFilterInput | null > | null,
  not?: ModelApplicationFilterInput | null,
};

export type ModelApplicationQuestionFilterInput = {
  id?: ModelIDFilterInput | null,
  heading?: ModelStringFilterInput | null,
  title?: ModelStringFilterInput | null,
  subtitle?: ModelStringFilterInput | null,
  notes?: ModelStringFilterInput | null,
  wordLimit?: ModelIntFilterInput | null,
  complete?: ModelBooleanFilterInput | null,
  and?: Array< ModelApplicationQuestionFilterInput | null > | null,
  or?: Array< ModelApplicationQuestionFilterInput | null > | null,
  not?: ModelApplicationQuestionFilterInput | null,
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
    funders: Array< string | null > | null,
    fundersComplete: boolean | null,
    teammembers:  {
      __typename: "ModelTeamMemberConnection",
      items:  Array< {
        __typename: "TeamMember",
        id: string,
        name: string,
        role: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    teammembersComplete: boolean | null,
    type:  {
      __typename: "OpportunityType",
      id: string,
      name: string,
      description: string,
      opportunities:  {
        __typename: "Opportunity",
        id: string,
        name: string,
        description: string | null,
        funders: Array< string | null > | null,
        fundersComplete: boolean | null,
        teammembersComplete: boolean | null,
        typeComplete: boolean | null,
      } | null,
    } | null,
    typeComplete: boolean | null,
    websiteListings:  {
      __typename: "ModelWebsiteListingConnection",
      items:  Array< {
        __typename: "WebsiteListing",
        id: string,
        rank: number,
        lastPublished: string | null,
        description: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    application:  {
      __typename: "ModelApplicationConnection",
      items:  Array< {
        __typename: "Application",
        id: string,
        rank: number,
        openApplication: string | null,
        closeApplication: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
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
    funders: Array< string | null > | null,
    fundersComplete: boolean | null,
    teammembers:  {
      __typename: "ModelTeamMemberConnection",
      items:  Array< {
        __typename: "TeamMember",
        id: string,
        name: string,
        role: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    teammembersComplete: boolean | null,
    type:  {
      __typename: "OpportunityType",
      id: string,
      name: string,
      description: string,
      opportunities:  {
        __typename: "Opportunity",
        id: string,
        name: string,
        description: string | null,
        funders: Array< string | null > | null,
        fundersComplete: boolean | null,
        teammembersComplete: boolean | null,
        typeComplete: boolean | null,
      } | null,
    } | null,
    typeComplete: boolean | null,
    websiteListings:  {
      __typename: "ModelWebsiteListingConnection",
      items:  Array< {
        __typename: "WebsiteListing",
        id: string,
        rank: number,
        lastPublished: string | null,
        description: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    application:  {
      __typename: "ModelApplicationConnection",
      items:  Array< {
        __typename: "Application",
        id: string,
        rank: number,
        openApplication: string | null,
        closeApplication: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
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
    funders: Array< string | null > | null,
    fundersComplete: boolean | null,
    teammembers:  {
      __typename: "ModelTeamMemberConnection",
      items:  Array< {
        __typename: "TeamMember",
        id: string,
        name: string,
        role: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    teammembersComplete: boolean | null,
    type:  {
      __typename: "OpportunityType",
      id: string,
      name: string,
      description: string,
      opportunities:  {
        __typename: "Opportunity",
        id: string,
        name: string,
        description: string | null,
        funders: Array< string | null > | null,
        fundersComplete: boolean | null,
        teammembersComplete: boolean | null,
        typeComplete: boolean | null,
      } | null,
    } | null,
    typeComplete: boolean | null,
    websiteListings:  {
      __typename: "ModelWebsiteListingConnection",
      items:  Array< {
        __typename: "WebsiteListing",
        id: string,
        rank: number,
        lastPublished: string | null,
        description: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    application:  {
      __typename: "ModelApplicationConnection",
      items:  Array< {
        __typename: "Application",
        id: string,
        rank: number,
        openApplication: string | null,
        closeApplication: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type CreateTeamMemberMutationVariables = {
  input: CreateTeamMemberInput,
};

export type CreateTeamMemberMutation = {
  createTeamMember:  {
    __typename: "TeamMember",
    id: string,
    name: string,
    role: string | null,
    opportunity:  {
      __typename: "Opportunity",
      id: string,
      name: string,
      description: string | null,
      funders: Array< string | null > | null,
      fundersComplete: boolean | null,
      teammembers:  {
        __typename: "ModelTeamMemberConnection",
        nextToken: string | null,
      } | null,
      teammembersComplete: boolean | null,
      type:  {
        __typename: "OpportunityType",
        id: string,
        name: string,
        description: string,
      } | null,
      typeComplete: boolean | null,
      websiteListings:  {
        __typename: "ModelWebsiteListingConnection",
        nextToken: string | null,
      } | null,
      application:  {
        __typename: "ModelApplicationConnection",
        nextToken: string | null,
      } | null,
    } | null,
  } | null,
};

export type UpdateTeamMemberMutationVariables = {
  input: UpdateTeamMemberInput,
};

export type UpdateTeamMemberMutation = {
  updateTeamMember:  {
    __typename: "TeamMember",
    id: string,
    name: string,
    role: string | null,
    opportunity:  {
      __typename: "Opportunity",
      id: string,
      name: string,
      description: string | null,
      funders: Array< string | null > | null,
      fundersComplete: boolean | null,
      teammembers:  {
        __typename: "ModelTeamMemberConnection",
        nextToken: string | null,
      } | null,
      teammembersComplete: boolean | null,
      type:  {
        __typename: "OpportunityType",
        id: string,
        name: string,
        description: string,
      } | null,
      typeComplete: boolean | null,
      websiteListings:  {
        __typename: "ModelWebsiteListingConnection",
        nextToken: string | null,
      } | null,
      application:  {
        __typename: "ModelApplicationConnection",
        nextToken: string | null,
      } | null,
    } | null,
  } | null,
};

export type DeleteTeamMemberMutationVariables = {
  input: DeleteTeamMemberInput,
};

export type DeleteTeamMemberMutation = {
  deleteTeamMember:  {
    __typename: "TeamMember",
    id: string,
    name: string,
    role: string | null,
    opportunity:  {
      __typename: "Opportunity",
      id: string,
      name: string,
      description: string | null,
      funders: Array< string | null > | null,
      fundersComplete: boolean | null,
      teammembers:  {
        __typename: "ModelTeamMemberConnection",
        nextToken: string | null,
      } | null,
      teammembersComplete: boolean | null,
      type:  {
        __typename: "OpportunityType",
        id: string,
        name: string,
        description: string,
      } | null,
      typeComplete: boolean | null,
      websiteListings:  {
        __typename: "ModelWebsiteListingConnection",
        nextToken: string | null,
      } | null,
      application:  {
        __typename: "ModelApplicationConnection",
        nextToken: string | null,
      } | null,
    } | null,
  } | null,
};

export type CreateOpportunityTypeMutationVariables = {
  input: CreateOpportunityTypeInput,
};

export type CreateOpportunityTypeMutation = {
  createOpportunityType:  {
    __typename: "OpportunityType",
    id: string,
    name: string,
    description: string,
    opportunities:  {
      __typename: "Opportunity",
      id: string,
      name: string,
      description: string | null,
      funders: Array< string | null > | null,
      fundersComplete: boolean | null,
      teammembers:  {
        __typename: "ModelTeamMemberConnection",
        nextToken: string | null,
      } | null,
      teammembersComplete: boolean | null,
      type:  {
        __typename: "OpportunityType",
        id: string,
        name: string,
        description: string,
      } | null,
      typeComplete: boolean | null,
      websiteListings:  {
        __typename: "ModelWebsiteListingConnection",
        nextToken: string | null,
      } | null,
      application:  {
        __typename: "ModelApplicationConnection",
        nextToken: string | null,
      } | null,
    } | null,
  } | null,
};

export type UpdateOpportunityTypeMutationVariables = {
  input: UpdateOpportunityTypeInput,
};

export type UpdateOpportunityTypeMutation = {
  updateOpportunityType:  {
    __typename: "OpportunityType",
    id: string,
    name: string,
    description: string,
    opportunities:  {
      __typename: "Opportunity",
      id: string,
      name: string,
      description: string | null,
      funders: Array< string | null > | null,
      fundersComplete: boolean | null,
      teammembers:  {
        __typename: "ModelTeamMemberConnection",
        nextToken: string | null,
      } | null,
      teammembersComplete: boolean | null,
      type:  {
        __typename: "OpportunityType",
        id: string,
        name: string,
        description: string,
      } | null,
      typeComplete: boolean | null,
      websiteListings:  {
        __typename: "ModelWebsiteListingConnection",
        nextToken: string | null,
      } | null,
      application:  {
        __typename: "ModelApplicationConnection",
        nextToken: string | null,
      } | null,
    } | null,
  } | null,
};

export type DeleteOpportunityTypeMutationVariables = {
  input: DeleteOpportunityTypeInput,
};

export type DeleteOpportunityTypeMutation = {
  deleteOpportunityType:  {
    __typename: "OpportunityType",
    id: string,
    name: string,
    description: string,
    opportunities:  {
      __typename: "Opportunity",
      id: string,
      name: string,
      description: string | null,
      funders: Array< string | null > | null,
      fundersComplete: boolean | null,
      teammembers:  {
        __typename: "ModelTeamMemberConnection",
        nextToken: string | null,
      } | null,
      teammembersComplete: boolean | null,
      type:  {
        __typename: "OpportunityType",
        id: string,
        name: string,
        description: string,
      } | null,
      typeComplete: boolean | null,
      websiteListings:  {
        __typename: "ModelWebsiteListingConnection",
        nextToken: string | null,
      } | null,
      application:  {
        __typename: "ModelApplicationConnection",
        nextToken: string | null,
      } | null,
    } | null,
  } | null,
};

export type CreateWebsiteListingMutationVariables = {
  input: CreateWebsiteListingInput,
};

export type CreateWebsiteListingMutation = {
  createWebsiteListing:  {
    __typename: "WebsiteListing",
    id: string,
    rank: number,
    lastPublished: string | null,
    description: string | null,
    opportunity:  {
      __typename: "Opportunity",
      id: string,
      name: string,
      description: string | null,
      funders: Array< string | null > | null,
      fundersComplete: boolean | null,
      teammembers:  {
        __typename: "ModelTeamMemberConnection",
        nextToken: string | null,
      } | null,
      teammembersComplete: boolean | null,
      type:  {
        __typename: "OpportunityType",
        id: string,
        name: string,
        description: string,
      } | null,
      typeComplete: boolean | null,
      websiteListings:  {
        __typename: "ModelWebsiteListingConnection",
        nextToken: string | null,
      } | null,
      application:  {
        __typename: "ModelApplicationConnection",
        nextToken: string | null,
      } | null,
    } | null,
  } | null,
};

export type UpdateWebsiteListingMutationVariables = {
  input: UpdateWebsiteListingInput,
};

export type UpdateWebsiteListingMutation = {
  updateWebsiteListing:  {
    __typename: "WebsiteListing",
    id: string,
    rank: number,
    lastPublished: string | null,
    description: string | null,
    opportunity:  {
      __typename: "Opportunity",
      id: string,
      name: string,
      description: string | null,
      funders: Array< string | null > | null,
      fundersComplete: boolean | null,
      teammembers:  {
        __typename: "ModelTeamMemberConnection",
        nextToken: string | null,
      } | null,
      teammembersComplete: boolean | null,
      type:  {
        __typename: "OpportunityType",
        id: string,
        name: string,
        description: string,
      } | null,
      typeComplete: boolean | null,
      websiteListings:  {
        __typename: "ModelWebsiteListingConnection",
        nextToken: string | null,
      } | null,
      application:  {
        __typename: "ModelApplicationConnection",
        nextToken: string | null,
      } | null,
    } | null,
  } | null,
};

export type DeleteWebsiteListingMutationVariables = {
  input: DeleteWebsiteListingInput,
};

export type DeleteWebsiteListingMutation = {
  deleteWebsiteListing:  {
    __typename: "WebsiteListing",
    id: string,
    rank: number,
    lastPublished: string | null,
    description: string | null,
    opportunity:  {
      __typename: "Opportunity",
      id: string,
      name: string,
      description: string | null,
      funders: Array< string | null > | null,
      fundersComplete: boolean | null,
      teammembers:  {
        __typename: "ModelTeamMemberConnection",
        nextToken: string | null,
      } | null,
      teammembersComplete: boolean | null,
      type:  {
        __typename: "OpportunityType",
        id: string,
        name: string,
        description: string,
      } | null,
      typeComplete: boolean | null,
      websiteListings:  {
        __typename: "ModelWebsiteListingConnection",
        nextToken: string | null,
      } | null,
      application:  {
        __typename: "ModelApplicationConnection",
        nextToken: string | null,
      } | null,
    } | null,
  } | null,
};

export type CreateApplicationMutationVariables = {
  input: CreateApplicationInput,
};

export type CreateApplicationMutation = {
  createApplication:  {
    __typename: "Application",
    id: string,
    rank: number,
    openApplication: string | null,
    closeApplication: string | null,
    opportunity:  {
      __typename: "Opportunity",
      id: string,
      name: string,
      description: string | null,
      funders: Array< string | null > | null,
      fundersComplete: boolean | null,
      teammembers:  {
        __typename: "ModelTeamMemberConnection",
        nextToken: string | null,
      } | null,
      teammembersComplete: boolean | null,
      type:  {
        __typename: "OpportunityType",
        id: string,
        name: string,
        description: string,
      } | null,
      typeComplete: boolean | null,
      websiteListings:  {
        __typename: "ModelWebsiteListingConnection",
        nextToken: string | null,
      } | null,
      application:  {
        __typename: "ModelApplicationConnection",
        nextToken: string | null,
      } | null,
    } | null,
    applicationQuestions:  {
      __typename: "ModelApplicationQuestionConnection",
      items:  Array< {
        __typename: "ApplicationQuestion",
        id: string,
        heading: string | null,
        title: string | null,
        subtitle: string | null,
        notes: string | null,
        wordLimit: number | null,
        complete: boolean | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type UpdateApplicationMutationVariables = {
  input: UpdateApplicationInput,
};

export type UpdateApplicationMutation = {
  updateApplication:  {
    __typename: "Application",
    id: string,
    rank: number,
    openApplication: string | null,
    closeApplication: string | null,
    opportunity:  {
      __typename: "Opportunity",
      id: string,
      name: string,
      description: string | null,
      funders: Array< string | null > | null,
      fundersComplete: boolean | null,
      teammembers:  {
        __typename: "ModelTeamMemberConnection",
        nextToken: string | null,
      } | null,
      teammembersComplete: boolean | null,
      type:  {
        __typename: "OpportunityType",
        id: string,
        name: string,
        description: string,
      } | null,
      typeComplete: boolean | null,
      websiteListings:  {
        __typename: "ModelWebsiteListingConnection",
        nextToken: string | null,
      } | null,
      application:  {
        __typename: "ModelApplicationConnection",
        nextToken: string | null,
      } | null,
    } | null,
    applicationQuestions:  {
      __typename: "ModelApplicationQuestionConnection",
      items:  Array< {
        __typename: "ApplicationQuestion",
        id: string,
        heading: string | null,
        title: string | null,
        subtitle: string | null,
        notes: string | null,
        wordLimit: number | null,
        complete: boolean | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type DeleteApplicationMutationVariables = {
  input: DeleteApplicationInput,
};

export type DeleteApplicationMutation = {
  deleteApplication:  {
    __typename: "Application",
    id: string,
    rank: number,
    openApplication: string | null,
    closeApplication: string | null,
    opportunity:  {
      __typename: "Opportunity",
      id: string,
      name: string,
      description: string | null,
      funders: Array< string | null > | null,
      fundersComplete: boolean | null,
      teammembers:  {
        __typename: "ModelTeamMemberConnection",
        nextToken: string | null,
      } | null,
      teammembersComplete: boolean | null,
      type:  {
        __typename: "OpportunityType",
        id: string,
        name: string,
        description: string,
      } | null,
      typeComplete: boolean | null,
      websiteListings:  {
        __typename: "ModelWebsiteListingConnection",
        nextToken: string | null,
      } | null,
      application:  {
        __typename: "ModelApplicationConnection",
        nextToken: string | null,
      } | null,
    } | null,
    applicationQuestions:  {
      __typename: "ModelApplicationQuestionConnection",
      items:  Array< {
        __typename: "ApplicationQuestion",
        id: string,
        heading: string | null,
        title: string | null,
        subtitle: string | null,
        notes: string | null,
        wordLimit: number | null,
        complete: boolean | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type CreateApplicationQuestionMutationVariables = {
  input: CreateApplicationQuestionInput,
};

export type CreateApplicationQuestionMutation = {
  createApplicationQuestion:  {
    __typename: "ApplicationQuestion",
    id: string,
    heading: string | null,
    title: string | null,
    subtitle: string | null,
    notes: string | null,
    wordLimit: number | null,
    application:  {
      __typename: "Application",
      id: string,
      rank: number,
      openApplication: string | null,
      closeApplication: string | null,
      opportunity:  {
        __typename: "Opportunity",
        id: string,
        name: string,
        description: string | null,
        funders: Array< string | null > | null,
        fundersComplete: boolean | null,
        teammembersComplete: boolean | null,
        typeComplete: boolean | null,
      } | null,
      applicationQuestions:  {
        __typename: "ModelApplicationQuestionConnection",
        nextToken: string | null,
      } | null,
    } | null,
    complete: boolean | null,
  } | null,
};

export type UpdateApplicationQuestionMutationVariables = {
  input: UpdateApplicationQuestionInput,
};

export type UpdateApplicationQuestionMutation = {
  updateApplicationQuestion:  {
    __typename: "ApplicationQuestion",
    id: string,
    heading: string | null,
    title: string | null,
    subtitle: string | null,
    notes: string | null,
    wordLimit: number | null,
    application:  {
      __typename: "Application",
      id: string,
      rank: number,
      openApplication: string | null,
      closeApplication: string | null,
      opportunity:  {
        __typename: "Opportunity",
        id: string,
        name: string,
        description: string | null,
        funders: Array< string | null > | null,
        fundersComplete: boolean | null,
        teammembersComplete: boolean | null,
        typeComplete: boolean | null,
      } | null,
      applicationQuestions:  {
        __typename: "ModelApplicationQuestionConnection",
        nextToken: string | null,
      } | null,
    } | null,
    complete: boolean | null,
  } | null,
};

export type DeleteApplicationQuestionMutationVariables = {
  input: DeleteApplicationQuestionInput,
};

export type DeleteApplicationQuestionMutation = {
  deleteApplicationQuestion:  {
    __typename: "ApplicationQuestion",
    id: string,
    heading: string | null,
    title: string | null,
    subtitle: string | null,
    notes: string | null,
    wordLimit: number | null,
    application:  {
      __typename: "Application",
      id: string,
      rank: number,
      openApplication: string | null,
      closeApplication: string | null,
      opportunity:  {
        __typename: "Opportunity",
        id: string,
        name: string,
        description: string | null,
        funders: Array< string | null > | null,
        fundersComplete: boolean | null,
        teammembersComplete: boolean | null,
        typeComplete: boolean | null,
      } | null,
      applicationQuestions:  {
        __typename: "ModelApplicationQuestionConnection",
        nextToken: string | null,
      } | null,
    } | null,
    complete: boolean | null,
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
    funders: Array< string | null > | null,
    fundersComplete: boolean | null,
    teammembers:  {
      __typename: "ModelTeamMemberConnection",
      items:  Array< {
        __typename: "TeamMember",
        id: string,
        name: string,
        role: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    teammembersComplete: boolean | null,
    type:  {
      __typename: "OpportunityType",
      id: string,
      name: string,
      description: string,
      opportunities:  {
        __typename: "Opportunity",
        id: string,
        name: string,
        description: string | null,
        funders: Array< string | null > | null,
        fundersComplete: boolean | null,
        teammembersComplete: boolean | null,
        typeComplete: boolean | null,
      } | null,
    } | null,
    typeComplete: boolean | null,
    websiteListings:  {
      __typename: "ModelWebsiteListingConnection",
      items:  Array< {
        __typename: "WebsiteListing",
        id: string,
        rank: number,
        lastPublished: string | null,
        description: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    application:  {
      __typename: "ModelApplicationConnection",
      items:  Array< {
        __typename: "Application",
        id: string,
        rank: number,
        openApplication: string | null,
        closeApplication: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
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
      funders: Array< string | null > | null,
      fundersComplete: boolean | null,
      teammembers:  {
        __typename: "ModelTeamMemberConnection",
        nextToken: string | null,
      } | null,
      teammembersComplete: boolean | null,
      type:  {
        __typename: "OpportunityType",
        id: string,
        name: string,
        description: string,
      } | null,
      typeComplete: boolean | null,
      websiteListings:  {
        __typename: "ModelWebsiteListingConnection",
        nextToken: string | null,
      } | null,
      application:  {
        __typename: "ModelApplicationConnection",
        nextToken: string | null,
      } | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetTeamMemberQueryVariables = {
  id: string,
};

export type GetTeamMemberQuery = {
  getTeamMember:  {
    __typename: "TeamMember",
    id: string,
    name: string,
    role: string | null,
    opportunity:  {
      __typename: "Opportunity",
      id: string,
      name: string,
      description: string | null,
      funders: Array< string | null > | null,
      fundersComplete: boolean | null,
      teammembers:  {
        __typename: "ModelTeamMemberConnection",
        nextToken: string | null,
      } | null,
      teammembersComplete: boolean | null,
      type:  {
        __typename: "OpportunityType",
        id: string,
        name: string,
        description: string,
      } | null,
      typeComplete: boolean | null,
      websiteListings:  {
        __typename: "ModelWebsiteListingConnection",
        nextToken: string | null,
      } | null,
      application:  {
        __typename: "ModelApplicationConnection",
        nextToken: string | null,
      } | null,
    } | null,
  } | null,
};

export type ListTeamMembersQueryVariables = {
  filter?: ModelTeamMemberFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTeamMembersQuery = {
  listTeamMembers:  {
    __typename: "ModelTeamMemberConnection",
    items:  Array< {
      __typename: "TeamMember",
      id: string,
      name: string,
      role: string | null,
      opportunity:  {
        __typename: "Opportunity",
        id: string,
        name: string,
        description: string | null,
        funders: Array< string | null > | null,
        fundersComplete: boolean | null,
        teammembersComplete: boolean | null,
        typeComplete: boolean | null,
      } | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetOpportunityTypeQueryVariables = {
  id: string,
};

export type GetOpportunityTypeQuery = {
  getOpportunityType:  {
    __typename: "OpportunityType",
    id: string,
    name: string,
    description: string,
    opportunities:  {
      __typename: "Opportunity",
      id: string,
      name: string,
      description: string | null,
      funders: Array< string | null > | null,
      fundersComplete: boolean | null,
      teammembers:  {
        __typename: "ModelTeamMemberConnection",
        nextToken: string | null,
      } | null,
      teammembersComplete: boolean | null,
      type:  {
        __typename: "OpportunityType",
        id: string,
        name: string,
        description: string,
      } | null,
      typeComplete: boolean | null,
      websiteListings:  {
        __typename: "ModelWebsiteListingConnection",
        nextToken: string | null,
      } | null,
      application:  {
        __typename: "ModelApplicationConnection",
        nextToken: string | null,
      } | null,
    } | null,
  } | null,
};

export type ListOpportunityTypesQueryVariables = {
  filter?: ModelOpportunityTypeFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListOpportunityTypesQuery = {
  listOpportunityTypes:  {
    __typename: "ModelOpportunityTypeConnection",
    items:  Array< {
      __typename: "OpportunityType",
      id: string,
      name: string,
      description: string,
      opportunities:  {
        __typename: "Opportunity",
        id: string,
        name: string,
        description: string | null,
        funders: Array< string | null > | null,
        fundersComplete: boolean | null,
        teammembersComplete: boolean | null,
        typeComplete: boolean | null,
      } | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetWebsiteListingQueryVariables = {
  id: string,
};

export type GetWebsiteListingQuery = {
  getWebsiteListing:  {
    __typename: "WebsiteListing",
    id: string,
    rank: number,
    lastPublished: string | null,
    description: string | null,
    opportunity:  {
      __typename: "Opportunity",
      id: string,
      name: string,
      description: string | null,
      funders: Array< string | null > | null,
      fundersComplete: boolean | null,
      teammembers:  {
        __typename: "ModelTeamMemberConnection",
        nextToken: string | null,
      } | null,
      teammembersComplete: boolean | null,
      type:  {
        __typename: "OpportunityType",
        id: string,
        name: string,
        description: string,
      } | null,
      typeComplete: boolean | null,
      websiteListings:  {
        __typename: "ModelWebsiteListingConnection",
        nextToken: string | null,
      } | null,
      application:  {
        __typename: "ModelApplicationConnection",
        nextToken: string | null,
      } | null,
    } | null,
  } | null,
};

export type ListWebsiteListingsQueryVariables = {
  filter?: ModelWebsiteListingFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListWebsiteListingsQuery = {
  listWebsiteListings:  {
    __typename: "ModelWebsiteListingConnection",
    items:  Array< {
      __typename: "WebsiteListing",
      id: string,
      rank: number,
      lastPublished: string | null,
      description: string | null,
      opportunity:  {
        __typename: "Opportunity",
        id: string,
        name: string,
        description: string | null,
        funders: Array< string | null > | null,
        fundersComplete: boolean | null,
        teammembersComplete: boolean | null,
        typeComplete: boolean | null,
      } | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetApplicationQueryVariables = {
  id: string,
};

export type GetApplicationQuery = {
  getApplication:  {
    __typename: "Application",
    id: string,
    rank: number,
    openApplication: string | null,
    closeApplication: string | null,
    opportunity:  {
      __typename: "Opportunity",
      id: string,
      name: string,
      description: string | null,
      funders: Array< string | null > | null,
      fundersComplete: boolean | null,
      teammembers:  {
        __typename: "ModelTeamMemberConnection",
        nextToken: string | null,
      } | null,
      teammembersComplete: boolean | null,
      type:  {
        __typename: "OpportunityType",
        id: string,
        name: string,
        description: string,
      } | null,
      typeComplete: boolean | null,
      websiteListings:  {
        __typename: "ModelWebsiteListingConnection",
        nextToken: string | null,
      } | null,
      application:  {
        __typename: "ModelApplicationConnection",
        nextToken: string | null,
      } | null,
    } | null,
    applicationQuestions:  {
      __typename: "ModelApplicationQuestionConnection",
      items:  Array< {
        __typename: "ApplicationQuestion",
        id: string,
        heading: string | null,
        title: string | null,
        subtitle: string | null,
        notes: string | null,
        wordLimit: number | null,
        complete: boolean | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type ListApplicationsQueryVariables = {
  filter?: ModelApplicationFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListApplicationsQuery = {
  listApplications:  {
    __typename: "ModelApplicationConnection",
    items:  Array< {
      __typename: "Application",
      id: string,
      rank: number,
      openApplication: string | null,
      closeApplication: string | null,
      opportunity:  {
        __typename: "Opportunity",
        id: string,
        name: string,
        description: string | null,
        funders: Array< string | null > | null,
        fundersComplete: boolean | null,
        teammembersComplete: boolean | null,
        typeComplete: boolean | null,
      } | null,
      applicationQuestions:  {
        __typename: "ModelApplicationQuestionConnection",
        nextToken: string | null,
      } | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetApplicationQuestionQueryVariables = {
  id: string,
};

export type GetApplicationQuestionQuery = {
  getApplicationQuestion:  {
    __typename: "ApplicationQuestion",
    id: string,
    heading: string | null,
    title: string | null,
    subtitle: string | null,
    notes: string | null,
    wordLimit: number | null,
    application:  {
      __typename: "Application",
      id: string,
      rank: number,
      openApplication: string | null,
      closeApplication: string | null,
      opportunity:  {
        __typename: "Opportunity",
        id: string,
        name: string,
        description: string | null,
        funders: Array< string | null > | null,
        fundersComplete: boolean | null,
        teammembersComplete: boolean | null,
        typeComplete: boolean | null,
      } | null,
      applicationQuestions:  {
        __typename: "ModelApplicationQuestionConnection",
        nextToken: string | null,
      } | null,
    } | null,
    complete: boolean | null,
  } | null,
};

export type ListApplicationQuestionsQueryVariables = {
  filter?: ModelApplicationQuestionFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListApplicationQuestionsQuery = {
  listApplicationQuestions:  {
    __typename: "ModelApplicationQuestionConnection",
    items:  Array< {
      __typename: "ApplicationQuestion",
      id: string,
      heading: string | null,
      title: string | null,
      subtitle: string | null,
      notes: string | null,
      wordLimit: number | null,
      application:  {
        __typename: "Application",
        id: string,
        rank: number,
        openApplication: string | null,
        closeApplication: string | null,
      } | null,
      complete: boolean | null,
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
    funders: Array< string | null > | null,
    fundersComplete: boolean | null,
    teammembers:  {
      __typename: "ModelTeamMemberConnection",
      items:  Array< {
        __typename: "TeamMember",
        id: string,
        name: string,
        role: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    teammembersComplete: boolean | null,
    type:  {
      __typename: "OpportunityType",
      id: string,
      name: string,
      description: string,
      opportunities:  {
        __typename: "Opportunity",
        id: string,
        name: string,
        description: string | null,
        funders: Array< string | null > | null,
        fundersComplete: boolean | null,
        teammembersComplete: boolean | null,
        typeComplete: boolean | null,
      } | null,
    } | null,
    typeComplete: boolean | null,
    websiteListings:  {
      __typename: "ModelWebsiteListingConnection",
      items:  Array< {
        __typename: "WebsiteListing",
        id: string,
        rank: number,
        lastPublished: string | null,
        description: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    application:  {
      __typename: "ModelApplicationConnection",
      items:  Array< {
        __typename: "Application",
        id: string,
        rank: number,
        openApplication: string | null,
        closeApplication: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type OnUpdateOpportunitySubscription = {
  onUpdateOpportunity:  {
    __typename: "Opportunity",
    id: string,
    name: string,
    description: string | null,
    funders: Array< string | null > | null,
    fundersComplete: boolean | null,
    teammembers:  {
      __typename: "ModelTeamMemberConnection",
      items:  Array< {
        __typename: "TeamMember",
        id: string,
        name: string,
        role: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    teammembersComplete: boolean | null,
    type:  {
      __typename: "OpportunityType",
      id: string,
      name: string,
      description: string,
      opportunities:  {
        __typename: "Opportunity",
        id: string,
        name: string,
        description: string | null,
        funders: Array< string | null > | null,
        fundersComplete: boolean | null,
        teammembersComplete: boolean | null,
        typeComplete: boolean | null,
      } | null,
    } | null,
    typeComplete: boolean | null,
    websiteListings:  {
      __typename: "ModelWebsiteListingConnection",
      items:  Array< {
        __typename: "WebsiteListing",
        id: string,
        rank: number,
        lastPublished: string | null,
        description: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    application:  {
      __typename: "ModelApplicationConnection",
      items:  Array< {
        __typename: "Application",
        id: string,
        rank: number,
        openApplication: string | null,
        closeApplication: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type OnDeleteOpportunitySubscription = {
  onDeleteOpportunity:  {
    __typename: "Opportunity",
    id: string,
    name: string,
    description: string | null,
    funders: Array< string | null > | null,
    fundersComplete: boolean | null,
    teammembers:  {
      __typename: "ModelTeamMemberConnection",
      items:  Array< {
        __typename: "TeamMember",
        id: string,
        name: string,
        role: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    teammembersComplete: boolean | null,
    type:  {
      __typename: "OpportunityType",
      id: string,
      name: string,
      description: string,
      opportunities:  {
        __typename: "Opportunity",
        id: string,
        name: string,
        description: string | null,
        funders: Array< string | null > | null,
        fundersComplete: boolean | null,
        teammembersComplete: boolean | null,
        typeComplete: boolean | null,
      } | null,
    } | null,
    typeComplete: boolean | null,
    websiteListings:  {
      __typename: "ModelWebsiteListingConnection",
      items:  Array< {
        __typename: "WebsiteListing",
        id: string,
        rank: number,
        lastPublished: string | null,
        description: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    application:  {
      __typename: "ModelApplicationConnection",
      items:  Array< {
        __typename: "Application",
        id: string,
        rank: number,
        openApplication: string | null,
        closeApplication: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type OnCreateTeamMemberSubscription = {
  onCreateTeamMember:  {
    __typename: "TeamMember",
    id: string,
    name: string,
    role: string | null,
    opportunity:  {
      __typename: "Opportunity",
      id: string,
      name: string,
      description: string | null,
      funders: Array< string | null > | null,
      fundersComplete: boolean | null,
      teammembers:  {
        __typename: "ModelTeamMemberConnection",
        nextToken: string | null,
      } | null,
      teammembersComplete: boolean | null,
      type:  {
        __typename: "OpportunityType",
        id: string,
        name: string,
        description: string,
      } | null,
      typeComplete: boolean | null,
      websiteListings:  {
        __typename: "ModelWebsiteListingConnection",
        nextToken: string | null,
      } | null,
      application:  {
        __typename: "ModelApplicationConnection",
        nextToken: string | null,
      } | null,
    } | null,
  } | null,
};

export type OnUpdateTeamMemberSubscription = {
  onUpdateTeamMember:  {
    __typename: "TeamMember",
    id: string,
    name: string,
    role: string | null,
    opportunity:  {
      __typename: "Opportunity",
      id: string,
      name: string,
      description: string | null,
      funders: Array< string | null > | null,
      fundersComplete: boolean | null,
      teammembers:  {
        __typename: "ModelTeamMemberConnection",
        nextToken: string | null,
      } | null,
      teammembersComplete: boolean | null,
      type:  {
        __typename: "OpportunityType",
        id: string,
        name: string,
        description: string,
      } | null,
      typeComplete: boolean | null,
      websiteListings:  {
        __typename: "ModelWebsiteListingConnection",
        nextToken: string | null,
      } | null,
      application:  {
        __typename: "ModelApplicationConnection",
        nextToken: string | null,
      } | null,
    } | null,
  } | null,
};

export type OnDeleteTeamMemberSubscription = {
  onDeleteTeamMember:  {
    __typename: "TeamMember",
    id: string,
    name: string,
    role: string | null,
    opportunity:  {
      __typename: "Opportunity",
      id: string,
      name: string,
      description: string | null,
      funders: Array< string | null > | null,
      fundersComplete: boolean | null,
      teammembers:  {
        __typename: "ModelTeamMemberConnection",
        nextToken: string | null,
      } | null,
      teammembersComplete: boolean | null,
      type:  {
        __typename: "OpportunityType",
        id: string,
        name: string,
        description: string,
      } | null,
      typeComplete: boolean | null,
      websiteListings:  {
        __typename: "ModelWebsiteListingConnection",
        nextToken: string | null,
      } | null,
      application:  {
        __typename: "ModelApplicationConnection",
        nextToken: string | null,
      } | null,
    } | null,
  } | null,
};

export type OnCreateOpportunityTypeSubscription = {
  onCreateOpportunityType:  {
    __typename: "OpportunityType",
    id: string,
    name: string,
    description: string,
    opportunities:  {
      __typename: "Opportunity",
      id: string,
      name: string,
      description: string | null,
      funders: Array< string | null > | null,
      fundersComplete: boolean | null,
      teammembers:  {
        __typename: "ModelTeamMemberConnection",
        nextToken: string | null,
      } | null,
      teammembersComplete: boolean | null,
      type:  {
        __typename: "OpportunityType",
        id: string,
        name: string,
        description: string,
      } | null,
      typeComplete: boolean | null,
      websiteListings:  {
        __typename: "ModelWebsiteListingConnection",
        nextToken: string | null,
      } | null,
      application:  {
        __typename: "ModelApplicationConnection",
        nextToken: string | null,
      } | null,
    } | null,
  } | null,
};

export type OnUpdateOpportunityTypeSubscription = {
  onUpdateOpportunityType:  {
    __typename: "OpportunityType",
    id: string,
    name: string,
    description: string,
    opportunities:  {
      __typename: "Opportunity",
      id: string,
      name: string,
      description: string | null,
      funders: Array< string | null > | null,
      fundersComplete: boolean | null,
      teammembers:  {
        __typename: "ModelTeamMemberConnection",
        nextToken: string | null,
      } | null,
      teammembersComplete: boolean | null,
      type:  {
        __typename: "OpportunityType",
        id: string,
        name: string,
        description: string,
      } | null,
      typeComplete: boolean | null,
      websiteListings:  {
        __typename: "ModelWebsiteListingConnection",
        nextToken: string | null,
      } | null,
      application:  {
        __typename: "ModelApplicationConnection",
        nextToken: string | null,
      } | null,
    } | null,
  } | null,
};

export type OnDeleteOpportunityTypeSubscription = {
  onDeleteOpportunityType:  {
    __typename: "OpportunityType",
    id: string,
    name: string,
    description: string,
    opportunities:  {
      __typename: "Opportunity",
      id: string,
      name: string,
      description: string | null,
      funders: Array< string | null > | null,
      fundersComplete: boolean | null,
      teammembers:  {
        __typename: "ModelTeamMemberConnection",
        nextToken: string | null,
      } | null,
      teammembersComplete: boolean | null,
      type:  {
        __typename: "OpportunityType",
        id: string,
        name: string,
        description: string,
      } | null,
      typeComplete: boolean | null,
      websiteListings:  {
        __typename: "ModelWebsiteListingConnection",
        nextToken: string | null,
      } | null,
      application:  {
        __typename: "ModelApplicationConnection",
        nextToken: string | null,
      } | null,
    } | null,
  } | null,
};

export type OnCreateWebsiteListingSubscription = {
  onCreateWebsiteListing:  {
    __typename: "WebsiteListing",
    id: string,
    rank: number,
    lastPublished: string | null,
    description: string | null,
    opportunity:  {
      __typename: "Opportunity",
      id: string,
      name: string,
      description: string | null,
      funders: Array< string | null > | null,
      fundersComplete: boolean | null,
      teammembers:  {
        __typename: "ModelTeamMemberConnection",
        nextToken: string | null,
      } | null,
      teammembersComplete: boolean | null,
      type:  {
        __typename: "OpportunityType",
        id: string,
        name: string,
        description: string,
      } | null,
      typeComplete: boolean | null,
      websiteListings:  {
        __typename: "ModelWebsiteListingConnection",
        nextToken: string | null,
      } | null,
      application:  {
        __typename: "ModelApplicationConnection",
        nextToken: string | null,
      } | null,
    } | null,
  } | null,
};

export type OnUpdateWebsiteListingSubscription = {
  onUpdateWebsiteListing:  {
    __typename: "WebsiteListing",
    id: string,
    rank: number,
    lastPublished: string | null,
    description: string | null,
    opportunity:  {
      __typename: "Opportunity",
      id: string,
      name: string,
      description: string | null,
      funders: Array< string | null > | null,
      fundersComplete: boolean | null,
      teammembers:  {
        __typename: "ModelTeamMemberConnection",
        nextToken: string | null,
      } | null,
      teammembersComplete: boolean | null,
      type:  {
        __typename: "OpportunityType",
        id: string,
        name: string,
        description: string,
      } | null,
      typeComplete: boolean | null,
      websiteListings:  {
        __typename: "ModelWebsiteListingConnection",
        nextToken: string | null,
      } | null,
      application:  {
        __typename: "ModelApplicationConnection",
        nextToken: string | null,
      } | null,
    } | null,
  } | null,
};

export type OnDeleteWebsiteListingSubscription = {
  onDeleteWebsiteListing:  {
    __typename: "WebsiteListing",
    id: string,
    rank: number,
    lastPublished: string | null,
    description: string | null,
    opportunity:  {
      __typename: "Opportunity",
      id: string,
      name: string,
      description: string | null,
      funders: Array< string | null > | null,
      fundersComplete: boolean | null,
      teammembers:  {
        __typename: "ModelTeamMemberConnection",
        nextToken: string | null,
      } | null,
      teammembersComplete: boolean | null,
      type:  {
        __typename: "OpportunityType",
        id: string,
        name: string,
        description: string,
      } | null,
      typeComplete: boolean | null,
      websiteListings:  {
        __typename: "ModelWebsiteListingConnection",
        nextToken: string | null,
      } | null,
      application:  {
        __typename: "ModelApplicationConnection",
        nextToken: string | null,
      } | null,
    } | null,
  } | null,
};

export type OnCreateApplicationSubscription = {
  onCreateApplication:  {
    __typename: "Application",
    id: string,
    rank: number,
    openApplication: string | null,
    closeApplication: string | null,
    opportunity:  {
      __typename: "Opportunity",
      id: string,
      name: string,
      description: string | null,
      funders: Array< string | null > | null,
      fundersComplete: boolean | null,
      teammembers:  {
        __typename: "ModelTeamMemberConnection",
        nextToken: string | null,
      } | null,
      teammembersComplete: boolean | null,
      type:  {
        __typename: "OpportunityType",
        id: string,
        name: string,
        description: string,
      } | null,
      typeComplete: boolean | null,
      websiteListings:  {
        __typename: "ModelWebsiteListingConnection",
        nextToken: string | null,
      } | null,
      application:  {
        __typename: "ModelApplicationConnection",
        nextToken: string | null,
      } | null,
    } | null,
    applicationQuestions:  {
      __typename: "ModelApplicationQuestionConnection",
      items:  Array< {
        __typename: "ApplicationQuestion",
        id: string,
        heading: string | null,
        title: string | null,
        subtitle: string | null,
        notes: string | null,
        wordLimit: number | null,
        complete: boolean | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type OnUpdateApplicationSubscription = {
  onUpdateApplication:  {
    __typename: "Application",
    id: string,
    rank: number,
    openApplication: string | null,
    closeApplication: string | null,
    opportunity:  {
      __typename: "Opportunity",
      id: string,
      name: string,
      description: string | null,
      funders: Array< string | null > | null,
      fundersComplete: boolean | null,
      teammembers:  {
        __typename: "ModelTeamMemberConnection",
        nextToken: string | null,
      } | null,
      teammembersComplete: boolean | null,
      type:  {
        __typename: "OpportunityType",
        id: string,
        name: string,
        description: string,
      } | null,
      typeComplete: boolean | null,
      websiteListings:  {
        __typename: "ModelWebsiteListingConnection",
        nextToken: string | null,
      } | null,
      application:  {
        __typename: "ModelApplicationConnection",
        nextToken: string | null,
      } | null,
    } | null,
    applicationQuestions:  {
      __typename: "ModelApplicationQuestionConnection",
      items:  Array< {
        __typename: "ApplicationQuestion",
        id: string,
        heading: string | null,
        title: string | null,
        subtitle: string | null,
        notes: string | null,
        wordLimit: number | null,
        complete: boolean | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type OnDeleteApplicationSubscription = {
  onDeleteApplication:  {
    __typename: "Application",
    id: string,
    rank: number,
    openApplication: string | null,
    closeApplication: string | null,
    opportunity:  {
      __typename: "Opportunity",
      id: string,
      name: string,
      description: string | null,
      funders: Array< string | null > | null,
      fundersComplete: boolean | null,
      teammembers:  {
        __typename: "ModelTeamMemberConnection",
        nextToken: string | null,
      } | null,
      teammembersComplete: boolean | null,
      type:  {
        __typename: "OpportunityType",
        id: string,
        name: string,
        description: string,
      } | null,
      typeComplete: boolean | null,
      websiteListings:  {
        __typename: "ModelWebsiteListingConnection",
        nextToken: string | null,
      } | null,
      application:  {
        __typename: "ModelApplicationConnection",
        nextToken: string | null,
      } | null,
    } | null,
    applicationQuestions:  {
      __typename: "ModelApplicationQuestionConnection",
      items:  Array< {
        __typename: "ApplicationQuestion",
        id: string,
        heading: string | null,
        title: string | null,
        subtitle: string | null,
        notes: string | null,
        wordLimit: number | null,
        complete: boolean | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type OnCreateApplicationQuestionSubscription = {
  onCreateApplicationQuestion:  {
    __typename: "ApplicationQuestion",
    id: string,
    heading: string | null,
    title: string | null,
    subtitle: string | null,
    notes: string | null,
    wordLimit: number | null,
    application:  {
      __typename: "Application",
      id: string,
      rank: number,
      openApplication: string | null,
      closeApplication: string | null,
      opportunity:  {
        __typename: "Opportunity",
        id: string,
        name: string,
        description: string | null,
        funders: Array< string | null > | null,
        fundersComplete: boolean | null,
        teammembersComplete: boolean | null,
        typeComplete: boolean | null,
      } | null,
      applicationQuestions:  {
        __typename: "ModelApplicationQuestionConnection",
        nextToken: string | null,
      } | null,
    } | null,
    complete: boolean | null,
  } | null,
};

export type OnUpdateApplicationQuestionSubscription = {
  onUpdateApplicationQuestion:  {
    __typename: "ApplicationQuestion",
    id: string,
    heading: string | null,
    title: string | null,
    subtitle: string | null,
    notes: string | null,
    wordLimit: number | null,
    application:  {
      __typename: "Application",
      id: string,
      rank: number,
      openApplication: string | null,
      closeApplication: string | null,
      opportunity:  {
        __typename: "Opportunity",
        id: string,
        name: string,
        description: string | null,
        funders: Array< string | null > | null,
        fundersComplete: boolean | null,
        teammembersComplete: boolean | null,
        typeComplete: boolean | null,
      } | null,
      applicationQuestions:  {
        __typename: "ModelApplicationQuestionConnection",
        nextToken: string | null,
      } | null,
    } | null,
    complete: boolean | null,
  } | null,
};

export type OnDeleteApplicationQuestionSubscription = {
  onDeleteApplicationQuestion:  {
    __typename: "ApplicationQuestion",
    id: string,
    heading: string | null,
    title: string | null,
    subtitle: string | null,
    notes: string | null,
    wordLimit: number | null,
    application:  {
      __typename: "Application",
      id: string,
      rank: number,
      openApplication: string | null,
      closeApplication: string | null,
      opportunity:  {
        __typename: "Opportunity",
        id: string,
        name: string,
        description: string | null,
        funders: Array< string | null > | null,
        fundersComplete: boolean | null,
        teammembersComplete: boolean | null,
        typeComplete: boolean | null,
      } | null,
      applicationQuestions:  {
        __typename: "ModelApplicationQuestionConnection",
        nextToken: string | null,
      } | null,
    } | null,
    complete: boolean | null,
  } | null,
};
