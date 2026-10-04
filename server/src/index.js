const path = require("path")
require("dotenv").config({ path: path.join(__dirname, "../.env") })

const app = require("./app")
const connectDatabase = require("./db/mongoose")

const port = process.env.PORT || 5050

const start = async () => {
  await connectDatabase()
  app.listen(port, () => {
    console.log(`Assessment API running on http://localhost:${port}`)
  })
}

start().catch((error) => {
  console.error("Failed to start server", error)
  process.exit(1)
})
