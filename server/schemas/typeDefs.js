const typeDefs = `
    type Timestamp {
        _id: ID!
        time: String!
    }

    type Query {
        timestamps: [Timestamp]
    }

    type Mutation {
        addTimestamp(time: String!): Timestamp
    }
`;

module.exports = typeDefs;