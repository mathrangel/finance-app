const express = require('express')

const app = express()
const PORT = process.env.PORT || 3000

app.use(express.json())

app.use('/', (req, res) => {
    res.send({msg: 'Hello World'})
})

app.listen(PORT, () => console.log(`server is running on port ${PORT}`))