const { ApolloServer } = require('apollo-server')

const typeDefs = `
type Query {
    "Count total days of rain in winter"
    totalDays: Int
}`

const resolvers = {
  Query: {
    totalDays: () => 100
  }
}

const server = new ApolloServer({
  typeDefs,
  resolvers
})

server
  .listen()
  .then(({ url }) => `GraphQl server running on ${url}`)
  .then(console.log)
  .catch(console.error)
