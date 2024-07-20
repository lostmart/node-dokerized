const express = require("express")
const app = express()
const port = 3000

// Define a route handler for the default home page
app.get("/", (req, res) => {
    res.json({
        msg: "el ninja esta cercano"
    })
})

// Start the server
app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`)
})
