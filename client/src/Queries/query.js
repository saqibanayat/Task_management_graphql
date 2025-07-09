import {gql} from '@apollo/client'

export const Get_users = gql`
query {
    users{
        id
        name
        email
    }
}
`;
export const Single_users = gql`
query ($id:ID!){
    user(id:$id){
        id
        name
        email
        password
    }
}
`;
export const TASK_LIST = gql`
query{
    tasks {
        id
        title
        description
        user {
            id
            name
            email
        }
    }
}
`;