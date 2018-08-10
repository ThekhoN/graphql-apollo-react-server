const express = require("express");
const graphqlHTTP = require("express-graphql");
const schema = require("./schema/schema");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());

// connect to db@mlab
mongoose.connect(
  "mongodb://thekho:thekho123@ds217002.mlab.com:17002/gql-beginner"
);
mongoose.connection.once("open", () => {
  console.log("we are connected to the remote DB!");
});

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true
  })
);

app.listen(4000, () => {
  console.log("now listening on: ", 4000);
});
