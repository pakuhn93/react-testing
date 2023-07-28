const { Timestamp } = require('../models');

const resolvers = { 
    Query: {
        timestamps: async () => {
            return Timestamp.find({});
        }
    }
}

module.exports = resolvers;