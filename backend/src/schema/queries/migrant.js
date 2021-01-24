const graphql = require('graphql');
const axios = require('axios');

const { MigrantType } = require('../types');

const { GraphQLList, GraphQLString } = graphql;

const getMigrant = {
  type: MigrantType,
  args: { migrantId: { type: GraphQLString } },
  resolve(parentValue, { migrantId }) {
    return axios
      .get(`http://localhost:3002/migrants/${migrantId}`)
      .then((res) => res.data);
  },
};

const getMigrants = {
  type: new GraphQLList(MigrantType),
  resolve(parentValue) {
    return axios.get('http://localhost:3002/migrants').then((res) => res.data);
  },
};

module.exports = {
  getMigrant,
  getMigrants,
};
