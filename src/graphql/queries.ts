// tslint:disable
// this is an auto generated file. This will be overwritten

export const getOpportunity = `query GetOpportunity($id: ID!) {
  getOpportunity(id: $id) {
    id
    name
    description
    funders {
      items {
        id
        name
      }
      nextToken
    }
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
        fundersComplete
        teammembersComplete
        typeComplete
      }
    }
    typeComplete
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
      funders {
        nextToken
      }
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
    }
    nextToken
  }
}
`;
export const getFunder = `query GetFunder($id: ID!) {
  getFunder(id: $id) {
    id
    name
    opportunities {
      id
      name
      description
      funders {
        nextToken
      }
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
    }
  }
}
`;
export const listFunders = `query ListFunders(
  $filter: ModelFunderFilterInput
  $limit: Int
  $nextToken: String
) {
  listFunders(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      opportunities {
        id
        name
        description
        fundersComplete
        teammembersComplete
        typeComplete
      }
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
      funders {
        nextToken
      }
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
        fundersComplete
        teammembersComplete
        typeComplete
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
      funders {
        nextToken
      }
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
        fundersComplete
        teammembersComplete
        typeComplete
      }
    }
    nextToken
  }
}
`;
