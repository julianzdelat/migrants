const graphql = require('graphql');
const { GraphQLObjectType } = graphql;

const { createMigrant } = require('./migrant');

const mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    createMigrant,
  },
});

module.exports = mutation;
