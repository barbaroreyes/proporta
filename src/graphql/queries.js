/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getProjectPro = /* GraphQL */ `
  query GetProjectPro($id: ID!) {
    getProjectPro(id: $id) {
      id
      name
      github
      app
      image
      skills
      createdAt
      updatedAt
    }
  }
`;
export const listProjectPros = /* GraphQL */ `
  query ListProjectPros(
    $filter: ModelProjectProFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProjectPros(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        github
        app
        image
        skills
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
