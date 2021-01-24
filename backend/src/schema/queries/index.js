const graphql = require('graphql');
const { GraphQLObjectType } = graphql;

const { getMigrant, getMigrants } = require('./migrant');

const query = new GraphQLObjectType({
  name: 'Query',
  fields: {
    getMigrant,
    getMigrants,
  },
});

module.exports = query;
