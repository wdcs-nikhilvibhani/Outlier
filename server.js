const http = require('http')

const PORT = process.env.PORT || 3000
//base64 changes
const server = http.createServer((req, res) => {
  if (req.url === '/') return respondHello(req, res)

  res.end()
})
//master changes
function respondHello (req, res) {
  res.end(JSON.stringify({ msg: 'hello' }))
}

server.listen(PORT)
console.log(`Server listening on port ${PORT}`)

if (require.main !== module) module.exports = server
