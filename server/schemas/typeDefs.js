const typeDefs = `
    type Timestamp {
        _id: ID!
        time: String!
    }

    type Query {
        timestamp: [Timestamp]
    }
`;

module.exports = typeDefs;