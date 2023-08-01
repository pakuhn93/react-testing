const { Timestamp } = require('../models');

const resolvers = { 
    Query: {
        timestamps: async () => {
            return Timestamp.find({});
        }
    },

    Mutation: {
        addTimestamp: async (parent, args) => {
            const timestamp = await Timestamp.create(args);
            return timestamp;
        }
    }
}

module.exports = resolvers;