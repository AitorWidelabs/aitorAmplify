/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createNote = /* GraphQL */ `
  mutation createNote(
    $input: CreateTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    createNote(input: $input, condition: $condition) {
      id
      name
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateList = /* GraphQL */ `
  mutation updateList(
    $input: UpdateTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    updateList(input: $input, condition: $condition) {
      id
      name
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteNote = /* GraphQL */ `
  mutation deleteNote(
    $input: DeleteTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    deleteNote(input: $input, condition: $condition) {
      id
      name
      createdAt
      updatedAt
      owner
    }
  }
`;
