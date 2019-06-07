// tslint:disable
// this is an auto generated file. This will be overwritten

export const getOpportunity = `query GetOpportunity($id: ID!) {
  getOpportunity(id: $id) {
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
export const listOpportunitys = `query ListOpportunitys(
  $filter: ModelOpportunityFilterInput
  $limit: Int
  $nextToken: String
) {
  listOpportunitys(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
  }
}
`;
export const getTeamMember = `query GetTeamMember($id: ID!) {
  getTeamMember(id: $id) {
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
export const listTeamMembers = `query ListTeamMembers(
  $filter: ModelTeamMemberFilterInput
  $limit: Int
  $nextToken: String
) {
  listTeamMembers(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      role
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
    }
    nextToken
  }
}
`;
export const getOpportunityType = `query GetOpportunityType($id: ID!) {
  getOpportunityType(id: $id) {
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
export const listOpportunityTypes = `query ListOpportunityTypes(
  $filter: ModelOpportunityTypeFilterInput
  $limit: Int
  $nextToken: String
) {
  listOpportunityTypes(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
  }
}
`;
export const getWebsiteListing = `query GetWebsiteListing($id: ID!) {
  getWebsiteListing(id: $id) {
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
export const listWebsiteListings = `query ListWebsiteListings(
  $filter: ModelWebsiteListingFilterInput
  $limit: Int
  $nextToken: String
) {
  listWebsiteListings(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
        teammembersComplete
        typeComplete
        opportunityComplete
      }
    }
    nextToken
  }
}
`;
export const getApplication = `query GetApplication($id: ID!) {
  getApplication(id: $id) {
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
export const listApplications = `query ListApplications(
  $filter: ModelApplicationFilterInput
  $limit: Int
  $nextToken: String
) {
  listApplications(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
  }
}
`;
export const getApplicationQuestion = `query GetApplicationQuestion($id: ID!) {
  getApplicationQuestion(id: $id) {
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
export const listApplicationQuestions = `query ListApplicationQuestions(
  $filter: ModelApplicationQuestionFilterInput
  $limit: Int
  $nextToken: String
) {
  listApplicationQuestions(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
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
      }
      complete
    }
    nextToken
  }
}
`;
