import { gql } from '@apollo/client';

export const QUERY_TIMESTAMPS = gql`
    query getTimestamps {
        timestamps {
            _id
            time
        }
    }
`;