// tslint:disable
// this is an auto generated file. This will be overwritten

export const onCreateOpportunity = `subscription OnCreateOpportunity {
  onCreateOpportunity {
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
    teammembers {
      items {
        id
        name
        role
      }
      nextToken
    }
    type {
      id
      name
      description
      opportunities {
        id
        name
        description
      }
    }
  }
}
`;
export const onUpdateOpportunity = `subscription OnUpdateOpportunity {
  onUpdateOpportunity {
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
    teammembers {
      items {
        id
        name
        role
      }
      nextToken
    }
    type {
      id
      name
      description
      opportunities {
        id
        name
        description
      }
    }
  }
}
`;
export const onDeleteOpportunity = `subscription OnDeleteOpportunity {
  onDeleteOpportunity {
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
    teammembers {
      items {
        id
        name
        role
      }
      nextToken
    }
    type {
      id
      name
      description
      opportunities {
        id
        name
        description
      }
    }
  }
}
`;
export const onCreateFunder = `subscription OnCreateFunder {
  onCreateFunder {
    id
    name
    opportunities {
      id
      name
      description
      funders {
        nextToken
      }
      teammembers {
        nextToken
      }
      type {
        id
        name
        description
      }
    }
  }
}
`;
export const onUpdateFunder = `subscription OnUpdateFunder {
  onUpdateFunder {
    id
    name
    opportunities {
      id
      name
      description
      funders {
        nextToken
      }
      teammembers {
        nextToken
      }
      type {
        id
        name
        description
      }
    }
  }
}
`;
export const onDeleteFunder = `subscription OnDeleteFunder {
  onDeleteFunder {
    id
    name
    opportunities {
      id
      name
      description
      funders {
        nextToken
      }
      teammembers {
        nextToken
      }
      type {
        id
        name
        description
      }
    }
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
      funders {
        nextToken
      }
      teammembers {
        nextToken
      }
      type {
        id
        name
        description
      }
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
      funders {
        nextToken
      }
      teammembers {
        nextToken
      }
      type {
        id
        name
        description
      }
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
      funders {
        nextToken
      }
      teammembers {
        nextToken
      }
      type {
        id
        name
        description
      }
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
      funders {
        nextToken
      }
      teammembers {
        nextToken
      }
      type {
        id
        name
        description
      }
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
      funders {
        nextToken
      }
      teammembers {
        nextToken
      }
      type {
        id
        name
        description
      }
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
      funders {
        nextToken
      }
      teammembers {
        nextToken
      }
      type {
        id
        name
        description
      }
    }
  }
}
`;
