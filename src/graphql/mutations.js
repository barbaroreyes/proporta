/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createProjectPro = /* GraphQL */ `
  mutation CreateProjectPro(
    $input: CreateProjectProInput!
    $condition: ModelProjectProConditionInput
  ) {
    createProjectPro(input: $input, condition: $condition) {
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
export const updateProjectPro = /* GraphQL */ `
  mutation UpdateProjectPro(
    $input: UpdateProjectProInput!
    $condition: ModelProjectProConditionInput
  ) {
    updateProjectPro(input: $input, condition: $condition) {
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
export const deleteProjectPro = /* GraphQL */ `
  mutation DeleteProjectPro(
    $input: DeleteProjectProInput!
    $condition: ModelProjectProConditionInput
  ) {
    deleteProjectPro(input: $input, condition: $condition) {
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
