import { request } from 'graphql-request'
const endPoint = `http://localhost:4000`

const query = `
Query {
    totalDays
}`

const opts = {
  methods: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ query })
}

request(endPoint, opts)
  .then(res => res.jspn())
  .then(({ data }) => `totalDays: ${data.totalDays}`)
  .then(console.log)
  .catch(console.error)
