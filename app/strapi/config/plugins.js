module.exports = {
  //
  graphql: {
    endpoint: "/graphql",
    shadowCRUD: true,
    playgroundAlways: false,
    depthLimit: 10,
    amountLimit: 100,
    apolloServer: {
      tracing: false,
    },
  },
};
