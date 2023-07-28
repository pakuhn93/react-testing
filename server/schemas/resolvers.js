const { Timestamp } = require('../models');

const resolvers = { 
    Query: {
        timestamps: async () => {
            return Timestamp.find({});
        }
    },

    Mutation: {
        createTimestamp: async (parent, args) => {
            const timestamp = await Timestamp.create(args);
            return timestamp;
        }
    }
}

module.exports = resolvers;