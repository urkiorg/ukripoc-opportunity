// tslint:disable
// this is an auto generated file. This will be overwritten

export const getOpportunity = `query GetOpportunity($id: ID!) {
  getOpportunity(id: $id) {
    id
    name
    description
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
    }
    nextToken
  }
}
`;
