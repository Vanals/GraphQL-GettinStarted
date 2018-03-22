// var { graphql, buildSchema } = require('graphql');
var express = require('express');
var graphqlHTTP = require('express-graphql');
var { buildSchema } = require('graphql');

//Construct a schema, using GraphQL schema language (Schema of the API, which will be filled in)
var schema = buildSchema(`
type Query {
  hello: String
}
`);

// The root provides a resolver function for each API endpoint
let root = {
  hello: () => {
    return 'Hello Marco!';
  },
};

var app = express();
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));

app.listen(4000);
console.log('Running a GraphQL API server at localhost:4000/graphql')
// Once there u will find the GraphiQL tool.
// There, on the left you can run the query 'hello'(function we create below)
// running that you will use what is returned to fil in the schema, which will be returned on the right


// Run the GraphQl query '{ hello }' and print out the response
// graphql(schema, '{ hello }', root).then((response) => {
//   console.log(response);
// });
