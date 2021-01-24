const graphql = require('graphql');
const axios = require('axios');

const { MigrantType } = require('../types');

const {
  GraphQLInputObjectType,
  GraphQLNonNull,
  GraphQLString,
  GraphQLInt,
} = graphql;

const CreateMigrantArgs = new GraphQLInputObjectType({
  name: 'CreateMigrantArgs',
  fields: () => ({
    firstName: { type: GraphQLString },
    lastName: { type: GraphQLString },
    age: { type: GraphQLInt },
  }),
});

const createMigrant = {
  type: MigrantType,
  args: {
    input: {
      type: new GraphQLNonNull(CreateMigrantArgs),
    },
  },
  resolve(parentValue, { input }) {
    return axios
      .post('http://localhost:3002/migrants', input)
      .then((res) => res.data);
  },
};

module.exports = {
  createMigrant,
};
