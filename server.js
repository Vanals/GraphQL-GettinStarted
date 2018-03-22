var { graphql, buildSchema } = require('graphql')

//Construct a schema, using GraphQL schema language
var schema = buildSchema(`
type Query {
  hello: String
}
`);

// The root provides a resolver function for each API endpoint
let root = {
  hello: () => {
    return 'Hello world!';
  },
};

// Run the GraphQl query '{ hello }' and print out the response
graphql(schema, '{ hello }', root).then((response) => {
  console.log(response);
});
