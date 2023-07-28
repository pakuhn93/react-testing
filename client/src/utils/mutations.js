import { gql } from '@apollo/client';

export const ADD_TIMESTAMP = gql`
    mutation addTimestamp($time: String!){
        addTimestamp(time: $time){
            _id
            time
        }
    }
`;