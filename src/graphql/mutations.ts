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
    websiteListings {
      items {
        id
        rank
        lastPublished
        description
      }
      nextToken
    }
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
    websiteListings {
      items {
        id
        rank
        lastPublished
        description
      }
      nextToken
    }
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
    websiteListings {
      items {
        id
        rank
        lastPublished
        description
      }
      nextToken
    }
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
    }
  }
}
`;
