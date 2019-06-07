// tslint:disable
// this is an auto generated file. This will be overwritten

export const createOpportunity = `mutation CreateOpportunity($input: CreateOpportunityInput!) {
  createOpportunity(input: $input) {
    id
    name
    description
    funders
    fundersComplete
    teammembers {
      items {
        id
        name
        role
      }
      nextToken
    }
    teammembersComplete
    type {
      id
      name
      description
      opportunities {
        id
        name
        description
        funders
        fundersComplete
        teammembersComplete
        typeComplete
        opportunityComplete
      }
    }
    typeComplete
    websiteListings {
      items {
        id
        rank
        lastPublished
        description
      }
      nextToken
    }
    application {
      items {
        id
        rank
        openApplication
        closeApplication
      }
      nextToken
    }
    opportunityComplete
  }
}
`;
export const updateOpportunity = `mutation UpdateOpportunity($input: UpdateOpportunityInput!) {
  updateOpportunity(input: $input) {
    id
    name
    description
    funders
    fundersComplete
    teammembers {
      items {
        id
        name
        role
      }
      nextToken
    }
    teammembersComplete
    type {
      id
      name
      description
      opportunities {
        id
        name
        description
        funders
        fundersComplete
        teammembersComplete
        typeComplete
        opportunityComplete
      }
    }
    typeComplete
    websiteListings {
      items {
        id
        rank
        lastPublished
        description
      }
      nextToken
    }
    application {
      items {
        id
        rank
        openApplication
        closeApplication
      }
      nextToken
    }
    opportunityComplete
  }
}
`;
export const deleteOpportunity = `mutation DeleteOpportunity($input: DeleteOpportunityInput!) {
  deleteOpportunity(input: $input) {
    id
    name
    description
    funders
    fundersComplete
    teammembers {
      items {
        id
        name
        role
      }
      nextToken
    }
    teammembersComplete
    type {
      id
      name
      description
      opportunities {
        id
        name
        description
        funders
        fundersComplete
        teammembersComplete
        typeComplete
        opportunityComplete
      }
    }
    typeComplete
    websiteListings {
      items {
        id
        rank
        lastPublished
        description
      }
      nextToken
    }
    application {
      items {
        id
        rank
        openApplication
        closeApplication
      }
      nextToken
    }
    opportunityComplete
  }
}
`;
export const createTeamMember = `mutation CreateTeamMember($input: CreateTeamMemberInput!) {
  createTeamMember(input: $input) {
    id
    name
    role
    opportunity {
      id
      name
      description
      funders
      fundersComplete
      teammembers {
        nextToken
      }
      teammembersComplete
      type {
        id
        name
        description
      }
      typeComplete
      websiteListings {
        nextToken
      }
      application {
        nextToken
      }
      opportunityComplete
    }
  }
}
`;
export const updateTeamMember = `mutation UpdateTeamMember($input: UpdateTeamMemberInput!) {
  updateTeamMember(input: $input) {
    id
    name
    role
    opportunity {
      id
      name
      description
      funders
      fundersComplete
      teammembers {
        nextToken
      }
      teammembersComplete
      type {
        id
        name
        description
      }
      typeComplete
      websiteListings {
        nextToken
      }
      application {
        nextToken
      }
      opportunityComplete
    }
  }
}
`;
export const deleteTeamMember = `mutation DeleteTeamMember($input: DeleteTeamMemberInput!) {
  deleteTeamMember(input: $input) {
    id
    name
    role
    opportunity {
      id
      name
      description
      funders
      fundersComplete
      teammembers {
        nextToken
      }
      teammembersComplete
      type {
        id
        name
        description
      }
      typeComplete
      websiteListings {
        nextToken
      }
      application {
        nextToken
      }
      opportunityComplete
    }
  }
}
`;
export const createOpportunityType = `mutation CreateOpportunityType($input: CreateOpportunityTypeInput!) {
  createOpportunityType(input: $input) {
    id
    name
    description
    opportunities {
      id
      name
      description
      funders
      fundersComplete
      teammembers {
        nextToken
      }
      teammembersComplete
      type {
        id
        name
        description
      }
      typeComplete
      websiteListings {
        nextToken
      }
      application {
        nextToken
      }
      opportunityComplete
    }
  }
}
`;
export const updateOpportunityType = `mutation UpdateOpportunityType($input: UpdateOpportunityTypeInput!) {
  updateOpportunityType(input: $input) {
    id
    name
    description
    opportunities {
      id
      name
      description
      funders
      fundersComplete
      teammembers {
        nextToken
      }
      teammembersComplete
      type {
        id
        name
        description
      }
      typeComplete
      websiteListings {
        nextToken
      }
      application {
        nextToken
      }
      opportunityComplete
    }
  }
}
`;
export const deleteOpportunityType = `mutation DeleteOpportunityType($input: DeleteOpportunityTypeInput!) {
  deleteOpportunityType(input: $input) {
    id
    name
    description
    opportunities {
      id
      name
      description
      funders
      fundersComplete
      teammembers {
        nextToken
      }
      teammembersComplete
      type {
        id
        name
        description
      }
      typeComplete
      websiteListings {
        nextToken
      }
      application {
        nextToken
      }
      opportunityComplete
    }
  }
}
`;
export const createWebsiteListing = `mutation CreateWebsiteListing($input: CreateWebsiteListingInput!) {
  createWebsiteListing(input: $input) {
    id
    rank
    lastPublished
    description
    opportunity {
      id
      name
      description
      funders
      fundersComplete
      teammembers {
        nextToken
      }
      teammembersComplete
      type {
        id
        name
        description
      }
      typeComplete
      websiteListings {
        nextToken
      }
      application {
        nextToken
      }
      opportunityComplete
    }
  }
}
`;
export const updateWebsiteListing = `mutation UpdateWebsiteListing($input: UpdateWebsiteListingInput!) {
  updateWebsiteListing(input: $input) {
    id
    rank
    lastPublished
    description
    opportunity {
      id
      name
      description
      funders
      fundersComplete
      teammembers {
        nextToken
      }
      teammembersComplete
      type {
        id
        name
        description
      }
      typeComplete
      websiteListings {
        nextToken
      }
      application {
        nextToken
      }
      opportunityComplete
    }
  }
}
`;
export const deleteWebsiteListing = `mutation DeleteWebsiteListing($input: DeleteWebsiteListingInput!) {
  deleteWebsiteListing(input: $input) {
    id
    rank
    lastPublished
    description
    opportunity {
      id
      name
      description
      funders
      fundersComplete
      teammembers {
        nextToken
      }
      teammembersComplete
      type {
        id
        name
        description
      }
      typeComplete
      websiteListings {
        nextToken
      }
      application {
        nextToken
      }
      opportunityComplete
    }
  }
}
`;
export const createApplication = `mutation CreateApplication($input: CreateApplicationInput!) {
  createApplication(input: $input) {
    id
    rank
    openApplication
    closeApplication
    opportunity {
      id
      name
      description
      funders
      fundersComplete
      teammembers {
        nextToken
      }
      teammembersComplete
      type {
        id
        name
        description
      }
      typeComplete
      websiteListings {
        nextToken
      }
      application {
        nextToken
      }
      opportunityComplete
    }
    applicationQuestions {
      items {
        id
        heading
        title
        subtitle
        notes
        wordLimit
        complete
      }
      nextToken
    }
  }
}
`;
export const updateApplication = `mutation UpdateApplication($input: UpdateApplicationInput!) {
  updateApplication(input: $input) {
    id
    rank
    openApplication
    closeApplication
    opportunity {
      id
      name
      description
      funders
      fundersComplete
      teammembers {
        nextToken
      }
      teammembersComplete
      type {
        id
        name
        description
      }
      typeComplete
      websiteListings {
        nextToken
      }
      application {
        nextToken
      }
      opportunityComplete
    }
    applicationQuestions {
      items {
        id
        heading
        title
        subtitle
        notes
        wordLimit
        complete
      }
      nextToken
    }
  }
}
`;
export const deleteApplication = `mutation DeleteApplication($input: DeleteApplicationInput!) {
  deleteApplication(input: $input) {
    id
    rank
    openApplication
    closeApplication
    opportunity {
      id
      name
      description
      funders
      fundersComplete
      teammembers {
        nextToken
      }
      teammembersComplete
      type {
        id
        name
        description
      }
      typeComplete
      websiteListings {
        nextToken
      }
      application {
        nextToken
      }
      opportunityComplete
    }
    applicationQuestions {
      items {
        id
        heading
        title
        subtitle
        notes
        wordLimit
        complete
      }
      nextToken
    }
  }
}
`;
export const createApplicationQuestion = `mutation CreateApplicationQuestion($input: CreateApplicationQuestionInput!) {
  createApplicationQuestion(input: $input) {
    id
    heading
    title
    subtitle
    notes
    wordLimit
    application {
      id
      rank
      openApplication
      closeApplication
      opportunity {
        id
        name
        description
        funders
        fundersComplete
        teammembersComplete
        typeComplete
        opportunityComplete
      }
      applicationQuestions {
        nextToken
      }
    }
    complete
  }
}
`;
export const updateApplicationQuestion = `mutation UpdateApplicationQuestion($input: UpdateApplicationQuestionInput!) {
  updateApplicationQuestion(input: $input) {
    id
    heading
    title
    subtitle
    notes
    wordLimit
    application {
      id
      rank
      openApplication
      closeApplication
      opportunity {
        id
        name
        description
        funders
        fundersComplete
        teammembersComplete
        typeComplete
        opportunityComplete
      }
      applicationQuestions {
        nextToken
      }
    }
    complete
  }
}
`;
export const deleteApplicationQuestion = `mutation DeleteApplicationQuestion($input: DeleteApplicationQuestionInput!) {
  deleteApplicationQuestion(input: $input) {
    id
    heading
    title
    subtitle
    notes
    wordLimit
    application {
      id
      rank
      openApplication
      closeApplication
      opportunity {
        id
        name
        description
        funders
        fundersComplete
        teammembersComplete
        typeComplete
        opportunityComplete
      }
      applicationQuestions {
        nextToken
      }
    }
    complete
  }
}
`;
