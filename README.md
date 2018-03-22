# GraphQL-GettinStarted

## What is GraphQL?

It is a query language for your API
GraphQL is a query language for APIs and a runtime for fulfilling those queries with your existing data. GraphQL provides a complete and understandable description of the data in your API, gives clients the power to ask for exactly what they need and nothing more, makes it easier to evolve APIs over time, and enables powerful developer tools.

## Result so far
In order to move my first steps in this technology, I started this project to follow the GraphQL tutorial.
First of all I've created a GraphQl schema, then a root to fill it in.
At the end, using ExpressJS and graphqlHTTP I have been able to open the GraphiQL tool and create my API using the schema and the root I've created

![](https://image.ibb.co/bVvGCx/Screen_Shot_2018_03_22_at_12_20_55.png)

## How to use it

1) Clone the project
```
git clone git@github.com:Vanals/GraphQL-GettinStarted.git
```

2) Changes into the project directory on ur computer via Terminal
```
cd GraphQL-GettinStarted
```

3) Open open the GraphiQL tool in your browser
```
node server.js
```

4) Create the API writing in the left side the following code, then press the PLAY button.
```
{
  hello
}
```
