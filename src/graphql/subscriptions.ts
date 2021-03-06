// tslint:disable
// this is an auto generated file. This will be overwritten

export const onCreateOpportunity = `subscription OnCreateOpportunity {
  onCreateOpportunity {
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
export const onUpdateOpportunity = `subscription OnUpdateOpportunity {
  onUpdateOpportunity {
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
export const onDeleteOpportunity = `subscription OnDeleteOpportunity {
  onDeleteOpportunity {
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
export const onCreateTeamMember = `subscription OnCreateTeamMember {
  onCreateTeamMember {
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
export const onUpdateTeamMember = `subscription OnUpdateTeamMember {
  onUpdateTeamMember {
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
export const onDeleteTeamMember = `subscription OnDeleteTeamMember {
  onDeleteTeamMember {
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
export const onCreateOpportunityType = `subscription OnCreateOpportunityType {
  onCreateOpportunityType {
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
export const onUpdateOpportunityType = `subscription OnUpdateOpportunityType {
  onUpdateOpportunityType {
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
export const onDeleteOpportunityType = `subscription OnDeleteOpportunityType {
  onDeleteOpportunityType {
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
export const onCreateWebsiteListing = `subscription OnCreateWebsiteListing {
  onCreateWebsiteListing {
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
export const onUpdateWebsiteListing = `subscription OnUpdateWebsiteListing {
  onUpdateWebsiteListing {
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
export const onDeleteWebsiteListing = `subscription OnDeleteWebsiteListing {
  onDeleteWebsiteListing {
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
export const onCreateApplication = `subscription OnCreateApplication {
  onCreateApplication {
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
export const onUpdateApplication = `subscription OnUpdateApplication {
  onUpdateApplication {
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
export const onDeleteApplication = `subscription OnDeleteApplication {
  onDeleteApplication {
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
export const onCreateApplicationQuestion = `subscription OnCreateApplicationQuestion {
  onCreateApplicationQuestion {
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
export const onUpdateApplicationQuestion = `subscription OnUpdateApplicationQuestion {
  onUpdateApplicationQuestion {
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
export const onDeleteApplicationQuestion = `subscription OnDeleteApplicationQuestion {
  onDeleteApplicationQuestion {
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
