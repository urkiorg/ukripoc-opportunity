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
      }
    }
    typeComplete
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
      }
    }
    typeComplete
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
      }
    }
    typeComplete
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
    }
  }
}
`;
