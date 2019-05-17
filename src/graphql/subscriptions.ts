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
