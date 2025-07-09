import { gql } from "@apollo/client";

export const DELETE_USER = gql`
  mutation ($id: ID!) {
    deleteUser(id: $id) {
      name
    }
  }
`;
export const ADD_USER =gql`
mutation($name:String!,$email:String!,$password:String!){
    addUser(name:$name,email:$email,password:$password){
id
name
    }
}
`;
export const Edit_user =gql`
mutation($id:ID!,$name:String,$email:String){
  updateUser(id:$id,name:$name,email:$email){
id
name
email
password
    }
}
`;
export const DELETE_TASK = gql`
  mutation($id: ID!) {
    deleteTask(id: $id) {
      title
      description
    }
  }
`;

export const ADD_TASK = gql`
mutation($title: String!, $description: String!, $userId: ID!){
  addTask(title: $title, description: $description, userId: $userId) {
    title
    description
  }
}
`